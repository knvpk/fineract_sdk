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
import { GetMakerCheckerResponse } from '../models';
// @ts-ignore
import { GetMakerCheckersSearchTemplateResponse } from '../models';
/**
 * AuditsApi - axios parameter creator
 * @export
 */
export const AuditsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a 200 list of audits that match the criteria supplied and sorted by audit id in descending order, and are within the requestors\' data scope. Also it supports pagination and sorting  Example Requests:  audits  audits?fields=madeOnDate,maker,processingResult  audits?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  audits?officeId=1  audits?officeId=1&includeJson=true
         * @summary List Audits
         * @param {string} [actionName] actionName
         * @param {string} [entityName] entityName
         * @param {number} [resourceId] resourceId
         * @param {number} [makerId] makerId
         * @param {string} [makerDateTimeFrom] makerDateTimeFrom
         * @param {string} [makerDateTimeTo] makerDateTimeTo
         * @param {number} [checkerId] checkerId
         * @param {string} [checkerDateTimeFrom] checkerDateTimeFrom
         * @param {string} [checkerDateTimeTo] checkerDateTimeTo
         * @param {number} [processingResult] processingResult
         * @param {number} [officeId] officeId
         * @param {number} [groupId] groupId
         * @param {number} [clientId] clientId
         * @param {number} [loanid] loanid
         * @param {number} [savingsAccountId] savingsAccountId
         * @param {boolean} [paged] paged
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {string} [orderBy] orderBy
         * @param {string} [sortOrder] sortOrder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAuditEntries: async (actionName?: string, entityName?: string, resourceId?: number, makerId?: number, makerDateTimeFrom?: string, makerDateTimeTo?: string, checkerId?: number, checkerDateTimeFrom?: string, checkerDateTimeTo?: string, processingResult?: number, officeId?: number, groupId?: number, clientId?: number, loanid?: number, savingsAccountId?: number, paged?: boolean, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/audits`;
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

            if (actionName !== undefined) {
                localVarQueryParameter['actionName'] = actionName;
            }

            if (entityName !== undefined) {
                localVarQueryParameter['entityName'] = entityName;
            }

            if (resourceId !== undefined) {
                localVarQueryParameter['resourceId'] = resourceId;
            }

            if (makerId !== undefined) {
                localVarQueryParameter['makerId'] = makerId;
            }

            if (makerDateTimeFrom !== undefined) {
                localVarQueryParameter['makerDateTimeFrom'] = makerDateTimeFrom;
            }

            if (makerDateTimeTo !== undefined) {
                localVarQueryParameter['makerDateTimeTo'] = makerDateTimeTo;
            }

            if (checkerId !== undefined) {
                localVarQueryParameter['checkerId'] = checkerId;
            }

            if (checkerDateTimeFrom !== undefined) {
                localVarQueryParameter['checkerDateTimeFrom'] = checkerDateTimeFrom;
            }

            if (checkerDateTimeTo !== undefined) {
                localVarQueryParameter['checkerDateTimeTo'] = checkerDateTimeTo;
            }

            if (processingResult !== undefined) {
                localVarQueryParameter['processingResult'] = processingResult;
            }

            if (officeId !== undefined) {
                localVarQueryParameter['officeId'] = officeId;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }

            if (clientId !== undefined) {
                localVarQueryParameter['clientId'] = clientId;
            }

            if (loanid !== undefined) {
                localVarQueryParameter['loanid'] = loanid;
            }

            if (savingsAccountId !== undefined) {
                localVarQueryParameter['savingsAccountId'] = savingsAccountId;
            }

            if (paged !== undefined) {
                localVarQueryParameter['paged'] = paged;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Example Requests:  audits/20 audits/20?fields=madeOnDate,maker,processingResult
         * @summary Retrieve an Audit Entry
         * @param {number} auditId auditId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAuditEntry: async (auditId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'auditId' is not null or undefined
            assertParamExists('retrieveAuditEntry', 'auditId', auditId)
            const localVarPath = `/audits/{auditId}`
                .replace(`{${"auditId"}}`, encodeURIComponent(String(auditId)));
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
         * This is a convenience resource. It can be useful when building an Audit Search UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with.  Example Requests:  audits/searchtemplate audits/searchtemplate?fields=actionNames
         * @summary Audit Search Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAuditSearchTemplate: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/audits/searchtemplate`;
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
    }
};

