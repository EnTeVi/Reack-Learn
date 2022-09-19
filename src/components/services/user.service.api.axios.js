import axios from "axios";

let installAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {'Content-Type': 'application/json'}
});

const getUsersAxios = () => {
    return installAxios.get()
}

const getUserAxios = (id) => {
    return installAxios.get('/' + id)
}

export {getUserAxios, getUsersAxios};
