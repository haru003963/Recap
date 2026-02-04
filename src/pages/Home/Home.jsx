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
      name: "ダミー",
      price: "5,800",
      category: "Amazon",
      date: "2026-01-29",
    },
  ];

  // 最初のデータ(data)を list として管理する
  const [list, setList] = useState(data);
  // 「現在選択中のカテゴリ」を管理するState（初期値は "全て"）
  const [selectedCategory, setSelectedCategory] = useState("全て");
  // 追加されたカテゴリ
  const [addedCategories, setAddedCategories] = useState([]);
  // モーダル管理
  const [isOpen, setIsOpen] = useState(false);

  // カテゴリだけを取ってきて配列で管理
  const allCategories = [
    ...list.map((item) => item.category), // 1. 支出データにあるカテゴリ
    ...addedCategories, // 2. 手動で追加したカテゴリ
  ];

  // 3. 全てを合体させてから、Set で重複を削除し、最後に「全て」を先頭に添える
  const categories = ["全て", ...new Set(allCategories.filter((cat) => cat))];

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

  // 新規カテゴリ追加
  const handleAddCategory = (newCat) => {
    // 今までの配列 (...addedCategories) を広げて、新しいのを追加
    setAddedCategories([...addedCategories, newCat]);
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
        handleAddCategory={handleAddCategory}
      />
    </Box>
  );
};

export default Home;
