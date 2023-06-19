import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';

export type SearchListDataProps =
    | ((inputType: ItemEnum.Historical, data: HistoricalItemProps[]) => object)
    | ((inputType: ItemEnum.Meal, data: MealItemProps[]) => object);

export type SearchListInputType = ItemEnum.Historical | ItemEnum.Meal;
export type SearchListData = HistoricalItemProps[] | MealItemProps[];
