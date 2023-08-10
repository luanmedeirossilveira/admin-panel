import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { SuperTable } from '../components/SuperTable'
import axios from 'axios'
import { Button, useDisclosure } from '@chakra-ui/react'
import { Edit } from '../modals/Edit'

export type ProductsType = {
  name: string
  price: string
  category: string
  quantity: number
}

export const Dashboard = () => {
  const editModal = useDisclosure()
  const [products, setProducts] = React.useState<ProductsType[] | []>([])

  useEffect(() => {
    axios.get('http://localhost:3000/products').then((response) => {
      const data: ProductsType[] = response.data;
      setProducts(data.map((product) => {
        const price = `R$ ${new Intl.NumberFormat('pt-BR').format(Number(product.price))}`;

        return {
          name: product.name,
          price,
          category: product.category,
          quantity: product.quantity
        }
      }))
    })
  }, [])

  return (
    <main>
      <Header />
      <Button onClick={editModal.onOpen}>Adicionar novo produto</Button>
      <SuperTable
        title="Produtos"
        variant="striped"
        columns={[
          {
            label: 'Nome',
            accessor: 'name',
          },
          {
            label: 'Valor',
            accessor: 'price',
          },
          {
            label: 'Categoria',
            accessor: 'category',
          },
          {
            label: 'Quantidade',
            accessor: 'quantity',
          }
        ]}
        data={products}
      />
      <Edit isOpen={editModal.isOpen} onClose={editModal.onClose} />
    </main>
  )
}
