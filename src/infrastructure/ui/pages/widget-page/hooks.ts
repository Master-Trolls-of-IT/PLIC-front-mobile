import { useCallback, useEffect, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { WidgetItem } from '~/domain/interfaces/props/widgets/widget-item';
import useRenderWidgetField from '~/infrastructure/ui/shared/helper/use-render-widget-field';
import WidgetPageStyle from '~/infrastructure/ui/pages/widget-page/widget-page-style';

const useWidgetPageData = () => {
    const {
        NavigationStore: { goBack },
        DataStore: { setWidgetParams }
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
                    line1: [{ ...item }, prev.line1[1]],
                    line2: [...prev.line2]
                };
            case 2:
                return {
                    line1: [prev.line1[0], { ...item }],
                    line2: [...prev.line2]
                };
            case 3:
                return {
                    line1: [...prev.line1],
                    line2: [{ ...item }, prev.line2[1]]
                };
            case 4:
                return {
                    line1: [...prev.line1],
                    line2: [prev.line2[0], { ...item }]
                };
        }
    };

    const handleModalConfirm = useCallback(() => {
        switch (choosenWidget) {
            case WidgetEnum.Anecdote:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, {
                        type: WidgetEnum.Anecdote
                    });
                });
                break;
            case WidgetEnum.EcoScore:
                setNewWidgetParams((prevState) => {
                    return getNewWidgetParamsWithSmallModal(prevState, handleDrop.id, {
                        type: WidgetEnum.EcoScore
                    });
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
        setIsAddSmallWidgetModalOpen(false);
    }, [choosenWidget, firstNutrient.value, handleDrop, secondNutrient.value, thirdNutrient.value]);

    const [isErrorModal, setIsErrorModal] = useState(false);

    const handlePageConfig = useCallback(() => {
        let isEntryValid = true;
        newWidgetParams.line1.forEach((widget) => {
            if (widget.type === WidgetEnum.Slot) isEntryValid = false;
        });
        newWidgetParams.line2.forEach((widget) => {
            if (widget.type === WidgetEnum.Slot) isEntryValid = false;
        });

        if (isEntryValid) {
            setWidgetParams(newWidgetParams);
            goBack();
        } else {
            setIsErrorModal(true);
        }
    }, [goBack, newWidgetParams, setWidgetParams]);

    const widgetField = useRenderWidgetField(newWidgetParams, WidgetPageStyle.widgetArrivalRow, {
        widgetDropped: widgetDropped,
        setHandleDrop: setHandleDrop
    });

    return {
        confirmButtonStyle,
        handleDrop,
        setHandleDrop,
        widgetDropped,
        setWidgetDropped,
        isAddSmallWidgetModalOpen,
        toggleModal,
        nutrientsOptions,
        setFirstNutrient,
        setSecondNutrient,
        setThirdNutrient,
        handleModalConfirm,
        isErrorModal,
        setIsErrorModal,
        handlePageConfig,
        goBack,
        newWidgetParams,
        choosenWidget,
        setChoosenWidget,
        widgetField
    };
};

export default useWidgetPageData;
