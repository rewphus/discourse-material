$(function () {

        $('.list-controls').on('click', '#create-topic', function(){
            $('#create-topic').addClass('create-clicked');
            setTimeout(function() {$('#reply-control').removeClass('hidden');},650);
            setTimeout(function() {$('.wmd-controls').addClass('new-controls');});
        });
        
        $('#main').on('click', '.cancel', function(){
            $('#create-topic').removeClass('create-clicked');
            $('#reply-control').addClass('hidden');
        });
        
        $('#main').on('click', '.toggler', function(){
            $('#create-topic').removeClass('create-clicked');
            $('#reply-control').addClass('hidden');
        });

    });