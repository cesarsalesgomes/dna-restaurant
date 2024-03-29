import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3YmFmYmViLTZlZGQtNDQ0OC04ZjNkLTQ5ZDBhODcwMDU0MCIsInJvbGUiOiIwMjFhYzdjMi1mMzgwLTRkZjItYmJlYi0wMTMxZDljY2UxNGQiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTY1NDIxMzcyMSwiZXhwIjoxNjU0MzAwMTIxLCJpc3MiOiJkaXJlY3R1cyJ9.7auAOpzeSQfXn3bm18HwQoftLAUbpgpK5zCjpD7T8lc"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_get_in_restaurant_item?: Maybe<Get_In_Restaurant>;
  create_get_in_restaurant_items?: Maybe<Array<Maybe<Get_In_Restaurant>>>;
  create_reservation_provider_item?: Maybe<Reservation_Provider>;
  create_reservation_provider_items?: Maybe<Array<Maybe<Reservation_Provider>>>;
  create_restaurant_item?: Maybe<Restaurant>;
  create_restaurant_items?: Maybe<Array<Maybe<Restaurant>>>;
  create_restaurant_time_range_alert_item?: Maybe<Restaurant_Time_Range_Alert>;
  create_restaurant_time_range_alert_items?: Maybe<Array<Maybe<Restaurant_Time_Range_Alert>>>;
  create_tag_me_restaurant_item?: Maybe<Tag_Me_Restaurant>;
  create_tag_me_restaurant_items?: Maybe<Array<Maybe<Tag_Me_Restaurant>>>;
  delete_get_in_restaurant_item?: Maybe<Delete_One>;
  delete_get_in_restaurant_items?: Maybe<Delete_Many>;
  delete_reservation_provider_item?: Maybe<Delete_One>;
  delete_reservation_provider_items?: Maybe<Delete_Many>;
  delete_restaurant_item?: Maybe<Delete_One>;
  delete_restaurant_items?: Maybe<Delete_Many>;
  delete_restaurant_time_range_alert_item?: Maybe<Delete_One>;
  delete_restaurant_time_range_alert_items?: Maybe<Delete_Many>;
  delete_tag_me_restaurant_item?: Maybe<Delete_One>;
  delete_tag_me_restaurant_items?: Maybe<Delete_Many>;
  update_get_in_restaurant_item?: Maybe<Get_In_Restaurant>;
  update_get_in_restaurant_items?: Maybe<Array<Maybe<Get_In_Restaurant>>>;
  update_reservation_provider_item?: Maybe<Reservation_Provider>;
  update_reservation_provider_items?: Maybe<Array<Maybe<Reservation_Provider>>>;
  update_restaurant_item?: Maybe<Restaurant>;
  update_restaurant_items?: Maybe<Array<Maybe<Restaurant>>>;
  update_restaurant_time_range_alert_item?: Maybe<Restaurant_Time_Range_Alert>;
  update_restaurant_time_range_alert_items?: Maybe<Array<Maybe<Restaurant_Time_Range_Alert>>>;
  update_tag_me_restaurant_item?: Maybe<Tag_Me_Restaurant>;
  update_tag_me_restaurant_items?: Maybe<Array<Maybe<Tag_Me_Restaurant>>>;
};


export type MutationCreate_Get_In_Restaurant_ItemArgs = {
  data: Create_Get_In_Restaurant_Input;
};


