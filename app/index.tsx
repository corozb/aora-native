import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl color-primary font-pblack">Starter Kit</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
