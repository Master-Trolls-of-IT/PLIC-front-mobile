import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';

export type SearchListInputType =
    | ItemEnum.Historical
    | ItemEnum.Meal
    | ItemEnum.ConsumedProducts
    | ItemEnum.MealProducts;

export type SearchListData =
    | HistoricalItemProps[]
    | MealItemProps[]
    | ConsumedProductItemProps[]
    | MealProductsItemProps[];
