import { Stack, Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import StoreProvider from "@/Store/StoreProvider";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

const StackScreen = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="screen2" />
      <Stack.Screen name="cart" />
      <Stack.Screen name="languages" />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="index" />
    //   <Stack.Screen name="Home" />
    //   <Stack.Screen name="screen2" />
    //   <Stack.Screen name="cart" />

    // </Stack>
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Tabs >
        <Tabs.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}

        />
        <Tabs.Screen
          name="cart"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <Ionicons name="cart-sharp" size={24} color={color} />
          }}

        />
        <Tabs.Screen
          name="user"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color={color} />
          }}
        />
        <Tabs.Screen
          name="settinge"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />
          }}
        />
        <Tabs.Screen
          name="language"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="language" size={24} color={color} />
          }}
        />


      </Tabs >

    </GestureHandlerRootView>
  );
}
