import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { ConsumedProductsProps } from '~/domain/interfaces/props/search-list/consumed-products-props';

export type SearchListProps =
    | {
          itemType: ItemEnum.Historical;
          data: HistoricalItemProps[];
      }
    | {
          itemType: ItemEnum.Meal;
          data: MealItemProps[];
      }
    | {
          itemType: ItemEnum.ConsumedProducts;
          data: ConsumedProductItemProps[];
      };
