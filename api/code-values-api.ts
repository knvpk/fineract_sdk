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
import { DeleteCodeValueDataResponse } from '../models';
// @ts-ignore
import { GetCodeValuesDataResponse } from '../models';
// @ts-ignore
import { PostCodeValueDataResponse } from '../models';
// @ts-ignore
import { PostCodeValuesDataRequest } from '../models';
// @ts-ignore
import { PutCodeValueDataResponse } from '../models';
// @ts-ignore
import { PutCodeValuesDataRequest } from '../models';
/**
 * CodeValuesApi - axios parameter creator
 * @export
 */
export const CodeValuesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a Code description
         * @param {number} codeId codeId
         * @param {PostCodeValuesDataRequest} postCodeValuesDataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCodeValue: async (codeId: number, postCodeValuesDataRequest: PostCodeValuesDataRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeId' is not null or undefined
            assertParamExists('createCodeValue', 'codeId', codeId)
            // verify required parameter 'postCodeValuesDataRequest' is not null or undefined
            assertParamExists('createCodeValue', 'postCodeValuesDataRequest', postCodeValuesDataRequest)
            const localVarPath = `/codes/{codeId}/codevalues`
                .replace(`{${"codeId"}}`, encodeURIComponent(String(codeId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postCodeValuesDataRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a code description
         * @summary Delete a Code description
         * @param {number} codeId codeId
         * @param {number} codeValueId codeValueId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCodeValue: async (codeId: number, codeValueId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeId' is not null or undefined
            assertParamExists('deleteCodeValue', 'codeId', codeId)
            // verify required parameter 'codeValueId' is not null or undefined
            assertParamExists('deleteCodeValue', 'codeValueId', codeValueId)
            const localVarPath = `/codes/{codeId}/codevalues/{codeValueId}`
                .replace(`{${"codeId"}}`, encodeURIComponent(String(codeId)))
                .replace(`{${"codeValueId"}}`, encodeURIComponent(String(codeValueId)));
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
         * Returns the list of Code Values for a given Code  Example Requests:  codes/1/codevalues
         * @summary List Code Values
         * @param {number} codeId codeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllCodeValues: async (codeId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeId' is not null or undefined
            assertParamExists('retrieveAllCodeValues', 'codeId', codeId)
            const localVarPath = `/codes/{codeId}/codevalues`
                .replace(`{${"codeId"}}`, encodeURIComponent(String(codeId)));
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
         * Returns the details of a Code Value  Example Requests:  codes/1/codevalues/1
         * @summary Retrieve a Code description
         * @param {number} codeValueId codeValueId
         * @param {number} codeId codeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCodeValue: async (codeValueId: number, codeId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeValueId' is not null or undefined
            assertParamExists('retrieveCodeValue', 'codeValueId', codeValueId)
            // verify required parameter 'codeId' is not null or undefined
            assertParamExists('retrieveCodeValue', 'codeId', codeId)
            const localVarPath = `/codes/{codeId}/codevalues/{codeValueId}`
                .replace(`{${"codeValueId"}}`, encodeURIComponent(String(codeValueId)))
                .replace(`{${"codeId"}}`, encodeURIComponent(String(codeId)));
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
         * Updates the details of a code description.
         * @summary Update a Code description
         * @param {number} codeId codeId
         * @param {number} codeValueId codeValueId
         * @param {PutCodeValuesDataRequest} putCodeValuesDataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCodeValue: async (codeId: number, codeValueId: number, putCodeValuesDataRequest: PutCodeValuesDataRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeId' is not null or undefined
            assertParamExists('updateCodeValue', 'codeId', codeId)
            // verify required parameter 'codeValueId' is not null or undefined
            assertParamExists('updateCodeValue', 'codeValueId', codeValueId)
            // verify required parameter 'putCodeValuesDataRequest' is not null or undefined
            assertParamExists('updateCodeValue', 'putCodeValuesDataRequest', putCodeValuesDataRequest)
            const localVarPath = `/codes/{codeId}/codevalues/{codeValueId}`
                .replace(`{${"codeId"}}`, encodeURIComponent(String(codeId)))
                .replace(`{${"codeValueId"}}`, encodeURIComponent(String(codeValueId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putCodeValuesDataRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CodeValuesApi - functional programming interface
 * @export
 */
export const CodeValuesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CodeValuesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a Code description
         * @param {number} codeId codeId
         * @param {PostCodeValuesDataRequest} postCodeValuesDataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCodeValue(codeId: number, postCodeValuesDataRequest: PostCodeValuesDataRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostCodeValueDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCodeValue(codeId, postCodeValuesDataRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a code description
         * @summary Delete a Code description
         * @param {number} codeId codeId
         * @param {number} codeValueId codeValueId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCodeValue(codeId: number, codeValueId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteCodeValueDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCodeValue(codeId, codeValueId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the list of Code Values for a given Code  Example Requests:  codes/1/codevalues
         * @summary List Code Values
         * @param {number} codeId codeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAllCodeValues(codeId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCodeValuesDataResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAllCodeValues(codeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the details of a Code Value  Example Requests:  codes/1/codevalues/1
         * @summary Retrieve a Code description
         * @param {number} codeValueId codeValueId
         * @param {number} codeId codeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveCodeValue(codeValueId: number, codeId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCodeValuesDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveCodeValue(codeValueId, codeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the details of a code description.
         * @summary Update a Code description
         * @param {number} codeId codeId
         * @param {number} codeValueId codeValueId
         * @param {PutCodeValuesDataRequest} putCodeValuesDataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCodeValue(codeId: number, codeValueId: number, putCodeValuesDataRequest: PutCodeValuesDataRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutCodeValueDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCodeValue(codeId, codeValueId, putCodeValuesDataRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CodeValuesApi - factory interface
 * @export
 */
export const CodeValuesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CodeValuesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a Code description
         * @param {number} codeId codeId
         * @param {PostCodeValuesDataRequest} postCodeValuesDataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCodeValue(codeId: number, postCodeValuesDataRequest: PostCodeValuesDataRequest, options?: any): AxiosPromise<PostCodeValueDataResponse> {
            return localVarFp.createCodeValue(codeId, postCodeValuesDataRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a code description
         * @summary Delete a Code description
         * @param {number} codeId codeId
         * @param {number} codeValueId codeValueId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCodeValue(codeId: number, codeValueId: number, options?: any): AxiosPromise<DeleteCodeValueDataResponse> {
            return localVarFp.deleteCodeValue(codeId, codeValueId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of Code Values for a given Code  Example Requests:  codes/1/codevalues
         * @summary List Code Values
         * @param {number} codeId codeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAllCodeValues(codeId: number, options?: any): AxiosPromise<Array<GetCodeValuesDataResponse>> {
            return localVarFp.retrieveAllCodeValues(codeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the details of a Code Value  Example Requests:  codes/1/codevalues/1
         * @summary Retrieve a Code description
         * @param {number} codeValueId codeValueId
         * @param {number} codeId codeId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCodeValue(codeValueId: number, codeId: number, options?: any): AxiosPromise<GetCodeValuesDataResponse> {
            return localVarFp.retrieveCodeValue(codeValueId, codeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the details of a code description.
         * @summary Update a Code description
         * @param {number} codeId codeId
         * @param {number} codeValueId codeValueId
         * @param {PutCodeValuesDataRequest} putCodeValuesDataRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCodeValue(codeId: number, codeValueId: number, putCodeValuesDataRequest: PutCodeValuesDataRequest, options?: any): AxiosPromise<PutCodeValueDataResponse> {
            return localVarFp.updateCodeValue(codeId, codeValueId, putCodeValuesDataRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CodeValuesApi - object-oriented interface
 * @export
 * @class CodeValuesApi
 * @extends {BaseAPI}
 */
export class CodeValuesApi extends BaseAPI {
    /**
     * 
     * @summary Create a Code description
     * @param {number} codeId codeId
     * @param {PostCodeValuesDataRequest} postCodeValuesDataRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeValuesApi
     */
    public createCodeValue(codeId: number, postCodeValuesDataRequest: PostCodeValuesDataRequest, options?: any) {
        return CodeValuesApiFp(this.configuration).createCodeValue(codeId, postCodeValuesDataRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a code description
     * @summary Delete a Code description
     * @param {number} codeId codeId
     * @param {number} codeValueId codeValueId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeValuesApi
     */
    public deleteCodeValue(codeId: number, codeValueId: number, options?: any) {
        return CodeValuesApiFp(this.configuration).deleteCodeValue(codeId, codeValueId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of Code Values for a given Code  Example Requests:  codes/1/codevalues
     * @summary List Code Values
     * @param {number} codeId codeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeValuesApi
     */
    public retrieveAllCodeValues(codeId: number, options?: any) {
        return CodeValuesApiFp(this.configuration).retrieveAllCodeValues(codeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the details of a Code Value  Example Requests:  codes/1/codevalues/1
     * @summary Retrieve a Code description
     * @param {number} codeValueId codeValueId
     * @param {number} codeId codeId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeValuesApi
     */
    public retrieveCodeValue(codeValueId: number, codeId: number, options?: any) {
        return CodeValuesApiFp(this.configuration).retrieveCodeValue(codeValueId, codeId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the details of a code description.
     * @summary Update a Code description
     * @param {number} codeId codeId
     * @param {number} codeValueId codeValueId
     * @param {PutCodeValuesDataRequest} putCodeValuesDataRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeValuesApi
     */
    public updateCodeValue(codeId: number, codeValueId: number, putCodeValuesDataRequest: PutCodeValuesDataRequest, options?: any) {
        return CodeValuesApiFp(this.configuration).updateCodeValue(codeId, codeValueId, putCodeValuesDataRequest, options).then((request) => request(this.axios, this.basePath));
    }
}