import React from 'react';
import { SvgUri } from 'react-native-svg';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ColorEnum } from "~/domain/interfaces/enum/color-enum";

interface RecipeItemProps {
    image: string;
    name: string;
    rating: number;
    numRatings: number;
    prepTime: string;
    difficulty: string;
    ecoScore: string;
    mainIngredients: string[];
    createdBy: string;
    tags: string[];
}

const styles = StyleSheet.create({
    wrapper: {
        width: 351,
        height: 164,
        padding: 16,
        marginBottom: 16,
        borderRadius: 20,
        backgroundColor: ColorEnum.ExtraOpaqueBrown
    },
    container: {
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 1
    },
    rightContainer: {
        flex: 2,
        marginLeft: 10
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 15
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    prepTime: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    mainIngredients: {
        fontSize: 16
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    createdBy: {
        fontSize: 16,
        textAlign: 'left'
    },
    tags: {
        fontSize: 16
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        fontSize: 16
    }
});

const RecipeItem: React.FC<RecipeItemProps> = ({
    image,
    name,
    rating,
    numRatings,
    prepTime,
    difficulty,
    ecoScore,
    mainIngredients,
    createdBy,
    tags
}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.ratingContainer}>
                        <SvgUri
                            width="100%"
                            height="100%"
                            uri="~/src/domain/entities/assets/icon/icon-note.svg" // Assurez-vous que le chemin vers votre fichier SVG est correct
                        />
                        <Text style={styles.ratingText}>
                            {rating} / 5 ({numRatings} évaluations)
                        </Text>
                    </View>
                    <Text style={styles.prepTime}>
                        {prepTime} {' • '} {difficulty} {' • '} Score : {ecoScore}
                    </Text>
                    <Text style={styles.mainIngredients}>{mainIngredients.join(', ')}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.createdBy}>{createdBy}</Text>
                <Text style={styles.tags}>{tags.join(', ')}</Text>
            </View>
        </View>
    );
};

export default RecipeItem;
