import express from 'express'
import dotenv from 'dotenv';
import contactRouter from './modules/contact/contact.route';

const app = express();
app.use(express.json());
dotenv.config();

app.use('api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app;
