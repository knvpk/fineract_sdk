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
import { GetAccountsLinkedToPocketResponse } from '../models';
// @ts-ignore
import { PostLinkDelinkAccountsToFromPocketResponse } from '../models';
/**
 * PocketApi - axios parameter creator
 * @export
 */
export const PocketApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Pockets behave as favourites. An user can link his/her Loan, Savings and Share accounts to pocket for faster access. In a similar way linked accounts can be delinked from the pocket.  Example Requests:  self/pockets?command=linkAccounts  self/pockets?command=delinkAccounts
         * @summary Link/delink accounts to/from pocket
         * @param {string} [command] command
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        handleCommands7: async (command?: string, body?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/self/pockets`;
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
         * All linked loan  Example Requests:   self/pockets
         * @summary Retrieve accounts linked to pocket
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll37: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/self/pockets`;
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
 * PocketApi - functional programming interface
 * @export
 */
export const PocketApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PocketApiAxiosParamCreator(configuration)
    return {
        /**
         * Pockets behave as favourites. An user can link his/her Loan, Savings and Share accounts to pocket for faster access. In a similar way linked accounts can be delinked from the pocket.  Example Requests:  self/pockets?command=linkAccounts  self/pockets?command=delinkAccounts
         * @summary Link/delink accounts to/from pocket
         * @param {string} [command] command
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async handleCommands7(command?: string, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLinkDelinkAccountsToFromPocketResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.handleCommands7(command, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * All linked loan  Example Requests:   self/pockets
         * @summary Retrieve accounts linked to pocket
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll37(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountsLinkedToPocketResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll37(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PocketApi - factory interface
 * @export
 */
export const PocketApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PocketApiFp(configuration)
    return {
        /**
         * Pockets behave as favourites. An user can link his/her Loan, Savings and Share accounts to pocket for faster access. In a similar way linked accounts can be delinked from the pocket.  Example Requests:  self/pockets?command=linkAccounts  self/pockets?command=delinkAccounts
         * @summary Link/delink accounts to/from pocket
         * @param {string} [command] command
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        handleCommands7(command?: string, body?: string, options?: any): AxiosPromise<PostLinkDelinkAccountsToFromPocketResponse> {
            return localVarFp.handleCommands7(command, body, options).then((request) => request(axios, basePath));
        },
        /**
         * All linked loan  Example Requests:   self/pockets
         * @summary Retrieve accounts linked to pocket
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll37(options?: any): AxiosPromise<GetAccountsLinkedToPocketResponse> {
            return localVarFp.retrieveAll37(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PocketApi - object-oriented interface
 * @export
 * @class PocketApi
 * @extends {BaseAPI}
 */
export class PocketApi extends BaseAPI {
    /**
     * Pockets behave as favourites. An user can link his/her Loan, Savings and Share accounts to pocket for faster access. In a similar way linked accounts can be delinked from the pocket.  Example Requests:  self/pockets?command=linkAccounts  self/pockets?command=delinkAccounts
     * @summary Link/delink accounts to/from pocket
     * @param {string} [command] command
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PocketApi
     */
    public handleCommands7(command?: string, body?: string, options?: any) {
        return PocketApiFp(this.configuration).handleCommands7(command, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * All linked loan  Example Requests:   self/pockets
     * @summary Retrieve accounts linked to pocket
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PocketApi
     */
    public retrieveAll37(options?: any) {
        return PocketApiFp(this.configuration).retrieveAll37(options).then((request) => request(this.axios, this.basePath));
    }
}
