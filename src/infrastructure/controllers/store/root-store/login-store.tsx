import { action, makeAutoObservable, observable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makePersistable } from 'mobx-persist-store';
import { UserData } from '~/domain/interfaces/services/user-data';
import { defaultUserData } from '~/domain/interfaces/constant/default-user-data';
import RootStore from '~/infrastructure/controllers/store/root-store/index';

class LoginStore {
    RootStore: RootStore;
    userData: UserData;
    accessToken: string;
    refreshToken = '';

    constructor(storageKey: string, rootStore: RootStore) {
        this.RootStore = rootStore;
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
        this.RootStore.DataStore.updateDailyNutrientsGoal();
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
