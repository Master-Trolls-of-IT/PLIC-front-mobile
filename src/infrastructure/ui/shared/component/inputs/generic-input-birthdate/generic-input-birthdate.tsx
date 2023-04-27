import React from 'react';
import GenericInput from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input';
import { GenericInputBirthdateProps } from '~/domain/interfaces/props/generic-input-birthdate-props';
<<<<<<<< HEAD:src/infrastructure/ui/shared/component/inputs/generic-input-birthdate/generic-input-birthdate.tsx
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import useGenericInputBirthdateData from '~/infrastructure/ui/shared/component/inputs/generic-input-birthdate/hooks';
========
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import useGenericInputBirthdateData from '~/infrastructure/ui/shared/component/inputs/generique-input-birthdate/hooks';
>>>>>>>> 5a26e20 (Rebase + Anecdote Container setup):src/infrastructure/ui/shared/component/inputs/generique-input-birthdate/generic-input-birthdate.tsx

const GenericInputBirthdate = ({ title, input, dispatch, style, placeHolder }: GenericInputBirthdateProps) => {
    const { onChange } = useGenericInputBirthdateData(dispatch, input);

    return (
        <GenericInput
            title={title}
            type={InputEnum.Birthdate}
            input={input}
            dispatch={onChange}
            placeHolder={placeHolder}
            style={style}
        />
    );
};

export default GenericInputBirthdate;
