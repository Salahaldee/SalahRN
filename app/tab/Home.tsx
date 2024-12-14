import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Poduct from '@/components/Poduct'
import { useNavigation } from 'expo-router'
// import { data } from '../res/data'
import { SafeAreaView } from 'react-native-safe-area-context'
import { data } from '../res/data'

const Home = () => {
    const nav = useNavigation()
    const navigate = useNavigation();
    const [x, SetX] = useState(1)

    const openDrawer = () => {
        // navigate.openDrawer()
        SetX(1)
    }
    const goToCart = () => {
        navigate.navigate("cart")
    };

    const renddat = () => {
        const cardarr = data.map(item => {
            return <Poduct
                name={item.name}
                size={item.size}
                price={item.price}
                quantity={item.quantity}

            />
        })
        return cardarr
    }





    return (

        <SafeAreaView style={{flexGrow: 1}}>
            <View style={styles.Scroll}>

               <View>

                    <Text style={styles.ddfs}>pizza 🍕</Text>

                  
                </View> 
                <ScrollView style={styles.Scroll}>
                    {renddat()}
                </ScrollView>



            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({

    ddfs: {
        fontSize: 30,
        color: "#000000",
        marginTop: 15,
        textAlign:"center"

    },
    icon: {
        marginTop: 10,

    },
    Scroll: {
        flex: 1,
        backgroundColor: "#4545",
h
    }


})