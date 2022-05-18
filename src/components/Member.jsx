import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../styles/colors";

export const Member = ({ data, ...rest }) => {
    return (
        <View
            style={ styles.container }
            { ...rest }
        >
            <Image 
                style={ styles.image }
                source={{ uri: data.photo }}
            />

            <Text style={ styles.text }>
                { data.name }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 20,
        flex: 1,
        flexDirection: "row",
        margin: 10,
        maxWidth: "90%",
        paddingVertical: 10
    },

    image: {
        borderRadius: 10,
        height: 100,
        width: 100
    },
    
    text: {
        color: colors.dark_gray,
        marginHorizontal: 16,
        marginVertical: 16
    }
});