import React, { Dispatch, SetStateAction, useState } from 'react';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown-style';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import {
    birthdateTooltipMessage,
    emailTooltipMessage,
    passwordTooltipMessage
} from '~/application/type/constant/tooltip-constant';

const useGenericDropDownData = ({
                                 type,
                                 dispatch
                             }: {
    type: InputTypeEnum;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
}) => {
    //Add implementation for the dropdown hook
    const [secureTextEntry, setSecureTextEntry] = useState(type == InputTypeEnum.Password);
    const [showTooltip, setShowTooltip] = useState(false);

    const assetShowTextOff = require('~/domain/entities/assets/icon/icon-show-text-off.svg');
    const assetShowTextOn = require('~/domain/entities/assets/icon/icon-show-text-on.svg');
    const showPasswordText = secureTextEntry ? (
        <CustomSvg asset={assetShowTextOff} height={28} width={35} />
    ) : (
        <CustomSvg asset={assetShowTextOn} height={28} width={35} />
    );

    const onPressDropDownIcon = () => {
        //Add implementation

    };

    const selectRightMessage = () => {
        if (type == InputTypeEnum.Email) return emailTooltipMessage;
        else if (type == InputTypeEnum.Password) return passwordTooltipMessage;
        else return birthdateTooltipMessage;
    };

    return {
        dispatchTooltip: setShowTooltip,
        onPressDropDownIcon,
        secureTextEntry,
        selectRightMessage,
        showPasswordText,
        showTooltip,
    };
};

export default useGenericDropDownData;
