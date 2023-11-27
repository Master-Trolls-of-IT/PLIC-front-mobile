import { Dimensions } from 'react-native';
import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import GamePageStyle from '~/infrastructure/ui/pages/game-page/game-page-style';

const GamePageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/game-page/game-page-blobs-top.svg');

    const newWidth = (Dimensions.get('screen').width * 2) / 3;
    const newHeight = Dimensions.get('screen').height / 8;

    return <CustomSvg style={GamePageStyle.blobstop} asset={asset} height={newHeight} width={newWidth} />;
};

export default GamePageBlobsTop;
