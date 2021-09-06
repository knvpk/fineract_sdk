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
import { DeleteInterestRateChartsChartIdResponse } from '../models';
// @ts-ignore
import { GetInterestRateChartsResponse } from '../models';
// @ts-ignore
import { GetInterestRateChartsTemplateResponse } from '../models';
// @ts-ignore
import { PostInterestRateChartsRequest } from '../models';
// @ts-ignore
import { PostInterestRateChartsResponse } from '../models';
// @ts-ignore
import { PutInterestRateChartsChartIdRequest } from '../models';
// @ts-ignore
import { PutInterestRateChartsChartIdResponse } from '../models';
/**
 * InterestRateChartApi - axios parameter creator
 * @export
 */
export const InterestRateChartApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new chart which can be attached to a term deposit products (FD or RD).
         * @summary Create a Chart
         * @param {PostInterestRateChartsRequest} postInterestRateChartsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create10: async (postInterestRateChartsRequest: PostInterestRateChartsRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postInterestRateChartsRequest' is not null or undefined
            assertParamExists('create10', 'postInterestRateChartsRequest', postInterestRateChartsRequest)
            const localVarPath = `/interestratecharts`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postInterestRateChartsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * It deletes the chart
         * @summary Delete a Chart
         * @param {number} chartId chartId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete13: async (chartId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'chartId' is not null or undefined
            assertParamExists('delete13', 'chartId', chartId)
            const localVarPath = `/interestratecharts/{chartId}`
                .replace(`{${"chartId"}}`, encodeURIComponent(String(chartId)));
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
         * Retrieve list of charts associated with a term deposit product(FD or RD). Example Requests:  interestratecharts?productId=1
         * @summary Retrieve all Charts
         * @param {number} [productId] productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll26: async (productId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/interestratecharts`;
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

            if (productId !== undefined) {
                localVarQueryParameter['productId'] = productId;
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
         * It retrieves the Interest Rate Chart Example Requests:  interestratecharts/1
         * @summary Retrieve a Chart
         * @param {number} chartId chartId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne16: async (chartId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'chartId' is not null or undefined
            assertParamExists('retrieveOne16', 'chartId', chartId)
            const localVarPath = `/interestratecharts/{chartId}`
                .replace(`{${"chartId"}}`, encodeURIComponent(String(chartId)));
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for creating a chart. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  interestratecharts/template
         * @summary Retrieve Chart Details Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template9: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/interestratecharts/template`;
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
         * It updates the chart
         * @summary Update a Chart
         * @param {number} chartId chartId
         * @param {PutInterestRateChartsChartIdRequest} putInterestRateChartsChartIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update14: async (chartId: number, putInterestRateChartsChartIdRequest: PutInterestRateChartsChartIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'chartId' is not null or undefined
            assertParamExists('update14', 'chartId', chartId)
            // verify required parameter 'putInterestRateChartsChartIdRequest' is not null or undefined
            assertParamExists('update14', 'putInterestRateChartsChartIdRequest', putInterestRateChartsChartIdRequest)
            const localVarPath = `/interestratecharts/{chartId}`
                .replace(`{${"chartId"}}`, encodeURIComponent(String(chartId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putInterestRateChartsChartIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InterestRateChartApi - functional programming interface
 * @export
 */
export const InterestRateChartApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InterestRateChartApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new chart which can be attached to a term deposit products (FD or RD).
         * @summary Create a Chart
         * @param {PostInterestRateChartsRequest} postInterestRateChartsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create10(postInterestRateChartsRequest: PostInterestRateChartsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostInterestRateChartsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create10(postInterestRateChartsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It deletes the chart
         * @summary Delete a Chart
         * @param {number} chartId chartId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete13(chartId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteInterestRateChartsChartIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete13(chartId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve list of charts associated with a term deposit product(FD or RD). Example Requests:  interestratecharts?productId=1
         * @summary Retrieve all Charts
         * @param {number} [productId] productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll26(productId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetInterestRateChartsResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll26(productId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It retrieves the Interest Rate Chart Example Requests:  interestratecharts/1
         * @summary Retrieve a Chart
         * @param {number} chartId chartId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne16(chartId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInterestRateChartsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne16(chartId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for creating a chart. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  interestratecharts/template
         * @summary Retrieve Chart Details Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async template9(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInterestRateChartsTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.template9(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It updates the chart
         * @summary Update a Chart
         * @param {number} chartId chartId
         * @param {PutInterestRateChartsChartIdRequest} putInterestRateChartsChartIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update14(chartId: number, putInterestRateChartsChartIdRequest: PutInterestRateChartsChartIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutInterestRateChartsChartIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update14(chartId, putInterestRateChartsChartIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InterestRateChartApi - factory interface
 * @export
 */
export const InterestRateChartApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InterestRateChartApiFp(configuration)
    return {
        /**
         * Creates a new chart which can be attached to a term deposit products (FD or RD).
         * @summary Create a Chart
         * @param {PostInterestRateChartsRequest} postInterestRateChartsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create10(postInterestRateChartsRequest: PostInterestRateChartsRequest, options?: any): AxiosPromise<PostInterestRateChartsResponse> {
            return localVarFp.create10(postInterestRateChartsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * It deletes the chart
         * @summary Delete a Chart
         * @param {number} chartId chartId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete13(chartId: number, options?: any): AxiosPromise<DeleteInterestRateChartsChartIdResponse> {
            return localVarFp.delete13(chartId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve list of charts associated with a term deposit product(FD or RD). Example Requests:  interestratecharts?productId=1
         * @summary Retrieve all Charts
         * @param {number} [productId] productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll26(productId?: number, options?: any): AxiosPromise<Array<GetInterestRateChartsResponse>> {
            return localVarFp.retrieveAll26(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * It retrieves the Interest Rate Chart Example Requests:  interestratecharts/1
         * @summary Retrieve a Chart
         * @param {number} chartId chartId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne16(chartId: number, options?: any): AxiosPromise<GetInterestRateChartsResponse> {
            return localVarFp.retrieveOne16(chartId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for creating a chart. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  interestratecharts/template
         * @summary Retrieve Chart Details Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template9(options?: any): AxiosPromise<GetInterestRateChartsTemplateResponse> {
            return localVarFp.template9(options).then((request) => request(axios, basePath));
        },
        /**
         * It updates the chart
         * @summary Update a Chart
         * @param {number} chartId chartId
         * @param {PutInterestRateChartsChartIdRequest} putInterestRateChartsChartIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update14(chartId: number, putInterestRateChartsChartIdRequest: PutInterestRateChartsChartIdRequest, options?: any): AxiosPromise<PutInterestRateChartsChartIdResponse> {
            return localVarFp.update14(chartId, putInterestRateChartsChartIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InterestRateChartApi - object-oriented interface
 * @export
 * @class InterestRateChartApi
 * @extends {BaseAPI}
 */
export class InterestRateChartApi extends BaseAPI {
    /**
     * Creates a new chart which can be attached to a term deposit products (FD or RD).
     * @summary Create a Chart
     * @param {PostInterestRateChartsRequest} postInterestRateChartsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestRateChartApi
     */
    public create10(postInterestRateChartsRequest: PostInterestRateChartsRequest, options?: any) {
        return InterestRateChartApiFp(this.configuration).create10(postInterestRateChartsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It deletes the chart
     * @summary Delete a Chart
     * @param {number} chartId chartId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestRateChartApi
     */
    public delete13(chartId: number, options?: any) {
        return InterestRateChartApiFp(this.configuration).delete13(chartId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve list of charts associated with a term deposit product(FD or RD). Example Requests:  interestratecharts?productId=1
     * @summary Retrieve all Charts
     * @param {number} [productId] productId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestRateChartApi
     */
    public retrieveAll26(productId?: number, options?: any) {
        return InterestRateChartApiFp(this.configuration).retrieveAll26(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It retrieves the Interest Rate Chart Example Requests:  interestratecharts/1
     * @summary Retrieve a Chart
     * @param {number} chartId chartId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestRateChartApi
     */
    public retrieveOne16(chartId: number, options?: any) {
        return InterestRateChartApiFp(this.configuration).retrieveOne16(chartId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for creating a chart. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  interestratecharts/template
     * @summary Retrieve Chart Details Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestRateChartApi
     */
    public template9(options?: any) {
        return InterestRateChartApiFp(this.configuration).template9(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It updates the chart
     * @summary Update a Chart
     * @param {number} chartId chartId
     * @param {PutInterestRateChartsChartIdRequest} putInterestRateChartsChartIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestRateChartApi
     */
    public update14(chartId: number, putInterestRateChartsChartIdRequest: PutInterestRateChartsChartIdRequest, options?: any) {
        return InterestRateChartApiFp(this.configuration).update14(chartId, putInterestRateChartsChartIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}