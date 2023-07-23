import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ProductCard = () => {
    const { mainContainer, image, textContainer, title, description } = styles();
    const imageUri = 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU';
    return (
        <View style={mainContainer}>
            <Image source={{ uri: imageUri }} style={image} />
            <View style={textContainer}>
                <Text style={title}>Beautiful mountains</Text>
                <Text style={description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ante a lorem vehicula, in tristique nisi tempus. </Text>
            </View>
        </View>
    );
};

export default ProductCard;