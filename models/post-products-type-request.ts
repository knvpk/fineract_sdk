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


import { PostProductsChargesSelected } from './post-products-charges-selected';
import { PostProductsMarketPricePeriods } from './post-products-market-price-periods';

/**
 * PostProductsTypeRequest
 * @export
 * @interface PostProductsTypeRequest
 */
export interface PostProductsTypeRequest {
    /**
     * 
     * @type {string}
     * @memberof PostProductsTypeRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PostProductsTypeRequest
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof PostProductsTypeRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PostProductsTypeRequest
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    digitsAfterDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    inMultiplesOf?: number;
    /**
     * 
     * @type {string}
     * @memberof PostProductsTypeRequest
     */
    locale?: string;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    totalShares?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    sharesIssued?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    unitPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    minimumShares?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    nominalShares?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    maximumShares?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    minimumActivePeriodForDividends?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    minimumactiveperiodFrequencyType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    lockinPeriodFrequency?: number;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    lockinPeriodFrequencyType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostProductsTypeRequest
     */
    allowDividendCalculationForInactiveClients?: boolean;
    /**
     * 
     * @type {Set<PostProductsMarketPricePeriods>}
     * @memberof PostProductsTypeRequest
     */
    marketPricePeriods?: Set<PostProductsMarketPricePeriods>;
    /**
     * 
     * @type {Set<PostProductsChargesSelected>}
     * @memberof PostProductsTypeRequest
     */
    chargesSelected?: Set<PostProductsChargesSelected>;
    /**
     * 
     * @type {number}
     * @memberof PostProductsTypeRequest
     */
    accountingRule?: number;
}

