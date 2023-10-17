import React from 'react';
import { View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import WidgetAnecdoteStyle from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote-style';
import useWidgetAnecdoteData from '~/infrastructure/ui/shared/component/widgets/anecdote/hooks';

const WidgetAnecdotes = () => {
    const { annecdoteObject } = useWidgetAnecdoteData();

    return (
        <View style={WidgetAnecdoteStyle.anecdoteContainer}>
            <Text style={{ ...WidgetAnecdoteStyle.title, ...CustomFontInterBold().text }}>Anecdote</Text>

            <View style={WidgetAnecdoteStyle.textContainer}>
                <Text
                    style={{
                        ...WidgetAnecdoteStyle.text,
                        ...CustomFontInterBold().text
                    }}>
                    {annecdoteObject?.text}
                </Text>
            </View>

            {annecdoteObject && (
                <CustomSvg
                    asset={annecdoteObject.icon}
                    style={WidgetAnecdoteStyle.icon}
                    height={40}
                    width={40}></CustomSvg>
            )}
        </View>
    );
};

export default WidgetAnecdotes;
