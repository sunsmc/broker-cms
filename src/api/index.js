import request from '../utils/request';

export const server="http://39.103.184.198:8888";
// export const server = "http://localhost:8888";

export const treeInvoke = phone => {
    return request({
        url: server + '/broker/tree/' + phone,
        method: 'get'
    });
};

export const fetchData = query => {
    return request({
        url: server + '/broker/list',
        method: 'get',
        params: query
    });
};

export const registerData = param => {
    return request({
        url: server + '/broker/register',
        method: 'post',
        data: param
    });
};

export const login = param => {
    return request({
        url: server + '/broker/login',
        method: 'post',
        params: param
    });
};

export const getUserInfo = phone => {
    return request({
        url: server + '/broker/' + phone,
        method: 'get'
    });
};

export function exportData(phone) {
    return request({
        url: server + '/broker/export/'+phone,
        method: 'get',
        responseType: 'blob'
    });
}