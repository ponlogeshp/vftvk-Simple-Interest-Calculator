function computeInterest()
	{
		event.preventDefault();
		var prinAmount=document.getElementById('pamount');
		var rateOfInterest=document.getElementById('rateInterest');
		var noOfYears=document.getElementById('nyears');
		var interest=(prinAmount.value*noOfYears.value*rateOfInterest.value)/100;
		var date=new Date();
		var updatedYear=parseInt(date.getFullYear())+parseInt(noOfYears.value);
		document.getElementById('compInterest').innerHTML="If you deposit <span bgcolor='yellow'><b>"+prinAmount.value+", </b></span>at an interest rate <span bgcolor='yellow'><b>"
		+rateOfInterest.value+". </span></b><br>You will recieve an amount of <span bgcolor='yellow'><b>"+interest+" </b></span><br>in the year <span bgcolor='yellow'><b>"+updatedYear+" </b></span";
	}
function updateLabelInput(val)
	{
        document.getElementById('rangeInput').innerHTML=val; 
    }