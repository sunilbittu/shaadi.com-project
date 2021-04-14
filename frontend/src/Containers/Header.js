import React, { useEffect, useState } from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/core";
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from "react-redux";

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
}
const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const [ userName, setUserName ] = useState('');
    const emptyCheck = (value) => {
        return value && Object.keys(value).length === 0 && value.constructor === Object;
      }
    useEffect(() => {
        if (userInfo && !emptyCheck(userInfo)) {
            setUserName(userInfo.name);
        }
    }, [userInfo]);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          {userName}
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
