import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
import Home from '../../Screens/Home';
import ProductList from '../../Screens/Products';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ProductList" component={ProductList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation