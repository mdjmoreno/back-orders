import express from 'express';
import cors from 'cors';
import  OrderRouter  from './routes/order.routes';

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/api', OrderRouter);



app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
