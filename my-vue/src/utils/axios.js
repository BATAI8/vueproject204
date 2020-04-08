import Axios from 'axios'
// axios的封装
export default {
  get: (param) => {
    Axios({
      url: param.url,
      method: param.method
    }).then(function (res) {
      param.callback(res)
    })
  }
}
