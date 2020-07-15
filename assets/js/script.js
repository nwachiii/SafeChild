$ (document).ready(function(){
    $('.pop-up').click(function(event){
        event.preventDefault();
        $('.modal img').attr('src', $(this).attr('src'));
        $('.modal').modal('show');
    })

})