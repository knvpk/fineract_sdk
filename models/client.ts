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


import { Group } from './group';
import { Image } from './image';
import { Office } from './office';
import { Staff } from './staff';

/**
 * 
 * @export
 * @interface Client
 */
export interface Client {
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    id?: number;
    /**
     * 
     * @type {Office}
     * @memberof Client
     */
    office?: Office;
    /**
     * 
     * @type {Office}
     * @memberof Client
     */
    transferToOffice?: Office;
    /**
     * 
     * @type {Image}
     * @memberof Client
     */
    image?: Image;
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    middlename?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    mobileNo?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    externalId?: string;
    /**
     * 
     * @type {Staff}
     * @memberof Client
     */
    staff?: Staff;
    /**
     * 
     * @type {Set<Group>}
     * @memberof Client
     */
    groups?: Set<Group>;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    accountNumberRequiresAutoGeneration?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    closureDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    withdrawalDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    submittedOnDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    legalForm?: number;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    reopenedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    proposedTransferDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    rejected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    pending?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    notActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    activationLocalDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    transferInProgress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    transferOnHold?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    officeJoiningLocalDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    withdrawn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    transferInProgressOrOnHold?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    notPending?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    notStaff?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    rejectedDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    closed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Client
     */
    _new?: boolean;
}

