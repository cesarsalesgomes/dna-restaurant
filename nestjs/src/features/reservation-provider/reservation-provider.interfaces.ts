// Tag Me

export interface TagMeRestaurantReservation {
  reservationDay: string,
  available: boolean
}

export interface TagMeRestaurantInfo {
  availabilities: TagMeRestaurantReservation[]
}

// Get In

export interface GetInRestaurantAvailableDates {
  success: boolean,
  data: {
    dates: string[]
  }
}
