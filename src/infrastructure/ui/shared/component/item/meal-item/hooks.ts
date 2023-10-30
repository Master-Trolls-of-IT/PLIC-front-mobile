import { useMemo, useState } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemDataProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-data-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { useStore } from '~/infrastructure/controllers/store';

const useMealItemData = ({ score, isFavourite }: MealItemDataProps) => {
    const {
        MealStore: { toggleFavorite }
    } = useStore();

    const [isExpanded, setIsExpanded] = useState(false);

    const restaurantIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-restaurant.svg');

    const [imageNewHeight, imageNewWidth] = [92, 69];
    const [favouriteNewHeight, favouriteNewWidth] = [30, 30];

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const scoreStyle = useMemo(() => {
        switch (true) {
            case score < 33:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case score < 66:
                return { ...MealItemStyle.score, color: ColorEnum.MealPageOrange };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [score]);

    return {
        favouriteIcon,
        toggleFavorite,
        scoreStyle,
        restaurantIcon,
        imageNewHeight,
        imageNewWidth,
        favouriteNewHeight,
        favouriteNewWidth,
        isExpanded,
        setIsExpanded
    };
};

export default useMealItemData;
