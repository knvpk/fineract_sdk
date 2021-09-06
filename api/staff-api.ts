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
import { CreateStaffResponse } from '../models';
// @ts-ignore
import { FormDataContentDisposition } from '../models';
// @ts-ignore
import { PostStaffRequest } from '../models';
// @ts-ignore
import { PutStaffRequest } from '../models';
// @ts-ignore
import { RetrieveOneResponse } from '../models';
// @ts-ignore
import { UpdateStaffResponse } from '../models';
/**
 * StaffApi - axios parameter creator
 * @export
 */
export const StaffApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a staff member.  Mandatory Fields:  officeId, firstname, lastname  Optional Fields:  isLoanOfficer, isActive
         * @summary Create a staff member
         * @param {PostStaffRequest} postStaffRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create3: async (postStaffRequest: PostStaffRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postStaffRequest' is not null or undefined
            assertParamExists('create3', 'postStaffRequest', postStaffRequest)
            const localVarPath = `/staff`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postStaffRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate1: async (officeId?: number, dateFormat?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/staff/downloadtemplate`;
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
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTemplate: async (file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/staff/uploadtemplate`;
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
         * Returns the list of staff members.  Example Requests:  staff     Retrieve a Staff by status  Returns the details of a Staff based on status.  By default it Returns all the ACTIVE Staff.  If status=INACTIVE, then it returns all INACTIVE Staff.  and for status=ALL, it Returns both ACTIVE and INACTIVE Staff.  Example Requests:  staff?status=active
         * @summary Retrieve Staff
         * @param {number} [officeId] officeId
         * @param {boolean} [staffInOfficeHierarchy] staffInOfficeHierarchy
         * @param {boolean} [loanOfficersOnly] loanOfficersOnly
         * @param {string} [status] status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll16: async (officeId?: number, staffInOfficeHierarchy?: boolean, loanOfficersOnly?: boolean, status?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/staff`;
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

            if (staffInOfficeHierarchy !== undefined) {
                localVarQueryParameter['staffInOfficeHierarchy'] = staffInOfficeHierarchy;
            }

            if (loanOfficersOnly !== undefined) {
                localVarQueryParameter['loanOfficersOnly'] = loanOfficersOnly;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * Returns the details of a Staff Member.  Example Requests:  staff/1
         * @summary Retrieve a Staff Member
         * @param {number} staffId staffId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne8: async (staffId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'staffId' is not null or undefined
            assertParamExists('retrieveOne8', 'staffId', staffId)
            const localVarPath = `/staff/{staffId}`
                .replace(`{${"staffId"}}`, encodeURIComponent(String(staffId)));
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
         * Updates the details of a staff member.
         * @summary Update a Staff Member
         * @param {number} staffId staffId
         * @param {PutStaffRequest} putStaffRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update7: async (staffId: number, putStaffRequest: PutStaffRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'staffId' is not null or undefined
            assertParamExists('update7', 'staffId', staffId)
            // verify required parameter 'putStaffRequest' is not null or undefined
            assertParamExists('update7', 'putStaffRequest', putStaffRequest)
            const localVarPath = `/staff/{staffId}`
                .replace(`{${"staffId"}}`, encodeURIComponent(String(staffId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(putStaffRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StaffApi - functional programming interface
 * @export
 */
export const StaffApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StaffApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a staff member.  Mandatory Fields:  officeId, firstname, lastname  Optional Fields:  isLoanOfficer, isActive
         * @summary Create a staff member
         * @param {PostStaffRequest} postStaffRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create3(postStaffRequest: PostStaffRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateStaffResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create3(postStaffRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTemplate1(officeId?: number, dateFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTemplate1(officeId, dateFormat, options);
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
        async postTemplate(file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTemplate(file, locale, dateFormat, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the list of staff members.  Example Requests:  staff     Retrieve a Staff by status  Returns the details of a Staff based on status.  By default it Returns all the ACTIVE Staff.  If status=INACTIVE, then it returns all INACTIVE Staff.  and for status=ALL, it Returns both ACTIVE and INACTIVE Staff.  Example Requests:  staff?status=active
         * @summary Retrieve Staff
         * @param {number} [officeId] officeId
         * @param {boolean} [staffInOfficeHierarchy] staffInOfficeHierarchy
         * @param {boolean} [loanOfficersOnly] loanOfficersOnly
         * @param {string} [status] status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAll16(officeId?: number, staffInOfficeHierarchy?: boolean, loanOfficersOnly?: boolean, status?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RetrieveOneResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAll16(officeId, staffInOfficeHierarchy, loanOfficersOnly, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the details of a Staff Member.  Example Requests:  staff/1
         * @summary Retrieve a Staff Member
         * @param {number} staffId staffId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOne8(staffId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveOneResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveOne8(staffId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the details of a staff member.
         * @summary Update a Staff Member
         * @param {number} staffId staffId
         * @param {PutStaffRequest} putStaffRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update7(staffId: number, putStaffRequest: PutStaffRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateStaffResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update7(staffId, putStaffRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StaffApi - factory interface
 * @export
 */
export const StaffApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StaffApiFp(configuration)
    return {
        /**
         * Creates a staff member.  Mandatory Fields:  officeId, firstname, lastname  Optional Fields:  isLoanOfficer, isActive
         * @summary Create a staff member
         * @param {PostStaffRequest} postStaffRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create3(postStaffRequest: PostStaffRequest, options?: any): AxiosPromise<CreateStaffResponse> {
            return localVarFp.create3(postStaffRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [officeId] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate1(officeId?: number, dateFormat?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getTemplate1(officeId, dateFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {FormDataContentDisposition} [file] 
         * @param {string} [locale] 
         * @param {string} [dateFormat] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTemplate(file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any): AxiosPromise<string> {
            return localVarFp.postTemplate(file, locale, dateFormat, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of staff members.  Example Requests:  staff     Retrieve a Staff by status  Returns the details of a Staff based on status.  By default it Returns all the ACTIVE Staff.  If status=INACTIVE, then it returns all INACTIVE Staff.  and for status=ALL, it Returns both ACTIVE and INACTIVE Staff.  Example Requests:  staff?status=active
         * @summary Retrieve Staff
         * @param {number} [officeId] officeId
         * @param {boolean} [staffInOfficeHierarchy] staffInOfficeHierarchy
         * @param {boolean} [loanOfficersOnly] loanOfficersOnly
         * @param {string} [status] status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAll16(officeId?: number, staffInOfficeHierarchy?: boolean, loanOfficersOnly?: boolean, status?: string, options?: any): AxiosPromise<Array<RetrieveOneResponse>> {
            return localVarFp.retrieveAll16(officeId, staffInOfficeHierarchy, loanOfficersOnly, status, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the details of a Staff Member.  Example Requests:  staff/1
         * @summary Retrieve a Staff Member
         * @param {number} staffId staffId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOne8(staffId: number, options?: any): AxiosPromise<RetrieveOneResponse> {
            return localVarFp.retrieveOne8(staffId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the details of a staff member.
         * @summary Update a Staff Member
         * @param {number} staffId staffId
         * @param {PutStaffRequest} putStaffRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update7(staffId: number, putStaffRequest: PutStaffRequest, options?: any): AxiosPromise<UpdateStaffResponse> {
            return localVarFp.update7(staffId, putStaffRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StaffApi - object-oriented interface
 * @export
 * @class StaffApi
 * @extends {BaseAPI}
 */
export class StaffApi extends BaseAPI {
    /**
     * Creates a staff member.  Mandatory Fields:  officeId, firstname, lastname  Optional Fields:  isLoanOfficer, isActive
     * @summary Create a staff member
     * @param {PostStaffRequest} postStaffRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApi
     */
    public create3(postStaffRequest: PostStaffRequest, options?: any) {
        return StaffApiFp(this.configuration).create3(postStaffRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [officeId] 
     * @param {string} [dateFormat] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApi
     */
    public getTemplate1(officeId?: number, dateFormat?: string, options?: any) {
        return StaffApiFp(this.configuration).getTemplate1(officeId, dateFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {FormDataContentDisposition} [file] 
     * @param {string} [locale] 
     * @param {string} [dateFormat] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApi
     */
    public postTemplate(file?: FormDataContentDisposition, locale?: string, dateFormat?: string, options?: any) {
        return StaffApiFp(this.configuration).postTemplate(file, locale, dateFormat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of staff members.  Example Requests:  staff     Retrieve a Staff by status  Returns the details of a Staff based on status.  By default it Returns all the ACTIVE Staff.  If status=INACTIVE, then it returns all INACTIVE Staff.  and for status=ALL, it Returns both ACTIVE and INACTIVE Staff.  Example Requests:  staff?status=active
     * @summary Retrieve Staff
     * @param {number} [officeId] officeId
     * @param {boolean} [staffInOfficeHierarchy] staffInOfficeHierarchy
     * @param {boolean} [loanOfficersOnly] loanOfficersOnly
     * @param {string} [status] status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApi
     */
    public retrieveAll16(officeId?: number, staffInOfficeHierarchy?: boolean, loanOfficersOnly?: boolean, status?: string, options?: any) {
        return StaffApiFp(this.configuration).retrieveAll16(officeId, staffInOfficeHierarchy, loanOfficersOnly, status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the details of a Staff Member.  Example Requests:  staff/1
     * @summary Retrieve a Staff Member
     * @param {number} staffId staffId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApi
     */
    public retrieveOne8(staffId: number, options?: any) {
        return StaffApiFp(this.configuration).retrieveOne8(staffId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the details of a staff member.
     * @summary Update a Staff Member
     * @param {number} staffId staffId
     * @param {PutStaffRequest} putStaffRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApi
     */
    public update7(staffId: number, putStaffRequest: PutStaffRequest, options?: any) {
        return StaffApiFp(this.configuration).update7(staffId, putStaffRequest, options).then((request) => request(this.axios, this.basePath));
    }
}