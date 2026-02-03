import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const PlusModal = ({ isOpen, setIsOpen, categories, addPurchase }) => {
  const [itemName, setItemName] = useState(""); // 商品名の記憶
  const [itemPrice, setItemPrice] = useState(""); // 金額の記憶
  const [itemDate, setItemDate] = useState(""); // 日付の記憶
  const [newItemCategory, setNewItemCategory] = useState(""); // 今選択されているカテゴリ

  const handleSave = () => {
    // ① 4つのバラバラなStateを1つの「モノ」にまとめる
    const newPurchase = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
      category: newItemCategory,
      date: itemDate,
    };

    // ② 親（Home.jsx）にこの新しいデータを渡す
    addPurchase(newPurchase);

    // ③ 入力欄を空っぽに戻す
    setItemName("");
    setItemPrice("");
    setItemDate("");
    setNewItemCategory("");
  };

  return (
    // (Home.jsx の return 文の最後の </Box> の直前などに入れる)
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent borderRadius="xl" m={4}>
        <ModalHeader>新しい支出を追加</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>商品名</FormLabel>
              <Input
                placeholder="商品名"
                value={itemName} // Stateを表示
                onChange={(e) => setItemName(e.target.value)} // 打ったらStateに保存
              />
            </FormControl>

            <FormControl>
              <FormLabel>金額</FormLabel>
              <Input
                type="number"
                placeholder="1200"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>日付</FormLabel>
              <Input
                type="date"
                value={itemDate}
                onChange={(e) => setItemDate(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>カテゴリ</FormLabel>
              <HStack>
                <Select
                  placeholder="カテゴリを選択"
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Select>

                {/* カテゴリを新しく作るためのボタン */}
                <IconButton
                  aria-label="Add category"
                  icon={<AddIcon />}
                  variant="outline"
                  onClick={() => {
                    const newCat = prompt("新しいカテゴリ名を入力してください");
                    if (newCat) {
                      // ここにカテゴリリストを更新する処理を後で書きます
                      alert(`${newCat} を追加する機能を作ります！`);
                    }
                  }}
                />
              </HStack>
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={() => setIsOpen(false)}>
            キャンセル
          </Button>
          <Button
            colorScheme="orange"
            onClick={() => {
              handleSave();
              setIsOpen(false);
            }}
          >
            保存する
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PlusModal;
