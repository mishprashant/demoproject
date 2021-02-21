import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';
import Config from "react-native-config";
import Snackbar from 'react-native-snackbar';

const API_HOST = "https://www.fsdfsdfsdf.com"
/**
 * setup axios instance
 */
const $axios = axios.create({
    baseURL: API_HOST,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': Config.AUTHORIZATION
    },
});

const api_error_code = {
}

const deviceToken: string = "";
const devicesInfo = {
    deviceId: DeviceInfo.getUniqueId(),
    deviceName: DeviceInfo.getDeviceName(),
    deviceToken: deviceToken,
    appVersion: DeviceInfo.getVersion(),
    hasNotch: DeviceInfo.hasNotch(),
    os: Platform.OS == 'android' ? 1 : 2,
}



const requestType = {
    INITIATE: 'initiate',
    LOAD_MORE: 'load_more',
}

const fontFamily = {
    Muli: "Muli",
    muliLight: "Muli-Light",
    muliSemiBold: "Muli-SemiBold",
    muliBold: "Muli-Bold",
}

function handleBackPress() {

}


function showSnackBar(title: string, duration: number = Snackbar.LENGTH_SHORT) {
    Snackbar.show({
        title: title,
        duration: duration,
    });
}
function showSnackBarCustom(title: string, handleAction: Function = function () { }, duration: number = Snackbar.LENGTH_SHORT, buttonTitle: string = 'UNDO', buttonColor: string = 'green') {
    Snackbar.show({
        title: title,
        duration: duration,
        action: {
            title: buttonTitle,
            color: 'green',
            onPress: () => handleAction(),
        },
    });
}

/**
 * Removes Emojis from a string
 *
 * @param {string} str
 * @returns
 */
const removeEmojis = (str: string) => {
    const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    return str.replace(regex, '');
};

const removeDots = (str: string) => {
    return str.replace(/[.,-\s]/g, '');
};




/**
 * constant variable for the website
 */
const constant = {
    apiUrl: "",
    devicesInfo: devicesInfo,
    axios: $axios,
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    nameRegex: /^[^ +]([^0-9~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]*)$/,
    nameRegexNew: /^[a-zA-Z '.-]*$/,
    phoneRegex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    zerosRegex: /[1-9]/g,
    numberOnlyRegex: /^\d+$/,
    passwordRegex: /^((?=.*[0-9])|(?=.*[!@#\$%\^&\*]))(?=.{8,})/,
    api_error_code: api_error_code,
    requestType: requestType,
    fontFamily: fontFamily,
    handleBackPress: handleBackPress,
    navigation: null,
    showSnackBar: showSnackBar,
    showSnackBarCustom: showSnackBarCustom,
    removeDots: removeDots,
    removeEmojis: removeEmojis
    
}
export default constant;