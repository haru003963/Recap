import React from "react";
import { Text, Button, HStack, VStack } from "@chakra-ui/react";

const Header = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <VStack
      p={4}
      borderBottom="1px solid #eee"
      spacing={3}
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Text fontSize="xl" fontWeight="bold">
        Recap
      </Text>
      <HStack spacing={2} overflowX="auto" width="100%" py={1}>
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            borderRadius="full"
            // 選ばれているカテゴリなら色を塗りつぶし(solid)、そうでなければ枠線(outline)
            variant={selectedCategory === cat ? "solid" : "outline"}
            colorScheme="orange"
            // クリックされたら、HomeのselectedCategoryを更新する
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default Header;
