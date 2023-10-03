import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Request = () => {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [course,setCourse] = useState("")
  return (
    <Container h={'90vh'} my={'5'}>

        <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children="Request A Course" />

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
        
                <FormLabel htmlFor='course' children="Request A Course"/>
                <Textarea required id='course' value={course} onChange={e=> setCourse(e.target.value)} placeholder='Your Message' type='text' focusBorderColor='yellow.500' />
            
            </Box> 
            
            
            <Button colorScheme='yellow' my={"4"} type='submit' >Send Message</Button>
            <Box>
                See Available Courses{" "}
                <Link to="/courses">
                    <Button colorScheme='yellow' variant={"link"}>Click Here</Button>
                </Link>
            </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Request