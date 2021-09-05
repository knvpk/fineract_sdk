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
import { DeleteUsersUserIdResponse } from '../models';
// @ts-ignore
import { FormDataContentDisposition } from '../models';
// @ts-ignore
import { GetUsersResponse } from '../models';
// @ts-ignore
import { GetUsersTemplateResponse } from '../models';
// @ts-ignore
import { GetUsersUserIdResponse } from '../models';
// @ts-ignore
import { PostUsersRequest } from '../models';
// @ts-ignore
import { PostUsersResponse } from '../models';
// @ts-ignore
import { PutUsersUserIdRequest } from '../models';
// @ts-ignore
import { PutUsersUserIdResponse } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds new application user.  Note: Password information is not required (or processed). Password details at present are auto-generated and then sent to the email account given (which is why it can take a few seconds to complete).  Mandatory Fields:  username, firstname, lastname, email, officeId, roles, sendPasswordToEmail  Optional Fields:  staffId,passwordNeverExpires,isSelfServiceUser,clients
         * @summary Create a User
         * @param {PostUsersRequest} postUsersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create15: async (postUsersRequest: PostUsersRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postUsersRequest' is not null or undefined
            assertParamExists('create15', 'postUsersRequest', postUsersRequest)
            const localVarPath = `/users`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postUsersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the user and the associated roles and permissions.
         * @summary Delete a User
         * @param {number} userId userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete21: async (userId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('delete21', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * 
         * @param {number} [officeId] 
         * @param {number} [staffId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTemplate: async (officeId?: number, staffId?: number, dateFormat?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/downloadtemplate`;
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

            if (staffId !== undefined) {
                localVarQueryParameter['staffId'] = staffId;
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
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersTemplate: async (file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/uploadtemplate`;
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
         * Example Requests:  users   users?fields=id,username,email,officeName
         * @summary Retrieve list of users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll41: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
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
         * Example Requests:  users/1   users/1?template=true   users/1?fields=username,officeName
         * @summary Retrieve a User
         * @param {number} userId userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne29: async (userId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('retrieveOne29', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  users/template
         * @summary Retrieve User Details Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template22: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/template`;
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
         * When updating a password you must provide the repeatPassword parameter also.
         * @summary Update a User
         * @param {number} userId userId
         * @param {PutUsersUserIdRequest} putUsersUserIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update24: async (userId: number, putUsersUserIdRequest: PutUsersUserIdRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('update24', 'userId', userId)
            // verify required parameter 'putUsersUserIdRequest' is not null or undefined
            assertParamExists('update24', 'putUsersUserIdRequest', putUsersUserIdRequest)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putUsersUserIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds new application user.  Note: Password information is not required (or processed). Password details at present are auto-generated and then sent to the email account given (which is why it can take a few seconds to complete).  Mandatory Fields:  username, firstname, lastname, email, officeId, roles, sendPasswordToEmail  Optional Fields:  staffId,passwordNeverExpires,isSelfServiceUser,clients
         * @summary Create a User
         * @param {PostUsersRequest} postUsersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create15(postUsersRequest: PostUsersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostUsersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create15(postUsersRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes the user and the associated roles and permissions.
         * @summary Delete a User
         * @param {number} userId userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete21(userId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteUsersUserIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete21(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {number} [staffId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserTemplate(officeId?: number, staffId?: number, dateFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserTemplate(officeId, staffId, dateFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUsersTemplate(file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUsersTemplate(file, locale, dateFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Example Requests:  users   users?fields=id,username,email,officeName
         * @summary Retrieve list of users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll41(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetUsersResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll41(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Example Requests:  users/1   users/1?template=true   users/1?fields=username,officeName
         * @summary Retrieve a User
         * @param {number} userId userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne29(userId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUsersUserIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne29(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  users/template
         * @summary Retrieve User Details Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async template22(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUsersTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.template22(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * When updating a password you must provide the repeatPassword parameter also.
         * @summary Update a User
         * @param {number} userId userId
         * @param {PutUsersUserIdRequest} putUsersUserIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update24(userId: number, putUsersUserIdRequest: PutUsersUserIdRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutUsersUserIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update24(userId, putUsersUserIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Adds new application user.  Note: Password information is not required (or processed). Password details at present are auto-generated and then sent to the email account given (which is why it can take a few seconds to complete).  Mandatory Fields:  username, firstname, lastname, email, officeId, roles, sendPasswordToEmail  Optional Fields:  staffId,passwordNeverExpires,isSelfServiceUser,clients
         * @summary Create a User
         * @param {PostUsersRequest} postUsersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create15(postUsersRequest: PostUsersRequest, options?: any): AxiosPromise<PostUsersResponse> {
            return localVarFp.create15(postUsersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the user and the associated roles and permissions.
         * @summary Delete a User
         * @param {number} userId userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete21(userId: number, options?: any): AxiosPromise<DeleteUsersUserIdResponse> {
            return localVarFp.delete21(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {number} [staffId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTemplate(officeId?: number, staffId?: number, dateFormat?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getUserTemplate(officeId, staffId, dateFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersTemplate(file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any): AxiosPromise<string> {
            return localVarFp.postUsersTemplate(file, locale, dateFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * Example Requests:  users   users?fields=id,username,email,officeName
         * @summary Retrieve list of users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll41(options?: any): AxiosPromise<Array<GetUsersResponse>> {
            return localVarFp.retrieveAll41(options).then((request) => request(axios, basePath));
        },
        /**
         * Example Requests:  users/1   users/1?template=true   users/1?fields=username,officeName
         * @summary Retrieve a User
         * @param {number} userId userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne29(userId: number, options?: any): AxiosPromise<GetUsersUserIdResponse> {
            return localVarFp.retrieveOne29(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  users/template
         * @summary Retrieve User Details Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        template22(options?: any): AxiosPromise<GetUsersTemplateResponse> {
            return localVarFp.template22(options).then((request) => request(axios, basePath));
        },
        /**
         * When updating a password you must provide the repeatPassword parameter also.
         * @summary Update a User
         * @param {number} userId userId
         * @param {PutUsersUserIdRequest} putUsersUserIdRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update24(userId: number, putUsersUserIdRequest: PutUsersUserIdRequest, options?: any): AxiosPromise<PutUsersUserIdResponse> {
            return localVarFp.update24(userId, putUsersUserIdRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Adds new application user.  Note: Password information is not required (or processed). Password details at present are auto-generated and then sent to the email account given (which is why it can take a few seconds to complete).  Mandatory Fields:  username, firstname, lastname, email, officeId, roles, sendPasswordToEmail  Optional Fields:  staffId,passwordNeverExpires,isSelfServiceUser,clients
     * @summary Create a User
     * @param {PostUsersRequest} postUsersRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public create15(postUsersRequest: PostUsersRequest, options?: any) {
        return UsersApiFp(this.configuration).create15(postUsersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the user and the associated roles and permissions.
     * @summary Delete a User
     * @param {number} userId userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public delete21(userId: number, options?: any) {
        return UsersApiFp(this.configuration).delete21(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [officeId] 
     * @param {number} [staffId] 
     * @param {string} [dateFormat] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserTemplate(officeId?: number, staffId?: number, dateFormat?: string, options?: any) {
        return UsersApiFp(this.configuration).getUserTemplate(officeId, staffId, dateFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {FormDataContentDisposition} [file] 
     * @param {string} [locale] 
     * @param {string} [dateFormat] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public postUsersTemplate(file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any) {
        return UsersApiFp(this.configuration).postUsersTemplate(file, locale, dateFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Example Requests:  users   users?fields=id,username,email,officeName
     * @summary Retrieve list of users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public retrieveAll41(options?: any) {
        return UsersApiFp(this.configuration).retrieveAll41(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Example Requests:  users/1   users/1?template=true   users/1?fields=username,officeName
     * @summary Retrieve a User
     * @param {number} userId userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public retrieveOne29(userId: number, options?: any) {
        return UsersApiFp(this.configuration).retrieveOne29(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  users/template
     * @summary Retrieve User Details Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public template22(options?: any) {
        return UsersApiFp(this.configuration).template22(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * When updating a password you must provide the repeatPassword parameter also.
     * @summary Update a User
     * @param {number} userId userId
     * @param {PutUsersUserIdRequest} putUsersUserIdRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public update24(userId: number, putUsersUserIdRequest: PutUsersUserIdRequest, options?: any) {
        return UsersApiFp(this.configuration).update24(userId, putUsersUserIdRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
