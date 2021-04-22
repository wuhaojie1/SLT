import axios from 'axios';
import api from './api';
import localStorage from '../js/localStorage';
const formatHeaders = (acHeaders) => {
    let headers = {};
    headers['Content-type'] = 'application/json';
    headers["X-Litemall-Token"] = localStorage.get("token");
    if (acHeaders) {
        headers = {...headers, ...acHeaders};
    }
    return headers;
};
const http = ({
                  url, headers, params, method, responseType
              }) => {
    let prefix = '';
    prefix = api.commApi;
    let data = method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
    return new Promise((resolve, reject) => {
            axios({
                url: `${prefix}/${url}`, //
                headers: formatHeaders(headers),
                [data]: params,
                method: method || 'post',
                responseType: responseType || '',
            }).then((data) => {
                console.log(data.data)
                if(data.data){
                    if(data.data.errorCode===1000104||String(data.data.errorCode)==='1000104'){
                        localStorage.set('isLogin', false)
                    }else{
                        resolve(data.data);
                    }
                    
                }
                
            }).catch((err) => {
                reject(err);
            });
    });

};
export default http;
