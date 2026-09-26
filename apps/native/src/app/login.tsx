import { useState } from "react";
import { View } from "react-native";
import { authClient } from "@/auth";
import { router } from "expo-router";
import { Input, Button } from "heroui-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signIn.email({
      email,
      password,
    });
    router.push("/(tabs)");
  };

  return (
    <View className="flex flex-col gap-2 p-2">
      <Input
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input secureTextEntry placeholder="Password" value={password} onChangeText={setPassword} />
      <Button onPress={handleLogin}>Sign In</Button>
      <Button variant="secondary" onPress={() => router.push("/sign-up")}>
        Register
      </Button>
    </View>
  );
}

export default function LoginTab() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}
