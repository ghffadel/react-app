import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Card } from "../components/Card";

import colors from "../styles/colors";

const CardsData = [
    {
        id: 1,
        icon: "http://cdn.onlinewebfonts.com/svg/img_530089.png",
        title: "História"
    },
    {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/512/64/64722.png",
        title: "Funcionamento" 
    },
    {
        id: 3,
        icon: "http://cdn.onlinewebfonts.com/svg/img_288547.png",
        title: "Equipe"
    }
];

export function Home () {
    return (
        <View style={ styles.container }>
            <View style={ styles.cards }>
                <FlatList 
                    data={ CardsData }
                    keyExtractor={ card => card.id }
                    renderItem={ ({ item }) => (
                        <Card 
                            data={ item }
                        />
                    ) }
                    showsVerticalScrollIndicator={ false }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },

    cards: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    }
});