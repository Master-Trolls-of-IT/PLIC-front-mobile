import { Dispatch, SetStateAction } from 'react';
import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';

export type TagsComponentDataProps = {
    tag: MealItemTag;
    isCross: boolean;
    mealTagsSelected: MealItemTag[];
    dispatch: Dispatch<SetStateAction<MealItemTag[]>> | ((value: MealItemTag[]) => void);
};
