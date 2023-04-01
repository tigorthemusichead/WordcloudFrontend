import axios from 'axios';
import CONSTANTS from "../app-constants"

let axiosInstance = (async () => {
    let baseURL = CONSTANTS.DEVELOP_BASE_URL;
    if(process.env.REACT_APP_BASE_URL !== undefined) {
        baseURL = process.env.REACT_APP_BASE_URL
    }
    return axios.create({
        baseURL: baseURL
    });

})();

export default axiosInstance;
