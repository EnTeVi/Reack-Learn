import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService = {
    getAll: () => axiosService.get(urls.comments),
    createUser: (comments) => axiosService.post(urls.comments, comments)
}

export {
    userService
}