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
import { GetLoansLoanIdTransactionsTemplateResponse } from '../models';
// @ts-ignore
import { GetLoansLoanIdTransactionsTransactionIdResponse } from '../models';
// @ts-ignore
import { PostLoansLoanIdTransactionsResponse } from '../models';
// @ts-ignore
import { PostLoansLoanIdTransactionsTransactionIdRequest } from '../models';
// @ts-ignore
import { PostLoansLoanIdTransactionsTransactionIdResponse } from '../models';
/**
 * LoanTransactionsApi - axios parameter creator
 * @export
 */
export const LoanTransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount
         * @summary Adjust a Transaction
         * @param {number} loanId loanId
         * @param {number} transactionId transactionId
         * @param {PostLoansLoanIdTransactionsTransactionIdRequest} postLoansLoanIdTransactionsTransactionIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adjustLoanTransaction: async (loanId: number, transactionId: number, postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('adjustLoanTransaction', 'loanId', loanId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('adjustLoanTransaction', 'transactionId', transactionId)
            // verify required parameter 'postLoansLoanIdTransactionsTransactionIdRequest' is not null or undefined
            assertParamExists('adjustLoanTransaction', 'postLoansLoanIdTransactionsTransactionIdRequest', postLoansLoanIdTransactionsTransactionIdRequest)
            const localVarPath = `/loans/{loanId}/transactions/{transactionId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postLoansLoanIdTransactionsTransactionIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Make Recovery Payment:  This API allows collecting recovery payments for written-off loans
         * @summary Make a Repayment | Make a Refund of an Active Loan by Cash | Foreclosure of an Active Loan | Waive Interest | Write-off Loan | Make Recovery Payment | Undo Loan Write-off Transaction
         * @param {number} loanId loanId
         * @param {object} body 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeLoanTransaction: async (loanId: number, body: object, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('executeLoanTransaction', 'loanId', loanId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('executeLoanTransaction', 'body', body)
            const localVarPath = `/loans/{loanId}/transactions`
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a Transaction Details  Example Request:  loans/5/transactions/3
         * @summary Retrieve a Transaction Details
         * @param {number} loanId loanId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTransaction: async (loanId: number, transactionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveTransaction', 'loanId', loanId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('retrieveTransaction', 'transactionId', transactionId)
            const localVarPath = `/loans/{loanId}/transactions/{transactionId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  loans/1/transactions/template?command=repayment
         * @summary Retrieve Loan Transaction Template
         * @param {number} loanId loanId
         * @param {string} [command] command
         * @param {string} [dateFormat] dateFormat
         * @param {object} [transactionDate] transactionDate
         * @param {string} [locale] locale
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTransactionTemplate: async (loanId: number, command?: string, dateFormat?: string, transactionDate?: object, locale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveTransactionTemplate', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/transactions/template`
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

            if (command !== undefined) {
                localVarQueryParameter['command'] = command;
            }

            if (dateFormat !== undefined) {
                localVarQueryParameter['dateFormat'] = dateFormat;
            }

            if (transactionDate !== undefined) {
                localVarQueryParameter['transactionDate'] = transactionDate;
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
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
 * LoanTransactionsApi - functional programming interface
 * @export
 */
export const LoanTransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoanTransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount
         * @summary Adjust a Transaction
         * @param {number} loanId loanId
         * @param {number} transactionId transactionId
         * @param {PostLoansLoanIdTransactionsTransactionIdRequest} postLoansLoanIdTransactionsTransactionIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adjustLoanTransaction(loanId: number, transactionId: number, postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLoansLoanIdTransactionsTransactionIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.adjustLoanTransaction(loanId, transactionId, postLoansLoanIdTransactionsTransactionIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Make Recovery Payment:  This API allows collecting recovery payments for written-off loans
         * @summary Make a Repayment | Make a Refund of an Active Loan by Cash | Foreclosure of an Active Loan | Waive Interest | Write-off Loan | Make Recovery Payment | Undo Loan Write-off Transaction
         * @param {number} loanId loanId
         * @param {object} body 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeLoanTransaction(loanId: number, body: object, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLoansLoanIdTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeLoanTransaction(loanId, body, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a Transaction Details  Example Request:  loans/5/transactions/3
         * @summary Retrieve a Transaction Details
         * @param {number} loanId loanId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTransaction(loanId: number, transactionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLoansLoanIdTransactionsTransactionIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTransaction(loanId, transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  loans/1/transactions/template?command=repayment
         * @summary Retrieve Loan Transaction Template
         * @param {number} loanId loanId
         * @param {string} [command] command
         * @param {string} [dateFormat] dateFormat
         * @param {object} [transactionDate] transactionDate
         * @param {string} [locale] locale
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTransactionTemplate(loanId: number, command?: string, dateFormat?: string, transactionDate?: object, locale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLoansLoanIdTransactionsTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTransactionTemplate(loanId, command, dateFormat, transactionDate, locale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoanTransactionsApi - factory interface
 * @export
 */
export const LoanTransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoanTransactionsApiFp(configuration)
    return {
        /**
         * Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount
         * @summary Adjust a Transaction
         * @param {number} loanId loanId
         * @param {number} transactionId transactionId
         * @param {PostLoansLoanIdTransactionsTransactionIdRequest} postLoansLoanIdTransactionsTransactionIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adjustLoanTransaction(loanId: number, transactionId: number, postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest, options?: any): AxiosPromise<PostLoansLoanIdTransactionsTransactionIdResponse> {
            return localVarFp.adjustLoanTransaction(loanId, transactionId, postLoansLoanIdTransactionsTransactionIdRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Make Recovery Payment:  This API allows collecting recovery payments for written-off loans
         * @summary Make a Repayment | Make a Refund of an Active Loan by Cash | Foreclosure of an Active Loan | Waive Interest | Write-off Loan | Make Recovery Payment | Undo Loan Write-off Transaction
         * @param {number} loanId loanId
         * @param {object} body 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeLoanTransaction(loanId: number, body: object, command?: string, options?: any): AxiosPromise<PostLoansLoanIdTransactionsResponse> {
            return localVarFp.executeLoanTransaction(loanId, body, command, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a Transaction Details  Example Request:  loans/5/transactions/3
         * @summary Retrieve a Transaction Details
         * @param {number} loanId loanId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTransaction(loanId: number, transactionId: number, options?: any): AxiosPromise<GetLoansLoanIdTransactionsTransactionIdResponse> {
            return localVarFp.retrieveTransaction(loanId, transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  loans/1/transactions/template?command=repayment
         * @summary Retrieve Loan Transaction Template
         * @param {number} loanId loanId
         * @param {string} [command] command
         * @param {string} [dateFormat] dateFormat
         * @param {object} [transactionDate] transactionDate
         * @param {string} [locale] locale
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTransactionTemplate(loanId: number, command?: string, dateFormat?: string, transactionDate?: object, locale?: string, options?: any): AxiosPromise<GetLoansLoanIdTransactionsTemplateResponse> {
            return localVarFp.retrieveTransactionTemplate(loanId, command, dateFormat, transactionDate, locale, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoanTransactionsApi - object-oriented interface
 * @export
 * @class LoanTransactionsApi
 * @extends {BaseAPI}
 */
export class LoanTransactionsApi extends BaseAPI {
    /**
     * Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount
     * @summary Adjust a Transaction
     * @param {number} loanId loanId
     * @param {number} transactionId transactionId
     * @param {PostLoansLoanIdTransactionsTransactionIdRequest} postLoansLoanIdTransactionsTransactionIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTransactionsApi
     */
    public adjustLoanTransaction(loanId: number, transactionId: number, postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest, options?: any) {
        return LoanTransactionsApiFp(this.configuration).adjustLoanTransaction(loanId, transactionId, postLoansLoanIdTransactionsTransactionIdRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Make Recovery Payment:  This API allows collecting recovery payments for written-off loans
     * @summary Make a Repayment | Make a Refund of an Active Loan by Cash | Foreclosure of an Active Loan | Waive Interest | Write-off Loan | Make Recovery Payment | Undo Loan Write-off Transaction
     * @param {number} loanId loanId
     * @param {object} body 
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTransactionsApi
     */
    public executeLoanTransaction(loanId: number, body: object, command?: string, options?: any) {
        return LoanTransactionsApiFp(this.configuration).executeLoanTransaction(loanId, body, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a Transaction Details  Example Request:  loans/5/transactions/3
     * @summary Retrieve a Transaction Details
     * @param {number} loanId loanId
     * @param {number} transactionId transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTransactionsApi
     */
    public retrieveTransaction(loanId: number, transactionId: number, options?: any) {
        return LoanTransactionsApiFp(this.configuration).retrieveTransaction(loanId, transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  loans/1/transactions/template?command=repayment
     * @summary Retrieve Loan Transaction Template
     * @param {number} loanId loanId
     * @param {string} [command] command
     * @param {string} [dateFormat] dateFormat
     * @param {object} [transactionDate] transactionDate
     * @param {string} [locale] locale
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoanTransactionsApi
     */
    public retrieveTransactionTemplate(loanId: number, command?: string, dateFormat?: string, transactionDate?: object, locale?: string, options?: any) {
        return LoanTransactionsApiFp(this.configuration).retrieveTransactionTemplate(loanId, command, dateFormat, transactionDate, locale, options).then((request) => request(this.axios, this.basePath));
    }
}
