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


import { GetSelfSavingsCurrency } from './get-self-savings-currency';
import { GetSelfSavingsInterestCalculationDaysInYearType } from './get-self-savings-interest-calculation-days-in-year-type';
import { GetSelfSavingsInterestCalculationType } from './get-self-savings-interest-calculation-type';
import { GetSelfSavingsInterestCompoundingPeriodType } from './get-self-savings-interest-compounding-period-type';
import { GetSelfSavingsInterestPostingPeriodType } from './get-self-savings-interest-posting-period-type';
import { GetSelfSavingsStatus } from './get-self-savings-status';
import { GetSelfSavingsSummary } from './get-self-savings-summary';
import { GetSelfSavingsTimeline } from './get-self-savings-timeline';

/**
 * GetSelfSavingsAccountsResponse
 * @export
 * @interface GetSelfSavingsAccountsResponse
 */
export interface GetSelfSavingsAccountsResponse {
    /**
     * 
     * @type {number}
     * @memberof GetSelfSavingsAccountsResponse
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSelfSavingsAccountsResponse
     */
    accountNo?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSelfSavingsAccountsResponse
     */
    clientId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetSelfSavingsAccountsResponse
     */
    clientName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetSelfSavingsAccountsResponse
     */
    savingsProductId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetSelfSavingsAccountsResponse
     */
    savingsProductName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetSelfSavingsAccountsResponse
     */
    fieldOfficerId?: number;
    /**
     * 
     * @type {GetSelfSavingsStatus}
     * @memberof GetSelfSavingsAccountsResponse
     */
    status?: GetSelfSavingsStatus;
    /**
     * 
     * @type {GetSelfSavingsTimeline}
     * @memberof GetSelfSavingsAccountsResponse
     */
    timeline?: GetSelfSavingsTimeline;
    /**
     * 
     * @type {GetSelfSavingsCurrency}
     * @memberof GetSelfSavingsAccountsResponse
     */
    currency?: GetSelfSavingsCurrency;
    /**
     * 
     * @type {number}
     * @memberof GetSelfSavingsAccountsResponse
     */
    nominalAnnualInterestRate?: number;
    /**
     * 
     * @type {GetSelfSavingsInterestCompoundingPeriodType}
     * @memberof GetSelfSavingsAccountsResponse
     */
    interestCompoundingPeriodType?: GetSelfSavingsInterestCompoundingPeriodType;
    /**
     * 
     * @type {GetSelfSavingsInterestPostingPeriodType}
     * @memberof GetSelfSavingsAccountsResponse
     */
    interestPostingPeriodType?: GetSelfSavingsInterestPostingPeriodType;
    /**
     * 
     * @type {GetSelfSavingsInterestCalculationType}
     * @memberof GetSelfSavingsAccountsResponse
     */
    interestCalculationType?: GetSelfSavingsInterestCalculationType;
    /**
     * 
     * @type {GetSelfSavingsInterestCalculationDaysInYearType}
     * @memberof GetSelfSavingsAccountsResponse
     */
    interestCalculationDaysInYearType?: GetSelfSavingsInterestCalculationDaysInYearType;
    /**
     * 
     * @type {GetSelfSavingsSummary}
     * @memberof GetSelfSavingsAccountsResponse
     */
    summary?: GetSelfSavingsSummary;
}


