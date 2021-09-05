/* tslint:disable */
/* eslint-disable */
/**
 * Apache Fineract
 * Apache Fineract is a secure, multi-tenanted microfinance platform  The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform<br>The [reference app](https://cui.fineract.dev) (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation  - The API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) - Find out more about Apache Fineract [here](/fineract-provider/api-docs/apiLive.htm#top) - You can [Try The API From Your Browser](/fineract-provider/api-docs/apiLive.htm#interact) - The Generic Options are available [here](/fineract-provider/api-docs/apiLive.htm#genopts) - Find out more about [Updating Dates and Numbers](/fineract-provider/api-docs/apiLive.htm#dates_and_numbers) - For the Authentication and the Basic of HTTP and HTTPS refer [here](/fineract-provider/api-docs/apiLive.htm#authentication_overview) - Check about ERROR codes [here](/fineract-provider/api-docs/apiLive.htm#errors)  Please refer to the [old documentation](/fineract-provider/api-docs/apiLive.htm) for any documentation queries
 *
 * The version of the OpenAPI document: 1.5.0-66-gffae7d4-dirty
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * MeetingsApi - axios parameter creator
 * @export
 */
export const MeetingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMeeting: async (entityType: string, entityId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('createMeeting', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('createMeeting', 'entityId', entityId)
            const localVarPath = `/{entityType}/{entityId}/meetings`
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMeeting: async (entityType: string, entityId: number, meetingId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('deleteMeeting', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('deleteMeeting', 'entityId', entityId)
            // verify required parameter 'meetingId' is not null or undefined
            assertParamExists('deleteMeeting', 'meetingId', meetingId)
            const localVarPath = `/{entityType}/{entityId}/meetings/{meetingId}`
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)))
                .replace(`{${"meetingId"}}`, encodeURIComponent(String(meetingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        performMeetingCommands: async (entityType: string, entityId: number, meetingId: number, command?: string, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('performMeetingCommands', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('performMeetingCommands', 'entityId', entityId)
            // verify required parameter 'meetingId' is not null or undefined
            assertParamExists('performMeetingCommands', 'meetingId', meetingId)
            const localVarPath = `/{entityType}/{entityId}/meetings/{meetingId}`
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)))
                .replace(`{${"meetingId"}}`, encodeURIComponent(String(meetingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)

            if (command !== undefined) {
                localVarQueryParameter['command'] = command;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} meetingId 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMeeting: async (meetingId: number, entityType: string, entityId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'meetingId' is not null or undefined
            assertParamExists('retrieveMeeting', 'meetingId', meetingId)
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('retrieveMeeting', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('retrieveMeeting', 'entityId', entityId)
            const localVarPath = `/{entityType}/{entityId}/meetings/{meetingId}`
                .replace(`{${"meetingId"}}`, encodeURIComponent(String(meetingId)))
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMeetings: async (entityType: string, entityId: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('retrieveMeetings', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('retrieveMeetings', 'entityId', entityId)
            const localVarPath = `/{entityType}/{entityId}/meetings`
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} [calendarId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template11: async (entityType: string, entityId: number, calendarId?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('template11', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('template11', 'entityId', entityId)
            const localVarPath = `/{entityType}/{entityId}/meetings/template`
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)

            if (calendarId !== undefined) {
                localVarQueryParameter['calendarId'] = calendarId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMeeting: async (entityType: string, entityId: number, meetingId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'entityType' is not null or undefined
            assertParamExists('updateMeeting', 'entityType', entityType)
            // verify required parameter 'entityId' is not null or undefined
            assertParamExists('updateMeeting', 'entityId', entityId)
            // verify required parameter 'meetingId' is not null or undefined
            assertParamExists('updateMeeting', 'meetingId', meetingId)
            const localVarPath = `/{entityType}/{entityId}/meetings/{meetingId}`
                .replace(`{${"entityType"}}`, encodeURIComponent(String(entityType)))
                .replace(`{${"entityId"}}`, encodeURIComponent(String(entityId)))
                .replace(`{${"meetingId"}}`, encodeURIComponent(String(meetingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MeetingsApi - functional programming interface
 * @export
 */
export const MeetingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MeetingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMeeting(entityType: string, entityId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMeeting(entityType, entityId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMeeting(entityType: string, entityId: number, meetingId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMeeting(entityType, entityId, meetingId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async performMeetingCommands(entityType: string, entityId: number, meetingId: number, command?: string, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.performMeetingCommands(entityType, entityId, meetingId, command, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} meetingId 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveMeeting(meetingId: number, entityType: string, entityId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveMeeting(meetingId, entityType, entityId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveMeetings(entityType: string, entityId: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveMeetings(entityType, entityId, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} [calendarId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async template11(entityType: string, entityId: number, calendarId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.template11(entityType, entityId, calendarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMeeting(entityType: string, entityId: number, meetingId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMeeting(entityType, entityId, meetingId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MeetingsApi - factory interface
 * @export
 */
export const MeetingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MeetingsApiFp(configuration)
    return {
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMeeting(entityType: string, entityId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.createMeeting(entityType, entityId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMeeting(entityType: string, entityId: number, meetingId: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteMeeting(entityType, entityId, meetingId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        performMeetingCommands(entityType: string, entityId: number, meetingId: number, command?: string, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.performMeetingCommands(entityType, entityId, meetingId, command, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} meetingId 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMeeting(meetingId: number, entityType: string, entityId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveMeeting(meetingId, entityType, entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMeetings(entityType: string, entityId: number, limit?: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveMeetings(entityType, entityId, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} [calendarId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template11(entityType: string, entityId: number, calendarId?: number, options?: any): AxiosPromise<string> {
            return localVarFp.template11(entityType, entityId, calendarId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} entityType 
         * @param {number} entityId 
         * @param {number} meetingId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMeeting(entityType: string, entityId: number, meetingId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateMeeting(entityType, entityId, meetingId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MeetingsApi - object-oriented interface
 * @export
 * @class MeetingsApi
 * @extends {BaseAPI}
 */
export class MeetingsApi extends BaseAPI {
    /**
     * 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public createMeeting(entityType: string, entityId: number, body?: string, options?: any) {
        return MeetingsApiFp(this.configuration).createMeeting(entityType, entityId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {number} meetingId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public deleteMeeting(entityType: string, entityId: number, meetingId: number, options?: any) {
        return MeetingsApiFp(this.configuration).deleteMeeting(entityType, entityId, meetingId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {number} meetingId 
     * @param {string} [command] 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public performMeetingCommands(entityType: string, entityId: number, meetingId: number, command?: string, body?: string, options?: any) {
        return MeetingsApiFp(this.configuration).performMeetingCommands(entityType, entityId, meetingId, command, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} meetingId 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public retrieveMeeting(meetingId: number, entityType: string, entityId: number, options?: any) {
        return MeetingsApiFp(this.configuration).retrieveMeeting(meetingId, entityType, entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public retrieveMeetings(entityType: string, entityId: number, limit?: number, options?: any) {
        return MeetingsApiFp(this.configuration).retrieveMeetings(entityType, entityId, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {number} [calendarId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public template11(entityType: string, entityId: number, calendarId?: number, options?: any) {
        return MeetingsApiFp(this.configuration).template11(entityType, entityId, calendarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} entityType 
     * @param {number} entityId 
     * @param {number} meetingId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public updateMeeting(entityType: string, entityId: number, meetingId: number, body?: string, options?: any) {
        return MeetingsApiFp(this.configuration).updateMeeting(entityType, entityId, meetingId, body, options).then((request) => request(this.axios, this.basePath));
    }
}
