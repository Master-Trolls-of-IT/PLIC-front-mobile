import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';

export type WidgetItem =
    | {
          type: WidgetEnum.Anecdote;
      }
    | {
          type: WidgetEnum.EcoScore;
      }
    | {
          type: WidgetEnum.Calorie;
      }
    | {
          type: WidgetEnum.SmallBasic;
          nutrient: NutrientsEnum;
      }
    | {
          type: WidgetEnum.SmallMultiple;
          nutrients: NutrientsEnum[];
      }
    | {
          type: WidgetEnum.Slot;
      }
    | {
          type: WidgetEnum.Large;
      };
