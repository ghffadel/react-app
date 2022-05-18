import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import { History } from "./src/screens/History";
import { Home } from "./src/screens/Home";
import { Operation } from "./src/screens/Operation";
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
                    component={ History }
                    name="História"
                />

                <Stack.Screen 
                    component={ Operation }
                    name="Funcionamento"
                />

                <Stack.Screen 
                    component={ Team }
                    name="Equipe"
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}