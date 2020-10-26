let warmHugs = `Hi, I'm Olaf and I like warm hugs.`;
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace(`like`, `love`);
console.log(warmHugs);

let beenImpaled = `Oh, look at that. I've been impaled.`
console.log(beenImpaled.slice(-18));

let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

console.log(Math.PI);
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

console.log("Let It Go! ".toUpperCase().repeat(2));

let turtleButts = "Bright side? Turtles can breathe through their butts";
console.log(turtleButts.replace(/ /g, "_"));

let newRandomNumber = Math.floor(Math.random() * 17) + 7;
console.log(newRandomNumber);