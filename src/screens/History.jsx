import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../styles/colors";

export function History () {
    return (
        <View style={ styles.container }>
            <Image 
                style={ styles.image }
                source={{ uri: "https://fei.edu.br/~gwachs/disciplinas/CC4670/slides/Aula05/slides/images/react_native_logo.png" }}
            />

            <Text style={ styles.text }>
                - Em 2012, o Facebook decidiu adotar o desenvolvimento mobile first { "\n\n" }
                - A empresa tentou inicialmente usar HTML e depois WebView para desenvolver as aplicações, mas nenhuma das ideias funcionou adequadamente { "\n\n" }
                - Há diferenças entre aplicações web e mobile, como os eventos de gestos e toques no celular { "\n\n" }
                - O desenvolvimento de aplicativos nativos seria muito custoso, pois teriam que ser escritos pelo menos dois códigos, um para cada plataforma. { "\n\n" }
                - O desenvolvedor Christopher Chedeau se juntou com Jordan Walke, Ashwin Bharambe e Lin He para aperfeiçoar um protótipo, já que Jordan conseguiu gerar um componente em JavaScript para iOS { "\n\n" }
                - Eles desenvolveram em 2 dias um protótipo que conseguia gerar componentes mobile utilizando JavaScript { "\n\n" }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        height: 170,
        marginHorizontal: "28%",
        width: 150
    },
    
    text: {
      color: colors.dark_gray,
      marginHorizontal: 15,
      marginVertical: 30,
      textAlign: "justify"
    }
});