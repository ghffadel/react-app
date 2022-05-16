import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

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
            React Native
          </Heading>

        </Stack>
        <Text fontWeight="400">
          Em 2012, o Facebook decidiu adotar o desenvolvimento mobile first
        </Text>
        <Text fontWeight="400">
          A empresa tentou inicialmente usar HTML e depois WebView para desenvolver as aplicações, mas nenhuma das ideias funcionou adequadamente
        </Text>
        <Text fontWeight="400">
          Há diferenças entre aplicações web e mobile, como os eventos de gestos e toques no celular
          O desenvolvimento de aplicativos nativos seria muito custoso, pois teriam que ser escritos pelo menos dois códigos, um para cada plataforma.
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

const Card2 = () => {
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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkrqVYmeywm-Moiw4LtQ6y5-C7rHPIZtS3y8n980G1qdJyW8nBFBrS-e2d5e5SqpS6_8&usqp=CAU"
          }} alt="image" />
        </AspectRatio>

      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Christopher Chedeau
          </Heading>

        </Stack>
        <Text fontWeight="400">
          O desenvolvedor Christopher Chedeau se juntou com Jordan Walke, Ashwin Bharambe e Lin He para aperfeiçoar um protótipo, já que Jordan conseguiu gerar um componente em JavaScript para iOS
        </Text>

        <Text fontWeight="400">
        Eles desenvolveram em 2 dias um protótipo que conseguia gerar componentes mobile utilizando JavaScript
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
export default function História() {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        
        <Box p="4" bg="gray.100">
          <Card />
          <Card2 />
        </Box>
      </Box>
      
    </NativeBaseProvider>
  );
};