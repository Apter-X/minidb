const msg = document.getElementById('msg');

function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ( username == "admin" && password == "123"){
    event.preventDefault()
    msg.innerHTML = ("Login successfully");
  }else{
    event.preventDefault()
    document.getElementById("password").value="";
    msg.innerHTML = ("Wrong!");
  }
}