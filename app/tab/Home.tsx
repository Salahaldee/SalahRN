import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Poduct from '@/components/Poduct'
import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FindProduct } from '@/constants/API'
import { Ionicons } from '@expo/vector-icons'

const Home = () => {
    const nav = useNavigation()
    const navigate = useNavigation();
    const [dataApi, setData] = useState([])
    const [x, SetX] = useState(1)

    const openDrawer = () => {
        // navigate.openDrawer()
        SetX(1)
    }
    const goToCart = () => {
        navigate.navigate("cart")
    };

    const renddat = () => {
        const cardarr = dataApi.map((item, i) => {
            return <Poduct
                key={i}
                name={item.name}
                size={item.size}
                price={item.price}
                quantity={item.quantity}
                image={item.image}

            />
        })
        return cardarr
    }


    const getdata = () => {
        FindProduct().then((res) => {
            // [].length
            console.log("res", res.data);
            if (res.data.length) {
                setData(res.data)
            } else {
                alert("no data")
            }
        })
    }

    useEffect(() => {
        getdata()
    }, [])



    return (

        <SafeAreaView style={{ flexGrow: 1 }}>
            <View style={styles.Scroll}>

                <View>
                    {/* <Ionicons name='search-outline' style={styles.searsh} /> */}
                 
                    <Text style={styles.ddfs}>Burger 🍔</Text>


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
        textAlign: "center"

    },
    icon: {
        marginTop: 10,

    },
    Scroll: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    search: {
        fontSize: 30,
        color: "#000000"
    },



})