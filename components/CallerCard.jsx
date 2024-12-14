import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
// import Images from '../src/images/images'

const CallerCard = (props) => {
  return (
    <TouchableOpacity>
    <View style={styles.v}>


        <Image source={props.img} style={styles.img}/>
        <Text style={styles.tt}>{props.time}</Text> 

<Text style={styles.num}>{props.Number}</Text>

       <Text style={styles.text}>{props.Number}</Text>
        <Text style={styles.text}>{props.time}</Text>


    </View>
</TouchableOpacity>


  )
}

export default CallerCard

const styles = StyleSheet.create({
    v:{
        height:110,
        width:"100%",
        borderWidth:1,
      backgroundColor:"black",
      
    },


    img:{
        height:100,
        width:100,
        marginLeft:300,
        marginTop:5
    },
    num:{
        marginLeft:220,
        marginTop:-20,
        color:"green",
        fontSize:15,


    },
    tt:{
marginRight:200,
marginEnd:90,
marginVertical:-35,
color:"green",
fontSize:5,
    }
})