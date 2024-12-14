import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { Feather } from '@expo/vector-icons'
// import { TextInput } from 'react-native-gesture-handler'

const Register = () => {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')

    const nav = useNavigation()
    const navigate = useNavigation();

    const [x, SetX] = useState(1)

    const check =()=>{
        if (userName&&password&&email&&age) {
            nav.navigate("tab");
        }else{
            alert(" Please enter information ")
        }
    }
    


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: 'center', }}>
                <View>
                
                </View>
                <Text style={styles.sa}>Register</Text>
            </View>

            <View style={styles.userInputContainer}>

                <Text style={styles.nn}> name</Text>
                <TextInput
                    placeholder='user name'
                    value={userName}
                    onChangeText={setuserName}
                    style={styles.de}
                />

                <Text style={styles.nn}> email</Text>
                <TextInput
                    placeholder=' email'
                    value={email}
                    onChangeText={setemail}
                    style={styles.de}
                />
                <Text style={styles.nn}> password</Text>
                <TextInput
                    placeholder='password'
                    value={password}
                    onChangeText={setpassword}
                    style={styles.de}
                    secureTextEntry={true}

                />
                <Text style={styles.nn}> age</Text>
                <TextInput

                    placeholder='age '
                    value={age}
                    onChangeText={setage}
                    style={styles.de}

                />
                <TouchableOpacity onPress={check}>
                    <Text style={styles.nn1}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "#4545"
    },
    de: {
        borderWidth: 3,
        padding: 10,
        fontSize: 15,
        width: "70%",
        // marginTop: 50,
        color: 'white',
        // padding: 8,
        // width: 200,
        alignItems: "center",
        borderRadius: 20,
        marginBottom:10
    },
    userInputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginTop:20
    },
    nn1: {
        fontSize: 25,
        backgroundColor: 'blue',
        padding: 8,
        width: 80,
        alignItems: "center",
        // marginTop: 25,
        borderRadius: 20,
        height: 50
    },
    sa: {
        // marginBottom: 40,
        color: "#000000",
        fontSize: 40,
         textAlign:"center",
        marginTop:30,
        marginLeft:105
    },
    nn: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#F5FFFA",
        marginTop:10,
        marginBottom:7
    },
    icon: {
        // marginLeft: ,
        marginRight: 50,
        flexDirection:"row",
       marginTop:17,
       marginLeft:5
    }


})