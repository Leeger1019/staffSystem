var inputArr = document.getElementsByTagName('input');
var bArr = document.getElementsByTagName('b');
var iArr = document.getElementsByTagName('i');
var alert = document.getElementById('alert');
var sub = document.getElementById('sub');
inputArr[1].onchange = function() {
    var reg = /^1[3|5|7|8]\d{9}$/;
    if (reg.test(this.value)) {
        alert.style.display = 'none';
        bArr[0].innerHTML = '√';
    } else {
        alert.style.display = 'block';
        alert.innerHTML = '手机号输入有误，请重新输入！'
    }
}
// 密码验证
function charMode(char) {
    //48-57 数字 65-90 大写字母  97-122 小写字母
    if (char >= 48 && char <= 57) {
        return 1;
    } else if (char >= 65 && char <= 90) {
        return 2;
    } else if (char >= 97 && char <= 122) {
        return 4;
    } else {
        return 8;
    }
}
inputArr[2].oninput = function() {
    var val = this.value;
    var end1 = 0,
        end2 = 0,
        end3 = 0,
        end4 = 0,
        result = 0;
    if (val.length == 0) {
        for (var i = 0; i < iArr.length; i++) {
            iArr[i].style.background = '#fff';
        }
        bArr[1].innerHTML = '';
    } else if (val.length < 6 && val.length >= 1) {
        for (var i = 0; i < iArr.length; i++) {
            iArr[i].style.background = '#fff';
        }
        bArr[1].innerHTML = '';
        alert.style.display = 'block';
        alert.innerHTML = '密码长度不够！'
    } else if (val.length > 20) {
        for (var i = 0; i < iArr.length; i++) {
            iArr[i].style.background = '#fff';
        }
        bArr[1].innerHTML = '';
        alert.style.display = 'block';
        alert.innerHTML = '密码太长！'
    } else {
        alert.style.display = 'none';
        bArr[1].innerHTML = '√';
        for (var i = 0; i < val.length; i++) {
            if (charMode(val.charCodeAt(i)) == 1) {
                end1 = 1;
            } else if (charMode(val.charCodeAt(i)) == 2) {
                end2 = 1;
            } else if (charMode(val.charCodeAt(i)) == 4) {
                end3 = 1;
            } else if (charMode(val.charCodeAt(i)) == 8) {
                end4 = 1;
            }
            result = end1 + end2 + end3 + end4;
        }
        if (result <= 2 && result >= 1) {
            for (var i = 0; i < iArr.length; i++) {
                iArr[i].style.background = '#fff';
            }
            iArr[0].style.background = 'red';
        } else if (result == 3) {
            for (var i = 0; i < iArr.length; i++) {
                iArr[i].style.background = '#fff';
            }
            iArr[2].style.background = 'orange';
        } else if (result == 4) {
            for (var i = 0; i < iArr.length; i++) {
                iArr[i].style.background = '#fff';
            }
            iArr[2].style.background = 'green';
        }
    }
}
inputArr[3].onchange = function() {
    var val = inputArr[2].value,
        reVal = inputArr[3].value;
    if (val == reVal) {
        bArr[2].innerHTML = '√';
        alert.style.display = 'none';
    } else {
        bArr[2].innerHTML = '';
        alert.style.display = 'block';
        alert.innerHTML = '两次密码输入不一致！'
    }
}
// 电子邮箱
inputArr[4].onchange = function() {
    var regEmail = /^(\w[\w\-]+)@[\w\-]+\.[\w\-]+$/;
    if (regEmail.test(this.value)) {
        alert.style.display = 'none';
        bArr[3].innerHTML = '√';
    } else {
        bArr[3].innerHTML = '';
        alert.style.display = 'block';
        alert.innerHTML = '邮箱输入有误，请重新输入！'
    }
}
sub.onclick = function(){
				var bbb = true;
				for(var i=0; i<bArr.length;i++){
					if(bArr[i].innerHTML != '√'){
						break;
					}
				}
			}