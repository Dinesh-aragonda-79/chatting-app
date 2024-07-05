import { CloseIcon } from "@chakra-ui/icons";
import { Badge, Box, Text } from "@chakra-ui/react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={3}
      py={2}
      borderRadius="full"
      m={1}
      mb={2}
      variant="solid"
      fontSize="sm"
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      display="flex"
      alignItems="center"
    >
      <Text mr={2} color="white">
        {user.name} {admin === user._id && <Box as="span" fontWeight="bold">(Admin)</Box>}
      </Text>
      <CloseIcon color="white" />
    </Badge>
  );
};

export default UserBadgeItem;
