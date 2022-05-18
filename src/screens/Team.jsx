import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Member } from "../components/Member";

import colors from "../styles/colors";

const MembersData = [
    {
        id: 1,
        name: "Diógeles Tamaturgo",
        photo: "https://avatars.githubusercontent.com/u/83620550?v=4"
    },
    {
        id: 2,
        name: "Gustavo Fadel",
        photo: "https://avatars.githubusercontent.com/u/83620227?v=4"
    },
    {
        id: 3,
        name: "Luís Scantelbury",
        photo: "https://avatars.githubusercontent.com/u/83627038?v=4"
    }
];

export function Team () {
    return (
        <View style={ styles.container }>
            <View style={ styles.members }>
                <FlatList 
                    data={ MembersData }
                    keyExtractor={ member => member.id }
                    renderItem={ ({ item }) => (
                        <Member 
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
        backgroundColor: colors.white,
        flex: 1
    },

    members: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    },

    memberContainer: {
        alignItems: "center",
        backgroundColor: colors.light_gray,
        borderRadius: 20,
        flex: 1,
        margin: 10,
        maxWidth: "90%",
        paddingVertical: 10
    },

    image: {
        height: 75,
        width: 83
    },
    
    text: {
      color: colors.dark_gray,
      marginVertical: 16
    }
});