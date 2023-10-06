import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import WidgetPageStyle from '~/infrastructure/ui/pages/widget-page/widget-page-style';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/settings-page/component/background/tree-classic-logo';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import WidgetPageBlobsTop from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-top';
import WidgetPageBlobsBottom from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-bottom';
import { useStore } from '~/infrastructure/controllers/store';
import SmallBlankWidget from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-blank-widget';
import SettingsPageStyle from '~/infrastructure/ui/pages/settings-page/settings-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import LargeBlankWidget from '~/infrastructure/ui/pages/widget-page/component/large-widget/large-blank-widget';
import WidgetSlot from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import Value = Animated.Value;

const WidgetPage = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();
    const confirmButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicGreen,
            borderRadius: 20,
            width: 105,
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const [widgetDropped, setWidgetDropped] = useState<{ type: 'small' | 'large'; x: number; y: number } | undefined>(
        undefined
    );

    return (
        <View style={WidgetPageStyle.container}>
            <View style={WidgetPageStyle.background}>
                <WidgetPageBlobsTop />
                <WidgetPageBlobsBottom />
                <LoginPageTreeClassicLogo />
                <GenericBackArrowIcon goBack={goBack} />
            </View>
            <View style={WidgetPageStyle.contentContainer}>
                <GenericHeaderText
                    firstText="Vos widgets"
                    secondText="Personnalisez vos widgets"
                    containerStyle={WidgetPageStyle.headerContainer}
                />
                <View style={WidgetPageStyle.widgetStart}>
                    <SmallBlankWidget setWidgetDropped={setWidgetDropped} />
                    <LargeBlankWidget setWidgetDropped={setWidgetDropped} />
                </View>
                <Text style={WidgetPageStyle.instructions}>Glissez vos widgets ci-dessous</Text>
                <View style={WidgetPageStyle.widgetArrival}>
                    <View style={WidgetPageStyle.widgetArrivalRow}>
                        <WidgetSlot id={1} widgetDropped={widgetDropped} />
                        <WidgetSlot id={2} widgetDropped={widgetDropped} />
                    </View>
                    <View style={WidgetPageStyle.widgetArrivalRow}>
                        <WidgetSlot id={3} widgetDropped={widgetDropped} />
                        <WidgetSlot id={4} widgetDropped={widgetDropped} />
                    </View>
                </View>
                <View style={WidgetPageStyle.footer}>
                    <GenericButton title="Confirmer" onPress={() => {}} style={confirmButtonStyle} />
                </View>
            </View>
        </View>
    );
};

export default observer(WidgetPage);
