var apikey = ""
	//출력 영역 찾기
	/*var disp = document.getElementById("disp");

window.addEventListener("load", function(event){
	
});*/
	var disp = null;
//페이지번호 저장
pageno = 1;
$(function(){
	//출력 영역 찾기
	disp = document.getElementById("disp");
	//검색
	search();
	//스크롤 하는 위치가 문서의 가장 하단이라면
	$(window).scroll(function(){
		//스크롤위치
		var scrollHeight = 
			$(window).scrollTop()
			+ $(window).height();
		//현재 출력 중인 문서 높이
		var documentHeight = $(document).height();
	   //스크롤 하는 위치와 문서의 높이가 같으면
		//다음페이지의 데이터를 가져오기
		if(scrollHeight == documentHeight){
	    	search(pageno + 1);
	    }
	
	});
	//검색 버튼을 누르면 데이터 검색
	$('#searchbtn').click(function(){
		search();
	});
})
//페이지 번호를 매개변수로 받아서 페이지 번호에 해당하는 데이터 찾아와서 disp 영역에 출력하는 함수
function search(no){
	//페이지 번호를 설정
	if(no == undefined){
		pageno = 1;
	}else{
		pageno = no;
	}
	
	//ajax 요청
	$.ajax({
		url:'https://dapi.kakao.com/v2/search/vclip',
		data:{
			query:$('#clipname').val(),
			page:pageno,
			size:30
		},
		headers:{ Authorization : "KakaoAK 3dac368786dd83702ce34d306e543400"},
		type:'get',
		success:function(result){
			//console.log(result);
			//검색버튼 눌렀을 때는 지우고 쓰기
			if(pageno == 1){
				disp.innerHTML = '';
			}	
			
			//데이터 출력
			var documents = result.documents;
			for(var i=0; i<documents.length; i=i+1){
				var d = documents[i];
				disp.innerHTML +=
					'<p><a href="' + d.url +'">'+ d.title + '</p>';
			}
			
			
			
	}
	});
}

