import React from 'react';
import { Pressable  }  from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = props => {
    const { onPress, type, btnStyle, disabled } = props;

 return (
    <Pressable
    style={btnStyle}
    disabled={disabled}
    onPress={onPress}
    >
        <Icon name={type === 'ADD' ? 'plus' : 'minus' } size={40} color='white' />
    </Pressable>   

    )
};

export default FloatingButton;