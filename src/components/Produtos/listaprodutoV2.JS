import React from 'react';
import { Text, FlatList } from 'react-native';
import style from '../estilo';

import produtos from './produtos';

export default props => {

  const ProdutoRender = ({ item : p }) =>{ //Nomeio o item como p para ficar mais de boas 
    return(
      <Text key = {p.id}> 
        {p.id}) {p.nome}
      </Text>
    )
  }

  return (
    <>
      <Text styel={style.text}>
        Lista de Produtos
       </Text>

       <FlatList
          data={produtos}
          renderItem={ProdutoRender}
       />
    </>
  )
}