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
 * BulkLoansApi - axios parameter creator
 * @export
 */
export const BulkLoansApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loanReassignment: async (body?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/loans/loanreassignment`;
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
         * @param {number} [officeId] 
         * @param {number} [fromLoanOfficerId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loanReassignmentTemplate: async (officeId?: number, fromLoanOfficerId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/loans/loanreassignment/template`;
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

            if (officeId !== undefined) {
                localVarQueryParameter['officeId'] = officeId;
            }

            if (fromLoanOfficerId !== undefined) {
                localVarQueryParameter['fromLoanOfficerId'] = fromLoanOfficerId;
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
 * BulkLoansApi - functional programming interface
 * @export
 */
export const BulkLoansApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BulkLoansApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loanReassignment(body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loanReassignment(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {number} [fromLoanOfficerId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loanReassignmentTemplate(officeId?: number, fromLoanOfficerId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loanReassignmentTemplate(officeId, fromLoanOfficerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BulkLoansApi - factory interface
 * @export
 */
export const BulkLoansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BulkLoansApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loanReassignment(body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.loanReassignment(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {number} [fromLoanOfficerId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loanReassignmentTemplate(officeId?: number, fromLoanOfficerId?: number, options?: any): AxiosPromise<string> {
            return localVarFp.loanReassignmentTemplate(officeId, fromLoanOfficerId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BulkLoansApi - object-oriented interface
 * @export
 * @class BulkLoansApi
 * @extends {BaseAPI}
 */
export class BulkLoansApi extends BaseAPI {
    /**
     * 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BulkLoansApi
     */
    public loanReassignment(body?: string, options?: any) {
        return BulkLoansApiFp(this.configuration).loanReassignment(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [officeId] 
     * @param {number} [fromLoanOfficerId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BulkLoansApi
     */
    public loanReassignmentTemplate(officeId?: number, fromLoanOfficerId?: number, options?: any) {
        return BulkLoansApiFp(this.configuration).loanReassignmentTemplate(officeId, fromLoanOfficerId, options).then((request) => request(this.axios, this.basePath));
    }
}
