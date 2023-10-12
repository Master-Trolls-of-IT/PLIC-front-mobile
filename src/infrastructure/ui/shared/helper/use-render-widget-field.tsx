import React from 'react';
import { View } from 'react-native';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import WidgetAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import WidgetSlot from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot';
import { WidgetSlotProps } from '~/domain/interfaces/props/widgets/widget-slot-props';
import WidgetLargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/widget-large-intakes';
import WidgetSmallSingleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-single/widget-small-single-intakes';
import WidgetEnergy from '~/infrastructure/ui/shared/component/widgets/energy/widget-energy';
import WidgetSmallMultipleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/widget-small-multiple-intakes';
import WidgetEcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';

const useRenderWidgetField = (widgetParams: WidgetsParams, lineStyle: object, slotProps?: Partial<WidgetSlotProps>) => {
    return (
        <>
            <View style={lineStyle}>
                {widgetParams.line1.map((widget, index) => {
                    switch (widget.type) {
                        case WidgetEnum.Anecdote:
                            return <WidgetAnecdote key={index} />;
                        case WidgetEnum.EcoScore:
                            return <WidgetEcoScore key={index} />;
                        case WidgetEnum.Large:
                            return (
                                <WidgetLargeIntakes
                                    key={index}
                                    nutrients={[NutrientsEnum.Protein, NutrientsEnum.Lipid, NutrientsEnum.Carbohydrate]}
                                />
                            );
                        case WidgetEnum.SmallSingle:
                            return <WidgetSmallSingleIntakes key={index} nutrient={widget.nutrient} />;
                        case WidgetEnum.SmallMultiple:
                            return <WidgetSmallMultipleIntakes key={index} nutrients={widget.nutrients} />;
                        case WidgetEnum.Energy:
                            return <WidgetEnergy key={index} />;
                        default:
                            return (
                                <WidgetSlot
                                    key={index}
                                    id={index + 1}
                                    setHandleDrop={slotProps?.setHandleDrop}
                                    widgetDropped={slotProps?.widgetDropped}
                                />
                            );
                    }
                })}
            </View>
            <View style={lineStyle}>
                {widgetParams.line2.map((widget, index) => {
                    switch (widget.type) {
                        case WidgetEnum.Anecdote:
                            return <WidgetAnecdote key={index} />;
                        case WidgetEnum.EcoScore:
                            return <WidgetEcoScore key={index} />;
                        case WidgetEnum.Large:
                            return (
                                <WidgetLargeIntakes
                                    key={index + 2}
                                    nutrients={[NutrientsEnum.Protein, NutrientsEnum.Lipid, NutrientsEnum.Carbohydrate]}
                                />
                            );
                        case WidgetEnum.SmallSingle:
                            return <WidgetSmallSingleIntakes key={index} nutrient={widget.nutrient} />;
                        case WidgetEnum.SmallMultiple:
                            return <WidgetSmallMultipleIntakes key={index} nutrients={widget.nutrients} />;
                        case WidgetEnum.Energy:
                            return <WidgetEnergy key={index} />;
                        default:
                            return (
                                <WidgetSlot
                                    key={index}
                                    id={index + 3}
                                    setHandleDrop={slotProps?.setHandleDrop}
                                    widgetDropped={slotProps?.widgetDropped}
                                />
                            );
                    }
                })}
            </View>
        </>
    );
};

export default useRenderWidgetField;
