const Category=require('../model/categoryModel');

//insertion
exports.addCategory = function(req,res){
    var formdata = req.body
    Category.findOne({category_name:formdata.category_name})
    .then(data=>{
          if(data==null){
            var formObj  = new Category();
            formObj.category_name = req.body.category_name

            formObj.save()
            .then(data=>{
                res.status(200).send({
                    success:true,
                    message:"Category Addded",
                    status:200,
                    cat:data
                })
            })
          }else{
            res.status(409).send({
                success:false,
                message:"Already Exist Category",
                status:409,
                cat:[]
            })
        }               
    }); // Done
}
