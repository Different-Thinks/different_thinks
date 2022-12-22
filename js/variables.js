var email = "currusjk@gmail.com";

var get_email = document.getElementsByClassName("get_email");

var length = get_email.length;

for(var index = 0; index < length; index++) {
    get_email[index].innerHTML = email;
}