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
import { GetClientsClientIdTransactionsResponse } from '../models';
// @ts-ignore
import { GetClientsClientIdTransactionsTransactionIdResponse } from '../models';
// @ts-ignore
import { PostClientsClientIdTransactionsTransactionIdResponse } from '../models';
/**
 * ClientTransactionApi - axios parameter creator
 * @export
 */
export const ClientTransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The list capability of client transaction can support pagination.  Example Requests:  clients/189/transactions  clients/189/transactions?offset=10&limit=50
         * @summary List Client Transactions
         * @param {number} clientId clientId
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllClientTransactions: async (clientId: number, offset?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('retrieveAllClientTransactions', 'clientId', clientId)
            const localVarPath = `/clients/{clientId}/transactions`
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

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * Example Requests: clients/1/transactions/1   clients/1/transactions/1?fields=id,officeName
         * @summary Retrieve a Client Transaction
         * @param {number} clientId clientId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveClientTransaction: async (clientId: number, transactionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('retrieveClientTransaction', 'clientId', clientId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('retrieveClientTransaction', 'transactionId', transactionId)
            const localVarPath = `/clients/{clientId}/transactions/{transactionId}`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)))
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
         * Undoes a Client Transaction
         * @summary Undo a Client Transaction
         * @param {number} clientId clientId
         * @param {number} transactionId transactionId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        undoClientTransaction: async (clientId: number, transactionId: number, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('undoClientTransaction', 'clientId', clientId)
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('undoClientTransaction', 'transactionId', transactionId)
            const localVarPath = `/clients/{clientId}/transactions/{transactionId}`
                .replace(`{${"clientId"}}`, encodeURIComponent(String(clientId)))
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
 * ClientTransactionApi - functional programming interface
 * @export
 */
export const ClientTransactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientTransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * The list capability of client transaction can support pagination.  Example Requests:  clients/189/transactions  clients/189/transactions?offset=10&limit=50
         * @summary List Client Transactions
         * @param {number} clientId clientId
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAllClientTransactions(clientId: number, offset?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetClientsClientIdTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAllClientTransactions(clientId, offset, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Example Requests: clients/1/transactions/1   clients/1/transactions/1?fields=id,officeName
         * @summary Retrieve a Client Transaction
         * @param {number} clientId clientId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveClientTransaction(clientId: number, transactionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetClientsClientIdTransactionsTransactionIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveClientTransaction(clientId, transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Undoes a Client Transaction
         * @summary Undo a Client Transaction
         * @param {number} clientId clientId
         * @param {number} transactionId transactionId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async undoClientTransaction(clientId: number, transactionId: number, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostClientsClientIdTransactionsTransactionIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.undoClientTransaction(clientId, transactionId, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClientTransactionApi - factory interface
 * @export
 */
export const ClientTransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientTransactionApiFp(configuration)
    return {
        /**
         * The list capability of client transaction can support pagination.  Example Requests:  clients/189/transactions  clients/189/transactions?offset=10&limit=50
         * @summary List Client Transactions
         * @param {number} clientId clientId
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllClientTransactions(clientId: number, offset?: number, limit?: number, options?: any): AxiosPromise<GetClientsClientIdTransactionsResponse> {
            return localVarFp.retrieveAllClientTransactions(clientId, offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Example Requests: clients/1/transactions/1   clients/1/transactions/1?fields=id,officeName
         * @summary Retrieve a Client Transaction
         * @param {number} clientId clientId
         * @param {number} transactionId transactionId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveClientTransaction(clientId: number, transactionId: number, options?: any): AxiosPromise<GetClientsClientIdTransactionsTransactionIdResponse> {
            return localVarFp.retrieveClientTransaction(clientId, transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Undoes a Client Transaction
         * @summary Undo a Client Transaction
         * @param {number} clientId clientId
         * @param {number} transactionId transactionId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        undoClientTransaction(clientId: number, transactionId: number, command?: string, options?: any): AxiosPromise<PostClientsClientIdTransactionsTransactionIdResponse> {
            return localVarFp.undoClientTransaction(clientId, transactionId, command, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientTransactionApi - object-oriented interface
 * @export
 * @class ClientTransactionApi
 * @extends {BaseAPI}
 */
export class ClientTransactionApi extends BaseAPI {
    /**
     * The list capability of client transaction can support pagination.  Example Requests:  clients/189/transactions  clients/189/transactions?offset=10&limit=50
     * @summary List Client Transactions
     * @param {number} clientId clientId
     * @param {number} [offset] offset
     * @param {number} [limit] limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientTransactionApi
     */
    public retrieveAllClientTransactions(clientId: number, offset?: number, limit?: number, options?: any) {
        return ClientTransactionApiFp(this.configuration).retrieveAllClientTransactions(clientId, offset, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Example Requests: clients/1/transactions/1   clients/1/transactions/1?fields=id,officeName
     * @summary Retrieve a Client Transaction
     * @param {number} clientId clientId
     * @param {number} transactionId transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientTransactionApi
     */
    public retrieveClientTransaction(clientId: number, transactionId: number, options?: any) {
        return ClientTransactionApiFp(this.configuration).retrieveClientTransaction(clientId, transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Undoes a Client Transaction
     * @summary Undo a Client Transaction
     * @param {number} clientId clientId
     * @param {number} transactionId transactionId
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientTransactionApi
     */
    public undoClientTransaction(clientId: number, transactionId: number, command?: string, options?: any) {
        return ClientTransactionApiFp(this.configuration).undoClientTransaction(clientId, transactionId, command, options).then((request) => request(this.axios, this.basePath));
    }
}