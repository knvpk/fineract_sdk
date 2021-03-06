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


import { PostSavingsCharges } from './post-savings-charges';

/**
 * PostSavingsProductsRequest
 * @export
 * @interface PostSavingsProductsRequest
 */
export interface PostSavingsProductsRequest {
    /**
     * 
     * @type {string}
     * @memberof PostSavingsProductsRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSavingsProductsRequest
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSavingsProductsRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSavingsProductsRequest
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    digitsAfterDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    inMultiplesOf?: number;
    /**
     * 
     * @type {string}
     * @memberof PostSavingsProductsRequest
     */
    locale?: string;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    nominalAnnualInterestRate?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    interestCompoundingPeriodType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    interestPostingPeriodType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    interestCalculationType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    interestCalculationDaysInYearType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    accountingRule?: number;
    /**
     * 
     * @type {Set<PostSavingsCharges>}
     * @memberof PostSavingsProductsRequest
     */
    charges?: Set<PostSavingsCharges>;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    minRequiredOpeningBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    lockinPeriodFrequency?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    lockinPeriodFrequencyType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostSavingsProductsRequest
     */
    withdrawalFeeForTransfers?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostSavingsProductsRequest
     */
    paymentChannelToFundSourceMappings?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostSavingsProductsRequest
     */
    feeToIncomeAccountMappings?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostSavingsProductsRequest
     */
    penaltyToIncomeAccountMappings?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof PostSavingsProductsRequest
     */
    allowOverdraft?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    overdraftLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    minBalanceForInterestCalculation?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    withHoldTax?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    taxGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    savingsReferenceAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    savingsControlAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    interestOnSavingsAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    incomeFromFeeAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    transfersInSuspenseAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    incomeFromPenaltyAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    incomeFromInterestId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    overdraftPortfolioControlId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSavingsProductsRequest
     */
    writeOffAccountId?: number;
}


