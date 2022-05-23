import { Module } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { DirectusService } from '@system/directus/directus.service';
import { DateUtils } from '@utils/date.utils';

import { ReservationProviderRepository } from './reservation-provider.repository';
import { ReservationProviderService } from './reservation-provider.service';

@Module({
  providers: [ReservationProviderService, ReservationProviderRepository, DirectusService, GotService, DateUtils],
  exports: [ReservationProviderService]
})
export class ReservationProviderModule { }
