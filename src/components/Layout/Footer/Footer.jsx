import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutube,TiSocialFacebook,TiSocialInstagram} from "react-icons/ti"

const Footer = () => {
  return (
    <Box padding={4} bg={"blackAlpha.900"} minH={"10vh"} >
        <Stack direction={["column","row"]}>
            <VStack alignItems={["center","flex-start"]} width={"full"}>
                <Heading children="All Rights Reserved" color='white' />
                <Heading children="@Aman" fontFamily={"body"} size={"sm"} color='yellow.400' />
            </VStack>
            <HStack color={"white"} fontSize={"40"} justifyContent={"center"} spacing={["2","10"]}>
                <a href="https://www.instagram.com/aman____9001/" target={'_blank'}>
                    <TiSocialYoutube/>
                </a> 
                <a href="https://www.instagram.com/aman____9001/" target={'_blank'}>
                    <TiSocialFacebook/>
                </a> 
                <a href="https://www.instagram.com/aman____9001/" target={'_blank'}>
                    <TiSocialInstagram/>
                </a>
            </HStack>

        </Stack>
    </Box>
  )
}

export default Footer
