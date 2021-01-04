import React, { Component } from 'react';
import { Text, TextInput, Button } from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {

  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [ ]
  }

  alterarQtdeNumeros = (qtde) => {
    this.setState({ qtdeNumeros: +qtde })
  }

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  }

  gerarNumeros = () =>{
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a,b) => a - b)
    this.setState({numeros})
  }

  render() {
    return (
      <>

        <Text style={estilo.Text}>
          Gerador de Mega Sena
        </Text>

        <TextInput
          keyboardType= {'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder = "Qtde de Números"
          value = {`${this.state.qtdeNumeros}`}
          onChangeText = {this.alterarQtdeNumeros} 
        />

        <Button
          title='Gerar Números da Mega'
          onPress={this.gerarNumeros}
        />

        <Text>
          {this.state.numeros.join(',')}
        </Text>
      </>
    )
  }
}