
$(document).ready(function () {
    //show-more-brands button mouseover rotate
    $(".show-more").mouseover(function () {
        $(".fa-greater-than").css({
            "transform": "rotate(90deg)"
        })
    })
    //show-more-brands button mouseleave rotate

    $(".show-more").mouseleave(function () {
        $(".fa-greater-than").css({
            "transform": "rotate(0deg)"
        })
    })
    //show-more brands show
    $(".show-more").click(function () {
        $(this).css({ "display": "none" });
        $(".brands-container-two").css({ "display": "flex" })
        $(".show-less").css({ "display": "flex" });
    })
    //button show less arrow rotate
    $(".show-less").mouseover(function () {
        $(".fa-less-than").css({
            "transform": "rotate(90deg)"
        })
    })
    //button show less arrow rotate

    $(".show-less").mouseleave(function () {
        $(".fa-less-than").css({
            "transform": "rotate(0deg)"
        })
    })
    //show less brands hide
    $(".show-less").click(function () {
        $(this).css({ "display": "none" });
        $(".brands-container-two").css({ "display": "none" })
        $(".show-more").css({ "display": "flex" });
    })
});

//Button for submission of address
$(document).ready(function () {
    $(".submit-button-loc").click(function () {
        $(".txt").css({ "display": "flex" })
    })
})
   