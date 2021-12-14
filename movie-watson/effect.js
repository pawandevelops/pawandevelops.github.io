$(document).ready(function() {
    //	var items_li = $("#other-movies li");

    var items_li = $("#other-movies li h3");

    items_li.on("click", function() {
        $(this).nextAll("p").slideToggle(800);

        $(this).find(".rotate").toggleClass("down");

    });

    var content = document.getElementById('latest-movie');
    var button = document.getElementById('show-more');

    button.onclick = function() {

        if (content.className == "open") {
            // shrink the box
            content.className = "";
            button.innerText = "show more";
        } else {
            // expand the box
            content.className = "open";
            button.innerHTML = "show less";
        }

    };

});