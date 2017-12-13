var express = require('express');
var router = express.Router();
var staff = require("../model/staff");
/* GET home page. */
router.get('/', function(req, res, next) {

  	staff.find({
  		_id:req.query.id
  	}).then(result=>{
  		// console.log(result);
  		res.render('detail', { title: '详情页面',isShow:true,info:result[0] });
  	})
  
});
   
module.exports = router;
