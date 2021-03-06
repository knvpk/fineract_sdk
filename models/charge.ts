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


import { ChargeFeeOnMonthDay } from './charge-fee-on-month-day';
import { GLAccount } from './glaccount';
import { TaxGroup } from './tax-group';

/**
 * 
 * @export
 * @interface Charge
 */
export interface Charge {
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Charge
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof Charge
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    chargeTimeType?: number;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    chargeCalculation?: number;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    chargePaymentMode?: number;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    feeInterval?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    penalty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    deleted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    minCap?: number;
    /**
     * 
     * @type {number}
     * @memberof Charge
     */
    maxCap?: number;
    /**
     * 
     * @type {GLAccount}
     * @memberof Charge
     */
    account?: GLAccount;
    /**
     * 
     * @type {TaxGroup}
     * @memberof Charge
     */
    taxGroup?: TaxGroup;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    savingsCharge?: boolean;
    /**
     * 
     * @type {ChargeFeeOnMonthDay}
     * @memberof Charge
     */
    feeOnMonthDay?: ChargeFeeOnMonthDay;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    annualFee?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    monthlyFee?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    disbursementCharge?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    loanCharge?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    clientCharge?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    allowedSavingsChargeCalculationType?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    allowedClientChargeCalculationType?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    percentageOfDisbursementAmount?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    allowedLoanChargeTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    allowedClientChargeTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    allowedSavingsChargeTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    percentageOfApprovedAmount?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    overdueInstallment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Charge
     */
    _new?: boolean;
}


