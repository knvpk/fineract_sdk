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


import { GetLoanProductsAccountingMappingOptions } from './get-loan-products-accounting-mapping-options';
import { GetLoanProductsAccountingRule } from './get-loan-products-accounting-rule';
import { GetLoanProductsAmortizationType } from './get-loan-products-amortization-type';
import { GetLoanProductsChargeOptions } from './get-loan-products-charge-options';
import { GetLoanProductsCurrencyOptions } from './get-loan-products-currency-options';
import { GetLoanProductsDaysInYearTemplateType } from './get-loan-products-days-in-year-template-type';
import { GetLoanProductsInterestRateTemplateFrequencyType } from './get-loan-products-interest-rate-template-frequency-type';
import { GetLoanProductsInterestRecalculationCompoundingFrequencyType } from './get-loan-products-interest-recalculation-compounding-frequency-type';
import { GetLoanProductsInterestRecalculationCompoundingType } from './get-loan-products-interest-recalculation-compounding-type';
import { GetLoanProductsInterestRecalculationTemplateData } from './get-loan-products-interest-recalculation-template-data';
import { GetLoanProductsInterestTemplateType } from './get-loan-products-interest-template-type';
import { GetLoanProductsPaymentTypeOptions } from './get-loan-products-payment-type-options';
import { GetLoanProductsPreClosureInterestCalculationStrategy } from './get-loan-products-pre-closure-interest-calculation-strategy';
import { GetLoanProductsRepaymentTemplateFrequencyType } from './get-loan-products-repayment-template-frequency-type';
import { GetLoanProductsRescheduleStrategyType } from './get-loan-products-reschedule-strategy-type';
import { GetLoanProductsTemplateCurrency } from './get-loan-products-template-currency';
import { GetLoanProductsTransactionProcessingStrategyOptions } from './get-loan-products-transaction-processing-strategy-options';
import { GetLoanProductsValueConditionTypeOptions } from './get-loan-products-value-condition-type-options';
import { GetLoansProductsDaysInMonthTemplateType } from './get-loans-products-days-in-month-template-type';
import { GetLoansProductsInterestCalculationPeriodType } from './get-loans-products-interest-calculation-period-type';

/**
 * GetLoanProductsTemplateResponse
 * @export
 * @interface GetLoanProductsTemplateResponse
 */
