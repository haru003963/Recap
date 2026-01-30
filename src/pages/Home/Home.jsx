import React, { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Header from "@/Header";
import CardComp from "./CardComp";

const Home = () => {
  // 1. 本来はここがAmazonやSHEINのデータになります
  const data = [
    {
      id: 1,
      name: "ワイヤレスイヤホン",
      price: "5,800",
      category: "Amazon",
      date: "2026/01/29",
    },
    { id: 2, name: "冬物ニット", price: "3,200", category: "SHEIN", date: "2026/01/28" },
    {
      id: 3,
      name: "スマホケース",
      price: "1,500",
      category: "Amazon",
      date: "2026/01/27",
    },
  ];
  // 2. 「現在選択中のカテゴリ」を管理するState（初期値は "全て"）
  const [selectedCategory, setSelectedCategory] = useState("全て");

  const categories = ["全て", ...new Set(data.map((item) => item.category))];

  // 3. 選択されたカテゴリに基づいてデータを絞り込む
  const filteredData =
    selectedCategory === "全て"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Headerに、現在の選択状態と、変更するための関数を渡す */}
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <Box p={4} pb="100px">
        {/* 元の data ではなく、絞り込んだ filteredData を使う */}
        {filteredData.map((item) => (
          <CardComp
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            date={item.date}
          />
        ))}
      </Box>

      {/* 3. デザイン案の「＋」ボタン */}
      <IconButton
        icon={<AddIcon />}
        colorScheme="orange"
        isRound
        size="lg"
        position="fixed"
        bottom="100px"
        right="20px"
        shadow="2xl"
        onClick={() => alert("追加機能はこれから実装！")}
      />
    </Box>
  );
};

export default Home;
