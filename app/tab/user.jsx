import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const user = () => {
    const nav = useNavigation()
    const navigate = useNavigation();


    const goTologin = () => {
        navigate.navigate("login")
    };
    const goTor = () => {
        navigate.navigate("Register")
    };
    
    return (
        <View style={styles.v}>
            <Text style={{fontSize:40, textAlign:"center", marginTop:50,     backgroundColor: '#00FFFF', width:200, 
            borderRadius: 10, marginLeft:75 }}>user</Text>


                
            <View>
            <Text style={styles.l}>go to the login</Text>
              <TouchableOpacity onPress={goTologin}>
                
<Text style={styles.login}>Login</Text>
       </TouchableOpacity>
       </View>
       <View>
       <Text style={styles.r}>go to the register</Text>

       <TouchableOpacity onPress={goTor}>
<Text style={styles.rr}>Register</Text>
       </TouchableOpacity>
       </View>
        </View>
    )
}

export default user

const styles = StyleSheet.create({
    v:{
        textAlign:"center",
        backgroundColor:""

    },
login:{
    backgroundColor: '#E0FFFF',
    padding: 8,
    width: 250,
    marginTop: 80,
    borderRadius: 20,
    textAlign:"center",
    fontSize:30,
    marginLeft:55
},
rr:{
    backgroundColor: '#E0FFFF',
    padding: 8,
    width: 250,
    marginTop: 80,
    borderRadius: 20,
    textAlign:"center",
    fontSize:30,
    marginLeft:55,
},
l:{
    textAlign:"center",
marginTop:50,
marginRight:"auto",
fontSize:30,
marginLeft:20,
color:"0000000"




},
r:{
    textAlign:"center",
    marginTop:40,
    marginRight:"auto",
    fontSize:30,
    marginLeft:20,
    color:"#000000"

    


},




})