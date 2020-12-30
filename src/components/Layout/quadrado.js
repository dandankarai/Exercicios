import React from 'react'; 
import { SafeAreaView, StyleSheet } from 'react-native'; 

export default props => {
    return (
       <SafeAreaView style={{

         height: 50,
         width: 50,
         backgroundColor: props.cor || "black",
       }}>

       </SafeAreaView>
)
}
