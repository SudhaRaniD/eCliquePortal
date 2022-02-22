function verifyPassword1() {
    var emadd = document.getElementById("regiemail").value;
    if (emadd == "") {
        document.getElementById("message1").innerHTML = "Fill the Email ID";
        return false;
    }
    var format4 = /[@]+/;
    if (emadd.match(format4)) {
        // return true;
    } else {
        document.getElementById("message1").innerHTML = " @is missing ";
        return false;
    }

    var pw = document.getElementById("password1").value;
    //check empty password field  
    if (pw == "" || pw.length <= 0) {
        document.getElementById("message1").innerHTML = "**Fill the password please!";
        return false;
    }


    //minimum password length validation  
    if (pw.length < 8) {
        document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    if (pw.length > 15) {
        document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }

    var format1 = /[0-9]+/;
    if (pw.match(format1)) {
        //return true;
    } else {
        document.getElementById("message1").innerHTML = "Enter one number ";
        return false;
    }

    var format2 = /[A-Z]+/;
    if (pw.match(format2)) {
        // return true;
    } else {
        document.getElementById("message1").innerHTML = "Enter atleast One Capital Letters ";
        return false;
    }

    var format = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/;

    if (pw.match(format)) {
        //   return true;
    } else {
        document.getElementById("message1").innerHTML = "Enter One special character ";
        return false;
    }
    // window.open("http://127.0.0.1:5500/Company_Page/html/Company_index.html");

    var rpw1 = document.getElementById("Repassword").value;
    //check empty password field  
    if (rpw1 == "" || rpw1.length <= 0) {
        document.getElementById("message1").innerHTML = "Reenter the password";
        return false;
    }

    $(".submitaccountBtn").click(function() {
        var registerid = document.getElementById("registerid");
        var loginid = document.getElementById("loginid");
        var registeraddress = document.getElementById("registeraddress");
        var mycart = document.getElementById("mycart");
        if (registeraddress.hidden === true) {
            registerid.hidden = true;
            loginid.hidden = true;
            registeraddress.hidden = false;
            mycart.hidden = true;

        }
    });

    $(".submitRegBtn").click(function() {
        var Myacount = document.getElementById("Myacount").value;
        Myacount = document.getElementById("firstName").value;
        var registeraddress = document.getElementById("registeraddress");
        registeraddress.hidden = true;
        $('.hover_bkgr_fricc').hide();
    });


}