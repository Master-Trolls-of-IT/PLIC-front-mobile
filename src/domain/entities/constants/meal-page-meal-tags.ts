import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemTags } from '~/domain/interfaces/props/meal-item-tags';

//TODO : Add more tags
export const mealItemTags: MealItemTags = {
    Japanese: {
        label: 'Cuisine japonaise',
        color: ColorEnum.ClassicRedIcon
    },

    Vegetarian: {
        label: 'Végétarien',
        color: ColorEnum.ClassicDarkGreen
    }
};
