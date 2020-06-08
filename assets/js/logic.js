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
var controller = new ScrollMagic.Controller();
scene1 = new ScrollMagic.Scene({triggerElement: "#eduTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#education, #eduText').removeClass('hide').removeClass('fadeInLeft')
                                    setTimeout(function(){
                                        $('#education, #eduText').addClass('fadeInLeft')
                                        $('#workExp, #workExpText').addClass('hide')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#education, #eduText').addClass('hide')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene2 = new ScrollMagic.Scene({triggerElement: "#workExpTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#workExp, #workExpText').removeClass('fadeInLeft')
                                    setTimeout(function(){
                                        $('#workExp, #workExpText').removeClass('hide').addClass('fadeInLeft')
                                        $('#secondWorkExp').addClass('hide')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#workExp, #workExpText').addClass('hide')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene3 = new ScrollMagic.Scene({triggerElement: "#secondWorkExpTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#secondWorkExp').removeClass('fadeInLeft')
                                    setTimeout(function(){
                                        $('#secondWorkExp').removeClass('hide').addClass('fadeInLeft')
                                        $('#skill, #skillText').addClass('hide')
                                        $('.progress-bar').removeClass('progress-animation')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#secondWorkExp').addClass('hide')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene4 = new ScrollMagic.Scene({triggerElement: "#skillTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#skill, #skillText').removeClass('fadeInLeft')
                                    setTimeout(function(){
                                        $('#skill, #skillText').removeClass('hide').addClass('fadeInLeft')
                                        $('.progress-bar').addClass('progress-animation')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#skill, #skillText').addClass('hide')
                                    $('.progress-bar').removeClass('progress-animation')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene5 = new ScrollMagic.Scene({triggerElement: "#footer"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#firstFooter').removeClass('fadeInRight')
                                    setTimeout(function(){
                                        $('#firstFooter').removeClass('hide').addClass('fadeInRight')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#firstFooter').addClass('hide')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene6 = new ScrollMagic.Scene({triggerElement: "#secondFooterTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#secondFooter').removeClass('fadeInRight')
                                    setTimeout(function(){
                                        $('#secondFooter').removeClass('hide').addClass('fadeInRight')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#secondFooter').addClass('hide')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene7 = new ScrollMagic.Scene({triggerElement: "#thirdFooterTrigger"})
                                 .triggerHook(0.9)
                                 .on("enter",(e)=>{
                                    $('#thirdFooter').removeClass('fadeInRight')
                                    setTimeout(function(){
                                        $('#thirdFooter').removeClass('hide').addClass('fadeInRight')
                                    },1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#thirdFooter').addClass('hide')
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);