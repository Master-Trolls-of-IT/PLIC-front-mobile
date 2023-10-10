import { useMemo, useState } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemDataProps } from '~/domain/interfaces/props/meal-item-data-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';

const useMealItemData = ({ score }: MealItemDataProps) => {
    const [isFavourite, setIsFavourite] = useState(false);

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const scoreStyle = useMemo(() => {
        switch (true) {
            case score >= 0 && score <= 25:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case score > 25 && score <= 50:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkOrange };
            case score > 50 && score <= 75:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkYellow };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [score]);
    return {
        isFavourite,
        favouriteIcon,
        setIsFavourite,
        scoreStyle
    };
};

export default useMealItemData;
