
import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { data } from './res/data'
import Poduct from '@/components/Poduct'
import { useNavigation } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import StoreProvider from '@/Store/StoreProvider'

const index = () => {

  const navigate = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.navigate('login')
    }, 1500)
  }, [])




  return (
    <View style={styles.container}>
      <View style={styles.dsca}>

      </View>
      <Text onPress={() => navigate.navigate('login')} style={styles.h}>welcome to🎗️Burger🍔 </Text>

    </View>

  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4545"
  },
  ddfs: {
    fontSize: 35,
    color: "white",
    backgroundColor: "black"
  },
  ddo: {
    fontSize: 80,
    textAlign: "center",
    justifyContent: "center",
    bottom: -250,
    color: "red",

  },
  mm: {
    width: 360,
    height: 390,
    marginTop: 145,

  },
  dsca: {
    marginLeft: 10,
    marginTop: 25,
  },
  h: {
    color: "#000000",
    textAlign: "center",
    marginTop: 300,
    fontSize: 33,
  }


})