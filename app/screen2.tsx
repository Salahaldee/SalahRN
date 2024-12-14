import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import cart from './tab/cart';
import StoreContext from '@/Store/StoreContext'

const Screen2 = (props) => {
    const nav = useNavigation()
    const navigate = useNavigation();
    const [x, SetX] = useState(1)
    const { cart, setCart } = useContext(StoreContext)

    const router = useRoute()
    const addtocart = () => {
        const CartList = [...cart]
        const product = router.params
        product.quantity = x;
        CartList.push(product)
        setCart(CartList)
        nav.navigate('cart')
    }

    const Add = () => {

        const addQuantity = router.params.quantity += 1
        console.log("x", addQuantity);
        console.log(router.params.quantity);
        SetX(x + 1)
    }
    const Minus = () => {
        if (x > 1)
            SetX(x - 1)
    }
    
    const goToHome = () => {
        navigate.navigate("Home")
    };

    useEffect(() => {
        console.log("cart");
        console.log(cart.length);
        
      }, [cart])

    return (
        <View style={styles.mmmn}>
            <View style={styles.hed}>
               
                <View style={styles.center}>
                    <Text style={styles.name}>{router.params.name}</Text>
                </View>
            </View>
            
            
            <View style={styles.center}>
                 <Text style={styles.funText}>{router.params.price * x}₪</Text>

                    <TouchableOpacity onPress={Add}>
                        <Text style={styles.funText}>+</Text>

                    </TouchableOpacity>
                    <Text style={styles.funText}>{x}</Text>
                    <TouchableOpacity onPress={Minus}>

                        <Text style={styles.funText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addtocart}>

                        <Text style={styles.smkc}>add to cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToHome}>
                        <Ionicons name='chevron-forward-outline' size={45} color={"#000000"} style={styles.ic} />
                    </TouchableOpacity> 

            </View>


        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    pic: {
        width: 400,
        height: 360,
        backgroundColor: "black"
    },
    name: {
        fontSize: 30,
        color: "#000000",
        // textAlign:'center'
    },
    funText: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 3,
        color: "#000000",
        top: 2,

    },
    mmmn: {
        backgroundColor: "#FDF5E6",
        flex: 1,
        marginTop: 35,

    },
    smkc: {
        color: "black",
        backgroundColor: "white",
        width: 154,
        height: 40,
        fontSize: 30,
        marginLeft: 5,
        borderRadius: 38,
        alignSelf: "center"

    },
    ic: {
        marginLeft: 320,
        marginTop:190
        
    },
    hed: {
        flexDirection: 'row',
    },
    center: {
        flex: 1,
        // backgroundColor:'red'
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    }
})