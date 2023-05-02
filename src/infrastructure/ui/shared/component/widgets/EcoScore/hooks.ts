import { useMemo, useState } from 'react';
import EcoScoreStyle from './widget-ecoscore-style';
import GetColorByPercentage from '../../../helper/get-color-from-percentage';

const useEcoScoreData = (percentage: number) => {
    //TODO : retrieve percentage and pass it to colorSelector function
    const [color, setColor] = useState(GetColorByPercentage(percentage));
    const pageStyle = EcoScoreStyle();

    useMemo(() => {
        setColor(GetColorByPercentage(percentage));
    }, [percentage]);

    return {
        color,
        pageStyle
    };
};

export default useEcoScoreData;
