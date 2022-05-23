import { Injectable, NotFoundException } from '@nestjs/common';
import { RESERVATION_PROVIDER_NOT_FOUND_ERROR } from './reservation-provider.error';
import { ReservationProviderRepository } from './reservation-provider.repository';

@Injectable()
export class ReservationProviderService {

  constructor(private reservationProviderRepository: ReservationProviderRepository) { }

  async getReservationProviderByName(accessToken: string, name: string) {
    const reservationProvider = await this.reservationProviderRepository.getReservationProviderByName(accessToken, name);

    if (!reservationProvider) throw new NotFoundException(RESERVATION_PROVIDER_NOT_FOUND_ERROR);

    return reservationProvider;
  }
}
