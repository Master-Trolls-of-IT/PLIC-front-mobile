import { Dispatch, SetStateAction } from 'react';

const useCustomModalWithHeaderData = () => {
    const wrongAsset = require('~/domain/entities/assets/icon/icon-wrong.svg');

    const newWrongHeight = 22;
    const newWrongWidth = 22;

    const onPressWrongButton = (dispatch: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void)) => {
        dispatch(false);
    };

    return { newWrongHeight, newWrongWidth, onPressWrongButton, wrongAsset };
};

export default useCustomModalWithHeaderData;
