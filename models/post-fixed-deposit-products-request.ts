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


import { PostFixedDepositProductsCharts } from './post-fixed-deposit-products-charts';

/**
 * PostFixedDepositProductsRequest
 * @export
 * @interface PostFixedDepositProductsRequest
 */
export interface PostFixedDepositProductsRequest {
    /**
     * 
     * @type {string}
     * @memberof PostFixedDepositProductsRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PostFixedDepositProductsRequest
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof PostFixedDepositProductsRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PostFixedDepositProductsRequest
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    digitsAfterDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    inMultiplesOf?: number;
    /**
     * 
     * @type {string}
     * @memberof PostFixedDepositProductsRequest
     */
    locale?: string;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    interestCompoundingPeriodType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    interestPostingPeriodType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    interestCalculationType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    interestCalculationDaysInYearType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    accountingRule?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostFixedDepositProductsRequest
     */
    preClosurePenalApplicable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    preClosurePenalInterest?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    preClosurePenalInterestOnTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    minDepositTerm?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    minDepositTermTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    maxDepositTerm?: number;
    /**
     * 
     * @type {number}
     * @memberof PostFixedDepositProductsRequest
     */
    maxDepositTermTypeId?: number;
    /**
     * 
     * @type {Set<PostFixedDepositProductsCharts>}
     * @memberof PostFixedDepositProductsRequest
     */
    charts?: Set<PostFixedDepositProductsCharts>;
}


