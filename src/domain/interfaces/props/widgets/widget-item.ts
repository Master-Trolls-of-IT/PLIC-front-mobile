import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import { WidgetEcoscoreProps } from '~/domain/interfaces/props/widgets/widget-ecoscore-props';
import { LargeIntakesProps } from '~/domain/interfaces/props/widgets/large-intakes-props';
import { SmallBasicIntakesProps } from '~/domain/interfaces/props/widgets/small-basic-intakes-props';
import { SmallMultipleIntakesProps } from '~/domain/interfaces/props/widgets/small-multiple-intakes-props';
import { WidgetSlotProps } from '~/domain/interfaces/props/widgets/widget-slot-props';
import { WidgetCalorieProps } from '~/domain/interfaces/props/widgets/widget-calorie-props';

export type WidgetItem =
    | {
          type: WidgetEnum.Anecdote;
          props: Record<string, never>;
      }
    | {
          type: WidgetEnum.EcoScore;
          props: WidgetEcoscoreProps;
      }
    | {
          type: WidgetEnum.SmallBasic;
          props: SmallBasicIntakesProps;
      }
    | {
          type: WidgetEnum.SmallMultiple;
          props: SmallMultipleIntakesProps;
      }
    | {
          type: WidgetEnum.Large;
          props: LargeIntakesProps;
      }
    | {
          type: WidgetEnum.Slot;
          props: WidgetSlotProps;
      }
    | {
          type: WidgetEnum.Calorie;
          props: WidgetCalorieProps;
      };
