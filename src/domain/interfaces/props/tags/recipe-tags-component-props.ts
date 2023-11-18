import { Dispatch, SetStateAction } from 'react';
import { RecipeItemTag } from '~/domain/interfaces/props/tags/recipe-item-tag';

export type RecipeTagsComponentProps = {
    tag: RecipeItemTag;
    isCross: boolean;
    mealTagsSelected: RecipeItemTag[];
    dispatch: Dispatch<SetStateAction<RecipeItemTag[]>> | ((value: RecipeItemTag[]) => void);
};
