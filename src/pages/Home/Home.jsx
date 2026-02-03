import React, { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Header from "@/Header";
import CardComp from "./CardComp";
import PlusModal from "./PlusModal";

const Home = () => {
  // ダミーデータ
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

  // 最初のデータ(data)を list として管理する
  const [list, setList] = useState(data);
  // 「現在選択中のカテゴリ」を管理するState（初期値は "全て"）
  const [selectedCategory, setSelectedCategory] = useState("全て");
  // モーダル管理
  const [isOpen, setIsOpen] = useState(false);

  // カテゴリだけを取ってきて配列で管理
  const categories = ["全て", ...new Set(list.map((item) => item.category))];

  // 表示するデータを選定するところ
  // 選択中のカテゴリが「全て」ならdataを、それ以外ならdataの中のカテゴリと一致するものだけ取り出す
  const filteredData =
    selectedCategory === "全て"
      ? list
      : list.filter((item) => item.category === selectedCategory);

  // 新規履歴追加
  const addPurchase = (newPurchase) => {
    setList([...list, newPurchase]); // 今のリストを広げて、新しいのを追加した「新しい配列」で上書き
    setIsOpen(false); // 保存が終わったらモーダルを閉じる
  };

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Headerに、現在の選択状態と、カテゴリ配列、「今、どのカテゴリが選ばれているか」を書き換えるための専用リモコンを渡す */}
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Box p={4} pb="100px">
        {/* 選定されたデータの中身を1つずつ取り出してCardCompに渡す */}
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

      {/*「＋」ボタン */}
      <IconButton
        icon={<AddIcon />}
        colorScheme="orange"
        isRound
        size="lg"
        position="fixed"
        bottom="100px"
        right="20px"
        shadow="2xl"
        onClick={() => setIsOpen(true)}
      />
      <PlusModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categories={categories}
        addPurchase={addPurchase}
      />
    </Box>
  );
};

export default Home;
