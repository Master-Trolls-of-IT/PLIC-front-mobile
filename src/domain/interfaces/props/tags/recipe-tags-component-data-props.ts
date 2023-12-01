import { Dispatch, SetStateAction } from 'react';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

export type RecipeTagsComponentDataProps = {
    tag: ItemTag;
    isCross: boolean;
    recipeTagsSelected: ItemTag[];
    dispatch: Dispatch<SetStateAction<ItemTag[]>> | ((value: ItemTag[]) => void);
};
