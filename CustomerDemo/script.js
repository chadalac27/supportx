

// button function to pull up form
function generatebutton(){
    var userform = document.querySelector("#UserForm");
    var helpbtn =  document.querySelector("#HelpBtn");
    var chatwindow = document.querySelector("#chatwindow");
    var contdiv = document.querySelector("#test");
    var modalwindow = document.querySelector("#modalwrap")
    
    userform.classList.remove("d-none");
    userform.classList.add("d-flex");
    helpbtn.classList.add("d-none");
    chatwindow.classList.add("d-none");
    contdiv.classList.remove("d-none")
    modalwindow.classList.add("modal-sm")
    modalwindow.classList.remove("modal-lg")
    
  }
  function closebutton(){
    var helpbtn =  document.querySelector("#HelpBtn");
    helpbtn.classList.remove("d-none");
  }
//   attempting to link local host through modal
  function routeXXX(){
    //   window.location.href="http://www.google.com"
    var contdiv = document.querySelector("#test");
    var userform = document.querySelector("#UserForm");
    var chatwindow = document.querySelector("#chatwindow");
    var modalwindow = document.querySelector("#modalwrap")
    var modalcont = document.querySelector("modalcontent")
    modalwindow.classList.remove("modal-sm")
    modalwindow.classList.add("modal-lg")
    userform.classList.remove("d-flex")
    userform.classList.add("d-none");
    chatwindow.classList.remove("d-none")
    // chatwindow.classList.add("bigger")
    contdiv.classList.add("d-none")
}

// submit button - to chat



