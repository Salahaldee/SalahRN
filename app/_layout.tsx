import { Stack, Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import StoreProvider from "@/Store/StoreProvider";

const StackScreen = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="screen2" />
      <Stack.Screen name="cart" />
      <Stack.Screen name="language" />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false,}}/>
          <Stack.Screen name="screen2" options={{ headerShown: false,}}/>
          <Stack.Screen name="login"options={{ headerShown: false,}} />
          <Stack.Screen name="Register"options={{ headerShown: false,}} />
          <Stack.Screen name="tab" options={{ headerShown: false,}}/>
          {/* <Stack.Screen name="sittenge" options={{ headerShown: false,}}/> */}

        </Stack>
      </StoreProvider>

    </GestureHandlerRootView>
  );
}
