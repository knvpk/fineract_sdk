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
 * SelfDividendApi - axios parameter creator
 * @export
 */
export const SelfDividendApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} productId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDividendDetail: async (productId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('createDividendDetail', 'productId', productId)
            const localVarPath = `/shareproduct/{productId}/dividend`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
         * @param {number} productId 
         * @param {number} dividendId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDividendDetail: async (productId: number, dividendId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('deleteDividendDetail', 'productId', productId)
            // verify required parameter 'dividendId' is not null or undefined
            assertParamExists('deleteDividendDetail', 'dividendId', dividendId)
            const localVarPath = `/shareproduct/{productId}/dividend/{dividendId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)))
                .replace(`{${"dividendId"}}`, encodeURIComponent(String(dividendId)));
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
         * @param {number} productId 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [orderBy] 
         * @param {string} [sortOrder] 
         * @param {number} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll39: async (productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, status?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('retrieveAll39', 'productId', productId)
            const localVarPath = `/shareproduct/{productId}/dividend`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * @param {number} dividendId 
         * @param {number} productId 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [orderBy] 
         * @param {string} [sortOrder] 
         * @param {string} [accountNo] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveDividendDetails: async (dividendId: number, productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountNo?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dividendId' is not null or undefined
            assertParamExists('retrieveDividendDetails', 'dividendId', dividendId)
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('retrieveDividendDetails', 'productId', productId)
            const localVarPath = `/shareproduct/{productId}/dividend/{dividendId}`
                .replace(`{${"dividendId"}}`, encodeURIComponent(String(dividendId)))
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (accountNo !== undefined) {
                localVarQueryParameter['accountNo'] = accountNo;
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
         * @param {number} productId 
         * @param {number} dividendId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDividendDetail: async (productId: number, dividendId: number, command?: string, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('updateDividendDetail', 'productId', productId)
            // verify required parameter 'dividendId' is not null or undefined
            assertParamExists('updateDividendDetail', 'dividendId', dividendId)
            const localVarPath = `/shareproduct/{productId}/dividend/{dividendId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)))
                .replace(`{${"dividendId"}}`, encodeURIComponent(String(dividendId)));
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
    }
};

/**
 * SelfDividendApi - functional programming interface
 * @export
 */
export const SelfDividendApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SelfDividendApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} productId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDividendDetail(productId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDividendDetail(productId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} productId 
         * @param {number} dividendId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDividendDetail(productId: number, dividendId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDividendDetail(productId, dividendId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} productId 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [orderBy] 
         * @param {string} [sortOrder] 
         * @param {number} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll39(productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, status?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll39(productId, offset, limit, orderBy, sortOrder, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} dividendId 
         * @param {number} productId 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [orderBy] 
         * @param {string} [sortOrder] 
         * @param {string} [accountNo] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveDividendDetails(dividendId: number, productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountNo?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveDividendDetails(dividendId, productId, offset, limit, orderBy, sortOrder, accountNo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} productId 
         * @param {number} dividendId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDividendDetail(productId: number, dividendId: number, command?: string, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDividendDetail(productId, dividendId, command, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SelfDividendApi - factory interface
 * @export
 */
export const SelfDividendApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SelfDividendApiFp(configuration)
    return {
        /**
         * 
         * @param {number} productId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDividendDetail(productId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.createDividendDetail(productId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} productId 
         * @param {number} dividendId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDividendDetail(productId: number, dividendId: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteDividendDetail(productId, dividendId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} productId 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [orderBy] 
         * @param {string} [sortOrder] 
         * @param {number} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll39(productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, status?: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveAll39(productId, offset, limit, orderBy, sortOrder, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} dividendId 
         * @param {number} productId 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [orderBy] 
         * @param {string} [sortOrder] 
         * @param {string} [accountNo] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveDividendDetails(dividendId: number, productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountNo?: string, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveDividendDetails(dividendId, productId, offset, limit, orderBy, sortOrder, accountNo, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} productId 
         * @param {number} dividendId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDividendDetail(productId: number, dividendId: number, command?: string, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateDividendDetail(productId, dividendId, command, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SelfDividendApi - object-oriented interface
 * @export
 * @class SelfDividendApi
 * @extends {BaseAPI}
 */
export class SelfDividendApi extends BaseAPI {
    /**
     * 
     * @param {number} productId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfDividendApi
     */
    public createDividendDetail(productId: number, body?: string, options?: any) {
        return SelfDividendApiFp(this.configuration).createDividendDetail(productId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} productId 
     * @param {number} dividendId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfDividendApi
     */
    public deleteDividendDetail(productId: number, dividendId: number, options?: any) {
        return SelfDividendApiFp(this.configuration).deleteDividendDetail(productId, dividendId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} productId 
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {string} [orderBy] 
     * @param {string} [sortOrder] 
     * @param {number} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfDividendApi
     */
    public retrieveAll39(productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, status?: number, options?: any) {
        return SelfDividendApiFp(this.configuration).retrieveAll39(productId, offset, limit, orderBy, sortOrder, status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} dividendId 
     * @param {number} productId 
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {string} [orderBy] 
     * @param {string} [sortOrder] 
     * @param {string} [accountNo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfDividendApi
     */
    public retrieveDividendDetails(dividendId: number, productId: number, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountNo?: string, options?: any) {
        return SelfDividendApiFp(this.configuration).retrieveDividendDetails(dividendId, productId, offset, limit, orderBy, sortOrder, accountNo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} productId 
     * @param {number} dividendId 
     * @param {string} [command] 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfDividendApi
     */
    public updateDividendDetail(productId: number, dividendId: number, command?: string, body?: string, options?: any) {
        return SelfDividendApiFp(this.configuration).updateDividendDetail(productId, dividendId, command, body, options).then((request) => request(this.axios, this.basePath));
    }
}
