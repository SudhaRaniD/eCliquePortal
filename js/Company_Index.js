jQuery(document).ready(function($) {


    let intervalID = setInterval(() => {
        document.getElementById("newimg").innerHTML = "";

        var mypic = new Array("iphonenew.jpg", "motorola.jpg");
        var randomnum = Math.floor(Math.random() * mypic.length);

        // document.getElementById("newimg") = mypic[randomnum];

        var img = document.createElement("img");
        img.src = "images/" + mypic[randomnum];
        img.style = "width:120px; height:120px";
        var src = document.getElementById("newimg");
        src.appendChild(img);

    }, 1000);


    // let cars = ["Saab", "Volvo", "BMW"];
    // let firstHashMap = new Map([
    //     [1, cars],
    //     [2, "sudha"]
    // ]);
    //localStorage.setItem("firstHashMap", firstHashMap);

    // console.log(firstHashMap);

    const mydate = new Date();
    console.log(mydate);
    document.getElementById("Company_date").innerHTML = mydate.toDateString();

    document.getElementById("Myacount").value = localStorage.getItem("firstName");

    let menuid = document.getElementById("nav");

    fetch("json/menu.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                var node = document.createElement("li");

                var innerHTMLCont = "<a href='#'>" + element.name + "</a>";
                innerHTMLCont = innerHTMLCont + " <ul> ";
                var submenutags = "";
                element.brands.forEach(brand => {
                    submenutags = submenutags + "<li><a class='submenuid' id='submenuid' href='#' " + " data-brandid=" + brand.brandid + " data-brandname=" + brand.name + ">" + brand.name + "</a></li>";
                });
                innerHTMLCont = innerHTMLCont + submenutags + "</ul>"
                node.innerHTML = innerHTMLCont;
                menuid.appendChild(node);
            });
        });

    $(document).on("click", ".submenuid", function(evt) {

        var brandId = this.getAttribute("data-brandid");
        var brandName = this.getAttribute("data-brandname");
        console.log(brandId + " - " + brandName);

        let productTableSection = document.getElementById("productTableSection");
        let tableProducts = document.getElementById("tableProducts");
        if (tableProducts != null) {
            tableProducts.remove();
        }

        fetch("json/menu.json")
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    element.brands.forEach(brand => {
                        if (brand.modelInfo != undefined && brand.brandid == brandId && brand.name == brandName) {
                            var table = document.createElement('table');

                            table.className = "tableProducts";
                            table.id = "tableProducts";

                            var tblBody = "<tr> <th class='fixed'>Model</th> " +
                                " <th class='flex-item'>Description</th> " +
                                " <th class='flex-item-price-cart'>Price</th> " +
                                " <th class='flex-item-price-cart'>Add to Cart</th> </tr>";


                            brand.modelInfo.forEach(modelinf => {
                                tblBody = tblBody + "<tr> <td class='fixed'> <a href=" + "../../populate_Devices/" + modelinf.brandUrl + " target='_blank'> <img src=" + "images/" + modelinf.imageid + " style='width:100px; height: 100px;' /> </a> </td>";
                                tblBody = tblBody + "<td class='flex-item'>" + modelinf.brandDescription + "</td> " +
                                    " <td class='flex-item-price-cart'>" + modelinf.brandPrice + "</td> " +
                                    " <td class='flex-item-price-cart'> " +
                                    " <a href='#' class='modelAddCart' id='modelAddCart' data-model-add=" + modelinf.modelid + " data-brand-add=" + brand.brandid + ">" +
                                    " <img src='images/add-to-basket.png' style='width:50px; height: 50px;'/> </a> " +
                                    " <a href='#' class='modelDelCart' id='modelDelCart' data-model-del=" + modelinf.modelid + " data-brand-del=" + brand.brandid + ">" +
                                    " <img src='images/remove-from-basket.png' style='width:50px; height: 50px;'/> </a> " +
                                    " </td> </tr>";
                                table.innerHTML = tblBody;
                                productTableSection.appendChild(table);
                            });
                        };
                    });
                });
            });

    });

    $(document).on("click", ".modelAddCart", function(evt) {
        var modelId = this.getAttribute("data-model-add");
        var brandlId = this.getAttribute("data-brand-add");
        if (document.getElementById("addCartId").value == undefined || document.getElementById("addCartId").value == 0) {
            document.getElementById("addCartId").value = 1;
        } else {
            document.getElementById("addCartId").value = parseInt(document.getElementById("addCartId").value) + 1;
        }

        var cartInformation = new Map();
        if (localStorage.getItem("cartInformation") != undefined && localStorage.getItem("cartInformation") != null) {
            //var cartInformation = new Map(localStorage.getItem("cartInformation"));

            var o = localStorage.getItem("cartInformation");
            cartInformation = (o) => new Map(Object.entries(o));
        }
        cartInformation.set(modelId, brandlId);
        localStorage.setItem("cartInformation", cartInformation);


        const addToCartInformation = { modelId: modelId, brandlId: brandlId }
        localStorage.setItem("addToCartInformation", addToCartInformation);
        console.log("addToCartValue : " + document.getElementById("addCartId").value)
    });

    $(document).on("click", ".modelDelCart", function(evt) {
        var modelId = this.getAttribute("data-model-del");
        var modelId = this.getAttribute("data-brand-del");
        if (document.getElementById("addCartId").value != undefined && document.getElementById("addCartId").value != 0) {
            document.getElementById("addCartId").value = parseInt(document.getElementById("addCartId").value) - 1;
        }
        console.log("addToCartValue : " + document.getElementById("addCartId").value)
    });

    // code for popup

    $(".cartAdd").click(function() {
        var loginid = document.getElementById("loginid");
        var registerid = document.getElementById("registerid");
        var registeraddress = document.getElementById("registeraddress");
        var address_main = document.getElementById("address_main");
        var mycart = document.getElementById("mycart");
        mycart.hidden = false;
        address_main.hidden = true;
        registerid.hidden === true
        loginid.hidden = true;
        registeraddress.hidden = true;
        $('.hover_bkgr_fricc').show();

    });
    $(".carttotal").click(function() {

        $('.hover_bkgr_fricc').hide();

    });

    $(".locateaddress").click(function() {
        var loginid = document.getElementById("loginid");
        var registerid = document.getElementById("registerid");
        var registeraddress = document.getElementById("registeraddress");
        var address_main = document.getElementById("address_main");
        var mycart = document.getElementById("mycart");
        address_main.hidden = false;
        registerid.hidden === true
        loginid.hidden = true;
        registeraddress.hidden = true;
        mycart.hidden = true;
        $('.hover_bkgr_fricc').show();

    });

    $(".postcodebtn").click(function() {

        $('.hover_bkgr_fricc').hide();

    });


    $(".trigger_popup_fricc").click(function() {
        if (document.getElementById("signInOut").innerHTML === 'Sign In') {
            var loginid = document.getElementById("loginid");
            var registerid = document.getElementById("registerid");
            var registeraddress = document.getElementById("registeraddress");
            var address_main = document.getElementById("address_main");
            var mycart = document.getElementById("mycart");
            address_main.hidden = true;
            loginid.hidden = false;
            registerid.hidden = true;
            registeraddress.hidden = true;
            mycart.hidden = true;
            $('.hover_bkgr_fricc').show();
        } else {
            $('.hover_bkgr_fricc').hide();
            document.getElementById("regemail").value = "";
            document.getElementById("password").value = "";
            document.getElementById("Myacount").value = "";
            document.getElementById("signInOut").innerHTML = 'Sign In'
        }
    });
    $('.popupCloseButton').click(function() {
        $('.hover_bkgr_fricc').hide();
    });

    $(".SignInBtn").click(function() {
        var email = document.getElementById("regemail").value;
        if (email == "") {
            document.getElementById("message").innerHTML = "Fill the Email ID";
            return false;
        }
        var format4 = /[@]+/;
        if (email.match(format4)) {
            // return true;
        } else {
            document.getElementById("message").innerHTML = " @is missing ";
            return false;
        }

        var pwd = document.getElementById("password").value;
        //check empty password field  
        if (pwd == "" || pwd.length <= 0) {
            document.getElementById("message").innerHTML = "**Fill the password please!";
            return false;
        }

        //minimum password length validation  
        if (pwd.length < 8) {
            document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
            return false;
        }
        if (pwd.length > 15) {
            document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
            return false;
        }

        var format1 = /[0-9]+/;
        if (pwd.match(format1)) {
            //return true;
        } else {
            document.getElementById("message").innerHTML = "Enter one number ";
            return false;
        }

        var format2 = /[A-Z]+/;
        if (pwd.match(format2)) {
            // return true;
        } else {
            document.getElementById("message").innerHTML = "Enter atleast One Capital Letters ";
            return false;
        }

        var format = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/;

        if (pwd.match(format)) {
            //   return true;
        } else {
            document.getElementById("message").innerHTML = "Enter One special character ";
            return false;
        }

        if (email === 'dummy@gmail.com' && pwd === 'Dummy@1234') {
            document.getElementById("Myacount").value = "Dummy";
            document.getElementById("signInOut").innerHTML = "Sign Out";
            $('.hover_bkgr_fricc').hide();
        }
    });

    $(".registerBtn").click(function() {
        var registerid = document.getElementById("registerid");
        var mycart = document.getElementById("mycart");
        var loginid = document.getElementById("loginid");
        var registeraddress = document.getElementById("registeraddress");
        if (registerid.hidden === true) {
            registerid.hidden = false;
            loginid.hidden = true;
            registeraddress.hidden = true;
            mycart.hidden = true;

        }
    });
    $(".CreateBtn").click(function() {
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
        document.getElementById("Myacount").value = document.getElementById("firstName").value;
        var registeraddress = document.getElementById("registeraddress");
        registeraddress.hidden = true;
        $('.hover_bkgr_fricc').hide();
    });

    // $(".addbasket").click(function() {
    //     var dclose = document.getElementById("addbasket")
    //         // window.opener.location = '/Company_index.html';
    //     if (dclose = true) {
    //         window.open() = "Company_index.html";
    //     };
    // });
})

clearSigninName = () => {
    document.getElementById("Myacount").value = "";
}