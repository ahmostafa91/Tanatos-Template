/*global $, console, alert*/

$(function () {
    
    'use strict';
    
    // trigger nice scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 15,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
        
    });
    
    // change header height
    
    $('.header').height($(window).height());
    
    // scroll to features
    
    $('.arrow, .ar').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
    });
    
    // scroll team
    
    $('.hire').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 2000);
    });
    
    // scroll work
    
    $('.work').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-work').offset().top
            
        }, 2000);
    });
    
    // scroll top
    
    var right = $('.testi .fa-chevron-right'), // slider option
        
        left = $('.testi .fa-chevron-left'), // slider option
        
        scroll = $('#scroll');
    
    $(window).scroll(function () {
        
        console.log($(this).scrollTop());
        
        if ($(this).scrollTop() >= 700) {
            
            scroll.fadeIn(800);
            
        } else {
            
            scroll.fadeOut(800);
        }
        
    });
    
    $('#scroll').click(function () {
        
        $('html, body').animate({scrollTop: 0}, 2000);
        
    });
    
    // show more button
    
    $('.our-work .show').click(function () {
        
        $('.our-work .hidden').fadeIn(1000);
        $(this).fadeOut(1000);
        
    });
    
    // slider
    
    
    function checkClient() {
        
        if ($('.client:first').hasClass('active')) {
            
            left.fadeOut();
       
        } else {
            
            left.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            right.fadeOut();
       
        } else {
            
            right.fadeIn();
        }
        
       /* $('client:first').hasClass('active') ? left.fadeOut() : left.fadeIn();
        $('client:last').hasClass('active') ? right.fadeOut() : right.fadeIn(); */
    }
    
    checkClient();
    
    $('.testi i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testi .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClient();
                
            });
        
        } else {
            
            $('.testi .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClient();
            });
        }
        
    });
    
});


// place holder hide onfocus

var placeH = document.getElementById('place'),
    
    placeH2 = document.getElementById('place2'),
    
    placeH3 = document.getElementById('place3'),
    
    placeH4 = document.getElementById('place4');

placeH.onfocus = function () {
    
    'use strict';
    
    this.setAttribute('backup', 'Enter Your Email Here');
    this.setAttribute('placeholder', '');
};

placeH.onblur = function () {
    
    'use strict';
    
    this.setAttribute('placeholder', 'Enter Your Email Here');
    this.setAttribute('backup', '');
};

// contact input email

placeH2.onfocus = function () {
    
    'use strict';
    
    this.setAttribute('backup', 'Enter Your Email Here');
    this.setAttribute('placeholder', '');
};

placeH2.onblur = function () {
    
    'use strict';
    
    this.setAttribute('placeholder', 'Enter Your Email Here');
    this.setAttribute('backup', '');
};

// contact input subject

placeH3.onfocus = function () {
    
    'use strict';
    
    this.setAttribute('backup', 'Enter Your Email Here');
    this.setAttribute('placeholder', '');
};

placeH3.onblur = function () {
    
    'use strict';
    
    this.setAttribute('placeholder', 'Enter Your Email Here');
    this.setAttribute('backup', '');
};

// contact text area

placeH4.onfocus = function () {
    
    'use strict';
    
    this.setAttribute('backup', 'Enter Your Email Here');
    this.setAttribute('placeholder', '');
};

placeH4.onblur = function () {
    
    'use strict';
    
    this.setAttribute('placeholder', 'Enter Your Email Here');
    this.setAttribute('backup', '');
};