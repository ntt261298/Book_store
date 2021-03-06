const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
// require('./config/passport')(passport);

const books = require('./routes/api/books.js');
const search = require('./routes/api/search.js');
const comment = require('./routes/api/comment.js');
const userVerify = require('./routes/api/userVerify.js');
const userSignup = require('./routes/api/userSignup.js');
const userSignin = require('./routes/api/userSignin.js');
const userLogout = require('./routes/api/userLogout.js');
const transactions = require('./routes/api/transactions.js');
const userInfor = require('./routes/api/userInfor.js');


const admin = require('./routes/admin/verify.js');
const cate = require('./routes/admin/category');
const book = require('./routes/admin/book');
const cart = require('./routes/admin/cart');
const manager = require('./routes/admin/manager');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'admin'));
app.set('view engine', 'ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

// Validator input form
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});
// User Routes
app.use('/api/books', books);
app.use('/api/comment', comment);
app.use('/api/account/signup', userSignup);
app.use('/api/account/signin', userSignin);
app.use('/api/account/verify', userVerify);
app.use('/api/account/logout', userLogout);
app.use('/api/transactions', transactions);
app.use('/api/user', userInfor);
app.use('/api/search', search);
app.use('/uploads', express.static('public/uploads'));
app.use(express.static('public'));
// Admin routes
app.use('/admin', admin);
app.use('/admin/category', cate);
app.use('/admin/product', book);
app.use('/admin/cart', cart);
app.use('/admin/manager', manager);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
