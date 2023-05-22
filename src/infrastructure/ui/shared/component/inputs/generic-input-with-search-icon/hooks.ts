import { Dispatch, SetStateAction, useState } from 'react';
import { isNumber } from '~/infrastructure/ui/shared/helper/is-number';

const useGenericInputWithSearchIconData = (
    input: string,
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void),
    onPressSearchIcon: (value: void) => void
) => {
    const [controlledInput, setControlledInput] = useState('');

    const assetSearchInput = require('~/domain/entities/assets/icon/input-icon/icon-search-input.svg');

    const newHeight = 22;
    const newWidth = 22;

    const onPressSearch = () => onPressSearchIcon();

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

    return { assetSearchInput, controlledInput, newHeight, newWidth, onChangeText, onPressSearch };
};

export default useGenericInputWithSearchIconData;
