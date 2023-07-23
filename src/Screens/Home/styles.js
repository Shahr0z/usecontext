import { StyleSheet } from 'react-native';
import { useColors } from '../../Hooks/useColors';
// import { useColors } from '../../Theme/Colors/useColors';

const styles = () => {
    const Colors = useColors();

    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.bgColor,
        },
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