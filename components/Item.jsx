import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const Item = (props) => {
  return (
    <View> 

        <Image style={styles.img} source={props.img} />
       
      <Text style={styles.n}>  {props.name}</Text>
      <Text style={styles.n}>  {props.price} </Text>
    

                     
   


    </View>
  )
}

export default Item


const styles = StyleSheet.create({

  n: {
    color: "white"
  },
  img:{
height:160,
width:160,
marginTop:25
  },
})