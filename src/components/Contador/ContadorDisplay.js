import React from 'react';
import { View, Text } from 'react-native';
import style from '../estilo';


export default props => {

  return (

    <View style={style.display}>

      <Text style={[style.text, style.displayText]}>

        {props.num}

      </Text>

    </View>
  )
}