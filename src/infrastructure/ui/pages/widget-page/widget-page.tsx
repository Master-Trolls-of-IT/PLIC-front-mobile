import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import WidgetPageStyle from '~/infrastructure/ui/pages/widget-page/widget-page-style';
import LoginPageTreeClassicLogo from '~/infrastructure/ui/pages/settings-page/component/background/tree-classic-logo';
import GenericBackArrowIcon from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon';
import WidgetPageBlobsTop from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-top';
import WidgetPageBlobsBottom from '~/infrastructure/ui/pages/widget-page/component/background/widget-page-blobs-bottom';
import { useStore } from '~/infrastructure/controllers/store';
import SmallBlankWidget from '~/infrastructure/ui/pages/widget-page/component/small-widget/small-blank-widget';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import LargeBlankWidget from '~/infrastructure/ui/pages/widget-page/component/large-widget/large-blank-widget';
import WidgetSlot from '~/infrastructure/ui/pages/widget-page/component/widget-slot/widget-slot';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { WidgetsParams } from '~/domain/interfaces/props/widgets/widgets-params';
import { WidgetEnum } from '~/domain/interfaces/enum/widget-enum';
import WidgetAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';
import SmallBasicIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/small-basic-intakes';
import SmallMultipleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes';

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

    const [handleDrop, setHandleDrop] = useState<{ isLine: boolean; id: number }>();

    const [widgetDropped, setWidgetDropped] = useState<{ type: 'small' | 'large'; x: number; y: number } | undefined>(
        undefined
    );

    const [newWidgetParams, setNewWidgetParams] = useState<WidgetsParams>({
        line1: [
            { type: WidgetEnum.Slot, props: { id: 1, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } },
            { type: WidgetEnum.Slot, props: { id: 2, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } }
        ],
        line2: [
            { type: WidgetEnum.Slot, props: { id: 3, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } },
            { type: WidgetEnum.Slot, props: { id: 4, widgetDropped: widgetDropped, setHandleDrop: setHandleDrop } }
        ]
    });

    useEffect(() => {
        switch (handleDrop.isLine) {
            case true:
        }
    }, [handleDrop]);

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
                        {newWidgetParams.line1.map((widget, index) => {
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
                                    return <WidgetSlot key={index} {...widget.props} />;
                            }
                        })}
                    </View>
                    <View style={WidgetPageStyle.widgetArrivalRow}>
                        {newWidgetParams.line2.map((widget, index) => {
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
                                    return <WidgetSlot key={index} {...widget.props} />;
                            }
                        })}
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
