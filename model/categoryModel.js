var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema({
    
    category_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Category Model
var Category= module.exports = mongoose.model('category', CategorySchema);

module.exports.get = function (callback, limit) {
   Category.find(callback).limit(limit); 
}