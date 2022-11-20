# node
1. $ npm install
2. edit domain ,client_id and client_secret  file : src/config.js
3. run test    
   $ node src/index.js
   
## curl test call function
curl --location --request POST 'http://localhost:6091/account/profile/info' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN
