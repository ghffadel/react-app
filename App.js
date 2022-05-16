import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
import Equipe from "./screens/Equipe";
import História from "./screens/História";
import Intro from "./screens/Intro";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Intro" component={Intro} options={{headerTitle: "React Native"}}/>
        <Stack.Screen name="História" component={História} options={{headerTitle: "História"}}/>
        <Stack.Screen name="Equipe" component={Equipe} options={{headerTitle: "Equipe"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
