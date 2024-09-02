import express from 'express';
import 'reflect-metadata';
import userRouter from './routes/UserRoutes';
import productRouter from './routes/ProductRoutes';
import cors from 'cors';
import { AppDataSource } from './context/dataSource';

const app = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize();

const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/users', userRouter);

app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
