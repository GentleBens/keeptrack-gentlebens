import React from 'react';
import { Pressable  }  from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = props => {
    const { onPress, type, btnStyle, disable } = props;
 return (
    <Pressable
    style={btnStyle}
    disable={disable}
    onPress={onPress}
    >
        <Icon name={type === 'ADD' ? 'plus' : 'minus' } size={35} color='white' />
    </Pressable>   

    )
};

export default FloatingButton;