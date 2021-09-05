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


import { ExtensionData } from './extension-data';
import { GeoCodeData } from './geo-code-data';
import { InteropTransactionTypeData } from './interop-transaction-type-data';
import { MoneyData } from './money-data';

/**
 * 
 * @export
 * @interface InteropTransferRequestData
 */
export interface InteropTransferRequestData {
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    transactionCode: string;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    requestCode?: string;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    accountId: string;
    /**
     * 
     * @type {MoneyData}
     * @memberof InteropTransferRequestData
     */
    amount: MoneyData;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    transactionRole: InteropTransferRequestDataTransactionRoleEnum;
    /**
     * 
     * @type {InteropTransactionTypeData}
     * @memberof InteropTransferRequestData
     */
    transactionType?: InteropTransactionTypeData;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    note?: string;
    /**
     * 
     * @type {GeoCodeData}
     * @memberof InteropTransferRequestData
     */
    geoCode?: GeoCodeData;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    expiration?: string;
    /**
     * 
     * @type {Array<ExtensionData>}
     * @memberof InteropTransferRequestData
     */
    extensionList?: Array<ExtensionData>;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    transferCode: string;
    /**
     * 
     * @type {MoneyData}
     * @memberof InteropTransferRequestData
     */
    fspFee?: MoneyData;
    /**
     * 
     * @type {MoneyData}
     * @memberof InteropTransferRequestData
     */
    fspCommission?: MoneyData;
    /**
     * 
     * @type {string}
     * @memberof InteropTransferRequestData
     */
    expirationLocalDate?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum InteropTransferRequestDataTransactionRoleEnum {
    Payer = 'PAYER',
    Payee = 'PAYEE'
}


