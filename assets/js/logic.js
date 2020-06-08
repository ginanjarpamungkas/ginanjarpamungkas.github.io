$(document).ready(function() {
    var width = $(window).width()
    $('#nama').addClass('bounceIn').removeClass('hide')
    setTimeout(function(){$('#webDev').addClass('pulse').removeClass('hide')}, 550);
    setTimeout(function(){$('#education').addClass('fadeInLeft').removeClass('hide');$('#image').addClass('fadeInRight').removeClass('hide')}, 750);
    setTimeout(function(){$('#eduText').addClass('fadeInLeft').removeClass('hide')}, 950);
    setTimeout(function(){$('#workExp').addClass('fadeInLeft').removeClass('hide');$('#footer').addClass('fadeInRight').removeClass('hide')}, 1150);
    setTimeout(function(){$('#workExpText').addClass('fadeInLeft').removeClass('hide');$('#imagePict').addClass('rotateIn').removeClass('hide')}, 1350);
    setTimeout(function(){$('#skill').addClass('fadeInLeft').removeClass('hide');$('#birthDate').addClass('jackInTheBox').removeClass('hide')}, 1550);
    setTimeout(function(){$('#skillText').addClass('fadeInLeft').removeClass('hide');$('#summaryText').addClass('bounceIn').removeClass('hide');$('#onlinePort').addClass('bounceIn').removeClass('hide')}, 1750);
    setTimeout(function(){$('.link').addClass('pulse').removeClass('hide');$('#contact').addClass('bounceIn').removeClass('hide')}, 1950);
    setTimeout(function(){$('.title').addClass('pulse').removeClass('hide');$('.line').addClass('zoomIn').removeClass('hide')}, 2150);
    if (width < 800) {
        $('#archer').css("border-right",""+width/2+"px solid transparent").css("border-left",""+width/2+"px solid transparent");
        $('#footerArcher').css("border-right",""+width/2+"px solid #547a83").css("border-left",""+width/2+"px solid #547a83");
    }
})
document.getElementsByTagName("BODY")[0].onresize = function() {
    var width = $(window).width()
    if (width < 800) {
        $('#archer').css("border-right",""+width/2+"px solid transparent").css("border-left",""+width/2+"px solid transparent");
        $('#footerArcher').css("border-right",""+width/2+"px solid #547a83").css("border-left",""+width/2+"px solid #547a83");
    }
}