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
import { GetClientClientIdAddressesResponse } from '../models';
// @ts-ignore
import { PostClientClientIdAddressesRequest } from '../models';
// @ts-ignore
import { PostClientClientIdAddressesResponse } from '../models';
// @ts-ignore
import { PutClientClientIdAddressesRequest } from '../models';
// @ts-ignore
import { PutClientClientIdAddressesResponse } from '../models';
/**
 * ClientsAddressApi - axios parameter creator
 * @export
 */
export const ClientsAddressApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Mandatory Fields :  type and clientId
         * @summary Create an address for a Client
         * @param {number} clientid clientId
         * @param {PostClientClientIdAddressesRequest} postClientClientIdAddressesRequest 
         * @param {number} [type] type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClientAddress: async (clientid: number, postClientClientIdAddressesRequest: PostClientClientIdAddressesRequest, type?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientid' is not null or undefined
            assertParamExists('addClientAddress', 'clientid', clientid)
            // verify required parameter 'postClientClientIdAddressesRequest' is not null or undefined
            assertParamExists('addClientAddress', 'postClientClientIdAddressesRequest', postClientClientIdAddressesRequest)
            const localVarPath = `/client/{clientid}/addresses`
                .replace(`{${"clientid"}}`, encodeURIComponent(String(clientid)));
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

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postClientClientIdAddressesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Example Requests:  client/1/addresses   clients/1/addresses?status=false,true&&type=1,2,3
         * @summary List all addresses for a Client
         * @param {number} clientid clientId
         * @param {string} [status] status
         * @param {number} [type] type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAddresses1: async (clientid: number, status?: string, type?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientid' is not null or undefined
            assertParamExists('getAddresses1', 'clientid', clientid)
            const localVarPath = `/client/{clientid}/addresses`
                .replace(`{${"clientid"}}`, encodeURIComponent(String(clientid)));
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

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAddressesTemplate: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/client/addresses/template`;
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
         * All the address fields can be updated by using update client address API  Mandatory Fields type and addressId
         * @summary Update an address for a Client
         * @param {number} clientid clientId
         * @param {PutClientClientIdAddressesRequest} putClientClientIdAddressesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClientAddress: async (clientid: number, putClientClientIdAddressesRequest: PutClientClientIdAddressesRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientid' is not null or undefined
            assertParamExists('updateClientAddress', 'clientid', clientid)
            // verify required parameter 'putClientClientIdAddressesRequest' is not null or undefined
            assertParamExists('updateClientAddress', 'putClientClientIdAddressesRequest', putClientClientIdAddressesRequest)
            const localVarPath = `/client/{clientid}/addresses`
                .replace(`{${"clientid"}}`, encodeURIComponent(String(clientid)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putClientClientIdAddressesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClientsAddressApi - functional programming interface
 * @export
 */
export const ClientsAddressApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientsAddressApiAxiosParamCreator(configuration)
    return {
        /**
         * Mandatory Fields :  type and clientId
         * @summary Create an address for a Client
         * @param {number} clientid clientId
         * @param {PostClientClientIdAddressesRequest} postClientClientIdAddressesRequest 
         * @param {number} [type] type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addClientAddress(clientid: number, postClientClientIdAddressesRequest: PostClientClientIdAddressesRequest, type?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostClientClientIdAddressesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addClientAddress(clientid, postClientClientIdAddressesRequest, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Example Requests:  client/1/addresses   clients/1/addresses?status=false,true&&type=1,2,3
         * @summary List all addresses for a Client
         * @param {number} clientid clientId
         * @param {string} [status] status
         * @param {number} [type] type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAddresses1(clientid: number, status?: string, type?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetClientClientIdAddressesResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAddresses1(clientid, status, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAddressesTemplate(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAddressesTemplate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * All the address fields can be updated by using update client address API  Mandatory Fields type and addressId
         * @summary Update an address for a Client
         * @param {number} clientid clientId
         * @param {PutClientClientIdAddressesRequest} putClientClientIdAddressesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClientAddress(clientid: number, putClientClientIdAddressesRequest: PutClientClientIdAddressesRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutClientClientIdAddressesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClientAddress(clientid, putClientClientIdAddressesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClientsAddressApi - factory interface
 * @export
 */
export const ClientsAddressApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientsAddressApiFp(configuration)
    return {
        /**
         * Mandatory Fields :  type and clientId
         * @summary Create an address for a Client
         * @param {number} clientid clientId
         * @param {PostClientClientIdAddressesRequest} postClientClientIdAddressesRequest 
         * @param {number} [type] type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClientAddress(clientid: number, postClientClientIdAddressesRequest: PostClientClientIdAddressesRequest, type?: number, options?: any): AxiosPromise<PostClientClientIdAddressesResponse> {
            return localVarFp.addClientAddress(clientid, postClientClientIdAddressesRequest, type, options).then((request) => request(axios, basePath));
        },
        /**
         * Example Requests:  client/1/addresses   clients/1/addresses?status=false,true&&type=1,2,3
         * @summary List all addresses for a Client
         * @param {number} clientid clientId
         * @param {string} [status] status
         * @param {number} [type] type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAddresses1(clientid: number, status?: string, type?: number, options?: any): AxiosPromise<Array<GetClientClientIdAddressesResponse>> {
            return localVarFp.getAddresses1(clientid, status, type, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAddressesTemplate(options?: any): AxiosPromise<string> {
            return localVarFp.getAddressesTemplate(options).then((request) => request(axios, basePath));
        },
        /**
         * All the address fields can be updated by using update client address API  Mandatory Fields type and addressId
         * @summary Update an address for a Client
         * @param {number} clientid clientId
         * @param {PutClientClientIdAddressesRequest} putClientClientIdAddressesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClientAddress(clientid: number, putClientClientIdAddressesRequest: PutClientClientIdAddressesRequest, options?: any): AxiosPromise<PutClientClientIdAddressesResponse> {
            return localVarFp.updateClientAddress(clientid, putClientClientIdAddressesRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientsAddressApi - object-oriented interface
 * @export
 * @class ClientsAddressApi
 * @extends {BaseAPI}
 */
export class ClientsAddressApi extends BaseAPI {
    /**
     * Mandatory Fields :  type and clientId
     * @summary Create an address for a Client
     * @param {number} clientid clientId
     * @param {PostClientClientIdAddressesRequest} postClientClientIdAddressesRequest 
     * @param {number} [type] type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsAddressApi
     */
    public addClientAddress(clientid: number, postClientClientIdAddressesRequest: PostClientClientIdAddressesRequest, type?: number, options?: any) {
        return ClientsAddressApiFp(this.configuration).addClientAddress(clientid, postClientClientIdAddressesRequest, type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Example Requests:  client/1/addresses   clients/1/addresses?status=false,true&&type=1,2,3
     * @summary List all addresses for a Client
     * @param {number} clientid clientId
     * @param {string} [status] status
     * @param {number} [type] type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsAddressApi
     */
    public getAddresses1(clientid: number, status?: string, type?: number, options?: any) {
        return ClientsAddressApiFp(this.configuration).getAddresses1(clientid, status, type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsAddressApi
     */
    public getAddressesTemplate(options?: any) {
        return ClientsAddressApiFp(this.configuration).getAddressesTemplate(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * All the address fields can be updated by using update client address API  Mandatory Fields type and addressId
     * @summary Update an address for a Client
     * @param {number} clientid clientId
     * @param {PutClientClientIdAddressesRequest} putClientClientIdAddressesRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsAddressApi
     */
    public updateClientAddress(clientid: number, putClientClientIdAddressesRequest: PutClientClientIdAddressesRequest, options?: any) {
        return ClientsAddressApiFp(this.configuration).updateClientAddress(clientid, putClientClientIdAddressesRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
