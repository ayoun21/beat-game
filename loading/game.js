var gameName = "BANJO FEST";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var Colors = [red, orange, green, blue, purple];

/*global drawName*/
drawName(gameName, Colors);

if(10 < 3)
{   
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}
 /*global bounceBubbles*/
bounceBubbles();