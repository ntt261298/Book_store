const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items.js');
const books = require('./routes/api/books.js');
const search = require('./routes/api/search.js');
const userVerify = require('./routes/api/userVerify.js');
const userSignup = require('./routes/api/userSignup.js');
const userSignin = require('./routes/api/userSignin.js');
const userLogout = require('./routes/api/userLogout.js');
const transactions = require('./routes/api/transactions.js');
const userHistory = require('./routes/api/userHistory.js');

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
app.use('/api/account/signup', userSignup);
app.use('/api/account/signin', userSignin);
app.use('/api/account/verify', userVerify);
app.use('/api/account/logout', userLogout);
app.use('/api/transactions', transactions);
app.use('/api/user', userHistory);
app.use('/api/search', search);
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
