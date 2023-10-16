import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients/nutrients-enum';

export type WidgetItem =
    | {
          type: WidgetEnum.Anecdote;
      }
    | {
          type: WidgetEnum.EcoScore;
      }
    | {
          type: WidgetEnum.Energy;
      }
    | {
          type: WidgetEnum.Water;
      }
    | {
          type: WidgetEnum.SmallSingle;
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
