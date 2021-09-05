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


import { GetClientChargeCalculationType } from './get-client-charge-calculation-type';
import { GetClientChargeCurrency } from './get-client-charge-currency';
import { GetClientChargeTimeType } from './get-client-charge-time-type';

/**
 * 
 * @export
 * @interface GetClientsChargesPageItems
 */
export interface GetClientsChargesPageItems {
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    clientId?: number;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    chargeId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetClientsChargesPageItems
     */
    name?: string;
    /**
     * 
     * @type {GetClientChargeTimeType}
     * @memberof GetClientsChargesPageItems
     */
    chargeTimeType?: GetClientChargeTimeType;
    /**
     * 
     * @type {string}
     * @memberof GetClientsChargesPageItems
     */
    dueDate?: string;
    /**
     * 
     * @type {GetClientChargeCalculationType}
     * @memberof GetClientsChargesPageItems
     */
    chargeCalculationType?: GetClientChargeCalculationType;
    /**
     * 
     * @type {GetClientChargeCurrency}
     * @memberof GetClientsChargesPageItems
     */
    currency?: GetClientChargeCurrency;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    amountPaid?: number;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    amountWaived?: number;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    amountWrittenOff?: number;
    /**
     * 
     * @type {number}
     * @memberof GetClientsChargesPageItems
     */
    amountOutstanding?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetClientsChargesPageItems
     */
    penalty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetClientsChargesPageItems
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetClientsChargesPageItems
     */
    isPaid?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetClientsChargesPageItems
     */
    isWaived?: boolean;
}

