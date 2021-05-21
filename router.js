let router = require('express').Router();
var formController = require('./controller/formController');
var authController = require('./controller/authController');
const categoryController = require('./controller/categoryController');

router.get('/',(req,res)=>{
    res.json({
        status : true,
        msg : 'Welcome to our first Rest API'
    });
});



var multer  = require('multer')
var path = require('path')

//main Image
var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/main_img')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
var upload1 = multer({ storage: storage1 })

//Sub Image 1
var storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/sub_img1')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
var upload2 = multer({ storage: storage2 })

//Sub Image 2
var storage3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/sub_img2')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
var upload3 = multer({ storage: storage3 })

//Sub Image 3
var storage4 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/sub_img3')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
var upload4 = multer({ storage: storage4 })

//Sub Image 4
var storage5 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/sub_img4')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
var upload5 = multer({ storage: storage5 })


//router.post('/addform',upload1.single('main_image'),upload2.single('sub_image1'),upload3.single('sub_image2'),
//upload4.single('sub_image3'),upload5.single('sub_image4'),formController.addFormData);

router.post('/addform',upload1.single('main_image'),formController.addFormData);
router.post('/addform',upload2.single('sub_image1'),formController.addFormData);
router.post('/addform',upload3.single('sub_image2'),formController.addFormData);
router.post('/addform',upload4.single('sub_image3'),formController.addFormData);
router.post('/addform',upload5.single('sub_image4'),formController.addFormData);


router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/logout',authController.logout);
router.post('/addCategory',categoryController.addCategory);



module.exports = router;