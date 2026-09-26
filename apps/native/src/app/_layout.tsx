import type { JSX } from "react";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authClient } from "@/auth";

const queryClient = new QueryClient();

export default function RootLayout(): JSX.Element {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <QueryClientProvider client={queryClient}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={!isPending && !!session}>
              <Stack.Screen name="(tabs)" />
            </Stack.Protected>
            <Stack.Screen name="login" />
            <Stack.Screen name="sign-up" />
          </Stack>
        </QueryClientProvider>
        <StatusBar style="auto" />
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
