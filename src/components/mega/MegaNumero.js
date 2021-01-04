import React from 'react';
import { View, Text } from 'react-native';
import style from '../estilo';


export default ({num}) => {
  return (

    <View style={[ style.text, style.Container]}>

      <Text style={style.Num}>
        {num}
      </Text>

    </View>
  )
}