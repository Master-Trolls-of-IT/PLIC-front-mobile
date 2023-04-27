import { Dimensions, View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '../../custom-svg';
import anecdoteWidgetStyle from './widget-anecdote-style';

const HomePageAnecdote = ({ title, anecdote }: { title: string; anecdote: string }) => {
    const applesvg = require('~/domain/entities/assets/icon/icon-anecdote-plage.svg');
    return (
        <View style={{ ...anecdoteWidgetStyle.anecdoteContainer, ...CustomFontInterBold().text }}>
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

export default HomePageAnecdote;
