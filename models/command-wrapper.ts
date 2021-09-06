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



/**
 * 
 * @export
 * @interface CommandWrapper
 */
export interface CommandWrapper {
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    groupId?: number;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    clientId?: number;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    loanId?: number;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    savingsId?: number;
    /**
     * 
     * @type {string}
     * @memberof CommandWrapper
     */
    entityName?: string;
    /**
     * 
     * @type {string}
     * @memberof CommandWrapper
     */
    taskPermissionName?: string;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    entityId?: number;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    subentityId?: number;
    /**
     * 
     * @type {string}
     * @memberof CommandWrapper
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof CommandWrapper
     */
    json?: string;
    /**
     * 
     * @type {string}
     * @memberof CommandWrapper
     */
    transactionId?: string;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    productId?: number;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    creditBureauId?: number;
    /**
     * 
     * @type {number}
     * @memberof CommandWrapper
     */
    organisationCreditBureauId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    update?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    create?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    createDatatable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    deleteDatatable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    updateDatatable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    datatableResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    deleteOneToOne?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    deleteMultiple?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    updateOneToOne?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    updateMultiple?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    registerDatatable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    noteResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    cacheResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    updateOperation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    _delete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    deleteOperation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    surveyResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    registerSurvey?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    fullFilSurvey?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    workingDaysResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    passwordPreferencesResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    permissionResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    userResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    currencyResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    loanDisburseDetailResource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandWrapper
     */
    updateDisbursementDate?: boolean;
}
