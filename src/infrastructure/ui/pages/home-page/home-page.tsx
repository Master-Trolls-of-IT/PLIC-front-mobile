import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from '~/infrastructure/ui/pages/home-page/component/background/home-page-basket';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import useHomePageData from '~/infrastructure/ui/pages/home-page/hooks';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import WidgetAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import SmallBasicIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes';
import SmallMultipleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes';

const HomePage = () => {
    const { username, chooseRightDynamicImage, widgetsParams } = useHomePageData();

    return (
        <View>
            <View style={HomePageStyle.background}>
                <HomePageBlobsTop />
            </View>
            <View style={HomePageStyle.container}>
                <View style={HomePageStyle.header}>
                    <GenericHeaderText
                        firstText={'Votre Résumé'}
                        secondText={`Bonjour ${username},`}
                        containerStyle={HomePageStyle.headerContainer}
                        showHomePageHeader={true}
                    />
                </View>

                <HomePageBasket asset={chooseRightDynamicImage()} />

                <View style={HomePageStyle.widgetContainer}>
                    <View style={HomePageStyle.widgetContainerFirstRow}>
                        {widgetsParams.line1.length > 0 &&
                            widgetsParams.line1.length < 3 &&
                            widgetsParams.line1.map((widget, index) => {
                                switch (widget.type) {
                                    case WidgetEnum.Anecdote:
                                        return <WidgetAnecdote key={index} {...widget.props} />;
                                    case WidgetEnum.EcoScore:
                                        return <EcoScore key={index} {...widget.props} />;
                                    case WidgetEnum.Large:
                                        return <LargeIntakes key={index} {...widget.props} />;
                                    case WidgetEnum.SmallBasic:
                                        return <SmallBasicIntakes key={index} {...widget.props} />;
                                    case WidgetEnum.SmallMultiple:
                                        return <SmallMultipleIntakes key={index} {...widget.props} />;
                                    default:
                                }
                            })}
                    </View>

                    <View style={HomePageStyle.widgetContainerTwoWidgetRow}>
                        {widgetsParams.line2.length > 0 &&
                            widgetsParams.line2.length < 3 &&
                            widgetsParams.line2.map((widget, index) => {
                                switch (widget.type) {
                                    case WidgetEnum.Anecdote:
                                        return <WidgetAnecdote key={index} {...widget.props} />;
                                    case WidgetEnum.EcoScore:
                                        return <EcoScore key={index} {...widget.props} />;
                                    case WidgetEnum.Large:
                                        return <LargeIntakes key={index} {...widget.props} />;
                                    case WidgetEnum.SmallBasic:
                                        return <SmallBasicIntakes key={index} {...widget.props} />;
                                    case WidgetEnum.SmallMultiple:
                                        return <SmallMultipleIntakes key={index} {...widget.props} />;
                                    default:
                                }
                            })}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(HomePage);
