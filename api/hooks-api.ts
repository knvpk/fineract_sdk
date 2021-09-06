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
import { DeleteHookResponse } from '../models';
// @ts-ignore
import { GetHookResponse } from '../models';
// @ts-ignore
import { GetHookTemplateResponse } from '../models';
// @ts-ignore
import { PostHookRequest } from '../models';
// @ts-ignore
import { PostHookResponse } from '../models';
// @ts-ignore
import { PutHookRequest } from '../models';
// @ts-ignore
import { PutHookResponse } from '../models';
/**
 * HooksApi - axios parameter creator
 * @export
 */
export const HooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The following parameters can be passed for the creation of a hook :-  name - string - Required. The name of the template that is being called. (See /hooks/template for the list of valid hook names.)  isActive - boolean - Determines whether the hook is actually triggered.  events - array - Determines what events the hook is triggered for.  config - hash - Required. Key/value pairs to provide settings for this hook. These settings vary between the templates.  templateId - Optional. The UGD template ID associated with the same entity (client or loan).
         * @summary Create a Hook
         * @param {PostHookRequest} postHookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createHook: async (postHookRequest: PostHookRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postHookRequest' is not null or undefined
            assertParamExists('createHook', 'postHookRequest', postHookRequest)
            const localVarPath = `/hooks`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postHookRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a hook.
         * @summary Delete a Hook
         * @param {number} hookId hookId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteHook: async (hookId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('deleteHook', 'hookId', hookId)
            const localVarPath = `/hooks/{hookId}`
                .replace(`{${"hookId"}}`, encodeURIComponent(String(hookId)));
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
         * Returns the details of a Hook.  Example Requests:  hooks/1
         * @summary Retrieve a Hook
         * @param {number} hookId hookId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveHook: async (hookId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('retrieveHook', 'hookId', hookId)
            const localVarPath = `/hooks/{hookId}`
                .replace(`{${"hookId"}}`, encodeURIComponent(String(hookId)));
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
         * Returns the list of hooks.  Example Requests:  hooks
         * @summary Retrieve Hooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveHooks: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/hooks`;
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  hooks/template
         * @summary Retrieve Hooks Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template3: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/hooks/template`;
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
         * Updates the details of a hook.
         * @summary Update a Hook
         * @param {number} hookId hookId
         * @param {PutHookRequest} putHookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateHook: async (hookId: number, putHookRequest: PutHookRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('updateHook', 'hookId', hookId)
            // verify required parameter 'putHookRequest' is not null or undefined
            assertParamExists('updateHook', 'putHookRequest', putHookRequest)
            const localVarPath = `/hooks/{hookId}`
                .replace(`{${"hookId"}}`, encodeURIComponent(String(hookId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putHookRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HooksApi - functional programming interface
 * @export
 */
export const HooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HooksApiAxiosParamCreator(configuration)
    return {
        /**
         * The following parameters can be passed for the creation of a hook :-  name - string - Required. The name of the template that is being called. (See /hooks/template for the list of valid hook names.)  isActive - boolean - Determines whether the hook is actually triggered.  events - array - Determines what events the hook is triggered for.  config - hash - Required. Key/value pairs to provide settings for this hook. These settings vary between the templates.  templateId - Optional. The UGD template ID associated with the same entity (client or loan).
         * @summary Create a Hook
         * @param {PostHookRequest} postHookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createHook(postHookRequest: PostHookRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createHook(postHookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a hook.
         * @summary Delete a Hook
         * @param {number} hookId hookId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteHook(hookId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteHook(hookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the details of a Hook.  Example Requests:  hooks/1
         * @summary Retrieve a Hook
         * @param {number} hookId hookId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveHook(hookId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveHook(hookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the list of hooks.  Example Requests:  hooks
         * @summary Retrieve Hooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveHooks(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetHookResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveHooks(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  hooks/template
         * @summary Retrieve Hooks Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async template3(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetHookTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.template3(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the details of a hook.
         * @summary Update a Hook
         * @param {number} hookId hookId
         * @param {PutHookRequest} putHookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateHook(hookId: number, putHookRequest: PutHookRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateHook(hookId, putHookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HooksApi - factory interface
 * @export
 */
export const HooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HooksApiFp(configuration)
    return {
        /**
         * The following parameters can be passed for the creation of a hook :-  name - string - Required. The name of the template that is being called. (See /hooks/template for the list of valid hook names.)  isActive - boolean - Determines whether the hook is actually triggered.  events - array - Determines what events the hook is triggered for.  config - hash - Required. Key/value pairs to provide settings for this hook. These settings vary between the templates.  templateId - Optional. The UGD template ID associated with the same entity (client or loan).
         * @summary Create a Hook
         * @param {PostHookRequest} postHookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createHook(postHookRequest: PostHookRequest, options?: any): AxiosPromise<PostHookResponse> {
            return localVarFp.createHook(postHookRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a hook.
         * @summary Delete a Hook
         * @param {number} hookId hookId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteHook(hookId: number, options?: any): AxiosPromise<DeleteHookResponse> {
            return localVarFp.deleteHook(hookId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the details of a Hook.  Example Requests:  hooks/1
         * @summary Retrieve a Hook
         * @param {number} hookId hookId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveHook(hookId: number, options?: any): AxiosPromise<GetHookResponse> {
            return localVarFp.retrieveHook(hookId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of hooks.  Example Requests:  hooks
         * @summary Retrieve Hooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveHooks(options?: any): AxiosPromise<Array<GetHookResponse>> {
            return localVarFp.retrieveHooks(options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  hooks/template
         * @summary Retrieve Hooks Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template3(options?: any): AxiosPromise<GetHookTemplateResponse> {
            return localVarFp.template3(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the details of a hook.
         * @summary Update a Hook
         * @param {number} hookId hookId
         * @param {PutHookRequest} putHookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateHook(hookId: number, putHookRequest: PutHookRequest, options?: any): AxiosPromise<PutHookResponse> {
            return localVarFp.updateHook(hookId, putHookRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HooksApi - object-oriented interface
 * @export
 * @class HooksApi
 * @extends {BaseAPI}
 */
export class HooksApi extends BaseAPI {
    /**
     * The following parameters can be passed for the creation of a hook :-  name - string - Required. The name of the template that is being called. (See /hooks/template for the list of valid hook names.)  isActive - boolean - Determines whether the hook is actually triggered.  events - array - Determines what events the hook is triggered for.  config - hash - Required. Key/value pairs to provide settings for this hook. These settings vary between the templates.  templateId - Optional. The UGD template ID associated with the same entity (client or loan).
     * @summary Create a Hook
     * @param {PostHookRequest} postHookRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public createHook(postHookRequest: PostHookRequest, options?: any) {
        return HooksApiFp(this.configuration).createHook(postHookRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a hook.
     * @summary Delete a Hook
     * @param {number} hookId hookId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public deleteHook(hookId: number, options?: any) {
        return HooksApiFp(this.configuration).deleteHook(hookId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the details of a Hook.  Example Requests:  hooks/1
     * @summary Retrieve a Hook
     * @param {number} hookId hookId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public retrieveHook(hookId: number, options?: any) {
        return HooksApiFp(this.configuration).retrieveHook(hookId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of hooks.  Example Requests:  hooks
     * @summary Retrieve Hooks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public retrieveHooks(options?: any) {
        return HooksApiFp(this.configuration).retrieveHooks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  hooks/template
     * @summary Retrieve Hooks Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public template3(options?: any) {
        return HooksApiFp(this.configuration).template3(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the details of a hook.
     * @summary Update a Hook
     * @param {number} hookId hookId
     * @param {PutHookRequest} putHookRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HooksApi
     */
    public updateHook(hookId: number, putHookRequest: PutHookRequest, options?: any) {
        return HooksApiFp(this.configuration).updateHook(hookId, putHookRequest, options).then((request) => request(this.axios, this.basePath));
    }
}