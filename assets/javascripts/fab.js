var PageTracker = require('discourse/lib/page-tracker').default;

PageTracker.current().on('change', function () {

        $('.list-controls').on('click', '#create-topic', function(){
            $('#create-topic').addClass('create-clicked');
            setTimeout(function() {$('#reply-control').appEvents.trigger("composer:opened");},650);
        });
        
        $('#main').on('click', '.cancel', function(){
            $('#create-topic').removeClass('create-clicked');
            $('#reply-control').addClass('hidden');
            setTimeout(function() {$('#reply-control').removeClass('hidden');},650);
            $('#reply-control').appEvents.trigger("composer:closed");
        });
        
        $('#main').on('click', '.toggler', function(){
            $('#create-topic').removeClass('create-clicked');
            $('#reply-control').addClass('hidden');
            setTimeout(function() {$('#reply-control').removeClass('hidden');},650);
            $('#reply-control').appEvents.trigger("composer:closed");
        });

    });
