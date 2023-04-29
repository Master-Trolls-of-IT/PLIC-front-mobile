import { Dispatch, SetStateAction, useState } from 'react';
import { isNumber } from '~/infrastructure/ui/shared/helper/is-number';

const useGenericInputWithSearchIconData = (
    input: string,
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void)
) => {
    const [controlledInput, setControlledInput] = useState('');

    const assetSearchInput = require('~/domain/entities/assets/icon/icon-search-input.svg');

    const newHeight = 22;
    const newWidth = 22;

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

    const onPressSearchIcon = () => {
        // TODO: Ajout de l'appel API pour chercher le produit avec le code-barres
    };

    return { assetSearchInput, controlledInput, newHeight, newWidth, onChangeText, onPressSearchIcon };
};

export default useGenericInputWithSearchIconData;