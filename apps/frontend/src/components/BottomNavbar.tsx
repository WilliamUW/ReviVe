// src/components/BottomNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Icon } from '@chakra-ui/react';
import { FaHome, FaRecycle, FaTools, FaShoppingCart } from 'react-icons/fa';

const BottomNavbar = () => (
  <Flex
    as="nav"
    position="fixed"
    bottom="0"
    width="100%"
    bg="gray.800"
    color="white"
    justifyContent="space-around"
    alignItems="center"
    py={3}
    boxShadow="0px -2px 5px rgba(0, 0, 0, 0.2)"
  >
    <Link to="/">
      <Box textAlign="center">
        <Icon as={FaHome} w={6} h={6} />
        <Box>Home</Box>
      </Box>
    </Link>
    <Link to="/unused">
      <Box textAlign="center">
        <Icon as={FaRecycle} w={6} h={6} />
        <Box>Listing</Box>
      </Box>
    </Link>
    <Link to="/broken">
      <Box textAlign="center">
        <Icon as={FaTools} w={6} h={6} />
        <Box>Broken</Box>
      </Box>
    </Link>
    <Link to="/buy">
      <Box textAlign="center">
        <Icon as={FaShoppingCart} w={6} h={6} />
        <Box>Buy</Box>
      </Box>
    </Link>
  </Flex>
);

export default BottomNavbar;
