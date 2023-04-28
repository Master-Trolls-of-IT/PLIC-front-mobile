import { useState } from 'react';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useScanPageData = (navigation: any) => {
    const [inputBarCode, setInputBarCode] = useState('');

    const onPressHistoricalButton = () => {
        navigation.navigate(PagesEnum.HistoricalPage);
    };

    return { inputBarCode: { input: inputBarCode, dispatch: setInputBarCode }, onPressHistoricalButton };
};

export default useScanPageData;
