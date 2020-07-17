$ (document).ready(function(){
    $('.pop-up').click(function(event){
        event.preventDefault();
        $('.modal img').attr('src', $(this).attr('src'));
        $('.modal').modal('show');
    });


gsap.from('.header', {duration: 3, y: '-100%', ease: 'bounce'})
gsap.from('.header_cntnt-wrap', {duration: 3, opacity: 0, delay: 4, stagger: 5})
gsap.from('.sec1', {duration: 1, x: '-100vw', delay: 1, ease: 'power2.in'})

//use scroll magic
gsap.fromTo('.sec3', {opacity: 0, scale:0, rotation:720}, {duration: 1, delay:1, opacity:1, scale:1, rotation: 0})

}) 
gsap.registerPlugin(ScrollTrigger);


    // var animate = function(text){
    // 	var textSplit = SplitText.create(text, {type: "chars, words"});
    // 	return
    // 	gsap.from(textSplit.chars, {duration:0.1, visibility:"hidden", stagger: 0.1});
    // };

    // animate('.header-text');

