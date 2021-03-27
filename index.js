import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
const port = process.env.PORT || 2021;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/Learning"
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });


app.get('/', (req, res) => {
    res.send('server is ready');
});


app.use('/api/products', productRouter);
app.use('/api/users', userRouter);


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});


app.listen(port, () => {
    console.log(`The Server started Successfully on port ${port}`);
});
