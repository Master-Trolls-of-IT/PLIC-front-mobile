import { InputTypeEnum } from '~/application/type/enum/input-type-enum';

const isValidateInput = (inputToCheck: string, type: InputTypeEnum): boolean => {
    let stringRegex = '';

    if (type == InputTypeEnum.Email) {
        stringRegex = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    } else if (type == InputTypeEnum.Password) {
        stringRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,24}$';
    } else {
        stringRegex = '^[0-9]{1,3}$';
    }

    const regex = new RegExp(stringRegex);
    return regex.test(inputToCheck);
};

export default isValidateInput;
