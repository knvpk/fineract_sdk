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
import { GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse } from '../models';
// @ts-ignore
import { GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse } from '../models';
// @ts-ignore
import { PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest } from '../models';
// @ts-ignore
import { PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse } from '../models';
// @ts-ignore
import { PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse } from '../models';
/**
 * RecurringDepositAccountTransactionsApi - axios parameter creator
 * @export
 */
export const RecurringDepositAccountTransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adjust Transaction:  This command modifies the given transaction.  Undo transaction:  This command reverses the given transaction.  Showing request/response for \'Adjust Transaction\'
         * @summary Adjust Transaction | Undo transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {number} transactionId transactionId
         * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        handleTransactionCommands: async (recurringDepositAccountId: number, transactionId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'recurringDepositAccountId' is not null or undefined
            assertParamExists('handleTransactionCommands', 'recurringDepositAccountId', recurringDepositAccountId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('handleTransactionCommands', 'transactionId', transactionId)
            // verify required parameter 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest' is not null or undefined
            assertParamExists('handleTransactionCommands', 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest', postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest)
            const localVarPath = `/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId}`
                .replace(`{${"recurringDepositAccountId"}}`, encodeURIComponent(String(recurringDepositAccountId)))
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
            localVarRequestOptions.data = serializeDataIfNeeded(postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves Recurring Deposit Account Transaction  Example Requests:  recurringdepositaccounts/1/transactions/1
         * @summary Retrieve Recurring Deposit Account Transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne20: async (recurringDepositAccountId: number, transactionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'recurringDepositAccountId' is not null or undefined
            assertParamExists('retrieveOne20', 'recurringDepositAccountId', recurringDepositAccountId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('retrieveOne20', 'transactionId', transactionId)
            const localVarPath = `/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId}`
                .replace(`{${"recurringDepositAccountId"}}`, encodeURIComponent(String(recurringDepositAccountId)))
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  recurringdepositaccounts/1/transactions/template?command=deposit  recurringdepositaccounts/1/transactions/template?command=withdrawal
         * @summary Retrieve Recurring Deposit Account Transaction Template
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate15: async (recurringDepositAccountId: number, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'recurringDepositAccountId' is not null or undefined
            assertParamExists('retrieveTemplate15', 'recurringDepositAccountId', recurringDepositAccountId)
            const localVarPath = `/recurringdepositaccounts/{recurringDepositAccountId}/transactions/template`
                .replace(`{${"recurringDepositAccountId"}}`, encodeURIComponent(String(recurringDepositAccountId)));
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
         * Deposit Transaction:  Used for a deposit transaction  Withdrawal Transaction:  Used for a Withdrawal Transaction  Showing request/response for Deposit Transaction
         * @summary Deposit Transaction | Withdrawal Transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transaction1: async (recurringDepositAccountId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'recurringDepositAccountId' is not null or undefined
            assertParamExists('transaction1', 'recurringDepositAccountId', recurringDepositAccountId)
            // verify required parameter 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest' is not null or undefined
            assertParamExists('transaction1', 'postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest', postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest)
            const localVarPath = `/recurringdepositaccounts/{recurringDepositAccountId}/transactions`
                .replace(`{${"recurringDepositAccountId"}}`, encodeURIComponent(String(recurringDepositAccountId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecurringDepositAccountTransactionsApi - functional programming interface
 * @export
 */
export const RecurringDepositAccountTransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RecurringDepositAccountTransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adjust Transaction:  This command modifies the given transaction.  Undo transaction:  This command reverses the given transaction.  Showing request/response for \'Adjust Transaction\'
         * @summary Adjust Transaction | Undo transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {number} transactionId transactionId
         * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async handleTransactionCommands(recurringDepositAccountId: number, transactionId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.handleTransactionCommands(recurringDepositAccountId, transactionId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves Recurring Deposit Account Transaction  Example Requests:  recurringdepositaccounts/1/transactions/1
         * @summary Retrieve Recurring Deposit Account Transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne20(recurringDepositAccountId: number, transactionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne20(recurringDepositAccountId, transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  recurringdepositaccounts/1/transactions/template?command=deposit  recurringdepositaccounts/1/transactions/template?command=withdrawal
         * @summary Retrieve Recurring Deposit Account Transaction Template
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTemplate15(recurringDepositAccountId: number, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTemplate15(recurringDepositAccountId, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deposit Transaction:  Used for a deposit transaction  Withdrawal Transaction:  Used for a Withdrawal Transaction  Showing request/response for Deposit Transaction
         * @summary Deposit Transaction | Withdrawal Transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async transaction1(recurringDepositAccountId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.transaction1(recurringDepositAccountId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecurringDepositAccountTransactionsApi - factory interface
 * @export
 */
export const RecurringDepositAccountTransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecurringDepositAccountTransactionsApiFp(configuration)
    return {
        /**
         * Adjust Transaction:  This command modifies the given transaction.  Undo transaction:  This command reverses the given transaction.  Showing request/response for \'Adjust Transaction\'
         * @summary Adjust Transaction | Undo transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {number} transactionId transactionId
         * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        handleTransactionCommands(recurringDepositAccountId: number, transactionId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options?: any): AxiosPromise<PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse> {
            return localVarFp.handleTransactionCommands(recurringDepositAccountId, transactionId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves Recurring Deposit Account Transaction  Example Requests:  recurringdepositaccounts/1/transactions/1
         * @summary Retrieve Recurring Deposit Account Transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne20(recurringDepositAccountId: number, transactionId: number, options?: any): AxiosPromise<GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse> {
            return localVarFp.retrieveOne20(recurringDepositAccountId, transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  recurringdepositaccounts/1/transactions/template?command=deposit  recurringdepositaccounts/1/transactions/template?command=withdrawal
         * @summary Retrieve Recurring Deposit Account Transaction Template
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate15(recurringDepositAccountId: number, command?: string, options?: any): AxiosPromise<GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse> {
            return localVarFp.retrieveTemplate15(recurringDepositAccountId, command, options).then((request) => request(axios, basePath));
        },
        /**
         * Deposit Transaction:  Used for a deposit transaction  Withdrawal Transaction:  Used for a Withdrawal Transaction  Showing request/response for Deposit Transaction
         * @summary Deposit Transaction | Withdrawal Transaction
         * @param {number} recurringDepositAccountId recurringDepositAccountId
         * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        transaction1(recurringDepositAccountId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options?: any): AxiosPromise<PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse> {
            return localVarFp.transaction1(recurringDepositAccountId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecurringDepositAccountTransactionsApi - object-oriented interface
 * @export
 * @class RecurringDepositAccountTransactionsApi
 * @extends {BaseAPI}
 */
export class RecurringDepositAccountTransactionsApi extends BaseAPI {
    /**
     * Adjust Transaction:  This command modifies the given transaction.  Undo transaction:  This command reverses the given transaction.  Showing request/response for \'Adjust Transaction\'
     * @summary Adjust Transaction | Undo transaction
     * @param {number} recurringDepositAccountId recurringDepositAccountId
     * @param {number} transactionId transactionId
     * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecurringDepositAccountTransactionsApi
     */
    public handleTransactionCommands(recurringDepositAccountId: number, transactionId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options?: any) {
        return RecurringDepositAccountTransactionsApiFp(this.configuration).handleTransactionCommands(recurringDepositAccountId, transactionId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves Recurring Deposit Account Transaction  Example Requests:  recurringdepositaccounts/1/transactions/1
     * @summary Retrieve Recurring Deposit Account Transaction
     * @param {number} recurringDepositAccountId recurringDepositAccountId
     * @param {number} transactionId transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecurringDepositAccountTransactionsApi
     */
    public retrieveOne20(recurringDepositAccountId: number, transactionId: number, options?: any) {
        return RecurringDepositAccountTransactionsApiFp(this.configuration).retrieveOne20(recurringDepositAccountId, transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  recurringdepositaccounts/1/transactions/template?command=deposit  recurringdepositaccounts/1/transactions/template?command=withdrawal
     * @summary Retrieve Recurring Deposit Account Transaction Template
     * @param {number} recurringDepositAccountId recurringDepositAccountId
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecurringDepositAccountTransactionsApi
     */
    public retrieveTemplate15(recurringDepositAccountId: number, command?: string, options?: any) {
        return RecurringDepositAccountTransactionsApiFp(this.configuration).retrieveTemplate15(recurringDepositAccountId, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deposit Transaction:  Used for a deposit transaction  Withdrawal Transaction:  Used for a Withdrawal Transaction  Showing request/response for Deposit Transaction
     * @summary Deposit Transaction | Withdrawal Transaction
     * @param {number} recurringDepositAccountId recurringDepositAccountId
     * @param {PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest} postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest 
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecurringDepositAccountTransactionsApi
     */
    public transaction1(recurringDepositAccountId: number, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command?: string, options?: any) {
        return RecurringDepositAccountTransactionsApiFp(this.configuration).transaction1(recurringDepositAccountId, postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest, command, options).then((request) => request(this.axios, this.basePath));
    }
}
