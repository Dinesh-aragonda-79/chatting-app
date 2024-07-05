import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
/* index.css */

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("black", "black");
  const color = useColorModeValue("gray.100", "gray.300");

  useEffect(() => {
    if (colorMode !== "dark") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  return (
    <Box w="100%" h="100vh" bg={bg} color={color}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
    </Box>
  );
};

export default Chatpage;
