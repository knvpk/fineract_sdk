let patches = [];

let userPatches = [
    {
        "op": "replace",
        "path": "/paths/~1users/get/operationId",
        "value": "retrieveAllUsers"
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
        "path": "/paths/~1paymenttypes~1{paymentTypeId}/delete/operationId",
        "value": "deletePaymentType"
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
        "path": "/paths/~1financialactivityaccounts/post/operationId",
        "value": "createFinancialActivity"
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

let savingsProductPatchesAuto = ["savingsReferenceAccountId", "savingsControlAccountId", "interestOnSavingsAccountId", "incomeFromFeeAccountId", "transfersInSuspenseAccountId", "incomeFromPenaltyAccountId"]
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
]

module.exports = patches;