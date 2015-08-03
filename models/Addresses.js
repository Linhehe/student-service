/**
 * Created by linhehe on 15/7/31.
 */
var mongoose = require('mongoose');

// 签到地点 (J1,J2,J3,S1,S2,S3,S4)

var AddressSchema = new mongoose.Schema({
    //
    AddressName: String,
    Address: {lat: Number,lng: Number},
    Scope: Number // 范围
});

mongoose.model('Address', AddressSchema);