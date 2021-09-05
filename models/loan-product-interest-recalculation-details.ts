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
 * @interface LoanProductInterestRecalculationDetails
 */
export interface LoanProductInterestRecalculationDetails {
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    interestRecalculationCompoundingMethod?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    rescheduleStrategyMethod?: number;
    /**
     * 
     * @type {string}
     * @memberof LoanProductInterestRecalculationDetails
     */
    restFrequencyType?: LoanProductInterestRecalculationDetailsRestFrequencyTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    restInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    restFrequencyNthDay?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    restFrequencyWeekday?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    restFrequencyOnDay?: number;
    /**
     * 
     * @type {string}
     * @memberof LoanProductInterestRecalculationDetails
     */
    compoundingFrequencyType?: LoanProductInterestRecalculationDetailsCompoundingFrequencyTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    compoundingInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    compoundingFrequencyNthDay?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    compoundingFrequencyWeekday?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanProductInterestRecalculationDetails
     */
    compoundingFrequencyOnDay?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LoanProductInterestRecalculationDetails
     */
    isCompoundingToBePostedAsTransaction?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LoanProductInterestRecalculationDetails
     */
    arrearsBasedOnOriginalSchedule?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LoanProductInterestRecalculationDetails
     */
    _new?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum LoanProductInterestRecalculationDetailsRestFrequencyTypeEnum {
    Invalid = 'INVALID',
    SameAsRepaymentPeriod = 'SAME_AS_REPAYMENT_PERIOD',
    Daily = 'DAILY',
    Weekly = 'WEEKLY',
    Monthly = 'MONTHLY'
}
/**
    * @export
    * @enum {string}
    */
export enum LoanProductInterestRecalculationDetailsCompoundingFrequencyTypeEnum {
    Invalid = 'INVALID',
    SameAsRepaymentPeriod = 'SAME_AS_REPAYMENT_PERIOD',
    Daily = 'DAILY',
    Weekly = 'WEEKLY',
    Monthly = 'MONTHLY'
}


