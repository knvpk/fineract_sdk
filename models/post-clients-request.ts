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


import { PostClientsRequestClientNonPersonDetails } from './post-clients-request-client-non-person-details';

/**
 * PostClientsRequest
 * @export
 * @interface PostClientsRequest
 */
export interface PostClientsRequest {
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    officeId?: number;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    fullname?: string;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    groupId?: number;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    dateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    locale?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PostClientsRequest
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    activationDate?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostClientsRequest
     */
    address?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    dateOfBirth?: string;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    middlename?: string;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    legalFormId?: number;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    mobileNo?: string;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    submittedOnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof PostClientsRequest
     */
    externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    staffId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    genederId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    clientClassificationId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    clientTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostClientsRequest
     */
    savingsProductId?: number;
    /**
     * 
     * @type {PostClientsRequestClientNonPersonDetails}
     * @memberof PostClientsRequest
     */
    clientNonPersonDetails?: PostClientsRequestClientNonPersonDetails;
}


