import React from "react";
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
} from "@chakra-ui/react";

const PlusModal = ({ isOpen, setIsOpen }) => {
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
              <Input placeholder="商品名" />
            </FormControl>

            <FormControl>
              <FormLabel>金額</FormLabel>
              <Input type="number" placeholder="1200" />
            </FormControl>

            <FormControl>
              <FormLabel>カテゴリ</FormLabel>
              <Select placeholder="カテゴリを選択">
                <option value="Amazon">Amazon</option>
                <option value="SHEIN">SHEIN</option>
                <option value="その他">その他</option>
              </Select>
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
              alert("保存機能はこれから！");
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
