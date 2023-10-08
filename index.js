function validation() {

    if (document.formfill.username.value=="") {
        document.getElementById("result").innerHTML="Enter username*";
        return false;
    }
    else if (document.formfill.username.value.length<6) {
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if (document.formfill.email.value=="") {
        document.getElementById("result").innerHTML="Enter your email*";
        return false;
    }
    else if (document.formfill.password.value=="") {
        document.getElementById("result").innerHTML="Enter your password";
        return false;
    }
    else if (document.formfill.password.value.length<6) {
        document.getElementById("result").innerHTML="Password must be 6-digit";
        return false;
    }
    else if (document.formfill.cpassword.value=="") {
        document.getElementById("result").innerHTML="Enter confirm password";
        return false;
    }
    else if (document.formfill.cpassword.value !== document.formfill.password.value) {
        document.getElementById("result").innerHTML="Password doesn't matched";
        return false;
    }
    else if (document.formfill.password.value == document.formfill.cpassword.value) {
        popup.classList.add("open-slide")
        return false;
    }
    
}
 var popup=document.getElementById("popup");
 function CloseSlide(){
     popup.classList.remove("open-slide")
 }
