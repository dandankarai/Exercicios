import React from 'react';
import { Text } from 'react-native';
import style from '../estilo';

import produtos from './produtos';

export default props => {
  return (
    <>
      <Text styel={style.text}>
        Lista de Produtos
       </Text>

      {produtos.map(p => {
        return (
          <Text key={p.id}>
            {p.id}) {p.nome} tem R$ {p.preco}
          </Text>
        )

      })}
    </>
  )
}