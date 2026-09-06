import { searchGames } from "@/api/games";
import { GameSummary } from "@/types";
import { useDebouncedCallback } from "@/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button } from "heroui-native/button";
import { Card } from "heroui-native/card";
import { Input } from "heroui-native/input";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SearchHeader({ onChangeText }: { onChangeText: (text: string) => void }) {
  return (
    <View className="py-2">
      <Input placeholder="Search games.." onChangeText={onChangeText} />
    </View>
  );
}

function GameCard({ game }: { game: GameSummary }) {
  const releaseDate = game.first_release_date
    ? new Date(game.first_release_date * 1000)
    : undefined;

  return (
    <Card className="flex-1 flex-row gap-4">
      {game.cover?.url && (
        <Image source={{ uri: "https:" + game.cover?.url }} className="size-12 rounded-lg" />
      )}
      <View className="flex-1">
        <Card.Header>
          <Text className="text-xs" numberOfLines={1}>
            {game.name}
          </Text>
        </Card.Header>
        {releaseDate && (
          <Card.Body>
            <Card.Description className="text-xs">
              {releaseDate?.toLocaleDateString()}
            </Card.Description>
          </Card.Body>
        )}
      </View>
    </Card>
  );
}

function EmptyState({
  isError,
  isFetching,
  query,
  refetch,
}: {
  isError: boolean;
  isFetching: boolean;
  query: string;
  refetch: () => void;
}) {
  if (isError)
    return (
      <View className="flex flex-col gap-2">
        <Text>We had trouble getting results, please try again</Text>
        <Button onPress={() => refetch()}>Reload</Button>
      </View>
    );

  if (isFetching) return <ActivityIndicator />;

  if (query) return <Text>{"No results"}</Text>;
}

export default function HomeTab() {
  const [query, setQuery] = useState("");
  const debouncedSetQuery = useDebouncedCallback(setQuery, 500);
  const {
    data: games,
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["games", query],
    queryFn: ({ signal }) => searchGames(query, signal),
    enabled: !!query,
    placeholderData: keepPreviousData
  });

  return (
    <SafeAreaView className="flex-1">
      <View className="px-2">
        <FlatList
          data={games}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{ gap: 8 }}
          contentContainerStyle={{ padding: 2 }}
          ItemSeparatorComponent={() => <View className="h-2" />}
          ListHeaderComponent={<SearchHeader onChangeText={debouncedSetQuery} />}
          ListEmptyComponent={
            <EmptyState isError={isError} isFetching={isFetching} query={query} refetch={refetch} />
          }
          renderItem={({ item }) => <GameCard game={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
