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


import { EnumOptionData } from './enum-option-data';
import { RoleData } from './role-data';

/**
 * GetUserDetailsResponse
 * @export
 * @interface GetUserDetailsResponse
 */
export interface GetUserDetailsResponse {
    /**
     * 
     * @type {string}
     * @memberof GetUserDetailsResponse
     */
    username?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUserDetailsResponse
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUserDetailsResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetUserDetailsResponse
     */
    authenticated?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetUserDetailsResponse
     */
    officeId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUserDetailsResponse
     */
    officeName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUserDetailsResponse
     */
    staffId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUserDetailsResponse
     */
    staffDisplayName?: string;
    /**
     * 
     * @type {EnumOptionData}
     * @memberof GetUserDetailsResponse
     */
    organisationalRole?: EnumOptionData;
    /**
     * 
     * @type {Array<RoleData>}
     * @memberof GetUserDetailsResponse
     */
    roles?: Array<RoleData>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetUserDetailsResponse
     */
    permissions?: Array<string>;
}
