import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import colors from "../styles/colors";

export const Card = ({ data, ...rest }) => {
    return (
        <RectButton
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
        </RectButton>
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
        width: 83
    },
    
    text: {
      color: colors.dark_gray,
      marginVertical: 16
    }
});