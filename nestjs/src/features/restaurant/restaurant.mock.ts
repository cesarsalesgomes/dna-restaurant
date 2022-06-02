import { Mutation, Query, BooleanFilterOperators, CountFunctionFilterOperators, CountFunctions, CountFunctionsInput, CreateDirectusFilesInput, CreateDirectusFoldersInput, CreateDirectusRolesInput, CreateDirectusUsersInput, CreateGetInRestaurantInput, CreateReservationProviderInput, CreateRestaurantInput, CreateRestaurantTimeRangeAlertInput, CreateTagMeRestaurantInput, DateFilterOperators, DatetimeFunctionFilterOperators, DatetimeFunctions, DatetimeFunctionsInput, DeleteMany, DeleteOne, DirectusFiles, DirectusFilesFilter, DirectusFolders, DirectusFoldersFilter, DirectusRoles, DirectusRolesFilter, DirectusUsers, DirectusUsersFilter, GetInRestaurant, GetInRestaurantAggregated, GetInRestaurantAggregatedCount, GetInRestaurantAggregatedFields, GetInRestaurantFilter, NumberFilterOperators, ReservationProvider, ReservationProviderAggregated, ReservationProviderAggregatedCount, ReservationProviderAggregatedFields, ReservationProviderFilter, Restaurant, RestaurantAggregated, RestaurantAggregatedCount, RestaurantAggregatedFields, RestaurantFilter, RestaurantTimeRangeAlert, RestaurantTimeRangeAlertAggregated, RestaurantTimeRangeAlertAggregatedCount, RestaurantTimeRangeAlertAggregatedFields, RestaurantTimeRangeAlertFilter, StringFilterOperators, TagMeRestaurant, TagMeRestaurantAggregated, TagMeRestaurantAggregatedCount, TagMeRestaurantAggregatedFields, TagMeRestaurantFilter, TimeFunctionFilterOperators, TimeFunctions, TimeFunctionsInput, UpdateDirectusFilesInput, UpdateDirectusFoldersInput, UpdateDirectusRolesInput, UpdateDirectusUsersInput, UpdateGetInRestaurantInput, UpdateReservationProviderInput, UpdateRestaurantInput, UpdateRestaurantTimeRangeAlertInput, UpdateTagMeRestaurantInput } from './restaurant.sdk';

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        create_get_in_restaurant_item: overrides && overrides.hasOwnProperty('create_get_in_restaurant_item') ? overrides.create_get_in_restaurant_item! : aGetInRestaurant(),
        create_get_in_restaurant_items: overrides && overrides.hasOwnProperty('create_get_in_restaurant_items') ? overrides.create_get_in_restaurant_items! : [aGetInRestaurant()],
        create_reservation_provider_item: overrides && overrides.hasOwnProperty('create_reservation_provider_item') ? overrides.create_reservation_provider_item! : aReservationProvider(),
        create_reservation_provider_items: overrides && overrides.hasOwnProperty('create_reservation_provider_items') ? overrides.create_reservation_provider_items! : [aReservationProvider()],
        create_restaurant_item: overrides && overrides.hasOwnProperty('create_restaurant_item') ? overrides.create_restaurant_item! : aRestaurant(),
        create_restaurant_items: overrides && overrides.hasOwnProperty('create_restaurant_items') ? overrides.create_restaurant_items! : [aRestaurant()],
        create_restaurant_time_range_alert_item: overrides && overrides.hasOwnProperty('create_restaurant_time_range_alert_item') ? overrides.create_restaurant_time_range_alert_item! : aRestaurantTimeRangeAlert(),
        create_restaurant_time_range_alert_items: overrides && overrides.hasOwnProperty('create_restaurant_time_range_alert_items') ? overrides.create_restaurant_time_range_alert_items! : [aRestaurantTimeRangeAlert()],
        create_tag_me_restaurant_item: overrides && overrides.hasOwnProperty('create_tag_me_restaurant_item') ? overrides.create_tag_me_restaurant_item! : aTagMeRestaurant(),
        create_tag_me_restaurant_items: overrides && overrides.hasOwnProperty('create_tag_me_restaurant_items') ? overrides.create_tag_me_restaurant_items! : [aTagMeRestaurant()],
        delete_get_in_restaurant_item: overrides && overrides.hasOwnProperty('delete_get_in_restaurant_item') ? overrides.delete_get_in_restaurant_item! : aDeleteOne(),
        delete_get_in_restaurant_items: overrides && overrides.hasOwnProperty('delete_get_in_restaurant_items') ? overrides.delete_get_in_restaurant_items! : aDeleteMany(),
        delete_reservation_provider_item: overrides && overrides.hasOwnProperty('delete_reservation_provider_item') ? overrides.delete_reservation_provider_item! : aDeleteOne(),
        delete_reservation_provider_items: overrides && overrides.hasOwnProperty('delete_reservation_provider_items') ? overrides.delete_reservation_provider_items! : aDeleteMany(),
        delete_restaurant_item: overrides && overrides.hasOwnProperty('delete_restaurant_item') ? overrides.delete_restaurant_item! : aDeleteOne(),
        delete_restaurant_items: overrides && overrides.hasOwnProperty('delete_restaurant_items') ? overrides.delete_restaurant_items! : aDeleteMany(),
        delete_restaurant_time_range_alert_item: overrides && overrides.hasOwnProperty('delete_restaurant_time_range_alert_item') ? overrides.delete_restaurant_time_range_alert_item! : aDeleteOne(),
        delete_restaurant_time_range_alert_items: overrides && overrides.hasOwnProperty('delete_restaurant_time_range_alert_items') ? overrides.delete_restaurant_time_range_alert_items! : aDeleteMany(),
        delete_tag_me_restaurant_item: overrides && overrides.hasOwnProperty('delete_tag_me_restaurant_item') ? overrides.delete_tag_me_restaurant_item! : aDeleteOne(),
        delete_tag_me_restaurant_items: overrides && overrides.hasOwnProperty('delete_tag_me_restaurant_items') ? overrides.delete_tag_me_restaurant_items! : aDeleteMany(),
        update_get_in_restaurant_item: overrides && overrides.hasOwnProperty('update_get_in_restaurant_item') ? overrides.update_get_in_restaurant_item! : aGetInRestaurant(),
        update_get_in_restaurant_items: overrides && overrides.hasOwnProperty('update_get_in_restaurant_items') ? overrides.update_get_in_restaurant_items! : [aGetInRestaurant()],
        update_reservation_provider_item: overrides && overrides.hasOwnProperty('update_reservation_provider_item') ? overrides.update_reservation_provider_item! : aReservationProvider(),
        update_reservation_provider_items: overrides && overrides.hasOwnProperty('update_reservation_provider_items') ? overrides.update_reservation_provider_items! : [aReservationProvider()],
        update_restaurant_item: overrides && overrides.hasOwnProperty('update_restaurant_item') ? overrides.update_restaurant_item! : aRestaurant(),
        update_restaurant_items: overrides && overrides.hasOwnProperty('update_restaurant_items') ? overrides.update_restaurant_items! : [aRestaurant()],
        update_restaurant_time_range_alert_item: overrides && overrides.hasOwnProperty('update_restaurant_time_range_alert_item') ? overrides.update_restaurant_time_range_alert_item! : aRestaurantTimeRangeAlert(),
        update_restaurant_time_range_alert_items: overrides && overrides.hasOwnProperty('update_restaurant_time_range_alert_items') ? overrides.update_restaurant_time_range_alert_items! : [aRestaurantTimeRangeAlert()],
        update_tag_me_restaurant_item: overrides && overrides.hasOwnProperty('update_tag_me_restaurant_item') ? overrides.update_tag_me_restaurant_item! : aTagMeRestaurant(),
        update_tag_me_restaurant_items: overrides && overrides.hasOwnProperty('update_tag_me_restaurant_items') ? overrides.update_tag_me_restaurant_items! : [aTagMeRestaurant()],
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [aGetInRestaurant()],
        get_in_restaurant_aggregated: overrides && overrides.hasOwnProperty('get_in_restaurant_aggregated') ? overrides.get_in_restaurant_aggregated! : [aGetInRestaurantAggregated()],
        get_in_restaurant_by_id: overrides && overrides.hasOwnProperty('get_in_restaurant_by_id') ? overrides.get_in_restaurant_by_id! : aGetInRestaurant(),
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : [aReservationProvider()],
        reservation_provider_aggregated: overrides && overrides.hasOwnProperty('reservation_provider_aggregated') ? overrides.reservation_provider_aggregated! : [aReservationProviderAggregated()],
        reservation_provider_by_id: overrides && overrides.hasOwnProperty('reservation_provider_by_id') ? overrides.reservation_provider_by_id! : aReservationProvider(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : [aRestaurant()],
        restaurant_aggregated: overrides && overrides.hasOwnProperty('restaurant_aggregated') ? overrides.restaurant_aggregated! : [aRestaurantAggregated()],
        restaurant_by_id: overrides && overrides.hasOwnProperty('restaurant_by_id') ? overrides.restaurant_by_id! : aRestaurant(),
        restaurant_time_range_alert: overrides && overrides.hasOwnProperty('restaurant_time_range_alert') ? overrides.restaurant_time_range_alert! : [aRestaurantTimeRangeAlert()],
        restaurant_time_range_alert_aggregated: overrides && overrides.hasOwnProperty('restaurant_time_range_alert_aggregated') ? overrides.restaurant_time_range_alert_aggregated! : [aRestaurantTimeRangeAlertAggregated()],
        restaurant_time_range_alert_by_id: overrides && overrides.hasOwnProperty('restaurant_time_range_alert_by_id') ? overrides.restaurant_time_range_alert_by_id! : aRestaurantTimeRangeAlert(),
        tag_me_restaurant: overrides && overrides.hasOwnProperty('tag_me_restaurant') ? overrides.tag_me_restaurant! : [aTagMeRestaurant()],
        tag_me_restaurant_aggregated: overrides && overrides.hasOwnProperty('tag_me_restaurant_aggregated') ? overrides.tag_me_restaurant_aggregated! : [aTagMeRestaurantAggregated()],
        tag_me_restaurant_by_id: overrides && overrides.hasOwnProperty('tag_me_restaurant_by_id') ? overrides.tag_me_restaurant_by_id! : aTagMeRestaurant(),
    };
};

