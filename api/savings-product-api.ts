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
import { DeleteSavingsProductsProductIdResponse } from '../models';
// @ts-ignore
import { GetSavingsProductsProductIdResponse } from '../models';
// @ts-ignore
import { GetSavingsProductsResponse } from '../models';
// @ts-ignore
import { GetSavingsProductsTemplateResponse } from '../models';
// @ts-ignore
import { PostSavingsProductsRequest } from '../models';
// @ts-ignore
import { PostSavingsProductsResponse } from '../models';
// @ts-ignore
import { PutSavingsProductsProductIdRequest } from '../models';
// @ts-ignore
import { PutSavingsProductsProductIdResponse } from '../models';
/**
 * SavingsProductApi - axios parameter creator
 * @export
 */
export const SavingsProductApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a Savings Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, allowOverdraft, overdraftLimit, minBalanceForInterestCalculation,withHoldTax,taxGroupId
         * @summary Create a Savings Product
         * @param {PostSavingsProductsRequest} postSavingsProductsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSavingsProduct: async (postSavingsProductsRequest: PostSavingsProductsRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postSavingsProductsRequest' is not null or undefined
            assertParamExists('createSavingsProduct', 'postSavingsProductsRequest', postSavingsProductsRequest)
            const localVarPath = `/savingsproducts`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postSavingsProductsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a Savings Product
         * @summary Delete a Savings Product
         * @param {number} productId productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSavingsProduct: async (productId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('deleteSavingsProduct', 'productId', productId)
            const localVarPath = `/savingsproducts/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
         * Retrieves a Savings Product  Example Requests:  savingsproducts/1  savingsproducts/1?template=true  savingsproducts/1?fields=name,description
         * @summary Retrieve a Savings Product
         * @param {number} productId productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSavingsProduct: async (productId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('retrieveSavingsProduct', 'productId', productId)
            const localVarPath = `/savingsproducts/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
         * Lists Savings Products  Example Requests:  savingsproducts  savingsproducts?fields=name
         * @summary List Savings Products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSavingsProducts: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/savingsproducts`;
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsproducts/template
         * @summary Retrieve Savings Product Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retriveSavingsProductTemplate: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/savingsproducts/template`;
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
         * Updates a Savings Product
         * @summary Update a Savings Product
         * @param {number} productId productId
         * @param {PutSavingsProductsProductIdRequest} putSavingsProductsProductIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSavingsProduct: async (productId: number, putSavingsProductsProductIdRequest: PutSavingsProductsProductIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('updateSavingsProduct', 'productId', productId)
            // verify required parameter 'putSavingsProductsProductIdRequest' is not null or undefined
            assertParamExists('updateSavingsProduct', 'putSavingsProductsProductIdRequest', putSavingsProductsProductIdRequest)
            const localVarPath = `/savingsproducts/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putSavingsProductsProductIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SavingsProductApi - functional programming interface
 * @export
 */
export const SavingsProductApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SavingsProductApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a Savings Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, allowOverdraft, overdraftLimit, minBalanceForInterestCalculation,withHoldTax,taxGroupId
         * @summary Create a Savings Product
         * @param {PostSavingsProductsRequest} postSavingsProductsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSavingsProduct(postSavingsProductsRequest: PostSavingsProductsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostSavingsProductsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSavingsProduct(postSavingsProductsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a Savings Product
         * @summary Delete a Savings Product
         * @param {number} productId productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSavingsProduct(productId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteSavingsProductsProductIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSavingsProduct(productId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a Savings Product  Example Requests:  savingsproducts/1  savingsproducts/1?template=true  savingsproducts/1?fields=name,description
         * @summary Retrieve a Savings Product
         * @param {number} productId productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveSavingsProduct(productId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSavingsProductsProductIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveSavingsProduct(productId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists Savings Products  Example Requests:  savingsproducts  savingsproducts?fields=name
         * @summary List Savings Products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveSavingsProducts(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSavingsProductsResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveSavingsProducts(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsproducts/template
         * @summary Retrieve Savings Product Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retriveSavingsProductTemplate(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSavingsProductsTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retriveSavingsProductTemplate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a Savings Product
         * @summary Update a Savings Product
         * @param {number} productId productId
         * @param {PutSavingsProductsProductIdRequest} putSavingsProductsProductIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSavingsProduct(productId: number, putSavingsProductsProductIdRequest: PutSavingsProductsProductIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutSavingsProductsProductIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSavingsProduct(productId, putSavingsProductsProductIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SavingsProductApi - factory interface
 * @export
 */
export const SavingsProductApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SavingsProductApiFp(configuration)
    return {
        /**
         * Creates a Savings Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, allowOverdraft, overdraftLimit, minBalanceForInterestCalculation,withHoldTax,taxGroupId
         * @summary Create a Savings Product
         * @param {PostSavingsProductsRequest} postSavingsProductsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSavingsProduct(postSavingsProductsRequest: PostSavingsProductsRequest, options?: any): AxiosPromise<PostSavingsProductsResponse> {
            return localVarFp.createSavingsProduct(postSavingsProductsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a Savings Product
         * @summary Delete a Savings Product
         * @param {number} productId productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSavingsProduct(productId: number, options?: any): AxiosPromise<DeleteSavingsProductsProductIdResponse> {
            return localVarFp.deleteSavingsProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a Savings Product  Example Requests:  savingsproducts/1  savingsproducts/1?template=true  savingsproducts/1?fields=name,description
         * @summary Retrieve a Savings Product
         * @param {number} productId productId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSavingsProduct(productId: number, options?: any): AxiosPromise<GetSavingsProductsProductIdResponse> {
            return localVarFp.retrieveSavingsProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists Savings Products  Example Requests:  savingsproducts  savingsproducts?fields=name
         * @summary List Savings Products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSavingsProducts(options?: any): AxiosPromise<Array<GetSavingsProductsResponse>> {
            return localVarFp.retrieveSavingsProducts(options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsproducts/template
         * @summary Retrieve Savings Product Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retriveSavingsProductTemplate(options?: any): AxiosPromise<GetSavingsProductsTemplateResponse> {
            return localVarFp.retriveSavingsProductTemplate(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a Savings Product
         * @summary Update a Savings Product
         * @param {number} productId productId
         * @param {PutSavingsProductsProductIdRequest} putSavingsProductsProductIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSavingsProduct(productId: number, putSavingsProductsProductIdRequest: PutSavingsProductsProductIdRequest, options?: any): AxiosPromise<PutSavingsProductsProductIdResponse> {
            return localVarFp.updateSavingsProduct(productId, putSavingsProductsProductIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SavingsProductApi - object-oriented interface
 * @export
 * @class SavingsProductApi
 * @extends {BaseAPI}
 */
export class SavingsProductApi extends BaseAPI {
    /**
     * Creates a Savings Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, allowOverdraft, overdraftLimit, minBalanceForInterestCalculation,withHoldTax,taxGroupId
     * @summary Create a Savings Product
     * @param {PostSavingsProductsRequest} postSavingsProductsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsProductApi
     */
    public createSavingsProduct(postSavingsProductsRequest: PostSavingsProductsRequest, options?: any) {
        return SavingsProductApiFp(this.configuration).createSavingsProduct(postSavingsProductsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a Savings Product
     * @summary Delete a Savings Product
     * @param {number} productId productId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsProductApi
     */
    public deleteSavingsProduct(productId: number, options?: any) {
        return SavingsProductApiFp(this.configuration).deleteSavingsProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a Savings Product  Example Requests:  savingsproducts/1  savingsproducts/1?template=true  savingsproducts/1?fields=name,description
     * @summary Retrieve a Savings Product
     * @param {number} productId productId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsProductApi
     */
    public retrieveSavingsProduct(productId: number, options?: any) {
        return SavingsProductApiFp(this.configuration).retrieveSavingsProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists Savings Products  Example Requests:  savingsproducts  savingsproducts?fields=name
     * @summary List Savings Products
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsProductApi
     */
    public retrieveSavingsProducts(options?: any) {
        return SavingsProductApiFp(this.configuration).retrieveSavingsProducts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsproducts/template
     * @summary Retrieve Savings Product Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsProductApi
     */
    public retriveSavingsProductTemplate(options?: any) {
        return SavingsProductApiFp(this.configuration).retriveSavingsProductTemplate(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a Savings Product
     * @summary Update a Savings Product
     * @param {number} productId productId
     * @param {PutSavingsProductsProductIdRequest} putSavingsProductsProductIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavingsProductApi
     */
    public updateSavingsProduct(productId: number, putSavingsProductsProductIdRequest: PutSavingsProductsProductIdRequest, options?: any) {
        return SavingsProductApiFp(this.configuration).updateSavingsProduct(productId, putSavingsProductsProductIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
