var image = document.getElementById("img_display");

var pictures = new Array(
    './images/0001.webp',
    './images/0002.webp',
    './images/0003.webp',
    './images/0004.webp',
    './images/0005.webp',
    './images/0006.webp',
    './images/0007.webp',
    './images/0008.webp',
    './images/0009.webp',
    './images/0010.webp',
    './images/0011.webp',
    './images/0012.webp',
    './images/0013.webp',
    './images/0014.webp',
    './images/0015.webp',
    './images/0016.webp',
    './images/0017.webp',
    './images/0018.webp',
    './images/0019.webp',
    
)

window.onload = function(){
    for (var i in pictures) {
        var display_image = document.createElement('img');
        display_image.style.width = '100px';
        display_image.style.height = '150px';
        display_image.style.justifyContent = 'left';
        display_image.style.padding = '30px';
        display_image.src = pictures[i];
        image.appendChild(display_image);
    }
}