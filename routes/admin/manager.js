const express = require('express');
const router = express.Router();

const Book = require('../../models/Books.js');
const Import = require('../../models/Import.js');
const Export = require('../../models/Export.js');

// GET Import page
router.get('/import', checkAdmin, function (req, res) {
	Book.find().then(function(book){
		res.render('manager/import',{errors: null, book: book});
	});
});
// GET Import page
router.get('/export/:start/:end', checkAdmin, function (req, res) {
	allImp = [];
	allExp = [];
	const start = req.params.start;
	const end = req.params.end;
	console.log('New request');
	Import.find().then(imports => {
		console.log('imports', imports);
		let aPromise = new Promise(function(resolve, reject) {
				imports.forEach(imp => {
						if(imp.date.getTime() >= start && imp.date.getTime() <= end) {
							Book.findById(imp.bookId).then(book => {
								const resImp = imp.toObject();
								resImp.name = book.toObject().name;
								allImp.push(resImp);
							})
						}
				});
				resolve(allImp)
		});
	});

	Export.find().then(exps => {
		exps.forEach(exp => {
				if(exp.date.getTime() >= start && exp.date.getTime() <= end) {
					allExp.push(exp);
				}
		});
	})

	setTimeout(() => {
		console.log('allExp', allExp);
		res.render(`manager/export`,{errors: null, allImp: allImp, allExp: allExp})
	}, 1000)

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
			book.count = parseInt(book.count) + parseInt(req.body.count);
			book.save();
			const newImport = new Import({
				bookId: req.body.book,
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
