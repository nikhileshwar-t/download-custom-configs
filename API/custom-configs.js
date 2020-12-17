const configAPI = require('../API/configAPI')
const customConfigs = (app) => {
    app.post('/custom-configs/get' , async(req  , res) => {
        let tenantDetails = req.body.params.tenantDetails
        let configs=req.body.params.configs
        for (const x of configs) {
            console.log(x)
        }
let data = JSON.stringify({ "params": { "query": { "contexts": [{}], "filters": { "typesCriterion": ["integrationProfile"] } }, "allContextual": true, "fields": { "properties": ["_ALL"], "attributes": ["_ALL"], "relationships": ["_ALL"] } } });
 
        // configAPI.configAPI(tenantDetails,data)
        // res.send(JSON.stringify(tenantDetails));
    })
}

module.exports = {
    getConfigs : customConfigs
}