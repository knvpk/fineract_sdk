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
import { GetShareAccountsClientIdProductIdResponse } from '../models';
// @ts-ignore
import { PostNewShareApplicationResponse } from '../models';
/**
 * SelfShareAccountsApi - axios parameter creator
 * @export
 */
export const SelfShareAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Mandatory fields:  clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate   Optional Fields  accountNo, externalId   Inherited from Product (if not provided)  minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType.
         * @summary Submit new share application
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAccount1: async (body?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/self/shareaccounts`;
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
         *    Example Requests:  self/shareaccounts/12 
         * @summary Retrieve a share application/account
         * @param {number} accountId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveShareAccount: async (accountId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('retrieveShareAccount', 'accountId', accountId)
            const localVarPath = `/self/shareaccounts/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of: Field Defaults  Allowed Value Lists   Arguments  clientId:Integer mandatory productId:Integer optionalIf entered, productId, productName and selectedProduct fields are returned. Example Requests:  self/shareaccounts/template?clientId=14  self/shareaccounts/template?clientId=14&productId=3 
         * @summary Retrieve Share Account Template
         * @param {number} [clientId] 
         * @param {number} [productId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template19: async (clientId?: number, productId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/self/shareaccounts/template`;
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

            if (clientId !== undefined) {
                localVarQueryParameter['clientId'] = clientId;
            }

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
    }
};

/**
 * SelfShareAccountsApi - functional programming interface
 * @export
 */
export const SelfShareAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SelfShareAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Mandatory fields:  clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate   Optional Fields  accountNo, externalId   Inherited from Product (if not provided)  minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType.
         * @summary Submit new share application
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAccount1(body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PostNewShareApplicationResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAccount1(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *    Example Requests:  self/shareaccounts/12 
         * @summary Retrieve a share application/account
         * @param {number} accountId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveShareAccount(accountId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveShareAccount(accountId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of: Field Defaults  Allowed Value Lists   Arguments  clientId:Integer mandatory productId:Integer optionalIf entered, productId, productName and selectedProduct fields are returned. Example Requests:  self/shareaccounts/template?clientId=14  self/shareaccounts/template?clientId=14&productId=3 
         * @summary Retrieve Share Account Template
         * @param {number} [clientId] 
         * @param {number} [productId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async template19(clientId?: number, productId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetShareAccountsClientIdProductIdResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.template19(clientId, productId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SelfShareAccountsApi - factory interface
 * @export
 */
export const SelfShareAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SelfShareAccountsApiFp(configuration)
    return {
        /**
         * Mandatory fields:  clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate   Optional Fields  accountNo, externalId   Inherited from Product (if not provided)  minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType.
         * @summary Submit new share application
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAccount1(body?: string, options?: any): AxiosPromise<Array<PostNewShareApplicationResponse>> {
            return localVarFp.createAccount1(body, options).then((request) => request(axios, basePath));
        },
        /**
         *    Example Requests:  self/shareaccounts/12 
         * @summary Retrieve a share application/account
         * @param {number} accountId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveShareAccount(accountId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveShareAccount(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of: Field Defaults  Allowed Value Lists   Arguments  clientId:Integer mandatory productId:Integer optionalIf entered, productId, productName and selectedProduct fields are returned. Example Requests:  self/shareaccounts/template?clientId=14  self/shareaccounts/template?clientId=14&productId=3 
         * @summary Retrieve Share Account Template
         * @param {number} [clientId] 
         * @param {number} [productId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template19(clientId?: number, productId?: number, options?: any): AxiosPromise<Array<GetShareAccountsClientIdProductIdResponse>> {
            return localVarFp.template19(clientId, productId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SelfShareAccountsApi - object-oriented interface
 * @export
 * @class SelfShareAccountsApi
 * @extends {BaseAPI}
 */
export class SelfShareAccountsApi extends BaseAPI {
    /**
     * Mandatory fields:  clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate   Optional Fields  accountNo, externalId   Inherited from Product (if not provided)  minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType.
     * @summary Submit new share application
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfShareAccountsApi
     */
    public createAccount1(body?: string, options?: any) {
        return SelfShareAccountsApiFp(this.configuration).createAccount1(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *    Example Requests:  self/shareaccounts/12 
     * @summary Retrieve a share application/account
     * @param {number} accountId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfShareAccountsApi
     */
    public retrieveShareAccount(accountId: number, options?: any) {
        return SelfShareAccountsApiFp(this.configuration).retrieveShareAccount(accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of: Field Defaults  Allowed Value Lists   Arguments  clientId:Integer mandatory productId:Integer optionalIf entered, productId, productName and selectedProduct fields are returned. Example Requests:  self/shareaccounts/template?clientId=14  self/shareaccounts/template?clientId=14&productId=3 
     * @summary Retrieve Share Account Template
     * @param {number} [clientId] 
     * @param {number} [productId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfShareAccountsApi
     */
    public template19(clientId?: number, productId?: number, options?: any) {
        return SelfShareAccountsApiFp(this.configuration).template19(clientId, productId, options).then((request) => request(this.axios, this.basePath));
    }
}
