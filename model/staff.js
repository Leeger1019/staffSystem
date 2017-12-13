/*
	1. 创建一个模型， 建立对象与数据库中集合的一个映射

	2. 做一个概要计划， 计划往数据库中存哪些域（字段)信息
 */

var mongoose =require("mongoose");

var  Schema=  mongoose.Schema;


var obj = {
	user:String,
	staffname:String,
	phonenum:String,
	birthdata:String,
	age:String,
	bumen:String,
	fangshi:String,
	jobTitle:String,
	salary:String,
	pathname:String
}

var model = mongoose.model("staff",new Schema(obj));
//model 这个对象，映射的是staff  这张表

module.exports = model;
