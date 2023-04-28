import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';

export const isValidInput = (inputToCheck: string, type: InputEnum): boolean => {
    let stringRegex = '';

    if (type == InputEnum.Email) {
        stringRegex = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    } else if (type == InputEnum.Password) {
        stringRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$-@!%&*?])[A-Za-z\\d#$-@!%&*?]{8,24}$';
    } else if (type == InputEnum.Number) {
        stringRegex = '^[0-9]{1,3}$';
    } else if (type == InputEnum.Birthdate) {
        stringRegex = '(?:0[1-9]|[12][0-9]|3[01])[/](?:0[1-9]|1[012])[/](?:19\\d{2}|20[01][0-9]|2020|2021|2022)';
    } else {
        return inputToCheck.length >= 5;
    }

    const regex = new RegExp(stringRegex);
    return regex.test(inputToCheck);
};
