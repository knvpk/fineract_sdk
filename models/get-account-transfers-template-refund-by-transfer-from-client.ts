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


import { GetAccountTransfersStatus } from './get-account-transfers-status';
import { GetAccountTransfersTimeline } from './get-account-transfers-timeline';

/**
 * 
 * @export
 * @interface GetAccountTransfersTemplateRefundByTransferFromClient
 */
export interface GetAccountTransfersTemplateRefundByTransferFromClient {
    /**
     * 
     * @type {number}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    accountNo?: number;
    /**
     * 
     * @type {GetAccountTransfersStatus}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    status?: GetAccountTransfersStatus;
    /**
     * 
     * @type {boolean}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    activationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    displayName?: string;
    /**
     * 
     * @type {object}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    gender?: object;
    /**
     * 
     * @type {object}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    clientType?: object;
    /**
     * 
     * @type {object}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    clientClassification?: object;
    /**
     * 
     * @type {number}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    officeId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    officeName?: string;
    /**
     * 
     * @type {GetAccountTransfersTimeline}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    timeline?: GetAccountTransfersTimeline;
    /**
     * 
     * @type {object}
     * @memberof GetAccountTransfersTemplateRefundByTransferFromClient
     */
    groups?: object;
}


