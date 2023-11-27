import { useMemo } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/item/recipe-item/recipe-item-style';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
const useRecipeItemData = (recipeItem: RecipeItemProps) => {
    const star = require('~/domain/entities/assets/icon/icon-star.svg');
    const profile = require('~/domain/entities/assets/icon/icon-profile.svg');
    const { onPressViewDetail } = useRecipePageData();

    const [imageNewHeight, imageNewWidth] = [92, 69];
    const [favouriteNewHeight, favouriteNewWidth] = [30, 30];
    const [deleteNewHeight, deleteNewWidth] = [40, 40];
    const [editNewHeight, editNewWidth] = [40, 40];

    const scoreStyle = useMemo(() => {
        switch (true) {
            case recipeItem && recipeItem.score < 33:
                return { ...RecipeItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case recipeItem && recipeItem.score < 66:
                return { ...RecipeItemStyle.score, color: ColorEnum.MealPageOrange };
            default:
                return { ...RecipeItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [recipeItem]);

    return {
        favouriteNewHeight,
        favouriteNewWidth,
        imageNewHeight,
        imageNewWidth,
        deleteNewHeight,
        deleteNewWidth,
        editNewHeight,
        editNewWidth,
        scoreStyle,
        star,
        profile,
        onPressViewDetail
    };
};

export default useRecipeItemData;
