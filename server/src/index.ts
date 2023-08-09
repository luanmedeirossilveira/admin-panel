import express, { Application, Request, Response } from "express";
import ProductRouter from './routers/products';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(ProductRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
