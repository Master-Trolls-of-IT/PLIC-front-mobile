import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import GamePageWrapperStyle from '~/infrastructure/ui/pages/game-page/component/wrapper/game-page-wrapper-style';

const Chosen = ({ big }: { big?: boolean }) => {
    const asset = require('~/domain/entities/assets/icon/icon-chosen.svg');

    const newWidth = big ? 100 : 40;
    const newHeight = big ? 100 : 40;

    return (
        <CustomSvg
            style={big ? GamePageWrapperStyle.chosenIconBig : GamePageWrapperStyle.chosenIcon}
            asset={asset}
            height={newHeight}
            width={newWidth}
        />
    );
};

export default Chosen;
