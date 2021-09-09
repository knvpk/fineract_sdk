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
import { ManageSavingsAccountsTransaction } from '../models';
/**
 * SavingsAccountTransactionsApi - axios parameter creator
 * @export
 */
export const SavingsAccountTransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} savingsId 
         * @param {number} transactionId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adjustTransaction1: async (savingsId: number, transactionId: number, command?: string, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'savingsId' is not null or undefined
            assertParamExists('adjustTransaction1', 'savingsId', savingsId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('adjustTransaction1', 'transactionId', transactionId)
            const localVarPath = `/savingsaccounts/{savingsId}/transactions/{transactionId}`
                .replace(`{${"savingsId"}}`, encodeURIComponent(String(savingsId)))
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
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
         * @param {number} savingsId 
         * @param {string} [command] 
         * @param {ManageSavingsAccountsTransaction} [manageSavingsAccountsTransaction] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manageSavingsAccountTran: async (savingsId: number, command?: string, manageSavingsAccountsTransaction?: ManageSavingsAccountsTransaction, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'savingsId' is not null or undefined
            assertParamExists('manageSavingsAccountTran', 'savingsId', savingsId)
            const localVarPath = `/savingsaccounts/{savingsId}/transactions`
                .replace(`{${"savingsId"}}`, encodeURIComponent(String(savingsId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(manageSavingsAccountsTransaction, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne23: async (savingsId: number, transactionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'savingsId' is not null or undefined
            assertParamExists('retrieveOne23', 'savingsId', savingsId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('retrieveOne23', 'transactionId', transactionId)
            const localVarPath = `/savingsaccounts/{savingsId}/transactions/{transactionId}`
                .replace(`{${"savingsId"}}`, encodeURIComponent(String(savingsId)))
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
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
         * @param {number} savingsId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate18: async (savingsId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'savingsId' is not null or undefined
            assertParamExists('retrieveTemplate18', 'savingsId', savingsId)
            const localVarPath = `/savingsaccounts/{savingsId}/transactions/template`
                .replace(`{${"savingsId"}}`, encodeURIComponent(String(savingsId)));
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
 * SavingsAccountTransactionsApi - functional programming interface
 * @export
 */
export const SavingsAccountTransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SavingsAccountTransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} savingsId 
         * @param {number} transactionId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adjustTransaction1(savingsId: number, transactionId: number, command?: string, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.adjustTransaction1(savingsId, transactionId, command, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {string} [command] 
         * @param {ManageSavingsAccountsTransaction} [manageSavingsAccountsTransaction] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async manageSavingsAccountTran(savingsId: number, command?: string, manageSavingsAccountsTransaction?: ManageSavingsAccountsTransaction, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.manageSavingsAccountTran(savingsId, command, manageSavingsAccountsTransaction, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne23(savingsId: number, transactionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne23(savingsId, transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTemplate18(savingsId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTemplate18(savingsId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SavingsAccountTransactionsApi - factory interface
 * @export
 */
export const SavingsAccountTransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SavingsAccountTransactionsApiFp(configuration)
    return {
        /**
         * 
         * @param {number} savingsId 
         * @param {number} transactionId 
         * @param {string} [command] 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adjustTransaction1(savingsId: number, transactionId: number, command?: string, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.adjustTransaction1(savingsId, transactionId, command, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {string} [command] 
         * @param {ManageSavingsAccountsTransaction} [manageSavingsAccountsTransaction] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manageSavingsAccountTran(savingsId: number, command?: string, manageSavingsAccountsTransaction?: ManageSavingsAccountsTransaction, options?: any): AxiosPromise<string> {
            return localVarFp.manageSavingsAccountTran(savingsId, command, manageSavingsAccountsTransaction, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {number} transactionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne23(savingsId: number, transactionId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveOne23(savingsId, transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} savingsId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate18(savingsId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveTemplate18(savingsId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SavingsAccountTransactionsApi - object-oriented interface
 * @export
 * @class SavingsAccountTransactionsApi
 * @extends {BaseAPI}
 */
export class SavingsAccountTransactionsApi extends BaseAPI {
    /**
     * 
     * @param {number} savingsId 
     * @param {number} transactionId 
     * @param {string} [command] 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsAccountTransactionsApi
     */
    public adjustTransaction1(savingsId: number, transactionId: number, command?: string, body?: string, options?: any) {
        return SavingsAccountTransactionsApiFp(this.configuration).adjustTransaction1(savingsId, transactionId, command, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} savingsId 
     * @param {string} [command] 
     * @param {ManageSavingsAccountsTransaction} [manageSavingsAccountsTransaction] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsAccountTransactionsApi
     */
    public manageSavingsAccountTran(savingsId: number, command?: string, manageSavingsAccountsTransaction?: ManageSavingsAccountsTransaction, options?: any) {
        return SavingsAccountTransactionsApiFp(this.configuration).manageSavingsAccountTran(savingsId, command, manageSavingsAccountsTransaction, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} savingsId 
     * @param {number} transactionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsAccountTransactionsApi
     */
    public retrieveOne23(savingsId: number, transactionId: number, options?: any) {
        return SavingsAccountTransactionsApiFp(this.configuration).retrieveOne23(savingsId, transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} savingsId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsAccountTransactionsApi
     */
    public retrieveTemplate18(savingsId: number, options?: any) {
        return SavingsAccountTransactionsApiFp(this.configuration).retrieveTemplate18(savingsId, options).then((request) => request(this.axios, this.basePath));
    }
}
