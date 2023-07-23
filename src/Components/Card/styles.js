import { StyleSheet } from 'react-native';
import { useColors } from '../../Hooks/useColors';

const styles = () => {
    const Colors = useColors();
    return StyleSheet.create({
        mainContainer: {
            backgroundColor: Colors.bgColor,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            margin: 16,
        },
        image: {
            width: '100%',
            height: 200,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        },
        textContainer: {
            padding: 16,
        },
        title: {
            color: Colors.cardText,
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 8,
        },
        description: {
            color: Colors.cardText,
            fontSize: 16,
            lineHeight: 24,
        },
    });
};

export default styles;