function createTeamAsJSON()
{
  return{
	"players":[
		{"firstName":"Virat", "lastName":"Kohli", "age":28, "matches":199, "avg":55.13},
		{"firstName":"Mahinder", "lastName":"Dhoni", "age":35, "matches":303, "avg":51.52},
		{"firstName":"Shikhar", "lastName":"Dawan", "age":31, "matches":90, "avg":44.45},
		{"firstName":"Ravindra", "lastName":"Jadeja", "age":28, "matches":136, "avg":31.37},
		{"firstName":"Bhuvaneshwar", "lastName":"Kumar", "age":27, "matches":75, "avg":13.60},
		{"firstName":"Hardik", "lastName":"Hardik", "age":23, "matches":26, "avg":40.76},
		{"firstName":"Ajinkya", "lastName":"Rahane", "age":28, "matches":84, "avg":35.27},
		{"firstName":"Umesh", "lastName":"Yadav", "age":29, "matches":71, "avg":8.77},
		{"firstName":"Yuvraj", "lastName":"Singh", "age":35, "matches":301, "avg":36.47},
		{"firstName":"Rohit", "lastName":"Sharma", "age":30, "matches":168, "avg":44.03},
		{"firstName":"Ravichandran", "lastName":"Ashwin", "age":30, "matches":111, "avg":16.07}
]}
}
    

	function displayPlayersBattingAvg(team)
	{ 
	   for(var i=0; i<team.players.length; i++)
		{
		   var player = team.players[i];
		   document.write(player.firstName + " " + player.lastName + " " + "played " + player.matches + " matches and his average is " + player.avg + "." + "<br>");
		}  
	};	
	
	 
	$(document).ready(function()
	{
	   $("div").click(function()
	   {
	       var team = createTeamAsJSON();
		   displayPlayersBattingAvg(team);
		});
	});
	
	