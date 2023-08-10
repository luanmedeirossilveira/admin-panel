import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

type AttributeType = {
  id: number;
  name: string;
  values: string[];
  type: string;
};

interface EditProps {
  isOpen: boolean;
  onClose: () => void;
}

const productSchema = zod.object({
  name: zod.string(),
  price: zod.string(),
  category: zod.string(),
  quantity: zod.string(),
  attributes: zod.any(),
  valuesAttribute: zod.string(),
});

export type ProductValues = zod.infer<typeof productSchema>;

export const Edit = ({ isOpen, onClose }: EditProps) => {
  const [attributes, setAttributes] = useState<AttributeType[]>([]);
  const [valuesAttributes, setValuesAttributes] = useState<string[]>([]);
  const [listSelectAttributes, setListSelectAttributes] = useState<number[]>(
    []
  );

  const { getValues, register, handleSubmit, watch } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      category: "",
      quantity: "",
      attributes: "",
      valuesAttribute: "",
    },
  });

  const onSubmit: SubmitHandler<ProductValues> = (values) => {
    axios.post("http://localhost:3000/products", {
      name: values.name,
      price: values.price,
      category: values.category,
      quantity: values.quantity,
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/attributes").then((response) => {
      const data: AttributeType[] = response.data;
      setAttributes(data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/attributes/${getValues("attributes")}`)
      .then((response) => {
        const data: AttributeType[] = response.data;

        setValuesAttributes(data[0].values);
      });
  }, [watch("attributes")]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Novo Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column" gap={3}>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Nome" {...register("name")} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Preço</FormLabel>
                <Input placeholder="Preço" {...register("price")} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Categoria</FormLabel>
                <Input placeholder="Categoria" {...register("category")} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Quantidade</FormLabel>
                <Input
                  type="number"
                  placeholder="Quantidade"
                  {...register("quantity")}
                />
              </FormControl>
              {listSelectAttributes.map((attribute) => (
                <Flex key={attribute} gap={3}>
                  <FormControl>
                    <FormLabel>Atributo {attribute}</FormLabel>
                    <Select placeholder="Atributo" {...register("attributes")}>
                      {attributes.map((attribute) => (
                        <option key={attribute.id} value={attribute.id}>
                          {attribute.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Valor do Atributo</FormLabel>
                    <Select
                      placeholder="Valor"
                      {...register("valuesAttribute")}
                    >
                      {valuesAttributes.map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Flex>
              ))}
              <Button
                gap={4}
                onClick={() =>
                  setListSelectAttributes([
                    ...listSelectAttributes,
                    listSelectAttributes.length + 1,
                  ])
                }
              >
                <AiOutlinePlus />
                Adicionar novo atributo
              </Button>
            </Flex>
          </ModalBody>

          <ModalFooter gap={2}>
            <Button type="submit" colorScheme="teal" isLoading={false}>
              Salvar
            </Button>
            <Button
              bg="transparent"
              color="gray.900"
              mr={3}
              onClick={onClose}
              _hover={{
                color: "whiteAlpha.900",
                bg: "teal.500",
              }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
