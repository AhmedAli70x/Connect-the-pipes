var valid = false;
class validation {
    emp(empty) {
        var e = $("#" + empty)
        var l = e.val().length
        if (l) {
            return true;
        }
        else return false;
    }

    email(id) {

        var ele2 = $("#" + id).val();
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        return this.emp(id) && pattern.test(ele2);

    }

    name(id) {
        var n = $("#" + id).val();
        var pattern = /^[A-Z ]+[A-Z]{2,20}$/i
        return this.emp(id) && pattern.test(n);
    }
    password(id) {
        var pass = $("#" + id).val();
        var pattern = /^[a-zA-Z0-9 *+-.#%]{3,20}$/
        return this.emp(id) && pattern.test(pass);
    }
    confirmPass(id_1, id_2) {
        var id1 = $("#" + id_1).val()
        var id2 = $("#" + id_2).val()
        if (id1 == id2 && (this.emp(id_1)) && (this.emp(id_2)))
            return true;
        else
            return false;

    }
    validate(id, type, idc) {
        var el = $("#" + id)
        var el2 = $("#", idc)
        switch (type) {
            case "name":
                if (!this.name(id)) {
                    el.next().text("Invalid name")
                    el.css("border", "1px solid red");
                    valid = false;
                }
                else {
                    el.next().text("")
                    el.css("border", "1px solid green");
                    valid = true;
                }
                break;
            case "email":

                if (!this.email(id)) {
                    if (!$("#" + id).next().is("span")) {
                        $("<span class='error'>Invalid email format</span>").insertAfter("#" + id);
                        el.css("border", "1px solid red");
                        valid = false;
                    }
                }
                else {
                    if ($("#" + id).next().is("span")) {
                        $("#" + id).next().remove();
                        el.css("border", "1px solid green");
                        valid = true
                    }
                    // $( "<span class='error'> </span>").insertAfter( "#"+id );
                }
                break;

            case "password":
                if (!this.password(id)) {
                    el.next().text("Invalid password format")
                    el.css("border", "1px solid red");
                    valid = false;
                }
                else {
                    el.next().text("")
                    el.css("border", "1px solid green");
                    valid = true;
                }
                break;

            case "confirmPass":
                if (!this.confirmPass(id, idc)) {
                    el.next().text("Password match error")
                    el.css("border", "1px solid red");
                    valid = false;
                }
                else {
                    el.next().text("")
                    el.css("border", "1px solid green");
                    valid = true;
                }
                break;
        }
    }

}