import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'
// import Images from '../src/images/lmages'

const Card = (props) => {
  return (


    <View  style={styles.fgg}>

        <Image style={styles.img} source={props.img}/>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.fge}>{props.size}</Text>
        <View>
        <Text style={styles.ggg}>{props.colors}</Text>  
        <Text style={styles.ggg}>{props.price}</Text>
     
      </View>


      </View>
  )
}

export default Card

const styles = StyleSheet.create({



    fgg:{
        flexDirection:"row",
    backgroundColor: 'black'  
    },

      img:{
        width:80,
        height:80,
        justifyContent:"center",
        alignContent:"center",
        marginTop:12,
      },

        text: {
            fontSize:30,
            height:80,
            width:80,
        color:"white",
            fontWeight: 'bold',
            
          },
          fge:{
            fontSize:20,
            marginLeft:150,
            color:"green",
            
            
          },
          ggg:{
            marginTop:45,
            marginLeft:-280,
            fontSize:23,
            color:"white",
            height:50,
            width:160
            },
})