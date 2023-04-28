import React from 'react';
import { Dimensions } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import HistoricalPageBlobsTopStyle from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blosb-top-style';

const HistoricalPageBlobsTop = () => {
    const asset = require('~/domain/entities/assets/historical-page/historical-page-blobs-top.svg');

    const newHeight: number = Dimensions.get('screen').height / 4;
    const newWidth: number = Dimensions.get('screen').width;

    return <CustomSvg asset={asset} style={HistoricalPageBlobsTopStyle} height={newHeight} width={newWidth} />;
};

export default HistoricalPageBlobsTop;
