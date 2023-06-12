import { CardEnum } from '~/domain/interfaces/enum/card-enum';
import { HistoricalCardProps } from '~/domain/interfaces/props/search-list/historical-card-props';
import { MealCardProps } from '~/domain/interfaces/props/search-list/meal-card-props';

export type SearchListDataProps =
    | ((inputType: CardEnum.Historical, data: HistoricalCardProps[]) => object)
    | ((inputType: CardEnum.Meal, data: MealCardProps[]) => object);

export type SearchListInputType = CardEnum.Historical | CardEnum.Meal;
export type SearchListData = HistoricalCardProps[] | MealCardProps[];
