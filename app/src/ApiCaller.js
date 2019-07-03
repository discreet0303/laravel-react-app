import axios from 'axios';

const HOST = 'http://140.115.51.180:8000';

const defaultInstance = {
    baseURL: HOST,
    timeout: 100000,
}

export default class ApiCaller {
    static getHost() {
        return HOST;
    }

    static get(route, instance = defaultInstance, config = false) {
        const request = axios.create(instance);
        return request.get(route, config);
    }

    static post(route, data, instance = defaultInstance, config = false) {
        const request = axios.create(instance);
        return request.post(route, data, config);
    }
}