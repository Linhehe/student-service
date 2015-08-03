/**
 * Created by linhehe on 15/7/31.
 */
var mongoose = require('mongoose');

var ProfessionSchema = new mongoose.Schema({
    //
    ProfessionName: String,
    Classes: {type: mongoose.Schema.Types.ObjectId, ref: 'Class'}
});

mongoose.model('Profession', ProfessionSchema);