var number=0,lives=10;
function secondpage()
{
    location.href="scnd.html";
}
function loading()
{
    number=Math.round(Math.random()*100);
    document.getElementById("rm").innerHTML=lives;
}
function cleardata()
{
   document.getElementById("res").value="";
}
function submitted()
{
   if(document.getElementById("inp").value=="")
   {
      window.alert("Input box is empty,please enter a value!!");
   }
   if(document.getElementById("inp").value!="")
   {
     --lives;
      document.getElementById("rm").innerHTML=lives;
      var input=document.getElementById("inp").value;
   }
  if(input==number)
   {
      location.href="Win.html";
      document.getElementById("inp").value="";
   }
  if(input>number && document.getElementById("inp").value!="")
   {
      document.getElementById("guess").innerHTML="Your input is too high!!";
   }
  if(input<number && document.getElementById("inp").value!="")
   {
     document.getElementById("guess").innerHTML="Your input is too low!!";
   }
  if(lives==0)
   {
      location.href="Loss.html";
      document.getElementById("inp").value="";
   }
}