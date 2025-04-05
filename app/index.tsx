import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { useNavigation } from 'expo-router'
import StoreContext from '@/Store/StoreContext';

const Index = () => {
  const navigation = useNavigation();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(150)).current; // Opacity
  const translateYAnim = useRef(new Animated.Value(150)).current; // Vertical movement

  useEffect(() => {
    // Start animations when component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate after 1.5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation, fadeAnim, translateYAnim]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content, 
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }
        ]}
      >
        <Text onPress={() => navigation.navigate('login')} style={styles.h}>
          Welcome to ✨Burger🍔
        </Text>
      </Animated.View>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Black background
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  h: {
    color: "#FFD700", // Gold text
    textAlign: "center",
    fontSize: 33,
    fontWeight: "bold",
  },
});
