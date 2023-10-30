import { AxiosError } from 'axios';
import { GenericResponse } from '~/domain/interfaces/services/generic-response';
import APIServices from '~/infrastructure/controllers/services/api';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';
import { useStore } from '~/infrastructure/controllers/store';

const useLoginPageService = () => {
    const {
        LogsStore: { error }
    } = useStore();
    const RefreshTokenGen = async (password: string): Promise<string> => {
        try {
            const response: GenericResponse<{ token: string }> = await APIServices.GET(
                process.env.APP_API_ENDPOINT + `refresh_token/${PasswordHashing(password)}`
            );
            if (response.status === 200) {
                return response.data.token;
            } else {
                error(
                    'useLoginPageService',
                    `Failed generating refresh token, received error code ${response.status}`,
                    response.message
                );
            }
        } catch (err) {
            if (err instanceof AxiosError)
                error('useLoginPageService', 'RefreshTokenGen : Caught an exception ', err.message);
        }
        return '';
    };

    const AccessTokenGen = async (password: string, refreshToken: string): Promise<string> => {
        try {
            const response: GenericResponse<{ token: string }> = await APIServices.GET(
                process.env.APP_API_ENDPOINT + `access_token/${PasswordHashing(password)}/${refreshToken}`
            );
            if (response.status === 200) {
                return response.data.token;
            } else {
                error(
                    'useLoginPageService',
                    `Failed generating access token, received error code ${response.status}`,
                    response.message
                );
            }
        } catch (err) {
            if (err instanceof AxiosError)
                error('useLoginPageService', 'AccessTokenGen : Caught an exception', err.message);
        }
        return '';
    };

    return {
        RefreshTokenGen,
        AccessTokenGen
    };
};

export default useLoginPageService;
