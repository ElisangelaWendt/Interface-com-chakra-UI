import { Flex, Image } from "@chakra-ui/react";

export function Navbar(){
  return(
    <Flex width="100vw" h="100px" justifyContent="center">
      <Image src="../images/Logo.svg" pt="27px" width="15.33rem" height="3.82rem"/>
    </Flex>
  )
}