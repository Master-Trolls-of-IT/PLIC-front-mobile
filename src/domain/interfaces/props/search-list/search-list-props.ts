import { CardEnum } from '~/domain/interfaces/enum/card-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';

export type SearchListProps =
    | {
          itemType: CardEnum.Historical;
          data: HistoricalItemProps[];
      }
    | {
          itemType: CardEnum.Meal;
          data: MealItemProps[];
      };
