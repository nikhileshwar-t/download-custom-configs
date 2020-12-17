const axios = require('axios');

const fetch = (tenantDetails,body , url) => {
let config = {
  method: 'post',
  url: tenantDetails.url+'/api/configurationservice/get',
  url: `${tenantDetails.url+url}`,
  headers: {
    'x-rdp-version': '8.1',
    'x-rdp-clientId': 'rdpclient',
    'x-rdp-tenantId': tenantDetails.tenantId,
    'x-rdp-ownershipData': 'Nike',
    'x-rdp-userId': tenantDetails.userId,
    'x-rdp-userName': 'Maryj',
    'x-rdp-firstName': 'Mary',
    'x-rdp-lastName': 'Jane',
    'x-rdp-userEmail': 'mary.jane@riversand.com',
    'x-rdp-userRoles': tenantDetails.userRoles,
    'Content-Type': 'application/json',
    'auth-client-id': tenantDetails.clientId,
    'auth-client-secret': tenantDetails.clientSecret
},
  data : body
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
    fetch : fetch
}