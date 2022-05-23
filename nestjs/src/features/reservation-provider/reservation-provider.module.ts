import { Module } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';
import { ReservationProviderRepository } from './reservation-provider.repository';
import { ReservationProviderService } from './reservation-provider.service';

@Module({
  providers: [ReservationProviderService, ReservationProviderRepository, DirectusService]
})
export class ReservationProviderModule { }
