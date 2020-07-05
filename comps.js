$(document).ready(function() {
        
//Text Generator App 
           
     
business = $(`<div class="slidecont">
        <div class="slideshow">
            <h3>What is your company title?</h3>
            <input type="text" gentitle="title">
        </div>
        <div class="slideshow">
            <h3>What is your company's field of operation?</h3>
            <input type="text" gentitle="field">
        </div> 
        <div class="slideshow">
            <h3>When was your company founded?</h3>
            <input type="text" gentitle="founded">
        </div>
        <div class="slideshow">

        </div>
    </div>`);        
ecommerce = `
    <div class="slidecont">
        <div class="slideshow">
            <h3>What is your online store name?</h3>
            <input type="text" gentitle="title">
        </div>
        <div class="slideshow">
            <h3>What type of products do you sell?</h3>
            <input type="text" gentitle="products">
        </div> 
        <div class="slideshow">
            <h3>When was your company founded?</h3>
            <input type="text" gentitle="founded">
        </div>
        <div class="slideshow">
 
        </div>
    </div>
`;     
technology = `
    <div class="slidecont">
        <div class="slideshow">
            <h3>What is your company title?</h3>
            <input type="text" gentitle="title">
        </div>
        <div class="slideshow">
            <h3>What type technology do you develop?</h3>
            <input type="text" gentitle="tech">
        </div> 
        <div class="slideshow">
            <h3>Who does your company cator to?</h3>
            <input type="text" gentitle="cator">
        </div>
        <div class="slideshow">
            <h3>When was your company founded?</h3>
            <input type="text" gentitle="founded">
        </div>
        <div class="slideshow">
            
        </div>
    </div>
`;
test = `
    <div class="slidecont">
        <div class="slideshow">
            <h3>What is your test?</h3>
            <input type="text" gentitle="test0">
        </div>
        <div class="slideshow"> 
            <h3>What type technology do you develop?</h3>
            <input type="text" gentitle="test1">
        </div> 
        <div class="slideshow">
            <h3>Who does your company cator to?</h3>
            <input type="text" gentitle="test2">
        </div>
        <div class="slideshow">
            <h3>When was your company founded?</h3>
            <input type="text" gentitle="test3">
        </div>
        <div class="slideshow">
            <h3>What is your company test?</h3>
            <input type="text" gentitle="test4">
        </div>
        <div class="slideshow">
            
        </div>
    </div>
`;    
      
//inputs vars 
    
     
       
genbus1 = function() {        
title = $('input[gentitle="title"]').val();
field = $('input[gentitle="field"]').val();
founded = $('input[gentitle="founded"]').val(); 
var gentext = $('<div class="gencontentdiv"><h5>'+p1+'</h5><p class="gencontent">At '+title+', we are a creative and motivated team focused on precision. A combination of sharp marketers, and skilled SEOs working together with a powerful salesforce is what pushes our company forward.<br><br>Our main area of focus is '+field+', and we represent it with over 100 ethusiastic individuals that make up '+title+' Our clients expect the very best, which is why we are relentless in improving and reinventing our techniques to better serve our clients.<br><br>'+title+' has been offering the best marketing advice and services since '+founded+'. At that time '+title+' only provided small consulting services in '+field+'. Since our founding days, we have kept our promise of offering the same high quality as when we started.</p></div>');   
return gentext;    
} 
genecom1 = function() {   
title = $('input[gentitle="title"]').val();
products = $('input[gentitle="products"]').val();
founded = $('input[gentitle="founded"]').val();    
var gentext = $('<div class="gencontentdiv"><h5>'+p1+'</h5><p class="gencontent">Ecommerce Text Content... Products: '+products+', Company: '+title+'</p></div>');   
return gentext;     
}   
gentech1 = function() {   
title = $('input[gentitle="title"]').val();
tech = $('input[gentitle="tech"]').val();
cator = $('input[gentitle="cator"]').val();
founded = $('input[gentitle="founded"]').val();    
var gentext = $('<div class="gencontentdiv"><h5>'+p1+'</h5><p class="gencontent">Technology Text Content... Tech: '+tech+', Company: '+title+', Cator to: '+cator+'</p></div>');   
return gentext;    
}    
testq = function() {   
test1 = $('input[gentitle="test1"]').val();  
var gentext = $('<div class="gencontentdiv"><h5>'+p1+'</h5><p class="gencontent">Technology Text Content... Tech: '+test1+'</div>');   
return gentext;    
} 
       
       
    
//Page Generator App    
    
appcateg.find('.selects:nth-of-type(1) li:nth-of-type(1)').on('click', function() {
    apppool.html(`
        <a href="components/creative/about1.html" download></a>
        <a href="components/creative/about2.html" download></a>   
    `);
    apppool.find('a').html($('<img src="https://img.icons8.com/cute-clipart/64/000000/about.png"/><h4>About Page</h4>'));
}); 
appcateg.find('.selects:nth-of-type(1) li:nth-of-type(2)').on('click', function() {
    apppool.html(`
        <a href="components/creative/team1.html" download></a>   
    `);
    apppool.find('a').html($('<img src="https://img.icons8.com/cute-clipart/64/000000/crowd.png"/><h4>Team Page</h4>'));
});
appcateg.find('.selects:nth-of-type(1) li:nth-of-type(3)').on('click', function() {
    apppool.html(`
        <a href="components/creative/home1.html" download></a>
        <a href="components/creative/home2.html" download></a>
    `);
    apppool.find('a').html($('<img src="https://img.icons8.com/cute-clipart/64/000000/home.png"/><h4>Home Page</h4>'));
});    
     
        
slidecont = $('.slidecont');  
    
    
    
    
});