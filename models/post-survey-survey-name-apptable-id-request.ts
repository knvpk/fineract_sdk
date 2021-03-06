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
 * PostSurveySurveyNameApptableIdRequest
 * @export
 * @interface PostSurveySurveyNameApptableIdRequest
 */
export interface PostSurveySurveyNameApptableIdRequest {
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_household_members_cd_q1_householdmembers?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_highestschool_cd_q2_highestschool?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_businessoccupation_cd_q3_businessoccupation?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_habitablerooms_cd_q4_habitablerooms?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_floortype_cd_q5_floortype?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_lightingsource_cd_q6_lightingsource?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_irons_cd_q7_irons?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_mosquitonets_cd_q8_mosquitonets?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_towels_cd_q9_towels?: number;
    /**
     * 
     * @type {number}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    ppi_fryingpans_cd_q10_fryingpans?: number;
    /**
     * 
     * @type {string}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    Date?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    dateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof PostSurveySurveyNameApptableIdRequest
     */
    locale?: string;
}


