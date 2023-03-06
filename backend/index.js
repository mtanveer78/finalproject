const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");
connectToMongo();
const app = express();
const port = 5000

app.use(express.json());
app.use(cors());
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})