import 'es6-promise';
import fetch from 'isomorphic-fetch';


function req(url,option) {
  return fetch(url,option)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

/**
 * 判断请求是否成功
 * @param resObj
 * @returns {boolean}
 */
export function reqIsSuc(resObj) {
  if(resObj && resObj.status === 200){
    return true;
  }
  return false;
}

export function extractRes(res,defaultData) {
  if(reqIsSuc(res)){
    return res.data;
  }
  return defaultData;
}

export async function formGet(url,params) {
  url = url +'?'+ _objToForm(params);
  let option = {
    method:'GET',
  };
  return await req(url,option);
}

export async function formPost(url,params,headers = {}) {
  let option = {
    method:'POST',
    headers:{
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:_objToForm(params)
  };
  return await req(url,option);
}

export async function formPut(url,params,headers = {}) {
  let option = {
    method:'PUT',
    headers:{
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:_objToForm(params)
  };
  return await req(url,option);
}

export async function formDel(url) {
  let option = {
    method:'DELETE'
  };
  return await req(url,option);
}

/**
 * 将对象转化为表单
 * @param  {object} obj 需要转换的对象
 * @return {string}     表单数据
 */
function _objToForm(obj) {
  if (!obj) return null;
  let keyArr = Object.keys(obj),
    valueArr = Object.values(obj),
    formArr = [];
  for (let i = 0, len = keyArr.length; i < len; i++) {
    formArr.push(encodeURIComponent(keyArr[i]) + '=' + encodeURIComponent(valueArr[i]));
  }
  return formArr.join('&');
}
