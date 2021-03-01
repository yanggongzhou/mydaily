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
  const _instance = axios.create({
    baseURL: _url,
    timeout: 10000,
    headers: {
      'Content-Type': "application/json;charset=utf-8"
    }
  });
  _instance.interceptors.response.use(prevHandler, prevErrHandler);
  _instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  return _instance;
}
let _apiUrl = 'http://127.0.0.1:3000';
const apiInstance = createAxios(_apiUrl);
export default  {
  uploadUrl: _apiUrl + "/common_server/client/upload",
  loginIn: (params) => apiInstance.post(`/web/login`, params),
  SearchList: (params)=> apiInstance.get(`/web/searchList`,{params:params}),

  getJsonList: (params) => apiInstance.get(`/web/getJsonList`, {params:params}),
  // 智能导购平台接口
  // 验证该用户是否存在
  judgeUsers: (params) => apiInstance.post(`/user_server/client/get_user_details`, params),
  getCaptcha: (params) => apiInstance.post(`/common_server/client/get_captcha`, params),
  // 忘记密码
  forgetPsw: (params) => apiInstance.post(`/guide_shopping/client/forget_password`, params),
  // 获取剧本列表
  getAllScripts: (params) => apiInstance.post(`/guide_shopping/client/get_guide_shopping`, params),
  // 添加剧本
  addScript: (param) => apiInstance.post(`/guide_shopping/client/add_guide_shopping`, param),
  // 编辑剧本
  editScript: (param) => apiInstance.post(`/guide_shopping/client/edit_guide_shopping`, param),
  // 删除剧本
  delScript: (param) => apiInstance.post(`/guide_shopping/client/delete_guide_shopping`, param),
  // 获取商品出现次数
  getScriptIdInChat: (param) => apiInstance.post(`/guide_shopping/client/get_commodity_count`, param),
  // 获取装扮
  getWidgetApi: (params)=>apiInstance.post(`/guide_shopping/client/get_style`,params),
  // 新增装扮
  addWidgetApi: (params)=>apiInstance.post(`/guide_shopping/client/add_style`,params),
  // 编辑装扮
  editWidgetApi: (params)=>apiInstance.post(`/guide_shopping/client/edit_style`,params),

}

