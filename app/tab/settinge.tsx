import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const settinge = () => {
  return (
    <View style={styles.v}>
      <Text style={styles.numberPhone}>To contact the app owner:</Text>
      <Text style={styles.numberPhone1}>0505249480</Text>
    </View>
  )
}

export default settinge

const styles = StyleSheet.create({
  v:{
    backgroundColor: "#FFFFFF",
    flex:1
  },
  numberPhone:{
    fontSize:25,
    color:"#000000",
    textAlign:"center",
    
  },
  numberPhone1:{
    color:"#FFFAFA",
    fontSize:30,
    marginLeft:10,
    marginTop:20,
    backgroundColor:"#000000",
    width:190,
    height:55,
    borderRadius: 33,
    padding: 10,

  }
})