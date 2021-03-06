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
 * RescheduleLoansApi - axios parameter creator
 * @export
 */
export const RescheduleLoansApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLoanRescheduleRequest: async (body?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/rescheduleloans`;
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
         * @param {number} scheduleId 
         * @param {string} [command] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readLoanRescheduleRequest: async (scheduleId: number, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'scheduleId' is not null or undefined
            assertParamExists('readLoanRescheduleRequest', 'scheduleId', scheduleId)
            const localVarPath = `/rescheduleloans/{scheduleId}`
                .replace(`{${"scheduleId"}}`, encodeURIComponent(String(scheduleId)));
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

            if (command !== undefined) {
                localVarQueryParameter['command'] = command;
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
         * @param {string} [command] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllRescheduleRequest: async (command?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/rescheduleloans`;
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

            if (command !== undefined) {
                localVarQueryParameter['command'] = command;
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
        retrieveTemplate9: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/rescheduleloans/template`;
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
         * @param {number} scheduleId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLoanRescheduleRequest: async (scheduleId: number, command?: string, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'scheduleId' is not null or undefined
            assertParamExists('updateLoanRescheduleRequest', 'scheduleId', scheduleId)
            const localVarPath = `/rescheduleloans/{scheduleId}`
                .replace(`{${"scheduleId"}}`, encodeURIComponent(String(scheduleId)));
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
    }
};

/**
 * RescheduleLoansApi - functional programming interface
 * @export
 */
export const RescheduleLoansApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RescheduleLoansApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLoanRescheduleRequest(body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createLoanRescheduleRequest(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} scheduleId 
         * @param {string} [command] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readLoanRescheduleRequest(scheduleId: number, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readLoanRescheduleRequest(scheduleId, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [command] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAllRescheduleRequest(command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAllRescheduleRequest(command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTemplate9(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTemplate9(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} scheduleId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLoanRescheduleRequest(scheduleId: number, command?: string, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLoanRescheduleRequest(scheduleId, command, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RescheduleLoansApi - factory interface
 * @export
 */
export const RescheduleLoansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RescheduleLoansApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLoanRescheduleRequest(body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.createLoanRescheduleRequest(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} scheduleId 
         * @param {string} [command] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readLoanRescheduleRequest(scheduleId: number, command?: string, options?: any): AxiosPromise<string> {
            return localVarFp.readLoanRescheduleRequest(scheduleId, command, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [command] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllRescheduleRequest(command?: string, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveAllRescheduleRequest(command, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate9(options?: any): AxiosPromise<string> {
            return localVarFp.retrieveTemplate9(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} scheduleId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLoanRescheduleRequest(scheduleId: number, command?: string, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateLoanRescheduleRequest(scheduleId, command, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RescheduleLoansApi - object-oriented interface
 * @export
 * @class RescheduleLoansApi
 * @extends {BaseAPI}
 */
export class RescheduleLoansApi extends BaseAPI {
    /**
     * 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RescheduleLoansApi
     */
    public createLoanRescheduleRequest(body?: string, options?: any) {
        return RescheduleLoansApiFp(this.configuration).createLoanRescheduleRequest(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} scheduleId 
     * @param {string} [command] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RescheduleLoansApi
     */
    public readLoanRescheduleRequest(scheduleId: number, command?: string, options?: any) {
        return RescheduleLoansApiFp(this.configuration).readLoanRescheduleRequest(scheduleId, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [command] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RescheduleLoansApi
     */
    public retrieveAllRescheduleRequest(command?: string, options?: any) {
        return RescheduleLoansApiFp(this.configuration).retrieveAllRescheduleRequest(command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RescheduleLoansApi
     */
    public retrieveTemplate9(options?: any) {
        return RescheduleLoansApiFp(this.configuration).retrieveTemplate9(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} scheduleId 
     * @param {string} [command] 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RescheduleLoansApi
     */
    public updateLoanRescheduleRequest(scheduleId: number, command?: string, body?: string, options?: any) {
        return RescheduleLoansApiFp(this.configuration).updateLoanRescheduleRequest(scheduleId, command, body, options).then((request) => request(this.axios, this.basePath));
    }
}
