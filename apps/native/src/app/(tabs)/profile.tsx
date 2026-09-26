import type { JSX } from "react";
import { authClient } from "@/auth";
import { Button } from "heroui-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileTab(): JSX.Element {
  const signOut = async () => {
    await authClient.signOut();
  };

  return (
    <SafeAreaView>
      <Button onPress={signOut}>Sign out</Button>
    </SafeAreaView>
  );
}
