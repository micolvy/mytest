/**
 * @author MiCo_Lvy
 * 2015��2��5��
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
				case 0:	vk="��";	break;
				case 1:	vk="һ";	break;
				case 2: vk="��";	break;
				case 3:	vk="��";	break;
				case 4:	vk="��";	break;
				case 5:	vk="��";	break;
				case 6:	vk="��";	break;
			}
		if(Hours<=8){hello="���Ϻã�";}
		if(Hours>8&Hours<12){hello="����ã�";}
		if(Hours>=12&Hours <14){hello="����ã�";}
		if(Hours>=14&Hours<20){hello="����ã�";}
		if(Hours>=20){hello="���Ϻã�";}
		if(Hours<10){Hours="0"+Hours;}
		if(Minutes<10){Minutes="0"+Minutes;}
		if(Seconds<10){Seconds="0"+Seconds;}
	if(Welcome==""||Welcome==null){Welcome='��ӭ���٣������ǣ�';}
	if(Format==""||Format==null){Format='1';}
	if(putType==""||putType==null){
		switch(Format){
			case '0': timebox.html(Hours+" : "+Minutes+" : "+Seconds);break;
			case '1': timebox.html(hello+Welcome+Year+"��"+Month+"��"+Day+"�� "+" ����"+vk+" "+Hours+" : "+Minutes+" : "+Seconds);break;
			case '2': timebox.html(Welcome+Year+"��"+Month+"��"+Day+"�� "+" ����"+vk);break;
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
			if($('*[dsh=time]').eq(i).is('input')){//���Ϊinput Val	
				setInterval(function(){$('*[dsh=time]').eq(i).GetTime('','1','input')},1000);
			}else{//���ΪHtml
				setInterval(function(){$('*[dsh=time]').eq(i).GetTime(wel,'1');},1000);
			}
		});
 })

