//set local variables
function storeSessionStorage(name, val) {
    //will die after you close the browser
    sessionStorage.setItem(name, val);
}
function storeLocalStorage(name, val) {
    //permenant
    localStorage.setItem(name, val);
}
function removeSession(name) {
    sessionStorage.removeItem(name);
}
function removeLocal(name) {
    localStorage.removeItem(name);
}
function loginHTML()
{
    var dropdownhtml = `<div class="dropdown">
                    <button class="btn btn-outline-primary text-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i> ${loggedin.name}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <button class="dropdown-item" id="btn-logout"><i class="fas fa-sign-out-alt"></i> Logout</button>
                    </div>
                    </div>`;
    $("#right-nav").html(dropdownhtml);
}
$("#btn-login").click(function (event) {
    event.preventDefault()
    //validation
    if (valid) {
        $.ajax({
            url: 'backend/login.php',
            method: "POST",
            data: {
                email: $("#login-email").val(),
                password: $("#login-password").val(),
                submit: "login"
            },
            statusCode: {
                '404': function () {
                    console.error("Page not found");
                }
            },
            success: function (data) {
                // console.log(data);
                if (data != "0") {
                    //success login
                    loggedin = JSON.parse(data);
                    level = JSON.parse(data).level;
                    startLevel(level);
                    $("#login-form").modal("hide");
                    if ($("#remember-me").prop( "checked")) {
                        storeLocalStorage("name", loggedin.name);
                        storeLocalStorage("email", loggedin.email);
                        storeLocalStorage("password", loggedin.password);
                        storeLocalStorage("level", loggedin.level);
                    } else {
                        storeSessionStorage("password", loggedin.password);
                        storeSessionStorage("name", loggedin.name);
                        storeSessionStorage("email", loggedin.email);
                        storeSessionStorage("level", loggedin.level);
                    }
                    // hide login and register button and display user nav
                    loginHTML();
                }
                else {
                    // console.log("not valid creadentials");
                    if (!$("#btn-login").prev().is("span"))
                        $("<span class='error'>Invalid email or password</span>").insertBefore("#btn-login");
                    else {
                        $("#btn-login").prev().remove();
                    }
                }
            }
        })
    }
})


$("#right-nav").on('click', '#btn-logout', function (event) {
    event.preventDefault()
    var buttonsHTML = `<li class="nav-item mr-1 mb-1">
    <button type="button" class="btn btn-outline-primary text-light btn-block" data-toggle="modal" data-target="#login-form">
        <i class="fas fa-user"></i> Login
    </button>
</li>
<li class="nav-item">
    <button type="button" class="btn btn-outline-primary text-light  btn-block" data-toggle="modal" data-target="#register-form">
        <i class="fas fa-user-plus"></i> Register
    </button>
</li>`;
    $("#right-nav").html(buttonsHTML);
    removeSession('email')
    removeSession('password')
    removeSession('level')
    removeSession('name')
    removeLocal('email')
    removeLocal('password')
    removeLocal('level')
    removeLocal('name')
    loggedin = false;
    startLevel(0);
});