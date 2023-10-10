import { useMemo, useState } from 'react';

const useMealItemData = () => {
    const [isFavourite, setIsFavourite] = useState(false);

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    return {
        isFavourite,
        favouriteIcon,
        setIsFavourite
    };
};

export default useMealItemData;
