import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import style from './estilo'

export default props => {

  // let numero = props.inicial;
  const [numero, setNumero] = useState(props.inicial)

  const inc = () => {
    setNumero(numero + 1);
    // console.warn(numero);
  }

  const dec = () => {
    setNumero(numero - 1);
    // console.warn(numero);
  }
  return (

    <>
      <Text style={style.text}> {numero} </Text>

      <Button title="+" onPress={inc} style={style.button} />
      <Button title="-" onPress={dec} style={style.button} />
    </>

  )

}