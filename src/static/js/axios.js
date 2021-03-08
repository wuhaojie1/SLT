import axios from 'axios';
import api from './api';
import localStorage from '../js/localStorage';

let isLogin = localStorage.get('isLogin');
// console.log(isLogin)
// 参数
// 请求头
const formatHeaders = (acHeaders) => {
    let headers = {};
    headers['Content-type'] = 'application/json';
    headers["token"] = localStorage.get("token");

    if (acHeaders) {
        headers = {...headers, ...acHeaders};
    }
    return headers;
};
const http = ({
                  url, headers, params, method, responseType
              }) => {
    // debugger
    // let timestamp = (new Date()).valueOf();
    let prefix = '';
    prefix = api.commApi;
    return new Promise((resolve, reject) => {
        if (isLogin) {
            axios({
                // url: `${prefix}/${url}?&&t=${timestamp}`, //
                url: `${prefix}/${url}`, //
                headers: formatHeaders(headers),
                // data: formatParams(params),
                data: params,
                method: method || 'post',
                responseType: responseType || '',
            }).then((data) => {
                // debugger
                // console.log(data)
                resolve(data.data);
            }).catch((err) => {
                reject(err);
                // throw new Error(`Error:${err}`);
            });
        }
    });

};
export default http;
