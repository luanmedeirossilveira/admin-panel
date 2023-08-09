import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { SuperTable } from '../components/SuperTable'
import axios from 'axios'

export type ProductsType = {
  name: string
  price: string
  category: string
  quantity: number
}

export const Dashboard = () => {
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
    </main>
  )
}
