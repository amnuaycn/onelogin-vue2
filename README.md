# onelogin-vue2
### Config OIDC file:  onelogin-vue2/onelogin-vue2/src/service/idsrvAuth.js
```
 appRootUrl,
  {
    authority: 'YOUR_OIDC_DOMAIN',//https://xxx.onelogin.com/oidc/2
    client_id: 'YOUR_CLINET_ID',
    client_secret : 'YOUR_CLIENT_SECRET',
    response_type: 'code',
    scope: 'openid profile email',
    prompt: 'login'
  },
  
 ```
 
### Config API file:  onelogin-vue2/onelogin-vue2/src/service/ApiService.js
```
const baseUrl = 'http://localhost:6091';
 ```
 
# node-api
### Config  file: onelogin-vue2/node-api/src/config.js 
```
exports.port = env.PORT_SERVER || 6091;
exports.domain_sso = env.DOMAIN_SSO || 'https://xxx.onelogin.com/oidc/2';
exports.oidc_client_id = env.OIDC_CLIENT_ID || 'YOUR_CLIENT_ID';
exports.oidc_client_secret = env.OIDC_CLIENT_SECRET || 'YOUT_CLIENT_SECRET';
```
