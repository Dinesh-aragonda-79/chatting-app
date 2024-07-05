import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  // Define background colors for messages based on the current color mode
  const userMessageBg = useColorModeValue("#BEE3F8", "#2A4365");
  const senderMessageBg = useColorModeValue("#B9F5D0", "#22543D");
  const textColor = useColorModeValue("black", "white");

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <Box display="flex" key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <Box
              bg={m.sender._id === user._id ? userMessageBg : senderMessageBg}
              color={textColor}
              ml={isSameSenderMargin(messages, m, i, user._id)}
              mt={isSameUser(messages, m, i, user._id) ? 3 : 10}
              borderRadius="20px"
              p="5px 15px"
              maxW="75%"
            >
              {m.content}
            </Box>
          </Box>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
