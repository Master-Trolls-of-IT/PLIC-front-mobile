//This is the file for all the api calls of the login page

import * as process from 'process';
import { AxiosResponse } from 'axios';
import APIService from '~/infrastructure/controllers/services';

export default async function RefreshTokenGen(password: string): Promise<string> {
    try {
        const response: AxiosResponse<{ token: string }> = await APIService.GET(
            process.env.APP_API_ENDPOINT + '/refresh_token/{password}'
        );
        if (response.status === 200) {
            return response.data.token;
        } else {
            console.log(response);
            return '';
        }
    } catch (error) {
        console.log(error);
        return '';
    }
}

export async function AccessTokenGen(password: string, refreshToken: string): Promise<string> {
    try {
        const response: AxiosResponse<{ token: string }> = await APIService.GET(
            process.env.APP_API_ENDPOINT + '/access_token/{password}/{refreshToken}'
        );
        if (response.status === 200) {
            return response.data.token;
        } else {
            console.log(response);
            return '';
        }
    } catch (error) {
        console.log(error);
        return '';
    }
}
