console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value boss';

var img = document.getElementById('img');
var marginLeft =0;
var flag =0;
function moveRight()
{
marginLeft = marginLeft+ 10;
img.style.marginLeft = marginLeft + 'px';
}

function moveLeft()
{
marginLeft = marginLeft- 10;
img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    if (img.style.marginLeft <= '1000px')
    {
    var interval = setInterval(moveRight,50);
    }
    else 
    var interval2 = setInterval(moveLeft,50);
    
};
