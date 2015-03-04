/*
היי ינון, עבדתי על מובייל 1.3 ולכן המעברים בין הדפים עובדים לפי המטודה של שינוי דף 
ולא לפי פייט' קונטיינר'.
בכל הפרוייקט המפה של גוגל עבדה לי ועכשיו היא הפסיקה לעבוד אז מצטער 
על זה שהמפה לא עובדת.
תהנה.
*/




 // -----------------------------------------------cars array-------------------------------------------
 car= new Array;//{"carName":"null","carModel":"null","imgSrc":"null","Available":"true","carNum":"null","gear":"null"};

suzuki=		{"carName":"Suzuki",		"carModel":"Alto",		"imgSrc":"img/SuzukiAlto.jpg",		"available":true,	"carNum":"11111",	"gear":"manual"};
chevrolet={"carName":"Chevrolet",	"carModel":"Spark",	"imgSrc":"img/chevroletSpark.jpg","available":true,	"carNum":"22222",	"gear":"auto"};
ford=		{"carName":"Ford",			"carModel":"Fiesta",	"imgSrc":"img/fordFiesta.jpeg",		"available":true,	"carNum":"33333",	"gear":"manual"};
kia=			{"carName":"Kia",				"carModel":"Picanto","imgSrc":"img/kiaPicanto.jpg",		"available":true,	"carNum":"44444",	"gear":"auto"};
cooper=	{"carName":"Cooper",		"carModel":"Mini",		"imgSrc":"img/miniCooper.jpg",		"available":true,	"carNum":"55555",	"gear":"manual"};

car.push(suzuki,chevrolet,ford,kia,cooper); //arrrays of cars with the spec;
 // ----------------------------------------------------- end car array------------------------------------------------

	//---------------------------pic change --------------------------------------
		
		var theCar;
		var canvas;
		var context;
		var slideNum=0;
		var images=new Array();
	function PreloadImages()
	{
		var pic=new Image();
		for(var j=0; j<car.length ; j++){
		images[j]=car[j].imgSrc;
		}	
		
		for(var i=0; i<images.length; i++)
		{
			pic.src=images[i];
		}
		changeImage()
	}
	   
	 function changeImage(){
			drawImage(images[slideNum],slideNum);
			
				if(slideNum<car.length-1)
				{
					slideNum++			
				}else{
					slideNum=0
				}
				if(car[slideNum].available==true){
					setTimeout('changeImage()',3000);  // if the car is a
				}else{
					changeImage();
				}
			
			}		
		
	         function drawImage(currentImageURL, i) {
            canvas = document.getElementById('carCanvas');    
            context = canvas.getContext('2d');
			
            var img = new Image();
            img.src = currentImageURL;
		
            img.onload =function () {context.drawImage(img, 0, 0, 250, 200);};
			changeInfo(i)
       }
	  
	   function changeInfo(i){   //imprint the info of the car pictur;
		$("#carName").text(car[i].carName)	;
		$("#carModel").text(car[i].carModel);
		$("#carGear").text(car[i].gear);
		$("#carNum").text(car[i].carNum);
		$("#available").text(car[i].available);
	   }
	   //------------------------------------------------------ cars canvas ---------------------------------------
