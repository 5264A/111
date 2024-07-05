import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {RiSecurePaymentFill} from "react-icons/ri"
import termsandcondition from "../../assets/docs/termsAndCondition"


const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
        <Heading children="About Us" textAlign={["center","left"]} />
        <Stack direction={["column", "row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>

        <Avatar boxSize={["40","48"]} />
        <Text children="Co-Founder" />
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading children="Aman Bhavsar" size={["md","xl"]} />
            <Text textAlign={["center","left"]} children={`Hi, I am a Full Stack Developer. Our mission is to provide quality content at reasonable price.`} />
        </VStack>

    </Stack>
    <Stack m={"8"} direction={["column","row"]} alignItems={"center"} >
        <Text m={"8"} textAlign={["center","left"]} >
            We are a video streaming platform with some premium courses available at reasonable price
        </Text>
        <Link to="/subscribe">
            <Button variant={"ghost"} colorScheme='yellow' >
                Checkout Our Plan
            </Button>
        </Link>

    </Stack>

    <Box>
        <Heading size={"md"}  children="Terms & Conditions" textAlign={["center","left"]} my={"4"} />
        <Box h="sm" p="4" overflowY={"scroll"} >
            <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center","left"]} children={termsandcondition} />
            <Heading my={"4"} size={"xs"} children="Refund only applicable for cancelation within 7 days" />
        </Box>
    </Box>

    <HStack my={"4"} p={"4"}>
        <RiSecurePaymentFill/>
        <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children="Secure Payment Method" />
    </HStack>
    </Container>
  )
}

export default About
