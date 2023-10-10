import { useMemo, useState } from 'react';
import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import { useStore } from '~/infrastructure/controllers/store';

const useEcoScoreData = () => {
    const {
        DataStore: { ecoScore }
    } = useStore();
    const [color, setColor] = useState(GetColorByPercentage(ecoScore));

    useMemo(() => {
        setColor(GetColorByPercentage(ecoScore));
    }, [ecoScore]);

    return {
        color,
        ecoScore
    };
};

export default useEcoScoreData;
