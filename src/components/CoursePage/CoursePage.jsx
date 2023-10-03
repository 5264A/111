import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import video1 from "../../assets/videos/video1.mp4"
import video2 from "../../assets/videos/video2.mp4"
import video3 from "../../assets/videos/video3.mp4"
import video4 from "../../assets/videos/video4.mp4"

const CoursePage = () => {

    const [lectureNumber, setLectureNumber] = useState(0)
   

    const lectures=[ 
        {
        _id: "irehf8y1",
        title: "Video1",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta rem vitae, hic natus deleniti officiis praesentium. Nulla obcaecati, ipsa quisquam temporibus sint quaerat eveniet velit earum expedita pariatur. Labore quasi consequuntur sit, ratione perferendis ducimus molestias nesciunt facilis delectus, suscipit atque. Obcaecati aut fugiat tempora esse modi facilis expedita.",
        video:{
            url: video1
        }
       
    }, {
        _id: "irehf8y2",
        title: "Video2",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta rem vitae, hic natus deleniti officiis praesentium. Nulla obcaecati, ipsa quisquam temporibus sint quaerat eveniet velit earum expedita pariatur. Labore quasi consequuntur sit, ratione perferendis ducimus molestias nesciunt facilis delectus, suscipit atque. Obcaecati aut fugiat tempora esse modi facilis expedita.",
        video:{
            url: video2
        }
    }, {
        _id: "irehf8y3",
        title: "Video3",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta rem vitae, hic natus deleniti officiis praesentium. Nulla obcaecati, ipsa quisquam temporibus sint quaerat eveniet velit earum expedita pariatur. Labore quasi consequuntur sit, ratione perferendis ducimus molestias nesciunt facilis delectus, suscipit atque. Obcaecati aut fugiat tempora esse modi facilis expedita.",
        video:{
            url:video3
        }
    },
    {
        _id: "irehf8y356",
        title: "Video4",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta rem vitae, hic natus deleniti officiis praesentium. Nulla obcaecati, ipsa quisquam temporibus sint quaerat eveniet velit earum expedita pariatur. Labore quasi consequuntur sit, ratione perferendis ducimus molestias nesciunt facilis delectus, suscipit atque. Obcaecati aut fugiat tempora esse modi facilis expedita.",
        video:{
            url:video4
        }
    },
]
  // Get the selected lecture
  const selectedLecture = lectures[lectureNumber];

  // Update the video source dynamically
  const videoUrl = selectedLecture.video.url;

  return (
    <Grid minH={"90vh"} templateColumns={["1fr" ,"3fr 1fr"]} > 
        <Box>
            <video width={"100%"} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback  src={videoUrl} ></video>
            <Heading m={"4"}  children={`#${lectureNumber+1} ${lectures[lectureNumber].title} `} />
            <Heading m={"4"} children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
        </Box> 
    
        <VStack>
            {
                lectures.map((item,index)=>(
                    <button key={item._id}
                    onClick={()=>setLectureNumber(index)}
                        style={{
                            width:'100%',
                            padding: "1rem",
                            margin: "0",
                            textAlign: "center",
                            borderBottom: "1px solid rgba(0,0,0,0.2)"

                        }}
                    >
                    <Text noOfLines={1}>
                        #{index+1} {item.title}
                    </Text>
                </button>
                ))
            }
         
        </VStack>
    </Grid>
  )
}

export default CoursePage