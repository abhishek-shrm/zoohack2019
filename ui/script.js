function loadProducts()
{
  $.get("http://0fc1c5b9.ngrok.io/amazon",{},function(data, status){
    var str="<table class='table'> <th> <td>Id</td> <td>Product Name</td> <td>Category</td> <td>Manufacture</td> <td>Description</td> <td>Link</td> </th>";
    for(i=0; i<170; i++)
    {
      var yu=data[i];
      str=str+"<tr><td></td><td>"+yu["Id"]+"</td> <td>"+yu["ProductName"]+"</td> <td>"+yu["Category"]+"</td> <td>"+yu["Manufacture"]+"</td> <td>"+yu["ProductDesc"]+"</td> <td><a href='"+yu["FlipkartLink"]+"'>Click Here</a></td> </tr>"
    }

    str=str+" </table>";
    document.getElementById('product').innerHTML=str;
    //alert("Success");


  });
}

function loadPython()
{
  $.get("http://0fc1c5b9.ngrok.io/python_data",{},function(data, status){
    var str="<table class='table'> <th> <td>Id</td> <td>Product Name</td> <td>Category</td> <td>Manufacture</td> <td>Flag</td> <td>Link</td> </th>";
    for(i=0; i<26; i++)
    {
      var yu=data[i];
      str=str+"<tr><td></td><td>"+yu["Id"]+"</td> <td>"+yu["ProductName"]+"</td> <td>"+yu["Category"]+"</td> <td>"+yu["Manufacture"]+"</td> <td>"+yu["Flag"]+"</td> <td><a href='"+yu["FlipkartLink"]+"'>Click Here</a></td> </tr>"
    }

    str=str+" </table>";
    document.getElementById('python').innerHTML=str;
    //alert("Success");


  });
}

function loadCITES()
{
  $.get("https://0fc1c5b9.ngrok.io/cites",{},function(data, status){
    var str="<table class='table'> <th> <td>Id</td> <td>Kingdom</td> <td>Species</td> <td>Scientific Name</td> <td>Author</td> <td>Listing</td> </th>";
    for(i=0; i<19; i++)
    {
      var yu=data[i];
      str=str+"<tr><td></td><td>"+yu["Id"]+"</td> <td>"+yu["Kingdom"]+"</td> <td>"+yu["Species"]+"</td> <td>"+yu["Scientific Name"]+"</td> <td>"+yu["Author"]+"</td> <td>"+yu["Listing"]+"</td> </tr>"
    }

    str=str+" </table>";
    document.getElementById('cites').innerHTML=str;
  //  alert("Success");


  });
}

function sendEmail()
{
  $.get("https://0fc1c5b9.ngrok.io/email",{},function(data, status){
    swal("Data Sent Successfully!", "CSV file has been mailed", "success");
  });

}
function move() {
  loadProducts();
  loadPython();
  loadCITES();
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if(width%20==0)
    {
      setTimeout(function(){}, 3000);
    }
    if (width >= 100) {
      clearInterval(id);
      setTimeout(sendEmail(),5000);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }

}
