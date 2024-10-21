import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-center bg-white px-4">
          <Text className="text-3xl color-primary font-pblack">Aora</Text>
          <Text>On boarding page</Text>
          <StatusBar style="auto" />
          <CustomButton
            title="Continue with Login"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
