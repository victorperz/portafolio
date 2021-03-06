
    (function($) {
        "use strict";

    barChart();
    //Run when there is a resize
    $(window).resize(function(){
        barChart();
    });
    /*Adjusting the size of the skill bar,
     I divide the percentage by 100 and multiply
     that by the width.*/
    function barChart(){
        $('.bar-chart').find('.progress').each(function(){
            var itemProgress = $(this),
            itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            itemProgress.css('width', itemProgressWidth);
        });
    }
    
        // Enable Bootstrap tooltips via data-attributes globally
        $('[data-toggle="tooltip"]').tooltip();
    
        // Enable Bootstrap popovers via data-attributes globally
        $('[data-toggle="popover"]').popover();
    
        $(".popover-dismiss").popover({
            trigger: "focus"
        });
    
        // Activate Feather icons
        feather.replace();
    
        // Activate Bootstrap scrollspy for the sticky nav component
        $("body").scrollspy({
            target: "#stickyNav",
            offset: 82
        });
    
        // Scrolls to an offset anchor when a sticky nav link is clicked
        $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function() {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                            scrollTop: target.offset().top - 81
                        },
                        200
                    );
                    return false;
                }
            }
        });
    
        // Collapse Navbar
        // Add styling fallback for when a transparent background .navbar-marketing is scrolled
        var navbarCollapse = function() {
            if($(".navbar-marketing.bg-transparent.fixed-top").length === 0) {
                return;
            }
            if ($(".navbar-marketing.bg-transparent.fixed-top").offset().top > 0) {
                $(".navbar-marketing").addClass("navbar-scrolled");
            } else {
                $(".navbar-marketing").removeClass("navbar-scrolled");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);

        $("#tec").click(function() {
            $('html,body').animate({
                scrollTop: $(".tecnologia").offset().top},
                'slow');
        });
        $("#por").click(function() {
            $('html,body').animate({
                scrollTop: $(".portafolio").offset().top},
                'slow');
        });
        $("#hab").click(function() {
            $('html,body').animate({
                scrollTop: $(".habilidades").offset().top},
                'slow');
        });
        $("#ini").click(function() {
            $('html,body').animate({
                scrollTop: $(".inicio").offset().top},
                'slow');
        });
        $("#cont").click(function() {
            $('html,body').animate({
                scrollTop: $(".contactame").offset().top},
                'slow');cont
        });
        
    })(jQuery);
    //Execute active class, on clicking
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("nav-link");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

var modal = document.getElementById('popUp');

//I store the entire img tag inside a variable
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");
var captionText = document.getElementById("caption");

//clicking on the image runs the popUp
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
//store the label containing the close class
var span = document.getElementsByClassName("close")[0];

// Close popUp when clicking on the x, "when selecting the span tag with the close class"
span.onclick = function() { 
  modal.style.display = "none";
}

//store all tag where class is hora
const horaContainer = document.querySelector('.hora')
//store all tag where class is horario
const horarioDiv = document.querySelector('.horario')

//Update the time
const actualizarHora = setInterval(function(){

    const date = new Date()
    //Refactored
        currentHours = date.getHours()
        //Make it show two digits
        currentHours = ("0" + currentHours).slice(-2)
        currentMinutes = date.getMinutes()
        currentMinutes = ("0" + currentMinutes).slice(-2)
        currentSeconds = date.getSeconds()
        currentSeconds = ("0" + currentSeconds).slice(-2)
        
        //Concatenate the hour, minute, and second values ??????and display it in the container
        horaContainer.innerHTML = `${currentHours} : ${currentMinutes} : ${currentSeconds}`
        
    //if short, to know if it is time in the morning (am) or afternoon (pm)
    horarioDiv.innerHTML = date.getHours() >= 12 ? 'PM' : 'AM'

//Update every second
},1000)