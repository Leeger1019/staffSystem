function Main(){
	this.init();
}

$.extend(Main.prototype,{


	init:function(){
		console.log("init");
		// var _this =this; //this 解决方案 保存this
		$.ajax({
			url:"/list",
			data:{limit:4,offset:0},
			success:(result)=>{ // 箭头函数解决this 指向
				// console.log(result);
				this.renderList(result.list);
				this.renderPagination(result.total);
			}
		})
	},

	renderList:function(list){
		console.log(list);
		for(var i=0;i<list.length;i++){

			$tr = $("<tr>").html(`
				<td>${list[i].staffname}</td>
				<td>${list[i].birthdata}</td>
				<td>${list[i].age}</td>
				<td>${list[i].phonenum}</td>		
			   	<td>${list[i].bumen}</td>
			  	`);
			$("#list").append($tr);
		}
	},

	renderPagination:function(total){
		 console.log(total);
		var _this =this;
		for(var i=0;i<total;i+=4){
			$li = $("<li>").html(`<a>${i/4+1}</a>`);

			$li.click(function(){
				// console.log($(this).index());
				_this.rerenderList($(this).index());
			})
			$(".pagination").append($li);
		}
	},

	rerenderList:function(index){
		console.log(index);
		$("#list").empty();
		$.ajax({
			url:"/list",
			data:{limit:4,offset:index*4},
			success:(result)=>{ // 箭头函数解决this 指向
				// console.log(result);
				this.renderList(result.list);
			}
		})
	}


})

new Main();