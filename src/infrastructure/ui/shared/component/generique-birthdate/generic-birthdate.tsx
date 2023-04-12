import React, { useEffect } from 'react';
import GenericInput from '~/infrastructure/ui/shared/component/generic-input/generic-input';
import { GenericBirthdateProps } from '~/application/type/props/generic-birthdate-props';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import useGenericBirthdateData from '~/infrastructure/ui/shared/component/generique-birthdate/hooks';

const GenericBirthdate = ({ title, input, dispatch, style, placeHolder }: GenericBirthdateProps) => {
    const { onChange } = useGenericBirthdateData(dispatch, input);

    return (
        <GenericInput
            title={title}
            type={InputTypeEnum.Birthdate}
            input={input}
            dispatch={onChange}
            placeHolder={placeHolder}
            style={style}
        />
    );
};

export default GenericBirthdate;