$(function(){
$("#carBackDiv").on("click","#carAvailableToTrue", function(){
	$("#carBackTable").html("");  // erease the divs
	$("#carBackDiv").html("");
	var g=carArray();
	if(g!==""){
		car[g].aviable=true;
		localStorage.clear();
		$( "#popUpDivReciveCar" ).popup( "open" );
		//$(":mobile-pagecontainer").pagecontainer("change", "#home");‏
		setTimeout(function(){$.mobile.changePage('#home', {transition: 'pop'})},2000); 
	}
})
$("#makeReceipt").on("click",function(){carReceipt();}); // type the owner info in the recipt page;
PreloadImages();
//PreloadImages(); // start the pic in the canvas;
var date = new Date;
$(".homeYear").text(date.getFullYear());
$("#nav p").hide();
$("body").on("click","#nav h2",function(){$(this).next().slideToggle('slow')});
autocomplete(); //must be set before the page="carCoast" is load to get aotu text;
		$fName=$("#fName"),
		$lName=$("#lName"),
		$id=$("#id"),
		$eMail=$("#eMail"),
		$cellphone=$("#cellphone"),
		$homeNum=$("#homeNum"),
		$birthday=$("#birthday"),
		$license=$("#license");
		
		$car			 = $("#carName");  //car info;
		$model		=$("#carModel");
		$Gear		=("#carGear");
		$carNum	=("#carNum");
		$available=$("#available");
		
		
		
		$(".input").blur(save);
		inputs = new Object;
		inputs = {"fName":"null","lNmae":"null","id":"null","eMail":"null","cellphone":"null","homeNum":"null","birthday":"null","license":"null"};

	});
	//-----------------------end of $(function);-------------------------
	// ------------------ recipt---------------------------
	
	function carReceipt(){
		carBuyer={"Name":localStorage.fName+" "+localStorage.lName,"ID":localStorage.id,"Email":localStorage.eMail,"Car":$(":selected").val(),"Car Number":theCar,"Km":km,"Cost":cost};
		 onerInfo="";
	
		
			for(var key in carBuyer){
				onerInfo+="<tr><td>"+key+"</td><td>"+carBuyer[key]+"</td></tr>";  // wil print owner info
			}
	
		$("#infoTable").html(onerInfo); //.htmlk = .innerHTML
	
	}
	//---------- end of recipt-------------------------------
	//--------------------car back-----------------
	function carBack(){
		var available ;
		var carSrc;
		var carNum;
		var theTable="";
		var x=	carArray();		// wicth cell in the car[x] Array;	
		if(x!==""){	
		available=car[x].available;
		carSrc = car[x].imgSrc;	
		carNum=car[x].carNum;
		}
			var carBackInfo={"car":$(":selected").val(),"carNum":carNum,"carSrc":carSrc,"available":available};
			if($("#carBackByNum").val()==carNum && available==false){ // if the car avable is false and the num is correct than:;																																	
				theTable="<tr><td>Car name</td><td>car available</td></tr> <tr><td>"+carNum+"</td><td>"+available+"</td</tr>";		
				$("#carBackTable").html(theTable);
				$("#carBackDiv").html("<button id='carAvailableToTrue' >retrive the car</button>")	
			}else{
				$("#carBackTable").html(" מצטערים קרתה טעות, אנא הכנס את המספר רכב שהושכר.");
				$("#carBackDiv").html("");
				}
			
			
	}
	//end car back---------------------------------
	//----------------wicth car you selecet!!-----------
	function carArray(){
	
	for(var i=0; i<car.length ;i++){
				if (car[i].carName==$(":selected").val()  ){
					return i;
				}else{
				return "";
				}
			}
	}
	
	//----------------------------------------------------------------
	//---------------------reciveTheCar back to aviable to true----------
	function reciveTheCar(){
	var i=carArray();
	if(i!==""){
		car[i].aviable=true;
		localStorage.clear();
		alert("working");
		$( "#popUpDivReciveCar" ).popup( "open" );
		//$(":mobile-pagecontainer").pagecontainer("change", "#home");‏
		setTimeout(function(){$.mobile.changePage('#home', {transition: 'pop'})},2000); 
		}
	}
	//----------------------------------------------------------------------------
	//----------------car selecet--------------------------------------------
		function carIWant(){// when the button is click trun the availablebilty to false and chage the page;
			carChoosed= $(":selected").val();
			for(var i=0; i<car.length ;i++){
				if (car[i].carName==$(":selected").val()  ){
					car[i].available=false;
					theCar = car[i].carNum;	//the car num
					break;
				}
			}
			getLocation();
			$.mobile.changePage('#carCost', {transition: 'pop'}); 
	
	}
	
	//------------------------------------------end of car selecting-------------------	
	// ------------------------------------ local storage -------------------------------------
	
	function save(){
		var y =$(this).attr("id");
		var g= JSON.stringify(y);
		localStorage.setItem(y, $(this).val());   // localStorage.setItem("lastname", "Smith"); localStorage.getItem("lastname");
	}
	//--------------------------------------end local storage-----------------------------------
 // -------------validation--------------------------------------
	function validForm(event){
	
		var cellphoneFlag=false, homeFlag=false;
		var cell=$cellphone.val();
		var home=$homeNum.val();
		if( (cell==null || cell=="") && (home==null || cell=="") ){
				$( "#popUpDiv" ).popup( "open" );
		return false;
		}else{
		

        $.ajax({
            type: "POST",
            url: "submit.php",
            data: "userNo",
            success: function () {
                alert("Registration Completed");
				},
			});
        
      

		//$( ":mobile-pagecontainer" ).pagecontainer( "change", "#carSelect") ; 
			$.mobile.changePage('#carSelect', {transition: 'pop'}); 
				//$(document).pagecontainer("change", "#carSelect", { transition: 'pop', });
				}
		};
	
	//var phoneNumber = /[0-9]{9}/g;   //regex for tellphone
	//cellphoneFlag=cell.match(phoneNumber);  
	//homeFlag=home.match(phoneNumber);
	
	//event.defaultPrevented();  //not to send the ajax

//------------------------end valid------------------------------------------
//------- google maps is in is own js code-------------
//-----------------------------worker --------------------------------
var worker = new Worker("code/worker.js");
var w = new Worker("code/w.js")




	function toWorker(){ //this function is activate by the googleMaps.js from the function callback();
		var carDistanceData={"km":carDistance};
		worker.postMessage(carDistanceData); 
		$("#calculatDiv").text("calculate");
	}


worker.onmessage = function (e){
	var  data = e.data
//var y = JSON.stringify(data);
	 km = data.km;
	 cost = data.cost+"₪";
//$("calculatDiv").text(y);
	$("#spanCarCost").text(cost); // set the km in the dialog div in the span;
	$("#spanCarKm").text(km);

//$( ":mobile-pagecontainer" ).pagecontainer( "change", /*"#dialogDiv",*/ { role: "dialog" } );
//$(":mobile-pagecontainer").pagecontainer("change", "#dialogDiv");‏

	$.mobile.changePage('#dialogDiv', {transition: 'pop', /*role: 'dialog'*/});  // open the dilog just fain!
	//$("#dialogDiv'").dialog( "open" );
	}

//---------------end worker--------------------------