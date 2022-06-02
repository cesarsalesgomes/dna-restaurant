// Tag Me

export interface TagMeRestaurantReservationTime {
  reservationTime: string
}

export interface TagMeRestaurantSchedule {
  reservationTimes: TagMeRestaurantReservationTime[]
}

export interface TagMeRestaurantSection {
  id: string;
  schedules: TagMeRestaurantSchedule[]
}

export interface TagMeRestaurantReservation {
  reservationDay: string,
  available: boolean,
  sections: TagMeRestaurantSection[]
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
