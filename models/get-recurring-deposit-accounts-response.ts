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


import { GetRecurringDepositAccountsCurrency } from './get-recurring-deposit-accounts-currency';
import { GetRecurringDepositAccountsDepositPeriodFrequency } from './get-recurring-deposit-accounts-deposit-period-frequency';
import { GetRecurringDepositAccountsInterestCalculationDaysInYearType } from './get-recurring-deposit-accounts-interest-calculation-days-in-year-type';
import { GetRecurringDepositAccountsInterestCalculationType } from './get-recurring-deposit-accounts-interest-calculation-type';
import { GetRecurringDepositAccountsInterestCompoundingPeriodType } from './get-recurring-deposit-accounts-interest-compounding-period-type';
import { GetRecurringDepositAccountsInterestPostingPeriodType } from './get-recurring-deposit-accounts-interest-posting-period-type';
import { GetRecurringDepositAccountsMaxDepositTermType } from './get-recurring-deposit-accounts-max-deposit-term-type';
import { GetRecurringDepositAccountsMinDepositTermType } from './get-recurring-deposit-accounts-min-deposit-term-type';
import { GetRecurringDepositAccountsRecurringDepositFrequencyType } from './get-recurring-deposit-accounts-recurring-deposit-frequency-type';
import { GetRecurringDepositAccountsStatus } from './get-recurring-deposit-accounts-status';
import { GetRecurringDepositAccountsSummary } from './get-recurring-deposit-accounts-summary';
import { GetRecurringDepositAccountsTimeline } from './get-recurring-deposit-accounts-timeline';

/**
 * GetRecurringDepositAccountsResponse
 * @export
 * @interface GetRecurringDepositAccountsResponse
 */
export interface GetRecurringDepositAccountsResponse {
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    accountNo?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    clientId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsResponse
     */
    clientName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    savingsProductId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsResponse
     */
    savingsProductName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    fieldOfficerId?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsStatus}
     * @memberof GetRecurringDepositAccountsResponse
     */
    status?: GetRecurringDepositAccountsStatus;
    /**
     * 
     * @type {GetRecurringDepositAccountsTimeline}
     * @memberof GetRecurringDepositAccountsResponse
     */
    timeline?: GetRecurringDepositAccountsTimeline;
    /**
     * 
     * @type {GetRecurringDepositAccountsCurrency}
     * @memberof GetRecurringDepositAccountsResponse
     */
    currency?: GetRecurringDepositAccountsCurrency;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestCompoundingPeriodType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    interestCompoundingPeriodType?: GetRecurringDepositAccountsInterestCompoundingPeriodType;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestPostingPeriodType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    interestPostingPeriodType?: GetRecurringDepositAccountsInterestPostingPeriodType;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestCalculationType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    interestCalculationType?: GetRecurringDepositAccountsInterestCalculationType;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestCalculationDaysInYearType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    interestCalculationDaysInYearType?: GetRecurringDepositAccountsInterestCalculationDaysInYearType;
    /**
     * 
     * @type {GetRecurringDepositAccountsSummary}
     * @memberof GetRecurringDepositAccountsResponse
     */
    summary?: GetRecurringDepositAccountsSummary;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    depositAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    maturityAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsResponse
     */
    maturityDate?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    recurringDepositAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    recurringDepositFrequency?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsRecurringDepositFrequencyType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    recurringDepositFrequencyType?: GetRecurringDepositAccountsRecurringDepositFrequencyType;
    /**
     * 
     * @type {boolean}
     * @memberof GetRecurringDepositAccountsResponse
     */
    preClosurePenalApplicable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    minDepositTerm?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    maxDepositTerm?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsMinDepositTermType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    minDepositTermType?: GetRecurringDepositAccountsMinDepositTermType;
    /**
     * 
     * @type {GetRecurringDepositAccountsMaxDepositTermType}
     * @memberof GetRecurringDepositAccountsResponse
     */
    maxDepositTermType?: GetRecurringDepositAccountsMaxDepositTermType;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsResponse
     */
    depositPeriod?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsDepositPeriodFrequency}
     * @memberof GetRecurringDepositAccountsResponse
     */
    depositPeriodFrequency?: GetRecurringDepositAccountsDepositPeriodFrequency;
}
