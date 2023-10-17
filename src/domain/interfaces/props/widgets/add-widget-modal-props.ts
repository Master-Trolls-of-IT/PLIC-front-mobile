import { Dispatch, SetStateAction } from 'react';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';

type NutrientType = {
    label: string;
    value: string;
};

export type AddWidgetModalProps = {
    isAddSmallWidgetModalOpen: boolean;
    toggleModal: (value: boolean) => void;
    chosenWidget: WidgetEnum;
    setChosenWidget: Dispatch<SetStateAction<WidgetEnum>> | ((value: WidgetEnum) => void);
    nutrientsOptions: NutrientType[];
    setFirstNutrient: Dispatch<SetStateAction<NutrientType>> | ((value: NutrientType) => void);
    setSecondNutrient: Dispatch<SetStateAction<NutrientType>> | ((value: NutrientType) => void);
    setThirdNutrient: Dispatch<SetStateAction<NutrientType>> | ((value: NutrientType) => void);
    handleModalConfirm: () => void;
};
