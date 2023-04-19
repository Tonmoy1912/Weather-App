// const data = null;

// const xhr = new XMLHttpRequest();
// // xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle");
// xhr.setRequestHeader("X-RapidAPI-Key", "8ad2735296mshb54103ed41b689fp163a82jsnc7a76ded056d");
// xhr.setRequestHeader("X-RapidAPI-Host", "weather-by-api-ninjas.p.rapidapi.com");

// xhr.send(data);


$("#search").click(update);

function update(event){
	//var t;
	event.preventDefault();
	$("#search").toggleClass("visually-hidden");
	$("#loading").toggleClass("visually-hidden");
	var str=document.getElementById("box").value;
	//console.log(str);
	str=str.trim();
	str=str.substring(0,1).toUpperCase()+str.substring(1).toLowerCase();
	//var obj;
	var url="https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+str;


	const data = null;

	const xhr = new XMLHttpRequest();
	// xhr.withCredentials = true;

	xhr.onload=function(){
		var obj=JSON.parse(xhr.response);
		var infoList=document.getElementsByClassName("display");
		console.log(Object.keys(obj).length);
		if(Object.keys(obj).length<10){
			window.alert("2.You have either entered an invalid city name or the city is not in our database or network issue.");
			$("#search").toggleClass("visually-hidden");
			 $("#loading").toggleClass("visually-hidden");
			return ;
		}
		$(".city").text(str);
		for(let i=0;i<infoList.length;i++){
			//Write(infoList[i],obj);
			let att=$(infoList[i]).attr("data-fetch");
			$(infoList[i]).text(obj[att]);
		}
		$("#search").toggleClass("visually-hidden");
		$("#loading").toggleClass("visually-hidden");
	};

	xhr.onerror=function(){
		window.alert("1.You have either entered an invalid city name or the city is not in our database or network issue.");
	};

	

	xhr.open("GET", url);
	xhr.setRequestHeader("X-RapidAPI-Key", "8ad2735296mshb54103ed41b689fp163a82jsnc7a76ded056d");
	xhr.setRequestHeader("X-RapidAPI-Host", "weather-by-api-ninjas.p.rapidapi.com");

	xhr.send(data);

}
