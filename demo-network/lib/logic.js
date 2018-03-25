'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.biznet.SetAssetValue} SetAssetValue
 * @transaction
 */
function set_certi(QueryAssetValue,json_input) {
    QueryAssetValue.input.id = '1';
    QueryAssetValue.input.name_cert = json_input[ 'name' ];
    QueryAssetValue.input.start_date = json_input[ 'date' ];
    QueryAssetValue.input.expire_date = json_input[ 'expire' ];
    QueryAssetValue.input.bywhom = json_input[ 'by' ];
    QueryAssetValue.input.forwhom = json_input[ 'for'  ];
    
    return getAssetRegistry('org.acme.biznet.Certi_Asset')
        .then(  function (assetRegistry) {
            return assetRegistry.update(QueryAssetValue.input);
        });
}