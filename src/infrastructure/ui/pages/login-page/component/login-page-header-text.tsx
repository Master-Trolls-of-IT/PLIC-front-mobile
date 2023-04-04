import React from 'react';
import GenericHeaderText from '~/infrastructure/ui/shared/component/generic-header-text/generic-header-text';

const LoginPageHeaderText = () => {
    const firstText = 'Bonjour,';
    const secondText = 'Veuillez vous connecter';

    return <GenericHeaderText firstText={firstText} secondText={secondText} />;
};

export default LoginPageHeaderText;
