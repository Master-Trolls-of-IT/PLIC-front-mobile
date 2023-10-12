import React from 'react';
import { View } from 'react-native';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import WidgetAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import SmallBasicIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes';
import SmallMultipleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes';
import WidgetCalorie from '~/infrastructure/ui/shared/component/widgets/calorie/widget-calorie';
import WidgetSlot from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot';
import { WidgetSlotProps } from '~/domain/interfaces/props/widgets/widget-slot-props';

const useRenderWidgetField = (widgetParams: WidgetsParams, lineStyle: object, slotProps?: Partial<WidgetSlotProps>) => {
    return (
        <>
            <View style={lineStyle}>
                {widgetParams.line1.map((widget, index) => {
                    switch (widget.type) {
                        case WidgetEnum.Anecdote:
                            return <WidgetAnecdote key={index} />;
                        case WidgetEnum.EcoScore:
                            return <EcoScore key={index} />;
                        case WidgetEnum.Large:
                            return (
                                <LargeIntakes
                                    key={index}
                                    nutrients={[NutrientsEnum.Protein, NutrientsEnum.Lipid, NutrientsEnum.Carbohydrate]}
                                />
                            );
                        case WidgetEnum.SmallBasic:
                            return <SmallBasicIntakes key={index} nutrient={widget.nutrient} />;
                        case WidgetEnum.SmallMultiple:
                            return <SmallMultipleIntakes key={index} nutrients={widget.nutrients} />;
                        case WidgetEnum.Calorie:
                            return <WidgetCalorie key={index} />;
                        default:
                            return (
                                <WidgetSlot
                                    key={index}
                                    id={index + 1}
                                    setHandleDrop={slotProps.setHandleDrop}
                                    widgetDropped={slotProps.widgetDropped}
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
                            return <EcoScore key={index} />;
                        case WidgetEnum.Large:
                            return (
                                <LargeIntakes
                                    key={index + 2}
                                    nutrients={[NutrientsEnum.Protein, NutrientsEnum.Lipid, NutrientsEnum.Carbohydrate]}
                                />
                            );
                        case WidgetEnum.SmallBasic:
                            return <SmallBasicIntakes key={index} nutrient={widget.nutrient} />;
                        case WidgetEnum.SmallMultiple:
                            return <SmallMultipleIntakes key={index} nutrients={widget.nutrients} />;
                        case WidgetEnum.Calorie:
                            return <WidgetCalorie key={index} />;
                        default:
                            return (
                                <WidgetSlot
                                    key={index}
                                    id={index + 3}
                                    setHandleDrop={slotProps.setHandleDrop}
                                    widgetDropped={slotProps.widgetDropped}
                                />
                            );
                    }
                })}
            </View>
        </>
    );
};

export default useRenderWidgetField;
