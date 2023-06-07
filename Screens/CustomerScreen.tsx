import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const CustomerScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw("text-red-500")}>Customer</Text>
    </SafeAreaView>
  );
};

export default CustomerScreen;
