import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import products from './routes/products.routes';


const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        version: app.get('pkg').version
    })
});

app.use('/products',products)
export default app