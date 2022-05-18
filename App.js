import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import { Home } from "./src/screens/Home";
import { Team } from "./src/screens/Team";

const Stack = createNativeStackNavigator();

export default function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    component={ Home }
                    name="Home"
                />

                <Stack.Screen 
                    component={ Team }
                    name="Team"
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}