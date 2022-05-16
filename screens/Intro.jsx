import React from "react";
import {Pressable,Spacer, Box, Heading, AspectRatio, Image, Text, HStack, Stack, NativeBaseProvider, Center } from "native-base";

const Card = () => {
  return <Box alignItems="center">
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
            uri: "https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png"
          }} alt="image" />
        </AspectRatio>

      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Sobre React Native
          </Heading>

        </Stack>
        <Text fontWeight="400">
          O React Native é um framework baseado no já aclamado React, desenvolvido
          pela equipe do Facebook, que possibilita o desenvolvimento de aplicações
          mobile, tanto para Android, como para iOS, utilizando apenas Javascript.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>;
};

const PressableCard = ({navigation}) =>{
  

  return <Pressable onPress={
    () => navigation.navigate("História")
  }>
      {({
      isHovered,
      isFocused,
      isPressed
    }) => {
      return <Box maxW="80" borderWidth="1" marginTop="10" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
        transform: [{
          scale: isPressed ? 0.96 : 1
        }]
      }}>
            <HStack alignItems="center">
             
              <Spacer />
              <Text fontSize={10} color="coolGray.800">
                Ver mais
              </Text>
            </HStack>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              História
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              Aprenda sobre como surgiu o framework React Native, e como ele foi desenvolvido.
            </Text>
          </Box>;
    }}
    </Pressable>;
}


const Intro = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box flex={1}>

        <Box p="4" bg="gray.100">
          <Card />
          <Center>
            <PressableCard navigation={navigation}  />
          </Center>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Intro;