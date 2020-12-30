import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  App: { 
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'pink',
    padding: 20,
  },

  text:{
    fontSize: 40,
    textAlign: 'center',
  },

  button:{
    flexDirection: 'row',
  },

  display:{
    backgroundColor: '#000',
    padding: 20,
    width:300,
  },

  displayText:{
    color: '#FFF',
    alignItems: 'center',
  },
})