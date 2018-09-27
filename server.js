const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items.js');
const books = require('./routes/api/books.js');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/key.js').mongoURL;
//Connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// User Routes
app.use('/api/items', items);
app.use('/api/books', books);
app.use('/uploads', express.static('uploads'));
// Serve static assets if in production
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
