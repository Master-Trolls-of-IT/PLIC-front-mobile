import React from 'react';
import { View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import anecdoteWidgetStyle from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote-style';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const HomePageAnecdote = ({ title, anecdote }: { title: string; anecdote: string }) => {
    //TODO: add an input to be able to choose the icon
    const applesvg = require('~/domain/entities/assets/icon/icon-anecdote-apple.svg');
    return (
        <View style={anecdoteWidgetStyle.anecdoteContainer}>
            <Text style={{ ...CustomFontInterBold().text, ...anecdoteWidgetStyle.title }}>{title}</Text>

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
