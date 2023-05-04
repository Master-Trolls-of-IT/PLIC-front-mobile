import { useMemo, useState } from 'react';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';

const useEcoScoreData = (percentage: number) => {
    // TODO : retrieve percentage and pass it to colorSelector function
    const [color, setColor] = useState(GetColorByPercentage(percentage));

    useMemo(() => {
        setColor(GetColorByPercentage(percentage));
    }, [percentage]);

    return {
        color
    };
};

export default useEcoScoreData;
