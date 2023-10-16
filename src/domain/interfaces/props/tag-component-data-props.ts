import { Dispatch, SetStateAction } from 'react';
import { MealItemTag } from '~/domain/interfaces/props/meal-item-tag';

export type TagComponentDataProps = {
    tag: MealItemTag;
    isCross: boolean;
    mealTagsSelected: MealItemTag[];
    dispatch: Dispatch<SetStateAction<MealItemTag[]>> | ((value: MealItemTag[]) => void);
};
