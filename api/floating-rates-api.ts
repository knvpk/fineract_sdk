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
import { GetFloatingRatesFloatingRateIdResponse } from '../models';
// @ts-ignore
import { GetFloatingRatesResponse } from '../models';
// @ts-ignore
import { PostFloatingRatesRequest } from '../models';
// @ts-ignore
import { PostFloatingRatesResponse } from '../models';
// @ts-ignore
import { PutFloatingRatesFloatingRateIdRequest } from '../models';
// @ts-ignore
import { PutFloatingRatesFloatingRateIdResponse } from '../models';
/**
 * FloatingRatesApi - axios parameter creator
 * @export
 */
export const FloatingRatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Floating Rate Mandatory Fields: name Optional Fields: isBaseLendingRate, isActive, ratePeriods
         * @summary Create a new Floating Rate
         * @param {PostFloatingRatesRequest} postFloatingRatesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFloatingRate: async (postFloatingRatesRequest: PostFloatingRatesRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postFloatingRatesRequest' is not null or undefined
            assertParamExists('createFloatingRate', 'postFloatingRatesRequest', postFloatingRatesRequest)
            const localVarPath = `/floatingrates`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postFloatingRatesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists Floating Rates
         * @summary List Floating Rates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll22: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/floatingrates`;
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
         * Retrieves Floating Rate
         * @summary Retrieve Floating Rate
         * @param {number} floatingRateId floatingRateId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne12: async (floatingRateId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'floatingRateId' is not null or undefined
            assertParamExists('retrieveOne12', 'floatingRateId', floatingRateId)
            const localVarPath = `/floatingrates/{floatingRateId}`
                .replace(`{${"floatingRateId"}}`, encodeURIComponent(String(floatingRateId)));
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
         * Updates new Floating Rate. Rate Periods in the past cannot be modified. All the future rateperiods would be replaced with the new ratePeriods data sent.
         * @summary Update Floating Rate
         * @param {number} floatingRateId floatingRateId
         * @param {PutFloatingRatesFloatingRateIdRequest} putFloatingRatesFloatingRateIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFloatingRate: async (floatingRateId: number, putFloatingRatesFloatingRateIdRequest: PutFloatingRatesFloatingRateIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'floatingRateId' is not null or undefined
            assertParamExists('updateFloatingRate', 'floatingRateId', floatingRateId)
            // verify required parameter 'putFloatingRatesFloatingRateIdRequest' is not null or undefined
            assertParamExists('updateFloatingRate', 'putFloatingRatesFloatingRateIdRequest', putFloatingRatesFloatingRateIdRequest)
            const localVarPath = `/floatingrates/{floatingRateId}`
                .replace(`{${"floatingRateId"}}`, encodeURIComponent(String(floatingRateId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putFloatingRatesFloatingRateIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FloatingRatesApi - functional programming interface
 * @export
 */
export const FloatingRatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FloatingRatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new Floating Rate Mandatory Fields: name Optional Fields: isBaseLendingRate, isActive, ratePeriods
         * @summary Create a new Floating Rate
         * @param {PostFloatingRatesRequest} postFloatingRatesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFloatingRate(postFloatingRatesRequest: PostFloatingRatesRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostFloatingRatesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFloatingRate(postFloatingRatesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists Floating Rates
         * @summary List Floating Rates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll22(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetFloatingRatesResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll22(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves Floating Rate
         * @summary Retrieve Floating Rate
         * @param {number} floatingRateId floatingRateId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne12(floatingRateId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFloatingRatesFloatingRateIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne12(floatingRateId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates new Floating Rate. Rate Periods in the past cannot be modified. All the future rateperiods would be replaced with the new ratePeriods data sent.
         * @summary Update Floating Rate
         * @param {number} floatingRateId floatingRateId
         * @param {PutFloatingRatesFloatingRateIdRequest} putFloatingRatesFloatingRateIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFloatingRate(floatingRateId: number, putFloatingRatesFloatingRateIdRequest: PutFloatingRatesFloatingRateIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutFloatingRatesFloatingRateIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFloatingRate(floatingRateId, putFloatingRatesFloatingRateIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FloatingRatesApi - factory interface
 * @export
 */
export const FloatingRatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FloatingRatesApiFp(configuration)
    return {
        /**
         * Creates a new Floating Rate Mandatory Fields: name Optional Fields: isBaseLendingRate, isActive, ratePeriods
         * @summary Create a new Floating Rate
         * @param {PostFloatingRatesRequest} postFloatingRatesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFloatingRate(postFloatingRatesRequest: PostFloatingRatesRequest, options?: any): AxiosPromise<PostFloatingRatesResponse> {
            return localVarFp.createFloatingRate(postFloatingRatesRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists Floating Rates
         * @summary List Floating Rates
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll22(options?: any): AxiosPromise<Array<GetFloatingRatesResponse>> {
            return localVarFp.retrieveAll22(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves Floating Rate
         * @summary Retrieve Floating Rate
         * @param {number} floatingRateId floatingRateId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne12(floatingRateId: number, options?: any): AxiosPromise<GetFloatingRatesFloatingRateIdResponse> {
            return localVarFp.retrieveOne12(floatingRateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates new Floating Rate. Rate Periods in the past cannot be modified. All the future rateperiods would be replaced with the new ratePeriods data sent.
         * @summary Update Floating Rate
         * @param {number} floatingRateId floatingRateId
         * @param {PutFloatingRatesFloatingRateIdRequest} putFloatingRatesFloatingRateIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFloatingRate(floatingRateId: number, putFloatingRatesFloatingRateIdRequest: PutFloatingRatesFloatingRateIdRequest, options?: any): AxiosPromise<PutFloatingRatesFloatingRateIdResponse> {
            return localVarFp.updateFloatingRate(floatingRateId, putFloatingRatesFloatingRateIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FloatingRatesApi - object-oriented interface
 * @export
 * @class FloatingRatesApi
 * @extends {BaseAPI}
 */
export class FloatingRatesApi extends BaseAPI {
    /**
     * Creates a new Floating Rate Mandatory Fields: name Optional Fields: isBaseLendingRate, isActive, ratePeriods
     * @summary Create a new Floating Rate
     * @param {PostFloatingRatesRequest} postFloatingRatesRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FloatingRatesApi
     */
    public createFloatingRate(postFloatingRatesRequest: PostFloatingRatesRequest, options?: any) {
        return FloatingRatesApiFp(this.configuration).createFloatingRate(postFloatingRatesRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists Floating Rates
     * @summary List Floating Rates
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FloatingRatesApi
     */
    public retrieveAll22(options?: any) {
        return FloatingRatesApiFp(this.configuration).retrieveAll22(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves Floating Rate
     * @summary Retrieve Floating Rate
     * @param {number} floatingRateId floatingRateId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FloatingRatesApi
     */
    public retrieveOne12(floatingRateId: number, options?: any) {
        return FloatingRatesApiFp(this.configuration).retrieveOne12(floatingRateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates new Floating Rate. Rate Periods in the past cannot be modified. All the future rateperiods would be replaced with the new ratePeriods data sent.
     * @summary Update Floating Rate
     * @param {number} floatingRateId floatingRateId
     * @param {PutFloatingRatesFloatingRateIdRequest} putFloatingRatesFloatingRateIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FloatingRatesApi
     */
    public updateFloatingRate(floatingRateId: number, putFloatingRatesFloatingRateIdRequest: PutFloatingRatesFloatingRateIdRequest, options?: any) {
        return FloatingRatesApiFp(this.configuration).updateFloatingRate(floatingRateId, putFloatingRatesFloatingRateIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
