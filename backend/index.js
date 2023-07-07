const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path')
connectToMongo();
const app = express();
const port = 5000
const { dirname } = require('path');

// const __filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);

app.use(cors());

//increase payload 
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/product', require('./routes/product'));
app.use('/api/category', require('./routes/categories'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/wishlist', require('./routes/wishlist'));
app.use('/api/review', require('./routes/reviews'));
app.use('/api/rating', require('./routes/ratings'));
app.use('/api/order', require('./routes/orders'));
app.use('/api/flashsale', require('./routes/flashsale'));
app.use('/api/sample', require('./routes/sample'));
dir_path = path.join(dirname(__dirname) + '/backend/public/uploads')
app.use('/images', express.static(dir_path));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
