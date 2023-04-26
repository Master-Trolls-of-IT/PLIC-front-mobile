import APIService from '~/infrastructure/controllers/services';
import { Response } from '~/domain/interfaces/services/api-service-responses';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';

export default async function RefreshTokenGen(password: string): Promise<string> {
    try {
        const response: Response<{ token: string }> = await APIService.GET(
            process.env.APP_API_ENDPOINT + `/refresh_token/${PasswordHashing(password)}`
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
        const response: Response<{ token: string }> = await APIService.GET(
            process.env.APP_API_ENDPOINT + `/access_token/${PasswordHashing(password)}/${refreshToken}`
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
