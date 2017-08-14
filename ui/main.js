console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value boss';

var img = document.getElementById('img');
var marginLeft =0;
function moveRight()
{
marginLeft = margineLeft+ 10;
img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
    
};
