import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../styles/colors";

export const Card = ({ data, ...rest }) => {
    return (
        <TouchableOpacity
            style={ styles.container }
            { ...rest }
        >
            <Image 
                style={ styles.image }
                source={{ uri: data.icon }}
            />

            <Text style={ styles.text }>
                { data.title }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginTop: 10,
        width: 83
    },
    
    text: {
        color: colors.dark_gray,
        marginVertical: 16
    }
});