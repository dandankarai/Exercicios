import React from 'react';
import { Text } from 'react-native';
import style from './estilo'

export default () => {
  return(
    <Text style={style.text}>
      O valor X é maior que o valor Y
    </Text>
  )
}