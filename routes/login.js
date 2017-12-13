var express = require('express');
var router = express.Router();
var User = require("../model/user");
var md5 = require('md5');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: "登陆页面",isShow:false});
});
router.post('/',function(req,res,next){
	User.find({
		phonenum:req.body.phonenum,
		password:md5(req.body.password)
	}).then(result=>{
		if(result.length==0){
			res.render('login', { title: '登陆页面',isShow:true});

		}else{
			req.session.userInfo = result[0];
			res.cookie("currentUser",result[0].name);
			res.redirect("/");
		}
	})
})
module.exports = router;
