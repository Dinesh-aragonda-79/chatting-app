import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AnimatedToggle = ({ isChecked, onChange }) => {
  const bgColor = useColorModeValue("gray.200", "gray.600");
  const handleBgColor = useColorModeValue("white", "gray.800");

  return (
    <MotionBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="80px"
      height="40px"
      bg={bgColor}
      borderRadius="20px"
      position="relative"
      cursor="pointer"
      onClick={onChange}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MotionBox
        width="36px"
        height="36px"
        bg={handleBgColor}
        borderRadius="18px"
        position="absolute"
        left={isChecked ? "calc(100% - 36px)" : "4px"}
        top="2px"
        transition={{ duration: 0.5 }}
      />
    </MotionBox>
  );
};

export default AnimatedToggle;
