import React from 'react';
import { View } from 'react-native';
import style from './components/estilo'

import Megasena from './components/mega/Mega'
// import FlexBoxV4 from './components/Layout/FlexBoxV4'
// import TextInput from './components/DigiteNome'
// import listaprodutosV2 from './components/Produtos/listaprodutoV2'
// import listaprodutos from './components/Produtos/produtos'
// import ContadorV2 from './components/Contador/Contadorv2'
// import Contador from './components/Contador';
// import Button from './components/Button'
// import Title from './components/Title'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Primeiro from './components/Primeiro';
// import { Comp,Comp1,Comp2 } from './components/Multi';


export default () => {
  return (

    <View style={style.App}>
      <Megasena qtdeNumeros={12} />
      {/*
      <FlexBoxV4 />
      <FlexBoxV3 />
      <FlexBoxV2 />
      <FlexBoxV1 />
      <TextInput />
      <listaprodutosV2 />
      <listaprodutos />
    <ContadorV2 />
    <Contador inicial={100} />
    <Button />
    <Title principal="Cadastro Produto"
      secundario="Tela de Cadastro do produto" />
    <Aleatorio max={60} min={1} />
    <Aleatorio max={60} min={1} />
    <Aleatorio max={60} min={1} />
    <Aleatorio max={60} min={1} />
    <Aleatorio max={60} min={1} />
    <Aleatorio max={60} min={1} />
    <MinMax />
    <Comp />
    <Comp1 />
    <Comp2 />
    <Primeiro /> 
    */}


    </View>
  )
};