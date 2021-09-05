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
// @ts-ignore
import { GetSurveyResponse } from '../models';
// @ts-ignore
import { PostSurveySurveyNameApptableIdRequest } from '../models';
// @ts-ignore
import { PostSurveySurveyNameApptableIdResponse } from '../models';
/**
 * SurveyApi - axios parameter creator
 * @export
 */
export const SurveyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Insert and entry in a survey table (full fill the survey).  Refer Link for sample Body:  [ https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#survey_create ] 
         * @summary Create an entry in the survey table
         * @param {string} surveyName surveyName
         * @param {number} apptableId apptableId
         * @param {PostSurveySurveyNameApptableIdRequest} postSurveySurveyNameApptableIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDatatableEntry1: async (surveyName: string, apptableId: number, postSurveySurveyNameApptableIdRequest: PostSurveySurveyNameApptableIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyName' is not null or undefined
            assertParamExists('createDatatableEntry1', 'surveyName', surveyName)
            // verify required parameter 'apptableId' is not null or undefined
            assertParamExists('createDatatableEntry1', 'apptableId', apptableId)
            // verify required parameter 'postSurveySurveyNameApptableIdRequest' is not null or undefined
            assertParamExists('createDatatableEntry1', 'postSurveySurveyNameApptableIdRequest', postSurveySurveyNameApptableIdRequest)
            const localVarPath = `/survey/{surveyName}/{apptableId}`
                .replace(`{${"surveyName"}}`, encodeURIComponent(String(surveyName)))
                .replace(`{${"apptableId"}}`, encodeURIComponent(String(apptableId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postSurveySurveyNameApptableIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {number} fulfilledId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDatatableEntries2: async (surveyName: string, clientId: number, fulfilledId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyName' is not null or undefined
            assertParamExists('deleteDatatableEntries2', 'surveyName', surveyName)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('deleteDatatableEntries2', 'clientId', clientId)
            // verify required parameter 'fulfilledId' is not null or undefined
            assertParamExists('deleteDatatableEntries2', 'fulfilledId', fulfilledId)
            const localVarPath = `/survey/{surveyName}/{clientId}/{fulfilledId}`
                .replace(`{${"surveyName"}}`, encodeURIComponent(String(surveyName)))
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)))
                .replace(`{${"fulfilledId"}}`, encodeURIComponent(String(fulfilledId)));
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
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClientSurveyOverview: async (surveyName: string, clientId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyName' is not null or undefined
            assertParamExists('getClientSurveyOverview', 'surveyName', surveyName)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getClientSurveyOverview', 'clientId', clientId)
            const localVarPath = `/survey/{surveyName}/{clientId}`
                .replace(`{${"surveyName"}}`, encodeURIComponent(String(surveyName)))
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
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
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {number} entryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSurveyEntry: async (surveyName: string, clientId: number, entryId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyName' is not null or undefined
            assertParamExists('getSurveyEntry', 'surveyName', surveyName)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getSurveyEntry', 'clientId', clientId)
            // verify required parameter 'entryId' is not null or undefined
            assertParamExists('getSurveyEntry', 'entryId', entryId)
            const localVarPath = `/survey/{surveyName}/{clientId}/{entryId}`
                .replace(`{${"surveyName"}}`, encodeURIComponent(String(surveyName)))
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)))
                .replace(`{${"entryId"}}`, encodeURIComponent(String(entryId)));
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
         * @param {string} surveyName 
         * @param {string} apptable 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (surveyName: string, apptable: string, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyName' is not null or undefined
            assertParamExists('register', 'surveyName', surveyName)
            // verify required parameter 'apptable' is not null or undefined
            assertParamExists('register', 'apptable', apptable)
            const localVarPath = `/survey/register/{surveyName}/{apptable}`
                .replace(`{${"surveyName"}}`, encodeURIComponent(String(surveyName)))
                .replace(`{${"apptable"}}`, encodeURIComponent(String(apptable)));
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
        /**
         * Lists a registered survey table details and the Apache Fineract Core application table they are registered to.
         * @summary Retrieve survey
         * @param {string} surveyName surveyName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSurvey: async (surveyName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'surveyName' is not null or undefined
            assertParamExists('retrieveSurvey', 'surveyName', surveyName)
            const localVarPath = `/survey/{surveyName}`
                .replace(`{${"surveyName"}}`, encodeURIComponent(String(surveyName)));
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
         * Retrieve surveys. This allows to retrieve the list of survey tables registered .
         * @summary Retrieve surveys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSurveys: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/survey`;
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
    }
};

/**
 * SurveyApi - functional programming interface
 * @export
 */
export const SurveyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SurveyApiAxiosParamCreator(configuration)
    return {
        /**
         * Insert and entry in a survey table (full fill the survey).  Refer Link for sample Body:  [ https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#survey_create ] 
         * @summary Create an entry in the survey table
         * @param {string} surveyName surveyName
         * @param {number} apptableId apptableId
         * @param {PostSurveySurveyNameApptableIdRequest} postSurveySurveyNameApptableIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDatatableEntry1(surveyName: string, apptableId: number, postSurveySurveyNameApptableIdRequest: PostSurveySurveyNameApptableIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostSurveySurveyNameApptableIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDatatableEntry1(surveyName, apptableId, postSurveySurveyNameApptableIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {number} fulfilledId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDatatableEntries2(surveyName: string, clientId: number, fulfilledId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDatatableEntries2(surveyName, clientId, fulfilledId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClientSurveyOverview(surveyName: string, clientId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClientSurveyOverview(surveyName, clientId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {number} entryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSurveyEntry(surveyName: string, clientId: number, entryId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSurveyEntry(surveyName, clientId, entryId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {string} apptable 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(surveyName: string, apptable: string, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(surveyName, apptable, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists a registered survey table details and the Apache Fineract Core application table they are registered to.
         * @summary Retrieve survey
         * @param {string} surveyName surveyName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveSurvey(surveyName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSurveyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveSurvey(surveyName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve surveys. This allows to retrieve the list of survey tables registered .
         * @summary Retrieve surveys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveSurveys(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSurveyResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveSurveys(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SurveyApi - factory interface
 * @export
 */
export const SurveyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SurveyApiFp(configuration)
    return {
        /**
         * Insert and entry in a survey table (full fill the survey).  Refer Link for sample Body:  [ https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#survey_create ] 
         * @summary Create an entry in the survey table
         * @param {string} surveyName surveyName
         * @param {number} apptableId apptableId
         * @param {PostSurveySurveyNameApptableIdRequest} postSurveySurveyNameApptableIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDatatableEntry1(surveyName: string, apptableId: number, postSurveySurveyNameApptableIdRequest: PostSurveySurveyNameApptableIdRequest, options?: any): AxiosPromise<PostSurveySurveyNameApptableIdResponse> {
            return localVarFp.createDatatableEntry1(surveyName, apptableId, postSurveySurveyNameApptableIdRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {number} fulfilledId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDatatableEntries2(surveyName: string, clientId: number, fulfilledId: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteDatatableEntries2(surveyName, clientId, fulfilledId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClientSurveyOverview(surveyName: string, clientId: number, options?: any): AxiosPromise<string> {
            return localVarFp.getClientSurveyOverview(surveyName, clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {number} clientId 
         * @param {number} entryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSurveyEntry(surveyName: string, clientId: number, entryId: number, options?: any): AxiosPromise<string> {
            return localVarFp.getSurveyEntry(surveyName, clientId, entryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} surveyName 
         * @param {string} apptable 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(surveyName: string, apptable: string, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.register(surveyName, apptable, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists a registered survey table details and the Apache Fineract Core application table they are registered to.
         * @summary Retrieve survey
         * @param {string} surveyName surveyName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSurvey(surveyName: string, options?: any): AxiosPromise<GetSurveyResponse> {
            return localVarFp.retrieveSurvey(surveyName, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve surveys. This allows to retrieve the list of survey tables registered .
         * @summary Retrieve surveys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSurveys(options?: any): AxiosPromise<Array<GetSurveyResponse>> {
            return localVarFp.retrieveSurveys(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SurveyApi - object-oriented interface
 * @export
 * @class SurveyApi
 * @extends {BaseAPI}
 */
export class SurveyApi extends BaseAPI {
    /**
     * Insert and entry in a survey table (full fill the survey).  Refer Link for sample Body:  [ https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#survey_create ] 
     * @summary Create an entry in the survey table
     * @param {string} surveyName surveyName
     * @param {number} apptableId apptableId
     * @param {PostSurveySurveyNameApptableIdRequest} postSurveySurveyNameApptableIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public createDatatableEntry1(surveyName: string, apptableId: number, postSurveySurveyNameApptableIdRequest: PostSurveySurveyNameApptableIdRequest, options?: any) {
        return SurveyApiFp(this.configuration).createDatatableEntry1(surveyName, apptableId, postSurveySurveyNameApptableIdRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} surveyName 
     * @param {number} clientId 
     * @param {number} fulfilledId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public deleteDatatableEntries2(surveyName: string, clientId: number, fulfilledId: number, options?: any) {
        return SurveyApiFp(this.configuration).deleteDatatableEntries2(surveyName, clientId, fulfilledId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} surveyName 
     * @param {number} clientId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public getClientSurveyOverview(surveyName: string, clientId: number, options?: any) {
        return SurveyApiFp(this.configuration).getClientSurveyOverview(surveyName, clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} surveyName 
     * @param {number} clientId 
     * @param {number} entryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public getSurveyEntry(surveyName: string, clientId: number, entryId: number, options?: any) {
        return SurveyApiFp(this.configuration).getSurveyEntry(surveyName, clientId, entryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} surveyName 
     * @param {string} apptable 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public register(surveyName: string, apptable: string, body?: string, options?: any) {
        return SurveyApiFp(this.configuration).register(surveyName, apptable, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists a registered survey table details and the Apache Fineract Core application table they are registered to.
     * @summary Retrieve survey
     * @param {string} surveyName surveyName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public retrieveSurvey(surveyName: string, options?: any) {
        return SurveyApiFp(this.configuration).retrieveSurvey(surveyName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve surveys. This allows to retrieve the list of survey tables registered .
     * @summary Retrieve surveys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveyApi
     */
    public retrieveSurveys(options?: any) {
        return SurveyApiFp(this.configuration).retrieveSurveys(options).then((request) => request(this.axios, this.basePath));
    }
}
