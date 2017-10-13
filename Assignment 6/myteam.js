function Player(first, last, age, matches, avg) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.matchesPlayed = matches;
	this.average = avg;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

var player1 = new Player("Virat", "Kohli", 28, 199, 55.13);
var player2 = new Player("Mahinder", "Dhoni", 35, 303, 51.52);
var player3 = new Player("Shikhar", "Dawan", 31, 90, 44.45);
var player4 = new Player("Ravindra", "Jadeja", 28, 136, 31.37);
var player5 = new Player("Bhuvaneshwar", "Kumar", 27, 75, 13.60);
var player6 = new Player("Hardik", "Pandya", 23, 26, 40.76);
var player7 = new Player("Ajinkya", "Rahane", 28, 84, 35.27);
var player8 = new Player("Umesh", "Yadav", 29, 71, 8.77);
var player9 = new Player("Yuvraj", "Singh", 35, 301, 36.47);
var player10 = new Player("Rohit", "Sharma", 30, 168, 44.03);
var player11 = new Player("Ravichandran", "Ashwin", 30, 111, 16.07);
Player.prototype.state = "Delhi";


Player.prototype.setMiddleName = function(name)
{
	this.firstName = name;
};

player2.setMiddleName("Mahinder Singh");

document.getElementById("player1").innerHTML = player1.firstName + " " + player1.lastName + " played " + player1.matchesPlayed + " games and his batting average is " + player1.average + ".";
document.getElementById("player2").innerHTML = player2.firstName + " " + player2.lastName + " played " + player2.matchesPlayed + " games and his batting average is " + player2.average + ".";
document.getElementById("player3").innerHTML = player3.firstName + " " + player3.lastName + " played " + player3.matchesPlayed + " games and his batting average is " + player3.average + ".";
document.getElementById("player4").innerHTML = player4.firstName + " " + player4.lastName + " played " + player4.matchesPlayed + " games and his batting average is " + player4.average + ".";
document.getElementById("player5").innerHTML = player5.firstName + " " + player5.lastName + " played " + player5.matchesPlayed + " games and his batting average is " + player5.average + ".";
document.getElementById("player6").innerHTML = player6.firstName + " " + player6.lastName + " played " + player6.matchesPlayed + " games and his batting average is " + player6.average + ".";
document.getElementById("player7").innerHTML = player7.firstName + " " + player7.lastName + " played " + player7.matchesPlayed + " games and his batting average is " + player7.average + ".";
document.getElementById("player8").innerHTML = player8.firstName + " " + player8.lastName + " played " + player8.matchesPlayed + " games and his batting average is " + player8.average + ".";
document.getElementById("player9").innerHTML = player9.firstName + " " + player9.lastName + " played " + player9.matchesPlayed + " games and his batting average is " + player9.average + ".";
document.getElementById("player10").innerHTML = player10.firstName + " " + player10.lastName + " played " + player10.matchesPlayed + " games and his batting average is " + player10.average + ".";
document.getElementById("player11").innerHTML = player11.firstName + " " + player11.lastName + " played " + player11.matchesPlayed + " games and his batting average is " + player11.average + ".";
document.getElementById("captain").innerHTML = player1.getFullName();
document.getElementById("state").innerHTML = player1.state;

















