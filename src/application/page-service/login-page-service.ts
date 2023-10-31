import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { GenericResponse } from '~/domain/interfaces/services/generic-response';
import APIServices from '~/infrastructure/controllers/services/api';
import PasswordHashing from '~/infrastructure/controllers/password-hashing';
import { useStore } from '~/infrastructure/controllers/store';
import useMapConsumedProductResponse from '~/infrastructure/ui/shared/helper/useMapConsumedProductResponse';
import { ConsumedProduct } from '~/domain/interfaces/services/consumed-product';

const useLoginPageService = () => {
    const {
        LogsStore: { error }
    } = useStore();

    const { mapResponse } = useMapConsumedProductResponse();
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

    const getConsumedProducts = useCallback(
        async (email: string) => {
            try {
                const encodedEmail = encodeURIComponent(email);
                const response = await APIServices.GET<ConsumedProduct[]>(`product/consumed/user/${encodedEmail}`);
                return mapResponse(response.data);
            } catch (err) {
                if (err instanceof Error) {
                    error('useConsumedProductPageService', 'Could not retrieve consumed products', err.message);
                }
                return [];
            }
        },
        [mapResponse, error]
    );

    return {
        RefreshTokenGen,
        AccessTokenGen,
        getConsumedProducts
    };
};

export default useLoginPageService;
