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


import { AppUserClientMapping } from './app-user-client-mapping';
import { GrantedAuthority } from './granted-authority';
import { Office } from './office';
import { Role } from './role';
import { Staff } from './staff';

/**
 * 
 * @export
 * @interface AppUser
 */
export interface AppUser {
    /**
     * 
     * @type {number}
     * @memberof AppUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    password?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    accountNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    accountNonLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    credentialsNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    deleted?: boolean;
    /**
     * 
     * @type {Office}
     * @memberof AppUser
     */
    office?: Office;
    /**
     * 
     * @type {Staff}
     * @memberof AppUser
     */
    staff?: Staff;
    /**
     * 
     * @type {Set<Role>}
     * @memberof AppUser
     */
    roles?: Set<Role>;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    lastTimePasswordUpdated?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    passwordNeverExpires?: boolean;
    /**
     * 
     * @type {Set<AppUserClientMapping>}
     * @memberof AppUser
     */
    appUserClientMappings?: Set<AppUserClientMapping>;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    displayName?: string;
    /**
     * 
     * @type {Array<GrantedAuthority>}
     * @memberof AppUser
     */
    authorities?: Array<GrantedAuthority>;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    selfServiceUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    systemUser?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppUser
     */
    staffId?: number;
    /**
     * 
     * @type {string}
     * @memberof AppUser
     */
    staffDisplayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    notEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppUser
     */
    _new?: boolean;
}

