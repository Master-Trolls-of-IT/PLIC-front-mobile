import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';
import { MealProductItemProps } from '~/domain/interfaces/props/search-list/meal-product-item-props';

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
      }
    | {
          itemType: ItemEnum.MealProducts;
          data: MealProductItemProps[];
      };
