<template>
  <div class="about">
    <h1>This is a login-protected page</h1>
    <ul class="claims">
      <li v-for="c in claims" :key="c.key">
        <strong>{{ c.key }}</strong
        >: {{ c.value }}
      </li>
    </ul>
   <h2>Call API with Axios </h2>
    <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" @click="getUserInfo()" href="#">
                  GetUserInfo
                </a>
              </li>
      </ul>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">API</h1>
            </div>
            <pre id="resultsApi"></pre>

            <br>

            <h2>Information of Token</h2>
            <div class="table-responsive">
              <pre id="resultsToken"></pre>
            </div>
          </main>
  </div>
  
</template>
<script>
import Api from '../service/ApiService'
export default {
  data () {
    return {
      api: new Api()
    }
  },
  computed: {
    user() {
      return { ...this.$oidc.userProfile, accessToken: this.$oidc.accessToken }
    },
    claims() {
      if (this.user) {
        return Object.keys(this.user).map(key => ({
          key,
          value: this.user[key]
        }))
      }
      return []
    }
  },
  methods: {
    async getUserInfo(){
      let self = this
      let result = await this.api.getUserInfo(this.$oidc.accessToken)
      self.logApi(result)
    },
    logApi(){
      document.getElementById('resultsApi').innerText = ''

      Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
          msg = 'Error: ' + msg.message
        } else if (typeof msg !== 'string') {
          msg = JSON.stringify(msg, null, 2)
        }
        document.getElementById('resultsApi').innerHTML += msg + '\r\n'
      })
    },
  }
}
</script>
<style>
.claims {
  list-style: none;
  text-align: left;
}
</style>
