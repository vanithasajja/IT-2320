$(document).ready(function () {


    $("#divAccinfo").hide();

    $(".btn1").click(function () {

        $.ajax
            ({
                url: "Home/Login",
                data:
                {
                    Username: $(".usrname").val(),
                    Password: $(".pword").val()
                },
                success:
                function (result) {
                    alert(result);
                  
                }
            })
        if (Message = "Success") {

            $("#divAccinfo").show();


            $.ajax
                ({
                    url: "Home/GetAccountInformation",
                    data:
                    {
                        username: $(".usrname").val()
                    },
                    success:
                    function (result) {

                        alert(result);

                    }
                })

            $("#login").hide();

        }

    });


    $(".btn2").click(function () {
       

        $.ajax
            ({
                url: "Home/CreateAccount",
                data:
                {
                    Username: $(".name").val(),
                    Password: $(".word").val(),
                    EmailAdd: $(".mail").val(),
                    EmailCon: $(".mail2").val()
                },
                success:
                function (result) {
                    alert(result);
                }
            })

       
    });


});







