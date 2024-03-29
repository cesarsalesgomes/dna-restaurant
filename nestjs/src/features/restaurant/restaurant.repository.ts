import { ItemStatus } from '@enums/system.enums';
import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { getSdk, RestaurantFilter, UpdateRestaurantInput } from './restaurant.sdk';

@Injectable()
export class RestaurantRepository {
  constructor(private directusService: DirectusService) { }

  getRestaurantSdk(accessToken: string) {
    return getSdk(this.directusService.getGraphqlClient(accessToken));
  }

  async getRestaurantByName(accessToken: string, restaurantName: string) {
    const { restaurant } = (await this.getRestaurantSdk(accessToken).findRestaurant(
      { data: { name: { _eq: restaurantName } } })
    ).data;

    return restaurant[0];
  }

  async updateRestaurantById(accessToken: string, id: string, data: UpdateRestaurantInput) {
    return (await this.getRestaurantSdk(accessToken).updateRestaurant(
      { id, data })
    ).data.update_restaurant_item;
  }

  async getActiveRestaurantsWithReservationProvider(accessToken: string) {
    const filter: RestaurantFilter = {
      status: {
        _eq: ItemStatus.ACTIVE
      }
    };

    return (await this.getRestaurantSdk(accessToken).findActiveRestaurantsWithReservationProvider({ data: filter })).data.restaurant;
  }
}
