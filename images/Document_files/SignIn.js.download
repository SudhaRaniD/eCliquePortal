function verifyPassword() { 
    var emadd = document.getElementById("regemail").value;
    if(emadd == ""){
        document.getElementById("message").innerHTML = "Fill the Email ID";
        return false;
    }
    var format4= /[@]+/;
    if(emadd.match(format4)){
       // return true;
    }else  {  document.getElementById("message").innerHTML = " @is missing ";  
        return false;
    }
    
    var pw = document.getElementById("password").value;  
    //check empty password field  
    if(pw == "" || pw.length <= 0) { 
    document.getElementById("message").innerHTML = "**Fill the password please!";  
          return false;  
    }  

    
//minimum password length validation  
if(pw.length < 8) {  
    document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
    return false;  
 }  
 if(pw.length > 15) {  
    document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
 } 

 var format1= /[0-9]+/;
if(pw.match(format1)){
    //return true;
}else  {  document.getElementById("message").innerHTML = "Enter one number ";  
    return false;
}

var format2= /[A-Z]+/;
if(pw.match(format2)){
   // return true;
}else  {  document.getElementById("message").innerHTML = "Enter atleast One Capital Letters ";  
    return false;
}

var format = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/;

if(pw.match(format)){
//   return true;
} else {  document.getElementById("message").innerHTML = "Enter One special character ";  
return false;
}
window.open("http://127.0.0.1:5500/Company_Page/html/Company_index.html");

}