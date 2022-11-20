import { User } from 'oidc-client'
import Vue from 'vue'
import { createOidcAuth, SignInType, LogLevel } from 'vue-oidc-client/vue2'

const loco = window.location
const appRootUrl = `${loco.protocol}//${loco.host}/`

const idsrvAuth = createOidcAuth(
  'main',
  SignInType.Window,
  appRootUrl,
  {
    authority: 'YOUR_OIDC_DOMAIN',//https://xxx.onelogin.com/oidc/2
    client_id: 'YOUR_CLINET_ID',
    client_secret : 'YOUR_CLIENT_SECRET',
    response_type: 'code',
    scope: 'openid profile email',
    prompt: 'login'
  },
  console,
  LogLevel.Debug
)

// handle events
idsrvAuth.events.addAccessTokenExpiring(function() {
  // eslint-disable-next-line no-console
  console.log('access token expiring')
})

idsrvAuth.events.addAccessTokenExpired(function() {
  // eslint-disable-next-line no-console
  console.log('access token expired')
})

idsrvAuth.events.addSilentRenewError(function(err) {
  // eslint-disable-next-line no-console
  console.error('silent renew error', err)
})

idsrvAuth.events.addUserLoaded(function(user) {
  // eslint-disable-next-line no-console
  console.log('user loaded', user)
})

idsrvAuth.events.addUserUnloaded(function() {
  // eslint-disable-next-line no-console
  console.log('user unloaded')
})

idsrvAuth.events.addUserSignedOut(function() {
  // eslint-disable-next-line no-console
  console.log('user signed out')
})

idsrvAuth.events.addUserSessionChanged(function() {
  // eslint-disable-next-line no-console
  console.log('user session changed')
})
idsrvAuth
// a little something extra
Vue.prototype.$oidc = idsrvAuth

export default idsrvAuth
