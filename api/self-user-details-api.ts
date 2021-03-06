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
import { GetSelfUserDetailsResponse } from '../models';
/**
 * SelfUserDetailsApi - axios parameter creator
 * @export
 */
export const SelfUserDetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Checks the Authentication and returns the set roles and permissions allowed  For more info visit this link - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#selfoauth
         * @summary Fetch authenticated user details
         * @param {string} [accessToken] ??ccess_token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAuthenticatedUserData1: async (accessToken?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/self/userdetails`;
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

            if (accessToken !== undefined) {
                localVarQueryParameter['access_token'] = accessToken;
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
 * SelfUserDetailsApi - functional programming interface
 * @export
 */
export const SelfUserDetailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SelfUserDetailsApiAxiosParamCreator(configuration)
    return {
        /**
         * Checks the Authentication and returns the set roles and permissions allowed  For more info visit this link - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#selfoauth
         * @summary Fetch authenticated user details
         * @param {string} [accessToken] ??ccess_token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAuthenticatedUserData1(accessToken?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSelfUserDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAuthenticatedUserData1(accessToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SelfUserDetailsApi - factory interface
 * @export
 */
export const SelfUserDetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SelfUserDetailsApiFp(configuration)
    return {
        /**
         * Checks the Authentication and returns the set roles and permissions allowed  For more info visit this link - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#selfoauth
         * @summary Fetch authenticated user details
         * @param {string} [accessToken] ??ccess_token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAuthenticatedUserData1(accessToken?: string, options?: any): AxiosPromise<GetSelfUserDetailsResponse> {
            return localVarFp.fetchAuthenticatedUserData1(accessToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SelfUserDetailsApi - object-oriented interface
 * @export
 * @class SelfUserDetailsApi
 * @extends {BaseAPI}
 */
export class SelfUserDetailsApi extends BaseAPI {
    /**
     * Checks the Authentication and returns the set roles and permissions allowed  For more info visit this link - https://demo.fineract.dev/fineract-provider/api-docs/apiLive.htm#selfoauth
     * @summary Fetch authenticated user details
     * @param {string} [accessToken] ??ccess_token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelfUserDetailsApi
     */
    public fetchAuthenticatedUserData1(accessToken?: string, options?: any) {
        return SelfUserDetailsApiFp(this.configuration).fetchAuthenticatedUserData1(accessToken, options).then((request) => request(this.axios, this.basePath));
    }
}
