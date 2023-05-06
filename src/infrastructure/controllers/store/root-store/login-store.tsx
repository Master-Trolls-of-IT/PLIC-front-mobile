import { action, makeAutoObservable, observable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isPersisting, makePersistable } from 'mobx-persist-store';
import { UserData } from '~/domain/interfaces/services/user-data';
import { defaultUserData } from '~/domain/interfaces/constant/default-user-data';

class LoginStore {
    userData: UserData;
    accessToken: string;
    refreshToken = '';

    constructor(storageKey: string) {
        this.userData = defaultUserData;
        this.accessToken = '';

        makeAutoObservable(
            this,
            {
                userData: observable,
                accessToken: observable,
                refreshToken: observable,

                setUserData: action,
                setRefreshToken: action,
                setAccessToken: action
            },
            { autoBind: true }
        );
        void makePersistable(
            this,
            {
                name: storageKey,
                properties: ['refreshToken', 'userData'],
                storage: AsyncStorage
            },
            { requiresObservable: true }
        );
    }

    setUserData = (userData: UserData) => {
        this.userData = userData;
    };

    setAccessToken = (accessToken: string) => {
        this.accessToken = accessToken;
    };

    setRefreshToken = (refreshToken: string) => {
        this.refreshToken = refreshToken;
    };

    resetStore = () => {
        this.accessToken = '';
        this.refreshToken = '';
        this.userData = defaultUserData;
    };
}

export default LoginStore;
