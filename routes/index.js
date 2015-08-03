var express = require('express');
var router = express.Router();

//var xlsx = require('node-xlsx');
//
//var obj = xlsx.parse('../public/files/kcb.xls');
//
//console.log(obj[1].data[8][0]);
//console.log(obj[1].data[12][0]);
//console.log(obj[1].data[16][0]);
//console.log(obj[1].data[20][0]);
//console.log(obj[1].data[24][0]);
//
//var date = new Date();

// ******* 定时器 *******
//setInterval(function(){
//  var date = new Date();
//  Y = date.getFullYear() + '-';
//  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
//  D = date.getDate() + ' ';
//  h = date.getHours() + ':';
//  m = date.getMinutes() + ':';
//  s = date.getSeconds();
//  //console.log(Y+M+D+h+m+s);
//  //
//  if(date.getHours()==20){
//    if(date.getMinutes()==27){
//      console.log(Y+M+D+h+m+s);
//    }
//  }
//}, 1000);

//console.log(date.getDay()); // date.getDay() 获取星期
//console.log(obj[1].data[8]);
//var kc = obj[1].data[8];
//console.log('课程：'+kc[1]+' ; 课室：'+obj[1].data[11][1]+"上午1-2节");
//console.log('课程：'+kc[5]+' ; 课室：'+obj[1].data[11][5]+"上午3-4节");
//console.log('课程：'+kc[10]+' ; 课室：'+obj[1].data[11][10]+"下午5-7节");
//console.log('课程：'+kc[17]+' ; 课室：'+obj[1].data[11][17]+"晚上8-10节");
//
//console.log(date.getHours()+":"+date.getMinutes());

// ******* 锁定签到时间 *******
// 19:00~21:40
//if(date.getHours() >= 19 && date.getHours() < 21){
//  if(date.getHours() == 21){
//    if(date.getMinutes() < 40){
//      console.log('可以签到');
//    }
//  } else{
//    console.log('可以签到');
//  }
//}
//// 8:10~9:50
//if(date.getHours() >= 8 && date.getHours() <= 9){
//  if(date.getHours() == 8){
//    if(date.getMinutes() >= 10){
//      console.log('ok');
//    }
//  }
//  else if(date.getHours() == 9){
//    if(date.getMinutes() < 50){
//      console.log('ok');
//    }
//  }
//  else{
//    console.log('ok');
//  }
//}
//// 10:10~11:50
//if(date.getHours() >= 10 && date.getHours() <= 11){
//  if(date.getHours() == 10){
//    if(date.getMinutes() >= 10){
//      console.log('ok');
//    }
//  }
//  else if(date.getHours() == 11){
//    if(date.getMinutes() < 50){
//      console.log('ok');
//    }
//  }
//  else{
//    console.log('ok');
//  }
//}
//// 14:30~17:05
//if(date.getHours() >= 14 && date.getHours() <= 17){
//  if(date.getHours() == 14){
//    if(date.getMinutes() >= 30){
//      console.log('ok');
//    }
//  }
//  else if(date.getHours() == 17){
//    if(date.getMinutes() < 5){
//      console.log('ok');
//    }
//  }
//  else{
//    console.log('ok');
//  }
//}

// ******* 为了获得上课的周数 *******
//var ss = obj[1].data[13][5];
//if(ss.match('/') == null){
//  //
//  ss = ss.split('(');
//  ss = ss[1].split(')');
//  ss = ss[0].split('-');
//  console.log(ss);
//} else{
//  //
//  ss = ss.replace(/[^0-9]/ig," "); // 正则表达式——查找字符串中的数字
//  console.error(ss);
//  ss = ss.split(' ');
//  console.log(ss);
//  var i = 0;
//  var array = [];
//  while(i<ss.length){
//    //
//    if(ss[i] != ''){
//      array.push(ss[i]);
//    }
//    i++;
//  }
//  console.error("array = "+array);
//}
//console.error(ss.match('/')); // 查找字符串 string.match("要查找的字符串")

// ******* 根据星期 *******
//if(date.getDay() == 1){
//  console.log('星期一');
//}
//if(date.getDay() == 2){
//  console.log('星期二');
//}
//if(date.getDay() == 3){
//  console.log('星期三');
//}
//if(date.getDay() == 4){
//  console.log('星期四');
//}
//if(date.getDay() == 5){
//  console.log('星期五');
//}
//if(date.getDay() == 6){
//  console.log('星期六');
//}
//if(date.getDay() == 0){
//  console.log('星期日');
//}

