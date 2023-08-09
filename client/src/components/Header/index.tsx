import { Avatar, Flex, Icon, IconButton } from "@chakra-ui/react";
import { AiOutlineBars } from "react-icons/ai";

export const Header = () => {
  return (
    <Flex justifyContent="space-between" p={5}>
      <IconButton
        aria-label="open menu"
        icon={<Icon as={AiOutlineBars} fontSize={"4xl"} />}
      />
      <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
    </Flex>
  );
};
