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
 * ClientFamilyMemberApi - axios parameter creator
 * @export
 */
export const ClientFamilyMemberApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} clientId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClientFamilyMembers: async (clientId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('addClientFamilyMembers', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/familymembers`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
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
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClientFamilyMembers: async (familyMemberId: number, clientId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'familyMemberId' is not null or undefined
            assertParamExists('deleteClientFamilyMembers', 'familyMemberId', familyMemberId)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('deleteClientFamilyMembers', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/familymembers/{familyMemberId}`
                .replace(`{${"familyMemberId"}}`, encodeURIComponent(String(familyMemberId)))
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
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
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFamilyMember: async (familyMemberId: number, clientId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'familyMemberId' is not null or undefined
            assertParamExists('getFamilyMember', 'familyMemberId', familyMemberId)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getFamilyMember', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/familymembers/{familyMemberId}`
                .replace(`{${"familyMemberId"}}`, encodeURIComponent(String(familyMemberId)))
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
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFamilyMembers: async (clientId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getFamilyMembers', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/familymembers`
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
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate2: async (clientId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getTemplate2', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/familymembers/template`
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
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClientFamilyMembers: async (familyMemberId: number, clientId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'familyMemberId' is not null or undefined
            assertParamExists('updateClientFamilyMembers', 'familyMemberId', familyMemberId)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('updateClientFamilyMembers', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/familymembers/{familyMemberId}`
                .replace(`{${"familyMemberId"}}`, encodeURIComponent(String(familyMemberId)))
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)));
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
 * ClientFamilyMemberApi - functional programming interface
 * @export
 */
export const ClientFamilyMemberApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientFamilyMemberApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} clientId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addClientFamilyMembers(clientId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addClientFamilyMembers(clientId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteClientFamilyMembers(familyMemberId: number, clientId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteClientFamilyMembers(familyMemberId, clientId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFamilyMember(familyMemberId: number, clientId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFamilyMember(familyMemberId, clientId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFamilyMembers(clientId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFamilyMembers(clientId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTemplate2(clientId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTemplate2(clientId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClientFamilyMembers(familyMemberId: number, clientId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClientFamilyMembers(familyMemberId, clientId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClientFamilyMemberApi - factory interface
 * @export
 */
export const ClientFamilyMemberApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientFamilyMemberApiFp(configuration)
    return {
        /**
         * 
         * @param {number} clientId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClientFamilyMembers(clientId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.addClientFamilyMembers(clientId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClientFamilyMembers(familyMemberId: number, clientId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.deleteClientFamilyMembers(familyMemberId, clientId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFamilyMember(familyMemberId: number, clientId: number, options?: any): AxiosPromise<string> {
            return localVarFp.getFamilyMember(familyMemberId, clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFamilyMembers(clientId: number, options?: any): AxiosPromise<string> {
            return localVarFp.getFamilyMembers(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} clientId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate2(clientId: number, options?: any): AxiosPromise<string> {
            return localVarFp.getTemplate2(clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} familyMemberId 
         * @param {number} clientId clientId
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClientFamilyMembers(familyMemberId: number, clientId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateClientFamilyMembers(familyMemberId, clientId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientFamilyMemberApi - object-oriented interface
 * @export
 * @class ClientFamilyMemberApi
 * @extends {BaseAPI}
 */
export class ClientFamilyMemberApi extends BaseAPI {
    /**
     * 
     * @param {number} clientId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientFamilyMemberApi
     */
    public addClientFamilyMembers(clientId: number, body?: string, options?: any) {
        return ClientFamilyMemberApiFp(this.configuration).addClientFamilyMembers(clientId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} familyMemberId 
     * @param {number} clientId clientId
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientFamilyMemberApi
     */
    public deleteClientFamilyMembers(familyMemberId: number, clientId: number, body?: string, options?: any) {
        return ClientFamilyMemberApiFp(this.configuration).deleteClientFamilyMembers(familyMemberId, clientId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} familyMemberId 
     * @param {number} clientId clientId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientFamilyMemberApi
     */
    public getFamilyMember(familyMemberId: number, clientId: number, options?: any) {
        return ClientFamilyMemberApiFp(this.configuration).getFamilyMember(familyMemberId, clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} clientId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientFamilyMemberApi
     */
    public getFamilyMembers(clientId: number, options?: any) {
        return ClientFamilyMemberApiFp(this.configuration).getFamilyMembers(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} clientId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientFamilyMemberApi
     */
    public getTemplate2(clientId: number, options?: any) {
        return ClientFamilyMemberApiFp(this.configuration).getTemplate2(clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} familyMemberId 
     * @param {number} clientId clientId
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientFamilyMemberApi
     */
    public updateClientFamilyMembers(familyMemberId: number, clientId: number, body?: string, options?: any) {
        return ClientFamilyMemberApiFp(this.configuration).updateClientFamilyMembers(familyMemberId, clientId, body, options).then((request) => request(this.axios, this.basePath));
    }
}
