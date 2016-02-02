$(document).ready(function()
{
//Function to generate random color code
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 
function change_random_bgcolor(change_time) {
setInterval(function change_color() {
    $(".pretty-colors").animate({
        backgroundColor: getRandomColor()
    }, 500);
}, change_time);
}
change_random_bgcolor(1500);
});
