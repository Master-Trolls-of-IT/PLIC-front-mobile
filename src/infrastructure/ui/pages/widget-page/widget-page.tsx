import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import WidgetCalorie from '~/infrastructure/ui/shared/component/widgets/calorie/widget-calorie';
import GenericDropDown from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown';
import { WidgetItem } from '~/domain/interfaces/props/widgets/WidgetItem';

// eslint-disable-next-line max-lines-per-function
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
        line1: [{ type: WidgetEnum.Slot }, { type: WidgetEnum.Slot }],
        line2: [{ type: WidgetEnum.Slot }, { type: WidgetEnum.Slot }]
    });

    useEffect(() => {
        if (handleDrop) {
            if (handleDrop.isLine) {
                setNewWidgetParams((prevState) => {
                    return {
                        line1: handleDrop.id === 1 ? [{ type: WidgetEnum.Large }] : [...prevState.line1],
                        line2: handleDrop.id === 2 ? [{ type: WidgetEnum.Large }] : [...prevState.line2]
                    };
                });
            } else {
                console.log('open');
                setIsAddSmallWidgetModalOpen(true);
            }
        }
    }, [handleDrop]);

    const [choosenWidget, setChoosenWidget] = useState<WidgetEnum>(WidgetEnum.Slot);

    const toggleModal = useCallback((value: boolean) => {
        setIsAddSmallWidgetModalOpen(value);
        setChoosenWidget(WidgetEnum.Slot);
    }, []);

    const nutrientsOptions: { label: string; value: string }[] = [
        { label: NutrientsEnum.Sugar, value: NutrientsEnum.Sugar },
        { label: NutrientsEnum.Lipid, value: NutrientsEnum.Lipid },
        { label: NutrientsEnum.Carbohydrate, value: NutrientsEnum.Carbohydrate },
        { label: NutrientsEnum.FattyAcid, value: NutrientsEnum.FattyAcid },
        { label: NutrientsEnum.Fiber, value: NutrientsEnum.Fiber },
        { label: NutrientsEnum.Salt, value: NutrientsEnum.Salt },
        { label: NutrientsEnum.Protein, value: NutrientsEnum.Protein }
    ];

    const [firstNutrient, setFirstNutrient] = useState<{ label: string; value: string }>({
        label: NutrientsEnum.Sugar,
        value: NutrientsEnum.Sugar
    });
    const [secondNutrient, setSecondNutrient] = useState<{ label: string; value: string }>({
        label: NutrientsEnum.Sugar,
        value: NutrientsEnum.Sugar
    });
    const [thirdNutrient, setThirdNutrient] = useState<{ label: string; value: string }>({
        label: NutrientsEnum.Sugar,
        value: NutrientsEnum.Sugar
    });

    const getNewWidgetParamsWithSmallModal = (prev: WidgetsParams, id: number, item: WidgetItem): WidgetsParams => {
        switch (id) {
            case 1:
                return {
                    line1: [item, prev.line1[1]],
                    line2: [...prev.line2]
                };
            case 2:
                return {
                    line1: [prev.line1[0], item],
                    line2: [...prev.line2]
                };
            case 3:
                return {
                    line1: [...prev.line1],
                    line2: [item, prev.line2[1]]
                };
            case 4:
                return {
                    line1: [...prev.line1],
                    line2: [prev.line2[0], item]
                };
        }
    };

    const handleModalConfirm = useCallback(() => {
        switch (choosenWidget) {
            case WidgetEnum.Anecdote:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, { type: WidgetEnum.Anecdote });
                });
                break;
            case WidgetEnum.EcoScore:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, { type: WidgetEnum.EcoScore });
                });
                break;
            case WidgetEnum.Calorie:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, { type: WidgetEnum.Calorie });
                });
                break;
            case WidgetEnum.SmallBasic:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, {
                        type: WidgetEnum.SmallBasic,
                        nutrient: firstNutrient.value as NutrientsEnum
                    });
                });
                break;
            case WidgetEnum.SmallMultiple:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, {
                        type: WidgetEnum.SmallMultiple,
                        nutrients: [
                            firstNutrient.value as NutrientsEnum,
                            secondNutrient.value as NutrientsEnum,
                            thirdNutrient.value as NutrientsEnum
                        ]
                    });
                });
        }
    }, [choosenWidget]);

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
                                    return <WidgetAnecdote key={index} />;
                                case WidgetEnum.EcoScore:
                                    return <EcoScore key={index} />;
                                case WidgetEnum.Large:
                                    return (
                                        <LargeIntakes
                                            key={index}
                                            nutrients={[
                                                NutrientsEnum.Protein,
                                                NutrientsEnum.Lipid,
                                                NutrientsEnum.Carbohydrate
                                            ]}
                                        />
                                    );
                                case WidgetEnum.SmallBasic:
                                    return <SmallBasicIntakes key={index} />;
                                case WidgetEnum.SmallMultiple:
                                    return <SmallMultipleIntakes key={index} />;
                                case WidgetEnum.Calorie:
                                    return <WidgetCalorie key={index} />;
                                default:
                                    return (
                                        <WidgetSlot
                                            key={index}
                                            id={index + 1}
                                            setHandleDrop={setHandleDrop}
                                            widgetDropped={widgetDropped}
                                        />
                                    );
                            }
                        })}
                    </View>
                    <View style={WidgetPageStyle.widgetArrivalRow}>
                        {newWidgetParams.line2.map((widget, index) => {
                            switch (widget.type) {
                                case WidgetEnum.Anecdote:
                                    return <WidgetAnecdote key={index} />;
                                case WidgetEnum.EcoScore:
                                    return <EcoScore key={index} />;
                                case WidgetEnum.Large:
                                    return <LargeIntakes key={index} />;
                                case WidgetEnum.SmallBasic:
                                    return <SmallBasicIntakes key={index} />;
                                case WidgetEnum.SmallMultiple:
                                    return <SmallMultipleIntakes key={index} />;
                                case WidgetEnum.Calorie:
                                    return <WidgetCalorie key={index} />;
                                default:
                                    return (
                                        <WidgetSlot
                                            key={index}
                                            id={index + 1}
                                            setHandleDrop={setHandleDrop}
                                            widgetDropped={widgetDropped}
                                        />
                                    );
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
                dispatch={toggleModal}
                title="Personnalisation"
                titleSize={24}>
                <View style={WidgetPageStyle.addModalContent}>
                    <View style={WidgetPageStyle.scrollSelectContainer}>
                        <ScrollView
                            style={WidgetPageStyle.scrollSelect}
                            contentContainerStyle={WidgetPageStyle.scrollSelectContent}>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.Anecdote)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-anecdotes.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.Anecdote && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.Calorie)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-calories.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.Calorie && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.EcoScore)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-eco-score.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.EcoScore && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.SmallMultiple)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-mes-apports-multiple.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.SmallMultiple && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChoosenWidget(WidgetEnum.SmallBasic)}>
                                <CustomSvg
                                    asset={require('~/domain/entities/assets/widget/widget-mes-apports-simple.svg')}
                                    height={75}
                                    width={75}
                                />
                                {choosenWidget == WidgetEnum.SmallBasic && (
                                    <View style={WidgetPageStyle.choosenWidget}>
                                        <CustomSvg
                                            asset={require('~/domain/entities/assets/widget/chosen-widget.svg')}
                                            height={50}
                                            width={50}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    {choosenWidget === WidgetEnum.SmallBasic && (
                        <>
                            <Text style={WidgetPageStyle.modalDropdownAreaText}>Widget Mes Apports</Text>
                            <View style={WidgetPageStyle.modalDropdownArea}>
                                <GenericDropDown
                                    title="1er nutriment"
                                    options={nutrientsOptions}
                                    dispatch={setFirstNutrient}
                                />
                            </View>
                        </>
                    )}
                    {choosenWidget === WidgetEnum.SmallMultiple && (
                        <>
                            <Text style={WidgetPageStyle.modalDropdownAreaText}>Widget Mes Apports</Text>

                            <View style={WidgetPageStyle.modalDropdownArea}>
                                <GenericDropDown
                                    title="1er nutriment"
                                    options={nutrientsOptions}
                                    dispatch={setFirstNutrient}
                                />
                                <GenericDropDown
                                    title="2e nutriment"
                                    options={nutrientsOptions}
                                    dispatch={setSecondNutrient}
                                />
                                <GenericDropDown
                                    title="3e nutriment"
                                    options={nutrientsOptions}
                                    dispatch={setThirdNutrient}
                                />
                            </View>
                        </>
                    )}
                    {choosenWidget !== WidgetEnum.Slot && (
                        <View style={WidgetPageStyle.modalFooter}>
                            <GenericButton title="Confirmer" onPress={() => {}} style={confirmButtonStyle} />
                        </View>
                    )}
                </View>
            </CustomModal>
        </View>
    );
};

export default observer(WidgetPage);
