
//点击事件（留言）
var min = document.getElementsByClassName('min')[0];
var max = document.getElementsByClassName('max')[0];
var message = document.getElementsByClassName('message')[0];
var smallmes = document.getElementsByClassName('smallmes')[0];

min.onclick = function(){
		message.style.display = 'none';
}
max.onclick = function(){
		message.style.display = 'block';
}


//点击事件（帮助）
function time(){
	var help4 = document.getElementsByClassName('fa-times')[0];
	var help = document.getElementsByClassName('help')[0];

	help.style.display = 'block';
	help4.onclick = function(){
		help.style.display = 'none';
	}
}
setTimeout("time()",5000);	



//点击事件（QQ客服）
var qq3= document.getElementsByClassName('qq3')[0];
var qq = document.getElementsByClassName('qq')[0];

qq3.onclick = function(){
	qq.style.display = 'none';
}

//鼠标滚动事件（QQ客服）
scrollImg();
function scrollImg(){
var posY;
if (window.innerHeight) {
posY = window.pageYOffset;
}
else if (document.documentElement && document.documentElement.scrollTop) {
posY = document.documentElement.scrollTop;
}
else if (document.body) {
posY = document.body.scrollTop;
}
var ad=document.getElementsByClassName("qq")[0];
ad.style.top=(posY+240)+"px";
setTimeout("scrollImg()",200);
}


//无缝轮播
slide();
function slide(){

	var odiv = document.getElementsByClassName("photo")[0];
	var oul = document.getElementsByClassName("picture")[0];
	var oli = document.getElementsByClassName("pt");
	oul.innerHTML = oul.innerHTML + oul.innerHTML;
	oul.style.width = oli[0].offsetWidth*oli.length + 'px';

	var speed=1;
	function move(){
		if(oul.offsetLeft<-oul.offsetWidth/2){
			oul.style.left = '0';
		}
		oul.style.left=oul.offsetLeft-speed+"px";
	}
	var timer=setInterval(move,30);

	odiv.onmouseover=function(){
        clearInterval(timer);
    }

    odiv.onmouseout=function(){
        timer=setInterval(move,30);
    }               



}
	







