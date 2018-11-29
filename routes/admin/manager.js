const express = require('express');
const router = express.Router();

const Book = require('../../models/Books.js');
const Import = require('../../models/Import.js');

// GET Import page
router.get('/import', checkAdmin, function (req, res) {
	Book.find().then(function(book){
		res.render('manager/import',{errors: null, book: book});
	});
});
// POST Import page
router.post('/import', checkAdmin,  function(req, res, next) {
  req.checkBody('count', 'Count must be a number').isInt();
	req.checkBody('price', 'Price must be a number').isInt();
  const errors = req.validationErrors();
	if (errors) {
	  res.render('manager/import',{errors : errors});
	}
	Book.findById(req.body.book)
		.then(book => {
			book.count+=req.body.count;
			book.save();
			const newImport = new Import({
				book: book.name,
				count: req.body.count,
				price: req.body.price,
			});
			newImport.save().then(function(){
				req.flash('success_msg', 'Add Successful');
				res.redirect('/admin/manager/import');
			});
		})

});


function checkAdmin(req, res, next){

    if(req.isAuthenticated()){
      next();
    }else{
      res.redirect('/admin/login');
    }
}
module.exports = router;
