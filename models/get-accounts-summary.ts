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


import { GetAccountsCurrency } from './get-accounts-currency';
import { GetAccountsStatus } from './get-accounts-status';
import { GetAccountsTimeline } from './get-accounts-timeline';

/**
 * 
 * @export
 * @interface GetAccountsSummary
 */
export interface GetAccountsSummary {
    /**
     * 
     * @type {number}
     * @memberof GetAccountsSummary
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAccountsSummary
     */
    accountNo?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAccountsSummary
     */
    totalApprovedShares?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAccountsSummary
     */
    totalPendingForApprovalShares?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAccountsSummary
     */
    productId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAccountsSummary
     */
    productName?: string;
    /**
     * 
     * @type {GetAccountsStatus}
     * @memberof GetAccountsSummary
     */
    status?: GetAccountsStatus;
    /**
     * 
     * @type {GetAccountsTimeline}
     * @memberof GetAccountsSummary
     */
    timeline?: GetAccountsTimeline;
    /**
     * 
     * @type {GetAccountsCurrency}
     * @memberof GetAccountsSummary
     */
    currency?: GetAccountsCurrency;
}


