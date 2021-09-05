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
import { GetSavingsProductsAccountingMappingOptions } from './get-savings-products-accounting-mapping-options';
import { GetSavingsProductsChargeOptions } from './get-savings-products-charge-options';
import { GetSavingsProductsInterestCalculationDaysInYearType } from './get-savings-products-interest-calculation-days-in-year-type';
import { GetSavingsProductsInterestCalculationType } from './get-savings-products-interest-calculation-type';
import { GetSavingsProductsInterestCompoundingPeriodType } from './get-savings-products-interest-compounding-period-type';
import { GetSavingsProductsInterestPostingPeriodType } from './get-savings-products-interest-posting-period-type';
import { GetSavingsProductsLockinPeriodFrequencyTypeOptions } from './get-savings-products-lockin-period-frequency-type-options';
import { GetSavingsProductsPaymentTypeOptions } from './get-savings-products-payment-type-options';
import { GetSavingsProductsTemplateAccountingRule } from './get-savings-products-template-accounting-rule';
import { GetSavingsProductsWithdrawalFeeTypeOptions } from './get-savings-products-withdrawal-fee-type-options';

/**
 * GetSavingsProductsTemplateResponse
 * @export
 * @interface GetSavingsProductsTemplateResponse
 */
export interface GetSavingsProductsTemplateResponse {
    /**
     * 
     * @type {GetSavingsCurrency}
     * @memberof GetSavingsProductsTemplateResponse
     */
    currency?: GetSavingsCurrency;
    /**
     * 
     * @type {GetSavingsProductsInterestCompoundingPeriodType}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestCompoundingPeriodType?: GetSavingsProductsInterestCompoundingPeriodType;
    /**
     * 
     * @type {GetSavingsProductsInterestPostingPeriodType}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestPostingPeriodType?: GetSavingsProductsInterestPostingPeriodType;
    /**
     * 
     * @type {GetSavingsProductsInterestCalculationType}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestCalculationType?: GetSavingsProductsInterestCalculationType;
    /**
     * 
     * @type {GetSavingsProductsInterestCalculationDaysInYearType}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestCalculationDaysInYearType?: GetSavingsProductsInterestCalculationDaysInYearType;
    /**
     * 
     * @type {GetSavingsProductsTemplateAccountingRule}
     * @memberof GetSavingsProductsTemplateResponse
     */
    accountingRule?: GetSavingsProductsTemplateAccountingRule;
    /**
     * 
     * @type {Set<GetSavingsCurrency>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    currencyOptions?: Set<GetSavingsCurrency>;
    /**
     * 
     * @type {Set<GetSavingsProductsInterestCompoundingPeriodType>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestCompoundingPeriodTypeOptions?: Set<GetSavingsProductsInterestCompoundingPeriodType>;
    /**
     * 
     * @type {Set<GetSavingsProductsInterestPostingPeriodType>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestPostingPeriodTypeOptions?: Set<GetSavingsProductsInterestPostingPeriodType>;
    /**
     * 
     * @type {Set<GetSavingsProductsInterestCalculationType>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestCalculationTypeOptions?: Set<GetSavingsProductsInterestCalculationType>;
    /**
     * 
     * @type {Set<GetSavingsProductsInterestCalculationDaysInYearType>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    interestCalculationDaysInYearTypeOptions?: Set<GetSavingsProductsInterestCalculationDaysInYearType>;
    /**
     * 
     * @type {Set<GetSavingsProductsLockinPeriodFrequencyTypeOptions>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    lockinPeriodFrequencyTypeOptions?: Set<GetSavingsProductsLockinPeriodFrequencyTypeOptions>;
    /**
     * 
     * @type {Set<GetSavingsProductsWithdrawalFeeTypeOptions>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    withdrawalFeeTypeOptions?: Set<GetSavingsProductsWithdrawalFeeTypeOptions>;
    /**
     * 
     * @type {Set<GetSavingsProductsPaymentTypeOptions>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    paymentTypeOptions?: Set<GetSavingsProductsPaymentTypeOptions>;
    /**
     * 
     * @type {Set<GetSavingsProductsTemplateAccountingRule>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    accountingRuleOptions?: Set<GetSavingsProductsTemplateAccountingRule>;
    /**
     * 
     * @type {Set<GetSavingsProductsAccountingMappingOptions>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    accountingMappingOptions?: Set<GetSavingsProductsAccountingMappingOptions>;
    /**
     * 
     * @type {Set<GetSavingsProductsChargeOptions>}
     * @memberof GetSavingsProductsTemplateResponse
     */
    chargeOptions?: Set<GetSavingsProductsChargeOptions>;
}

