function byId(id){
	return typeof(id)==='string'?document.getElementById(id):id;
}
window.onload=function(){
	var index=0;

	var box=byId('box');
	var prev=byId('prev');
	var next=byId('next');
	var up=byId('up');
	var down=byId('down');
	var imgView=byId('imgView');
	var botView=byId('botView');
	var li=botView.getElementsByTagName('li');

	var img=document.getElementById('imgView').getElementsByTagName('img');
	var len=img.length;
	var timer=null;
	function slideImg(){
		box.onmouseover=function(){
			clearInterval(timer);
		}
		box.onmouseout=function(){
			
			timer=setInterval(function(){
				index++;

				if(index>=len)index=0;
				changeImg();
				
			},2000);
		}
		box.onmouseout();
		prev.onclick=function(){
			index--;
			if(index<0)index=len-1;
			changeImg();
		}
		next.onclick=function(){
			index++;
			if(index>len-1)index=0;
			changeImg();
		}
		for(var i=0; i<li.length; i++){
			li[i].ind=i;
			li[i].onclick=function(){
				index=this.ind;
				changeImg();
			}
		}		
	}
	function changeImg(){
		for(var i=0; i<len; i++){
			img[i].className="hide";
			li[i].className="";
		}
		img[index].className="";
		li[index].className="hover";
	}
	slideImg();
}