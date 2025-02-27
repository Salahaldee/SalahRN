import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import StoreContext from '@/Store/StoreContext'
import { router, useNavigation } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import index from './../app/index';

const CardCart = (val, index) => {

    const navigate = useNavigation();
    const { cart, setCart } = useContext(StoreContext);
    const [x, SetX] = useState(1)


    console.log("val", val);
    
    console.log("img", val);



    const deleteItem = (index) => {
        cart.splice(index, 1)
        setCart((v) => [...v])
        // return filterdata
    }
    return (
        <View style={styles.vl}>
            <Image source={{ uri: val.image }} style={styles.img} />

 


        </View>
    )
}

export default CardCart

const styles = StyleSheet.create({
    vl: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",

        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        padding: 10,
    },
    row: {
        flexDirection: "row",
        alignSelf: 'baseline',
        gap: 10
    },
    img: {
        width: '40%',
        height: 120,
        marginTop: 10,
        marginLeft: 8,
        marginRight: 10,
        backgroundColor: "#4545",
        borderRadius: 10
    },
    bb: {
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
    bbw: {
        color: "#000000",
        fontSize: 25,
        // textAlign: 'center',
        marginTop: 15,

    },
    bbe: {
        color: '#FFD700',
        fontSize: 20,
        marginRight: 'auto',

    },

    funText: {
        fontSize: 25,
        textAlign: 'center',
        color: "#000000",
        marginTop: "auto",
        // marginHorizontal: 20,

    },
    viu: {

    },
    tarsh: {
        alignSelf: 'flex-end',
        marginRight: "auto",
    },

})