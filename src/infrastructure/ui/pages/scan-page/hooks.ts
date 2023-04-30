import { useState } from 'react';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';

const useScanPageData = (navigate: NavigateProps) => {
    const [inputBarCode, setInputBarCode] = useState('');

    const onPressHistoricalButton = () => {
        navigate(PagesEnum.HistoricalPage);
    };

    return { inputBarCode: { input: inputBarCode, dispatch: setInputBarCode }, onPressHistoricalButton };
};

export default useScanPageData;
