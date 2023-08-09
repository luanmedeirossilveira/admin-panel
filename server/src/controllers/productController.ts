import { Request, Response } from 'express';
import Product from '../db/models/ProductModel';

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createProduct = async (req: Request, res: Response) => {
  const { name, price, category, quantity } = req.body;

  try {
    const product = await Product.create({ name, price, category, quantity });
    res.json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.destroy({ where: { id } });
    res.json(product);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const changeProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, category, quantity } = req.body;

  try {
    const product = await Product.update({ name, price, category, quantity }, { where: { id } });
    res.json(product);

  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export { getProducts, createProduct, deleteProduct, changeProduct };
