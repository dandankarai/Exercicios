import React from 'react';
import { Text } from 'react-native';
import style from './estilo';


export default ({max, min}) => {
  
  const delta = max - min + 1;
  const aleatorio = parseInt(Math.random() * delta) + min;

  return (

    <Text style={style.text}>

      O valor aleatório é {aleatorio}
      
    </Text>

  )
  
}