function handleClick(){
var c = 300000000
var m = prompt('',"Введіть масу");

alert(m*(c*c))}

function vanClick(){
var a = prompt('',"Введіть прискорення");
var m = prompt('',"Введіть масу");
alert(m*a)
}

function twoClick(){
var a = prompt('',"Введіть перший катет");
var b = prompt('',"Введіть другий катет");
var c = a*a;
var d = b*b;
var f = c+d;
Math.sqrt(f);
alert(Math.sqrt(f))
}
function treeClick(){
	var a = prompt('',"a");
	var b = prompt('',"b");
	var c = prompt('',"c");
	var f = b*b-4*a*c
	Math.sqrt(f);
	var e = -b;
	n=e+Math.sqrt(f);
	g = n/2;
    v = e-Math.sqrt(f);
	u=v/2;
alert(g);
alert(u);
}
function fourClick(){
	var c = prompt('',"c");
	var m = prompt('',"m");
	var t2= prompt('',"t2");
	var t1= prompt('',"t1");
	var a = t2-t1;
	var b = c*m*a;
	alert(b);
}
function fiveClick(){
	var c = prompt('',"c");
	var m = prompt('',"m");
	var t2= prompt('',"t2");
	var t1= prompt('',"t1");
	var a = t1-t2;
	var b = c*m*a;
	alert(b);
}
function sixClick(){
	var a = prompt('',"a");
	var b = prompt('',"b");
	var c = prompt('',"c");
	var p = (a+b+c)/2;
	var d = p*(p-a)*(p-b)*(p-c);
	Math.sqrt(d);
	alert(Math.sqrt(d));


}
