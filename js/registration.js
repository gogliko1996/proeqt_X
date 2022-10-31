const form = document.getElementById("registration");

form.addEventListener("submit", (ivent) => {
    ivent.preventDefault();

    let GetRegistObjeqt = {

    };

    const pfname = document.getElementById("error_fname");
    const fnameValue = document.getElementById("fname").value;
    if( fnameValue == ""  ){
        GetRegistObjeqt.fname = "error";
        pfname.innerText = "Fill in the field";
    }

    const lnameValue = document.getElementById("lname").value;
    if(lnameValue == ""){
        GetRegistObjeqt.lname = "error";
        document.getElementById("error_lname").innerText = "Fill in the field";
    }

    const emailValue = document.getElementById("email").value;
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailValue == ""){
        GetRegistObjeqt.email = "error";
        document.getElementById("error_email").innerText = "Fill in the field";
    }
    if(emailValue.match(email)){   
    }else{
        GetRegistObjeqt.email1 = "error";
        document.getElementById("error_email").innerText = "Enter a valid email";
    }


     console.log(GetRegistObjeqt);
})

