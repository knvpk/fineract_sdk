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
 * PostStandingInstructionsRequest
 * @export
 * @interface PostStandingInstructionsRequest
 */
export interface PostStandingInstructionsRequest {
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    fromOfficeId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    fromClientId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    fromAccountType?: number;
    /**
     * 
     * @type {string}
     * @memberof PostStandingInstructionsRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    transferType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    priority?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    status?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    fromAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    toOfficeId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    toClientId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    toAccountType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    toAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    instructionType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof PostStandingInstructionsRequest
     */
    validFrom?: string;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    recurrenceType?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    recurrenceInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof PostStandingInstructionsRequest
     */
    recurrenceFrequency?: number;
    /**
     * en
     * @type {string}
     * @memberof PostStandingInstructionsRequest
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof PostStandingInstructionsRequest
     */
    dateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof PostStandingInstructionsRequest
     */
    recurrenceOnMonthDay?: string;
    /**
     * 
     * @type {string}
     * @memberof PostStandingInstructionsRequest
     */
    monthDayFormat?: string;
}


