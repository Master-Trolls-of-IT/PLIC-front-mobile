import { UserData } from '~/domain/interfaces/services/user-data';

export const defaultUserData: {
    Rights: number;
    Email: string;
    Username: string;
    Sportiveness: number;
    Pseudo: string;
    Height: number;
    Gender: number;
    Birthdate: string;
    Weight: number;
    BasalMetabolism: number;
} = {
    Email: '',
    Username: '',
    Birthdate: '',
    Weight: 0,
    Height: 0,
    Gender: 0,
    Pseudo: '',
    Rights: 0,
    Sportiveness: 0,
    BasalMetabolism: 0
};
