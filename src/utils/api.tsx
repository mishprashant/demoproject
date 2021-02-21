import Utils from "../utils";
import axios from "axios";
/**
 * 
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response 
 * @param errorCallback  function for handle error response
 */
const postApiCall = (endPoint: string, params: object, successCallback: Function, errorCallback: Function) => {

    Utils.constant.axios.post(endPoint, JSON.stringify(params))
        .then((response: any) => {
            console.log((response))
            successCallback(response);
        })
        .catch((error: any) => {
            console.log((error.response))
            if (error.code === "ECONNABORTED") {
                let payload = {
                    data: {
                        status: 408
                    }
                }
                errorCallback(payload);
            }
            else if (error.response) {

                errorCallback(error.response)
            }
            else if (!error.response) {
                let payload = {
                    data: {
                        status: ""
                    }
                }
                errorCallback(payload);
            }

        })
}
/**
 * 
 * @param endPoint api end point 
 * @param params api url parameter
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const getApiCall = (endPoint: string, params: string = "", successCallback: Function, errorCallback: Function) => {

    Utils.constant.axios.get(Utils.constant.apiUrl + endPoint + params, {}).then((response: any) => {
        console.log((response))
        successCallback(response);
    }).catch((error: any) => {

        if (error.code === "ECONNABORTED") {
            let payload = {
                data: {
                    status: 408
                }
            }
            errorCallback(payload);
        }
        else if (error.response) {

            errorCallback(error.response)
        }
        else if (!error.response) {
            let payload = {
                data: {
                    status: ""
                }
            }
            errorCallback(payload);
        }
    })
}
/**
 * 
 * @param endPoint api end point 
 * @param params api request data
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const deleteApiCall = (endPoint: string, params: string = "", successCallback: Function, errorCallback: Function) => {

    Utils.constant.axios.delete(Utils.constant.apiUrl + endPoint + params, {}).then((response: any) => {

        successCallback(response);
    }).catch((error: any) => {

        if (error.code === "ECONNABORTED") {
            let payload = {
                data: {
                    status: 408
                }
            }
            errorCallback(payload);
        }
        else if (error.response) {

            errorCallback(error.response)
        }
        else if (!error.response) {
            let payload = {
                data: {
                    status: ""
                }
            }
            errorCallback(payload);
        }
    })
}

/**
 * 
 * @param endPoint api end point 
 * @param params api request data
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const patchApiCall = (endPoint: string, params: object, successCallback: Function, errorCallback: Function) => {

    Utils.constant.axios.patch(endPoint, params)
        .then((response: any) => {

            successCallback(response);
        })
        .catch((error: any) => {

            if (error.code === "ECONNABORTED") {
                let payload = {
                    data: {
                        status: 408
                    }
                }
                errorCallback(payload);
            }
            else if (error.response) {

                errorCallback(error.response)
            }
            else if (!error.response) {
                let payload = {
                    data: {
                        status: ""
                    }
                }
                errorCallback(payload);
            }
        });
}

/**
 * 
 * @param endPoint api end point 
 * @param params api request data
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const putApiCall = (endPoint: string, params: object, successCallback: Function, errorCallback: Function) => {

    Utils.constant.axios.put(endPoint, JSON.stringify(params))
        .then((response: any) => {
            console.log((response))
            successCallback(response);
        })
        .catch((error: any) => {
            console.log(error.response);
            if (error.code === "ECONNABORTED") {
                let payload = {
                    data: {
                        status: 408
                    }
                }
                errorCallback(payload);
            }
            else if (error.response) {

                errorCallback(error.response)
            }
            else if (!error.response) {
                let payload = {
                    data: {
                        status: ""
                    }
                }
                errorCallback(payload);
            }
        });
}

/**
 * 
 * @param endPoint api end point 
 * @param params api request data
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const contentApiCall = (endPoint: string, params: "", successCallback: Function, errorCallback: Function) => {
    axios.get(endPoint)
        .then(function (response) {

            successCallback(response);
        })
        .catch(function (error) {

            if (error.code === "ECONNABORTED") {
                let payload = {
                    data: {
                        status: 408
                    }
                }
                errorCallback(payload);
            }
            else if (error.response) {

                errorCallback(error.response)
            }
            else if (!error.response) {
                let payload = {
                    data: {
                        status: ""
                    }
                }
                errorCallback(payload);
            }
        });
}

/**
 * export all function
 */
export default {
    postApiCall,
    getApiCall,
    patchApiCall,
    putApiCall,
    deleteApiCall,
    contentApiCall,
    
}