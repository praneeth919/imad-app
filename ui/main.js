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


// Counter code
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
    request.open('GET', 'http://praneeth919.imad.hasura-app.io/counter',true);
    request.send(null);
};

*/

//Submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          
          
          //Take some action
          if(request.status === 200){
              
          alert('logged in successfully');
          } else if(request.status===403) {
            alert('Username/password is incorrect');
            } else if(request.status===500){
                alert('Something went wrong on the server');
            }
            }
        //Not done yet
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://praneeth919.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};