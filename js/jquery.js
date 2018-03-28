
var timer=null;
var index=0;
var imgView=$("#imgView");
var len=$("#imgView img").length;
var li=$("#botView li");
function slideImg(){

	$("#box").mouseenter(function(){
		clearInterval(timer);
	});
	$("#box").mouseleave(function(){
		
		timer=setInterval(function(){
			index++;
			if(index>=len){//小心一定是大于等于
				index=0;
			}
			changeImg();

		},2000);
	});
	$("#box").mouseleave();
	$("#prev").click(function(){
		index--;
		if(index<0){
			index=len-1;
		}
		changeImg();
	});	
	$("#next").click(function(){
		index++;
		if(index>=len){
			index=0;
		}
		changeImg();
	});
	(function(){
		for(var i=0;i<len; i++){
			li[i].index=i;
			li[i].onclick=function(){
				index=this.index;
				changeImg();
			};
		}
	})();
}
function changeImg(){
		for(var i=0;i<len;i++){
			$("#imgView img")[i].className="hide";
			$("#botView li")[i].className="";
		}
		$("#imgView img")[index].className="";
		$("#botView li")[index].className="hover";

		// var img=document.getElementById('imgView').getElementsByTagName('img');
		// img[index].className=" ";
	}
$(document).ready(function(){
	
 	slideImg();

	
});