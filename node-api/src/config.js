"use strict";
var moment = require('moment');
var env = process.env;

exports.port = env.PORT_SERVER || 6091;
exports.domain_sso = env.DOMAIN_SSO || 'https://xxx.onelogin.com/oidc/2';
exports.oidc_client_id = env.OIDC_CLIENT_ID || 'YOUR_CLIENT_ID';
exports.oidc_client_secret = env.OIDC_CLIENT_SECRET || 'YOUT_CLIENT_SECRET';

exports.now = moment();
exports.now_log = moment().local().format('YYYY-MM-DD HH:mm:ss');
