const express = require('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g,'-') + file.originalname);
  }
});

const upload = multer({ storage: storage });



function bodauTiengViet(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/ /g, "-");
    str = str.replace(/\./g, "-");
    return str;
}

const Cate = require('../../models/Cate.js');
const Book = require('../../models/Books.js');

/* GET home page. */
router.get('/', checkAdmin, function (req, res) {
	res.redirect('product/booklist')
});

router.get('/booklist', checkAdmin, function (req, res) {

	Book.find().then(function(pro){
		res.render('product/booklist', {product: pro});
	});
});

router.get('/add-product', checkAdmin, function (req, res) {
	Cate.find().then(function(cate){
		res.render('product/addBook',{errors: null, cate: cate});
	});
});


router.post('/add-product', checkAdmin, upload.single('hinh'), function (req, res) {
	req.checkBody('name', 'Name is empty').notEmpty();
	//req.checkBody('hinh', 'Hình không được rổng').notEmpty();
	req.checkBody('price', 'Price must be a number').isInt();
	req.checkBody('des', 'Description is empty').notEmpty();
	console.log(req.file);
    const errors = req.validationErrors();
	if (errors) {
		const file = './public/uploads/' + req.file.filename;
		  const fs = require('fs');
			fs.unlink(file, function(e){
				if(e) throw e;
			});
  		Cate.find().then(function(cate){
			res.render('product/addBook',{errors: errors, cate: cate});
		});
	}else{
		const book = new Book({
			name: req.body.name,
			bookImage: req.file.filename,
			cateId: req.body.cate,
			des: req.body.des,
			price: req.body.price,
      author: req.body.author,
			pagesNumber: req.body.pagesNumber,
      company: req.body.company
		});

		book.save().then(function(){
			req.flash('success_msg', 'Add Successful');
			res.redirect('/product/add-product');
		});
	}
});

router.get('/:id/update-product', function (req, res) {
	Book.findById(req.params.id).then(function(data){
		Cate.find().then(function(cate){
			res.render('product/update',{errors: null, cate: cate, product: data});
		});
	});

});

router.post('/:id/update-product',  upload.single('hinh'), function (req, res) {
	req.checkBody('name', 'Name is empty').notEmpty();
	//req.checkBody('hinh', 'Hình không được rổng').notEmpty();
	req.checkBody('price', 'Price must be number').isInt();
  req.checkBody('pagesNumber', 'Pages Number must be a number').isInt();
	req.checkBody('des', 'Description is empty').notEmpty();
  req.checkBody('author', 'Author is empty').notEmpty();
  req.checkBody('company', 'Company is empty').notEmpty();

    const errors = req.validationErrors();
	if (errors) {

		const file = './public/uploads/' + req.file.filename;
		const fs = require('fs');
		fs.unlink(file, function(e){
			if(e) throw e;
		 });

  		Book.findById(req.params.id).then(function(data){
			Cate.find().then(function(cate){
				res.render('product/update',{ errors: errors, cate: cate, product: data});
			});
		});
	}else{
		Book.findOne({ _id: req.params.id},  function(err, data){
			const file = './public/uploads/' + data.bookImage;
			const fs = require('fs');
			fs.unlink(file, function(e){
				if(e) throw e;
			 });
			data.name = req.body.name;
			data.bookImage = req.file.filename;
			data.cateId = req.body.cate;
			data.des = req.body.des;
			data.price = req.body.price;
			data.author = req.body.author;
      data.pagesNumber = req.body.pagesNumber;
      data.company = req.body.company

			data.save();
				req.flash('success_msg', 'Modify Successful');
				res.redirect('update-product');
			//});


		});

	}

});

router.get('/:id/delete-product', checkAdmin,  function (req, res) {
	// Product.findById(req.params.id).remove(function() {
	// 	console.log(daa);
	// 	req.flash('success_msg', 'Đã Xoá Thành Công');
	// 	res.redirect('/admin/product/danh-sach.html');
	// });

	Product.findById(req.params.id, function(err, data){
		const file = './public/uploads/' + data.img;
		const fs = require('fs');
		fs.unlink(file, function(e){
			if(e) throw e;
		 });
		data.remove(function(){
			req.flash('success_msg', 'Delete Successful');
			res.redirect('product/booklist');
		})
	});

});

function checkAdmin(req, res, next){

    if(req.isAuthenticated()){
      next();
    }else{
      res.redirect('/admin/login');
    }
}

module.exports = router;
