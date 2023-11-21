import React from 'react';
import { observer } from 'mobx-react';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { useStore } from '~/infrastructure/controllers/store';

const ResetButton = () => {
    const {
        GameStore: { reset }
    } = useStore();
    return (
        <GenericButton
            style={{ container: { position: 'absolute', top: 20, right: 30 }, text: {} }}
            title={'Reset Game'}
            onPress={reset}
        />
    );
};

export default observer(ResetButton);
