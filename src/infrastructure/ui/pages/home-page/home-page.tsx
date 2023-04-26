import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '../../shared/custom-svg';
import GenericHeaderText from '../../shared/component/generic-header-text/generic-header-text';
import HomePageBasket from './component/background/home-page-basket';

const HomePage: FunctionComponent<any> = ({ navigation }) => {
    const customFont = CustomFontInterBold().text;

    return (
        <View>
            <View style={HomePageStyle.background}>
                <HomePageBlobsTop />
            </View>
            <GenericHeaderText firstText={'Mathis my love'} secondText={'Votre Résumé'} reverseTitle={true} />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                <HomePageBasket />
            </View>
        </View>
    );
};

export default HomePage;
