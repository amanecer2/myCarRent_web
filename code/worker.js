onmessage = function (e){
var data=e.data;
var km = data.km;
var cost=km*1.8;
var info={"km":km,"cost":cost};
var deley = setTimeout(function(){postMessage(info);},2000); // deley the data by 3 second;

}