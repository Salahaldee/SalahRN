import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { SearchBar } from 'react-native-screens'

const Login = () => {
    const [phone, setphone] = useState('')
    const [password, setoassword] = useState('')
    const [username, setusername] = useState('')
    const [x, SetX] = useState(1)
    const navigate = useNavigation();

    console.log(phone);
    console.log(password);
    const nav = useNavigation()
    const pressRegister = () => {
        nav.navigate('Register')
    }
   

    const presslogin = () => {
        if (username == 'salah aldeen' && password == 'salah2494') {
            nav.navigate("tab")
        }
        else {
            Alert.alert("user name or password not valid")
        }
    }

    return (
        <View style={styles.container}>
            
            <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <Text style={styles.ss}>Login</Text>
                <TextInput style={styles.login} placeholder='UserName' onChangeText={(e) => {
                    setusername(e)
                }} />
                <TextInput style={styles.login} placeholder='Password' onChangeText={(e) => {
                    setoassword(e)

                }}
                secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => { presslogin() }}>
                    <View style={styles.logContainer}>
                        <Text style={styles.loginColor}>login</Text>
                    </View>
                    <TouchableOpacity onPress={pressRegister} >
                        <Text style={styles.cc}>if dont have account?</Text>

                    </TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { nav.navigate("tab") }}>
                    <Text style={styles.d}>skip to the menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4545",
        alignItems: "center",
        // justifyContent: 'center',
    },
    login: {
        borderWidth: 3,
        padding: 10,
        fontSize: 20,
        width: 250,
        marginTop: 50,

    },
    loginColor: {
        color: 'white',
        fontSize: 20
    },
    logContainer: {
        backgroundColor: 'blue',
        padding: 8,
        width: 200,
        alignItems: "center",
        marginTop: 25,
        borderRadius: 20
    },
    ss: {
        color: "#000000",
        fontSize: 40,
        // marginBottom:"auto"
    },
    cc: {
        marginLeft: 25,
        fontSize: 15,
        marginTop: 10,
        textDecorationLine: "underline"
    },
    d: {
        textDecorationLine: "underline",
        marginTop: 15,
        textAlign: "center",
        fontSize: 16,
        marginRight: 10

    },
    icon: {
        marginRight: 320,
marginTop:20
    }
})