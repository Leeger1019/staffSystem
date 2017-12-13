var express = require('express');
var router = express.Router();
var staff = require("../model/staff");
/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.session.userInfo){
      if(req.session.userInfo["name"]=="赵依然"){
          staff.find({ 
          }).then(result=>{
      // console.log(result);
      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
    }) 

      }else{
          staff.find({
      		user:req.session.userInfo["name"]
      	}).then(result=>{
      // console.log(result);
      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
    }) 

    }

  	
  }else{
  	res.redirect("/login"); //重新登录
  }
  
});
router.get("/list",function(req,res){ 
  var offset = req.query.offset;
  var limit = req.query.limit;
  // .then(result=>{
  //  res.send(result);
  // })
  Promise.all([staff.find({},{},{limit:limit,skip:offset}),staff.count()]).then(result=>{
    res.send({
      total:result[1],
      list:result[0]
    });
  })
     
})

router.get("/GMO",function(req,res){
  if(req.session.userInfo){
          if(req.session.userInfo["name"]=="赵依然"){
            staff.find({
              "bumen":"总经办"
            }).then(result=>{
                // console.log(result);
                res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
              }) 
     
          }else{
               staff.find({
                    user:req.session.userInfo["name"],
                     "bumen":"总经办"
                  }).then(result=>{
                      // console.log(result);
                      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
                  }) 
                }
    }else{
      res.redirect("/login"); //重新登录
    }
})
router.get("/Shangwubu",function(req,res){
  if(req.session.userInfo){
          if(req.session.userInfo["name"]=="赵依然"){
            staff.find({
              "bumen":"总经办"
            }).then(result=>{
                // console.log(result);
                res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
              }) 
     
          }else{
               staff.find({
                    user:req.session.userInfo["name"],
                     "bumen":"商务部"
                  }).then(result=>{
                      // console.log(result);
                      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
                  }) 
                }
    }else{
      res.redirect("/login"); //重新登录
    }
})
router.get("/jishu",function(req,res){
  if(req.session.userInfo){
          if(req.session.userInfo["name"]=="赵依然"){
            staff.find({
              "bumen":"技术部"
            }).then(result=>{
                // console.log(result);
                res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
              }) 
     
          }else{
               staff.find({
                    user:req.session.userInfo["name"],
                     "bumen":"技术部"
                  }).then(result=>{
                      // console.log(result);
                      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
                  }) 
                }
    }else{
      res.redirect("/login"); //重新登录
    }
})
router.get("/caiwu",function(req,res){
  if(req.session.userInfo){
          if(req.session.userInfo["name"]=="赵依然"){
            staff.find({
              "bumen":"财务部"
            }).then(result=>{
                // console.log(result);
                res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
              }) 
     
          }else{
               staff.find({
                    user:req.session.userInfo["name"],
                     "bumen":"总经办"
                  }).then(result=>{
                      // console.log(result);
                      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
                  }) 
                }
    }else{
      res.redirect("/login"); //重新登录
    }
})
router.get("/renshi",function(req,res){
  if(req.session.userInfo){
          if(req.session.userInfo["name"]=="赵依然"){
            staff.find({
              "bumen":"人事部"
            }).then(result=>{
                // console.log(result);
                res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
              }) 
     
          }else{
               staff.find({
                    user:req.session.userInfo["name"],
                     "bumen":"人事部"
                  }).then(result=>{
                      // console.log(result);
                      res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
                  }) 
                }
    }else{
      res.redirect("/login"); //重新登录
    }
})

//-----注销session------
router.get('/logout',function(req,res){
	req.session.destroy(()=>{
		res.redirect('/login');
	})
})

module.exports = router;
