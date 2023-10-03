import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCss = {
    cursor: "pointer",
    merginLeft: "-5%",
    width: "110%",
    height: "100%",
    border: "none",
    color: "#ECC94B",
    backgroundColor: "white" 
}

const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss,
}


const Register = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [imagePrev,setImagePrev] = useState("")
    const [image,setImage] = useState("")

    const changeImageHandler =(e)=>{
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
    }

  return (
    <Container h={"95vh"} my={"10"} >
        <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
            <Heading children="SignUp" />
            <form action="" style={{width:"100%"}}>
                <Box my={"4"} display={"flex"} justifyContent={"center"}>
                    <Avatar src={imagePrev} size={"2xl"}  />
                </Box>
            <Box my={"4"}>
        
                <FormLabel htmlFor='name' children="Name"/>
                <Input required id='name' value={name} onChange={e=> setName(e.target.value)} placeholder='abc' type='text' focusBorderColor='yellow.500' />
            
            </Box> 
            <Box my={"4"}>
        
                <FormLabel htmlFor='email' children="Email Address"/>
                <Input required id='email' value={email} onChange={e=> setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500' />
            
            </Box> 
            <Box my={"4"}>
        
                <FormLabel htmlFor='password' children="Password"/>
                <Input required id='password' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter Your Password' type='password' focusBorderColor='yellow.500' />
            
            </Box> 
            <Box my={"4"}>
        
                <FormLabel htmlFor='avatar' children="Choose Avatar"/>
                <Input accept='image/*' required id='avatar' type={'file'} focusBorderColor='yellow.500' css={fileUploadStyle} onChange={changeImageHandler} />
            
            </Box>
           
            <Button colorScheme='yellow' my={"4"} type='submit' >SignUp</Button>
            <Box my={"4"}>
                Already Signed Up? <Link to="/login"><Button colorScheme='yellow' variant={"link"}>Login</Button></Link>
            </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Register