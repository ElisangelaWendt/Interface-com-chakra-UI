import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <Flex>
      <VStack>
        <Navbar />
        <Flex backgroundImage="../images/Background.svg" w="100vw" h="100%">
          <VStack pl="8.75rem" pt="5rem" color="white" alignItems="flex-start" pb="4.375rem" spacing="1.25rem" w="100%">
          <Text  fontSize={38}>
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize={20} color="white">Chegou a hora de tirar do papel a viagem que você 
          <br/>
          sempre sonhou. </Text>
          </VStack>
        </Flex>
          <Image src="../images/Airplane.svg" pr="8.75rem" alignSelf="flex-end" position="absolute" pt="11rem"/>
      </VStack>
    </Flex>
  );
}
