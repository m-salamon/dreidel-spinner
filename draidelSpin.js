(function () {
    /* global $  */
    /* global Shake */
    "use strict";

    var draidelStart = $('#draidelStart'),
        draidel = $('#draidel'),
        box = $('.box'),
        defaultMode = $('#defaultMode');
    
    var draidelArray = ["נ", "ג", "ה", "ש"];
     draidel.html(draidelArray[0]);
    
    
    draidelStart.click(function () {
    if (!element) {
        spin();
        element = true;
        }else{
          stop();
        element = false; 
        }
    });

    var element = false;
    box.click(function () {
        if (!element) {
            spin();
            element = true;
        } else if (element) {
            stop();
            element = false;
        }
    });

    var startSpin;
    var isFunMode;
    var spinner;
    
    function spin() {
        var i = 0;
        startSpin = setInterval(function () {
            draidel.html(draidelArray[i++]);
            if (i === draidelArray.length) {
                i = 0;
            }
        }, spinner);
          draidelStart.removeClass( "btn-success" ).addClass( "btn-warning").text('Stop');     
          funMode();
    }
    
    spinner = 100
    $('#slow').click(function(){
        stop();
        element = false; 
        spinner = 200;
            if (!element) {
            spin();
            element = true;
            }
    });
    $('#medium').click(function(){
        stop();
        element = false; 
        spinner = 100;
            if (!element) {
            spin();
            element = true;
            }
    });
    $('#fast').click(function(){
        stop();
        element = false; 
        spinner = 50;
            if (!element) {
            spin();
            element = true;
            }
    }); 

            // // math.random spin
    //    var startSpin;
    //    function spin(){
    //        startSpin = setInterval(function(){
    //                    var draidelResult = draidelArray[Math.floor(Math.random() * draidelArray.length)];
    //                    draidel.html(draidelResult); 
    //                    console.log(draidelResult);
    //                    }, 70);
    //    }

    function stop() {
        clearInterval(startSpin);
        draidelStart.removeClass( "btn-warning" ).addClass( "btn-success").text('Spin');
        clearInterval(theIntervalId);
    }


    //listen to shake event
    var shakeEvent = new Shake({
        threshold: 3, // determains the shake speed
        timeout: 1000 // optional, determines the frequency of event generation
    });

    shakeEvent.start();

    window.addEventListener('shake', function () {
        if (!element) {
            spin();
            element = true;
        }
    }, false);

    //stop listening
    function stopShake() {
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if (!("ondevicemotion" in window)) {
        stopShake();
    }

    defaultMode.click(function(){
         box.css({
               backgroundColor: 'initial'
            });
        isFunMode = false;
    });
    
    $('#funMode').click(function(){
         box.css({
             textShadow: '0px 0px 8px #ffffff',
               backgroundColor: '#6666ff'
            });
        isFunMode = true;
    });
    
    var theIntervalId;
    function funMode(){
             theIntervalId = setInterval(function () {
                 if(isFunMode){
                bodyColor();
                 }
            }, 800);
        
        
    }
        function bodyColor() { 
            box.css({
                textShadow: '0px 0px 8px #ffffff',
                backgroundColor: getRandomColor()
            });
          
        }
            

        //cycle through hex color
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }   
    
    
    $('#menu').click(function(){       
        $('.myTabs').css({
         display: 'block',   
         position: 'absolute',
         top: '0px',
         padding: '15px',    
         backgroundColor: '#ffffff',
         width: '100%',
        height: '100%'
        });
    });
    
    
    $('#myTabs a[href="#siddur"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');

    });
    $('#myTabs a[href="#music"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');

    });
    $('#myTabs a[href="#about"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');

    });
    
    $('.closeMenu').click(function(){
        $('.myTabs').hide();
    });
    
    $('#info').click(function(){
        $("#myModel").modal('show');
    });
    
    
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


}());
