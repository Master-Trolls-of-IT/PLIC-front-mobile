import { Dispatch, SetStateAction } from 'react';

const useCustomModalData = () => {
    const wrongAsset = require('~/domain/entities/assets/icon/icon-wrong.svg');

    const height = 22;
    const width = 22;

    const onPressWrongButton = (dispatch: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void)) => {
        dispatch(false);
    };

    return { height, width, onPressWrongButton, wrongAsset };
};

export default useCustomModalData;
