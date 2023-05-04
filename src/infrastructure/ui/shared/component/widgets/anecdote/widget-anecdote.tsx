import React from 'react';
import { View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { WidgetAnecdoteProps } from '~/domain/interfaces/props/widget-anecdote-props';
import anecdoteWidgetStyle from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const HomePageAnecdote = ({ text, icon }: WidgetAnecdoteProps) => {
    return (
        <View style={anecdoteWidgetStyle.anecdoteContainer}>
            <Text style={{ ...CustomFontInterBold().text, ...anecdoteWidgetStyle.title }}>Anecdote</Text>
            <Text
                style={{
                    ...anecdoteWidgetStyle.text,
                    ...CustomFontInterBold().text
                }}>
                {text}
            </Text>
            <View style={anecdoteWidgetStyle.icon}>
                <CustomSvg asset={icon} height={40} width={40}></CustomSvg>
            </View>
        </View>
    );
};

export default HomePageAnecdote;
