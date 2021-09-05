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
import { DeleteLoansLoanIdChargesChargeIdResponse } from '../models';
// @ts-ignore
import { GetLoansLoanIdChargesChargeIdResponse } from '../models';
// @ts-ignore
import { GetLoansLoanIdChargesTemplateResponse } from '../models';
// @ts-ignore
import { PostLoansLoanIdChargesChargeIdRequest } from '../models';
// @ts-ignore
import { PostLoansLoanIdChargesChargeIdResponse } from '../models';
// @ts-ignore
import { PostLoansLoanIdChargesRequest } from '../models';
// @ts-ignore
import { PostLoansLoanIdChargesResponse } from '../models';
// @ts-ignore
import { PutLoansLoanIdChargesChargeIdRequest } from '../models';
// @ts-ignore
import { PutLoansLoanIdChargesChargeIdResponse } from '../models';
/**
 * LoanChargesApi - axios parameter creator
 * @export
 */
export const LoanChargesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.
         * @summary Delete a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLoanCharge: async (loanId: number, chargeId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('deleteLoanCharge', 'loanId', loanId)
            // verify required parameter 'chargeId' is not null or undefined
            assertParamExists('deleteLoanCharge', 'chargeId', chargeId)
            const localVarPath = `/loans/{loanId}/charges/{chargeId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"chargeId"}}`, encodeURIComponent(String(chargeId)));
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
         * It Creates a Loan Charge
         * @summary Create a Loan Charge
         * @param {number} loanId loanId
         * @param {PostLoansLoanIdChargesRequest} postLoansLoanIdChargesRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeLoanCharge: async (loanId: number, postLoansLoanIdChargesRequest: PostLoansLoanIdChargesRequest, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('executeLoanCharge', 'loanId', loanId)
            // verify required parameter 'postLoansLoanIdChargesRequest' is not null or undefined
            assertParamExists('executeLoanCharge', 'postLoansLoanIdChargesRequest', postLoansLoanIdChargesRequest)
            const localVarPath = `/loans/{loanId}/charges`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postLoansLoanIdChargesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Loan Charge will be paid if the loan is linked with a savings account
         * @summary Pay Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {PostLoansLoanIdChargesChargeIdRequest} postLoansLoanIdChargesChargeIdRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeLoanCharge1: async (loanId: number, chargeId: number, postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('executeLoanCharge1', 'loanId', loanId)
            // verify required parameter 'chargeId' is not null or undefined
            assertParamExists('executeLoanCharge1', 'chargeId', chargeId)
            // verify required parameter 'postLoansLoanIdChargesChargeIdRequest' is not null or undefined
            assertParamExists('executeLoanCharge1', 'postLoansLoanIdChargesChargeIdRequest', postLoansLoanIdChargesChargeIdRequest)
            const localVarPath = `/loans/{loanId}/charges/{chargeId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"chargeId"}}`, encodeURIComponent(String(chargeId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postLoansLoanIdChargesChargeIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage
         * @summary List Loan Charges
         * @param {number} loanId loanId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllLoanCharges: async (loanId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveAllLoanCharges', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/charges`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
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
         * Retrieves Loan Charge according to the Loan ID and Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage
         * @summary Retrieve a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveLoanCharge: async (loanId: number, chargeId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveLoanCharge', 'loanId', loanId)
            // verify required parameter 'chargeId' is not null or undefined
            assertParamExists('retrieveLoanCharge', 'chargeId', chargeId)
            const localVarPath = `/loans/{loanId}/charges/{chargeId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"chargeId"}}`, encodeURIComponent(String(chargeId)));
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  
         * @summary Retrieve Loan Charges Template
         * @param {number} loanId loanId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate8: async (loanId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveTemplate8', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/charges/template`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)));
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
         * Currently Loan Charges may be updated only if the Loan is not yet approved
         * @summary Update a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {PutLoansLoanIdChargesChargeIdRequest} putLoansLoanIdChargesChargeIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLoanCharge: async (loanId: number, chargeId: number, putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('updateLoanCharge', 'loanId', loanId)
            // verify required parameter 'chargeId' is not null or undefined
            assertParamExists('updateLoanCharge', 'chargeId', chargeId)
            // verify required parameter 'putLoansLoanIdChargesChargeIdRequest' is not null or undefined
            assertParamExists('updateLoanCharge', 'putLoansLoanIdChargesChargeIdRequest', putLoansLoanIdChargesChargeIdRequest)
            const localVarPath = `/loans/{loanId}/charges/{chargeId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"chargeId"}}`, encodeURIComponent(String(chargeId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putLoansLoanIdChargesChargeIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoanChargesApi - functional programming interface
 * @export
 */
export const LoanChargesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoanChargesApiAxiosParamCreator(configuration)
    return {
        /**
         * Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.
         * @summary Delete a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLoanCharge(loanId: number, chargeId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteLoansLoanIdChargesChargeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteLoanCharge(loanId, chargeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It Creates a Loan Charge
         * @summary Create a Loan Charge
         * @param {number} loanId loanId
         * @param {PostLoansLoanIdChargesRequest} postLoansLoanIdChargesRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeLoanCharge(loanId: number, postLoansLoanIdChargesRequest: PostLoansLoanIdChargesRequest, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLoansLoanIdChargesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeLoanCharge(loanId, postLoansLoanIdChargesRequest, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Loan Charge will be paid if the loan is linked with a savings account
         * @summary Pay Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {PostLoansLoanIdChargesChargeIdRequest} postLoansLoanIdChargesChargeIdRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeLoanCharge1(loanId: number, chargeId: number, postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLoansLoanIdChargesChargeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeLoanCharge1(loanId, chargeId, postLoansLoanIdChargesChargeIdRequest, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage
         * @summary List Loan Charges
         * @param {number} loanId loanId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAllLoanCharges(loanId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetLoansLoanIdChargesChargeIdResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAllLoanCharges(loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves Loan Charge according to the Loan ID and Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage
         * @summary Retrieve a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveLoanCharge(loanId: number, chargeId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLoansLoanIdChargesChargeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveLoanCharge(loanId, chargeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  
         * @summary Retrieve Loan Charges Template
         * @param {number} loanId loanId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTemplate8(loanId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLoansLoanIdChargesTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTemplate8(loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Currently Loan Charges may be updated only if the Loan is not yet approved
         * @summary Update a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {PutLoansLoanIdChargesChargeIdRequest} putLoansLoanIdChargesChargeIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLoanCharge(loanId: number, chargeId: number, putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutLoansLoanIdChargesChargeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLoanCharge(loanId, chargeId, putLoansLoanIdChargesChargeIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoanChargesApi - factory interface
 * @export
 */
export const LoanChargesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoanChargesApiFp(configuration)
    return {
        /**
         * Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.
         * @summary Delete a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLoanCharge(loanId: number, chargeId: number, options?: any): AxiosPromise<DeleteLoansLoanIdChargesChargeIdResponse> {
            return localVarFp.deleteLoanCharge(loanId, chargeId, options).then((request) => request(axios, basePath));
        },
        /**
         * It Creates a Loan Charge
         * @summary Create a Loan Charge
         * @param {number} loanId loanId
         * @param {PostLoansLoanIdChargesRequest} postLoansLoanIdChargesRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeLoanCharge(loanId: number, postLoansLoanIdChargesRequest: PostLoansLoanIdChargesRequest, command?: string, options?: any): AxiosPromise<PostLoansLoanIdChargesResponse> {
            return localVarFp.executeLoanCharge(loanId, postLoansLoanIdChargesRequest, command, options).then((request) => request(axios, basePath));
        },
        /**
         * Loan Charge will be paid if the loan is linked with a savings account
         * @summary Pay Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {PostLoansLoanIdChargesChargeIdRequest} postLoansLoanIdChargesChargeIdRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeLoanCharge1(loanId: number, chargeId: number, postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest, command?: string, options?: any): AxiosPromise<PostLoansLoanIdChargesChargeIdResponse> {
            return localVarFp.executeLoanCharge1(loanId, chargeId, postLoansLoanIdChargesChargeIdRequest, command, options).then((request) => request(axios, basePath));
        },
        /**
         * It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage
         * @summary List Loan Charges
         * @param {number} loanId loanId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllLoanCharges(loanId: number, options?: any): AxiosPromise<Array<GetLoansLoanIdChargesChargeIdResponse>> {
            return localVarFp.retrieveAllLoanCharges(loanId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves Loan Charge according to the Loan ID and Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage
         * @summary Retrieve a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveLoanCharge(loanId: number, chargeId: number, options?: any): AxiosPromise<GetLoansLoanIdChargesChargeIdResponse> {
            return localVarFp.retrieveLoanCharge(loanId, chargeId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  
         * @summary Retrieve Loan Charges Template
         * @param {number} loanId loanId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate8(loanId: number, options?: any): AxiosPromise<GetLoansLoanIdChargesTemplateResponse> {
            return localVarFp.retrieveTemplate8(loanId, options).then((request) => request(axios, basePath));
        },
        /**
         * Currently Loan Charges may be updated only if the Loan is not yet approved
         * @summary Update a Loan Charge
         * @param {number} loanId loanId
         * @param {number} chargeId chargeId
         * @param {PutLoansLoanIdChargesChargeIdRequest} putLoansLoanIdChargesChargeIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLoanCharge(loanId: number, chargeId: number, putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest, options?: any): AxiosPromise<PutLoansLoanIdChargesChargeIdResponse> {
            return localVarFp.updateLoanCharge(loanId, chargeId, putLoansLoanIdChargesChargeIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoanChargesApi - object-oriented interface
 * @export
 * @class LoanChargesApi
 * @extends {BaseAPI}
 */
export class LoanChargesApi extends BaseAPI {
    /**
     * Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.
     * @summary Delete a Loan Charge
     * @param {number} loanId loanId
     * @param {number} chargeId chargeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public deleteLoanCharge(loanId: number, chargeId: number, options?: any) {
        return LoanChargesApiFp(this.configuration).deleteLoanCharge(loanId, chargeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It Creates a Loan Charge
     * @summary Create a Loan Charge
     * @param {number} loanId loanId
     * @param {PostLoansLoanIdChargesRequest} postLoansLoanIdChargesRequest 
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public executeLoanCharge(loanId: number, postLoansLoanIdChargesRequest: PostLoansLoanIdChargesRequest, command?: string, options?: any) {
        return LoanChargesApiFp(this.configuration).executeLoanCharge(loanId, postLoansLoanIdChargesRequest, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Loan Charge will be paid if the loan is linked with a savings account
     * @summary Pay Loan Charge
     * @param {number} loanId loanId
     * @param {number} chargeId chargeId
     * @param {PostLoansLoanIdChargesChargeIdRequest} postLoansLoanIdChargesChargeIdRequest 
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public executeLoanCharge1(loanId: number, chargeId: number, postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest, command?: string, options?: any) {
        return LoanChargesApiFp(this.configuration).executeLoanCharge1(loanId, chargeId, postLoansLoanIdChargesChargeIdRequest, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage
     * @summary List Loan Charges
     * @param {number} loanId loanId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public retrieveAllLoanCharges(loanId: number, options?: any) {
        return LoanChargesApiFp(this.configuration).retrieveAllLoanCharges(loanId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves Loan Charge according to the Loan ID and Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage
     * @summary Retrieve a Loan Charge
     * @param {number} loanId loanId
     * @param {number} chargeId chargeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public retrieveLoanCharge(loanId: number, chargeId: number, options?: any) {
        return LoanChargesApiFp(this.configuration).retrieveLoanCharge(loanId, chargeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  
     * @summary Retrieve Loan Charges Template
     * @param {number} loanId loanId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public retrieveTemplate8(loanId: number, options?: any) {
        return LoanChargesApiFp(this.configuration).retrieveTemplate8(loanId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Currently Loan Charges may be updated only if the Loan is not yet approved
     * @summary Update a Loan Charge
     * @param {number} loanId loanId
     * @param {number} chargeId chargeId
     * @param {PutLoansLoanIdChargesChargeIdRequest} putLoansLoanIdChargesChargeIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanChargesApi
     */
    public updateLoanCharge(loanId: number, chargeId: number, putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest, options?: any) {
        return LoanChargesApiFp(this.configuration).updateLoanCharge(loanId, chargeId, putLoansLoanIdChargesChargeIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
