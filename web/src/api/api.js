import axios from 'axios'
const prevHandler = ({data}) => {
  // if (data.return_code!==1000) {
  //   Message.error("系统异常！")
  // }
  return data
};
const prevErrHandler = ({response}) => {
  switch (response.status) {
    case 404:
      break;
    case 401:
      location.reload();
      break;
    case 500:
      break;
    default:
  }
  throw new Error('系统异常');
};

export const createAxios = (_url) => {
  const instance = axios.create({
    baseURL: _url,
    timeout: 10000,
    headers: {
      'Content-Type': "application/json;charset=utf-8"
    }
  });
  instance.interceptors.response.use(prevHandler, prevErrHandler);
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  return instance;
}
let _apiUrl = 'http://127.0.0.1:3000';
const apiInstance = createAxios(_apiUrl);
export default  {
  uploadUrl: _apiUrl + "/common_server/client/upload",
  loginIn: (params) => apiInstance.post(`/web/login`, params),
  SearchList: (params)=> apiInstance.get(`/web/searchList`,{params:params}),
  ProgramList: (params) => apiInstance.get(`/web/programList`,{params:params}),
  getJsonList: (params) => apiInstance.get(`/web/getJsonList`, {params:params}),

}

