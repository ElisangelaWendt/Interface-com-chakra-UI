import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { CityCard } from "../../components/CityCard";

export default function Europa() {
  return (
    <>
      <HStack>
        <Button as="a" href="/" color="gray.600">
          <ChevronLeftIcon w="32px" h="32px" />
        </Button>
        <Navbar />
      </HStack>
      <Flex backgroundImage="../images/Europa2.svg" w="100%" h="41.66rem">
        <Text
          alignSelf="flex-end"
          pb="3.68rem"
          pl="8.75rem"
          fontSize="3rem"
          fontWeight={600}
        >
          Europa
        </Text>
      </Flex>
      <VStack pl="8.75rem" pt="5rem" color="gray.600">
        <HStack spacing="4.375rem">
        <Text w="37.5rem" fontSize="1.5rem" align="justify">
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <>
        <Text fontSize="24px" fontWeight="600" align="center">
        <Text color="yellow" fontSize="3rem">50</Text>
          países</Text>
        </>
        <>
        <Text fontSize="24px" fontWeight="600" align="center">
        <Text color="yellow" fontSize="3rem">60</Text>
          línguas</Text>
        </>
        <>
        <Text fontSize="24px" fontWeight="600" align="center">
        <Text color="yellow" fontSize="3rem">27</Text>
          cidades +100</Text>
        </>
        </HStack>
        <Flex>
        
        <CityCard/>
        <CityCard/>
        <CityCard/>
        </Flex>
      </VStack>
    </>
  );
}
