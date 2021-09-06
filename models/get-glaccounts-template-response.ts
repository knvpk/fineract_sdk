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


import { CodeValueData } from './code-value-data';
import { EnumOptionData } from './enum-option-data';
import { GLAccountData } from './glaccount-data';

/**
 * GetGLAccountsTemplateResponse
 * @export
 * @interface GetGLAccountsTemplateResponse
 */
export interface GetGLAccountsTemplateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof GetGLAccountsTemplateResponse
     */
    disabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetGLAccountsTemplateResponse
     */
    manualEntriesAllowed?: boolean;
    /**
     * 
     * @type {EnumOptionData}
     * @memberof GetGLAccountsTemplateResponse
     */
    type?: EnumOptionData;
    /**
     * 
     * @type {EnumOptionData}
     * @memberof GetGLAccountsTemplateResponse
     */
    usage?: EnumOptionData;
    /**
     * 
     * @type {Array<EnumOptionData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    accountTypeOptions?: Array<EnumOptionData>;
    /**
     * 
     * @type {Array<EnumOptionData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    usageOptions?: Array<EnumOptionData>;
    /**
     * 
     * @type {Array<GLAccountData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    assetHeaderAccountOptions?: Array<GLAccountData>;
    /**
     * 
     * @type {Array<GLAccountData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    liabilityHeaderAccountOptions?: Array<GLAccountData>;
    /**
     * 
     * @type {Array<GLAccountData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    equityHeaderAccountOptions?: Array<GLAccountData>;
    /**
     * 
     * @type {Array<GLAccountData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    expenseHeaderAccountOptions?: Array<GLAccountData>;
    /**
     * 
     * @type {Array<CodeValueData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    allowedAssetsTagOptions?: Array<CodeValueData>;
    /**
     * 
     * @type {Array<CodeValueData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    allowedLiabilitiesTagOptions?: Array<CodeValueData>;
    /**
     * 
     * @type {Array<CodeValueData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    allowedEquityTagOptions?: Array<CodeValueData>;
    /**
     * 
     * @type {Array<CodeValueData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    allowedIncomeTagOptions?: Array<CodeValueData>;
    /**
     * 
     * @type {Array<CodeValueData>}
     * @memberof GetGLAccountsTemplateResponse
     */
    allowedExpensesTagOptions?: Array<CodeValueData>;
}
