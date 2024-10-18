import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-3xl color-primary font-pblack">Starter Kit</Text>
          <Text>On boarding page</Text>
          <StatusBar style="auto" />
          <Link href="/sign-in" style={{ color: "blue" }}>
            Go to SignIn
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
