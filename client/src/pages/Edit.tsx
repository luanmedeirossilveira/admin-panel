import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios'

const productSchema = zod.object({
  name: zod.string(),
  price: zod.string(),
  category: zod.string(),
  quantity: zod.string(),
})

export type ProductValues = zod.infer<typeof productSchema>

export const Edit = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      price: '',
      category: '',
      quantity: '',
    }
  })

  const onSubmit: SubmitHandler<ProductValues> = (values) => {
    axios.post('http://localhost:3000/products', {
      name: values.name,
      price: values.price,
      category: values.category,
      quantity: values.quantity
    })
  }

  return (
    <main>
      <Flex justifyContent="center" alignItems="center" p={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel>Nome do Produto</FormLabel>
            <Input placeholder="Nome do Produto" {...register('name')} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Preço do Produto</FormLabel>
            <Input placeholder="Preço do Produto" {...register('price')} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Categoria do Produto</FormLabel>
            <Input placeholder="Categoria do Produto" {...register('category')} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Quantidade do Produto</FormLabel>
            <Input type="number" placeholder="Quantidade do Produto" {...register('quantity')} />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            isLoading={false}
          >
            Salvar
          </Button>
        </form>
      </Flex>
    </main>
  );
};
