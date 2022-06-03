/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-syntax */
import { GET_IN_URL, TAG_ME_URL } from '@constants/reservation-provider.constants';
import { DayOfTheWeek } from '@enums/date.enums';
import {
  GetInRestaurantAvailableDates, TagMeRestaurantInfo, TagMeRestaurantReservation, TagMeRestaurantSection
} from '@features/reservation-provider/reservation-provider.interfaces';
import { RestaurantTimeRangeAlert } from '@features/restaurant/restaurant.sdk';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { DateUtils } from '@utils/date.utils';

import { RESERVATION_PROVIDER_NOT_FOUND_ERROR } from './reservation-provider.error';
import { ReservationProviderRepository } from './reservation-provider.repository';

@Injectable()
export class ReservationProviderService {

  constructor(
    private reservationProviderRepository: ReservationProviderRepository,
    private gotService: GotService,
    private dateUtils: DateUtils
  ) { }

  async getReservationProviderByName(accessToken: string, name: string) {
    const reservationProvider = await this.reservationProviderRepository.getReservationProviderByName(accessToken, name);

    if (!reservationProvider) throw new NotFoundException(RESERVATION_PROVIDER_NOT_FOUND_ERROR);

    return reservationProvider;
  }

  // Tag Me

  private getTagMeRestaurantReservations(idReservation: string, apitoken: string) {
    return this.gotService.get()(
      `${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`,
      {
        headers: {
          apitoken
        }
      }).json<TagMeRestaurantInfo>();
  }

  private checkIfDayIsOnAWeekend(day: DayOfTheWeek): boolean {
    return day === DayOfTheWeek.SATURDAY || day === DayOfTheWeek.SUNDAY;
  }

  private getTagMeAvailableDaysOnWeekend(days: TagMeRestaurantReservation[]): TagMeRestaurantReservation[] {
    return days.filter(({ reservationDay, available }) =>
      this.checkIfDayIsOnAWeekend(this.dateUtils.getDateDayOfTheWeek(this.dateUtils.stringToDate(reservationDay))) && available
    );
  }

  private getTagMeDayAvailableTimes(section: TagMeRestaurantSection): string[] {
    return section?.schedules?.map(
      ({ reservationTimes }) => reservationTimes?.map(({ reservationTime }) => reservationTime)
    ).map(times => times[0]);
  }

  private checkIfOneTagMeAvailableTimeIsWithinOneTimeRangeAlert(
    availableTimes: string[], timeRangeAlert: RestaurantTimeRangeAlert[]
  ): boolean {
    for (const time of availableTimes) {
      for (const { start_time, end_time } of timeRangeAlert) {
        if (this.dateUtils.checkIfTimeIsWithinTimeRange(time, start_time, end_time)) return true;
      }
    }

    return false;
  }

  private checkIfTagMeAvailableDaysHaveOneTimeOnRestaurantTimeRangeAlert(
    days: TagMeRestaurantReservation[], timeRangeAlerts: RestaurantTimeRangeAlert[], tagMeSectionId: string
  ): boolean {
    try {
      for (const { sections } of days) {
        const availableTimes = this.getTagMeDayAvailableTimes(sections.find(({ id }) => tagMeSectionId === id));

        if (availableTimes && this.checkIfOneTagMeAvailableTimeIsWithinOneTimeRangeAlert(availableTimes, timeRangeAlerts)) return true;
      }

      return false;
    } catch (error) {
      console.error(error);

      return false;
    }

  }

  async processTagMeRestaurantReservations(
    tagMeId: string, tagMeToken: string, timeRangeAlert: RestaurantTimeRangeAlert[], tagMeSectionId: string
  ): Promise<boolean> {
    const { availabilities } = await this.getTagMeRestaurantReservations(tagMeId, tagMeToken);

    const availableDaysOnTheWeekend = this.getTagMeAvailableDaysOnWeekend(availabilities);

    return this.checkIfTagMeAvailableDaysHaveOneTimeOnRestaurantTimeRangeAlert(availableDaysOnTheWeekend, timeRangeAlert, tagMeSectionId);
  }

  // Get In

  private getGetInRestaurantReservations(getInRestaurantKey: string, people: number) {
    return this.gotService.get()(
      `${GET_IN_URL}/reservation/v1/units/${getInRestaurantKey}/schedules/available-dates?people=${people}`
    ).json<GetInRestaurantAvailableDates>();
  }

  private getGetInAvailableDays({ data }: GetInRestaurantAvailableDates): string[] {
    return data.dates;
  }

  private getGetMeDaysOfTheWeekAvailable(days: string[]): DayOfTheWeek[] {
    const dates = days.map(day => this.dateUtils.stringToDate(day));

    return dates.map(date => this.dateUtils.getDateDayOfTheWeek(date));
  }

  private checkIfThereIsAWeekendAvailable(days: DayOfTheWeek[]): boolean {
    return !!days.find(day => day === DayOfTheWeek.SATURDAY || day === DayOfTheWeek.SUNDAY);
  }

  async processGetInRestaurantReservations(getInRestaurantKey: string, people: number): Promise<boolean> {
    const response = await this.getGetInRestaurantReservations(getInRestaurantKey, people);

    const availableDays = this.getGetInAvailableDays(response);

    const availableDaysOfTheWeek = this.getGetMeDaysOfTheWeekAvailable(availableDays);

    return this.checkIfThereIsAWeekendAvailable(availableDaysOfTheWeek);
  }
}
