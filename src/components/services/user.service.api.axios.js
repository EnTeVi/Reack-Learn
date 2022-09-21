import axios from "axios";

let axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
});

const getUserAxios = () => {
    return axiosApi.get('/users')
}

const getPostAxios = (id) => {
    return axiosApi.get('/users/' + id + '/posts')
}


export {getUserAxios, getPostAxios};