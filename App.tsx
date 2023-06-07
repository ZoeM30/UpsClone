
import { StyleSheet, Text, View } from "react-native";
import utilities from "./tailwind.json";
import { TailwindProvider } from "tailwind-rn/dist";
import CustomerScreen from "./Screens/CustomerScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    // @ts-ignore -TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
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
