import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import utilities from "./tailwind.json";
import { TailwindProvider } from "tailwind-rn/dist";
import Customer from "./Screens/Customer";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // @ts-ignore -TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Customer />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
