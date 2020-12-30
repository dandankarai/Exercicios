import React from 'react';
import { Text } from 'react-native';
import style from './estilo';

export default props => {
  return (

    <> 

      <Text style={style.text}>{props.principal}</Text>

      <Text>{props.secundario}</Text>

    </>
  )
}
// Essa tag vazia representa um fragmento, pra usar diretamente na tela sem precisar de uma View
