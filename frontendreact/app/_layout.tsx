import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="next">
      <Stack.Screen
        options={{
          headerTitle: "Página inicial",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "black",
          },
        }}
        name="index"
      />
      <Stack.Screen
        options={{
          headerTitle: "Página secundaria",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "black",
          },
        }}
        name="next"
      />

    </Stack>
  );
}
