const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
// require('./config/passport')(passport);

const books = require('./routes/api/books.js');
const search = require('./routes/api/search.js');
const userVerify = require('./routes/api/userVerify.js');
const userSignup = require('./routes/api/userSignup.js');
const userSignin = require('./routes/api/userSignin.js');
const userLogout = require('./routes/api/userLogout.js');
const transactions = require('./routes/api/transactions.js');
const userHistory = require('./routes/api/userHistory.js');
<<<<<<< HEAD

// const index = require('./routes/index');
// const users = require('./routes/users');
const admin = require('./routes/admin/verify.js');
// const cate = require('./routes/cate');
// const product = require('./routes/product');
// const cart = require('./routes/cart')
=======
>>>>>>> bff872c7537dadff56bfa3f2530985ab65fdffe4

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'admin'));
app.set('view engine', 'ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(session({
  secret: 'ntt261298',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// DB Config
const db = require('./config/key.js').mongoURL;
//Connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// User Routes
app.use('/api/books', books);
app.use('/api/account/signup', userSignup);
app.use('/api/account/signin', userSignin);
app.use('/api/account/verify', userVerify);
app.use('/api/account/logout', userLogout);
app.use('/api/transactions', transactions);
app.use('/api/user', userHistory);
app.use('/api/search', search);
<<<<<<< HEAD
app.use('/uploads', express.static('public/uploads'));
app.use(express.static('public'));
// Admin routes
app.use('/admin', admin);
// app.use('/users', users);
// app.use('/admin', admin);
// app.use('/admin/cate', cate);
// app.use('/admin/product', product);
// app.use('/admin/cart', cart);
// app.use(express.static(path.join(__dirname, 'public')));
=======
app.use('/uploads', express.static('uploads'));
>>>>>>> bff872c7537dadff56bfa3f2530985ab65fdffe4
// Serve static assets if in production
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
