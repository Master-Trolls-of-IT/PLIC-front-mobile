import { useMemo } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import RecipeItemStyle from '~/infrastructure/ui/shared/component/item/recipe-item/recipe-item-style';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';
import useRecipePageData from '~/infrastructure/ui/pages/recipes-page/hooks';
import { chooseRightImage } from '~/infrastructure/ui/shared/helper/mocked/choose-right-image';
import { chooseRightUsername } from '~/infrastructure/ui/shared/helper/mocked/choose-right-username';
import { chooseRightRating } from '~/infrastructure/ui/shared/helper/mocked/choose-right-rating';
const useRecipeItemData = (recipeItem: RecipeItemProps) => {
    const star = require('~/domain/entities/assets/icon/icon-star.svg');
    const profile = require('~/domain/entities/assets/icon/icon-profile.svg');
    const { onPressViewDetail } = useRecipePageData();

    const image = chooseRightImage(recipeItem.title);
    const author = chooseRightUsername(recipeItem.author);
    const rating = chooseRightRating(recipeItem.title);

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

    return { scoreStyle, star, profile, onPressViewDetail, image, author, rating };
};

export default useRecipeItemData;
