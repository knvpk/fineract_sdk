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
import { FormDataContentDisposition } from '../models';
/**
 * GuarantorsApi - axios parameter creator
 * @export
 */
export const GuarantorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} loanId 
         * @param {number} [clientId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountsTemplate: async (loanId: number, clientId?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('accountsTemplate', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/guarantors/accounts/template`
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

            if (clientId !== undefined) {
                localVarQueryParameter['clientId'] = clientId;
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
         * 
         * @param {number} loanId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGuarantor: async (loanId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('createGuarantor', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/guarantors`
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
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {number} [guarantorFundingId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGuarantor: async (loanId: number, guarantorId: number, guarantorFundingId?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('deleteGuarantor', 'loanId', loanId)
            // verify required parameter 'guarantorId' is not null or undefined
            assertParamExists('deleteGuarantor', 'guarantorId', guarantorId)
            const localVarPath = `/loans/{loanId}/guarantors/{guarantorId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"guarantorId"}}`, encodeURIComponent(String(guarantorId)));
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

            if (guarantorFundingId !== undefined) {
                localVarQueryParameter['guarantorFundingId'] = guarantorFundingId;
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
         * 
         * @param {number} loanId 
         * @param {number} [officeId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGuarantorTemplate: async (loanId: number, officeId?: number, dateFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('getGuarantorTemplate', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/guarantors/downloadtemplate`
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

            if (officeId !== undefined) {
                localVarQueryParameter['officeId'] = officeId;
            }

            if (dateFormat !== undefined) {
                localVarQueryParameter['dateFormat'] = dateFormat;
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
         * 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        newGuarantorTemplate: async (loanId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('newGuarantorTemplate', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/guarantors/template`
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
         * 
         * @param {number} loanId 
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postGuarantorTemplate: async (loanId: number, file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('postGuarantorTemplate', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/guarantors/uploadtemplate`
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
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication tenantid required
            await setApiKeyToObject(localVarHeaderParameter, "fineract-platform-tenantid", configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', new Blob([JSON.stringify(file)], { type: "application/json", }));
            }
    
            if (locale !== undefined) { 
                localVarFormParams.append('locale', locale as any);
            }
    
            if (dateFormat !== undefined) { 
                localVarFormParams.append('dateFormat', dateFormat as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveGuarantorDetails: async (loanId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveGuarantorDetails', 'loanId', loanId)
            const localVarPath = `/loans/{loanId}/guarantors`
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
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveGuarantorDetails1: async (loanId: number, guarantorId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('retrieveGuarantorDetails1', 'loanId', loanId)
            // verify required parameter 'guarantorId' is not null or undefined
            assertParamExists('retrieveGuarantorDetails1', 'guarantorId', guarantorId)
            const localVarPath = `/loans/{loanId}/guarantors/{guarantorId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"guarantorId"}}`, encodeURIComponent(String(guarantorId)));
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
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGuarantor: async (loanId: number, guarantorId: number, body?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('updateGuarantor', 'loanId', loanId)
            // verify required parameter 'guarantorId' is not null or undefined
            assertParamExists('updateGuarantor', 'guarantorId', guarantorId)
            const localVarPath = `/loans/{loanId}/guarantors/{guarantorId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId)))
                .replace(`{${"guarantorId"}}`, encodeURIComponent(String(guarantorId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GuarantorsApi - functional programming interface
 * @export
 */
export const GuarantorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GuarantorsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} loanId 
         * @param {number} [clientId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountsTemplate(loanId: number, clientId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountsTemplate(loanId, clientId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGuarantor(loanId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createGuarantor(loanId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {number} [guarantorFundingId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGuarantor(loanId: number, guarantorId: number, guarantorFundingId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGuarantor(loanId, guarantorId, guarantorFundingId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} [officeId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGuarantorTemplate(loanId: number, officeId?: number, dateFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGuarantorTemplate(loanId, officeId, dateFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async newGuarantorTemplate(loanId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newGuarantorTemplate(loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postGuarantorTemplate(loanId: number, file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postGuarantorTemplate(loanId, file, locale, dateFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveGuarantorDetails(loanId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveGuarantorDetails(loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveGuarantorDetails1(loanId: number, guarantorId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveGuarantorDetails1(loanId, guarantorId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGuarantor(loanId: number, guarantorId: number, body?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGuarantor(loanId, guarantorId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GuarantorsApi - factory interface
 * @export
 */
export const GuarantorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GuarantorsApiFp(configuration)
    return {
        /**
         * 
         * @param {number} loanId 
         * @param {number} [clientId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountsTemplate(loanId: number, clientId?: number, options?: any): AxiosPromise<string> {
            return localVarFp.accountsTemplate(loanId, clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGuarantor(loanId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.createGuarantor(loanId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {number} [guarantorFundingId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGuarantor(loanId: number, guarantorId: number, guarantorFundingId?: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteGuarantor(loanId, guarantorId, guarantorFundingId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} [officeId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGuarantorTemplate(loanId: number, officeId?: number, dateFormat?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getGuarantorTemplate(loanId, officeId, dateFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        newGuarantorTemplate(loanId: number, options?: any): AxiosPromise<string> {
            return localVarFp.newGuarantorTemplate(loanId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postGuarantorTemplate(loanId: number, file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any): AxiosPromise<string> {
            return localVarFp.postGuarantorTemplate(loanId, file, locale, dateFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveGuarantorDetails(loanId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveGuarantorDetails(loanId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveGuarantorDetails1(loanId: number, guarantorId: number, options?: any): AxiosPromise<string> {
            return localVarFp.retrieveGuarantorDetails1(loanId, guarantorId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} loanId 
         * @param {number} guarantorId 
         * @param {string} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGuarantor(loanId: number, guarantorId: number, body?: string, options?: any): AxiosPromise<string> {
            return localVarFp.updateGuarantor(loanId, guarantorId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GuarantorsApi - object-oriented interface
 * @export
 * @class GuarantorsApi
 * @extends {BaseAPI}
 */
export class GuarantorsApi extends BaseAPI {
    /**
     * 
     * @param {number} loanId 
     * @param {number} [clientId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public accountsTemplate(loanId: number, clientId?: number, options?: any) {
        return GuarantorsApiFp(this.configuration).accountsTemplate(loanId, clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public createGuarantor(loanId: number, body?: string, options?: any) {
        return GuarantorsApiFp(this.configuration).createGuarantor(loanId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {number} guarantorId 
     * @param {number} [guarantorFundingId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public deleteGuarantor(loanId: number, guarantorId: number, guarantorFundingId?: number, options?: any) {
        return GuarantorsApiFp(this.configuration).deleteGuarantor(loanId, guarantorId, guarantorFundingId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {number} [officeId] 
     * @param {string} [dateFormat] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public getGuarantorTemplate(loanId: number, officeId?: number, dateFormat?: string, options?: any) {
        return GuarantorsApiFp(this.configuration).getGuarantorTemplate(loanId, officeId, dateFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public newGuarantorTemplate(loanId: number, options?: any) {
        return GuarantorsApiFp(this.configuration).newGuarantorTemplate(loanId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {FormDataContentDisposition} [file] 
     * @param {string} [locale] 
     * @param {string} [dateFormat] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public postGuarantorTemplate(loanId: number, file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any) {
        return GuarantorsApiFp(this.configuration).postGuarantorTemplate(loanId, file, locale, dateFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public retrieveGuarantorDetails(loanId: number, options?: any) {
        return GuarantorsApiFp(this.configuration).retrieveGuarantorDetails(loanId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {number} guarantorId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public retrieveGuarantorDetails1(loanId: number, guarantorId: number, options?: any) {
        return GuarantorsApiFp(this.configuration).retrieveGuarantorDetails1(loanId, guarantorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} loanId 
     * @param {number} guarantorId 
     * @param {string} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuarantorsApi
     */
    public updateGuarantor(loanId: number, guarantorId: number, body?: string, options?: any) {
        return GuarantorsApiFp(this.configuration).updateGuarantor(loanId, guarantorId, body, options).then((request) => request(this.axios, this.basePath));
    }
}