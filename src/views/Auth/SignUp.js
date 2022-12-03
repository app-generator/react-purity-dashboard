// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import AuthApi from "../../api/auth";
import { useAuth } from "../../auth-context/auth.context";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const history = useHistory();
  const { user } = useAuth();

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    AuthApi.Register(formData).then(response => {
      if(response.data.success) {
        return history.push("/auth/signin");
      } else {
        setError(response.data.msg)
      }
    }).catch(error => {
      if (error.response) {
        return setError(error.response.data.msg);
      }
      return setError("There has been an error.");
    })
  }

  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
          Use these awesome forms to login or create new account in your project
          for free.
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        {user && user.token ? (
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
              You are already signed in.
          </Text>
        ) : (
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Register
          </Text>
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            add your credentials
          </Text>
          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your full name'
              mb='24px'
              size='lg'
              name="username"
              onChange={handleChange}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Your email address'
              mb='24px'
              size='lg'
              name="email"
              onChange={handleChange}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Your password'
              mb='24px'
              size='lg'
              name="password"
              onChange={handleChange}
            />
            <FormControl display='flex' alignItems='center' mb='24px'>
              <Switch id='remember-login' colorScheme='teal' me='10px' />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Remember me
              </FormLabel>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color="red" marginBottom="15px" fontWeight='medium'>
                {error}
              </Text>
            </Flex>
            <Button
              onClick={handleSubmit}
              type='submit'
              bg='teal.300'
              fontSize='10px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}>
              SIGN UP
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
              <Link
                color={titleColor}
                ms='5px'
                href='#/auth/signin'
                fontWeight='bold'>
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>)}
      </Flex>
    </Flex>
  );
}

export default SignUp;
