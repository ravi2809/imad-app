var button = document.getElementById('counter');
button.onclick = function(){
    
    //create a request
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if( request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    
    //Make the request
    request.open('GET','http://guptaravi2809.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit name


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    var nameInput = document.getElementById('name');
var name = nameInput.value;
    
     var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if( request.status === 200) {
                
                var names = request.responseText;
                names = JSON.parse(names);
     var list = '';
     for(var i =0; i<names.length; i++)
     {
         list += '<li>'+names[i]+'</li>';
     }
    
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
               
            }
        }
    }
    
    //Make the request
    request.open('GET','http://guptaravi2809.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null);
};
     
    
    
