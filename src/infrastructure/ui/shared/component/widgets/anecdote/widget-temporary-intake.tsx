import { Dimensions, View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '../../../custom-svg';
import anecdoteWidgetStyle from './widget-anecdote-style';

const HomePageTemporaryIntake = ({ title, anecdote }: { title: string; anecdote: string }) => {
    const applesvg = require('~/domain/entities/assets/icon/icon-anecdote-plage.svg');
    return (
        <View
            style={{
                height: Dimensions.get('screen').width * 0.35,
                width: Dimensions.get('screen').width * 0.85,
                backgroundColor: '#6D4C412C',
                borderRadius: 20,
                padding: 10,
                marginBottom: Dimensions.get('screen').height / 30,
                ...CustomFontInterBold().text
            }}>
            <Text style={anecdoteWidgetStyle.title}>{title}</Text>

            <View style={anecdoteWidgetStyle.textContainer}>
                <Text
                    style={{
                        ...anecdoteWidgetStyle.text,
                        ...CustomFontInterBold().text
                    }}>
                    {anecdote}
                </Text>
            </View>
            <View style={anecdoteWidgetStyle.icon}>
                <CustomSvg asset={applesvg} height={40} width={40}></CustomSvg>
            </View>
        </View>
    );
};

export default HomePageTemporaryIntake;
