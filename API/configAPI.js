const fetch = (tenantDetails,body) => {
var axios = require('axios');
var data = JSON.stringify({ "params": { "query": { "contexts": [{}], "filters": { "typesCriterion": ["integrationProfile"] } }, "allContextual": true, "fields": { "properties": ["_ALL"], "attributes": ["_ALL"], "relationships": ["_ALL"] } } });
var headers = tenantDetails;
var config = {
  method: 'post',
  url: tenantName+'/api/configurationservice/get',
  headers: { 
    
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data,null, 4));
})
.catch(function (error) {
  console.log(error);
});


}

module.exports = {
    configAPI : fetch
}