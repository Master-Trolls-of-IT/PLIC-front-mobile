import React from 'react';
import { View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { WidgetAnecdoteProps } from '~/domain/interfaces/props/widget-anecdote-props';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import WidgetAnecdoteStyle from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote-style';

const HomePageAnecdote = ({ text, icon }: WidgetAnecdoteProps) => {
    return (
        <View style={WidgetAnecdoteStyle.anecdoteContainer}>
            <Text style={{ ...WidgetAnecdoteStyle.title, ...CustomFontInterBold().text }}>Anecdote</Text>

            <View style={WidgetAnecdoteStyle.textContainer}>
                <Text
                    style={{
                        ...WidgetAnecdoteStyle.text,
                        ...CustomFontInterBold().text
                    }}>
                    {text}
                </Text>
            </View>

            <CustomSvg asset={icon} style={WidgetAnecdoteStyle.icon} height={40} width={40}></CustomSvg>
        </View>
    );
};

export default HomePageAnecdote;
