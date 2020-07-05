$(document).ready(function() {
    
    
var hidescroll = $('.hidescroll');
var box = $('.box');    
var navbar = $('nav');    
var menulinks = $('.menu a');
var sidebar = $('.sidebar'); 
var boxnot = $('.boxnot');  
var getstarted = $('.getstarted');
var logo = $('.logo');
var menu = $('.menu'); 
var navbtns = $('.navbtns'); 
var mobbtn = $('.mobbtn');  
var mobmenu = $('.mobmenu'); 
var mobslide = $('.mobslide');    
var gencomp1 = $('.gencomp1');
var gencomp2 = $('.gencomp2');
var gencomp3 = $('.gencomp3');
var gencomp4 = $('.gencomp4');    
var comp = $('.comp');        
var comp1 = $('.comp1');
var comp2 = $('.comp2');
var comp3 = $('.comp3');
var comp4 = $('.comp4');    
appcateg = $('.appcateg');  
apppool = $('.apppool'); 
var genclick = 0;      
textid = 0;    
var curr = 0;    
p1 = ''; p2 = '';  
var slidesnum = -300;  
var windowwidth = 500; 
var insertbox = $('.insertbox');    
    
           
function bindBtn() {    
box.not(boxnot).unbind('click').one('click', function() {
    var offset = box.offset();
    offset.top -= 20;
    $('html, body').animate({scrollTop: offset.top});
    //main actions
    box.not(this).fadeOut();
    $('.s1').append($('<div class="closebtncont"><a href="#gen"><button class="closebtn">Close</button></a></div>'));
    $(this).css({'width':'100%','margin':'auto','cursor':'auto'});  
    $(this).find(insertbox).html($(`<div class="hiddenbox">
                <div class="sidebar">
                    <span class="hidetitle ht1">Categories</span>
                    <ul class="categories">
                        <li><h5>Business</h5></li>
                        <li><h5>E-commerce</h5></li>
                        <li><h5>Technology</h5></li>
                        <li><h5>Photography</h5></li>
                        <li><h5>App Launch</h5></li> 
                        <li><h5>Media</h5></li>
                        <li><h5>Portfolio</h5></li>
                        <li><h5>Sports</h5></li>
                        <li><h5>Travel</h5></li>
                        <li><h5>Fashion</h5></li>
                        <li><h5>Art</h5></li>
                        <li><h5>Law</h5></li>
                        <li><h5>Creative</h5></li>
                        <li><h5>General</h5></li>
                    </ul>
                    <ul class="styles">
                        <li><h5>Corporate</h5></li>
                        <li><h5>Charismatic</h5></li>
                        <li><h5>Modern</h5></li>
                        <li><h5>Light Tone</h5></li> 
                        <li><i class="fas fa-chevron-left backbtn"></i></li> 
                    </ul> 
                </div> 
                <div class="hidecont">   
                    <div class="genbtndiv">
                    <span class="genbtn copybtn">Copy</span>
                    <div class="genbtn dlbtn">Download<i class="fas fa-angle-down"></i>
                        <div class="subbtn subbtn1">HTML</div>
                        <div class="subbtn subbtn2">Text</div>
                    </div> 
                    <span class="genbtn editbtn">Edit</span>
                    </div>
                    <span class="hidetitle ht2">Choose a Category</span>
                    <div class="spacerl"></div>
                    <!--***Insert template div***-->
                    <div class="inserttemplate"></div>
                    <div class="donediv">
                        <h3>All Done</h3>
                        <button class="generatebtn"><i class="fas fa-cog"></i> Generate</button> 
                    </div>
                    <span class="prev">Previous</span>
                    <span class="next">Next</span>    
                </div>
        </div>`));   
        var donediv = $('.donediv');
        var generatebtn = $('.generatebtn'); 
        var inserttemplate = $('.inserttemplate');
        var hidecont = $('.hidecont');
        donediv.fadeOut();
        var backbtn = $('.backbtn');
        $('.styles li h5').on('click', function() {
            if(genclick == 0) {
                $('.next, .prev').fadeIn(300);
            }
            inserttemplate.css({'left':'0','width':'500%'});
          hidecont.find('.spacerremoved').addClass('spacerl').removeAttr('style');
            $('.genbtndiv').fadeOut();
            curr = 0;
        });   
          
        $('.categories h5').on('click', function() {
            $('.ht2').html('Choose a Style'); 
            $('.categories').css('opacity','0');  
            setTimeout(function() { $('.categories').css('display','none')},100);
            $('.styles').fadeIn(200);
            p1 = $(this).html();
        }); 
        $('.styles h5').on('click', function() {
            p2 = $(this).html(); 
            $('.ht2').html(p1+' ('+p2+')');
        });        
        $('.backbtn').on('click', function() {
            inserttemplate.remove();
            bindBtn();
            $('.styles').fadeOut(200);
            $('.categories').css('display','block');
            setTimeout(function() { $('.categories').css('opacity','1')},100);
        });  
        var categories = $('.categories');
        var styles = $('.styles');    
        $('.next').on('click', function() {
            if(curr != slidesnum) {
                inserttemplate.css({'left':curr-100+'%'});
                $('.prev').fadeIn(200);
                curr = curr-100; 
            }  
        });
        $('.prev').on('click', function() {
            if(curr != 0) {
                inserttemplate.css({'left':curr+100+'%'});
                curr = curr+100;
            } 
        });      
        
    //Categories Clicks
    categories.find('li:nth-of-type(1)').on('click', function(){
         styles.find('li:nth-of-type(1)').on('click', function() {
             inserttemplate.html(business);
             slidecont.fadeIn(400);
             donediv.fadeIn();
             donediv.appendTo('.slideshow:last-child'); 
             textid = 1; 
             windowwidth = $('.slideshow').length;
             calculateWidth(windowwidth); 
         });  
    });    
    categories.find('li:nth-of-type(2)').on('click', function(){
         styles.find('li:nth-of-type(1)').on('click', function() {
             inserttemplate.html(ecommerce);
             slidecont.fadeIn(400);
             donediv.fadeIn();
             donediv.appendTo('.slideshow:last-child');
             textid = 2;
             windowwidth = $('.slideshow').length;
             calculateWidth(windowwidth); 
         });  
    }); 
    categories.find('li:nth-of-type(3)').on('click', function(){
         styles.find('li:nth-of-type(1)').on('click', function() {
             inserttemplate.html(technology);
             slidecont.fadeIn(400);
             donediv.fadeIn();
             donediv.appendTo('.slideshow:last-child');
             textid = 3;
             windowwidth = $('.slideshow').length;
             calculateWidth(windowwidth);
         });     
    });   
    categories.find('li:nth-of-type(4)').on('click', function(){
         styles.find('li:nth-of-type(1)').on('click', function() {
             inserttemplate.html(test);
             slidecont.fadeIn(400);
             donediv.fadeIn();
             donediv.appendTo('.slideshow:last-child');
             textid = 3;
             windowwidth = $('.slideshow').length;
             calculateWidth(windowwidth);
         });     
    });  
           
    function calculateWidth(windowwidth) {
        inserttemplate.css({'left':'0','width':((windowwidth*100)+100)+'%'});
        slidesnum = (-1*((windowwidth*100)-100)); 
        slidewidth = 100/(windowwidth+1); 
        $('.slideshow').css('width',slidewidth+'%'); 
    }    
     
    generatebtn.on('click', function() { 
        donediv.css('display','none');
        $('.next, .prev').fadeOut(300);
        var genclick = 1;  hidecont.find('.spacerl').removeClass('spacerl').addClass('spacerremoved').attr('style','height:30px');
         
        //display text content based on textid 
        switch(textid) {
            case 1:  
               inserttemplate.html(genbus1); 
            break;
            case 2:
               inserttemplate.html(genecom1); 
            break;
            case 3: 
                inserttemplate.html(gentech1);
            case 4: 
                inserttemplate.html(testq);    
            break;       
        }
        
        inserttemplate.css({'left':'0','width':'100%'});
        $('.genbtndiv').fadeIn(400); 
        $('.editbtn, .doneedit').on('click', function() {
            if($(this).hasClass('editbtn')) {
                $(this).addClass('doneedit').removeClass('editbtn');
                $(this).html('Done');
                $('.gencontentdiv').attr('contenteditable','true').css('border','2px dotted var(--color)');
            } 
            else {
                $(this).removeClass('doneedit').addClass('editbtn');
                $(this).html('Edit');
                $('.gencontentdiv').attr('contenteditable','false').css('border','none');
            }    
        });   
        //download to txt file function
        $('.dlbtn').on('click', function() {
            $('.subbtn').toggle();
        }); 
        subclick = 1;
        $('.subbtn1').click(function() {subclick = 1});
        $('.subbtn2').click(function() {subclick = 2}); 
        $('.subbtn').on('click', function() { saveFile() });
        let saveFile = () => { 
        var data = $('.gencontent').html(); 
        sFileName = '';    
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        if(subclick == 1)
            sFileName = 'about us text.html';	 
        else if(subclick == 2)    
            sFileName = 'about us text.txt';
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click(); 
    }
    
        
    }); 
     
    
    //hide closebtn
    var hiddenbox = $('.hiddenbox');
    $('.closebtn').on('click', function() {
        inserttemplate.remove();
        bindBtn(); 
        box.fadeIn(300); 
        hiddenbox.fadeOut(200); 
        $('.closebtn').fadeOut(200);
        if ($(window).width() < 1320 && $(window).width() > 1220)
            box.css({'width':'32.3%','margin':'0px','cursor':'pointer'});
        else if ($(window).width() < 1220 && $(window).width() > 1080)
            box.css({'width':'33.1%','margin':'0px','cursor':'pointer'});
        else if ($(window).width() < 1080 && $(window).width() > 660)
            box.css({'width':'49.7%','margin':'0px','cursor':'pointer'});
        else if ($(window).width() < 660)
            box.css({'width':'100%','margin':'0px','cursor':'pointer'});
        else 
            box.css({'width':'24%','margin':'5px','cursor':'pointer'});
          
       // window.location.reload();    
    });  
            
        
         $('.next, .prev').fadeOut();
         $('.copybtn').on('click', function() {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($('.gencontent').text()).select();
            document.execCommand("copy");
            $temp.remove(); 
            $(this).html('Copied!');
            setTimeout(function() {
                $('.copybtn').html('Copy');
            },2000);
        });
      
        
      
});      
} 
bindBtn();    
   
    
     
boxnot.on('click', function() {
    $(this).find('form').fadeIn(200).css('top','0px');
});    

var mobclick = 0;    
$('.getstarted, .mobgetstarted').on('click', function() {
    mobslide.css({'height':'0px','box-shadow':'none'});
    mobclick = 0;
});
   
     
$(document).scroll(function() {
    if ($(document).scrollTop() >= 1) {
        navbar.css({'position':'fixed','height':'60px','background':'#fafafa','box-shadow':'0 1px 3px rgba(0,0,0,.1)'}); 
        logo.find('img').css({'height':'45px','top':'27px'});
        logo.css('top','-17px');
        navbar.find('.menu').css({'top':'17px'});
        navbtns.css({'top':'17px'});
        mobslide.css({'top':'60px','background':'#fafafa'});
    } 
    else { 
        navbar.css({'position':'fixed','height':'100px','background':'#ebeff2','box-shadow':'none'}); 
        logo.find('img').css({'height':'70px','top':'15px'});
        logo.css('top','10px');
        navbar.find('.menu').css({'top':'45px'});
        navbtns.css({'top':'47px'});
        mobslide.css({'top':'100px','background':'#ebeff2'});
  }
});    
      
   

mobbtn.on('click', function() {
    if(mobclick == 0) {
        mobslide.css({'height':'370px','box-shadow':'0 1px 3px rgba(0,0,0,.2)'});
        mobclick = 1;
    }
    else {
        mobslide.css({'height':'0px','box-shadow':'none'});
        mobclick = 0;
    }
});    
    


gencomp2.on('click', function() { 
    comp.not(comp2).fadeOut(0);
    setTimeout(function() {comp2.fadeIn(0)},100);
}); 
gencomp3.on('click', function() { 
    comp.not(comp3).fadeOut(0);
    setTimeout(function() {comp3.fadeIn(0)},100);
}); 
gencomp4.on('click', function() { 
    comp.not(comp4).fadeOut(0);
    setTimeout(function() {comp4.fadeIn(0)},100);
});     
    
var comp4click = 0;    
$('.comp4start').on('click', function() {
    if(comp4click == 0) {
        $('.comp4 form').fadeIn(500);
        $(this).html('Close');
        comp4click = 1;
    }
    else {
        $('.comp4').fadeOut(500);
        $('.comp4 form').fadeOut(0);
        $(this).html('Get Started');
        comp4click = 0;
    }
});  
      
$('.compappbtn').on('click', function() {
    comp.fadeOut(500);
});    
 
     
  
appcateg.find('h5').append($('<i class="fas fa-caret-right"></i>'));    

var h5click = 0;    
appcateg.find('h5').on('click', function() {
    if(h5click == 0) {
        $(this).siblings('ul').css('height','200px');
        $(this).find('i').css('transform','rotate(90deg)');
        h5click = 1;
    }
    else {
        $(this).siblings('ul').css('height','0px');
        $(this).find('i').css('transform','rotate(0deg)');
        h5click = 0;
    }
});     
     
appcateg.find('h6').on('click', function() {
    $(this).css({'background':'#f5f5f5','color':'#333'});
    appcateg.find('h6').not(this).css({'background':'','color':'#aaa'});
});     
    
$('.comp3close').on('click', function() {
    comp3.fadeOut(100);
});       
   
          
$('.compform').on('submit', compformSubmit);
$('.mainform').on('submit', mainformSubmit);  
$('.subsform').on('submit', subsformSubmit); 
    
  function compformSubmit(event) {
    event.preventDefault();    
    if(!$('.compform input[type|="email"]').val()) {
        $('.errormsg').fadeIn(300);
        setTimeout(function() {$('.errormsg').fadeOut(300)},3000);
    }
    else {   
    var target = $(event.target);
    var formData = {
      'name': target.find('input[name="name"]').val(),
      'mail': target.find('input[name="mail"]').val(),
      'type': target.find('input[name="type"]').val(),
      'selects': target.find('select[name="selects"]').val(), 
      'info': target.find('textarea[name="info"]').val(),           
      'submit': true
    };  
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: 'compform.php', // the url where we want to POST
        data: formData, // our data object
        dataType: 'json', // what type of data do we expect back from the server
      })
      .done(function(data) {
        console.log(data);
      })
      .always(function(jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus); 
      });
       
      $('.compform .success').fadeIn();
      setTimeout(function() {
          $('.compform .success').fadeOut();
      },5000);
    }
  }  

