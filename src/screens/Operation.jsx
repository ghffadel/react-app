import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import colors from "../styles/colors";

export function Operation () {
    return (
        <ScrollView style={ styles.container }>
            <Image 
                style={ styles.image }
                source={{ uri: "https://collectivemind.dev/static/0987d8ef19637bb26314139f33e794f2/1b198/current-react-native-structure.png" }}
            />

            <Text style={ styles.text }>
                - O elemento central da arquitetura é a Bridge, que é responsável por transformar o código JavaScript em componentes nativos (Objective-C/Java) { "\n\n" }
                - A Bridge é assíncrona, serializada e agrupada { "\n\n" }
                - Existem três threads principais em uma aplicação React Native { "\n\n" }
                - A primeira é a main thread, que é responsável por tratar as requisições relacionadas a renderização de elementos na tela e também pelos gestos reproduzidos pelo usuário { "\n\n" }
                - A segunda é responsável por executar o código JavaScript { "\n\n" }
                - E por último, a Shadow Queue que é a responsável pelos cálculos referentes ao layout { "\n\n" }
                - O React Native transforma um elemento JSX para uma linguagem de marcação que pode ser entendida pelo processamento nativo { "\n\n" }
                - A MessageQueue recebe todas as mensagens que ocorrem entre o JavaScript e parte nativa e interpreta as mensagens na ordem de chegada { "\n\n" }
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
        marginTop: "8%",
        marginHorizontal: "11%",
        width: 270
    },
    
    text: {
      color: colors.dark_gray,
      marginHorizontal: 15,
      marginVertical: 20,
      textAlign: "justify"
    }
});