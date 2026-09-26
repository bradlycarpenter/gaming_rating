import type { JSX } from "react";

import { useState } from "react";
import { authClient } from "@/auth";
import { View } from "react-native";
import { router } from "expo-router";
import { Input, Button } from "heroui-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => router.push("/(tabs)"),
      }
    );
  };

  return (
    <View className="flex flex-col gap-2 p-2">
      <Input placeholder="Name" value={name} onChangeText={setName} />
      <Input
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input secureTextEntry placeholder="Password" value={password} onChangeText={setPassword} />
      <Button onPress={handleLogin}>Login</Button>
    </View>
  );
}

export default function LoginTab(): JSX.Element {
  return (
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
}
