import { Dispatch, SetStateAction } from 'react';
import { RecipeItemTag } from '~/domain/interfaces/props/tags/recipe-item-tag';

export type RecipeTagsComponentDataProps = {
    tag: RecipeItemTag;
    isCross: boolean;
    recipeTagsSelected: RecipeItemTag[];
    dispatch: Dispatch<SetStateAction<RecipeItemTag[]>> | ((value: RecipeItemTag[]) => void);
};
