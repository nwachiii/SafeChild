$ (document).ready(function(){
    $('.pop-up').click(function(event){
        event.preventDefault();
        $('.modal img').attr('src', $(this).attr('src'));
        $('.modal').modal('show');
    });

//header animation
gsap.from('.header', {duration: 3, y: '-100%', ease: 'bounce'})
gsap.from('.header_cntnt-wrap', {duration: 3, opacity: 0, delay: 4, stagger: 5})


//moving text animation
const text = document.getElementById("anim-text");
const prog = "SafeChild App guarantee’s absolute protection of children, by alerting parents or gurdians when child is in danger. It does this using a high tech band, which is stripped to the child. This watch senses and monitors the Child’s Patterns.";
let idx = 2;

setInterval(writeText, 80);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }

}



//use scroll magic
var ctrl = new ScrollMagic.Controller({
	globalScenOptions: {
		triggerHook: 'onLeave'
	}
});


const tl = gsap.timeline();
tl.fromTo('.iPhone4', {opacity: 0, scale:0, rotation:720}, {duration: 5, delay:3, opacity:1, scale:1, rotation: 0});
tl.fromTo('.iPhone6', {opacity: 0, scale:0, rotation:720}, {duration: 5, delay:1, opacity:1, scale:1, rotation: 0});
tl.fromTo('.iPhone5', {opacity: 0, scale:0, rotation:1440}, {duration: 5, delay:2, opacity:1, scale:1, rotation: 0});

ScrollTrigger.create({
	animation: tl,
	trigger: 'sec3-elements',
	start: '+=4000',
	scrub: true,
	pin:true,
	anctipatePin: 1,
	  });


}) 


