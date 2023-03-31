import React from 'react';
import GenericHeaderText from '~/infrastructure/ui/pages/shared/component/generic-header-text';
import GenericHeaderTextStyle from '~/infrastructure/ui/pages/shared/style/generic-header-text-style';
import genericHeaderTextStyle from '~/infrastructure/ui/pages/shared/style/generic-header-text-style';

const LoginPageHeaderText = () => {
    const firstText = 'Bonjour,';
    const secondText = 'Veuillez vous connecter';

    return (
        <GenericHeaderText
            style={genericHeaderTextStyle.container}
            firstText={firstText}
            firstTextStyle={GenericHeaderTextStyle.firstText}
            secondText={secondText}
            secondTextStyle={GenericHeaderTextStyle.secondText}
        />
    );
};

export default LoginPageHeaderText;
