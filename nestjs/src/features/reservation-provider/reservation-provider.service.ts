import { GET_IN_URL, TAG_ME_URL } from '@constants/reservation-provider.constants';
import { DayOfTheWeek } from '@enums/date.enums';
import { GetInRestaurantAvailableDates, TagMeRestaurantInfo, TagMeRestaurantReservation } from '@features/reservation-provider/reservation-provider.interfaces';
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

  private getTagMeAvailableDays(reservations: TagMeRestaurantReservation[]) {
    return reservations.filter(({ available }) => available);
  }

  private getTagMeDaysOfTheWeekAvailable(days: TagMeRestaurantReservation[]): DayOfTheWeek[] {
    const dates = days.map(({ reservationDay }) => this.dateUtils.stringToDate(reservationDay));

    return dates.map(date => this.dateUtils.getDateDayOfTheWeek(date));
  }

  private checkIfThereIsAWeekendAvailable(days: DayOfTheWeek[]): boolean {
    return !!days.find(day => day === DayOfTheWeek.SATURDAY || day === DayOfTheWeek.SUNDAY);
  }

  async processTagMeRestaurantReservations(tagMeId: string, tagMeToken: string): Promise<boolean> {
    const { availabilities } = await this.getTagMeRestaurantReservations(tagMeId, tagMeToken);

    const availableDays = this.getTagMeAvailableDays(availabilities);

    const availableDaysOfTheWeek = this.getTagMeDaysOfTheWeekAvailable(availableDays);

    return this.checkIfThereIsAWeekendAvailable(availableDaysOfTheWeek);
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

  async processGetInRestaurantReservations(getInRestaurantKey: string, people: number): Promise<boolean> {
    const response = await this.getGetInRestaurantReservations(getInRestaurantKey, people);

    const availableDays = this.getGetInAvailableDays(response);

    const availableDaysOfTheWeek = this.getGetMeDaysOfTheWeekAvailable(availableDays);

    return this.checkIfThereIsAWeekendAvailable(availableDaysOfTheWeek);
  }
}
