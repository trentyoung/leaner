
$().extend('drag',function(){
	for (var i=0; i<this.elements.length; i++ ){
	  this.elements[i].onmousedown = function (e){
	  var e = window.event||e ;
	  var _this = this
	  var realx = e.clientX -_this.offsetLeft;
	  var realy = e.clientY - _this.offsetTop;
	
	  document.onmousemove = function (e){
		  var e = window.event||e
		  var left = e.clientX - realx
          var top = e.clientY - realy
        if (left < 0){
			 left = 0
		}else if (left > window.innerWidth - _this.offsetWidth){
			left = window.innerWidth  - _this.offsetWidth
		}		
        if (top < 0){
			top = 0
		}	else if (top>window.innerHeight - _this.offsetHeight){
			top = window.innerHeight - _this.offsetHeight
		}	
		  _this.style.left = left+'px'
		  _this.style.top = top+'px'
	  }
	  document.onmouseup = function (){
		  this.onmousedown = null;
		  this.onmousemove = null;
		
	  }
		
		
		
	}
	}
	return this 
})

	











