import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      fixed="bottom"
      position="fixed"
      bottom="0"
      width="100%"
      bg="white"
      borderTop="1px solid #eee"
      justify="space-around"
      py="5"
    >
      <Link to="/">
        <Text fontSize="ms">一覧</Text>
      </Link>
      <Link to="/analysis">
        <Text fontSize="ms">分析</Text>
      </Link>
      <Link to="/calendar">
        <Text fontSize="ms">カレンダー</Text>
      </Link>
    </Flex>
  );
};

export default Navbar;
