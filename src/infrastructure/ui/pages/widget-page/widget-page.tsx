import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import WidgetPageStyle from '~/infrastructure/ui/pages/widget-page/widget-page-style';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/settings-page/component/background/tree-classic-logo';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import WidgetPageBlobsTop from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-top';
import WidgetPageBlobsBottom from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-bottom';
import { useStore } from '~/infrastructure/controllers/store';
import SmallBlankWidget from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-blank-widget';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import LargeBlankWidget from '~/infrastructure/ui/pages/widget-page/component/large-widget/large-blank-widget';
import WidgetSlot from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import WidgetAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';
import SmallBasicIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes';
import SmallMultipleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes';
import GetDailyNutrientsGoal from '~/infrastructure/ui/shared/helper/get-daily-nutrients-goal';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { WidgetItem } from '~/domain/interfaces/props/widgets/widget-item';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const WidgetPage = () => {
    const {
        NavigationStore: { goBack },
        LoginStore: { userData }
    } = useStore();

    const confirmButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicGreen,
            borderRadius: 20,
            width: 105,
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const [handleDrop, setHandleDrop] = useState<{ isLine: boolean; id: number }>();

    const [widgetDropped, setWidgetDropped] = useState<{ type: 'small' | 'large'; x: number; y: number } | undefined>(
        undefined
    );

    const [isAddSmallWidgetModalOpen, setIsAddSmallWidgetModalOpen] = useState(false);

    const [newWidgetParams, setNewWidgetParams] = useState<WidgetsParams>({
        line1: [
            { type: WidgetEnum.Slot, props: { id: 1, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } },
            { type: WidgetEnum.Slot, props: { id: 2, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } }
        ],
        line2: [
            { type: WidgetEnum.Slot, props: { id: 3, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } },
            { type: WidgetEnum.Slot, props: { id: 4, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } }
        ]
    });

    useEffect(() => {
        setNewWidgetParams((prevParams) => {
            const updatedLine1 = prevParams.line1.map((item) => {
                if (item.type === WidgetEnum.Slot) {
                    return { ...item, props: { ...item.props, widgetDropped, setHandleDrop } };
                }
                return item;
            });

            const updatedLine2 = prevParams.line2.map((item) => {
                if (item.type === WidgetEnum.Slot) {
                    return { ...item, props: { ...item.props, widgetDropped, setHandleDrop } };
                }
                return item;
            });

            return {
                line1: updatedLine1,
                line2: updatedLine2
            };
        });
    }, [widgetDropped]);

    const dailyNutrientsGoal = GetDailyNutrientsGoal(userData.BasalMetabolism);
    const dailyNutrientsEarned = {
        energy: Math.round(userData.BasalMetabolism * 0.82),
        protein: Math.round(dailyNutrientsGoal.protein * 0.6),
        carbohydrate: Math.round(dailyNutrientsGoal.carbohydrate * 0.4),
        lipid: Math.round(dailyNutrientsGoal.lipid * 0.8)
    } as DailyNutrientsType;

    useEffect(() => {
        if (handleDrop) {
            if (handleDrop.isLine) {
                setNewWidgetParams((prevState) => {
                    const largeWidget: WidgetItem = {
                        type: WidgetEnum.Large,
                        props: {
                            energy: {
                                nutrientType: NutrientsEnum.Energy,
                                earned: dailyNutrientsEarned.energy,
                                goal: dailyNutrientsGoal.energy
                            },
                            firstNutrient: {
                                nutrientType: NutrientsEnum.Protein,
                                earned: dailyNutrientsEarned.protein,
                                goal: dailyNutrientsGoal.protein
                            },
                            secondNutrient: {
                                nutrientType: NutrientsEnum.Lipid,
                                earned: dailyNutrientsEarned.lipid,
                                goal: dailyNutrientsGoal.lipid
                            },
                            thirdNutrient: {
                                nutrientType: NutrientsEnum.Carbohydrate,
                                earned: dailyNutrientsEarned.carbohydrate,
                                goal: dailyNutrientsGoal.carbohydrate
                            }
                        }
                    };
                    return {
                        line1: handleDrop.id === 1 ? [{ ...largeWidget }] : [...prevState.line1],
                        line2: handleDrop.id === 2 ? [{ ...largeWidget }] : [...prevState.line2]
                    };
                });
            } else {
                console.log('open');
                setIsAddSmallWidgetModalOpen(true);
            }
        }
    }, [
        dailyNutrientsEarned.carbohydrate,
        dailyNutrientsEarned.energy,
        dailyNutrientsEarned.lipid,
        dailyNutrientsEarned.protein,
        dailyNutrientsGoal.carbohydrate,
        dailyNutrientsGoal.energy,
        dailyNutrientsGoal.lipid,
        dailyNutrientsGoal.protein,
        handleDrop
    ]);

    return (
        <View style={WidgetPageStyle.container}>
            <View style={WidgetPageStyle.background}>
                <WidgetPageBlobsTop />
                <WidgetPageBlobsBottom />
                <LoginPageTreeClassicLogo />
                <GenericBackArrowIcon goBack={goBack} />
            </View>
            <View style={WidgetPageStyle.contentContainer}>
                <GenericHeaderText
                    firstText="Vos widgets"
                    secondText="Personnalisez vos widgets"
                    containerStyle={WidgetPageStyle.headerContainer}
                />
                <View style={WidgetPageStyle.widgetStart}>
                    <SmallBlankWidget setWidgetDropped={setWidgetDropped} />
                    <LargeBlankWidget setWidgetDropped={setWidgetDropped} />
                </View>
                <Text style={WidgetPageStyle.instructions}>Glissez vos widgets ci-dessous</Text>
                <View style={WidgetPageStyle.widgetArrival}>
                    <View style={WidgetPageStyle.widgetArrivalRow}>
                        {newWidgetParams.line1.map((widget, index) => {
                            switch (widget.type) {
                                case WidgetEnum.Anecdote:
                                    return <WidgetAnecdote key={index} {...widget.props} />;
                                case WidgetEnum.EcoScore:
                                    return <EcoScore key={index} {...widget.props} />;
                                case WidgetEnum.Large:
                                    return <LargeIntakes key={index} {...widget.props} />;
                                case WidgetEnum.SmallBasic:
                                    return <SmallBasicIntakes key={index} {...widget.props} />;
                                case WidgetEnum.SmallMultiple:
                                    return <SmallMultipleIntakes key={index} {...widget.props} />;
                                default:
                                    return <WidgetSlot key={index} {...widget.props} />;
                            }
                        })}
                    </View>
                    <View style={WidgetPageStyle.widgetArrivalRow}>
                        {newWidgetParams.line2.map((widget, index) => {
                            switch (widget.type) {
                                case WidgetEnum.Anecdote:
                                    return <WidgetAnecdote key={index} {...widget.props} />;
                                case WidgetEnum.EcoScore:
                                    return <EcoScore key={index} {...widget.props} />;
                                case WidgetEnum.Large:
                                    return <LargeIntakes key={index} {...widget.props} />;
                                case WidgetEnum.SmallBasic:
                                    return <SmallBasicIntakes key={index} {...widget.props} />;
                                case WidgetEnum.SmallMultiple:
                                    return <SmallMultipleIntakes key={index} {...widget.props} />;
                                default:
                                    return <WidgetSlot key={index} {...widget.props} />;
                            }
                        })}
                    </View>
                </View>
                <View style={WidgetPageStyle.footer}>
                    <GenericButton title="Confirmer" onPress={() => {}} style={confirmButtonStyle} />
                </View>
            </View>
            <CustomModal
                isVisible={isAddSmallWidgetModalOpen}
                dispatch={setIsAddSmallWidgetModalOpen}
                title="Personnalisation"
                titleSize={24}>
                <View
                    style={{
                        ...WidgetPageStyle.addModalContent,
                        ...{ height: Dimensions.get('screen').height * 0.25 }
                    }}>
                    <View style={WidgetPageStyle.scrollSelectContainer}>
                        <ScrollView
                            style={WidgetPageStyle.scrollSelect}
                            contentContainerStyle={WidgetPageStyle.scrollSelectContent}>
                            <TouchableOpacity>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-anecdotes.svg')}
                                    height={75}
                                    width={75}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-calories.svg')}
                                    height={75}
                                    width={75}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-eco-score.svg')}
                                    height={75}
                                    width={75}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-mes-apports-multiple.svg')}
                                    height={75}
                                    width={75}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-mes-apports-simple.svg')}
                                    height={75}
                                    width={75}
                                />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={WidgetPageStyle.modalFooter}>
                        <GenericButton title="Confirmer" onPress={() => {}} style={confirmButtonStyle} />
                    </View>
                </View>
            </CustomModal>
        </View>
    );
};

export default observer(WidgetPage);
