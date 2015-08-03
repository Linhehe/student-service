/**
 * Created by linhehe on 15/8/1.
 */
var mongoose = require('mongoose');

// 调课表

var TransferClassSchema = new mongoose.Schema({
    //
    ApplyTeacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}, // 申请调课的老师
    AgreeTeacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}, // 审批的老师
    OriginalUnit: {type: mongoose.Schema.Types.ObjectId, ref: 'SubjectUnit'}, // 原来的上课单元
    NewUnit: {type: mongoose.Schema.Types.ObjectId, ref: 'SubjectUnit'}, // 调课后的上课单元
    Classes: {type: mongoose.Schema.Types.ObjectId, ref: 'Class'}, // 被调课的班级
    Status: { type: Number, default: -1 } // 审批状态(0为不批准,1为批准,-1为未审核)
});

mongoose.model('TransferClass', TransferClassSchema);