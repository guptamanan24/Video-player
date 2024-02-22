import React from 'react';
import { Box, Input} from '@chakra-ui/react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineSend } from 'react-icons/ai';
import { Heading,Button,HStack,VStack,Stack,Text } from '@chakra-ui/react';
import { BiBorderRight } from 'react-icons/bi';
import { AiOutlineYoutube,AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor = {'blackAlpha.900'} minH = {'40'} p="16" color = {"white"}>


      <Stack direction={['column','row']}>
      <VStack alignItems={'stretch'} w="full" px={4}>
      <Heading size="md" textTransform = {"uppercase"}>
        subscribe to get updates
      </Heading>
      <HStack borderBottom={'2px solid white'} py='2'>
        <Input
        placeholder = "Enter Email Here..."
        border={'none'}
        borderRadius="none"
        outline = "none"
        focusBorderColor='none'
        />
        <Button p={'0'} variant = {'ghost'} borderRadius={'0 20px 20px 0'}>
          <AiOutlineSend size={20} />
        </Button>
      </HStack>
      </VStack>
      <VStack
      w = "full" borderLeft={['none','1px solid white']} borderRight= {['none','1px solid white']}>
        <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
        <Text>All Rights Received</Text>
      </VStack>
      <VStack w={'full'}>
        <Heading justifyContent={'space-between'} >
          <Button variant={'link'} colorScheme={'whiteAlpha'} padding={['2','4']}>
            <a target="blanck" href='https://youtube.com'><AiOutlineYoutube size={40}/></a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'} padding={['2','4']}>
            <a target="blanck" href='https://www.linkedin.com/in/manan-gupta-0b9397256/'><AiOutlineLinkedin size={40}/></a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'} padding={['2','4']}>
            <a target="blanck" href='http://google.com'><AiOutlineGoogle size={40}/></a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'} padding={['2','4']}>
            <a target="blanck" href='http://instagram.com/gupta_manan24'><AiOutlineInstagram size={40}/></a>
          </Button>
        </Heading>
      </VStack>

      </Stack>
    </Box>
  )
};

export default Footer;