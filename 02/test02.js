/**
 * @author MiCo_Lvy
 * 2015年2月5日
 */
 $(function(){
$.fn.GetTime = function(Welcome,Format,putType){
	var timebox = $(this);
	var date=new Date;
		var Year=date.getFullYear();
		var Month=parseInt(date.getMonth())+1;
		var Day=date.getDate();
		var Week=date.getDay();
		var Hours=parseInt(date.getHours());
		var Minutes=parseInt(date.getMinutes());
		var Seconds=parseInt(date.getSeconds());
		var vk="";
		var hello="";
		switch(Week)
			{
				case 0:	vk="日";	break;
				case 1:	vk="一";	break;
				case 2: vk="二";	break;
				case 3:	vk="三";	break;
				case 4:	vk="四";	break;
				case 5:	vk="五";	break;
				case 6:	vk="六";	break;
			}
		if(Hours<=8){hello="早上好！";}
		if(Hours>8&Hours<12){hello="上午好！";}
		if(Hours>=12&Hours <14){hello="中午好！";}
		if(Hours>=14&Hours<20){hello="下午好！";}
		if(Hours>=20){hello="晚上好！";}
		if(Hours<10){Hours="0"+Hours;}
		if(Minutes<10){Minutes="0"+Minutes;}
		if(Seconds<10){Seconds="0"+Seconds;}
	if(Welcome==""||Welcome==null){Welcome='欢迎光临，今天是：';}
	if(Format==""||Format==null){Format='1';}
	if(putType==""||putType==null){
		switch(Format){
			case '0': timebox.html(Hours+" : "+Minutes+" : "+Seconds);break;
			case '1': timebox.html(hello+Welcome+Year+"年"+Month+"月"+Day+"日 "+" 星期"+vk+" "+Hours+" : "+Minutes+" : "+Seconds);break;
			case '2': timebox.html(Welcome+Year+"年"+Month+"月"+Day+"日 "+" 星期"+vk);break;
			case '3': timebox.html(Welcome+Hours+" : "+Minutes+" : "+Seconds);break;
			}
	}else{
		timebox.val(Year+"-"+Month+"-"+Day+" "+Hours+":"+Minutes+":"+Seconds);
		//switch(Format){
		//case '0': timebox.val(Hours+":"+Minutes+":"+Seconds);break;
		//case '1': timebox.val(Year+"-"+Month+"-"+Day);break;
		//case '2': timebox.val(Year+"-"+Month+"-"+Day+" "+Hours+":"+Minutes+":"+Seconds);break;		
		//}
		}	
	};
//----------
		$.each($('*[dsh=time]'),function(i){
			var wel=$('*[dsh=time]').attr('wel')!='undefined'?$('*[dsh=time]').attr('wel'):'';
			if($('*[dsh=time]').eq(i).is('input')){//输出为input Val	
				setInterval(function(){$('*[dsh=time]').eq(i).GetTime('','1','input')},1000);
			}else{//输出为Html
				setInterval(function(){$('*[dsh=time]').eq(i).GetTime(wel,'1');},1000);
			}
		});
 })

