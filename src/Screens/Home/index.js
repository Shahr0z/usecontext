import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../Context/Theme';
import styles from './styles';
import CuButton from '../../Components/Button';

const Home = ({ navigation }) => {
    const { setTheme } = useTheme();
    const { mainContainer } = styles();

    const handleThemeChange = (newTheme) => { setTheme(newTheme) };
    const handleNavigation = () => { navigation.navigate('ProductList') };

    return (
        <View style={mainContainer}>
            <CuButton title="Light Theme" onPress={() => handleThemeChange('light')} />
            <CuButton title="Dark Theme" onPress={() => handleThemeChange('dark')} />
            <CuButton title="Go to Product Card" onPress={() => handleNavigation()} />
        </View>
    );
};

export default Home;