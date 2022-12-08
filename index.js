//var
var microsoft = document.getElementById("microsoft")
var btn = document.getElementById("btn");
var h = document.getElementById("h");
var m = document.getElementById("m");

var user = [
  {
    email: "Em",
    passord: "test",
  },
  {
    email: "ail",
    passord: "pass",
  },
  {
    email: "Email",
    passord: "testpass",
  },
];
var len = user.length;
//login

//if
btn.onclick = function myfunc() {
  var test = 0;
  var mail = document.getElementById("Email").value;
  var pass = document.getElementById("pass").value;

  h.removeAttribute("class");
  h.setAttribute("class", "hidden");
  m.removeAttribute("class");
  m.setAttribute("class", "hidden");
  for (var i = 0; i < len; i++) {
    if (mail == user[i].email) {
      if (pass == user[i].passord) {
        console.log("Right pass");
        window.location.href = "index.html";
      } else {
        console.log("wrong pass");
        h.removeAttribute("class");
        h.setAttribute("class", "red");
      }
    } else {
      test++;
    }
    if (test == 3) {
      console.log("wrong email");
      m.removeAttribute("class");
      m.setAttribute("class", "red");
    }
  }
};
// login with microsoft
microsoft.onclick = function microsoft() {
  //temp
  const userAction = async () => {
    const response = await fetch('http://example.com/movies.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }