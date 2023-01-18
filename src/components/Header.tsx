import { Flex, Image } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      bg="gray.700"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h={["8rem", "10rem", "12rem"]}
    >
      <Image src="/logo.png" alt="Logo TODO" />
    </Flex>
  );
};
