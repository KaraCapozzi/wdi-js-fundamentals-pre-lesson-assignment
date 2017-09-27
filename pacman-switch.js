var ghost = 'Inky';
var color;

switch (ghost) {
  case 'Inky':
    color = 'Cyan';
    break;
  case 'Blinky':
    color = 'Red';
    break;
  case 'Pinky':
    color = 'Pink';
    break;
  case 'Clyde':
    color = 'Orange';
    break;
}

console.log(ghost + ' is the color ' + color);



// Named function
function eatDot() {
  console.log("MUNCH!");
}

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly
var eatDot = function() {
  console.log("MUNCH!");
}
