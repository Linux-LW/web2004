		window.onload=function(){
		var wrap=document.getElementById("wrap"),
		 list=document.getElementById("list").getElementsByTagName("li"),
		 pic=document.getElementById("pic").getElementsByTagName("li");
		 console.log(list,pic);
		 
	
	var $first =list[0],$second= list[1],$third=list[2];
	// console.log($first,$second,$third);
	
	var pic_1=pic[0],pic_2=pic[1],pic_3=pic[2];
	console.log(pic_1,pic_2,pic_3);
	 
	pic_2.style.display="none";
	pic_3.style.display="none";
	pic_1.style.display="block";
	
	 
	$first.onmousemove=function(){
		pic_2.style.display="none";
		pic_3.style.display="none";
		pic_1.style.display="block";
	}
	$second.onmouseover=function(){
		pic_3.style.display="none";
		pic_1.style.display="none";
		pic_2.style.display="block";
	}
	$third.onmousemove=function(){
		pic_1.style.display="none";
		pic_2.style.display="none";
		pic_3.style.display="block";
	}
	
}

	