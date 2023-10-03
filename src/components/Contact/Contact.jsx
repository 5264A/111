import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [message,setMessage] = useState("")
  return (
    <Container h={'90vh'} my={'5'}>

        <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children="Contact Us" />

        <form action="" style={{width:"100%"}}>
            <Box my={"4"}>
        
                <FormLabel htmlFor='name' children="Enter Your Name"/>
                <Input required id='name' value={name} onChange={e=> setName(e.target.value)} placeholder='Enter Your Name' type='text' focusBorderColor='yellow.500' />
    
            </Box>
            <Box my={"4"}>
        
                <FormLabel htmlFor='email' children="Email Address"/>
                <Input required id='email' value={email} onChange={e=> setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500' />
            
            </Box> 
            <Box my={"4"}>
        
                <FormLabel htmlFor='message' children="Enter Your Message"/>
                <Textarea required id='message' value={message} onChange={e=> setMessage(e.target.value)} placeholder='Your Message' type='text' focusBorderColor='yellow.500' />
            
            </Box> 
            
            
            <Button colorScheme='yellow' my={"4"} type='submit' >Send Message</Button>
            <Box>
                Request For A Course{" "}
                <Link to="/request">
                    <Button colorScheme='yellow' variant={"link"}>Click Here</Button>
                </Link>
            </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Contact