function compute()
{
    var p  = parseInt(document.getElementById("principal").value);
    var ir = parseFloat(document.getElementById("rate").value);
	var y  = parseInt(document.getElementById("years").value);
	var ar = p*(ir/100)*y;
	var fy = 2021+y;

	document.getElementById("ResultText").innerHTML = "If you deposit " + p + ",</br> at an interest rate of " + ir + " %.</br> You will receive an amount of " + ar + ",</br>in the year of "+ fy;
}
