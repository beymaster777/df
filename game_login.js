function addUser()
{
    player1=document.getElementById("player1_name_input").value;
    player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1",player_1);
    localStorage.setItem("player2",player_2);
    window.location="game_login.js";



}