import React, { useState } from 'react'; 
import { SafeAreaView,TextInput, Text } from 'react-native'; 
import style from './estilo'; 


export default props => {
  const [nome, setNome] = useState('Teste')
    return (

       <SafeAreaView style={style.text}>

        <TextInput
          placeholder = "Digite seu Nome"
          value={nome}
          onChangeText={nome => setNome(nome)} //muda o valor do texto para oq foi digitado no input
        />

        <Text>
          {nome}
        </Text>

       </SafeAreaView>
)
}