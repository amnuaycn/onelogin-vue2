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

# laravel-api
### Config  file: onelogin-vue2/laravel-api/app/Http/Middleware/OneloginTokenIsValid.php 
```
private $client_id = 'YOUR_CLIENT_ID';
private $client_secret = 'YOUR_CLIENT_SECRET';
private $oidc_enpoint ='https://YOUR_SUBDOMAIN.onelogin.com/oidc/2/token/introspection';
```
 
### api url http://127.0.0.1:8000/api/myapi/userinfo
### onelogin-vue2/laravel-api/routes/api.php
```
Route::post('myapi/userinfo', 'App\Http\Controllers\APIController@userinfo')->middleware(App\Http\Middleware\OneloginTokenIsValid::class);
```
