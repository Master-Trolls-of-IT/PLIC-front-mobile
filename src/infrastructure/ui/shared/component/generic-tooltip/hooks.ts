import { Dispatch, SetStateAction } from 'react';

const useGenericTooltipData = (dispatch: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void)) => {
    const onPressTooltip = () => {
        dispatch(false);
    };

    return { onPressTooltip };
};

export default useGenericTooltipData;
