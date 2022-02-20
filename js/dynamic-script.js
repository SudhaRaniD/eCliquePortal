var w;
function openwindow() {
  w = window.open('eClique','eClique.com', 'left =200,top =200,width=400,height=400');
  w.focus();
  w.document.write("<body style = 'background-color: aqua;font-size:35px; color:blue;'")
  w.document.write("<p> Thank You from eClique </p>");
  w.document.write("<img src = 'smily.jfif'>");
 
}

function myFunction() {
//   w.resizeTo(800, 800);
//     w.focus();
//   w.document.write("<p style= 'font-size:35px; color:blue'> Thank You from eClique </p>");
  w.close();
  
}

