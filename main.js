var per = [1, -1, 2, -2, 3];
var positiveArr = per.filter(function(number) {
  return number > 0;
});
alert( positiveArr );
//Iannea map//
var names = ['a', 's', 'd'];
var nameLengths = names.map(function(name) {
  return name.length;
});
alert( nameLengths );
//Iannea join//
  var a = ["Caiey","Aiaa","Iaiiu"];
  var myVar1 = a.join();
  var myVar2 = a.join(", ");  
  var myVar3 = a.join(" + "); 
alert(a);
//Iannea reverse//
res = [1,2,3]
a = res.reverse() 
for(var i=0; i<a.length; i++) {
  alert(a[i]) 
}
//Iannea Sort//
var recrut = [ 1, 2, 15 ];
recrut.sort();
alert( recrut );
//Iannea concat//
var str1 = "Hello ";
var str2 = "My!";
var str3 = "Friends";
var res = str1.concat(str2,str3); 
alert( res);
//Iannea splice//
var cobula = ["?aeiei", "A?ooa", "Auiy", "A?aoc"];
cobula.splice(0, 3, "Aaiai", "Aa?eein")
alert( cobula )
//Iannea clice//
var arr = ["?aaioa", "iieiinou?", "aioiaa", "!"];
alert( arr.slice(1) );
//Iannea forEach//
var flib = ["?aeiei", "Aiaeunei", "A?ooa"];
flib.forEach(function(item, i, arr) { 
  alert( i + ": " + item + " (Iannea:" + flib + ")" );
});