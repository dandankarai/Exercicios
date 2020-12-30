import React, {useState} from 'react';
import { Text } from 'react-native';
import style from '../estilo';

import ContadorDisyplay from './ContadorDisplay'
import ContadorBotao from './ContadorBotao'

export default props => {

  const [num, setNum] = useState (0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (

    <>
      <Text styel={style.textcontador}>
        Contador
       </Text>

       <ContadorDisyplay num={num} />
       
       <ContadorBotao inc={inc} dec={dec} />

    </>
  )
}