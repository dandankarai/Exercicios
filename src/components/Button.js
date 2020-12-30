import React from 'react';
import { Button } from 'react-native';
import style from './estilo';


export default props => {

  function Executar() {
    console.warn('FUNCIONANDO SEU ARMAANDO')
  }
  return (
    <>
      <Button
        title="Executar Usando Referência"
        onPress={Executar} />

      <Button
        title="Executando chamando a própria função"
        onPress={Executar()} />

      
    </>
  )
}