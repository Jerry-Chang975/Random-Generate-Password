import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import { router } from './src/routes/routes.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// import routes
app.use('/', router);

// set handlebars as view engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/views');

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
