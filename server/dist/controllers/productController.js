"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeProduct = exports.deleteProduct = exports.createProduct = exports.getProducts = void 0;
const ProductModel_1 = __importDefault(require("../db/models/ProductModel"));
const getProducts = async (req, res) => {
    try {
        const products = await ProductModel_1.default.findAll();
        res.json(products);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getProducts = getProducts;
const createProduct = async (req, res) => {
    const { name, price, category, quantity } = req.body;
    try {
        const product = await ProductModel_1.default.create({ name, price, category, quantity });
        res.json(product);
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createProduct = createProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel_1.default.destroy({ where: { id } });
        res.json(product);
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.deleteProduct = deleteProduct;
const changeProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, category, quantity } = req.body;
    try {
        const product = await ProductModel_1.default.update({ name, price, category, quantity }, { where: { id } });
        res.json(product);
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.changeProduct = changeProduct;
