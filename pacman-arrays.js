var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are '+ ghosts.length + ' ghosts.');

var inky = {};
inky.color = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};

console.log(ghosts);

console.log(ghosts.inky);
console.log(ghosts.blinky);
console.log(ghosts['inky']);
console.log(ghosts['blinky']);

var ghostName = 'clyde';
console.log(ghosts[ghostName]);







// ghosts = (Inky Blinky Pinky Clyde)
// ghosts.each do |ghost|
//   puts ghost
// end
