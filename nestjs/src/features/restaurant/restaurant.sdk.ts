import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  create_get_in_restaurant_item?: Maybe<GetInRestaurant>;
  create_get_in_restaurant_items?: Maybe<Array<Maybe<GetInRestaurant>>>;
  create_reservation_provider_item?: Maybe<ReservationProvider>;
  create_reservation_provider_items?: Maybe<Array<Maybe<ReservationProvider>>>;
  create_restaurant_item?: Maybe<Restaurant>;
  create_restaurant_items?: Maybe<Array<Maybe<Restaurant>>>;
  create_restaurant_time_range_alert_item?: Maybe<RestaurantTimeRangeAlert>;
  create_restaurant_time_range_alert_items?: Maybe<Array<Maybe<RestaurantTimeRangeAlert>>>;
  create_tag_me_restaurant_item?: Maybe<TagMeRestaurant>;
  create_tag_me_restaurant_items?: Maybe<Array<Maybe<TagMeRestaurant>>>;
  delete_get_in_restaurant_item?: Maybe<DeleteOne>;
  delete_get_in_restaurant_items?: Maybe<DeleteMany>;
  delete_reservation_provider_item?: Maybe<DeleteOne>;
  delete_reservation_provider_items?: Maybe<DeleteMany>;
  delete_restaurant_item?: Maybe<DeleteOne>;
  delete_restaurant_items?: Maybe<DeleteMany>;
  delete_restaurant_time_range_alert_item?: Maybe<DeleteOne>;
  delete_restaurant_time_range_alert_items?: Maybe<DeleteMany>;
  delete_tag_me_restaurant_item?: Maybe<DeleteOne>;
  delete_tag_me_restaurant_items?: Maybe<DeleteMany>;
  update_get_in_restaurant_item?: Maybe<GetInRestaurant>;
  update_get_in_restaurant_items?: Maybe<Array<Maybe<GetInRestaurant>>>;
  update_reservation_provider_item?: Maybe<ReservationProvider>;
  update_reservation_provider_items?: Maybe<Array<Maybe<ReservationProvider>>>;
  update_restaurant_item?: Maybe<Restaurant>;
  update_restaurant_items?: Maybe<Array<Maybe<Restaurant>>>;
  update_restaurant_time_range_alert_item?: Maybe<RestaurantTimeRangeAlert>;
  update_restaurant_time_range_alert_items?: Maybe<Array<Maybe<RestaurantTimeRangeAlert>>>;
  update_tag_me_restaurant_item?: Maybe<TagMeRestaurant>;
  update_tag_me_restaurant_items?: Maybe<Array<Maybe<TagMeRestaurant>>>;
};


export type MutationCreateGetInRestaurantItemArgs = {
  data: CreateGetInRestaurantInput;
};


