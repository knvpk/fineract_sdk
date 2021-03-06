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


import { GetSavingsCurrency } from './get-savings-currency';
import { GetSavingsProductsAccountingMappings } from './get-savings-products-accounting-mappings';
import { GetSavingsProductsAccountingRule } from './get-savings-products-accounting-rule';
import { GetSavingsProductsFeeToIncomeAccountMappings } from './get-savings-products-fee-to-income-account-mappings';
import { GetSavingsProductsInterestCalculationDaysInYearType } from './get-savings-products-interest-calculation-days-in-year-type';
import { GetSavingsProductsInterestCalculationType } from './get-savings-products-interest-calculation-type';
import { GetSavingsProductsInterestCompoundingPeriodType } from './get-savings-products-interest-compounding-period-type';
import { GetSavingsProductsInterestPostingPeriodType } from './get-savings-products-interest-posting-period-type';
import { GetSavingsProductsPaymentChannelToFundSourceMappings } from './get-savings-products-payment-channel-to-fund-source-mappings';
import { GetSavingsProductsPenaltyToIncomeAccountMappings } from './get-savings-products-penalty-to-income-account-mappings';

/**
 * GetSavingsProductsProductIdResponse
 * @export
 * @interface GetSavingsProductsProductIdResponse
 */
export interface GetSavingsProductsProductIdResponse {
    /**
     * 
     * @type {number}
     * @memberof GetSavingsProductsProductIdResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GetSavingsProductsProductIdResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSavingsProductsProductIdResponse
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSavingsProductsProductIdResponse
     */
    description?: string;
    /**
     * 
     * @type {GetSavingsCurrency}
     * @memberof GetSavingsProductsProductIdResponse
     */
    currency?: GetSavingsCurrency;
    /**
     * 
     * @type {number}
     * @memberof GetSavingsProductsProductIdResponse
     */
    nominalAnnualInterestRate?: number;
    /**
     * 
     * @type {GetSavingsProductsInterestCompoundingPeriodType}
     * @memberof GetSavingsProductsProductIdResponse
     */
    interestCompoundingPeriodType?: GetSavingsProductsInterestCompoundingPeriodType;
    /**
     * 
     * @type {GetSavingsProductsInterestPostingPeriodType}
     * @memberof GetSavingsProductsProductIdResponse
     */
    interestPostingPeriodType?: GetSavingsProductsInterestPostingPeriodType;
    /**
     * 
     * @type {GetSavingsProductsInterestCalculationType}
     * @memberof GetSavingsProductsProductIdResponse
     */
    interestCalculationType?: GetSavingsProductsInterestCalculationType;
    /**
     * 
     * @type {GetSavingsProductsInterestCalculationDaysInYearType}
     * @memberof GetSavingsProductsProductIdResponse
     */
    interestCalculationDaysInYearType?: GetSavingsProductsInterestCalculationDaysInYearType;
    /**
     * 
     * @type {boolean}
     * @memberof GetSavingsProductsProductIdResponse
     */
    withdrawalFeeForTransfers?: boolean;
    /**
     * 
     * @type {GetSavingsProductsAccountingRule}
     * @memberof GetSavingsProductsProductIdResponse
     */
    accountingRule?: GetSavingsProductsAccountingRule;
    /**
     * 
     * @type {GetSavingsProductsAccountingMappings}
     * @memberof GetSavingsProductsProductIdResponse
     */
    accountingMappings?: GetSavingsProductsAccountingMappings;
    /**
     * 
     * @type {Set<GetSavingsProductsPaymentChannelToFundSourceMappings>}
     * @memberof GetSavingsProductsProductIdResponse
     */
    paymentChannelToFundSourceMappings?: Set<GetSavingsProductsPaymentChannelToFundSourceMappings>;
    /**
     * 
     * @type {Set<GetSavingsProductsFeeToIncomeAccountMappings>}
     * @memberof GetSavingsProductsProductIdResponse
     */
    feeToIncomeAccountMappings?: Set<GetSavingsProductsFeeToIncomeAccountMappings>;
    /**
     * 
     * @type {Set<GetSavingsProductsPenaltyToIncomeAccountMappings>}
     * @memberof GetSavingsProductsProductIdResponse
     */
    penaltyToIncomeAccountMappings?: Set<GetSavingsProductsPenaltyToIncomeAccountMappings>;
    /**
     * 
     * @type {Array<number>}
     * @memberof GetSavingsProductsProductIdResponse
     */
    charges?: Array<number>;
}


