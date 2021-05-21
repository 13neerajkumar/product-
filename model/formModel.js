var mongoose = require('mongoose');
var formSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    main_image: {
        type: String,
        required: true
    },
    sub_image1: {
        type: String,
        required: true
    },
    sub_image2: {
        type: String,
        required: true
    },
    sub_image3: {
        type: String,
        required: true
    },
    sub_image4: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Form Model
var Student = module.exports = mongoose.model('form', formSchema);

module.exports.get = function (callback, limit) {
   Student.find(callback).limit(limit); 
}