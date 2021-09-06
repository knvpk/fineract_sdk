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


import { GetRecurringDepositAccountsAccountChart } from './get-recurring-deposit-accounts-account-chart';
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
 * GetRecurringDepositAccountsAccountIdResponse
 * @export
 * @interface GetRecurringDepositAccountsAccountIdResponse
 */
export interface GetRecurringDepositAccountsAccountIdResponse {
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    accountNo?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    clientId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    clientName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    savingsProductId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    savingsProductName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    fieldOfficerId?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsStatus}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    status?: GetRecurringDepositAccountsStatus;
    /**
     * 
     * @type {GetRecurringDepositAccountsTimeline}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    timeline?: GetRecurringDepositAccountsTimeline;
    /**
     * 
     * @type {GetRecurringDepositAccountsCurrency}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    currency?: GetRecurringDepositAccountsCurrency;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestCompoundingPeriodType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    interestCompoundingPeriodType?: GetRecurringDepositAccountsInterestCompoundingPeriodType;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestPostingPeriodType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    interestPostingPeriodType?: GetRecurringDepositAccountsInterestPostingPeriodType;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestCalculationType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    interestCalculationType?: GetRecurringDepositAccountsInterestCalculationType;
    /**
     * 
     * @type {GetRecurringDepositAccountsInterestCalculationDaysInYearType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    interestCalculationDaysInYearType?: GetRecurringDepositAccountsInterestCalculationDaysInYearType;
    /**
     * 
     * @type {boolean}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    preClosurePenalApplicable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    minDepositTerm?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    maxDepositTerm?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsMinDepositTermType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    minDepositTermType?: GetRecurringDepositAccountsMinDepositTermType;
    /**
     * 
     * @type {GetRecurringDepositAccountsMaxDepositTermType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    maxDepositTermType?: GetRecurringDepositAccountsMaxDepositTermType;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    recurringDepositAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    recurringDepositFrequency?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    expectedFirstDepositOnDate?: string;
    /**
     * 
     * @type {GetRecurringDepositAccountsRecurringDepositFrequencyType}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    recurringDepositFrequencyType?: GetRecurringDepositAccountsRecurringDepositFrequencyType;
    /**
     * 
     * @type {number}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    depositPeriod?: number;
    /**
     * 
     * @type {GetRecurringDepositAccountsDepositPeriodFrequency}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    depositPeriodFrequency?: GetRecurringDepositAccountsDepositPeriodFrequency;
    /**
     * 
     * @type {GetRecurringDepositAccountsSummary}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    summary?: GetRecurringDepositAccountsSummary;
    /**
     * 
     * @type {GetRecurringDepositAccountsAccountChart}
     * @memberof GetRecurringDepositAccountsAccountIdResponse
     */
    accountChart?: GetRecurringDepositAccountsAccountChart;
}


