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
 * FineractEntityApi - axios parameter creator
 * @export
 */
export const FineractEntityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} relId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMap: async (relId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'relId' is not null or undefined
            assertParamExists('createMap', 'relId', relId)
            const localVarPath = `/entitytoentitymapping/{relId}`
                .replace(`{${"relId"}}`, encodeURIComponent(String(relId)));
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
         * @param {number} mapId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete4: async (mapId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'mapId' is not null or undefined
            assertParamExists('delete4', 'mapId', mapId)
            const localVarPath = `/entitytoentitymapping/{mapId}`
                .replace(`{${"mapId"}}`, encodeURIComponent(String(mapId)));
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
         * @param {number} mapId 
         * @param {number} fromId 
         * @param {number} toId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEntityToEntityMappings: async (mapId: number, fromId: number, toId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'mapId' is not null or undefined
            assertParamExists('getEntityToEntityMappings', 'mapId', mapId)
            // verify required parameter 'fromId' is not null or undefined
            assertParamExists('getEntityToEntityMappings', 'fromId', fromId)
            // verify required parameter 'toId' is not null or undefined
            assertParamExists('getEntityToEntityMappings', 'toId', toId)
            const localVarPath = `/entitytoentitymapping/{mapId}/{fromId}/{toId}`
                .replace(`{${"mapId"}}`, encodeURIComponent(String(mapId)))
                .replace(`{${"fromId"}}`, encodeURIComponent(String(fromId)))
                .replace(`{${"toId"}}`, encodeURIComponent(String(toId)));
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll7: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/entitytoentitymapping`;
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
         * @param {number} mapId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne4: async (mapId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'mapId' is not null or undefined
            assertParamExists('retrieveOne4', 'mapId', mapId)
            const localVarPath = `/entitytoentitymapping/{mapId}`
                .replace(`{${"mapId"}}`, encodeURIComponent(String(mapId)));
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
         * @param {number} mapId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMap: async (mapId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'mapId' is not null or undefined
            assertParamExists('updateMap', 'mapId', mapId)
            const localVarPath = `/entitytoentitymapping/{mapId}`
                .replace(`{${"mapId"}}`, encodeURIComponent(String(mapId)));
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
 * FineractEntityApi - functional programming interface
 * @export
 */
export const FineractEntityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FineractEntityApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} relId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMap(relId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMap(relId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} mapId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete4(mapId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete4(mapId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} mapId 
         * @param {number} fromId 
         * @param {number} toId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEntityToEntityMappings(mapId: number, fromId: number, toId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEntityToEntityMappings(mapId, fromId, toId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll7(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll7(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} mapId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne4(mapId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne4(mapId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} mapId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMap(mapId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMap(mapId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FineractEntityApi - factory interface
 * @export
 */
export const FineractEntityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FineractEntityApiFp(configuration)
    return {
        /**
         * 
         * @param {number} relId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMap(relId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.createMap(relId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} mapId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete4(mapId: number, options?: any): AxiosPromise<string> {
            return localVarFp.delete4(mapId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} mapId 
         * @param {number} fromId 
         * @param {number} toId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEntityToEntityMappings(mapId: number, fromId: number, toId: number, options?: any): AxiosPromise<string> {
            return localVarFp.getEntityToEntityMappings(mapId, fromId, toId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll7(options?: any): AxiosPromise<string> {
            return localVarFp.retrieveAll7(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} mapId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne4(mapId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveOne4(mapId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} mapId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMap(mapId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateMap(mapId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FineractEntityApi - object-oriented interface
 * @export
 * @class FineractEntityApi
 * @extends {BaseAPI}
 */
export class FineractEntityApi extends BaseAPI {
    /**
     * 
     * @param {number} relId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FineractEntityApi
     */
    public createMap(relId: number, body?: string, options?: any) {
        return FineractEntityApiFp(this.configuration).createMap(relId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} mapId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FineractEntityApi
     */
    public delete4(mapId: number, options?: any) {
        return FineractEntityApiFp(this.configuration).delete4(mapId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} mapId 
     * @param {number} fromId 
     * @param {number} toId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FineractEntityApi
     */
    public getEntityToEntityMappings(mapId: number, fromId: number, toId: number, options?: any) {
        return FineractEntityApiFp(this.configuration).getEntityToEntityMappings(mapId, fromId, toId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FineractEntityApi
     */
    public retrieveAll7(options?: any) {
        return FineractEntityApiFp(this.configuration).retrieveAll7(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} mapId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FineractEntityApi
     */
    public retrieveOne4(mapId: number, options?: any) {
        return FineractEntityApiFp(this.configuration).retrieveOne4(mapId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} mapId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FineractEntityApi
     */
    public updateMap(mapId: number, body?: string, options?: any) {
        return FineractEntityApiFp(this.configuration).updateMap(mapId, body, options).then((request) => request(this.axios, this.basePath));
    }
}
