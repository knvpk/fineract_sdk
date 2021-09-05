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
import { GetProductsTypeProductIdResponse } from '../models';
// @ts-ignore
import { GetProductsTypeResponse } from '../models';
// @ts-ignore
import { PostProductsTypeRequest } from '../models';
// @ts-ignore
import { PostProductsTypeResponse } from '../models';
// @ts-ignore
import { PutProductsTypeProductIdRequest } from '../models';
// @ts-ignore
import { PutProductsTypeProductIdResponse } from '../models';
/**
 * ProductsApi - axios parameter creator
 * @export
 */
export const ProductsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a Share Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, locale, totalShares, unitPrice, nominalShares,allowDividendCalculationForInactiveClients,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): shareReferenceId, shareSuspenseId, shareEquityId, incomeFromFeeAccountId  Optional Fields: sharesIssued, minimumShares, maximumShares, minimumActivePeriodForDividends, minimumactiveperiodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType, marketPricePeriods, chargesSelected
         * @summary Create a Share Product
         * @param {string} type type
         * @param {PostProductsTypeRequest} postProductsTypeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct: async (type: string, postProductsTypeRequest: PostProductsTypeRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('createProduct', 'type', type)
            // verify required parameter 'postProductsTypeRequest' is not null or undefined
            assertParamExists('createProduct', 'postProductsTypeRequest', postProductsTypeRequest)
            const localVarPath = `/products/{type}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postProductsTypeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} type type
         * @param {number} productId productId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        handleCommands3: async (type: string, productId: number, command?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('handleCommands3', 'type', type)
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('handleCommands3', 'productId', productId)
            const localVarPath = `/products/{type}/{productId}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)))
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
        /**
         * Lists Share Products  Mandatory Fields: limit, offset  Example Requests:  shareproducts
         * @summary List Share Products
         * @param {string} type type
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllProducts: async (type: string, offset?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('retrieveAllProducts', 'type', type)
            const localVarPath = `/products/{type}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
         * Retrieves a Share Product  Example Requests:  products/share/1   products/share/1?template=true
         * @summary Retrieve a Share Product
         * @param {number} productId productId
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveProduct: async (productId: number, type: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('retrieveProduct', 'productId', productId)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('retrieveProduct', 'type', type)
            const localVarPath = `/products/{type}/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
         * 
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate12: async (type: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('retrieveTemplate12', 'type', type)
            const localVarPath = `/products/{type}/template`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
         * Updates a Share Product
         * @summary Update a Share Product
         * @param {string} type type
         * @param {number} productId productId
         * @param {PutProductsTypeProductIdRequest} putProductsTypeProductIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProduct: async (type: string, productId: number, putProductsTypeProductIdRequest: PutProductsTypeProductIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('updateProduct', 'type', type)
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('updateProduct', 'productId', productId)
            // verify required parameter 'putProductsTypeProductIdRequest' is not null or undefined
            assertParamExists('updateProduct', 'putProductsTypeProductIdRequest', putProductsTypeProductIdRequest)
            const localVarPath = `/products/{type}/{productId}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)))
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
            localVarRequestOptions.data = serializeDataIfNeeded(putProductsTypeProductIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductsApi - functional programming interface
 * @export
 */
