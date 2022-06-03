// Tag Me

export interface TagMeRestaurantReservationTime {
  reservationTime: string
  available: boolean;
}

export interface TagMeRestaurantSchedule {
  available: boolean;
  reservationTimes: TagMeRestaurantReservationTime[]
}

export interface TagMeRestaurantSection {
  id: string;
  available: boolean;
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
