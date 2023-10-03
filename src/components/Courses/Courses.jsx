import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import course1 from "../../assets/images/course1.jpg"
import course2 from "../../assets/images/course2.png"
import course3 from "../../assets/images/course3.jpg"
import course4 from "../../assets/images/course4.jpg"
import course5 from "../../assets/images/course5.jpg"
import course6 from "../../assets/images/course6.jpg"


const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount})=>{
    return(
        <VStack className='course' alignItems={["center","flex-start"]} >
            <Image src={imageSrc} boxSize={60} objectFit={"contain"} />
            <Heading textAlign={["center","left"]} fontFamily={"sans-serif"} maxW={"200px"} noOfLines={3} children={title} size={"sm"} />
            <Text noOfLines={2} children={description} />
            <HStack>
                <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Creator"} />
                <Text fontFamily={"body"} textTransform={"uppercase"} children={creator} />
            </HStack>
            <Heading textTransform={"uppercase"} textAlign={"center"} size={"xs"} children={`Lectures - ${lectureCount}`} />
            <Heading textTransform={"uppercase"}  size={"xs"} children={`Views - ${views}`} />
            <Stack direction={["column","row"]} alignItems={"center"} >
                <Link to={`/course/${id}`}>
                    <Button colorScheme='yellow'>Watch Now</Button>
                </Link>
                <Button variant={"ghost"} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add To Playlist</Button>
            </Stack>

        </VStack>
    )
}


const Courses = () => {
    const [keyword, setKeyword] = useState("")
    const [category, setCategory] = useState("")

    const addToPlaylistHandler = ()=>{
        console.log("Added to playlist")
    }

    const categories = [
        "Web Development", "App Development", "Artificial Intelligence", "Data Science", "Graphic Design", "Game Development"
    ]
  return (
    <Container minH={"95vh"} minW={"container.lg"} paddingY={"8"}>
        <Heading children="All Courses" m={"8"} />
        <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder='Search a course' type='text' focusBorderColor='yellow.500' />
        <HStack overflow={'auto'} paddingY={"8"} css={{"&::-webkit-scrollbar":{display:"none"}}}>
            {
                categories.map((item,index)=>(
                    <Button key={index} onClick={()=>setCategory(item)} minW={"60"} >
                        <Text children={item} />
                    </Button>
                ))
            }
        </HStack>
        <Stack direction={["column","row"]} flexWrap={"wrap"} justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]} >
            <Course title={"Sample"} description={"Sample"} id={"Sample"} views={23} imageSrc={course1} lectureCount={2} creator={"Sample"} addToPlaylistHandler={addToPlaylistHandler} />
             <Course title={"Sample"} description={"Sample"} id={"Sample"} views={23} imageSrc={course2} lectureCount={2} creator={"Sample"} addToPlaylistHandler={addToPlaylistHandler} /> 
             <Course title={"Sample"} description={"Sample"} id={"Sample"} views={23} imageSrc={course3} lectureCount={2} creator={"Sample"} addToPlaylistHandler={addToPlaylistHandler} /> 
             <Course title={"Sample"} description={"Sample"} id={"Sample"} views={23} imageSrc={course4} lectureCount={2} creator={"Sample"} addToPlaylistHandler={addToPlaylistHandler} />
             <Course title={"Sample"} description={"Sample"} id={"Sample"} views={23} imageSrc={course5} lectureCount={2} creator={"Sample"} addToPlaylistHandler={addToPlaylistHandler} />
             <Course title={"Sample"} description={"Sample"} id={"Sample"} views={23} imageSrc={course6} lectureCount={2} creator={"Sample"} addToPlaylistHandler={addToPlaylistHandler} />

        </Stack>
    </Container>
  )
}

export default Courses