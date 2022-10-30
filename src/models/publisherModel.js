const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    // author_id:String,
    name: String,
    headQuarter: String ,
     
}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)