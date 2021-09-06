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
import { GetAccountTransfersPageItems } from '../models';
// @ts-ignore
import { GetAccountTransfersResponse } from '../models';
// @ts-ignore
import { GetAccountTransfersTemplateRefundByTransferResponse } from '../models';
// @ts-ignore
import { GetAccountTransfersTemplateResponse } from '../models';
// @ts-ignore
import { PostAccountTransfersRefundByTransferRequest } from '../models';
// @ts-ignore
import { PostAccountTransfersRefundByTransferResponse } from '../models';
// @ts-ignore
import { PostAccountTransfersRequest } from '../models';
// @ts-ignore
import { PostAccountTransfersResponse } from '../models';
/**
 * AccountTransfersApi - axios parameter creator
 * @export
 */
export const AccountTransfersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Ability to create new transfer of monetary funds from one account to another.
         * @summary Create new Transfer
         * @param {PostAccountTransfersRequest} postAccountTransfersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create4: async (postAccountTransfersRequest: PostAccountTransfersRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postAccountTransfersRequest' is not null or undefined
            assertParamExists('create4', 'postAccountTransfersRequest', postAccountTransfersRequest)
            const localVarPath = `/accounttransfers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postAccountTransfersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists account\'s transfers  Example Requests:    accounttransfers
         * @summary List account transfers
         * @param {string} [sqlSearch] sqlSearch
         * @param {string} [externalId] externalId
         * @param {number} [offset] offset
         * @param {number} [limit] 
         * @param {string} [orderBy] orderBy
         * @param {string} [sortOrder] sortOrder
         * @param {number} [accountDetailId] accountDetailId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll18: async (sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountDetailId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounttransfers`;
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

            if (sqlSearch !== undefined) {
                localVarQueryParameter['sqlSearch'] = sqlSearch;
            }

            if (externalId !== undefined) {
                localVarQueryParameter['externalId'] = externalId;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (accountDetailId !== undefined) {
                localVarQueryParameter['accountDetailId'] = accountDetailId;
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
         * Retrieves account transfer  Example Requests :    accounttransfers/1
         * @summary Retrieve account transfer
         * @param {number} transferId transferId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne9: async (transferId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transferId' is not null or undefined
            assertParamExists('retrieveOne9', 'transferId', transferId)
            const localVarPath = `/accounttransfers/{transferId}`
                .replace(`{${"transferId"}}`, encodeURIComponent(String(transferId)));
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    accounttransfers/template?fromAccountType=2&fromOfficeId=1    accounttransfers/template?fromAccountType=2&fromOfficeId=1&fromClientId=1    accounttransfers/template?fromClientId=1&fromAccountType=2&fromAccountId=1
         * @summary Retrieve Account Transfer Template
         * @param {number} [fromOfficeId] fromOfficeId
         * @param {number} [fromClientId] fromClientId
         * @param {number} [fromAccountId] fromAccountId
         * @param {number} [fromAccountType] fromAccountType
         * @param {number} [toOfficeId] toOfficeId
         * @param {number} [toClientId] toClientId
         * @param {number} [toAccountId] toAccountId
         * @param {number} [toAccountType] toAccountType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template5: async (fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounttransfers/template`;
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

            if (fromOfficeId !== undefined) {
                localVarQueryParameter['fromOfficeId'] = fromOfficeId;
            }

            if (fromClientId !== undefined) {
                localVarQueryParameter['fromClientId'] = fromClientId;
            }

            if (fromAccountId !== undefined) {
                localVarQueryParameter['fromAccountId'] = fromAccountId;
            }

            if (fromAccountType !== undefined) {
                localVarQueryParameter['fromAccountType'] = fromAccountType;
            }

            if (toOfficeId !== undefined) {
                localVarQueryParameter['toOfficeId'] = toOfficeId;
            }

            if (toClientId !== undefined) {
                localVarQueryParameter['toClientId'] = toClientId;
            }

            if (toAccountId !== undefined) {
                localVarQueryParameter['toAccountId'] = toAccountId;
            }

            if (toAccountType !== undefined) {
                localVarQueryParameter['toAccountType'] = toAccountType;
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
         * Retrieves Refund of an Active Loan by Transfer TemplateExample Requests :    accounttransfers/templateRefundByTransfer?fromAccountId=2&fromAccountType=1& toAccountId=1&toAccountType=2&toClientId=1&toOfficeId=1
         * @summary Retrieve Refund of an Active Loan by Transfer Template
         * @param {number} [fromOfficeId] fromOfficeId
         * @param {number} [fromClientId] fromClientId
         * @param {number} [fromAccountId] fromAccountId
         * @param {number} [fromAccountType] fromAccountType
         * @param {number} [toOfficeId] toOfficeId
         * @param {number} [toClientId] toClientId
         * @param {number} [toAccountId] toAccountId
         * @param {number} [toAccountType] toAccountType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templateRefundByTransfer: async (fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounttransfers/templateRefundByTransfer`;
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

            if (fromOfficeId !== undefined) {
                localVarQueryParameter['fromOfficeId'] = fromOfficeId;
            }

            if (fromClientId !== undefined) {
                localVarQueryParameter['fromClientId'] = fromClientId;
            }

            if (fromAccountId !== undefined) {
                localVarQueryParameter['fromAccountId'] = fromAccountId;
            }

            if (fromAccountType !== undefined) {
                localVarQueryParameter['fromAccountType'] = fromAccountType;
            }

            if (toOfficeId !== undefined) {
                localVarQueryParameter['toOfficeId'] = toOfficeId;
            }

            if (toClientId !== undefined) {
                localVarQueryParameter['toClientId'] = toClientId;
            }

            if (toAccountId !== undefined) {
                localVarQueryParameter['toAccountId'] = toAccountId;
            }

            if (toAccountType !== undefined) {
                localVarQueryParameter['toAccountType'] = toAccountType;
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
         * Ability to refund an active loan by transferring to a savings account.
         * @summary Refund of an Active Loan by Transfer
         * @param {PostAccountTransfersRefundByTransferRequest} postAccountTransfersRefundByTransferRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templateRefundByTransferPost: async (postAccountTransfersRefundByTransferRequest: PostAccountTransfersRefundByTransferRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postAccountTransfersRefundByTransferRequest' is not null or undefined
            assertParamExists('templateRefundByTransferPost', 'postAccountTransfersRefundByTransferRequest', postAccountTransfersRefundByTransferRequest)
            const localVarPath = `/accounttransfers/refundByTransfer`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postAccountTransfersRefundByTransferRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountTransfersApi - functional programming interface
 * @export
 */
export const AccountTransfersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountTransfersApiAxiosParamCreator(configuration)
    return {
        /**
         * Ability to create new transfer of monetary funds from one account to another.
         * @summary Create new Transfer
         * @param {PostAccountTransfersRequest} postAccountTransfersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create4(postAccountTransfersRequest: PostAccountTransfersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostAccountTransfersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create4(postAccountTransfersRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists account\'s transfers  Example Requests:    accounttransfers
         * @summary List account transfers
         * @param {string} [sqlSearch] sqlSearch
         * @param {string} [externalId] externalId
         * @param {number} [offset] offset
         * @param {number} [limit] 
         * @param {string} [orderBy] orderBy
         * @param {string} [sortOrder] sortOrder
         * @param {number} [accountDetailId] accountDetailId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll18(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountDetailId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountTransfersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll18(sqlSearch, externalId, offset, limit, orderBy, sortOrder, accountDetailId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves account transfer  Example Requests :    accounttransfers/1
         * @summary Retrieve account transfer
         * @param {number} transferId transferId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne9(transferId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountTransfersPageItems>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne9(transferId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    accounttransfers/template?fromAccountType=2&fromOfficeId=1    accounttransfers/template?fromAccountType=2&fromOfficeId=1&fromClientId=1    accounttransfers/template?fromClientId=1&fromAccountType=2&fromAccountId=1
         * @summary Retrieve Account Transfer Template
         * @param {number} [fromOfficeId] fromOfficeId
         * @param {number} [fromClientId] fromClientId
         * @param {number} [fromAccountId] fromAccountId
         * @param {number} [fromAccountType] fromAccountType
         * @param {number} [toOfficeId] toOfficeId
         * @param {number} [toClientId] toClientId
         * @param {number} [toAccountId] toAccountId
         * @param {number} [toAccountType] toAccountType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async template5(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountTransfersTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.template5(fromOfficeId, fromClientId, fromAccountId, fromAccountType, toOfficeId, toClientId, toAccountId, toAccountType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves Refund of an Active Loan by Transfer TemplateExample Requests :    accounttransfers/templateRefundByTransfer?fromAccountId=2&fromAccountType=1& toAccountId=1&toAccountType=2&toClientId=1&toOfficeId=1
         * @summary Retrieve Refund of an Active Loan by Transfer Template
         * @param {number} [fromOfficeId] fromOfficeId
         * @param {number} [fromClientId] fromClientId
         * @param {number} [fromAccountId] fromAccountId
         * @param {number} [fromAccountType] fromAccountType
         * @param {number} [toOfficeId] toOfficeId
         * @param {number} [toClientId] toClientId
         * @param {number} [toAccountId] toAccountId
         * @param {number} [toAccountType] toAccountType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templateRefundByTransfer(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountTransfersTemplateRefundByTransferResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templateRefundByTransfer(fromOfficeId, fromClientId, fromAccountId, fromAccountType, toOfficeId, toClientId, toAccountId, toAccountType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Ability to refund an active loan by transferring to a savings account.
         * @summary Refund of an Active Loan by Transfer
         * @param {PostAccountTransfersRefundByTransferRequest} postAccountTransfersRefundByTransferRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest: PostAccountTransfersRefundByTransferRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostAccountTransfersRefundByTransferResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountTransfersApi - factory interface
 * @export
 */
export const AccountTransfersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountTransfersApiFp(configuration)
    return {
        /**
         * Ability to create new transfer of monetary funds from one account to another.
         * @summary Create new Transfer
         * @param {PostAccountTransfersRequest} postAccountTransfersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create4(postAccountTransfersRequest: PostAccountTransfersRequest, options?: any): AxiosPromise<PostAccountTransfersResponse> {
            return localVarFp.create4(postAccountTransfersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists account\'s transfers  Example Requests:    accounttransfers
         * @summary List account transfers
         * @param {string} [sqlSearch] sqlSearch
         * @param {string} [externalId] externalId
         * @param {number} [offset] offset
         * @param {number} [limit] 
         * @param {string} [orderBy] orderBy
         * @param {string} [sortOrder] sortOrder
         * @param {number} [accountDetailId] accountDetailId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll18(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountDetailId?: number, options?: any): AxiosPromise<GetAccountTransfersResponse> {
            return localVarFp.retrieveAll18(sqlSearch, externalId, offset, limit, orderBy, sortOrder, accountDetailId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves account transfer  Example Requests :    accounttransfers/1
         * @summary Retrieve account transfer
         * @param {number} transferId transferId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne9(transferId: number, options?: any): AxiosPromise<GetAccountTransfersPageItems> {
            return localVarFp.retrieveOne9(transferId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    accounttransfers/template?fromAccountType=2&fromOfficeId=1    accounttransfers/template?fromAccountType=2&fromOfficeId=1&fromClientId=1    accounttransfers/template?fromClientId=1&fromAccountType=2&fromAccountId=1
         * @summary Retrieve Account Transfer Template
         * @param {number} [fromOfficeId] fromOfficeId
         * @param {number} [fromClientId] fromClientId
         * @param {number} [fromAccountId] fromAccountId
         * @param {number} [fromAccountType] fromAccountType
         * @param {number} [toOfficeId] toOfficeId
         * @param {number} [toClientId] toClientId
         * @param {number} [toAccountId] toAccountId
         * @param {number} [toAccountType] toAccountType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template5(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options?: any): AxiosPromise<GetAccountTransfersTemplateResponse> {
            return localVarFp.template5(fromOfficeId, fromClientId, fromAccountId, fromAccountType, toOfficeId, toClientId, toAccountId, toAccountType, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves Refund of an Active Loan by Transfer TemplateExample Requests :    accounttransfers/templateRefundByTransfer?fromAccountId=2&fromAccountType=1& toAccountId=1&toAccountType=2&toClientId=1&toOfficeId=1
         * @summary Retrieve Refund of an Active Loan by Transfer Template
         * @param {number} [fromOfficeId] fromOfficeId
         * @param {number} [fromClientId] fromClientId
         * @param {number} [fromAccountId] fromAccountId
         * @param {number} [fromAccountType] fromAccountType
         * @param {number} [toOfficeId] toOfficeId
         * @param {number} [toClientId] toClientId
         * @param {number} [toAccountId] toAccountId
         * @param {number} [toAccountType] toAccountType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templateRefundByTransfer(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options?: any): AxiosPromise<GetAccountTransfersTemplateRefundByTransferResponse> {
            return localVarFp.templateRefundByTransfer(fromOfficeId, fromClientId, fromAccountId, fromAccountType, toOfficeId, toClientId, toAccountId, toAccountType, options).then((request) => request(axios, basePath));
        },
        /**
         * Ability to refund an active loan by transferring to a savings account.
         * @summary Refund of an Active Loan by Transfer
         * @param {PostAccountTransfersRefundByTransferRequest} postAccountTransfersRefundByTransferRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest: PostAccountTransfersRefundByTransferRequest, options?: any): AxiosPromise<PostAccountTransfersRefundByTransferResponse> {
            return localVarFp.templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountTransfersApi - object-oriented interface
 * @export
 * @class AccountTransfersApi
 * @extends {BaseAPI}
 */
export class AccountTransfersApi extends BaseAPI {
    /**
     * Ability to create new transfer of monetary funds from one account to another.
     * @summary Create new Transfer
     * @param {PostAccountTransfersRequest} postAccountTransfersRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountTransfersApi
     */
    public create4(postAccountTransfersRequest: PostAccountTransfersRequest, options?: any) {
        return AccountTransfersApiFp(this.configuration).create4(postAccountTransfersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists account\'s transfers  Example Requests:    accounttransfers
     * @summary List account transfers
     * @param {string} [sqlSearch] sqlSearch
     * @param {string} [externalId] externalId
     * @param {number} [offset] offset
     * @param {number} [limit] 
     * @param {string} [orderBy] orderBy
     * @param {string} [sortOrder] sortOrder
     * @param {number} [accountDetailId] accountDetailId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountTransfersApi
     */
    public retrieveAll18(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, accountDetailId?: number, options?: any) {
        return AccountTransfersApiFp(this.configuration).retrieveAll18(sqlSearch, externalId, offset, limit, orderBy, sortOrder, accountDetailId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves account transfer  Example Requests :    accounttransfers/1
     * @summary Retrieve account transfer
     * @param {number} transferId transferId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountTransfersApi
     */
    public retrieveOne9(transferId: number, options?: any) {
        return AccountTransfersApiFp(this.configuration).retrieveOne9(transferId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    accounttransfers/template?fromAccountType=2&fromOfficeId=1    accounttransfers/template?fromAccountType=2&fromOfficeId=1&fromClientId=1    accounttransfers/template?fromClientId=1&fromAccountType=2&fromAccountId=1
     * @summary Retrieve Account Transfer Template
     * @param {number} [fromOfficeId] fromOfficeId
     * @param {number} [fromClientId] fromClientId
     * @param {number} [fromAccountId] fromAccountId
     * @param {number} [fromAccountType] fromAccountType
     * @param {number} [toOfficeId] toOfficeId
     * @param {number} [toClientId] toClientId
     * @param {number} [toAccountId] toAccountId
     * @param {number} [toAccountType] toAccountType
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountTransfersApi
     */
    public template5(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options?: any) {
        return AccountTransfersApiFp(this.configuration).template5(fromOfficeId, fromClientId, fromAccountId, fromAccountType, toOfficeId, toClientId, toAccountId, toAccountType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves Refund of an Active Loan by Transfer TemplateExample Requests :    accounttransfers/templateRefundByTransfer?fromAccountId=2&fromAccountType=1& toAccountId=1&toAccountType=2&toClientId=1&toOfficeId=1
     * @summary Retrieve Refund of an Active Loan by Transfer Template
     * @param {number} [fromOfficeId] fromOfficeId
     * @param {number} [fromClientId] fromClientId
     * @param {number} [fromAccountId] fromAccountId
     * @param {number} [fromAccountType] fromAccountType
     * @param {number} [toOfficeId] toOfficeId
     * @param {number} [toClientId] toClientId
     * @param {number} [toAccountId] toAccountId
     * @param {number} [toAccountType] toAccountType
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountTransfersApi
     */
    public templateRefundByTransfer(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, options?: any) {
        return AccountTransfersApiFp(this.configuration).templateRefundByTransfer(fromOfficeId, fromClientId, fromAccountId, fromAccountType, toOfficeId, toClientId, toAccountId, toAccountType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Ability to refund an active loan by transferring to a savings account.
     * @summary Refund of an Active Loan by Transfer
     * @param {PostAccountTransfersRefundByTransferRequest} postAccountTransfersRefundByTransferRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountTransfersApi
     */
    public templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest: PostAccountTransfersRefundByTransferRequest, options?: any) {
        return AccountTransfersApiFp(this.configuration).templateRefundByTransferPost(postAccountTransfersRefundByTransferRequest, options).then((request) => request(this.axios, this.basePath));
    }
}