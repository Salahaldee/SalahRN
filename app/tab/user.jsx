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
            <Text style={styles.ll}>user</Text>




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
    v: {
        
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        flex:1,

    },
    login: {
        color: "#FFFAFA",
        fontSize: 30,
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 180,
        height: 40,

        marginTop: 80,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 30,
        marginLeft: 55
    },
    rr: {
        color: "#FFFAFA",
        fontSize: 30,
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 180,
        height: 40,

        marginTop: 80,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 30,
        marginLeft: 55
    },
    l: {
        textAlign: "center",
        marginTop: 50,
        marginRight: "auto",
        fontSize: 30,
        marginLeft: 20,
        color: "0000000"




    },
    r: {
        textAlign: "center",
        marginTop: 40,
        marginRight: "auto",
        fontSize: 30,
        marginLeft: 20,
        color: "#000000"
    },
    ll: {
        textAlign: "center",
        color: "#FFFAFA",
        fontSize: 40,
        backgroundColor: "#000000",
        width: 180,
        // height:40,
        marginTop: 80,
        borderRadius: 30,
        alignSelf: 'center',
        
    }


})