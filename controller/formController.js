var Form = require('../model/formModel');

//insertion
exports.addFormData = function(req,res){
    var formdata = req.body
    Form.findOne({product_name:formdata.product_name})
    .then(data=>{
          if(data==null){
            var formObj  = new Form();

            //product Name
            formObj.product_name = req.body.product_name
            
            //main Image
            if (req.file != undefined) {
                var image = req.file
                formObj.main_image = "main_img/" + image.filename;
            }
            else {
                formObj.main_image = "main_img/default.jpg"
            }

            //Sub image 1
            if (req.file != undefined) {
                var image = req.file
                formObj.sub_image1 = "sub_img1/" + image.filename;
            }
            else {
                formObj.sub_image1 = "sub_img1/default.jpg"
            }

            //sub Image 2
            if (req.file != undefined) {
                var image = req.file
                formObj.sub_image2 = "sub_img2/" + image.filename;
            }
            else {
                formObj.sub_image2 = "sub_img2/default.jpg"
            }

            //sub Image 3
            if (req.file != undefined) {
                var image = req.file
                formObj.sub_image3 = "sub_img3/" + image.filename;
            }
            else {
                formObj.sub_image3 = "sub_img3/default.jpg"
            }

            //sub Image 4
            if (req.file != undefined) {
                var image = req.file
                formObj.sub_image4 = "sub_img4/" + image.filename;
            }
            else {
                formObj.sub_image4 = "sub_img4/default.jpg"
            }

            //Description
            formObj.desc = req.body.desc

            formObj.save()
            .then(data=>{
                res.status(200).send({
                    success:true,
                    message:"Addded",
                    status:200,
                    stu:data
                })
            })
          }else{
            res.status(409).send({
                success:false,
                message:"Already Exist Data",
                status:409,
                stu:[]
            })
        }               
    }); // Done
}
