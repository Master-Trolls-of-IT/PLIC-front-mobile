import { StyleSheet } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const GenericErrorMessageStyle = StyleSheet.create({
    container: {
        margin: -15
    },

    message: {
        color: ColorEnum.ClassicRedIcon
    }
});

export default GenericErrorMessageStyle;
