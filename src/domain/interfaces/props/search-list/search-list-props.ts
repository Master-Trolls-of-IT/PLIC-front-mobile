import { CardEnum } from '~/domain/interfaces/enum/card-enum';
import { HistoricalCardProps } from '~/domain/interfaces/props/search-list/historical-card-props';
import { MealCardProps } from '~/domain/interfaces/props/search-list/meal-card-props';

export type SearchListProps =
    | {
          itemType: CardEnum.Historical;
          data: HistoricalCardProps[];
      }
    | {
          itemType: CardEnum.Meal;
          data: MealCardProps[];
      };
