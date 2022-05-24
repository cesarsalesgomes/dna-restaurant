import { TAG_ME_URL } from '@constants/reservation-provider.constants';
import { DayOfTheWeek } from '@enums/date.enums';
import { TagMeRestaurantInfo, TagMeRestaurantReservation } from '@features/reservation-provider/reservation-provider.interfaces';
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

  private getTagMeRestaurantReservations(idReservation: string, apitoken: string) {
    return this.gotService.get()(
      `${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`,
      {
        headers: {
          apitoken
        }
      }).json<TagMeRestaurantInfo>();
  }

  private getAvailableDays(reservations: TagMeRestaurantReservation[]) {
    return reservations.filter(({ available }) => available);
  }

  private getDaysOfTheWeekAvailable(days: TagMeRestaurantReservation[]): DayOfTheWeek[] {
    const dates = days.map(({ reservationDay }) => this.dateUtils.stringToDate(reservationDay));

    return dates.map(date => this.dateUtils.getDateDayOfTheWeek(date));
  }

  private checkIfThereIsAWeekendAvailable(days: DayOfTheWeek[]): boolean {
    return !!days.find(day => day === DayOfTheWeek.SATURDAY || day === DayOfTheWeek.SUNDAY);
  }

  async processTagMeRestaurantReservations(tagMeId: string, tagMeToken: string): Promise<boolean> {
    const { availabilities } = await this.getTagMeRestaurantReservations(tagMeId, tagMeToken);

    const availableDays = this.getAvailableDays(availabilities);

    const availableDaysOfTheWeek = this.getDaysOfTheWeekAvailable(availableDays);

    return this.checkIfThereIsAWeekendAvailable(availableDaysOfTheWeek);
  }
}
