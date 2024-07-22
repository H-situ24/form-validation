var n=document.getElementById("name")
var e=document.getElementById("email")
var ph=document.getElementById("phone")
var p=document.getElementById("password")
flag=0
n.addEventListener("input",()=>{
    if(n.value==""){
        flag=0;
        document.getElementById("nerror").innerHTML="Name can't be blank...!!"
    }
    else if(n.value.length<3){
        flag=0;
        document.getElementById("nerror").innerHTML="Name must be at least 3 char...!!"
    }
    else if(n.value>=0 || n.value<=99999999999){
        flag=0;
        document.getElementById("nerror").innerHTML="Name not allow number...!!" 
    }
    else{
        document.getElementById("nerror").innerHTML=""
        flag=1;
    }
})
e.addEventListener("input",()=>{
    if(e.value==""){
        flag=0;
        document.getElementById("eerror").innerHTML="Email can' be blank";
    }
    else if(e.value.length<6){
        flag=0;
        document.getElementById("eerror").innerHTML="Email at least 6 char...!!";
    }
    else{
        flag=1
        document.getElementById("eerror").innerHTML="";
    }
})
ph.addEventListener("input",()=>{
    if(ph.value==""){
        flag=0;
        document.getElementById("pherror").innerHTML="Phone can't be blank";
    }
    else if(ph.value.length!=10){
        flag=0
        document.getElementById("pherror").innerHTML="phone should only 10 digit...!!";
    }
    else if(isNaN(ph.value)){
        flag=0;
        document.getElementById("pherror").innerHTML="Phone should be digit not char and specail char allow...!!";
    }
    else if(((ph.value[0]).charCodeAt(0))==32 || ((ph.value[1]).charCodeAt(0))==32 || ((ph.value[9]).charCodeAt(0))==32){
        flag=0;
        document.getElementById("pherror").innerHTML="White space is not allow in phone number";
    }
    else{
        flag=1;
        document.getElementById("pherror").innerHTML="";
    }
})
p.addEventListener("input",()=>{
    if(p.value==""){
        flag=0;
        document.getElementById("perror").innerHTML="Password can't be blank..!!";
    }
    else if(p.value.length<7){
        flag=0;
        document.getElementById("perror").innerHTML="Password should at least 7 char..!!";
    }
    else{
        document.getElementById("perror").innerHTML="";
        flag=1;
    }
})
function fav(){
    if(n.value==""){
        flag=0;
        alert("name can't be blank")
    }
    else if(n.value.length<3){
        flag=0;
        alert("name should atleast 3 char")
    }
    else if(n.value>=0 || n.value<=99999999999){
        flag=0;
        alert("Name Should be Character not a number!!!")   
    }
    // else{
    //     flag=1;
    // }
    else if(e.value==""){
        flag=0;
        alert("email can't be blank")
    }
    else if(e.value.length<6){
        flag=0;
        alert("email should atleast 8 char")
    }
    // else{
    //     flag=1
    // }
    else if(ph.value==""){
        flag=0;
        alert("phone can't be blank")
    }
    else if(ph.value.length!=10){
        flag=0
        alert("phone should only 10 char")
    }
    else if(isNaN(ph.value)){
        flag=0;
        alert("Phone no shuld be digit not a char or special char...")
    }
    else if(((ph.value[0]).charCodeAt(0))==32 || ((ph.value[1]).charCodeAt(0))==32 || ((ph.value[9]).charCodeAt(0))==32){
        flag=0;
        alert("White space is not allowed in phone number");
    }
    else if(p.value==""){
        flag=0;
        alert("password can't be blanked")
    }
    else if(p.value.length<7){
        flag=0;
        alert("password should at least 7 char..!!")
    }
    else{
        flag=1;
    }




    if(flag==0){
        return false;
    }
    else{
        return true;
    }

}