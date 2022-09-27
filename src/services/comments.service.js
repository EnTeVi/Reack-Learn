import {axiosService} from "./axiosService";
import {urls} from "../config/urls";


const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}

export {commentsService};