export const aBooleanFilterOperators = (overrides?: Partial<BooleanFilterOperators>): BooleanFilterOperators => {
    return {
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : false,
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : false,
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : false,
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    };
};

export const aCountFunctionFilterOperators = (overrides?: Partial<CountFunctionFilterOperators>): CountFunctionFilterOperators => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aNumberFilterOperators(),
    };
};

export const aCountFunctions = (overrides?: Partial<CountFunctions>): CountFunctions => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 121,
    };
};

export const aCountFunctionsInput = (overrides?: Partial<CountFunctionsInput>): CountFunctionsInput => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 3019,
    };
};

export const aCreateDirectusFilesInput = (overrides?: Partial<CreateDirectusFilesInput>): CreateDirectusFilesInput => {
    return {
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : 'voluptate',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'expedita',
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : 8640,
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'sequi',
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : 'et',
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : 'repudiandae',
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : 'atque',
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : aCreateDirectusFoldersInput(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 9561,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '7a17b0b5-af6f-418a-83a3-827fa33cb163',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'sunt',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : 'non',
        metadata_func: overrides && overrides.hasOwnProperty('metadata_func') ? overrides.metadata_func! : aCountFunctionsInput(),
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : aCreateDirectusUsersInput(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : '1970-01-06T11:24:26.104Z',
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctionsInput(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : 'illo',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'at',
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctionsInput(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'consectetur',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'labore',
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : aCreateDirectusUsersInput(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : '1970-01-02T12:53:45.995Z',
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctionsInput(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 8859,
    };
};

export const aCreateDirectusFoldersInput = (overrides?: Partial<CreateDirectusFoldersInput>): CreateDirectusFoldersInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '4e01c4fc-aa47-42ea-8540-c19242a73b61',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'illo',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : aCreateDirectusFoldersInput(),
    };
};

export const aCreateDirectusRolesInput = (overrides?: Partial<CreateDirectusRolesInput>): CreateDirectusRolesInput => {
    return {
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : false,
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : true,
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'corrupti',
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : false,
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'minus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9f3c65b9-5f16-403b-b01e-ed55b04d84d6',
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : ['ad'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'minima',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [aCreateDirectusUsersInput()],
        users_func: overrides && overrides.hasOwnProperty('users_func') ? overrides.users_func! : aCountFunctionsInput(),
    };
};

export const aCreateDirectusUsersInput = (overrides?: Partial<CreateDirectusUsersInput>): CreateDirectusUsersInput => {
    return {
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : 'tenetur',
        auth_data_func: overrides && overrides.hasOwnProperty('auth_data_func') ? overrides.auth_data_func! : aCountFunctionsInput(),
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : aCreateDirectusFilesInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'eum',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'error',
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : false,
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : 'amet',
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : 'quos',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '42cb4e19-4ab9-4f0a-bfdf-b7d2deb310c8',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'blanditiis',
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : '1970-01-02T13:20:07.517Z',
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctionsInput(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : 'et',
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : 'omnis',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'dolores',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'omnis',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'neque',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aCreateDirectusRolesInput(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'qui',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'dolor',
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctionsInput(),
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : 'hic',
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : 'sint',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'enim',
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'autem',
    };
};

export const aCreateGetInRestaurantInput = (overrides?: Partial<CreateGetInRestaurantInput>): CreateGetInRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-08T01:31:19.996Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-02T04:51:06.913Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        get_in_restaurant_key: overrides && overrides.hasOwnProperty('get_in_restaurant_key') ? overrides.get_in_restaurant_key! : 'ea',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd8950923-108b-4469-8b35-2d3b2ab4b404',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aCreateReservationProviderInput(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aCreateRestaurantInput(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aCreateReservationProviderInput = (overrides?: Partial<CreateReservationProviderInput>): CreateReservationProviderInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-14T07:06:02.817Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-11T19:53:05.834Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [aCreateGetInRestaurantInput()],
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '83a5bfd0-84c1-4e87-a6b6-c73a8a1dd4dd',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'neque',
        tag_me_restaurants: overrides && overrides.hasOwnProperty('tag_me_restaurants') ? overrides.tag_me_restaurants! : [aCreateTagMeRestaurantInput()],
        tag_me_restaurants_func: overrides && overrides.hasOwnProperty('tag_me_restaurants_func') ? overrides.tag_me_restaurants_func! : aCountFunctionsInput(),
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'sunt',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aCreateRestaurantInput = (overrides?: Partial<CreateRestaurantInput>): CreateRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-05T06:39:07.798Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-11T08:40:07.444Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [aCreateGetInRestaurantInput()],
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '52e633cc-4eb6-48f8-a95b-6f371079aa65',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'ratione',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aCreateReservationProviderInput(),
        restaurant_time_range_alert: overrides && overrides.hasOwnProperty('restaurant_time_range_alert') ? overrides.restaurant_time_range_alert! : [aCreateRestaurantTimeRangeAlertInput()],
        restaurant_time_range_alert_func: overrides && overrides.hasOwnProperty('restaurant_time_range_alert_func') ? overrides.restaurant_time_range_alert_func! : aCountFunctionsInput(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'omnis',
        tag_me_restaurant: overrides && overrides.hasOwnProperty('tag_me_restaurant') ? overrides.tag_me_restaurant! : [aCreateTagMeRestaurantInput()],
        tag_me_restaurant_func: overrides && overrides.hasOwnProperty('tag_me_restaurant_func') ? overrides.tag_me_restaurant_func! : aCountFunctionsInput(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aCreateRestaurantTimeRangeAlertInput = (overrides?: Partial<CreateRestaurantTimeRangeAlertInput>): CreateRestaurantTimeRangeAlertInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-16T10:21:19.125Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-09T14:55:17.854Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        end_time: overrides && overrides.hasOwnProperty('end_time') ? overrides.end_time! : 'earum',
        end_time_func: overrides && overrides.hasOwnProperty('end_time_func') ? overrides.end_time_func! : aTimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '2ad865a4-1858-4313-8f88-caee4bab1e21',
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aCreateRestaurantInput(),
        start_time: overrides && overrides.hasOwnProperty('start_time') ? overrides.start_time! : 'sint',
        start_time_func: overrides && overrides.hasOwnProperty('start_time_func') ? overrides.start_time_func! : aTimeFunctionsInput(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aCreateTagMeRestaurantInput = (overrides?: Partial<CreateTagMeRestaurantInput>): CreateTagMeRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-14T21:42:58.892Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-10T12:19:58.139Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f4e46681-d001-421c-8b7e-0875fe274444',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aCreateReservationProviderInput(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aCreateRestaurantInput(),
        tag_me_restaurant_key: overrides && overrides.hasOwnProperty('tag_me_restaurant_key') ? overrides.tag_me_restaurant_key! : 'ut',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aDateFilterOperators = (overrides?: Partial<DateFilterOperators>): DateFilterOperators => {
    return {
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 'quaerat',
        _gt: overrides && overrides.hasOwnProperty('_gt') ? overrides._gt! : 'facere',
        _gte: overrides && overrides.hasOwnProperty('_gte') ? overrides._gte! : 'eos',
        _lt: overrides && overrides.hasOwnProperty('_lt') ? overrides._lt! : 'ad',
        _lte: overrides && overrides.hasOwnProperty('_lte') ? overrides._lte! : 'ut',
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 'omnis',
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : true,
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    };
};

export const aDatetimeFunctionFilterOperators = (overrides?: Partial<DatetimeFunctionFilterOperators>): DatetimeFunctionFilterOperators => {
    return {
        day: overrides && overrides.hasOwnProperty('day') ? overrides.day! : aNumberFilterOperators(),
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : aNumberFilterOperators(),
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : aNumberFilterOperators(),
        month: overrides && overrides.hasOwnProperty('month') ? overrides.month! : aNumberFilterOperators(),
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : aNumberFilterOperators(),
        week: overrides && overrides.hasOwnProperty('week') ? overrides.week! : aNumberFilterOperators(),
        weekday: overrides && overrides.hasOwnProperty('weekday') ? overrides.weekday! : aNumberFilterOperators(),
        year: overrides && overrides.hasOwnProperty('year') ? overrides.year! : aNumberFilterOperators(),
    };
};

export const aDatetimeFunctions = (overrides?: Partial<DatetimeFunctions>): DatetimeFunctions => {
    return {
        day: overrides && overrides.hasOwnProperty('day') ? overrides.day! : 6751,
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : 4788,
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : 1565,
        month: overrides && overrides.hasOwnProperty('month') ? overrides.month! : 5250,
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : 8118,
        week: overrides && overrides.hasOwnProperty('week') ? overrides.week! : 6439,
        weekday: overrides && overrides.hasOwnProperty('weekday') ? overrides.weekday! : 6325,
        year: overrides && overrides.hasOwnProperty('year') ? overrides.year! : 6131,
    };
};

export const aDatetimeFunctionsInput = (overrides?: Partial<DatetimeFunctionsInput>): DatetimeFunctionsInput => {
    return {
        day: overrides && overrides.hasOwnProperty('day') ? overrides.day! : 8473,
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : 4320,
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : 1958,
        month: overrides && overrides.hasOwnProperty('month') ? overrides.month! : 7265,
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : 2395,
        week: overrides && overrides.hasOwnProperty('week') ? overrides.week! : 1103,
        weekday: overrides && overrides.hasOwnProperty('weekday') ? overrides.weekday! : 2077,
        year: overrides && overrides.hasOwnProperty('year') ? overrides.year! : 9940,
    };
};

export const aDeleteMany = (overrides?: Partial<DeleteMany>): DeleteMany => {
    return {
        ids: overrides && overrides.hasOwnProperty('ids') ? overrides.ids! : ['ce26b5a1-003a-4e0d-9e47-bc3ffd5ba6a3'],
    };
};

export const aDeleteOne = (overrides?: Partial<DeleteOne>): DeleteOne => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd0b0a19a-a721-4a35-a3cb-7c99580eb8ce',
    };
};

export const aDirectusFiles = (overrides?: Partial<DirectusFiles>): DirectusFiles => {
    return {
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : 'aspernatur',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'quia',
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : 6666,
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'nihil',
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : 'debitis',
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : 'laudantium',
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : 'quod',
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : aDirectusFolders(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 5935,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '4ff67016-13de-4f23-8780-72121f1d91ff',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'eligendi',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : 'sit',
        metadata_func: overrides && overrides.hasOwnProperty('metadata_func') ? overrides.metadata_func! : aCountFunctions(),
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : aDirectusUsers(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : '1970-01-01T05:17:08.518Z',
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctions(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : 'quo',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'libero',
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctions(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'error',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'molestiae',
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : aDirectusUsers(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : '1970-01-06T01:35:56.476Z',
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctions(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 7053,
    };
};

export const aDirectusFilesFilter = (overrides?: Partial<DirectusFilesFilter>): DirectusFilesFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusFilesFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusFilesFilter()],
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : aStringFilterOperators(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterOperators(),
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : aNumberFilterOperators(),
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : aStringFilterOperators(),
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : aStringFilterOperators(),
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : aStringFilterOperators(),
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : aStringFilterOperators(),
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : aDirectusFoldersFilter(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : aNumberFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : aStringFilterOperators(),
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : aStringFilterOperators(),
        metadata_func: overrides && overrides.hasOwnProperty('metadata_func') ? overrides.metadata_func! : aCountFunctionFilterOperators(),
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : aDirectusUsersFilter(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : aDateFilterOperators(),
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctionFilterOperators(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : aStringFilterOperators(),
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : aStringFilterOperators(),
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctionFilterOperators(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : aStringFilterOperators(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : aStringFilterOperators(),
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : aDirectusUsersFilter(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : aDateFilterOperators(),
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctionFilterOperators(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : aNumberFilterOperators(),
    };
};

export const aDirectusFolders = (overrides?: Partial<DirectusFolders>): DirectusFolders => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6a9f1a3b-58fd-45e8-a8fe-1e16d2db52e3',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'enim',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : aDirectusFolders(),
    };
};

export const aDirectusFoldersFilter = (overrides?: Partial<DirectusFoldersFilter>): DirectusFoldersFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusFoldersFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusFoldersFilter()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : aDirectusFoldersFilter(),
    };
};

export const aDirectusRoles = (overrides?: Partial<DirectusRoles>): DirectusRoles => {
    return {
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : true,
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : true,
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'dolores',
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : false,
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'in',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '7a3fdd79-234f-4a85-82dd-b8f757787f06',
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : ['reprehenderit'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'cumque',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [aDirectusUsers()],
        users_func: overrides && overrides.hasOwnProperty('users_func') ? overrides.users_func! : aCountFunctions(),
    };
};

export const aDirectusRolesFilter = (overrides?: Partial<DirectusRolesFilter>): DirectusRolesFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusRolesFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusRolesFilter()],
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : aBooleanFilterOperators(),
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : aBooleanFilterOperators(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterOperators(),
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : aBooleanFilterOperators(),
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : aStringFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : aStringFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : aDirectusUsersFilter(),
        users_func: overrides && overrides.hasOwnProperty('users_func') ? overrides.users_func! : aCountFunctionFilterOperators(),
    };
};

export const aDirectusUsers = (overrides?: Partial<DirectusUsers>): DirectusUsers => {
    return {
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : 'cupiditate',
        auth_data_func: overrides && overrides.hasOwnProperty('auth_data_func') ? overrides.auth_data_func! : aCountFunctions(),
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : aDirectusFiles(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'earum',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'dolor',
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : true,
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : 'velit',
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : 'sed',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6c9806ce-3499-4c8a-bf99-2fef6cb6a6c8',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'veritatis',
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : '1970-01-12T22:08:08.316Z',
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctions(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : 'expedita',
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : 'consequatur',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'nihil',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'velit',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'sequi',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aDirectusRoles(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'atque',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'modi',
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctions(),
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : 'totam',
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : 'amet',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'porro',
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'distinctio',
    };
};

export const aDirectusUsersFilter = (overrides?: Partial<DirectusUsersFilter>): DirectusUsersFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusUsersFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusUsersFilter()],
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : aStringFilterOperators(),
        auth_data_func: overrides && overrides.hasOwnProperty('auth_data_func') ? overrides.auth_data_func! : aCountFunctionFilterOperators(),
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : aDirectusFilesFilter(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterOperators(),
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : aStringFilterOperators(),
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : aBooleanFilterOperators(),
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : aStringFilterOperators(),
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : aStringFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : aStringFilterOperators(),
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : aDateFilterOperators(),
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctionFilterOperators(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : aStringFilterOperators(),
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : aStringFilterOperators(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : aStringFilterOperators(),
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : aStringFilterOperators(),
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : aStringFilterOperators(),
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aDirectusRolesFilter(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : aStringFilterOperators(),
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : aStringFilterOperators(),
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctionFilterOperators(),
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : aStringFilterOperators(),
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : aStringFilterOperators(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : aStringFilterOperators(),
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : aStringFilterOperators(),
    };
};

export const aGetInRestaurant = (overrides?: Partial<GetInRestaurant>): GetInRestaurant => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-05T14:21:24.251Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-07T20:19:29.596Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        get_in_restaurant_key: overrides && overrides.hasOwnProperty('get_in_restaurant_key') ? overrides.get_in_restaurant_key! : 'et',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '97bc923f-10b9-413f-9aab-7b00831a9837',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aReservationProvider(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aRestaurant(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aGetInRestaurantAggregated = (overrides?: Partial<GetInRestaurantAggregated>): GetInRestaurantAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aGetInRestaurantAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aGetInRestaurantAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aGetInRestaurantAggregatedCount(),
        countAll: overrides && overrides.hasOwnProperty('countAll') ? overrides.countAll! : 3440,
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aGetInRestaurantAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'et',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aGetInRestaurantAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aGetInRestaurantAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aGetInRestaurantAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aGetInRestaurantAggregatedFields(),
    };
};

export const aGetInRestaurantAggregatedCount = (overrides?: Partial<GetInRestaurantAggregatedCount>): GetInRestaurantAggregatedCount => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : 1106,
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : 8308,
        get_in_restaurant_key: overrides && overrides.hasOwnProperty('get_in_restaurant_key') ? overrides.get_in_restaurant_key! : 8090,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 4716,
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : 5687,
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : 9420,
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : 407,
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : 531,
    };
};

export const aGetInRestaurantAggregatedFields = (overrides?: Partial<GetInRestaurantAggregatedFields>): GetInRestaurantAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 4.01,
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : 7.99,
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : 5.19,
    };
};

export const aGetInRestaurantFilter = (overrides?: Partial<GetInRestaurantFilter>): GetInRestaurantFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aGetInRestaurantFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aGetInRestaurantFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        get_in_restaurant_key: overrides && overrides.hasOwnProperty('get_in_restaurant_key') ? overrides.get_in_restaurant_key! : aStringFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aReservationProviderFilter(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aRestaurantFilter(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aNumberFilterOperators = (overrides?: Partial<NumberFilterOperators>): NumberFilterOperators => {
    return {
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 7.92,
        _gt: overrides && overrides.hasOwnProperty('_gt') ? overrides._gt! : 2.76,
        _gte: overrides && overrides.hasOwnProperty('_gte') ? overrides._gte! : 2.83,
        _in: overrides && overrides.hasOwnProperty('_in') ? overrides._in! : [4.51],
        _lt: overrides && overrides.hasOwnProperty('_lt') ? overrides._lt! : 4.31,
        _lte: overrides && overrides.hasOwnProperty('_lte') ? overrides._lte! : 4.94,
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 7.92,
        _nin: overrides && overrides.hasOwnProperty('_nin') ? overrides._nin! : [8.37],
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : false,
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    };
};

export const aReservationProvider = (overrides?: Partial<ReservationProvider>): ReservationProvider => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-11T03:36:25.893Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-14T21:46:24.522Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [aGetInRestaurant()],
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctions(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'fd71673f-fa05-4987-a961-c18f9489b31a',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sit',
        tag_me_restaurants: overrides && overrides.hasOwnProperty('tag_me_restaurants') ? overrides.tag_me_restaurants! : [aTagMeRestaurant()],
        tag_me_restaurants_func: overrides && overrides.hasOwnProperty('tag_me_restaurants_func') ? overrides.tag_me_restaurants_func! : aCountFunctions(),
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'maxime',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aReservationProviderAggregated = (overrides?: Partial<ReservationProviderAggregated>): ReservationProviderAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aReservationProviderAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aReservationProviderAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aReservationProviderAggregatedCount(),
        countAll: overrides && overrides.hasOwnProperty('countAll') ? overrides.countAll! : 4507,
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aReservationProviderAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'et',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aReservationProviderAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aReservationProviderAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aReservationProviderAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aReservationProviderAggregatedFields(),
    };
};

export const aReservationProviderAggregatedCount = (overrides?: Partial<ReservationProviderAggregatedCount>): ReservationProviderAggregatedCount => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : 7880,
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : 5534,
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : 1885,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 3787,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 306,
        tag_me_restaurants: overrides && overrides.hasOwnProperty('tag_me_restaurants') ? overrides.tag_me_restaurants! : 9183,
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 5525,
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : 7265,
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : 2187,
    };
};

export const aReservationProviderAggregatedFields = (overrides?: Partial<ReservationProviderAggregatedFields>): ReservationProviderAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 8.98,
    };
};

export const aReservationProviderFilter = (overrides?: Partial<ReservationProviderFilter>): ReservationProviderFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aReservationProviderFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aReservationProviderFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : aGetInRestaurantFilter(),
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctionFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        tag_me_restaurants: overrides && overrides.hasOwnProperty('tag_me_restaurants') ? overrides.tag_me_restaurants! : aTagMeRestaurantFilter(),
        tag_me_restaurants_func: overrides && overrides.hasOwnProperty('tag_me_restaurants_func') ? overrides.tag_me_restaurants_func! : aCountFunctionFilterOperators(),
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : aStringFilterOperators(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aRestaurant = (overrides?: Partial<Restaurant>): Restaurant => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-09T03:00:03.613Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-09T19:08:44.968Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [aGetInRestaurant()],
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctions(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9f2be2f6-5d9e-4449-9cf4-0d31bd797a1f',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'iusto',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aReservationProvider(),
        restaurant_time_range_alert: overrides && overrides.hasOwnProperty('restaurant_time_range_alert') ? overrides.restaurant_time_range_alert! : [aRestaurantTimeRangeAlert()],
        restaurant_time_range_alert_func: overrides && overrides.hasOwnProperty('restaurant_time_range_alert_func') ? overrides.restaurant_time_range_alert_func! : aCountFunctions(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'inventore',
        tag_me_restaurant: overrides && overrides.hasOwnProperty('tag_me_restaurant') ? overrides.tag_me_restaurant! : [aTagMeRestaurant()],
        tag_me_restaurant_func: overrides && overrides.hasOwnProperty('tag_me_restaurant_func') ? overrides.tag_me_restaurant_func! : aCountFunctions(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aRestaurantAggregated = (overrides?: Partial<RestaurantAggregated>): RestaurantAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aRestaurantAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aRestaurantAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aRestaurantAggregatedCount(),
        countAll: overrides && overrides.hasOwnProperty('countAll') ? overrides.countAll! : 249,
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aRestaurantAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'quibusdam',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aRestaurantAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aRestaurantAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aRestaurantAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aRestaurantAggregatedFields(),
    };
};

export const aRestaurantAggregatedCount = (overrides?: Partial<RestaurantAggregatedCount>): RestaurantAggregatedCount => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : 7596,
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : 2065,
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : 3212,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 1876,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 1897,
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : 3504,
        restaurant_time_range_alert: overrides && overrides.hasOwnProperty('restaurant_time_range_alert') ? overrides.restaurant_time_range_alert! : 8146,
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 2391,
        tag_me_restaurant: overrides && overrides.hasOwnProperty('tag_me_restaurant') ? overrides.tag_me_restaurant! : 5535,
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : 9642,
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : 5353,
    };
};

export const aRestaurantAggregatedFields = (overrides?: Partial<RestaurantAggregatedFields>): RestaurantAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 9.68,
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : 1.68,
    };
};

export const aRestaurantFilter = (overrides?: Partial<RestaurantFilter>): RestaurantFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aRestaurantFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aRestaurantFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : aGetInRestaurantFilter(),
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctionFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aReservationProviderFilter(),
        restaurant_time_range_alert: overrides && overrides.hasOwnProperty('restaurant_time_range_alert') ? overrides.restaurant_time_range_alert! : aRestaurantTimeRangeAlertFilter(),
        restaurant_time_range_alert_func: overrides && overrides.hasOwnProperty('restaurant_time_range_alert_func') ? overrides.restaurant_time_range_alert_func! : aCountFunctionFilterOperators(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : aStringFilterOperators(),
        tag_me_restaurant: overrides && overrides.hasOwnProperty('tag_me_restaurant') ? overrides.tag_me_restaurant! : aTagMeRestaurantFilter(),
        tag_me_restaurant_func: overrides && overrides.hasOwnProperty('tag_me_restaurant_func') ? overrides.tag_me_restaurant_func! : aCountFunctionFilterOperators(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aRestaurantTimeRangeAlert = (overrides?: Partial<RestaurantTimeRangeAlert>): RestaurantTimeRangeAlert => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-07T22:51:10.181Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-17T12:23:35.421Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        end_time: overrides && overrides.hasOwnProperty('end_time') ? overrides.end_time! : 'expedita',
        end_time_func: overrides && overrides.hasOwnProperty('end_time_func') ? overrides.end_time_func! : aTimeFunctions(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f55f007e-30a7-4487-af89-a18b3d89230b',
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aRestaurant(),
        start_time: overrides && overrides.hasOwnProperty('start_time') ? overrides.start_time! : 'esse',
        start_time_func: overrides && overrides.hasOwnProperty('start_time_func') ? overrides.start_time_func! : aTimeFunctions(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aRestaurantTimeRangeAlertAggregated = (overrides?: Partial<RestaurantTimeRangeAlertAggregated>): RestaurantTimeRangeAlertAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aRestaurantTimeRangeAlertAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aRestaurantTimeRangeAlertAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aRestaurantTimeRangeAlertAggregatedCount(),
        countAll: overrides && overrides.hasOwnProperty('countAll') ? overrides.countAll! : 6724,
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aRestaurantTimeRangeAlertAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'perferendis',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aRestaurantTimeRangeAlertAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aRestaurantTimeRangeAlertAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aRestaurantTimeRangeAlertAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aRestaurantTimeRangeAlertAggregatedFields(),
    };
};

export const aRestaurantTimeRangeAlertAggregatedCount = (overrides?: Partial<RestaurantTimeRangeAlertAggregatedCount>): RestaurantTimeRangeAlertAggregatedCount => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : 8733,
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : 3640,
        end_time: overrides && overrides.hasOwnProperty('end_time') ? overrides.end_time! : 5902,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 9236,
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : 1151,
        start_time: overrides && overrides.hasOwnProperty('start_time') ? overrides.start_time! : 2057,
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : 6816,
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : 5632,
    };
};

export const aRestaurantTimeRangeAlertAggregatedFields = (overrides?: Partial<RestaurantTimeRangeAlertAggregatedFields>): RestaurantTimeRangeAlertAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 3.99,
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : 7.22,
    };
};

export const aRestaurantTimeRangeAlertFilter = (overrides?: Partial<RestaurantTimeRangeAlertFilter>): RestaurantTimeRangeAlertFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aRestaurantTimeRangeAlertFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aRestaurantTimeRangeAlertFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        end_time: overrides && overrides.hasOwnProperty('end_time') ? overrides.end_time! : aStringFilterOperators(),
        end_time_func: overrides && overrides.hasOwnProperty('end_time_func') ? overrides.end_time_func! : aTimeFunctionFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aRestaurantFilter(),
        start_time: overrides && overrides.hasOwnProperty('start_time') ? overrides.start_time! : aStringFilterOperators(),
        start_time_func: overrides && overrides.hasOwnProperty('start_time_func') ? overrides.start_time_func! : aTimeFunctionFilterOperators(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aStringFilterOperators = (overrides?: Partial<StringFilterOperators>): StringFilterOperators => {
    return {
        _contains: overrides && overrides.hasOwnProperty('_contains') ? overrides._contains! : 'unde',
        _empty: overrides && overrides.hasOwnProperty('_empty') ? overrides._empty! : true,
        _ends_with: overrides && overrides.hasOwnProperty('_ends_with') ? overrides._ends_with! : 'rem',
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 'animi',
        _in: overrides && overrides.hasOwnProperty('_in') ? overrides._in! : ['quia'],
        _ncontains: overrides && overrides.hasOwnProperty('_ncontains') ? overrides._ncontains! : 'est',
        _nempty: overrides && overrides.hasOwnProperty('_nempty') ? overrides._nempty! : false,
        _nends_with: overrides && overrides.hasOwnProperty('_nends_with') ? overrides._nends_with! : 'eligendi',
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 'dignissimos',
        _nin: overrides && overrides.hasOwnProperty('_nin') ? overrides._nin! : ['sint'],
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : false,
        _nstarts_with: overrides && overrides.hasOwnProperty('_nstarts_with') ? overrides._nstarts_with! : 'incidunt',
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : false,
        _starts_with: overrides && overrides.hasOwnProperty('_starts_with') ? overrides._starts_with! : 'at',
    };
};

export const aTagMeRestaurant = (overrides?: Partial<TagMeRestaurant>): TagMeRestaurant => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-15T04:41:11.711Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-09T01:01:58.550Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '269fd940-dc88-4575-a599-95f018c6f322',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aReservationProvider(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aRestaurant(),
        tag_me_restaurant_key: overrides && overrides.hasOwnProperty('tag_me_restaurant_key') ? overrides.tag_me_restaurant_key! : 'provident',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aTagMeRestaurantAggregated = (overrides?: Partial<TagMeRestaurantAggregated>): TagMeRestaurantAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aTagMeRestaurantAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aTagMeRestaurantAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aTagMeRestaurantAggregatedCount(),
        countAll: overrides && overrides.hasOwnProperty('countAll') ? overrides.countAll! : 2479,
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aTagMeRestaurantAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'porro',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aTagMeRestaurantAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aTagMeRestaurantAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aTagMeRestaurantAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aTagMeRestaurantAggregatedFields(),
    };
};

export const aTagMeRestaurantAggregatedCount = (overrides?: Partial<TagMeRestaurantAggregatedCount>): TagMeRestaurantAggregatedCount => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : 2860,
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : 4122,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 4909,
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : 6527,
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : 6222,
        tag_me_restaurant_key: overrides && overrides.hasOwnProperty('tag_me_restaurant_key') ? overrides.tag_me_restaurant_key! : 4102,
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : 9176,
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : 72,
    };
};

export const aTagMeRestaurantAggregatedFields = (overrides?: Partial<TagMeRestaurantAggregatedFields>): TagMeRestaurantAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 4.07,
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : 6.52,
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : 8.37,
    };
};

export const aTagMeRestaurantFilter = (overrides?: Partial<TagMeRestaurantFilter>): TagMeRestaurantFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aTagMeRestaurantFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aTagMeRestaurantFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : aReservationProviderFilter(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : aRestaurantFilter(),
        tag_me_restaurant_key: overrides && overrides.hasOwnProperty('tag_me_restaurant_key') ? overrides.tag_me_restaurant_key! : aStringFilterOperators(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aTimeFunctionFilterOperators = (overrides?: Partial<TimeFunctionFilterOperators>): TimeFunctionFilterOperators => {
    return {
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : aNumberFilterOperators(),
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : aNumberFilterOperators(),
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : aNumberFilterOperators(),
    };
};

export const aTimeFunctions = (overrides?: Partial<TimeFunctions>): TimeFunctions => {
    return {
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : 1945,
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : 220,
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : 3770,
    };
};

export const aTimeFunctionsInput = (overrides?: Partial<TimeFunctionsInput>): TimeFunctionsInput => {
    return {
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : 3151,
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : 5207,
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : 8519,
    };
};

export const anUpdateDirectusFilesInput = (overrides?: Partial<UpdateDirectusFilesInput>): UpdateDirectusFilesInput => {
    return {
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : 'praesentium',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'sed',
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : 770,
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'est',
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : 'fugiat',
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : 'eos',
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : 'necessitatibus',
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : anUpdateDirectusFoldersInput(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 5382,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8105d55b-e81e-4eb9-aab6-195c53ac0da8',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'ab',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : 'facere',
        metadata_func: overrides && overrides.hasOwnProperty('metadata_func') ? overrides.metadata_func! : aCountFunctionsInput(),
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : anUpdateDirectusUsersInput(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : '1970-01-15T04:36:38.341Z',
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctionsInput(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : 'rerum',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'voluptatem',
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctionsInput(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'animi',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'aut',
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : anUpdateDirectusUsersInput(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : '1970-01-07T04:52:09.103Z',
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctionsInput(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 1282,
    };
};

export const anUpdateDirectusFoldersInput = (overrides?: Partial<UpdateDirectusFoldersInput>): UpdateDirectusFoldersInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'fe02e8a5-3b0c-434b-8526-dbb88b503719',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'ratione',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : anUpdateDirectusFoldersInput(),
    };
};

export const anUpdateDirectusRolesInput = (overrides?: Partial<UpdateDirectusRolesInput>): UpdateDirectusRolesInput => {
    return {
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : false,
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : true,
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'eos',
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : false,
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'aut',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e00df04b-c7e1-4f22-a24d-cc7bfe6720aa',
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : ['quos'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'voluptas',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [anUpdateDirectusUsersInput()],
        users_func: overrides && overrides.hasOwnProperty('users_func') ? overrides.users_func! : aCountFunctionsInput(),
    };
};

export const anUpdateDirectusUsersInput = (overrides?: Partial<UpdateDirectusUsersInput>): UpdateDirectusUsersInput => {
    return {
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : 'enim',
        auth_data_func: overrides && overrides.hasOwnProperty('auth_data_func') ? overrides.auth_data_func! : aCountFunctionsInput(),
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : anUpdateDirectusFilesInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'aut',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'quia',
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : false,
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : 'odit',
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : 'expedita',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '95417fe5-058b-4f12-989b-b2912c8cfacf',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'eius',
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : '1970-01-01T23:57:35.604Z',
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctionsInput(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : 'sed',
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : 'sit',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'accusantium',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'sequi',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'necessitatibus',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : anUpdateDirectusRolesInput(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'et',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'quaerat',
        tags_func: overrides && overrides.hasOwnProperty('tags_func') ? overrides.tags_func! : aCountFunctionsInput(),
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : 'mollitia',
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : 'fugit',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'et',
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'pariatur',
    };
};

export const anUpdateGetInRestaurantInput = (overrides?: Partial<UpdateGetInRestaurantInput>): UpdateGetInRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-05T12:17:40.240Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-16T22:05:06.209Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        get_in_restaurant_key: overrides && overrides.hasOwnProperty('get_in_restaurant_key') ? overrides.get_in_restaurant_key! : 'totam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b5de681e-9832-4f65-8c19-cf08d1d976c9',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : anUpdateReservationProviderInput(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : anUpdateRestaurantInput(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};

export const anUpdateReservationProviderInput = (overrides?: Partial<UpdateReservationProviderInput>): UpdateReservationProviderInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-04T04:51:57.654Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-13T02:57:34.318Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [anUpdateGetInRestaurantInput()],
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '12d3ec5c-eded-4289-8a14-71937c25211d',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'doloremque',
        tag_me_restaurants: overrides && overrides.hasOwnProperty('tag_me_restaurants') ? overrides.tag_me_restaurants! : [anUpdateTagMeRestaurantInput()],
        tag_me_restaurants_func: overrides && overrides.hasOwnProperty('tag_me_restaurants_func') ? overrides.tag_me_restaurants_func! : aCountFunctionsInput(),
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'suscipit',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};

export const anUpdateRestaurantInput = (overrides?: Partial<UpdateRestaurantInput>): UpdateRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-11T03:13:01.635Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-13T14:05:35.333Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        get_in_restaurant: overrides && overrides.hasOwnProperty('get_in_restaurant') ? overrides.get_in_restaurant! : [anUpdateGetInRestaurantInput()],
        get_in_restaurant_func: overrides && overrides.hasOwnProperty('get_in_restaurant_func') ? overrides.get_in_restaurant_func! : aCountFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e19dd2bd-496f-43d5-8efe-a7e7dce8a061',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'inventore',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : anUpdateReservationProviderInput(),
        restaurant_time_range_alert: overrides && overrides.hasOwnProperty('restaurant_time_range_alert') ? overrides.restaurant_time_range_alert! : [anUpdateRestaurantTimeRangeAlertInput()],
        restaurant_time_range_alert_func: overrides && overrides.hasOwnProperty('restaurant_time_range_alert_func') ? overrides.restaurant_time_range_alert_func! : aCountFunctionsInput(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'ea',
        tag_me_restaurant: overrides && overrides.hasOwnProperty('tag_me_restaurant') ? overrides.tag_me_restaurant! : [anUpdateTagMeRestaurantInput()],
        tag_me_restaurant_func: overrides && overrides.hasOwnProperty('tag_me_restaurant_func') ? overrides.tag_me_restaurant_func! : aCountFunctionsInput(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};

export const anUpdateRestaurantTimeRangeAlertInput = (overrides?: Partial<UpdateRestaurantTimeRangeAlertInput>): UpdateRestaurantTimeRangeAlertInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-05T01:05:14.805Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-12T02:00:45.524Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        end_time: overrides && overrides.hasOwnProperty('end_time') ? overrides.end_time! : 'numquam',
        end_time_func: overrides && overrides.hasOwnProperty('end_time_func') ? overrides.end_time_func! : aTimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '708074bd-697b-4b17-a9e1-67b87a5f7775',
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : anUpdateRestaurantInput(),
        start_time: overrides && overrides.hasOwnProperty('start_time') ? overrides.start_time! : 'ipsum',
        start_time_func: overrides && overrides.hasOwnProperty('start_time_func') ? overrides.start_time_func! : aTimeFunctionsInput(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};

export const anUpdateTagMeRestaurantInput = (overrides?: Partial<UpdateTagMeRestaurantInput>): UpdateTagMeRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-05T08:05:15.927Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-17T07:14:57.774Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '3750e2d3-b743-46b4-84dd-56048b15246d',
        reservation_provider: overrides && overrides.hasOwnProperty('reservation_provider') ? overrides.reservation_provider! : anUpdateReservationProviderInput(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : anUpdateRestaurantInput(),
        tag_me_restaurant_key: overrides && overrides.hasOwnProperty('tag_me_restaurant_key') ? overrides.tag_me_restaurant_key! : 'beatae',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};
