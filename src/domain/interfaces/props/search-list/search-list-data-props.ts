import { CardEnum } from '~/domain/interfaces/enum/card-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';

export type SearchListDataProps =
    | ((inputType: CardEnum.Historical, data: HistoricalItemProps[]) => object)
    | ((inputType: CardEnum.Meal, data: MealItemProps[]) => object);

export type SearchListInputType = CardEnum.Historical | CardEnum.Meal;
export type SearchListData = HistoricalItemProps[] | MealItemProps[];
