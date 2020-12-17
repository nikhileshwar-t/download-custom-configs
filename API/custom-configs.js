const configAPI = require('../API/configAPI')
const customConfigs = (app) => {
    app.post('/custom-configs/get' , async(req  , res) => {
        let tenantDetails = req.body.params.tenantDetails
        let configs=req.body.params.configs
        console.clear()
        for (const x of configs) {
            let data = null
            switch (x) {
                case 'graphprocess':
                    data = JSON.stringify({ "params": { "query": { "filters": { "typesCriterion": ["graphprocessmodel"] } }, "fields": { "attributes": ["_ALL"], "relationships": ["_ALL"] } } });
                    configAPI.fetch(tenantDetails , data , '/api/entitymodelservice/get');
                    break;

                case 'profiles':
                    data = JSON.stringify({ "params": { "query": { "contexts": [{}], "filters": { "typesCriterion": ["integrationProfile"] } }, "allContextual": true, "fields": { "properties": ["_ALL"], "attributes": ["_ALL"], "relationships": ["_ALL"] } } });
                    configAPI.fetch(tenantDetails , data , '/api/configurationservice/get')
                    break;

                case 'uiconfigs':
                    data = JSON.stringify({"params":{"query":{"contexts":[{}],"filters":{"typesCriterion":["uiconfig"],"allContextual":true}},"allContextual":true,"fields":{"properties":["_ALL"],"attributes":["_ALL"],"relationships":["_ALL"]}}});
                    configAPI.fetch(tenantDetails , data , '/api/configurationservice/get');
                    break;
            
                default:
                    break;
            }
        }

        res.send("url here");
    })
}

module.exports = {
    getConfigs : customConfigs
}