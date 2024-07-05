// UserListItem.js
import { Avatar } from "@chakra-ui/avatar";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ handleFunction }) => {
  const { user } = ChatState();

  // Define colors based on the current color mode
  const bgColor = useColorModeValue("gray.600", "gray.700");
  const hoverBgColor = useColorModeValue("teal.500", "teal.600");
  const textColor = "white"; // Set to white
  const secondaryTextColor = useColorModeValue("gray.300", "gray.300");

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg={bgColor}
      _hover={{
        background: hoverBgColor,
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color={textColor}
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
      boxShadow="md" // Adding shadow for better separation
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text fontWeight="bold">{user.name}</Text>
        <Text fontSize="xs" color={secondaryTextColor}>
          <b>Email: </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