function mainformSubmit(event) { 
    
    event.preventDefault();
    if(!$('.mainform input[type|="email"]').val()) {
        $('.errormsg').fadeIn(300);
        setTimeout(function() {$('.errormsg').fadeOut(300)},3000);
    }
    else {    
    var target = $(event.target);
    var formData = {
      'name': target.find('input[name="name"]').val(),
      'mail': target.find('input[name="mail"]').val(),
      'info': target.find('textarea[name="info"]').val(),           
      'submit': true
    }; 
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: 'mainform.php', // the url where we want to POST
        data: formData, // our data object
        dataType: 'json', // what type of data do we expect back from the server
      })
      .done(function(data) {
        console.log(data);
      })
      .always(function(jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus); 
      }); 
       
      $('.s3 .success').fadeIn();
      setTimeout(function() {
          $('.s3 .success').fadeOut();
      },5000);
    } 
  }      
     
function subsformSubmit(event) {
event.preventDefault();
if(!$('.subsform input[type|="email"]').val()) {
        $('.subsmsg').html('<div class="success2">Please enter a valid email.</div>');
      setTimeout(function() {
          $('.subsmsg').html(''); 
      },5000);
    }
else {    
    var target = $(event.target);
    var formData = {
      'mail': target.find('input[name="subemail"]').val(),          
      'submit': true
    }; 
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: 'subscribe.php', // the url where we want to POST
        data: formData, // our data object
        dataType: 'json', // what type of data do we expect back from the server
      })
      .done(function(data) {
        console.log(data);
      })
      .always(function(jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus); 
      });

      $('.subsmsg').html('<div class="success2">Thank you for subscribing!</div>');
      setTimeout(function() {
          $('.subsmsg').html('');
      },5000);
    } 
}    
          
    
var accord = $('.accordion');
accord.append($('<i class="fas fa-caret-right panelcaret"></i>'));     
for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;    
    } 
    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }); 
}    
    
var accclick = 0;    
accord.on('click', function() {
    if(accclick == 0) {
        $(this).find('i').css('transform','rotate(90deg)');
        accclick = 1;   
    }
    else {
        $(this).find('i').css('transform','rotate(0deg)');
        accclick = 0;
    }
});   
    
     
      
    
 
    
    
    
    
});