export const ProductsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a Share Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, locale, totalShares, unitPrice, nominalShares,allowDividendCalculationForInactiveClients,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): shareReferenceId, shareSuspenseId, shareEquityId, incomeFromFeeAccountId  Optional Fields: sharesIssued, minimumShares, maximumShares, minimumActivePeriodForDividends, minimumactiveperiodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType, marketPricePeriods, chargesSelected
         * @summary Create a Share Product
         * @param {string} type type
         * @param {PostProductsTypeRequest} postProductsTypeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProduct(type: string, postProductsTypeRequest: PostProductsTypeRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostProductsTypeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProduct(type, postProductsTypeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} type type
         * @param {number} productId productId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async handleCommands3(type: string, productId: number, command?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.handleCommands3(type, productId, command, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists Share Products  Mandatory Fields: limit, offset  Example Requests:  shareproducts
         * @summary List Share Products
         * @param {string} type type
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAllProducts(type: string, offset?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetProductsTypeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAllProducts(type, offset, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a Share Product  Example Requests:  products/share/1   products/share/1?template=true
         * @summary Retrieve a Share Product
         * @param {number} productId productId
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveProduct(productId: number, type: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetProductsTypeProductIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveProduct(productId, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveTemplate12(type: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveTemplate12(type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a Share Product
         * @summary Update a Share Product
         * @param {string} type type
         * @param {number} productId productId
         * @param {PutProductsTypeProductIdRequest} putProductsTypeProductIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProduct(type: string, productId: number, putProductsTypeProductIdRequest: PutProductsTypeProductIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutProductsTypeProductIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProduct(type, productId, putProductsTypeProductIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductsApi - factory interface
 * @export
 */
export const ProductsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductsApiFp(configuration)
    return {
        /**
         * Creates a Share Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, locale, totalShares, unitPrice, nominalShares,allowDividendCalculationForInactiveClients,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): shareReferenceId, shareSuspenseId, shareEquityId, incomeFromFeeAccountId  Optional Fields: sharesIssued, minimumShares, maximumShares, minimumActivePeriodForDividends, minimumactiveperiodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType, marketPricePeriods, chargesSelected
         * @summary Create a Share Product
         * @param {string} type type
         * @param {PostProductsTypeRequest} postProductsTypeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(type: string, postProductsTypeRequest: PostProductsTypeRequest, options?: any): AxiosPromise<PostProductsTypeResponse> {
            return localVarFp.createProduct(type, postProductsTypeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} type type
         * @param {number} productId productId
         * @param {string} [command] command
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        handleCommands3(type: string, productId: number, command?: string, options?: any): AxiosPromise<string> {
            return localVarFp.handleCommands3(type, productId, command, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists Share Products  Mandatory Fields: limit, offset  Example Requests:  shareproducts
         * @summary List Share Products
         * @param {string} type type
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllProducts(type: string, offset?: number, limit?: number, options?: any): AxiosPromise<GetProductsTypeResponse> {
            return localVarFp.retrieveAllProducts(type, offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a Share Product  Example Requests:  products/share/1   products/share/1?template=true
         * @summary Retrieve a Share Product
         * @param {number} productId productId
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveProduct(productId: number, type: string, options?: any): AxiosPromise<GetProductsTypeProductIdResponse> {
            return localVarFp.retrieveProduct(productId, type, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} type type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveTemplate12(type: string, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveTemplate12(type, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a Share Product
         * @summary Update a Share Product
         * @param {string} type type
         * @param {number} productId productId
         * @param {PutProductsTypeProductIdRequest} putProductsTypeProductIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProduct(type: string, productId: number, putProductsTypeProductIdRequest: PutProductsTypeProductIdRequest, options?: any): AxiosPromise<PutProductsTypeProductIdResponse> {
            return localVarFp.updateProduct(type, productId, putProductsTypeProductIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductsApi - object-oriented interface
 * @export
 * @class ProductsApi
 * @extends {BaseAPI}
 */
export class ProductsApi extends BaseAPI {
    /**
     * Creates a Share Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, locale, totalShares, unitPrice, nominalShares,allowDividendCalculationForInactiveClients,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): shareReferenceId, shareSuspenseId, shareEquityId, incomeFromFeeAccountId  Optional Fields: sharesIssued, minimumShares, maximumShares, minimumActivePeriodForDividends, minimumactiveperiodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType, marketPricePeriods, chargesSelected
     * @summary Create a Share Product
     * @param {string} type type
     * @param {PostProductsTypeRequest} postProductsTypeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public createProduct(type: string, postProductsTypeRequest: PostProductsTypeRequest, options?: any) {
        return ProductsApiFp(this.configuration).createProduct(type, postProductsTypeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} type type
     * @param {number} productId productId
     * @param {string} [command] command
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public handleCommands3(type: string, productId: number, command?: string, options?: any) {
        return ProductsApiFp(this.configuration).handleCommands3(type, productId, command, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists Share Products  Mandatory Fields: limit, offset  Example Requests:  shareproducts
     * @summary List Share Products
     * @param {string} type type
     * @param {number} [offset] offset
     * @param {number} [limit] limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public retrieveAllProducts(type: string, offset?: number, limit?: number, options?: any) {
        return ProductsApiFp(this.configuration).retrieveAllProducts(type, offset, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a Share Product  Example Requests:  products/share/1   products/share/1?template=true
     * @summary Retrieve a Share Product
     * @param {number} productId productId
     * @param {string} type type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public retrieveProduct(productId: number, type: string, options?: any) {
        return ProductsApiFp(this.configuration).retrieveProduct(productId, type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} type type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public retrieveTemplate12(type: string, options?: any) {
        return ProductsApiFp(this.configuration).retrieveTemplate12(type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a Share Product
     * @summary Update a Share Product
     * @param {string} type type
     * @param {number} productId productId
     * @param {PutProductsTypeProductIdRequest} putProductsTypeProductIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public updateProduct(type: string, productId: number, putProductsTypeProductIdRequest: PutProductsTypeProductIdRequest, options?: any) {
        return ProductsApiFp(this.configuration).updateProduct(type, productId, putProductsTypeProductIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
