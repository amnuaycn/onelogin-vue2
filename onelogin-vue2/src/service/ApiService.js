/* eslint-disable */
import axios from 'axios'

const baseUrl = 'http://localhost:6091';

export default class ApiService {

  async getUserInfo(accessToken){
   
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
    return axios
      .post(baseUrl+'/account/profile/info')
      .then(response => response.data)
      .catch(err => {
        console.log(err);
      })
  }
}

