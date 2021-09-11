let patches = [];

let userPatches = [
    {
        "op": "replace",
        "path": "/paths/~1users/get/operationId",
        "value": "retrieveUsers"
    },
    {
        "op": "replace",
        "path": "/paths/~1users/post/operationId",
        "value": "createUser"
    },
    {
        "op": "replace",
        "path": "/paths/~1users~1{userId}/get/operationId",
        "value": "retrieveUser"
    },
    {
        "op": "replace",
        "path": "/paths/~1users~1{userId}/put/operationId",
        "value": "updateUser"
    },
    {
        "op": "replace",
        "path": "/paths/~1users~1{userId}/delete/operationId",
        "value": "deleteUser"
    },
    {
        "op": "replace",
        "path": "/paths/~1users~1downloadtemplate/get/operationId",
        "value": "downloadUserTemplate"
    },
    {
        "op": "replace",
        "path": "/paths/~1users~1template/get/operationId",
        "value": "getUserTemplate"
    },
    {
        "op": "replace",
        "path": "/components/schemas/PostUsersRequest/properties/roles",
        "value": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
];

let authPatches = [
    {
        "op": "replace",
        "path": "/paths/~1authentication/post/requestBody/content/application~1json/schema",
        "value": {
            "type": "object",
            "properties": {
                "username": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
            },
            "required": [
                "username",
                "password"
            ]
        }
    }
]

let currencyPatches = [
    {
        "op": "replace",
        "path": "/components/schemas/PutCurrenciesRequest/properties/currencies",
        "value": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
];

let paymentTypePatches = [
    {
        "op": "replace",
        "path": "/paths/~1paymenttypes/get/operationId",
        "value": "retrievePaymentTypes" //getAllPaymentTypes
    },
    {
        "op": "replace",
        "path": "/paths/~1paymenttypes~1{paymentTypeId}/get/operationId",
        "value": "retrievePaymentType" //retrieveOnePaymentType
    },
    {
        "op": "replace",
        "path": "/paths/~1paymenttypes~1{paymentTypeId}/delete/operationId",
        "value": "deletePaymentType" //deleteCode_1
    }
];

let reportPatches = [
    {
        "op": "replace",
        "path": "/paths/~1reports~1template/get/operationId",
        "value": "retrieveReportTemplate"
    },
];

let officePatches = [
    {
        "op": "replace",
        "path": "/paths/~1offices~1template/get/operationId",
        "value": "retrieveOfficeTemplate"
    },
]

let financialActivityPatches = [
    {
        "op": "replace",
        "path": "/paths/~1financialactivityaccounts/get/operationId",
        "value": "retrieveFinancialActivities" //retrieveAll
    },
    {
        "op": "replace",
        "path": "/paths/~1financialactivityaccounts/post/operationId",
        "value": "createFinancialActivity"
    },
    {
        "op": "replace",
        "path": "/paths/~1financialactivityaccounts~1{mappingId}/get/operationId",
        "value": "retrieveFinancialActivity" //retreive
    },
    {
        "op": "replace",
        "path": "/paths/~1financialactivityaccounts~1{mappingId}/put/operationId",
        "value": "updateFinancialActivity"
    },
    {
        "op": "replace",
        "path": "/paths/~1financialactivityaccounts~1{mappingId}/delete/operationId",
        "value": "deleteFinancialActivity"
    },
    {
        "op": "replace",
        "path": "/paths/~1financialactivityaccounts~1template/get/operationId",
        "value": "retriveFinancialActivityTemplate"//retrieveTemplate
    },
];

let glAccountPatches = [
    {
        "op": "replace",
        "path": "/paths/~1glaccounts/post/operationId",
        "value": "createGLAccount"
    },

    {
        "op": "replace",
        "path": "/paths/~1glaccounts~1{glAccountId}/put/operationId",
        "value": "updateGLAccount"
    },

    {
        "op": "replace",
        "path": "/paths/~1glaccounts~1{glAccountId}/delete/operationId",
        "value": "deleteGLAccount"
    },
    {
        "op": "replace",
        "path": "/paths/~1glaccounts~1template/get/operationId",
        "value": "retriveGLAccountTemplate"
    },
    {
        "op": "replace",
        "path": "/components/schemas/PostGLAccountsRequest/properties/usage",
        "value": {
            "type": "integer",
            "format": "int64",
            "example": 1
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PutGLAccountsRequest/properties",
        "value": {
            "name": {
                "type": "string",
                "example": "Cash at Bangalore"
            },
            "glCode": {
                "type": "string",
                "example": "100001"
            },
            "manualEntriesAllowed": {
                "type": "boolean",
                "example": true
            },
            "type": {
                "type": "string",
                "example": "1"
            },
            "tagId": {
                "type": "string",
                "example": "10"
            },
            "parentId": {
                "type": "integer",
                "format": "int64",
                "example": 1
            },
            "usage": {
                "$ref": "#/components/schemas/EnumOptionData"
            },
            "description": {
                "type": "string",
                "example": "Desc"
            }
        }
    },

]

//SavingsProduct create related fields

let savingsProductPatchesAuto = ["savingsReferenceAccountId", "savingsControlAccountId", "interestOnSavingsAccountId", "incomeFromFeeAccountId", "transfersInSuspenseAccountId", "incomeFromPenaltyAccountId", "incomeFromInterestId", "overdraftPortfolioControlId", "writeOffAccountId"]
    .map(field => {
        return {
            "op": "add",
            "path": `/components/schemas/PostSavingsProductsRequest/properties/${field}`,
            "value": {
                "type": "integer",
                "format": "int64",
                "example": 1
            }
        }
    })

let savingsProductPatches = [
    {
        "op": "replace",
        "path": "/paths/~1savingsproducts/get/operationId",
        "value": "retrieveSavingsProducts"
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsproducts/post/operationId",
        "value": "createSavingsProduct"
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsproducts~1{productId}/get/operationId",
        "value": "retrieveSavingsProduct"
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsproducts~1{productId}/put/operationId",
        "value": "updateSavingsProduct"
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsproducts~1{productId}/delete/operationId",
        "value": "deleteSavingsProduct"
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsproducts~1template/get/operationId",
        "value": "retriveSavingsProductTemplate"
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/minRequiredOpeningBalance`,
        "value": {
            "type": "number",
            "format": "double",
            "example": 50.0
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/lockinPeriodFrequency`,
        "value": {
            "type": "integer",
            "format": "int64",
            "example": 1
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/lockinPeriodFrequencyType`,
        "value": {
            "type": "integer",
            "format": "int64",
            "example": 1
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/withdrawalFeeForTransfers`,
        "value": {
            "type": "boolean",
            "example": false
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/paymentChannelToFundSourceMappings`,
        "value": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/feeToIncomeAccountMappings`,
        "value": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/penaltyToIncomeAccountMappings`,
        "value": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/allowOverdraft`,
        "value": {
            "type": "boolean",
            "example": false
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/overdraftLimit`,
        "value": {
            "type": "number",
            "format": "double",
            "example": 50.0
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/minBalanceForInterestCalculation`,
        "value": {
            "type": "number",
            "format": "double",
            "example": 50.0
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/withHoldTax`,
        "value": {
            "type": "number",
            "format": "double",
            "example": 50.0
        }
    },
    {
        "op": "add",
        "path": `/components/schemas/PostSavingsProductsRequest/properties/taxGroupId`,
        "value": {
            "type": "integer",
            "format": "int64",
            "example": 1
        }
    },
];

let clientPatches = [
    {
        "op": "replace",
        "path": "/paths/~1clients/get/operationId",
        "value": "retrieveClients" //retrieveAll_21
    },
    {
        "op": "replace",
        "path": "/paths/~1clients/post/operationId",
        "value": "createClient" //create_6
    },
    {
        "op": "replace",
        "path": "/paths/~1clients~1template/get/operationId",
        "value": "retrieveClientTemplate" //retrieveTemplate_5
    },
    {
        "op": "replace",
        "path": "/paths/~1clients~1{clientId}/get/operationId",
        "value": "retrieveClient" //retrieveOne_11
    },
    {
        "op": "replace",
        "path": "/paths/~1clients~1{clientId}/put/operationId",
        "value": "updateClient" //update_10
    },
    {
        "op": "replace",
        "path": "/paths/~1clients~1{clientId}/delete/operationId",
        "value": "deleteClient" //delete_9
    },
    {
        "op": "replace",
        "path": "/paths/~1clients~1{clientId}/post/operationId",
        "value": "manageClient" //activate_1
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/address",
        "value": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/dateOfBirth",
        "value": {
            "type": "string",
            "format": "date"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/firstname",
        "value": {
            "type": "string",
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/lastname",
        "value": {
            "type": "string",
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/middlename",
        "value": {
            "type": "string",
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/legalFormId",
        "value": {
            "type": "integer",
            "format": "int64"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/mobileNo",
        "value": {
            "type": "string",
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/submittedOnDate",
        "value": {
            "type": "string",
            "format": "date"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/externalId",
        "value": {
            "type": "string",
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/staffId",
        "value": {
            "type": "integer",
            "format": "int64"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/genderId",
        "value": {
            "type": "integer",
            "format": "int64"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/clientClassificationId",
        "value": {
            "type": "integer",
            "format": "int64"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/clientTypeId",
        "value": {
            "type": "integer",
            "format": "int64"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/savingsProductId",
        "value": {
            "type": "integer",
            "format": "int64"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostClientsRequest/properties/clientNonPersonDetails",
        "value": {
            "type": "object",
            "properties": {
                "incorpNumber": {
                    "type": "string"
                },
                "remarks": {
                    "type": "string"
                },
                "constitutionId": {
                    "type": "integer",
                    "format": "int64"
                },
                "incorpValidityTillDate": {
                    "type": "string",
                    "format": "date"
                },
                "mainBusinessLineId": {
                    "type": "integer",
                    "format": "int64"
                },
                "locale": {
                    "type": "string"
                },
                "dateFormat": {
                    "type": "string",
                    "example": "dd MMMM yyyy"
                }
            }
        }
    },
];

let codeValuePatches = [
    {
        "op": "add",
        "path": "/components/schemas/PostCodeValuesDataRequest/properties/isActive",
        "value": {
            "type": "boolean",
            "example": true
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PutCodeValuesDataRequest/properties/isActive",
        "value": {
            "type": "boolean",
            "example": true
        }
    }
];

let savingsAccountPatches = [
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1onholdtransactions/get/operationId",
        "value": "retrieveSavingsAccountOnHoldTrans" //retrieveAll_28
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts/get/operationId",
        "value": "retrieveSavingsAccounts" //retrieveAll_33
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts/post/operationId",
        "value": "submitSavingsAccountsApplication" //submitApplication_2
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1template/get/operationId",
        "value": "getSavingsAccountTemplate" //template_14
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{accountId}/get/operationId",
        "value": "retrieveSavingsAccount" //retrieveOne_24
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{accountId}/put/operationId",
        "value": "updateSavingsAccount" //update_19
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{accountId}/post/operationId",
        "value": "manageSavingsAccount" //handleCommands_6
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{accountId}/delete/operationId",
        "value": "deleteSavingsAccount" //delete_18
    },
    {
        "op": "add",
        "path": "/components/schemas/PostSavingsAccountsRequest/properties/externalId",
        "value": {
            "type": "string"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostSavingsAccountsAccountIdRequest/properties/note",
        "value": {
            "type": "string"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostSavingsAccountsAccountIdRequest/properties/approvedOnDate",
        "value": {
            "type": "string",
            "format": "date"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/PostSavingsAccountsAccountIdRequest/properties/activatedOnDate",
        "value": {
            "type": "string",
            "format": "date"
        }
    },
];

let savingsAccountTransactionPatches = [
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1transactions/post/operationId",
        "value": "manageSavingsAccountTran" // transaction_2
    },
    {
        "op": "add",
        "path": "/components/schemas/ManageSavingsAccountsTransaction",
        "value": {
            "type": "object",
            "properties": {
                "dateFormat": {
                    "type": "string",
                    "example": "dd MMMM yyyy"
                },
                "locale": {
                    "type": "string",
                    "example": "en"
                },
                "transactionDate": {
                    "type": "string",
                    "format": "date",
                    "example": "05 September 2014"
                },
                "transactionAmount": {
                    "type": "string",
                },
                "routingCode": {
                    "type": "string",
                },
                "receiptNumber": {
                    "type": "string",
                },
                "paymentTypeId": {
                    "type": "int",
                    "format": "int64"
                },
                "note": {
                    "type": "string",
                },
                "checkNumber": {
                    "type": "string",
                },
                "bankNumber": {
                    "type": "string",
                },
                "accountNumber": {
                    "type": "string",
                },
            },
            "description": "ManageSavingsAccountsTransaction"
        }
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1transactions/post/requestBody/content/application~1json/schema",
        "value": {
            "$ref": "#/components/schemas/ManageSavingsAccountsTransaction"
        }
    },
    {
        "op": "add",
        "path": "/components/schemas/ManageSavingsAccountsTransactionResponse",
        "value": {
            "type": "object",
            "properties": {

                "officeId": {
                    "type": "int",
                    "format": "int64"
                },
                "clientId": {
                    "type": "int",
                    "format": "int64"
                },
                "savingsId": {
                    "type": "int",
                    "format": "int64"
                },
                "resourceId": {
                    "type": "int",
                    "format": "int64"
                },

            },
            "description": "ManageSavingsAccountsTransactionResponse"
        }
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1transactions/post/responses/default/content/application~1json/schema",
        "value": {
            "$ref": "#/components/schemas/ManageSavingsAccountsTransactionResponse"
        }
    },
    //Just alias
    // {
    //     "op": "add",
    //     "path": "/components/schemas/SavingsAccountsTransactionData",
    //     "value": {
    //         "$ref": "#/components/schemas/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse"
    //     }
    // },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1transactions~1{transactionId}/get/operationId",
        "value": "retrieveSavingsAccountTransaction" //retrieveOne_23
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1transactions~1{transactionId}/get/responses/default/content/application~1json/schema",
        "value": {
            "$ref": "#/components/schemas/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse"
        }
    },
    {
        "op": "replace",
        "path": "/paths/~1savingsaccounts~1{savingsId}~1transactions~1{transactionId}/post/operationId",
        "value": "adjustSavingsAccountTransaction" //adjustTransaction_1
    },
];

let accountTransferPatches = [
    {
        "op": "replace",
        "path": "/paths/~1accounttransfers/get/operationId",
        "value": "retrieveAccountTransfers" //retrieveAll_18
    },
    {
        "op": "replace",
        "path": "/paths/~1accounttransfers/post/operationId",
        "value": "createAccountTransfer" //create_4
    },
    {
        "op": "replace",
        "path": "/paths/~1accounttransfers~1{transferId}/get/operationId",
        "value": "retrieveAccountTransfer" //retrieveOne_9
    },
    {
        "op": "replace",
        "path": "/paths/~1accounttransfers~1template/get/operationId",
        "value": "retrieveAccountTransferTemplate" //template_5
    },
    {
        "op": "replace",
        "path": "/paths/~1accounttransfers~1template/get/operationId",
        "value": "retrieveAccountTransferTemplate" //template_5
    }
];

patches = [
    ...userPatches,
    ...authPatches,
    ...currencyPatches,
    ...paymentTypePatches,
    ...reportPatches,
    ...officePatches,
    ...financialActivityPatches,
    ...glAccountPatches,
    ...savingsProductPatches,
    ...savingsProductPatchesAuto,
    ...clientPatches,
    ...codeValuePatches,
    ...savingsAccountPatches,
    ...savingsAccountTransactionPatches,
    ...accountTransferPatches
]

module.exports = patches;