var mongoose = require('mongoose');

mongoose.connect('mongodb://10.211.55.3/student', function(err){
  if(err){
    return console.error(err);
  }
});

require('../models/Schools');
require('../models/Colleges');
require('../models/Professions');
require('../models/Classes');
require('../models/Teachers');
require('../models/Students');
require('../models/SignIns');
require('../models/Subjects');
require('../models/Vacations');
require('../models/Addresses');
require('../models/TransferClasses');
require('../models/SubjectUnits');

var School = mongoose.model('School');
var College = mongoose.model('College');
var Profession = mongoose.model('Profession');
var Class = mongoose.model('Class');
var Teacher = mongoose.model('Teacher');
var Student = mongoose.model('Student');
var SignIn = mongoose.model('SignIn');
var Subject = mongoose.model('Subject');
var Vacation = mongoose.model('Vacation');
var Address = mongoose.model('Address');
var TransferClass = mongoose.model('TransferClass');
var SubjectUnit = mongoose.model('SubjectUnit');

//var date = new Date();
////
//var class1 = new Class({ClassName:'13游戏软件1班'});
//class1.save();
//var student1 = new Student({Name:'揭钰峰', Sex:'男', Classes:class1, Purview: 5});
//student1.save();
//var teacher1 = new Teacher({Name:'胡玉贵', Sex:'男', Classes:class1, Purview: 3});
//teacher1.save();
//var teacher2 = new Teacher({Name:'校领导', Purview: 1});
//teacher2.save();
//var address1 = new Address({AddressName: 'S3', Address: {lat: 113.361126,lng: 22.130937}, Scope: 500});
//address1.save();
//var subjectUnit1 = new SubjectUnit({BeginSubjectDate: date, EndSubjectTime: date, Address: address1});
//subjectUnit1.save();
//var subject1 = new Subject({SubjectName:'数据库设计优化', Teacher:teacher1, Classes:class1, SubjectUnit: [subjectUnit1]});
//subject1.save();
//var signIn1 = new SignIn({Student:student1, Subject:subject1, Date:date, Address:{lat:113.361126,lng:22.130937}}); // 113.361126,22.130937
//signIn1.save();
//var transferClass1 = new TransferClass({ApplyTeacher:teacher1, AgreeTeacher:teacher2, OriginalTime: subjectUnit1, NewTime: subjectUnit1, Classes: class1, Status: 1});
//transferClass1.save();

// ******* 将时间字符串转为时间戳 *******
//var date = new Date();
//console.log(date);
//date = date.toLocaleString();
//var a = date.split(" ");
//var b = a[0].split("/");
//console.log(b);
//var c = a[1].split(":");
//console.log(c);
//var date1 = new Date('Sat '+b[0]+' '+b[1]+' '+b[2]+' '+c[0]+':'+c[1]+':'+c[2]+' GMT+0800 (CST)');
//console.log(date1.getDay());

//// 签到测试
//var date = new Date('Sat Aug 01 2015 9:51:45 GMT+0800 (CST)');
//console.log(date);
//Subject
//    .findOne({SubjectName:'数据库设计优化'})
//    .populate('SubjectUnit')
//    .exec(function(err,doc){
//      if(err != null){next(err);}
//      else{
//        if(date.getHours()>=doc.SubjectUnit[0].BeginSubjectDate.getHours() && date.getHours()<=doc.SubjectUnit[0].EndSubjectTime.getHours()){
//          if(date.getHours()==doc.SubjectUnit[0].EndSubjectTime.getHours()){
//            if(date.getMinutes()<=doc.SubjectUnit[0].EndSubjectTime.getMinutes()){
//              //
//              console.log('可以签到');
//            }
//          }
//          else if(date.getHours()==doc.SubjectUnit[0].BeginSubjectDate.getHours()){
//            if(date.getMinutes()>=doc.SubjectUnit[0].BeginSubjectDate.getMinutes()){
//              //
//              console.log('可以签到');
//            }
//          }
//          else{
//            console.log('可以签到');
//          }
//        }
//      }
//    });
//
//// 签到写入
//var address = {lat: 113.361126,lng: 22.130937}; // 从前台传过来(student,address,subject,date)
//var signIn = new SignIn({Student: '55bc4143ceb1875904af634d', Subject: '55bc4143ceb1875904af6352', Date: date, Address: address});
//signIn.save(function(err,doc){
//  if(err) console.error(err);
//  console.log(doc);
//});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getList', function(req,res,next){
  //
  console.log(obj[17].data[2][18]);
  res.json(obj[17].data[2][18]);
});

