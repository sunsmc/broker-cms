import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: 'http://localhost:8888/broker/list',
        method: 'get',
        params: query
    });
};

export const registerData = param => {
    return request({
        url: 'http://localhost:8888/broker/register',
        method: 'post',
        params: param
    });
};

export const login = param => {
    return request({
        url: 'http://localhost:8888/broker/login',
        method: 'post',
        params: param
    });
};

export const getUserInfo = phone => {
    return request({
        url: 'http://localhost:8888/broker/'+phone,
        method: 'get'
    });
};

export function exportData() {
    return request({
        url: 'http://localhost:8888/broker/export',
        method: 'get',
        responseType: 'blob'
    });
}