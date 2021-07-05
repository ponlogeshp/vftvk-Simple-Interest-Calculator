function computeInterest()
	{
		event.preventDefault();
		var prinAmount=document.getElementById('pamount');
		var rateOfInterest=document.getElementById('rateInterest');
		var noOfYears=document.getElementById('nyears');
		var interest=(prinAmount.value*noOfYears.value*rateOfInterest.value)/100;
		var date=new Date();
		if(prinAmount.value<=0)
		{
			alert("Principal should not be negative...Enter a positive value");
			prinAmount.focus();
		}
		if(prinAmount.value=="")
		{
			alert("Empty values are not allowed..Enter a positive value");
			prinAmount.focus();
		}
		var updatedYear=parseInt(date.getFullYear())+parseInt(noOfYears.value);
		document.getElementById('compInterest').innerHTML="If you deposit <span style='background-color:yellow'><b>"+prinAmount.value+", </b></span>at an interest rate <span style='background-color:yellow'><b>"
		+rateOfInterest.value+". </span></b><br>You will recieve an amount of <span style='background-color:yellow'><b>"+interest+" </b></span><br>in the year <span style='background-color:yellow'><b>"+updatedYear+" </b></span";
	}
function updateLabelInput(val)
	{
        document.getElementById('rangeInput').innerHTML=val; 
    }