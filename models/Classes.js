/**
 * Created by linhehe on 15/7/31.
 */
var mongoose = require('mongoose');

var ClassesSchema = new mongoose.Schema({
    //
    ClassName: String,
    Students: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'}
});

mongoose.model('Class', ClassesSchema);