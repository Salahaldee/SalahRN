import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import StoreContext from '@/Store/StoreContext'
import { router, useNavigation } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import index from '../index';
import CardCart from '../../components/CardCart';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = () => {
    const navigate = useNavigation();
    const { cart, setCart } = useContext(StoreContext);
    // const [x, SetX] = useState(2)

    console.log("cart", cart);





    const deleteItem = (name) => {
        const filterdata = cart.filter(Item => Item.name !== name)
        console.log("filter", filterdata);

        setCart(filterdata)
        return filterdata
    }
    const Add = () => {
        SetX(x + 1)

    }
    const Minus = () => {
        if (x > 1)
            SetX(x - 1)
    }

    console.log(cart.length);

    useEffect(() => {
        console.log("cart");
        console.log(cart.length);

    }, [cart])



    const rendererCart = () => {
        const render = cart.map((val, index) => {
            const totalPrice = val.price * val.quantity

            return (
                
                <CardCart  {...val} key={index} index={index} />
                
            )
        })
        return render
    };

    return (
        <SafeAreaView style={styles.n}>
            <ScrollView>

                {rendererCart()}
                <TouchableOpacity onPress={() => { }}>

                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Cart

const styles = StyleSheet.create({
    n: {
        backgroundColor: "#FFFFFF",
        flex:1,
        paddingTop: 20,
    },
    vl: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        padding: 10,
    },
    v: {
        backgroundColor: "white",
        flexDirection:
            'row',
        height: 155,
        marginTop: 40,


    },
    tarsh: {
        alignSelf: 'flex-end',

    },
    row: {
        flexDirection: "row",
        alignSelf: 'baseline',
        gap: 10
    },
    img: {
        width: 40,
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
    k: {
        marginTop: 30,

    },
    ic: {
        marginTop: -70,
        marginLeft: "auto"
    },

})