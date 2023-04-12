import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { TextInput } from 'react-native';

const useInputWithEndTextData = (
    input: string,
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void)
) => {
    const [controlledInput, setControlledInput] = useState('');
    const onChangeText = (value: string) => {
        setControlledInput((prev) => {
            if (value === '') return '';
            if (isNaN(parseInt(value))) return prev;
            else {
                dispatch(value);
                return value;
            }
        });
    };
    return { onChangeText, controlledInput };
};

export default useInputWithEndTextData;
