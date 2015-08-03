/**
 * Created by linhehe on 15/7/31.
 */
var mongoose = require('mongoose');

var CollegeSchema = new mongoose.Schema({
    //
    CollegeName: String,
    Professions: {type: mongoose.Schema.Types.ObjectId, ref: 'Profession'}
});

mongoose.model('College', CollegeSchema);