import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';

const CuButton = ({ title, onPress }) => {
    const { button, buttonText } = styles();
    return (
        <TouchableOpacity onPress={onPress} style={button}>
            <Text style={buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CuButton

