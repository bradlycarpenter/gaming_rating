import { Card, Input } from "heroui-native";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function GameCard() {
  return (
    <Card className="flex-1">
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Description>Description</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Card.Description>Footer</Card.Description>
      </Card.Footer>
    </Card>
  );
}

const MOCK_GAMES = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
];

export default function HomeTab() {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={MOCK_GAMES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={() => <GameCard />}
        columnWrapperStyle={{ gap: 8 }}
        ItemSeparatorComponent={() => <View className="h-2" />}
        contentContainerStyle={{ padding: 8 }}
        ListHeaderComponent={
          <View className="pb-2">
            <Input placeholder="Search games..." />
          </View>
        }
      />
    </SafeAreaView>
  );
}
