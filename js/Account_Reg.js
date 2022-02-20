

jQuery(document).ready(function($){
    $("#SubmitReg").click(function(){
        
        localStorage.setItem("firstName",document.getElementById("firstName").value);
        window.open("Company_index.html");
    })
  

})


// DisplayName = () =>{
//     window.open("http://127.0.0.1:5500/MyJavaScriptLearning/Company_Page/Company_index.html");
//     localStorage.setItem("firstName",document.getElementById("firstName").value);