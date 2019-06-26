import axios from 'axios';

const HOST = 'http://localhost:8000';

const API_INSTANCE = axios.create({
    baseURL: HOST,
    timeout: 100000,
});

export default class ApiCaller {
    static get(route, instance = API_INSTANCE) {
        return instance.get(route);
    }

    static post(route, data, config, instance = API_INSTANCE) {
        return instance.post(route, data, config);
    }

    // static update(route, data, instance = Api.defaultInstance) {
    //     return instance.update('UPDATE', `${HOST}${route}`);
    // }

    // static delete(route, data, instance = API_INSTANCE) {
    //     return instance.delete(API_ROUTE + route);
    // }
}