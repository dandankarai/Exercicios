import React from 'react';
import { Text } from 'react-native';
import style from './estilo'

function Comp() {
  return(
     <Text style={style.text}>
      Comp Oficial
    </Text>
  )
}


function Comp1() {
  return(
     <Text style={style.text}>
      Comp 01
    </Text>
  )
}


function Comp2() {
  return(
     <Text style={style.text}>
      Comp 02
    </Text>
  )
}

export {Comp,Comp1, Comp2};