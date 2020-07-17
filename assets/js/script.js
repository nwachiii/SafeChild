$ (document).ready(function(){
    $('.pop-up').click(function(event){
        event.preventDefault();
        $('.modal img').attr('src', $(this).attr('src'));
        $('.modal').modal('show');
    })


})


    var animate = function(text){
    	var textSplit = SplitText.create(text, {type: "chars, words"});
    	return
    	gsap.from(textSplit.chars, {duration:0.1, visibility:"hidden", stagger: 0.1});
    };

    animate('.header-text');