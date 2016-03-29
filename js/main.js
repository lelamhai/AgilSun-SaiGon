var resault_width = $("header").width();
var flag = 1;
if(resault_width <= 559)
{
	hide();
 	$("#menu-button ").click(function(){
 		flag ++;
 		if( flag%2==0 )
 		{
 			show();
 		}else{
 			hide();
 		}	
 	});
}
else{
	$("#menu-button").hide();
}

function hide(){
	$("#list-inline").hide();
}

function show(){
	$("#list-inline").show();
}