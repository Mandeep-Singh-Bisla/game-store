import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/check.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