export type MutationCreate_Get_In_Restaurant_ItemsArgs = {
  data?: InputMaybe<Array<Create_Get_In_Restaurant_Input>>;
  filter?: InputMaybe<Get_In_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Reservation_Provider_ItemArgs = {
  data: Create_Reservation_Provider_Input;
};


export type MutationCreate_Reservation_Provider_ItemsArgs = {
  data?: InputMaybe<Array<Create_Reservation_Provider_Input>>;
  filter?: InputMaybe<Reservation_Provider_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Restaurant_ItemArgs = {
  data: Create_Restaurant_Input;
};


export type MutationCreate_Restaurant_ItemsArgs = {
  data?: InputMaybe<Array<Create_Restaurant_Input>>;
  filter?: InputMaybe<Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Restaurant_Time_Range_Alert_ItemArgs = {
  data: Create_Restaurant_Time_Range_Alert_Input;
};


export type MutationCreate_Restaurant_Time_Range_Alert_ItemsArgs = {
  data?: InputMaybe<Array<Create_Restaurant_Time_Range_Alert_Input>>;
  filter?: InputMaybe<Restaurant_Time_Range_Alert_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Tag_Me_Restaurant_ItemArgs = {
  data: Create_Tag_Me_Restaurant_Input;
};


export type MutationCreate_Tag_Me_Restaurant_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tag_Me_Restaurant_Input>>;
  filter?: InputMaybe<Tag_Me_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Get_In_Restaurant_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Get_In_Restaurant_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Reservation_Provider_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Reservation_Provider_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Restaurant_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Restaurant_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Restaurant_Time_Range_Alert_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Restaurant_Time_Range_Alert_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Tag_Me_Restaurant_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Tag_Me_Restaurant_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Get_In_Restaurant_ItemArgs = {
  data: Update_Get_In_Restaurant_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Get_In_Restaurant_ItemsArgs = {
  data: Update_Get_In_Restaurant_Input;
  filter?: InputMaybe<Get_In_Restaurant_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Reservation_Provider_ItemArgs = {
  data: Update_Reservation_Provider_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Reservation_Provider_ItemsArgs = {
  data: Update_Reservation_Provider_Input;
  filter?: InputMaybe<Reservation_Provider_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Restaurant_ItemArgs = {
  data: Update_Restaurant_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Restaurant_ItemsArgs = {
  data: Update_Restaurant_Input;
  filter?: InputMaybe<Restaurant_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Restaurant_Time_Range_Alert_ItemArgs = {
  data: Update_Restaurant_Time_Range_Alert_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Restaurant_Time_Range_Alert_ItemsArgs = {
  data: Update_Restaurant_Time_Range_Alert_Input;
  filter?: InputMaybe<Restaurant_Time_Range_Alert_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Tag_Me_Restaurant_ItemArgs = {
  data: Update_Tag_Me_Restaurant_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Tag_Me_Restaurant_ItemsArgs = {
  data: Update_Tag_Me_Restaurant_Input;
  filter?: InputMaybe<Tag_Me_Restaurant_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  get_in_restaurant?: Maybe<Array<Maybe<Get_In_Restaurant>>>;
  get_in_restaurant_aggregated?: Maybe<Array<Maybe<Get_In_Restaurant_Aggregated>>>;
  get_in_restaurant_by_id?: Maybe<Get_In_Restaurant>;
  reservation_provider?: Maybe<Array<Maybe<Reservation_Provider>>>;
  reservation_provider_aggregated?: Maybe<Array<Maybe<Reservation_Provider_Aggregated>>>;
  reservation_provider_by_id?: Maybe<Reservation_Provider>;
  restaurant?: Maybe<Array<Maybe<Restaurant>>>;
  restaurant_aggregated?: Maybe<Array<Maybe<Restaurant_Aggregated>>>;
  restaurant_by_id?: Maybe<Restaurant>;
  restaurant_time_range_alert?: Maybe<Array<Maybe<Restaurant_Time_Range_Alert>>>;
  restaurant_time_range_alert_aggregated?: Maybe<Array<Maybe<Restaurant_Time_Range_Alert_Aggregated>>>;
  restaurant_time_range_alert_by_id?: Maybe<Restaurant_Time_Range_Alert>;
  tag_me_restaurant?: Maybe<Array<Maybe<Tag_Me_Restaurant>>>;
  tag_me_restaurant_aggregated?: Maybe<Array<Maybe<Tag_Me_Restaurant_Aggregated>>>;
  tag_me_restaurant_by_id?: Maybe<Tag_Me_Restaurant>;
};


export type QueryGet_In_RestaurantArgs = {
  filter?: InputMaybe<Get_In_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGet_In_Restaurant_AggregatedArgs = {
  filter?: InputMaybe<Get_In_Restaurant_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGet_In_Restaurant_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryReservation_ProviderArgs = {
  filter?: InputMaybe<Reservation_Provider_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReservation_Provider_AggregatedArgs = {
  filter?: InputMaybe<Reservation_Provider_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReservation_Provider_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRestaurantArgs = {
  filter?: InputMaybe<Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurant_AggregatedArgs = {
  filter?: InputMaybe<Restaurant_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurant_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRestaurant_Time_Range_AlertArgs = {
  filter?: InputMaybe<Restaurant_Time_Range_Alert_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurant_Time_Range_Alert_AggregatedArgs = {
  filter?: InputMaybe<Restaurant_Time_Range_Alert_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurant_Time_Range_Alert_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryTag_Me_RestaurantArgs = {
  filter?: InputMaybe<Tag_Me_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTag_Me_Restaurant_AggregatedArgs = {
  filter?: InputMaybe<Tag_Me_Restaurant_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTag_Me_Restaurant_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Count_FunctionsInput = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on: Scalars['Date'];
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  auth_data_func?: InputMaybe<Count_FunctionsInput>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Create_Get_In_Restaurant_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  get_in_restaurant_key: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<Create_Reservation_Provider_Input>;
  restaurant?: InputMaybe<Create_Restaurant_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Reservation_Provider_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<Create_Get_In_Restaurant_Input>>>;
  get_in_restaurant_func?: InputMaybe<Count_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  tag_me_restaurants?: InputMaybe<Array<InputMaybe<Create_Tag_Me_Restaurant_Input>>>;
  tag_me_restaurants_func?: InputMaybe<Count_FunctionsInput>;
  token?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Restaurant_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<Create_Get_In_Restaurant_Input>>>;
  get_in_restaurant_func?: InputMaybe<Count_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  reservation_provider?: InputMaybe<Create_Reservation_Provider_Input>;
  restaurant_time_range_alert?: InputMaybe<Array<InputMaybe<Create_Restaurant_Time_Range_Alert_Input>>>;
  restaurant_time_range_alert_func?: InputMaybe<Count_FunctionsInput>;
  status?: InputMaybe<Scalars['String']>;
  tag_me_restaurant?: InputMaybe<Array<InputMaybe<Create_Tag_Me_Restaurant_Input>>>;
  tag_me_restaurant_func?: InputMaybe<Count_FunctionsInput>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Restaurant_Time_Range_Alert_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  end_time: Scalars['String'];
  end_time_func?: InputMaybe<Time_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  restaurant?: InputMaybe<Create_Restaurant_Input>;
  start_time: Scalars['String'];
  start_time_func?: InputMaybe<Time_FunctionsInput>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Tag_Me_Restaurant_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<Create_Reservation_Provider_Input>;
  restaurant?: InputMaybe<Create_Restaurant_Input>;
  tag_me_restaurant_key: Scalars['String'];
  tag_me_section_id?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Datetime_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: Maybe<Directus_Roles>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<String_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<String_Filter_Operators>;
};

export type Get_In_Restaurant = {
  __typename?: 'get_in_restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  get_in_restaurant_key: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  reservation_provider?: Maybe<Reservation_Provider>;
  restaurant?: Maybe<Restaurant>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Get_In_RestaurantReservation_ProviderArgs = {
  filter?: InputMaybe<Reservation_Provider_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Get_In_RestaurantRestaurantArgs = {
  filter?: InputMaybe<Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Get_In_RestaurantUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Get_In_RestaurantUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Get_In_Restaurant_Aggregated = {
  __typename?: 'get_in_restaurant_aggregated';
  avg?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
  avgDistinct?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
  count?: Maybe<Get_In_Restaurant_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
  min?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
  sum?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
  sumDistinct?: Maybe<Get_In_Restaurant_Aggregated_Fields>;
};

export type Get_In_Restaurant_Aggregated_Count = {
  __typename?: 'get_in_restaurant_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  get_in_restaurant_key?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  reservation_provider?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Get_In_Restaurant_Aggregated_Fields = {
  __typename?: 'get_in_restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  reservation_provider?: Maybe<Scalars['Float']>;
  restaurant?: Maybe<Scalars['Float']>;
};

export type Get_In_Restaurant_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Get_In_Restaurant_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Get_In_Restaurant_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  get_in_restaurant_key?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  reservation_provider?: InputMaybe<Reservation_Provider_Filter>;
  restaurant?: InputMaybe<Restaurant_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Reservation_Provider = {
  __typename?: 'reservation_provider';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  get_in_restaurant?: Maybe<Array<Maybe<Get_In_Restaurant>>>;
  get_in_restaurant_func?: Maybe<Count_Functions>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  tag_me_restaurants?: Maybe<Array<Maybe<Tag_Me_Restaurant>>>;
  tag_me_restaurants_func?: Maybe<Count_Functions>;
  token?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Reservation_ProviderGet_In_RestaurantArgs = {
  filter?: InputMaybe<Get_In_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Reservation_ProviderTag_Me_RestaurantsArgs = {
  filter?: InputMaybe<Tag_Me_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Reservation_ProviderUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Reservation_ProviderUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Reservation_Provider_Aggregated = {
  __typename?: 'reservation_provider_aggregated';
  avg?: Maybe<Reservation_Provider_Aggregated_Fields>;
  avgDistinct?: Maybe<Reservation_Provider_Aggregated_Fields>;
  count?: Maybe<Reservation_Provider_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Reservation_Provider_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Reservation_Provider_Aggregated_Fields>;
  min?: Maybe<Reservation_Provider_Aggregated_Fields>;
  sum?: Maybe<Reservation_Provider_Aggregated_Fields>;
  sumDistinct?: Maybe<Reservation_Provider_Aggregated_Fields>;
};

export type Reservation_Provider_Aggregated_Count = {
  __typename?: 'reservation_provider_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  get_in_restaurant?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  tag_me_restaurants?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Reservation_Provider_Aggregated_Fields = {
  __typename?: 'reservation_provider_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Reservation_Provider_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Reservation_Provider_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Reservation_Provider_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  get_in_restaurant?: InputMaybe<Get_In_Restaurant_Filter>;
  get_in_restaurant_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  tag_me_restaurants?: InputMaybe<Tag_Me_Restaurant_Filter>;
  tag_me_restaurants_func?: InputMaybe<Count_Function_Filter_Operators>;
  token?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Restaurant = {
  __typename?: 'restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  get_in_restaurant?: Maybe<Array<Maybe<Get_In_Restaurant>>>;
  get_in_restaurant_func?: Maybe<Count_Functions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  reservation_provider?: Maybe<Reservation_Provider>;
  restaurant_time_range_alert?: Maybe<Array<Maybe<Restaurant_Time_Range_Alert>>>;
  restaurant_time_range_alert_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']>;
  tag_me_restaurant?: Maybe<Array<Maybe<Tag_Me_Restaurant>>>;
  tag_me_restaurant_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type RestaurantGet_In_RestaurantArgs = {
  filter?: InputMaybe<Get_In_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantReservation_ProviderArgs = {
  filter?: InputMaybe<Reservation_Provider_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantRestaurant_Time_Range_AlertArgs = {
  filter?: InputMaybe<Restaurant_Time_Range_Alert_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantTag_Me_RestaurantArgs = {
  filter?: InputMaybe<Tag_Me_Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Restaurant_Aggregated = {
  __typename?: 'restaurant_aggregated';
  avg?: Maybe<Restaurant_Aggregated_Fields>;
  avgDistinct?: Maybe<Restaurant_Aggregated_Fields>;
  count?: Maybe<Restaurant_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Restaurant_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Restaurant_Aggregated_Fields>;
  min?: Maybe<Restaurant_Aggregated_Fields>;
  sum?: Maybe<Restaurant_Aggregated_Fields>;
  sumDistinct?: Maybe<Restaurant_Aggregated_Fields>;
};

export type Restaurant_Aggregated_Count = {
  __typename?: 'restaurant_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  get_in_restaurant?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  reservation_provider?: Maybe<Scalars['Int']>;
  restaurant_time_range_alert?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  tag_me_restaurant?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Restaurant_Aggregated_Fields = {
  __typename?: 'restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  reservation_provider?: Maybe<Scalars['Float']>;
};

export type Restaurant_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Restaurant_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Restaurant_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  get_in_restaurant?: InputMaybe<Get_In_Restaurant_Filter>;
  get_in_restaurant_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  reservation_provider?: InputMaybe<Reservation_Provider_Filter>;
  restaurant_time_range_alert?: InputMaybe<Restaurant_Time_Range_Alert_Filter>;
  restaurant_time_range_alert_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tag_me_restaurant?: InputMaybe<Tag_Me_Restaurant_Filter>;
  tag_me_restaurant_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Restaurant_Time_Range_Alert = {
  __typename?: 'restaurant_time_range_alert';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  end_time: Scalars['String'];
  end_time_func?: Maybe<Time_Functions>;
  id?: Maybe<Scalars['ID']>;
  restaurant?: Maybe<Restaurant>;
  start_time: Scalars['String'];
  start_time_func?: Maybe<Time_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Restaurant_Time_Range_AlertRestaurantArgs = {
  filter?: InputMaybe<Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Restaurant_Time_Range_AlertUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Restaurant_Time_Range_AlertUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Restaurant_Time_Range_Alert_Aggregated = {
  __typename?: 'restaurant_time_range_alert_aggregated';
  avg?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
  avgDistinct?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
  count?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
  min?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
  sum?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
  sumDistinct?: Maybe<Restaurant_Time_Range_Alert_Aggregated_Fields>;
};

export type Restaurant_Time_Range_Alert_Aggregated_Count = {
  __typename?: 'restaurant_time_range_alert_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Restaurant_Time_Range_Alert_Aggregated_Fields = {
  __typename?: 'restaurant_time_range_alert_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  restaurant?: Maybe<Scalars['Float']>;
};

export type Restaurant_Time_Range_Alert_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Restaurant_Time_Range_Alert_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Restaurant_Time_Range_Alert_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  end_time?: InputMaybe<String_Filter_Operators>;
  end_time_func?: InputMaybe<Time_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  restaurant?: InputMaybe<Restaurant_Filter>;
  start_time?: InputMaybe<String_Filter_Operators>;
  start_time_func?: InputMaybe<Time_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Tag_Me_Restaurant = {
  __typename?: 'tag_me_restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  reservation_provider?: Maybe<Reservation_Provider>;
  restaurant?: Maybe<Restaurant>;
  tag_me_restaurant_key: Scalars['String'];
  tag_me_section_id?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Tag_Me_RestaurantReservation_ProviderArgs = {
  filter?: InputMaybe<Reservation_Provider_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Tag_Me_RestaurantRestaurantArgs = {
  filter?: InputMaybe<Restaurant_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Tag_Me_RestaurantUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Tag_Me_RestaurantUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tag_Me_Restaurant_Aggregated = {
  __typename?: 'tag_me_restaurant_aggregated';
  avg?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
  avgDistinct?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
  count?: Maybe<Tag_Me_Restaurant_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
  min?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
  sum?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
  sumDistinct?: Maybe<Tag_Me_Restaurant_Aggregated_Fields>;
};

export type Tag_Me_Restaurant_Aggregated_Count = {
  __typename?: 'tag_me_restaurant_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  reservation_provider?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Scalars['Int']>;
  tag_me_restaurant_key?: Maybe<Scalars['Int']>;
  tag_me_section_id?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Tag_Me_Restaurant_Aggregated_Fields = {
  __typename?: 'tag_me_restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  reservation_provider?: Maybe<Scalars['Float']>;
  restaurant?: Maybe<Scalars['Float']>;
};

export type Tag_Me_Restaurant_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Me_Restaurant_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tag_Me_Restaurant_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  reservation_provider?: InputMaybe<Reservation_Provider_Filter>;
  restaurant?: InputMaybe<Restaurant_Filter>;
  tag_me_restaurant_key?: InputMaybe<String_Filter_Operators>;
  tag_me_section_id?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Time_Function_Filter_Operators = {
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
};

export type Time_Functions = {
  __typename?: 'time_functions';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type Time_FunctionsInput = {
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  auth_data_func?: InputMaybe<Count_FunctionsInput>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Update_Get_In_Restaurant_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  get_in_restaurant_key?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<Update_Reservation_Provider_Input>;
  restaurant?: InputMaybe<Update_Restaurant_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Reservation_Provider_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<Update_Get_In_Restaurant_Input>>>;
  get_in_restaurant_func?: InputMaybe<Count_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  tag_me_restaurants?: InputMaybe<Array<InputMaybe<Update_Tag_Me_Restaurant_Input>>>;
  tag_me_restaurants_func?: InputMaybe<Count_FunctionsInput>;
  token?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Restaurant_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<Update_Get_In_Restaurant_Input>>>;
  get_in_restaurant_func?: InputMaybe<Count_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  reservation_provider?: InputMaybe<Update_Reservation_Provider_Input>;
  restaurant_time_range_alert?: InputMaybe<Array<InputMaybe<Update_Restaurant_Time_Range_Alert_Input>>>;
  restaurant_time_range_alert_func?: InputMaybe<Count_FunctionsInput>;
  status?: InputMaybe<Scalars['String']>;
  tag_me_restaurant?: InputMaybe<Array<InputMaybe<Update_Tag_Me_Restaurant_Input>>>;
  tag_me_restaurant_func?: InputMaybe<Count_FunctionsInput>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Restaurant_Time_Range_Alert_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  end_time?: InputMaybe<Scalars['String']>;
  end_time_func?: InputMaybe<Time_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  restaurant?: InputMaybe<Update_Restaurant_Input>;
  start_time?: InputMaybe<Scalars['String']>;
  start_time_func?: InputMaybe<Time_FunctionsInput>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Tag_Me_Restaurant_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<Update_Reservation_Provider_Input>;
  restaurant?: InputMaybe<Update_Restaurant_Input>;
  tag_me_restaurant_key?: InputMaybe<Scalars['String']>;
  tag_me_section_id?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type UpdateRestaurantMutationVariables = Exact<{
  id: Scalars['ID'];
  data: Update_Restaurant_Input;
}>;


export type UpdateRestaurantMutation = { __typename?: 'Mutation', update_restaurant_item?: { __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null } | null };

export type FindActiveRestaurantsWithReservationProviderQueryVariables = Exact<{
  data: Restaurant_Filter;
}>;


export type FindActiveRestaurantsWithReservationProviderQuery = { __typename?: 'Query', restaurant?: Array<{ __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null, reservation_provider?: { __typename?: 'reservation_provider', name: string, token?: string | null } | null, restaurant_time_range_alert?: Array<{ __typename?: 'restaurant_time_range_alert', start_time: string, end_time: string } | null> | null, tag_me_restaurant?: Array<{ __typename?: 'tag_me_restaurant', tag_me_restaurant_key: string, tag_me_section_id?: string | null } | null> | null, get_in_restaurant?: Array<{ __typename?: 'get_in_restaurant', get_in_restaurant_key: string } | null> | null } | null> | null };

export type FindRestaurantQueryVariables = Exact<{
  data: Restaurant_Filter;
}>;


export type FindRestaurantQuery = { __typename?: 'Query', restaurant?: Array<{ __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null } | null> | null };


export const UpdateRestaurantDocument = `
    mutation updateRestaurant($id: ID!, $data: update_restaurant_input!) {
  update_restaurant_item(id: $id, data: $data) {
    id
    name
    status
  }
}
    `;
export const useUpdateRestaurantMutation = <
      TError = {message:string;locations?:{line:number;column:number;}[];path?:string[];extensions?:any;},
      TContext = unknown
    >(options?: UseMutationOptions<UpdateRestaurantMutation, TError, UpdateRestaurantMutationVariables, TContext>) =>
    useMutation<UpdateRestaurantMutation, TError, UpdateRestaurantMutationVariables, TContext>(
      ['updateRestaurant'],
      (variables?: UpdateRestaurantMutationVariables) => fetcher<UpdateRestaurantMutation, UpdateRestaurantMutationVariables>(UpdateRestaurantDocument, variables)(),
      options
    );
export const FindActiveRestaurantsWithReservationProviderDocument = `
    query findActiveRestaurantsWithReservationProvider($data: restaurant_filter!) {
  restaurant(filter: $data) {
    id
    name
    status
    reservation_provider {
      name
      token
    }
    restaurant_time_range_alert {
      start_time
      end_time
    }
    tag_me_restaurant {
      tag_me_restaurant_key
      tag_me_section_id
    }
    get_in_restaurant {
      get_in_restaurant_key
    }
  }
}
    `;
export const useFindActiveRestaurantsWithReservationProviderQuery = <
      TData = FindActiveRestaurantsWithReservationProviderQuery,
      TError = {message:string;locations?:{line:number;column:number;}[];path?:string[];extensions?:any;}
    >(
      variables: FindActiveRestaurantsWithReservationProviderQueryVariables,
      options?: UseQueryOptions<FindActiveRestaurantsWithReservationProviderQuery, TError, TData>
    ) =>
    useQuery<FindActiveRestaurantsWithReservationProviderQuery, TError, TData>(
      ['findActiveRestaurantsWithReservationProvider', variables],
      fetcher<FindActiveRestaurantsWithReservationProviderQuery, FindActiveRestaurantsWithReservationProviderQueryVariables>(FindActiveRestaurantsWithReservationProviderDocument, variables),
      options
    );
export const FindRestaurantDocument = `
    query findRestaurant($data: restaurant_filter!) {
  restaurant(filter: $data) {
    id
    name
    status
  }
}
    `;
export const useFindRestaurantQuery = <
      TData = FindRestaurantQuery,
      TError = {message:string;locations?:{line:number;column:number;}[];path?:string[];extensions?:any;}
    >(
      variables: FindRestaurantQueryVariables,
      options?: UseQueryOptions<FindRestaurantQuery, TError, TData>
    ) =>
    useQuery<FindRestaurantQuery, TError, TData>(
      ['findRestaurant', variables],
      fetcher<FindRestaurantQuery, FindRestaurantQueryVariables>(FindRestaurantDocument, variables),
      options
    );