export interface GetLoanProductsTemplateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof GetLoanProductsTemplateResponse
     */
    includeInBorrowerCycle?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetLoanProductsTemplateResponse
     */
    useBorrowerCycle?: boolean;
    /**
     * 
     * @type {GetLoanProductsTemplateCurrency}
     * @memberof GetLoanProductsTemplateResponse
     */
    currency?: GetLoanProductsTemplateCurrency;
    /**
     * 
     * @type {GetLoanProductsRepaymentTemplateFrequencyType}
     * @memberof GetLoanProductsTemplateResponse
     */
    repaymentFrequencyType?: GetLoanProductsRepaymentTemplateFrequencyType;
    /**
     * 
     * @type {GetLoanProductsInterestRateTemplateFrequencyType}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestRateFrequencyType?: GetLoanProductsInterestRateTemplateFrequencyType;
    /**
     * 
     * @type {GetLoanProductsAmortizationType}
     * @memberof GetLoanProductsTemplateResponse
     */
    amortizationType?: GetLoanProductsAmortizationType;
    /**
     * 
     * @type {GetLoanProductsInterestTemplateType}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestType?: GetLoanProductsInterestTemplateType;
    /**
     * 
     * @type {GetLoansProductsInterestCalculationPeriodType}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestCalculationPeriodType?: GetLoansProductsInterestCalculationPeriodType;
    /**
     * 
     * @type {Array<number>}
     * @memberof GetLoanProductsTemplateResponse
     */
    principalVariationsForBorrowerCycle?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestRateVariationsForBorrowerCycle?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof GetLoanProductsTemplateResponse
     */
    numberOfRepaymentVariationsForBorrowerCycle?: Array<number>;
    /**
     * 
     * @type {GetLoanProductsAccountingRule}
     * @memberof GetLoanProductsTemplateResponse
     */
    accountingRule?: GetLoanProductsAccountingRule;
    /**
     * 
     * @type {GetLoansProductsDaysInMonthTemplateType}
     * @memberof GetLoanProductsTemplateResponse
     */
    daysInMonthType?: GetLoansProductsDaysInMonthTemplateType;
    /**
     * 
     * @type {GetLoanProductsDaysInYearTemplateType}
     * @memberof GetLoanProductsTemplateResponse
     */
    daysInYearType?: GetLoanProductsDaysInYearTemplateType;
    /**
     * 
     * @type {boolean}
     * @memberof GetLoanProductsTemplateResponse
     */
    isInterestRecalculationEnabled?: boolean;
    /**
     * 
     * @type {GetLoanProductsInterestRecalculationTemplateData}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestRecalculationData?: GetLoanProductsInterestRecalculationTemplateData;
    /**
     * 
     * @type {Set<GetLoanProductsPaymentTypeOptions>}
     * @memberof GetLoanProductsTemplateResponse
     */
    paymentTypeOptions?: Set<GetLoanProductsPaymentTypeOptions>;
    /**
     * 
     * @type {Set<GetLoanProductsCurrencyOptions>}
     * @memberof GetLoanProductsTemplateResponse
     */
    currencyOptions?: Set<GetLoanProductsCurrencyOptions>;
    /**
     * 
     * @type {Set<GetLoanProductsRepaymentTemplateFrequencyType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    repaymentFrequencyTypeOptions?: Set<GetLoanProductsRepaymentTemplateFrequencyType>;
    /**
     * 
     * @type {Set<GetLoanProductsPreClosureInterestCalculationStrategy>}
     * @memberof GetLoanProductsTemplateResponse
     */
    preClosureInterestCalculationStrategyOptions?: Set<GetLoanProductsPreClosureInterestCalculationStrategy>;
    /**
     * 
     * @type {Set<GetLoanProductsInterestRateTemplateFrequencyType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestRateFrequencyTypeOptions?: Set<GetLoanProductsInterestRateTemplateFrequencyType>;
    /**
     * 
     * @type {Set<GetLoanProductsAmortizationType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    amortizationTypeOptions?: Set<GetLoanProductsAmortizationType>;
    /**
     * 
     * @type {Set<GetLoanProductsInterestTemplateType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestTypeOptions?: Set<GetLoanProductsInterestTemplateType>;
    /**
     * 
     * @type {Set<GetLoansProductsInterestCalculationPeriodType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestCalculationPeriodTypeOptions?: Set<GetLoansProductsInterestCalculationPeriodType>;
    /**
     * 
     * @type {Set<GetLoanProductsTransactionProcessingStrategyOptions>}
     * @memberof GetLoanProductsTemplateResponse
     */
    transactionProcessingStrategyOptions?: Set<GetLoanProductsTransactionProcessingStrategyOptions>;
    /**
     * 
     * @type {Set<GetLoanProductsChargeOptions>}
     * @memberof GetLoanProductsTemplateResponse
     */
    chargeOptions?: Set<GetLoanProductsChargeOptions>;
    /**
     * 
     * @type {Set<GetLoanProductsAccountingRule>}
     * @memberof GetLoanProductsTemplateResponse
     */
    accountingRuleOptions?: Set<GetLoanProductsAccountingRule>;
    /**
     * 
     * @type {GetLoanProductsAccountingMappingOptions}
     * @memberof GetLoanProductsTemplateResponse
     */
    accountingMappingOptions?: GetLoanProductsAccountingMappingOptions;
    /**
     * 
     * @type {Set<GetLoanProductsValueConditionTypeOptions>}
     * @memberof GetLoanProductsTemplateResponse
     */
    valueConditionTypeOptions?: Set<GetLoanProductsValueConditionTypeOptions>;
    /**
     * 
     * @type {Set<GetLoansProductsDaysInMonthTemplateType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    daysInMonthTypeOptions?: Set<GetLoansProductsDaysInMonthTemplateType>;
    /**
     * 
     * @type {Set<GetLoanProductsInterestTemplateType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    daysInYearTypeOptions?: Set<GetLoanProductsInterestTemplateType>;
    /**
     * 
     * @type {Set<GetLoanProductsInterestRecalculationCompoundingType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestRecalculationCompoundingTypeOptions?: Set<GetLoanProductsInterestRecalculationCompoundingType>;
    /**
     * 
     * @type {Set<GetLoanProductsRescheduleStrategyType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    rescheduleStrategyTypeOptions?: Set<GetLoanProductsRescheduleStrategyType>;
    /**
     * 
     * @type {Set<GetLoanProductsInterestRecalculationCompoundingFrequencyType>}
     * @memberof GetLoanProductsTemplateResponse
     */
    interestRecalculationFrequencyTypeOptions?: Set<GetLoanProductsInterestRecalculationCompoundingFrequencyType>;
}
