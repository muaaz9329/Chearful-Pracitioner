import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./endpoints"


/**
 * TO get the url with base url
 * @param {string} endPoint 
 * @returns 
 */
export const UrlMaker = (endPoint) => {
    return `${BASE_URL}${endPoint}`
}

/**
 * Function to get the access token from async storage
 * @returns String Toked
 */

export const GetAccessToken =  async () => {
    const token = await AsyncStorage.getItem('USER_accessToken');
    return token;
}

export const Url_With_Prams = (endPoint, params) => {
    let url = `${BASE_URL}${endPoint}?`
    for (const key in params) {
        url += `${key}=${params[key]}&`
    }
    return url;
}