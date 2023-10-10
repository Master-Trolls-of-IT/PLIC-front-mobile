import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemTags } from '~/domain/interfaces/props/meal-item-tags';

export const mealItemTags: MealItemTags = {
    Japanese: {
        label: 'Cuisine japonaise',
        color: ColorEnum.ClassicBrown
    },

    Vegetarian: {
        label: 'Végétarien',
        color: ColorEnum.ClassicDarkGreen
    }

    //TODO : Add more tags
};
