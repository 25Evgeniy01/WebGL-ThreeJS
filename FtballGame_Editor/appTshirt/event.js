/**
 * Created by vzorv on 12.09.2017.
 */
let playerEvent = new ModelPlayer();
document.getElementById('buttonRotationPlayerFirstRight').addEventListener('click', function() { playerRotationRightBoolean = true}, false);
document.getElementById('buttonRotationPlayerFirstLeft').addEventListener('click', function() { playerRotationLeftBoolean = true}, false);

document.getElementById('buttonRotationPlayerSecondRight').addEventListener('click', function() { playerRotationSecondRightBoolean = true}, false);
document.getElementById('buttonRotationPlayerSecondLeft').addEventListener('click', function() { playerRotationSecondLeftBoolean = true}, false);


document.getElementById('firstColor').addEventListener('click', function() {if(firstColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = true; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('secondColor').addEventListener('click', function() {if(secondColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = true; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('thirdColor').addEventListener('click', function() {if(thirdColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = true; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('fourthColor').addEventListener('click', function() {if(fourthColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = true; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('fivesColor').addEventListener('click', function() {if(fivesColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = true; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('sixColor').addEventListener('click', function() {if(sixColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = true; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('sevenColor').addEventListener('click', function() {if(sevenColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = true; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('eightColor').addEventListener('click', function() {if(eightColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = true; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('nineColor').addEventListener('click', function() {if(nineColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = true; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('tenColor').addEventListener('click', function() {if(tenColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = true; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('elevenColor').addEventListener('click', function() {if(elevenColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = true; twelweColorBoolean = false; thirteenColorBoolean = false;}}, false);
document.getElementById('twelweColor').addEventListener('click', function() {if(twelweColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = true; thirteenColorBoolean = false;}}, false);
document.getElementById('thirteenColor').addEventListener('click', function() {if(thirteenColorBooleanS === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBoolean = false; secondColorBoolean = false; thirdColorBoolean = false; fourthColorBoolean = false; fivesColorBoolean = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = true;}}, false);


document.getElementById('firstColorS').addEventListener('click', function() {if(firstColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = true; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('secondColorS').addEventListener('click', function() {if(secondColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = true; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('thirdColorS').addEventListener('click', function() {if(thirdColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = true; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('fourthColorS').addEventListener('click', function() {if(fourthColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = true; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('fivesColorS').addEventListener('click', function() {if(fivesColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = true; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('sixColorS').addEventListener('click', function() {if(sixColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = true; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('sevenColorS').addEventListener('click', function() {if(sevenColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = true; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('eightColorS').addEventListener('click', function() {if(eightColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = true; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('nineColorS').addEventListener('click', function() {if(nineColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = true; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('tenColorS').addEventListener('click', function() {if(tenColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = true; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('elevenColorS').addEventListener('click', function() {if(elevenColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = true; twelweColorBooleanS = false; thirteenColorBooleanS = false;}}, false);
document.getElementById('twelweColorS').addEventListener('click', function() {if(twelweColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = true; thirteenColorBooleanS = false;}}, false);
document.getElementById('thirteenColorS').addEventListener('click', function() {if(thirteenColorBoolean === false && (activeWindowGetrs === true || activeWindowShorts === true || activeWindowTshirt === true)) {firstColorBooleanS = false; secondColorBooleanS = false; thirdColorBooleanS = false; fourthColorBooleanS = false; fivesColorBooleanS = false; sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = true;}}, false);

document.addEventListener('click', playerEvent.clickPlayer, false);

document.getElementById('saveButtonInput').addEventListener('click', playerEvent.outputInformation, false);

document.getElementById('firstButtonRotation').addEventListener('click', function() { colorTshirtSecondPlayer = true; activeWindowSecond = false; firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false; fivesColorBoolean = false; fivesColorBooleanS = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false; activeWindowFirst = true; colorShorts = false; colorShirt = false; colorGetrs = false;}, false);
document.getElementById('secondButtonRotation').addEventListener('click', function() {colorTshirtSecondPlayer = true; activeWindowFirst = false; firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false; fivesColorBoolean = false; fivesColorBooleanS = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false; activeWindowSecond = true; colorShorts = false; colorShirt = false; colorGetrs = false;}, false);
document.getElementById('t-shirt').addEventListener('click', function() {colorShirt = false; if (activeWindowShorts === true || activeWindowGetrs === true) {firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false; fivesColorBoolean = false; fivesColorBooleanS = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false; colorShirt = false;}  activeWindowTshirt = true; activeWindowShorts = false; activeWindowGetrs = false; });//
document.getElementById('shorts').addEventListener('click', function() {colorShorts = false; if (activeWindowGetrs === true || activeWindowTshirt === true) {firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false; fivesColorBoolean = false; fivesColorBooleanS = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false; colorShorts = false;}  activeWindowTshirt = false; activeWindowShorts = true; activeWindowGetrs = false; });//
document.getElementById('getrs').addEventListener('click', function () {colorGetrs = false; if (activeWindowShorts === true || activeWindowTshirt === true) {firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false; fivesColorBoolean = false; fivesColorBooleanS = false; sixColorBoolean = false; sevenColorBoolean = false; eightColorBoolean = false; nineColorBoolean = false; tenColorBoolean = false; elevenColorBoolean = false; twelweColorBoolean = false; thirteenColorBoolean = false;sixColorBooleanS = false; sevenColorBooleanS = false; eightColorBooleanS = false; nineColorBooleanS = false; tenColorBooleanS = false; elevenColorBooleanS = false; twelweColorBooleanS = false; thirteenColorBooleanS = false; colorGetrs = false; } activeWindowTshirt = false; activeWindowShorts = false; activeWindowGetrs = true; });//

/*
//клик на футболке
document.getElementById('tshirt1').addEventListener('click', function() {activeWindowTshirt = true; activeWindowShorts = false; activeWindowGetrs = false});
document.getElementById('short1').addEventListener('click', function() {activeWindowTshirt = false; activeWindowShorts = true; activeWindowGetrs = false});
document.getElementById('getr1').addEventListener('click', function () {activeWindowTshirt = false; activeWindowShorts = false; activeWindowGetrs = true});
*/


document.getElementById('getrsLeft').addEventListener('click', function() {colorGetrs = false; if (countGetrs === 0) countGetrs = 1; else countGetrs = 0;});
document.getElementById('getrsRight').addEventListener('click', function() {colorGetrs = false; if (countGetrs === 0) countGetrs = 1; else countGetrs = 0;});

document.getElementById('shortsLeft').addEventListener('click', function() {colorShorts = false; if(countShorts === 1) {if (firstColorBoolean !== true) {firstColorBooleanS = true} else secondColorBooleanS = true;} if (countShorts === 0) countShorts = 1; else countShorts = 0;});
document.getElementById('shortsRight').addEventListener('click', function() {colorShorts = false; if(countShorts === 1) {if (firstColorBoolean !== true) {firstColorBooleanS = true} else secondColorBooleanS = true;} if (countShorts === 0) countShorts = 1; else countShorts = 0;});

document.getElementById('tshirtRight').addEventListener('click', function() {colorShirt = false; if(countTshirt === 0) {if (firstColorBoolean !== true) {firstColorBooleanS = true} else secondColorBooleanS = true;} countTshirt++; if (countTshirt === 4) countTshirt = 0;});
document.getElementById('tshirtLeft').addEventListener('click', function() {colorShirt = false; if(countTshirt === 0) {if (firstColorBoolean !== true) {firstColorBooleanS = true} else secondColorBooleanS = true;} countTshirt--; if (countTshirt === -1) countTshirt = 3;});
