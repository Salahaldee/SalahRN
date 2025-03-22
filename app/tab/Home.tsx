import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FindProduct } from '@/constants/API'
import StoreContext from '@/Store/StoreContext'
import Product from '@/components/Poduct'

const Home = () => {
    const navigation = useNavigation();
    const { user, isNightMode } = useContext(StoreContext); // Apply Night Mode styles
    const [dataApi, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log("User:", user);

    const goToCart = () => {
        navigation.navigate("cart");
    };

    const getData = async () => {
        try {
            const res = await FindProduct();
            console.log("API Response:", res.data);
            if (res.data?.length) {
                setData(res.data);
            } 
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <View style={styles(isNightMode).container}>
                <Text style={styles(isNightMode).title}>Burger 🍔</Text>

                {loading ? (
                    <View style={styles(isNightMode).load}>
                        <ActivityIndicator size="large" color={isNightMode ? "#FFD700" : "#000"} />
                    </View>
                ) : (
                    <ScrollView contentContainerStyle={styles(isNightMode).scrollContent}>
                        {dataApi.map((item, i) => (
                            <Product
                                key={i}
                                name={item.name}
                                size={item.size}
                                price={item.price}
                                quantity={item.quantity}
                                image={item.image}
                            />
                        ))}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Home;

// Dynamic styling for Night Mode
const styles = (isNightMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isNightMode ? "#1E1E1E" : "#FFFFFF",
            padding: 10,
        },
        title: {
            fontSize: 30,
            color: isNightMode ? "#FFD700" : "#000",
            marginTop: 15,
            textAlign: "center",
        }, 
        scrollContent: {
            paddingVertical: 10,
        },
        load: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
