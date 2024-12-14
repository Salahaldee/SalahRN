import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Poduct = (props) => {

    const nav = useNavigation()

    return (
        <TouchableOpacity onPress={() => { nav.navigate('screen2', { ...props }) }} style={styles.gfdc}>
            <View style={styles.img}>

            </View>

            <View style={styles.v}>
                <ScrollView>
                    <Text style={styles.text}>{props.name}</Text>
                    <Text style={styles.size}>size:{props.size}</Text>
                    <Text style={styles.price}>{props.price}₪</Text>
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export default Poduct

const styles = StyleSheet.create({
    v: {
        flex: 1,
    },
    img: {
        width: '40%',
        height: 120,
        marginTop: 10,
        // marginLeft: 8,
        marginRight:10,
        backgroundColor: "#4545",
        borderRadius:10
    },
    text: {
        color: "#000000",
        fontSize: 25,
        // textAlign: 'center',
        marginTop: 20,

    },
    gfdc: {
        flexDirection: 'row',
        backgroundColor: "#FDF5E6",
        borderWidth: 1,
        margin:10,
        borderRadius:20,
        padding:10,
    },
    price: {
        color: 'black',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 2,
        width: 60,
        textAlign: 'center',
        marginRight: 'auto',
        // marginBottom: 150,
    },
    size: {
        color: '#FFD700',
        fontSize: 20,
        marginRight: 'auto',

    }
})