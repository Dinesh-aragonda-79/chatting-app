import { Box, Text, Flex, Container, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import AnimatedToggle from "../components/AnimatedToggle";

const MotionBox = motion(Box);
const MotionText = motion(Text);

function Homepage() {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  const containerBg = useColorModeValue(
  "white", "gray.1000"
  );
  const boxBg = useColorModeValue("white", "grey.100");
  const textColor = useColorModeValue("black", "white");

  return (
    
      <Container maxW="xl" centerContent bg={containerBg} p={4} borderRadius="lg">
        <MotionBox
          p={6}
          bg={boxBg}
          w="100%"
          mb={8}
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="lg"
          color={textColor}
          textAlign="center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MotionText
            fontSize="4xl"
            fontFamily="Work sans"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Mingle
          </MotionText>
        </MotionBox>
        <MotionBox
          bg={boxBg}
          w="100%"
          p={6}
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex justifyContent="center" mb="1em" alignItems="center">
            <Text mr="2" fontSize="lg">
              Login
            </Text>
            <AnimatedToggle
              isChecked={!showLogin}
              onChange={() => setShowLogin(!showLogin)}
            />
            <Text ml="2" fontSize="lg">
              Sign Up
            </Text>
          </Flex>
          {showLogin ? <Login /> : <Signup />}
        </MotionBox>
      </Container>
  );
}

export default Homepage;
