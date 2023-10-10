import { useMemo, useState } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemDataProps } from '~/domain/interfaces/props/meal-item-data-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';

const useMealItemData = ({ score }: MealItemDataProps) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const restaurantIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-restaurant.svg');
    const [imageNewHeight, imageNewWidth] = [92, 69];
    const [favouriteNewHeight, favouriteNewWidth] = [30, 30];

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const scoreStyle = useMemo(() => {
        switch (true) {
            case score <= 25:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case score <= 50:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicOrangeWidget };
            case score <= 75:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicYellowWidget };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [score]);

    return {
        isFavourite,
        favouriteIcon,
        toggleFavourite,
        scoreStyle,
        restaurantIcon,
        imageNewHeight,
        imageNewWidth,
        favouriteNewHeight,
        favouriteNewWidth
    };
};

export default useMealItemData;
