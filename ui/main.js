/*
console.log('Loaded!');

// Change the text of the main text div
var element= document.getElementById('main-text');

element.innerHTML= 'New Value';

// Move the image
var img = document.getElementById('lol');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft +5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick= function() {
    var interval = setInterval(moveRight,50);
};
*/

var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        
        }
    };
    
    //Make the request
    request.open('GET', 'http:/praneeth919.imad.hasura-app.io/counter',true);
    requests.send(null);
};