/**
 * AuditsApi - functional programming interface
 * @export
 */
export const AuditsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuditsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a 200 list of audits that match the criteria supplied and sorted by audit id in descending order, and are within the requestors\' data scope. Also it supports pagination and sorting  Example Requests:  audits  audits?fields=madeOnDate,maker,processingResult  audits?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  audits?officeId=1  audits?officeId=1&includeJson=true
         * @summary List Audits
         * @param {string} [actionName] actionName
         * @param {string} [entityName] entityName
         * @param {number} [resourceId] resourceId
         * @param {number} [makerId] makerId
         * @param {string} [makerDateTimeFrom] makerDateTimeFrom
         * @param {string} [makerDateTimeTo] makerDateTimeTo
         * @param {number} [checkerId] checkerId
         * @param {string} [checkerDateTimeFrom] checkerDateTimeFrom
         * @param {string} [checkerDateTimeTo] checkerDateTimeTo
         * @param {number} [processingResult] processingResult
         * @param {number} [officeId] officeId
         * @param {number} [groupId] groupId
         * @param {number} [clientId] clientId
         * @param {number} [loanid] loanid
         * @param {number} [savingsAccountId] savingsAccountId
         * @param {boolean} [paged] paged
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {string} [orderBy] orderBy
         * @param {string} [sortOrder] sortOrder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAuditEntries(actionName?: string, entityName?: string, resourceId?: number, makerId?: number, makerDateTimeFrom?: string, makerDateTimeTo?: string, checkerId?: number, checkerDateTimeFrom?: string, checkerDateTimeTo?: string, processingResult?: number, officeId?: number, groupId?: number, clientId?: number, loanid?: number, savingsAccountId?: number, paged?: boolean, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetMakerCheckerResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAuditEntries(actionName, entityName, resourceId, makerId, makerDateTimeFrom, makerDateTimeTo, checkerId, checkerDateTimeFrom, checkerDateTimeTo, processingResult, officeId, groupId, clientId, loanid, savingsAccountId, paged, offset, limit, orderBy, sortOrder, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Example Requests:  audits/20 audits/20?fields=madeOnDate,maker,processingResult
         * @summary Retrieve an Audit Entry
         * @param {number} auditId auditId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAuditEntry(auditId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMakerCheckerResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAuditEntry(auditId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is a convenience resource. It can be useful when building an Audit Search UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with.  Example Requests:  audits/searchtemplate audits/searchtemplate?fields=actionNames
         * @summary Audit Search Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAuditSearchTemplate(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMakerCheckersSearchTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAuditSearchTemplate(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuditsApi - factory interface
 * @export
 */
export const AuditsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuditsApiFp(configuration)
    return {
        /**
         * Get a 200 list of audits that match the criteria supplied and sorted by audit id in descending order, and are within the requestors\' data scope. Also it supports pagination and sorting  Example Requests:  audits  audits?fields=madeOnDate,maker,processingResult  audits?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  audits?officeId=1  audits?officeId=1&includeJson=true
         * @summary List Audits
         * @param {string} [actionName] actionName
         * @param {string} [entityName] entityName
         * @param {number} [resourceId] resourceId
         * @param {number} [makerId] makerId
         * @param {string} [makerDateTimeFrom] makerDateTimeFrom
         * @param {string} [makerDateTimeTo] makerDateTimeTo
         * @param {number} [checkerId] checkerId
         * @param {string} [checkerDateTimeFrom] checkerDateTimeFrom
         * @param {string} [checkerDateTimeTo] checkerDateTimeTo
         * @param {number} [processingResult] processingResult
         * @param {number} [officeId] officeId
         * @param {number} [groupId] groupId
         * @param {number} [clientId] clientId
         * @param {number} [loanid] loanid
         * @param {number} [savingsAccountId] savingsAccountId
         * @param {boolean} [paged] paged
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {string} [orderBy] orderBy
         * @param {string} [sortOrder] sortOrder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAuditEntries(actionName?: string, entityName?: string, resourceId?: number, makerId?: number, makerDateTimeFrom?: string, makerDateTimeTo?: string, checkerId?: number, checkerDateTimeFrom?: string, checkerDateTimeTo?: string, processingResult?: number, officeId?: number, groupId?: number, clientId?: number, loanid?: number, savingsAccountId?: number, paged?: boolean, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, options?: any): AxiosPromise<Array<GetMakerCheckerResponse>> {
            return localVarFp.retrieveAuditEntries(actionName, entityName, resourceId, makerId, makerDateTimeFrom, makerDateTimeTo, checkerId, checkerDateTimeFrom, checkerDateTimeTo, processingResult, officeId, groupId, clientId, loanid, savingsAccountId, paged, offset, limit, orderBy, sortOrder, options).then((request) => request(axios, basePath));
        },
        /**
         * Example Requests:  audits/20 audits/20?fields=madeOnDate,maker,processingResult
         * @summary Retrieve an Audit Entry
         * @param {number} auditId auditId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAuditEntry(auditId: number, options?: any): AxiosPromise<GetMakerCheckerResponse> {
            return localVarFp.retrieveAuditEntry(auditId, options).then((request) => request(axios, basePath));
        },
        /**
         * This is a convenience resource. It can be useful when building an Audit Search UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with.  Example Requests:  audits/searchtemplate audits/searchtemplate?fields=actionNames
         * @summary Audit Search Template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAuditSearchTemplate(options?: any): AxiosPromise<GetMakerCheckersSearchTemplateResponse> {
            return localVarFp.retrieveAuditSearchTemplate(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuditsApi - object-oriented interface
 * @export
 * @class AuditsApi
 * @extends {BaseAPI}
 */
export class AuditsApi extends BaseAPI {
    /**
     * Get a 200 list of audits that match the criteria supplied and sorted by audit id in descending order, and are within the requestors\' data scope. Also it supports pagination and sorting  Example Requests:  audits  audits?fields=madeOnDate,maker,processingResult  audits?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  audits?officeId=1  audits?officeId=1&includeJson=true
     * @summary List Audits
     * @param {string} [actionName] actionName
     * @param {string} [entityName] entityName
     * @param {number} [resourceId] resourceId
     * @param {number} [makerId] makerId
     * @param {string} [makerDateTimeFrom] makerDateTimeFrom
     * @param {string} [makerDateTimeTo] makerDateTimeTo
     * @param {number} [checkerId] checkerId
     * @param {string} [checkerDateTimeFrom] checkerDateTimeFrom
     * @param {string} [checkerDateTimeTo] checkerDateTimeTo
     * @param {number} [processingResult] processingResult
     * @param {number} [officeId] officeId
     * @param {number} [groupId] groupId
     * @param {number} [clientId] clientId
     * @param {number} [loanid] loanid
     * @param {number} [savingsAccountId] savingsAccountId
     * @param {boolean} [paged] paged
     * @param {number} [offset] offset
     * @param {number} [limit] limit
     * @param {string} [orderBy] orderBy
     * @param {string} [sortOrder] sortOrder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditsApi
     */
    public retrieveAuditEntries(actionName?: string, entityName?: string, resourceId?: number, makerId?: number, makerDateTimeFrom?: string, makerDateTimeTo?: string, checkerId?: number, checkerDateTimeFrom?: string, checkerDateTimeTo?: string, processingResult?: number, officeId?: number, groupId?: number, clientId?: number, loanid?: number, savingsAccountId?: number, paged?: boolean, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, options?: any) {
        return AuditsApiFp(this.configuration).retrieveAuditEntries(actionName, entityName, resourceId, makerId, makerDateTimeFrom, makerDateTimeTo, checkerId, checkerDateTimeFrom, checkerDateTimeTo, processingResult, officeId, groupId, clientId, loanid, savingsAccountId, paged, offset, limit, orderBy, sortOrder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Example Requests:  audits/20 audits/20?fields=madeOnDate,maker,processingResult
     * @summary Retrieve an Audit Entry
     * @param {number} auditId auditId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditsApi
     */
    public retrieveAuditEntry(auditId: number, options?: any) {
        return AuditsApiFp(this.configuration).retrieveAuditEntry(auditId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is a convenience resource. It can be useful when building an Audit Search UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with.  Example Requests:  audits/searchtemplate audits/searchtemplate?fields=actionNames
     * @summary Audit Search Template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditsApi
     */
    public retrieveAuditSearchTemplate(options?: any) {
        return AuditsApiFp(this.configuration).retrieveAuditSearchTemplate(options).then((request) => request(this.axios, this.basePath));
    }
}