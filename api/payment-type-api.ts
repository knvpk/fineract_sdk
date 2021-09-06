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
import { DeletePaymentTypesPaymentTypeIdResponse } from '../models';
// @ts-ignore
import { GetPaymentTypesPaymentTypeIdResponse } from '../models';
// @ts-ignore
import { GetPaymentTypesResponse } from '../models';
// @ts-ignore
import { PostPaymentTypesRequest } from '../models';
// @ts-ignore
import { PostPaymentTypesResponse } from '../models';
// @ts-ignore
import { PutPaymentTypesPaymentTypeIdRequest } from '../models';
// @ts-ignore
import { PutPaymentTypesPaymentTypeIdResponse } from '../models';
/**
 * PaymentTypeApi - axios parameter creator
 * @export
 */
export const PaymentTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Payment type  Mandatory Fields: name  Optional Fields: Description, isCashPayment,Position
         * @summary Create a Payment Type
         * @param {PostPaymentTypesRequest} postPaymentTypesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPaymentType: async (postPaymentTypesRequest: PostPaymentTypesRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postPaymentTypesRequest' is not null or undefined
            assertParamExists('createPaymentType', 'postPaymentTypesRequest', postPaymentTypesRequest)
            const localVarPath = `/paymenttypes`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postPaymentTypesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes payment type
         * @summary Delete a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePaymentType: async (paymentTypeId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'paymentTypeId' is not null or undefined
            assertParamExists('deletePaymentType', 'paymentTypeId', paymentTypeId)
            const localVarPath = `/paymenttypes/{paymentTypeId}`
                .replace(`{${"paymentTypeId"}}`, encodeURIComponent(String(paymentTypeId)));
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
         * Retrieve list of payment types
         * @summary Retrieve all Payment Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPaymentTypes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/paymenttypes`;
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
         * Retrieves a payment type
         * @summary Retrieve a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOnePaymentType: async (paymentTypeId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'paymentTypeId' is not null or undefined
            assertParamExists('retrieveOnePaymentType', 'paymentTypeId', paymentTypeId)
            const localVarPath = `/paymenttypes/{paymentTypeId}`
                .replace(`{${"paymentTypeId"}}`, encodeURIComponent(String(paymentTypeId)));
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
         * Updates a Payment Type
         * @summary Update a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {PutPaymentTypesPaymentTypeIdRequest} putPaymentTypesPaymentTypeIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePaymentType: async (paymentTypeId: number, putPaymentTypesPaymentTypeIdRequest: PutPaymentTypesPaymentTypeIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'paymentTypeId' is not null or undefined
            assertParamExists('updatePaymentType', 'paymentTypeId', paymentTypeId)
            // verify required parameter 'putPaymentTypesPaymentTypeIdRequest' is not null or undefined
            assertParamExists('updatePaymentType', 'putPaymentTypesPaymentTypeIdRequest', putPaymentTypesPaymentTypeIdRequest)
            const localVarPath = `/paymenttypes/{paymentTypeId}`
                .replace(`{${"paymentTypeId"}}`, encodeURIComponent(String(paymentTypeId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putPaymentTypesPaymentTypeIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentTypeApi - functional programming interface
 * @export
 */
export const PaymentTypeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentTypeApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new Payment type  Mandatory Fields: name  Optional Fields: Description, isCashPayment,Position
         * @summary Create a Payment Type
         * @param {PostPaymentTypesRequest} postPaymentTypesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPaymentType(postPaymentTypesRequest: PostPaymentTypesRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostPaymentTypesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPaymentType(postPaymentTypesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes payment type
         * @summary Delete a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePaymentType(paymentTypeId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeletePaymentTypesPaymentTypeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePaymentType(paymentTypeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve list of payment types
         * @summary Retrieve all Payment Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPaymentTypes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetPaymentTypesResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPaymentTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a payment type
         * @summary Retrieve a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOnePaymentType(paymentTypeId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPaymentTypesPaymentTypeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOnePaymentType(paymentTypeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a Payment Type
         * @summary Update a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {PutPaymentTypesPaymentTypeIdRequest} putPaymentTypesPaymentTypeIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePaymentType(paymentTypeId: number, putPaymentTypesPaymentTypeIdRequest: PutPaymentTypesPaymentTypeIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutPaymentTypesPaymentTypeIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePaymentType(paymentTypeId, putPaymentTypesPaymentTypeIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PaymentTypeApi - factory interface
 * @export
 */
export const PaymentTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentTypeApiFp(configuration)
    return {
        /**
         * Creates a new Payment type  Mandatory Fields: name  Optional Fields: Description, isCashPayment,Position
         * @summary Create a Payment Type
         * @param {PostPaymentTypesRequest} postPaymentTypesRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPaymentType(postPaymentTypesRequest: PostPaymentTypesRequest, options?: any): AxiosPromise<PostPaymentTypesResponse> {
            return localVarFp.createPaymentType(postPaymentTypesRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes payment type
         * @summary Delete a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePaymentType(paymentTypeId: number, options?: any): AxiosPromise<DeletePaymentTypesPaymentTypeIdResponse> {
            return localVarFp.deletePaymentType(paymentTypeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve list of payment types
         * @summary Retrieve all Payment Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPaymentTypes(options?: any): AxiosPromise<Array<GetPaymentTypesResponse>> {
            return localVarFp.getAllPaymentTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a payment type
         * @summary Retrieve a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOnePaymentType(paymentTypeId: number, options?: any): AxiosPromise<GetPaymentTypesPaymentTypeIdResponse> {
            return localVarFp.retrieveOnePaymentType(paymentTypeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a Payment Type
         * @summary Update a Payment Type
         * @param {number} paymentTypeId paymentTypeId
         * @param {PutPaymentTypesPaymentTypeIdRequest} putPaymentTypesPaymentTypeIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePaymentType(paymentTypeId: number, putPaymentTypesPaymentTypeIdRequest: PutPaymentTypesPaymentTypeIdRequest, options?: any): AxiosPromise<PutPaymentTypesPaymentTypeIdResponse> {
            return localVarFp.updatePaymentType(paymentTypeId, putPaymentTypesPaymentTypeIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentTypeApi - object-oriented interface
 * @export
 * @class PaymentTypeApi
 * @extends {BaseAPI}
 */
export class PaymentTypeApi extends BaseAPI {
    /**
     * Creates a new Payment type  Mandatory Fields: name  Optional Fields: Description, isCashPayment,Position
     * @summary Create a Payment Type
     * @param {PostPaymentTypesRequest} postPaymentTypesRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentTypeApi
     */
    public createPaymentType(postPaymentTypesRequest: PostPaymentTypesRequest, options?: any) {
        return PaymentTypeApiFp(this.configuration).createPaymentType(postPaymentTypesRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes payment type
     * @summary Delete a Payment Type
     * @param {number} paymentTypeId paymentTypeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentTypeApi
     */
    public deletePaymentType(paymentTypeId: number, options?: any) {
        return PaymentTypeApiFp(this.configuration).deletePaymentType(paymentTypeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve list of payment types
     * @summary Retrieve all Payment Types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentTypeApi
     */
    public getAllPaymentTypes(options?: any) {
        return PaymentTypeApiFp(this.configuration).getAllPaymentTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a payment type
     * @summary Retrieve a Payment Type
     * @param {number} paymentTypeId paymentTypeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentTypeApi
     */
    public retrieveOnePaymentType(paymentTypeId: number, options?: any) {
        return PaymentTypeApiFp(this.configuration).retrieveOnePaymentType(paymentTypeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a Payment Type
     * @summary Update a Payment Type
     * @param {number} paymentTypeId paymentTypeId
     * @param {PutPaymentTypesPaymentTypeIdRequest} putPaymentTypesPaymentTypeIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentTypeApi
     */
    public updatePaymentType(paymentTypeId: number, putPaymentTypesPaymentTypeIdRequest: PutPaymentTypesPaymentTypeIdRequest, options?: any) {
        return PaymentTypeApiFp(this.configuration).updatePaymentType(paymentTypeId, putPaymentTypesPaymentTypeIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
