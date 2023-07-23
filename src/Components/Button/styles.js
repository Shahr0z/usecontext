import { StyleSheet } from 'react-native';
import { useColors } from '../../Hooks/useColors';

const styles = () => {
    const Colors = useColors();
    return StyleSheet.create({
        button: {
            backgroundColor: Colors.btnBg,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 4,
            marginBottom: 10,
        },
        buttonText: {
            color: Colors.textColor,
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
};

export default styles;