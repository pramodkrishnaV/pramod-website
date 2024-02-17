$(document).ready(function () {
    var i = 0;
    var mediaText = document.getElementById("designMediaText");
    var header = document.getElementById("header");
    var headerTitle = document.getElementById("headerTitle");

    // function mediaTextChanger() {

    //     var textArray = ["MOBILE", "PRINT", "WEB"];
    //     var headerOpacity = 0;

    //     mediaText.innerText = textArray[i];
    //     if (i == textArray.length - 1) {
    //         i = 0;
    //     }
    //     else {
    //         i++;
    //     }
    // }

    window.onscroll = function () {
        var homePage = document.getElementById("homePage");
        var homeHeight = homePage.getBoundingClientRect().height
        if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (document.body.scrollTop < homeHeight || document.documentElement.scrollTop < homeHeight)) {
            percent = 100 * document.documentElement.scrollTop / homeHeight

            var opacity = Math.round(percent);
            var headerBackground = "#202029";
            if (opacity > 97) {
                header.style.background = headerBackground + "97";
                headerTitle.style.opacity = 100 / 100;
            }
            else {
                header.style.background = headerBackground + opacity;
                headerTitle.style.opacity = opacity / 100;
            }

        } else {
            header.style.background = "#20202900";
        }
    }


    $(".workItem").click(function (event) {
        console.log("EVENT : ", event.currentTarget.id);
        $(".workItemModalInnerContainer").css("display", "none");
        $(".workItemModal").css("display", "flex");
        $("#" + event.currentTarget.id + "_POP").css("display", "block");


    });


    $(".workItemModal").click(function () {
        if (event.target.id == "workItemModal") {
            $(".workItemModalInnerContainer").css("display", "none");
            $(".workItemModal").css("display", "none");
        }
    });

    $(".modalCloseButtonContainer").click(function () {
        $(".workItemModalInnerContainer").css("display", "none");
        $(".workItemModal").css("display", "none");
    });



    // var interval = setInterval(function () { mediaTextChanger() }, 1500);


});

function onMenuItemClick(id) {
    var page = document.getElementById(id);
    $('html, body').animate({
        scrollTop: $(page).offset().top
    }, 600);
}

function menuToggle() {
    var sideMenu = document.getElementById("sideMenu");
    var menuBtn = document.getElementById("menuBtn");
    var closeBtn = document.getElementById("closeBtn");
    var page = $(".page");
    sideMenu.classList.toggle("open");
    menuBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    page.toggleClass( "blur" );
}
