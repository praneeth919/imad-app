console.log('Loaded!');

// Change the text of the main text div
var element= document.getElementById('main-text');

element.innerHTML= 'New Value';

// Move the image
var img = document.getElementById('lol');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft +5;
    img.style.marginLleft = marginLeft + 'px';
}
img.onclick= function() {
    var interval = setInterval(moveRight,50);
};