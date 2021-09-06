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


import { GetAccountTransfersFromAccountType } from './get-account-transfers-from-account-type';
import { GetAccountTransfersPageItemsToAccountType } from './get-account-transfers-page-items-to-account-type';
import { GetAccountTransfersTemplateRefundByTransferCurrency } from './get-account-transfers-template-refund-by-transfer-currency';
import { GetAccountTransfersTemplateRefundByTransferFromAccount } from './get-account-transfers-template-refund-by-transfer-from-account';
import { GetAccountTransfersTemplateRefundByTransferFromAccountOptions } from './get-account-transfers-template-refund-by-transfer-from-account-options';
import { GetAccountTransfersTemplateRefundByTransferFromClient } from './get-account-transfers-template-refund-by-transfer-from-client';
import { GetAccountTransfersTemplateRefundByTransferFromClientOptions } from './get-account-transfers-template-refund-by-transfer-from-client-options';
import { GetAccountTransfersTemplateRefundByTransferFromOffice } from './get-account-transfers-template-refund-by-transfer-from-office';
import { GetAccountTransfersTemplateRefundByTransferFromOfficeOptions } from './get-account-transfers-template-refund-by-transfer-from-office-options';
import { GetAccountTransfersTemplateRefundByTransferToAccount } from './get-account-transfers-template-refund-by-transfer-to-account';
import { GetAccountTransfersTemplateRefundByTransferToClient } from './get-account-transfers-template-refund-by-transfer-to-client';

/**
 * GetAccountTransfersTemplateRefundByTransferResponse
 * @export
 * @interface GetAccountTransfersTemplateRefundByTransferResponse
 */
export interface GetAccountTransfersTemplateRefundByTransferResponse {
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferCurrency}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    currency?: GetAccountTransfersTemplateRefundByTransferCurrency;
    /**
     * 
     * @type {number}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    transferAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    transferDate?: string;
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferFromOffice}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromOffice?: GetAccountTransfersTemplateRefundByTransferFromOffice;
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferFromClient}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromClient?: GetAccountTransfersTemplateRefundByTransferFromClient;
    /**
     * 
     * @type {GetAccountTransfersPageItemsToAccountType}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromAccountType?: GetAccountTransfersPageItemsToAccountType;
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferFromAccount}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromAccount?: GetAccountTransfersTemplateRefundByTransferFromAccount;
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferFromOffice}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toOffice?: GetAccountTransfersTemplateRefundByTransferFromOffice;
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferToClient}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toClient?: GetAccountTransfersTemplateRefundByTransferToClient;
    /**
     * 
     * @type {GetAccountTransfersFromAccountType}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toAccountType?: GetAccountTransfersFromAccountType;
    /**
     * 
     * @type {GetAccountTransfersTemplateRefundByTransferToAccount}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toAccount?: GetAccountTransfersTemplateRefundByTransferToAccount;
    /**
     * 
     * @type {Set<GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromOfficeOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>;
    /**
     * 
     * @type {Set<GetAccountTransfersTemplateRefundByTransferFromClientOptions>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromClientOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromClientOptions>;
    /**
     * 
     * @type {Set<GetAccountTransfersFromAccountType>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromAccountTypeOptions?: Set<GetAccountTransfersFromAccountType>;
    /**
     * 
     * @type {Set<GetAccountTransfersTemplateRefundByTransferFromAccountOptions>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    fromAccountOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromAccountOptions>;
    /**
     * 
     * @type {Set<GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toOfficeOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>;
    /**
     * 
     * @type {Set<GetAccountTransfersTemplateRefundByTransferFromClientOptions>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toClientOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromClientOptions>;
    /**
     * 
     * @type {Set<GetAccountTransfersFromAccountType>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toAccountTypeOptions?: Set<GetAccountTransfersFromAccountType>;
    /**
     * 
     * @type {Set<GetAccountTransfersTemplateRefundByTransferToAccount>}
     * @memberof GetAccountTransfersTemplateRefundByTransferResponse
     */
    toAccountOptions?: Set<GetAccountTransfersTemplateRefundByTransferToAccount>;
}


