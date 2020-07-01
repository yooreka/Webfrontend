//필요한 DOM 객체 찾아오기
var keyinput =
	document.getElementById("keyinput");
var whichispan=
	document.getElementById("whichspan");
var codespan=
	document.getElementById("codespan");
var keyspan=
	document.getElementById("keyspan");

//이벤트처리
keyinput.addEventListener(
    "keydown", function(event){
    	//누른키값은 event 객체의 which , code, key로 전달
    	whichspan.innerHTML = event.which;
    	codespan.innerHTML = event.code;
    	keyspan.innerHTML = event.key;
    }		
);