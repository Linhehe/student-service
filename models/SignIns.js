/**
 * Created by linhehe on 15/7/31.
 */
var mongoose = require('mongoose');

// 签到表

var SignInSchema = new mongoose.Schema({
    //
    Student:{type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
    Subject:{type: mongoose.Schema.Types.ObjectId, ref: 'Subject'},
    Date:Date, // 签到时间
    Address:{lat:Number,lng:Number} // 签到的位置
});

mongoose.model('SignIn', SignInSchema);