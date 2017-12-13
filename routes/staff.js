var express = require('express');
var router = express.Router();
var staff = require("../model/staff");

//-----配置multer,设置存储路径以及文件名字
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"public/staffphotos");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('staff', { title: "请如实登记个人信息",isShow:false,isNew:true,isAppear:false });
});
   

router.post("/",upload.single('staffphoto'),function(req,res){
	staff.find({
		phonenum:req.body.phonenum
	}).then(result=>{
		if(result.length==0){
			//插入数据
			return staff.create({
					user:req.session.userInfo["name"],
					staffname:req.body.staffname,
					phonenum:req.body.phonenum,
					birthdata:req.body.birthdata,
					age:req.body.age,
					bumen:req.body.bumen,
					fangshi:req.body.fangshi,
					jobTitle:req.body.jobTitle,
					salary:req.body.salary,
					pathname:`/staffphotos/${req.file.filename}`
				})
		}else{
			res.render('staff', { title: '请如实登记个人信息',isShow:false,isNew:true,isAppear:true });
		}
	}).then(result=>{
			res.redirect("/");
		})
	})

router.get("/fixed",function(req,res){

	staff.find({
		_id:req.query.id
	}).then(result=>{
		res.render('staff', { title: '修改信息',isShow:false,isNew:false,info:result[0] });
	})
	

})


router.post("/fixed",upload.single('staffphoto'),function(req,res){
	console.log(req.body);
	staff.findByIdAndUpdate(req.body.id,{$set:{staffname:req.body.staffname,birthdata:req.body.birthdata,
		age:req.body.age,phonenum:req.body.phonenum,bumen:req.body.bumen,jobTitle:req.body.jobTitle,salary:req.body.salary,
		pathname:`/staffphotos/${req.file.filename}`}}).then(result=>{

		res.redirect("/");
	})
})




router.get("/delete",function(req,res){
	staff.findByIdAndRemove(req.query.id).then(result=>{
		res.redirect("/");
	})
})


module.exports = router;
