import React from 'react';
import ProductCard from '../../Components/Card/Card';
import { useTheme } from '../../Context/Theme';
import CuButton from '../../Components/Button';
import { StyleSheet, View } from 'react-native';

const ProductList = () => {
    const { setTheme } = useTheme();
    const handleThemeChange = (newTheme) => { setTheme(newTheme) };

    return (
        <>
            <ProductCard />
            <View style={styles.btnView}>
                <CuButton title="Light Theme" onPress={() => handleThemeChange('light')} />
                <CuButton title="Dark Theme" onPress={() => handleThemeChange('dark')} />
            </View>
        </>
    );
}
export default ProductList;

const styles = StyleSheet.create({
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
});