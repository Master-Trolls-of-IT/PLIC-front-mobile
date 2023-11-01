import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import { HistoricalItemProps } from '~/domain/interfaces/props/search-list/item/historical-item/historical-item-props';
import { MealItemProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-props';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-props';
import { MealProductsItemProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-props';
import { RecipeItemProps } from '~/domain/interfaces/props/search-list/item/recipe-item/recipe-item-props';

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
          data: MealProductsItemProps[];
      }
    | {
          itemType: ItemEnum.Recipe;
          data: RecipeItemProps[];
      };
