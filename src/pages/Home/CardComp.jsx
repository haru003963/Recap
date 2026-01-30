import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CardComp = ({ name, price, category, date }) => {
  return (
    <Box p={4}>
      <Box bg="orange.100" p={5} borderRadius="lg" shadow="md" mt={4}>
        <Flex align="center">
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">{name}</Text>
            <Text fontSize="sm" color="gray.600">
              {category}
            </Text>
          </VStack>

          <Spacer />

          <VStack align="end" spacing={0}>
            <Text fontWeight="bold">¥{price}</Text>
            <Text fontSize="xs">{date}</Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardComp;
