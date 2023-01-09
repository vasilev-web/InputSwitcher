import axios from 'axios';

const AjaxApi = axios.create({
    baseURL: '/',
    transformRequest: [
        function (data) {
            return data;
        }
    ],
    transformResponse: [
        function (data) {
            return JSON.parse(data);
        }
    ],
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export { AjaxApi };
export default axios;
