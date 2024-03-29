import { AxiosError } from 'axios';
import { UserData } from '~/domain/interfaces/services/user-data';
import { GenericResponse } from '~/domain/interfaces/services/generic-response';
import APIServices from '~/infrastructure/controllers/services/api';
import formatTimestampToDate from '~/infrastructure/ui/shared/helper/format-timestamp-to-date';
import { useStore } from '~/infrastructure/controllers/store';

const usePersonalDataServices = () => {
    const {
        UserStore: { userData },
        LogsStore: { error }
    } = useStore();

    const updateUserData = async (newUserData: UserData) => {
        try {
            const response: GenericResponse<UserData> = await APIServices.PATCH<UserData, UserData>(
                '/users/' + newUserData.id,
                newUserData
            );
            const userDataCopy = response.data;
            userDataCopy.birthdate = formatTimestampToDate(userDataCopy.birthdate);
            return userDataCopy;
        } catch (err) {
            error('useHomePageService', "Impossible de modifier l'utilisateur", (err as AxiosError).message);
            return userData;
        }
    };
    return {
        updateUserData
    };
};

export default usePersonalDataServices;
