import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import colors from "../styles/colors";

export function History () {
    return (
        <ScrollView style={ styles.container }>
            <Image 
                style={ styles.image }
                source={{ uri: "https://fei.edu.br/~gwachs/disciplinas/CC4670/slides/Aula05/slides/images/react_native_logo.png" }}
            />

            <Text style={ styles.text }>
                - Em 2012, o Facebook decidiu adotar o desenvolvimento mobile first { "\n\n" }
                - A empresa tentou inicialmente usar HTML e depois WebView para desenvolver as aplicações, mas nenhuma das ideias funcionou adequadamente { "\n\n" }
                - Há diferenças entre aplicações web e mobile, como os eventos de gestos e toques no celular { "\n\n" }
                - O desenvolvimento de aplicativos nativos seria muito custoso, pois teriam que ser escritos pelo menos dois códigos, um para cada plataforma { "\n\n" }
                - O desenvolvedor Christopher Chedeau se juntou com Jordan Walke, Ashwin Bharambe e Lin He para aperfeiçoar um protótipo, já que Jordan conseguiu gerar um componente em JavaScript para iOS { "\n\n" }
                - Eles desenvolveram em 2 dias um protótipo que conseguia gerar componentes mobile utilizando JavaScript { "\n\n" }
                - Em 2013, Jordan e Christopher formaram um time especialmente dedicado para construir essa tecnologia { "\n\n" }
                - A base do React Native foi apresentada em 2015 em uma conferência e no mesmo ano seu código-fonte ficou aberto { "\n\n" }
                - Desde então passou a ser bastante utilizado no desenvolvimento mobile por ser menos custoso e por precisar de apenas um único código para rodar em diversas plataformas { "\n\n" }
                - É utilizado em aplicativos como Instagram, Facebook, Tesla, Skype, UberEats, Walmart, e Shopify { "\n\n" }
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
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