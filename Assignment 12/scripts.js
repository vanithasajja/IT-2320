var currentDate = new Date();
day = currentDate.getDate();
month = currentDate.getMonth() + 1;
year = currentDate.getFullYear();
document.write(day + "/" + month + "/" + year);

var currentTime = new Date();
hours = currentTime.getHours();
minutes = currentTime.getMinutes();
if(minutes < 10)
{
	minutes = "0" + minutes;
}

var suffix = "A.M.";
if(hours >= 12)
{
	suffix = "P.M.";
	hours = hours - 12;
}
if(hours == 0)
{
	hours = 12;
}
document.write(" " + hours + ":" + minutes + " " + suffix);



function welcome()

	{

	document.getElementById("demo").addEventListener("click", display);

	function display()

	{

	alert("Welcome to my Web Page! \n You can reach me at (216)392-7030 if you have any questions.");
	
	}

	}


	
	
	
