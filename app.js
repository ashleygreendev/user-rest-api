import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(router);

app.listen(PORT, () => {
    console.log('server running on port ${PORT}')
});