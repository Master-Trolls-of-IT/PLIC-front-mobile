import { Dispatch, SetStateAction } from 'react';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

export type RecipeTagsComponentProps = {
    tag: ItemTag;
    isCross: boolean;
    mealTagsSelected: ItemTag[];
    dispatch: Dispatch<SetStateAction<ItemTag[]>> | ((value: ItemTag[]) => void);
};
