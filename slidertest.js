window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}



$(document).ready(function(){
    var slides=$(".slide");
    var slideWidth=450;
    var numberOfSlides = 4;
    var slideHeight=$(".slideshow-container").height();
    slideHeight=slideHeight*0.9;
    slides.wrapAll('<div id="slideInner"></div>').css({
      'width' : slideWidth,
      'padding': '10px'
    });

    $('#slideInner').css({
        'width': 2820,
        'height' : slideHeight,
        'display' : 'flex',
        'background-color' : 'wheat',
        'position': 'absolute',
        'top': '5%'
    });

    $(".slide").hover(function(){
        $(this).css({
            "background-color" : "snow"
        })
    }, function(){
        $(this).css({
            "background-color" : "wheat"
        })
    })

    function manageButtons(current){
        // Hide left arrow if position is first slide
        if(current==0){ $('#previous').hide() }
        else{ $('#previous').show() }
        // Hide right arrow if position is last slide
        if(current==numberOfSlides-2){ $('#next').hide() } 
        else{ $('#next').show() }
        } 

    var i=0;
    manageButtons(i);
    $(".btn").click(function(){
        i = ($(this).attr('id')=='next')? i+1 : i-1;
        $("#slideInner").animate({"margin-left":i*(-470)},1000);
        console.log(i);
        manageButtons(i);
    })

    $(".clickable").click(function(){
        if($(this).find("a").length){
        window.location.href = $(this).find("a:first").attr("href");
        }});
});