export type MutationCreateGetInRestaurantItemsArgs = {
  data?: InputMaybe<Array<CreateGetInRestaurantInput>>;
  filter?: InputMaybe<GetInRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateReservationProviderItemArgs = {
  data: CreateReservationProviderInput;
};


export type MutationCreateReservationProviderItemsArgs = {
  data?: InputMaybe<Array<CreateReservationProviderInput>>;
  filter?: InputMaybe<ReservationProviderFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateRestaurantItemArgs = {
  data: CreateRestaurantInput;
};


export type MutationCreateRestaurantItemsArgs = {
  data?: InputMaybe<Array<CreateRestaurantInput>>;
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateRestaurantTimeRangeAlertItemArgs = {
  data: CreateRestaurantTimeRangeAlertInput;
};


export type MutationCreateRestaurantTimeRangeAlertItemsArgs = {
  data?: InputMaybe<Array<CreateRestaurantTimeRangeAlertInput>>;
  filter?: InputMaybe<RestaurantTimeRangeAlertFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateTagMeRestaurantItemArgs = {
  data: CreateTagMeRestaurantInput;
};


export type MutationCreateTagMeRestaurantItemsArgs = {
  data?: InputMaybe<Array<CreateTagMeRestaurantInput>>;
  filter?: InputMaybe<TagMeRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDeleteGetInRestaurantItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGetInRestaurantItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteReservationProviderItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReservationProviderItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteRestaurantItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRestaurantItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteRestaurantTimeRangeAlertItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRestaurantTimeRangeAlertItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteTagMeRestaurantItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagMeRestaurantItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdateGetInRestaurantItemArgs = {
  data: UpdateGetInRestaurantInput;
  id: Scalars['ID'];
};


export type MutationUpdateGetInRestaurantItemsArgs = {
  data: UpdateGetInRestaurantInput;
  filter?: InputMaybe<GetInRestaurantFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateReservationProviderItemArgs = {
  data: UpdateReservationProviderInput;
  id: Scalars['ID'];
};


export type MutationUpdateReservationProviderItemsArgs = {
  data: UpdateReservationProviderInput;
  filter?: InputMaybe<ReservationProviderFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateRestaurantItemArgs = {
  data: UpdateRestaurantInput;
  id: Scalars['ID'];
};


export type MutationUpdateRestaurantItemsArgs = {
  data: UpdateRestaurantInput;
  filter?: InputMaybe<RestaurantFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateRestaurantTimeRangeAlertItemArgs = {
  data: UpdateRestaurantTimeRangeAlertInput;
  id: Scalars['ID'];
};


export type MutationUpdateRestaurantTimeRangeAlertItemsArgs = {
  data: UpdateRestaurantTimeRangeAlertInput;
  filter?: InputMaybe<RestaurantTimeRangeAlertFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateTagMeRestaurantItemArgs = {
  data: UpdateTagMeRestaurantInput;
  id: Scalars['ID'];
};


export type MutationUpdateTagMeRestaurantItemsArgs = {
  data: UpdateTagMeRestaurantInput;
  filter?: InputMaybe<TagMeRestaurantFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  get_in_restaurant?: Maybe<Array<Maybe<GetInRestaurant>>>;
  get_in_restaurant_aggregated?: Maybe<Array<Maybe<GetInRestaurantAggregated>>>;
  get_in_restaurant_by_id?: Maybe<GetInRestaurant>;
  reservation_provider?: Maybe<Array<Maybe<ReservationProvider>>>;
  reservation_provider_aggregated?: Maybe<Array<Maybe<ReservationProviderAggregated>>>;
  reservation_provider_by_id?: Maybe<ReservationProvider>;
  restaurant?: Maybe<Array<Maybe<Restaurant>>>;
  restaurant_aggregated?: Maybe<Array<Maybe<RestaurantAggregated>>>;
  restaurant_by_id?: Maybe<Restaurant>;
  restaurant_time_range_alert?: Maybe<Array<Maybe<RestaurantTimeRangeAlert>>>;
  restaurant_time_range_alert_aggregated?: Maybe<Array<Maybe<RestaurantTimeRangeAlertAggregated>>>;
  restaurant_time_range_alert_by_id?: Maybe<RestaurantTimeRangeAlert>;
  tag_me_restaurant?: Maybe<Array<Maybe<TagMeRestaurant>>>;
  tag_me_restaurant_aggregated?: Maybe<Array<Maybe<TagMeRestaurantAggregated>>>;
  tag_me_restaurant_by_id?: Maybe<TagMeRestaurant>;
};


export type QueryGetInRestaurantArgs = {
  filter?: InputMaybe<GetInRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetInRestaurantAggregatedArgs = {
  filter?: InputMaybe<GetInRestaurantFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetInRestaurantByIdArgs = {
  id: Scalars['ID'];
};


export type QueryReservationProviderArgs = {
  filter?: InputMaybe<ReservationProviderFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReservationProviderAggregatedArgs = {
  filter?: InputMaybe<ReservationProviderFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReservationProviderByIdArgs = {
  id: Scalars['ID'];
};


export type QueryRestaurantArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantAggregatedArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantByIdArgs = {
  id: Scalars['ID'];
};


export type QueryRestaurantTimeRangeAlertArgs = {
  filter?: InputMaybe<RestaurantTimeRangeAlertFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantTimeRangeAlertAggregatedArgs = {
  filter?: InputMaybe<RestaurantTimeRangeAlertFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantTimeRangeAlertByIdArgs = {
  id: Scalars['ID'];
};


export type QueryTagMeRestaurantArgs = {
  filter?: InputMaybe<TagMeRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagMeRestaurantAggregatedArgs = {
  filter?: InputMaybe<TagMeRestaurantFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagMeRestaurantByIdArgs = {
  id: Scalars['ID'];
};

export type BooleanFilterOperators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type CountFunctionFilterOperators = {
  count?: InputMaybe<NumberFilterOperators>;
};

export type CountFunctions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type CountFunctionsInput = {
  count?: InputMaybe<Scalars['Int']>;
};

export type CreateDirectusFilesInput = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<CreateDirectusFoldersInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<CountFunctionsInput>;
  modified_by?: InputMaybe<CreateDirectusUsersInput>;
  modified_on: Scalars['Date'];
  modified_on_func?: InputMaybe<DatetimeFunctionsInput>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<CountFunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<CreateDirectusUsersInput>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: InputMaybe<DatetimeFunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CreateDirectusFoldersInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<CreateDirectusFoldersInput>;
};

export type CreateDirectusRolesInput = {
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<CreateDirectusUsersInput>>>;
  users_func?: InputMaybe<CountFunctionsInput>;
};

export type CreateDirectusUsersInput = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  auth_data_func?: InputMaybe<CountFunctionsInput>;
  avatar?: InputMaybe<CreateDirectusFilesInput>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<DatetimeFunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: InputMaybe<CreateDirectusRolesInput>;
  status: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<CountFunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type CreateGetInRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  get_in_restaurant_key: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<CreateReservationProviderInput>;
  restaurant?: InputMaybe<CreateRestaurantInput>;
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type CreateReservationProviderInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<CreateGetInRestaurantInput>>>;
  get_in_restaurant_func?: InputMaybe<CountFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  tag_me_restaurants?: InputMaybe<Array<InputMaybe<CreateTagMeRestaurantInput>>>;
  tag_me_restaurants_func?: InputMaybe<CountFunctionsInput>;
  token?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type CreateRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<CreateGetInRestaurantInput>>>;
  get_in_restaurant_func?: InputMaybe<CountFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  reservation_provider?: InputMaybe<CreateReservationProviderInput>;
  restaurant_time_range_alert?: InputMaybe<Array<InputMaybe<CreateRestaurantTimeRangeAlertInput>>>;
  restaurant_time_range_alert_func?: InputMaybe<CountFunctionsInput>;
  status?: InputMaybe<Scalars['String']>;
  tag_me_restaurant?: InputMaybe<Array<InputMaybe<CreateTagMeRestaurantInput>>>;
  tag_me_restaurant_func?: InputMaybe<CountFunctionsInput>;
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type CreateRestaurantTimeRangeAlertInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  end_time: Scalars['String'];
  end_time_func?: InputMaybe<TimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  restaurant?: InputMaybe<CreateRestaurantInput>;
  start_time: Scalars['String'];
  start_time_func?: InputMaybe<TimeFunctionsInput>;
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type CreateTagMeRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<CreateReservationProviderInput>;
  restaurant?: InputMaybe<CreateRestaurantInput>;
  tag_me_restaurant_key: Scalars['String'];
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type DateFilterOperators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type DatetimeFunctionFilterOperators = {
  day?: InputMaybe<NumberFilterOperators>;
  hour?: InputMaybe<NumberFilterOperators>;
  minute?: InputMaybe<NumberFilterOperators>;
  month?: InputMaybe<NumberFilterOperators>;
  second?: InputMaybe<NumberFilterOperators>;
  week?: InputMaybe<NumberFilterOperators>;
  weekday?: InputMaybe<NumberFilterOperators>;
  year?: InputMaybe<NumberFilterOperators>;
};

export type DatetimeFunctions = {
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

export type DatetimeFunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type DeleteMany = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type DeleteOne = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type DirectusFiles = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<DirectusFolders>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<CountFunctions>;
  modified_by?: Maybe<DirectusUsers>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<DatetimeFunctions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<CountFunctions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<DirectusUsers>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<DatetimeFunctions>;
  width?: Maybe<Scalars['Int']>;
};


export type DirectusFilesFolderArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectusFilesModifiedByArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectusFilesUploadedByArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusFilesFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusFilesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusFilesFilter>>>;
  charset?: InputMaybe<StringFilterOperators>;
  description?: InputMaybe<StringFilterOperators>;
  duration?: InputMaybe<NumberFilterOperators>;
  embed?: InputMaybe<StringFilterOperators>;
  filename_disk?: InputMaybe<StringFilterOperators>;
  filename_download?: InputMaybe<StringFilterOperators>;
  filesize?: InputMaybe<StringFilterOperators>;
  folder?: InputMaybe<DirectusFoldersFilter>;
  height?: InputMaybe<NumberFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  metadata?: InputMaybe<StringFilterOperators>;
  metadata_func?: InputMaybe<CountFunctionFilterOperators>;
  modified_by?: InputMaybe<DirectusUsersFilter>;
  modified_on?: InputMaybe<DateFilterOperators>;
  modified_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  storage?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  type?: InputMaybe<StringFilterOperators>;
  uploaded_by?: InputMaybe<DirectusUsersFilter>;
  uploaded_on?: InputMaybe<DateFilterOperators>;
  uploaded_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  width?: InputMaybe<NumberFilterOperators>;
};

export type DirectusFolders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<DirectusFolders>;
};


export type DirectusFoldersParentArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusFoldersFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusFoldersFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusFoldersFilter>>>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  parent?: InputMaybe<DirectusFoldersFilter>;
};

export type DirectusRoles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<DirectusUsers>>>;
  users_func?: Maybe<CountFunctions>;
};


export type DirectusRolesUsersArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusRolesFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusRolesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusRolesFilter>>>;
  admin_access?: InputMaybe<BooleanFilterOperators>;
  app_access?: InputMaybe<BooleanFilterOperators>;
  description?: InputMaybe<StringFilterOperators>;
  enforce_tfa?: InputMaybe<BooleanFilterOperators>;
  icon?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  ip_access?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  users?: InputMaybe<DirectusUsersFilter>;
  users_func?: InputMaybe<CountFunctionFilterOperators>;
};

export type DirectusUsers = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  auth_data_func?: Maybe<CountFunctions>;
  avatar?: Maybe<DirectusFiles>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<DatetimeFunctions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: Maybe<DirectusRoles>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<CountFunctions>;
  tfa_secret?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type DirectusUsersAvatarArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectusUsersRoleArgs = {
  filter?: InputMaybe<DirectusRolesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusUsersFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusUsersFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusUsersFilter>>>;
  auth_data?: InputMaybe<StringFilterOperators>;
  auth_data_func?: InputMaybe<CountFunctionFilterOperators>;
  avatar?: InputMaybe<DirectusFilesFilter>;
  description?: InputMaybe<StringFilterOperators>;
  email?: InputMaybe<StringFilterOperators>;
  email_notifications?: InputMaybe<BooleanFilterOperators>;
  external_identifier?: InputMaybe<StringFilterOperators>;
  first_name?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  language?: InputMaybe<StringFilterOperators>;
  last_access?: InputMaybe<DateFilterOperators>;
  last_access_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  last_name?: InputMaybe<StringFilterOperators>;
  last_page?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  password?: InputMaybe<StringFilterOperators>;
  provider?: InputMaybe<StringFilterOperators>;
  role?: InputMaybe<DirectusRolesFilter>;
  status?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  tfa_secret?: InputMaybe<StringFilterOperators>;
  theme?: InputMaybe<StringFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  token?: InputMaybe<StringFilterOperators>;
};

export type GetInRestaurant = {
  __typename?: 'get_in_restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  get_in_restaurant_key: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  reservation_provider?: Maybe<ReservationProvider>;
  restaurant?: Maybe<Restaurant>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type GetInRestaurantReservationProviderArgs = {
  filter?: InputMaybe<ReservationProviderFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GetInRestaurantRestaurantArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GetInRestaurantUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GetInRestaurantUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetInRestaurantAggregated = {
  __typename?: 'get_in_restaurant_aggregated';
  avg?: Maybe<GetInRestaurantAggregatedFields>;
  avgDistinct?: Maybe<GetInRestaurantAggregatedFields>;
  count?: Maybe<GetInRestaurantAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<GetInRestaurantAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<GetInRestaurantAggregatedFields>;
  min?: Maybe<GetInRestaurantAggregatedFields>;
  sum?: Maybe<GetInRestaurantAggregatedFields>;
  sumDistinct?: Maybe<GetInRestaurantAggregatedFields>;
};

export type GetInRestaurantAggregatedCount = {
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

export type GetInRestaurantAggregatedFields = {
  __typename?: 'get_in_restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  reservation_provider?: Maybe<Scalars['Float']>;
  restaurant?: Maybe<Scalars['Float']>;
};

export type GetInRestaurantFilter = {
  _and?: InputMaybe<Array<InputMaybe<GetInRestaurantFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<GetInRestaurantFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  get_in_restaurant_key?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  reservation_provider?: InputMaybe<ReservationProviderFilter>;
  restaurant?: InputMaybe<RestaurantFilter>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type NumberFilterOperators = {
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

export type ReservationProvider = {
  __typename?: 'reservation_provider';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  get_in_restaurant?: Maybe<Array<Maybe<GetInRestaurant>>>;
  get_in_restaurant_func?: Maybe<CountFunctions>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  tag_me_restaurants?: Maybe<Array<Maybe<TagMeRestaurant>>>;
  tag_me_restaurants_func?: Maybe<CountFunctions>;
  token?: Maybe<Scalars['String']>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type ReservationProviderGetInRestaurantArgs = {
  filter?: InputMaybe<GetInRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ReservationProviderTagMeRestaurantsArgs = {
  filter?: InputMaybe<TagMeRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ReservationProviderUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ReservationProviderUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ReservationProviderAggregated = {
  __typename?: 'reservation_provider_aggregated';
  avg?: Maybe<ReservationProviderAggregatedFields>;
  avgDistinct?: Maybe<ReservationProviderAggregatedFields>;
  count?: Maybe<ReservationProviderAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<ReservationProviderAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<ReservationProviderAggregatedFields>;
  min?: Maybe<ReservationProviderAggregatedFields>;
  sum?: Maybe<ReservationProviderAggregatedFields>;
  sumDistinct?: Maybe<ReservationProviderAggregatedFields>;
};

export type ReservationProviderAggregatedCount = {
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

export type ReservationProviderAggregatedFields = {
  __typename?: 'reservation_provider_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type ReservationProviderFilter = {
  _and?: InputMaybe<Array<InputMaybe<ReservationProviderFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<ReservationProviderFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  get_in_restaurant?: InputMaybe<GetInRestaurantFilter>;
  get_in_restaurant_func?: InputMaybe<CountFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  tag_me_restaurants?: InputMaybe<TagMeRestaurantFilter>;
  tag_me_restaurants_func?: InputMaybe<CountFunctionFilterOperators>;
  token?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type Restaurant = {
  __typename?: 'restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  get_in_restaurant?: Maybe<Array<Maybe<GetInRestaurant>>>;
  get_in_restaurant_func?: Maybe<CountFunctions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  reservation_provider?: Maybe<ReservationProvider>;
  restaurant_time_range_alert?: Maybe<Array<Maybe<RestaurantTimeRangeAlert>>>;
  restaurant_time_range_alert_func?: Maybe<CountFunctions>;
  status?: Maybe<Scalars['String']>;
  tag_me_restaurant?: Maybe<Array<Maybe<TagMeRestaurant>>>;
  tag_me_restaurant_func?: Maybe<CountFunctions>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type RestaurantGetInRestaurantArgs = {
  filter?: InputMaybe<GetInRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantReservationProviderArgs = {
  filter?: InputMaybe<ReservationProviderFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantRestaurantTimeRangeAlertArgs = {
  filter?: InputMaybe<RestaurantTimeRangeAlertFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantTagMeRestaurantArgs = {
  filter?: InputMaybe<TagMeRestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RestaurantAggregated = {
  __typename?: 'restaurant_aggregated';
  avg?: Maybe<RestaurantAggregatedFields>;
  avgDistinct?: Maybe<RestaurantAggregatedFields>;
  count?: Maybe<RestaurantAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<RestaurantAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<RestaurantAggregatedFields>;
  min?: Maybe<RestaurantAggregatedFields>;
  sum?: Maybe<RestaurantAggregatedFields>;
  sumDistinct?: Maybe<RestaurantAggregatedFields>;
};

export type RestaurantAggregatedCount = {
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

export type RestaurantAggregatedFields = {
  __typename?: 'restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  reservation_provider?: Maybe<Scalars['Float']>;
};

export type RestaurantFilter = {
  _and?: InputMaybe<Array<InputMaybe<RestaurantFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<RestaurantFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  get_in_restaurant?: InputMaybe<GetInRestaurantFilter>;
  get_in_restaurant_func?: InputMaybe<CountFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  reservation_provider?: InputMaybe<ReservationProviderFilter>;
  restaurant_time_range_alert?: InputMaybe<RestaurantTimeRangeAlertFilter>;
  restaurant_time_range_alert_func?: InputMaybe<CountFunctionFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  tag_me_restaurant?: InputMaybe<TagMeRestaurantFilter>;
  tag_me_restaurant_func?: InputMaybe<CountFunctionFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type RestaurantTimeRangeAlert = {
  __typename?: 'restaurant_time_range_alert';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  end_time: Scalars['String'];
  end_time_func?: Maybe<TimeFunctions>;
  id?: Maybe<Scalars['ID']>;
  restaurant?: Maybe<Restaurant>;
  start_time: Scalars['String'];
  start_time_func?: Maybe<TimeFunctions>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type RestaurantTimeRangeAlertRestaurantArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantTimeRangeAlertUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantTimeRangeAlertUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RestaurantTimeRangeAlertAggregated = {
  __typename?: 'restaurant_time_range_alert_aggregated';
  avg?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
  avgDistinct?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
  count?: Maybe<RestaurantTimeRangeAlertAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
  min?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
  sum?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
  sumDistinct?: Maybe<RestaurantTimeRangeAlertAggregatedFields>;
};

export type RestaurantTimeRangeAlertAggregatedCount = {
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

export type RestaurantTimeRangeAlertAggregatedFields = {
  __typename?: 'restaurant_time_range_alert_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  restaurant?: Maybe<Scalars['Float']>;
};

export type RestaurantTimeRangeAlertFilter = {
  _and?: InputMaybe<Array<InputMaybe<RestaurantTimeRangeAlertFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<RestaurantTimeRangeAlertFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  end_time?: InputMaybe<StringFilterOperators>;
  end_time_func?: InputMaybe<TimeFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  restaurant?: InputMaybe<RestaurantFilter>;
  start_time?: InputMaybe<StringFilterOperators>;
  start_time_func?: InputMaybe<TimeFunctionFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type StringFilterOperators = {
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

export type TagMeRestaurant = {
  __typename?: 'tag_me_restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  id?: Maybe<Scalars['ID']>;
  reservation_provider?: Maybe<ReservationProvider>;
  restaurant?: Maybe<Restaurant>;
  tag_me_restaurant_key: Scalars['String'];
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type TagMeRestaurantReservationProviderArgs = {
  filter?: InputMaybe<ReservationProviderFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagMeRestaurantRestaurantArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagMeRestaurantUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagMeRestaurantUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagMeRestaurantAggregated = {
  __typename?: 'tag_me_restaurant_aggregated';
  avg?: Maybe<TagMeRestaurantAggregatedFields>;
  avgDistinct?: Maybe<TagMeRestaurantAggregatedFields>;
  count?: Maybe<TagMeRestaurantAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<TagMeRestaurantAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<TagMeRestaurantAggregatedFields>;
  min?: Maybe<TagMeRestaurantAggregatedFields>;
  sum?: Maybe<TagMeRestaurantAggregatedFields>;
  sumDistinct?: Maybe<TagMeRestaurantAggregatedFields>;
};

export type TagMeRestaurantAggregatedCount = {
  __typename?: 'tag_me_restaurant_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  reservation_provider?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Scalars['Int']>;
  tag_me_restaurant_key?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type TagMeRestaurantAggregatedFields = {
  __typename?: 'tag_me_restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  reservation_provider?: Maybe<Scalars['Float']>;
  restaurant?: Maybe<Scalars['Float']>;
};

export type TagMeRestaurantFilter = {
  _and?: InputMaybe<Array<InputMaybe<TagMeRestaurantFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<TagMeRestaurantFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  reservation_provider?: InputMaybe<ReservationProviderFilter>;
  restaurant?: InputMaybe<RestaurantFilter>;
  tag_me_restaurant_key?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type TimeFunctionFilterOperators = {
  hour?: InputMaybe<NumberFilterOperators>;
  minute?: InputMaybe<NumberFilterOperators>;
  second?: InputMaybe<NumberFilterOperators>;
};

export type TimeFunctions = {
  __typename?: 'time_functions';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type TimeFunctionsInput = {
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
};

export type UpdateDirectusFilesInput = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<UpdateDirectusFoldersInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<CountFunctionsInput>;
  modified_by?: InputMaybe<UpdateDirectusUsersInput>;
  modified_on?: InputMaybe<Scalars['Date']>;
  modified_on_func?: InputMaybe<DatetimeFunctionsInput>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<CountFunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<UpdateDirectusUsersInput>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  uploaded_on_func?: InputMaybe<DatetimeFunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UpdateDirectusFoldersInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<UpdateDirectusFoldersInput>;
};

export type UpdateDirectusRolesInput = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UpdateDirectusUsersInput>>>;
  users_func?: InputMaybe<CountFunctionsInput>;
};

export type UpdateDirectusUsersInput = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  auth_data_func?: InputMaybe<CountFunctionsInput>;
  avatar?: InputMaybe<UpdateDirectusFilesInput>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<DatetimeFunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UpdateDirectusRolesInput>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<CountFunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateGetInRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  get_in_restaurant_key?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<UpdateReservationProviderInput>;
  restaurant?: InputMaybe<UpdateRestaurantInput>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateReservationProviderInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<UpdateGetInRestaurantInput>>>;
  get_in_restaurant_func?: InputMaybe<CountFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  tag_me_restaurants?: InputMaybe<Array<InputMaybe<UpdateTagMeRestaurantInput>>>;
  tag_me_restaurants_func?: InputMaybe<CountFunctionsInput>;
  token?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  get_in_restaurant?: InputMaybe<Array<InputMaybe<UpdateGetInRestaurantInput>>>;
  get_in_restaurant_func?: InputMaybe<CountFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  reservation_provider?: InputMaybe<UpdateReservationProviderInput>;
  restaurant_time_range_alert?: InputMaybe<Array<InputMaybe<UpdateRestaurantTimeRangeAlertInput>>>;
  restaurant_time_range_alert_func?: InputMaybe<CountFunctionsInput>;
  status?: InputMaybe<Scalars['String']>;
  tag_me_restaurant?: InputMaybe<Array<InputMaybe<UpdateTagMeRestaurantInput>>>;
  tag_me_restaurant_func?: InputMaybe<CountFunctionsInput>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateRestaurantTimeRangeAlertInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  end_time?: InputMaybe<Scalars['String']>;
  end_time_func?: InputMaybe<TimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  restaurant?: InputMaybe<UpdateRestaurantInput>;
  start_time?: InputMaybe<Scalars['String']>;
  start_time_func?: InputMaybe<TimeFunctionsInput>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateTagMeRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  reservation_provider?: InputMaybe<UpdateReservationProviderInput>;
  restaurant?: InputMaybe<UpdateRestaurantInput>;
  tag_me_restaurant_key?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateRestaurantMutationVariables = Exact<{
  id: Scalars['ID'];
  data: UpdateRestaurantInput;
}>;


export type UpdateRestaurantMutation = { __typename?: 'Mutation', update_restaurant_item?: { __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null } | null };

export type FindActiveRestaurantsWithReservationProviderQueryVariables = Exact<{
  data: RestaurantFilter;
}>;


export type FindActiveRestaurantsWithReservationProviderQuery = { __typename?: 'Query', restaurant?: Array<{ __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null, reservation_provider?: { __typename?: 'reservation_provider', name: string, token?: string | null } | null, restaurant_time_range_alert?: Array<{ __typename?: 'restaurant_time_range_alert', start_time: string, end_time: string } | null> | null, tag_me_restaurant?: Array<{ __typename?: 'tag_me_restaurant', tag_me_restaurant_key: string } | null> | null, get_in_restaurant?: Array<{ __typename?: 'get_in_restaurant', get_in_restaurant_key: string } | null> | null } | null> | null };

export type FindRestaurantQueryVariables = Exact<{
  data: RestaurantFilter;
}>;


export type FindRestaurantQuery = { __typename?: 'Query', restaurant?: Array<{ __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null } | null> | null };


export const UpdateRestaurantDocument = gql`
    mutation updateRestaurant($id: ID!, $data: update_restaurant_input!) {
  update_restaurant_item(id: $id, data: $data) {
    id
    name
    status
  }
}
    `;
export const FindActiveRestaurantsWithReservationProviderDocument = gql`
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
    }
    get_in_restaurant {
      get_in_restaurant_key
    }
  }
}
    `;
export const FindRestaurantDocument = gql`
    query findRestaurant($data: restaurant_filter!) {
  restaurant(filter: $data) {
    id
    name
    status
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const UpdateRestaurantDocumentString = print(UpdateRestaurantDocument);
const FindActiveRestaurantsWithReservationProviderDocumentString = print(FindActiveRestaurantsWithReservationProviderDocument);
const FindRestaurantDocumentString = print(FindRestaurantDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updateRestaurant(variables: UpdateRestaurantMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UpdateRestaurantMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateRestaurantMutation>(UpdateRestaurantDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRestaurant', 'mutation');
    },
    findActiveRestaurantsWithReservationProvider(variables: FindActiveRestaurantsWithReservationProviderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: FindActiveRestaurantsWithReservationProviderQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FindActiveRestaurantsWithReservationProviderQuery>(FindActiveRestaurantsWithReservationProviderDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findActiveRestaurantsWithReservationProvider', 'query');
    },
    findRestaurant(variables: FindRestaurantQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: FindRestaurantQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FindRestaurantQuery>(FindRestaurantDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findRestaurant', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;