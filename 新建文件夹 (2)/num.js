




window.onload = function (){

	$().getClass('member').hover(function(){
		$(this).css('background','url(images/arrow2.png) no-repeat 55px center')
		$().getClass('num_ul').show()
	},function(){
		$(this).css('background','url(images/arrow.png) no-repeat 55px center')
		$().getClass('num_ul').hide()
	})
	//login window
	
	
	/*
	window.onresize = function(){
		
		var top=(document.documentElement.clientHeight-250)/2;
	    var left=(document.documentElement.clientWidth-350)/2;
		$().getId('login').css('top',top+'px').css('left',left+'px');
	}
	*/
		var login = $().getId('login')
		login.center('350','250').resize(function(){
			
			if(login.css('display') == 'block'){
				$().getId('screen').lock();
			}
		})
		
	$().getClass('login').click(function(){
	login.center('350','250')	
	login.css('display','block')
	   $().getId('screen').lock() 
})
$().getClass('close').click(function(){
	login.css('display','none')
	$().getId('screen').unlock();
})

          
     //var mdiv = document.getElementById('login')
	 //littl window movement 
   $().getId('login').drag();
   
   
}








