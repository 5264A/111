import React from 'react'
import {ColorModeSwitcher} from "../../../ColorModeSwitcher" 
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const LinkButton = ({url="/", title= "Home", onClose})=>(
    <Link onClick={onClose} to={url}  >
        <Button variant={"ghost"}>{title}</Button>
    </Link>

)

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
    const isAuthenticated = true
    const user = {
        role: "admin"
    }
    const logoutHandler = ()=>{
        console.log("logout")
        onClose()
    }
  return (
    <>
       <ColorModeSwitcher/>
       <Button onClick={onOpen} colorScheme='yellow' borderRadius={"full"} width={"12"} height={"12"} position={"fixed"} top={"6"} left={"6"} zIndex={"overlay"}>
            <RiMenu5Fill/>
        </Button> 
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropFilter={"blur(3px)"} />
            <DrawerContent>
                <DrawerHeader borderBottomWidth={"1px"}>COURSE BUNDLER</DrawerHeader>
                <DrawerBody>
                    <VStack spacing={"8"} alignItems={"flex-start"}>
                        <LinkButton onClose={onClose} url="/" title="Home" />
                        <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
                        <LinkButton onClose={onClose} url="/request" title="Request A Course" />
                        <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
                        <LinkButton onClose={onClose} url="/about" title="About Us" />
                    </VStack>
                    <HStack justifyContent={"space-evenly"} width={"80%"} position={"absolute"} bottom={"2rem"}>
                        {isAuthenticated? (<>
                        <VStack>
                            <HStack>
                            <Link onClick={onClose} to="/profile">
                                <Button variant={"ghost"} colorScheme='yellow'>Profile</Button>
                            </Link> 

                            <Button  variant={"ghost"} onClick={logoutHandler} >
                                <RiLogoutBoxLine/>
                                LogOut</Button>

                            </HStack>
                            { user && user.role === "admin" && <Link onClick={onClose} to="/admin/dashboard" >
                                <Button colorScheme='purple' variant={"ghost"}>
                                    <RiDashboardFill style={{margin:"4px"}} />
                                    DashBoard
                                </Button>
                                </Link>}
                        </VStack>
                        </>):
                        (<>
                            <Link onClick={onClose} to="/login">
                                <Button colorScheme='yellow'>Login</Button>
                            </Link> 
                            <p>OR</p>
                            <Link onClick={onClose} to="/register">
                                <Button colorScheme='yellow'>SignUp</Button>
                            </Link>
                        </>)}

                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header