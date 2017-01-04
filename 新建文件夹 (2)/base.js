
/*


function $(id){
	return document.getElementById(id);
};
//restory the information in term of function 
*/
 /*
 
 var Base = {
	 getId: function (id){
		 return document.getElementById(id)
	 },
	 getName: function (id){
		 
		 return document.getElementsByName(id)
	 },
	 
	 getTag: function (id){
		 
		 return document.getElementsByTagName(id)
	 }
 };
 //restory the infromation in term of object
 
 
 */
 var $ =function(_this){
	 return new Base(_this);
 } // invoke
 
 
 function Base(_this){  
   this.elements = [] ;
   if (_this!=undefined){
	   this.elements[0] = _this;
   }
 //base data
	 };  
	
	 
	 
	 Base.prototype.getId = function (id){
		 this.elements.push(document.getElementById(id))
		 return this;
	 }
		 

	  Base.prototype.getNames = function (tag){
		  names = document.getElementsByTagName(tag);
		  for (var i = 0; i < names.length;i++){
			  
			  this.elements.push(names[i]);
			  
		  };
		  return this
		  
	  };// getnames
	  
	 
	 
 


 
 
 Base.prototype.css = function (a,v){
	 
	 for (var i=0; i<this.elements.length;i++){
		 if(arguments.length == 1){
			 if (typeof window.getComputedStyle != 'undefined' )
			 {return window.getComputedStyle(this.elements[i],null)[a]    }
		     if(typeof this.elements[i].currentStyle != 'undefined')
			 {return this. elements[i].currentStyle[a]     }
		 }
	                 
	   this.elements[i].style[a] = v ;
	 }
	 
        
	 return this ;
	 
	 
 }
  Base.prototype.HTML = function (value){
	 
	 for (var i = 0; i<this.elements.length;i++){
		 if (arguments.length == 0 )
	      {return this.elements[i].innerHTML;}
		  this.elements[i].innerHTML = value ;
	 }
	 
        
	 return this ;
	 
	 
 };
 
 Base.prototype.click = function (fn){

	 for (var i=0; i<this.elements.length;i++){
		  this.elements[i].onclick = fn ;
	 }

	
        
	 return this
	 
	 
 }


Base.prototype.getClass = function (c,ids){
	var node = null
	if (arguments.length == 2 ){
		node = document.getElementById(ids);
	}
	else if(arguments.length == 1 ){
		node = document;
	}
	var alls = node.getElementsByTagName('*');
	
	for(var i= 0 ; i<alls.length; i++){
		if(alls[i].className == c){ // == requried
			this.elements.push(alls[i]);
		}
	}
	
	return this 
}


Base.prototype.getElement = function (num){
	var alle = this.elements[num]
	this.elements = []
	this.elements[0] = alle
	return this
}
//return a tag
Base.prototype.getElementTag = function (num){
	
	return this.elements[num]
	
}

Base.prototype.addClass = function (fa){
	
	for (var i=0; i<this.elements.length ; i++ ){
		this.elements[i].className += " " + fa ; 
	}
		return this
	
};

Base.prototype.removeClass = function (fa){
	
	for (var i=0; i<this.elements.length; i++ ){
		if(this.elements[i].className.match(new RegExp('(\\s|^)'+fa+'(\\s|$)'))); {
			this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+fa+'(\\s|$)'),' ')
		}
	}
		return this
	
}
Base.prototype.hover = function(over,out){
	for (var i=0; i<this.elements.length; i++ ){
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	}
	return this;
} 

Base.prototype.show = function (){
	for (var i=0; i<this.elements.length; i++ ){
          this.elements[i].style.display = 'block';
	}  
	return this
}
Base.prototype.hide = function (){
	for (var i=0; i<this.elements.length; i++ ){
          this.elements[i].style.display = 'none';
	}  
	return this
}


Base.prototype.center = function (width,height){
	var top=(document.documentElement.clientHeight-250)/2;
	var left=(document.documentElement.clientWidth-350)/2;
	for (var i=0; i<this.elements.length; i++ ){
	   this.elements[i].style.top = top+'px';
	   this.elements[i].style.left = left+'px';
	}
	return this;
}

Base.prototype.resize = function (fn){
	for (var i=0; i<this.elements.length; i++ ){
		var element = this.elements[i]
	window.onresize = function(){
		fn();
		if(element.offsetLeft>window.innerWidth - element.offsetWidth){
			element.style.left = window.innerWidth - element.offsetWidth + 'px';
		}
        if (element.offsetTop>window.innerHeight - element.offsetHeight){
			element.style.top = window.innerHeight - element.offsetHeight + 'px';
		}		
	};
    	
	}
	return this;
}
Base.prototype.lock = function (){
	for (var i=0; i<this.elements.length; i++ ){
		
		this.elements[i].style.height= document.documentElement.clientHeight+'px';
		this.elements[i].style.width= document.documentElement.clientWidth+'px';
		this.elements[i].style.display='block'
		document.documentElement.style.overflow = 'hidden'
	}
	
          return this;
}
 Base.prototype.unlock = function(){
	 for (var i=0; i<this.elements.length; i++ ){
		 this.elements[i].style.display = 'none'
         document.documentElement.style.overflow = 'auto'
}
	 return this
 }


/*
Base.prototype.addRule = function (num,ss,csstext,pos){
	var sheet = document.styleSheets[num];
	sheet.insertRule(ss+'{'+csstext+'}',pos)
	return this;
	
}    //addrule 
*/


//insert devise
Base.prototype.extend = function (a,b){
	Base.prototype[a] = b
}
//add event listener
function addEvent(obj,type,fn){
	if(typeof obj.addEventListener!= 'undefined'){
		obj.addEventListener(type,fn,false)
	}else{
		if(!obj.events)obj.events ={};
	
	     if (!obj.events[type]){
			 
			 obj.events[type] = [];
			 if(obj['on'+type]) obj.evnets[type][0] = fn;
		 }else {
			 if(addEvent.equal(obj.evnets[type],fn)) return false
		 }
	 
	 obj['on'+type] = addEvent.exec
	}	 
}
//this is an adder
 addEvent.ID = 1
//execution function
addEvent.exec = function (event){
	var e = addEvent.fixEvent(window.event)
    for(var i in this.events[e.type]){
			 this.events[e.type][i].call(this,e)
		 }
}
//hiden the same function 
addEvent.equal = function (a,fn){
	for(var i in a){
		if(a[i] = fn)return true 
	}
	return false
}

// remove event function
function removeEvent(obj,type,fn){
	if (typeof obj.removeEventListener!='undefined'){
		obj.removeEventListener(type,fn,false);
	}else {
		for (var i in obj.events[type]){
			if (obj.events[type][i] = fn){
				delete obj.events[type][i]
			}
		}
	}
}


//inped patern behevior
function preDef (event){
	var e = event || window.event
	if(typeof e.preventDefault!= 'undefined'){//w3c
	e.preventDefault()
	}else{
		e.returnValue = false
	}
}
//IE event match w3c
addEvent.fixEvent = function (e){
	e.preventDefault = addEvent.fixEvent.preventDefault
	e.stopPropagation = addEvent.fixEvent.stopPropagation
	return e
	
}
//inped the patern modern in IE
addEvent.fixEvent.preventDefault = function (){
	this.returnValue = false	
}
//inped the propagation in IE
addEvent.fixEvent.stopPropagation = function (){
	this.cancelBubble = true	
}
 
