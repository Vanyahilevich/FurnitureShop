const express = require('express');

const dotenv = require('dotenv');
const cookieParser = require("cookie-parser")

const cors = require('cors');
dotenv.config();
const app = express();
const port = parseInt(process.env.PORT || '5000', 10);

const connectDB = require('./db.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const router = require('./routes');



app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));
app.use(connectDB);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));




app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