router.get('/browse', function(req,res,next){
  //
  if(date.getDay() == 5){
    console.log('星期五'+obj[1].data[24]);
    res.json(obj[14].data[24]);
  }
});

// ******* 学生注册
// *获取验证码*

// *校验验证码*

// 学生注册 *******

// ******* 登陆
// *学生登陆*

// *教师登陆*

// 登陆 *******

// ******* 签到
router.post('/signIn', function(req,res,next){
  //
  var date = req.body.date;
  //
  Subject
      .findOne({SubjectName: req.body.SubjectName})
      .populate('SubjectUnit')
      .exec(function(err,doc){
        if(err != null){next(err);}
        else{
          if(date.getHours()>=doc.SubjectUnit[0].BeginSubjectDate.getHours() && date.getHours()<=doc.SubjectUnit[0].EndSubjectTime.getHours()){
            if(date.getHours()==doc.SubjectUnit[0].EndSubjectTime.getHours()){
              if(date.getMinutes()<=doc.SubjectUnit[0].EndSubjectTime.getMinutes()){
                //
                console.log('可以签到');
              }
            }
            else if(date.getHours()==doc.SubjectUnit[0].BeginSubjectDate.getHours()){
              if(date.getMinutes()>=doc.SubjectUnit[0].BeginSubjectDate.getMinutes()){
                //
                console.log('可以签到');
              }
            }
            else{
              console.log('可以签到');
            }
          }
        }
      });
}); // 签到 *******

// ******* 请假
// *学生申请*
router.post('/vacation', function(req,res,next){
  //
  var vacation = new Vacation({Student: req.body.Student, BeginDate: req.body.BeginDate, EndDate: req.body.EndDate});
  vacation.save(function(err,doc){
    if(err){
      next(err);
    } else{
      console.log(doc);
    }
  })
});
// *教师查看申请*
router.get('/checkVacation', function(req,res,next){
  //
  Vacation.find({AgreeTeacher: req.query.TeacherName}, function(err,doc){
    //
    if(err){
      next(err);
    } else{
      if(doc != null){
        res.json(doc);
      }
    }
  })
});
// *教师审批*
router.push('/verify', function(req,res,next){
  //
});
// *学生查看申请结果*
router.get('/viewResults', function(req,res,next){
  //
});
// 请假 *******

// ******* 调课
// *申请调课*
router.post('/applyTransferClass', function(req,res,next){
  //
  var transferClass = new TransferClass({
    ApplyTeacher: req.body.ApplyTeacher,
    OriginalUnit: {
      BeginSubjectDate: req.body.OriginalBeginSubjectDate,
      EndSubjectTime: req.body.OriginalEndSubjectTime,
      Address: req.body.OriginalAddress
    },
    NewUnit: {
      BeginSubjectDate: req.body.NewBeginSubjectDate,
      EndSubjectTime: req.body.NewEndSubjectTime,
      Address: req.body.NewAddress
    },
    Classes: req.body.Classes
  });
  transferClass.save(function(err,doc){
    //
    if(err){
      next(err);
    } else{
      console.log(doc);
    }
  })
});
// *查看调课申请*
router.get('/viewTransferClass', function(req,res,next){
  //
  TransferClass.find({}, function(err,doc){
    //
    if(err){
      next(err);
    } else{
      console.log(doc);
    }
  });
});
// *审批*
router.push('/verifyTransferClass', function(req,res,next){
  //
  TransferClass.findOneAndUpdate({_id: req.query._id, Status: -1}, {Status: req.query.Status}, function(err,doc){
    //
    if(err){
      next(err);
    } else{
      console.log(doc);
    }
  })
});
// *查看审批结果*
router.get('/viewResult', function(req,res,next){
  //
});
// 调课 *******

module.exports = router;
