import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useColorModeValue } from "@chakra-ui/react";

const ChatLoading = () => {
  // Use useColorModeValue to set the skeleton start and end colors based on the current color mode
  const startColor = useColorModeValue("gray.200", "gray.700");
  const endColor = useColorModeValue("gray.400", "gray.900");

  return (
    <Stack spacing={4}>
      {[...Array(12)].map((_, index) => (
        <Skeleton
          key={index}
          height="45px"
          startColor={startColor}
          endColor={endColor}
        />
      ))}
    </Stack>
  );
};

export default ChatLoading;
