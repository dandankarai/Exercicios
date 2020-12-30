import React from 'react';
import {  StyleSheet , View, Text } from 'react-native';


export default props => {
  return (

    <View style={style.FlexboxV4}>

      <View sytle={style.V0} />
      <View sytle={style.V1} />
      <View style={style.V2} />

    </View>

  )
}

const style = StyleSheet.create({

  FlexboxV4:{
    flexGrow:1,
    width: 100,
    backgroundColor:'black', 
  },

  V0:{
    backgroundColor:'#36c9a7',
    height: 300, 
  },

  V1:{
    backgroundColor:'#ff801a',
    flexGrow: 9,  
  },

  V2:{
    backgroundColor: '#dd22c1',
    flexGrow: 1,
  }
  
})