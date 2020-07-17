$ (document).ready(function(){
    $('.pop-up').click(function(event){
        event.preventDefault();
        $('.modal img').attr('src', $(this).attr('src'));
        $('.modal').modal('show');
    });


gsap.from('.header', {duration: 3, y: '-100%', ease: 'bounce'})
gsap.from('.header_cntnt-wrap', {duration: 3, opacity: 0, delay: 4, stagger: 5})

//use scroll magic
var ctrl = new ScrollMagic.Controller({
	globalScenOptions: {
		triggerHook: 'onLeave'
	}
});


const tl = gsap.timeline();
tl.fromTo('.iPhone4', {opacity: 0, scale:0, rotation:720}, {duration: 5, delay:3, opacity:1, scale:1, rotation: 0});
tl.fromTo('.iPhone5', {opacity: 0, scale:0, rotation:1440}, {duration: 5, delay:2, opacity:1, scale:1, rotation: 0});
tl.fromTo('.iPhone6', {opacity: 0, scale:0, rotation:720}, {duration: 5, delay:1, opacity:1, scale:1, rotation: 0});

ScrollTrigger.create({
	animation: tl,
	trigger: 'sec3-elements',
	start: '+=4000',
	scrub: true,
	pin:true,
	anctipatePin: 1,
	  });


}) 


