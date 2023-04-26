import { Dispatch, SetStateAction, useState } from 'react';
import { isNumber } from '~/infrastructure/ui/shared/helper/isNumber';

const useInputWithEndTextData = (
    input: string,
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void)
) => {
    const [controlledInput, setControlledInput] = useState('');
    const onChangeText = (value: string) => {
        setControlledInput((prev) => {
            if (value === '') return '';
            if (!isNumber(value)) return prev;
            else {
                dispatch(value);
                return value;
            }
        });
    };
    return { onChangeText, controlledInput };
};

export default useInputWithEndTextData;
