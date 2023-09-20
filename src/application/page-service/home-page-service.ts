import { AxiosError } from 'axios';
import { UserData } from '~/domain/interfaces/services/user-data';
import { GenericResponse } from '~/domain/interfaces/services/generic-response';
import APIServices from '~/infrastructure/controllers/services/api';
import formatTimpstampToDate from '~/infrastructure/ui/shared/helper/format-timpstamp-to-date';

const useHomePageServices = () => {
    const updateUserData = async (newUserData: UserData) => {
        try {
            const response: GenericResponse<UserData> = await APIServices.PATCH<UserData, UserData>(
                '/users/' + newUserData.Id,
                newUserData
            );
            const userDataCopy = response.data;
            userDataCopy.Birthdate = formatTimpstampToDate(userDataCopy.Birthdate);
            return userDataCopy;
        } catch (err) {
            console.error('useHomePageService', "Impossible de modifier l'utilisateur", (err as AxiosError).message);
        }
    };
    return {
        updateUserData
    };
};

export default useHomePageServices;
