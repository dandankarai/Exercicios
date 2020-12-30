import React from 'react';
import { View,Button } from 'react-native';
import style from '../estilo'



export default props => {
  return (
    
    <View style={style.button}>

      <Button title="+" onPress={props.inc} />
      <Button title="-" onPress={props.dec} />

    </View>
  )
}