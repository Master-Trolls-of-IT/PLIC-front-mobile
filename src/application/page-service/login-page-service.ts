import { GenericResponse } from '~/domain/interfaces/services/generic-response';
import APIService from '~/infrastructure/controllers/services/api';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';

const useLoginPageService = () => {
    const RefreshTokenGen = async (password: string): Promise<string> => {
        try {
            const response: GenericResponse<{ token: string }> = await APIService.GET(
                process.env.APP_API_ENDPOINT + `/refresh_token/${PasswordHashing(password)}`
            );
            if (response.status === 200) {
                return response.data.token;
            } else {
                // TODO: Ajout du logger
                return '';
            }
        } catch (error) {
            // TODO: Ajout du logger
            return '';
        }
    };

    const AccessTokenGen = async (password: string, refreshToken: string): Promise<string> => {
        try {
            const response: GenericResponse<{ token: string }> = await APIService.GET(
                process.env.APP_API_ENDPOINT + `/access_token/${PasswordHashing(password)}/${refreshToken}`
            );
            if (response.status === 200) {
                return response.data.token;
            } else {
                // TODO: Ajout du logger
                return '';
            }
        } catch (error) {
            // TODO: Ajout du logger
            return '';
        }
    };

    return {
        RefreshTokenGen,
        AccessTokenGen
    };
};

export default useLoginPageService;
