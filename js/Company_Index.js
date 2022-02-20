jQuery(document).ready(function($) {
    const mydate = new Date();
    console.log(mydate);
    document.getElementById("Company_date").innerHTML = mydate.toDateString();

    document.getElementById("Myacount").value = localStorage.getItem("firstName");

    let menuid = document.getElementById("nav");
  
    fetch("../json/menu.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            var node = document.createElement("li");

            var innerHTMLCont = "<a href='#'>" + element.name + "</a>";
            innerHTMLCont = innerHTMLCont + " <ul> ";
            var submenutags = "";
            element.brands.forEach(brand => {
                submenutags = submenutags + "<li><a class='submenuid' id='submenuid' href='#' " + " data-brandid=" + brand.brandid +  " data-brandname=" + brand.name + ">" + brand.name + "</a></li>";
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

        fetch("../json/menu.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                element.brands.forEach(brand => {
                    if (brand.modelInfo != undefined && brand.brandid == brandId && brand.name == brandName) {
                        var table = document.createElement('table');
                        table.className = "tableProducts";
                        table.id = "tableProducts";
                        
                        var tblBody = "<tr> <th class='fixed'>Product</th> " +
                        " <th class='flex-item'>Description</th> " +
                        " <th class='flex-item-price-cart'>Price</th> " + 
                        " <th class='flex-item-price-cart'>Add to Cart</th> </tr>";
                        
   
                        brand.modelInfo.forEach(modelinf => {
                            tblBody = tblBody + "<tr> <td class='fixed'> <a href=" + "../../populate_Devices/" + modelinf.brandUrl + " target='_blank'> <img src=" + "../images/" + modelinf.imageid + " style='width:100px; height: 100px;' /> </a> </td>";
                            tblBody = tblBody + "<td class='flex-item'>" + modelinf.brandDescription + "</td> " +
                                " <td class='flex-item-price-cart'>" + modelinf.brandPrice + "</td> " +
                                " <td class='flex-item-price-cart'> " + 
                                " <a href='#' class='modelAddCart' id='modelAddCart' data-model-add=" + modelinf.modelid + " data-brand-add=" + brand.brandid + ">" +
                                " <img src='../images/add-to-basket.png' style='width:50px; height: 50px;'/> </a> " + 
                                " <a href='#' class='modelDelCart' id='modelDelCart' data-model-del=" + modelinf.modelid + " data-brand-del=" + brand.brandid + ">" +
                                " <img src='../images/remove-from-basket.png' style='width:50px; height: 50px;'/> </a> " +
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
        var modelId = this.getAttribute("data-brand-add");
        if (document.getElementById("addCartId").value == undefined || document.getElementById("addCartId").value == 0) {
            document.getElementById("addCartId").value = 1;
        } else {
            document.getElementById("addCartId").value = parseInt(document.getElementById("addCartId").value) + 1;
        }
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
    $(".trigger_popup_fricc").click(function() {
        var loginid = document.getElementById("loginid");
        var registerid = document.getElementById("registerid");
        var registeraddress = document.getElementById("registeraddress");
        loginid.hidden = false;
        registerid.hidden = true;
        registeraddress.hidden = true;

        $('.hover_bkgr_fricc').show();
     });
     $('.popupCloseButton').click(function(){
         $('.hover_bkgr_fricc').hide();
     });

     $(".registerBtn").click(function(){
        var registerid = document.getElementById("registerid");
        var loginid = document.getElementById("loginid");
        var registeraddress = document.getElementById("registeraddress");
        if (registerid.hidden === true) {
            registerid.hidden = false;
            loginid.hidden = true;
            registeraddress.hidden = true;
          }
     });
     $(".submitaccountBtn").click(function(){
        var registerid = document.getElementById("registerid");
        var loginid = document.getElementById("loginid");
        var registeraddress = document.getElementById("registeraddress");
        if (registeraddress.hidden === true) {
            registerid.hidden = true;
            loginid.hidden = true;
            registeraddress.hidden = false;
          }
     });
     
     $(".submitRegBtn").click(function() {
        document.getElementById("Myacount").value = document.getElementById("firstName").value;
        var registeraddress = document.getElementById("registeraddress");
        registeraddress.hidden = true;
        $('.hover_bkgr_fricc').hide();
    });
})

// if( localStorage.getItem("firstName") == ""){
//        }else{
//     document.getElementById("Myacount").value = localStorage.getItem("firstName");
//     }

clearSigninName = () =>{
    document.getElementById("Myacount").value ="";
}