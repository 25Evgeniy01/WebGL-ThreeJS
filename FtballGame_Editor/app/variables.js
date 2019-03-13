/**
 * Created by vzorv on 29.08.2017.
 */


//игрок с мячем который отдает пас в app.js
let variableGetPass = false, playerWithBallGetPass, variableGetPass1 = true;

//какой игрок бьет
let playerShotServer;

//button START for server-player
let buttonStartF = [], buttonStartS = [];
let arrowRotationServer = [];
let shotPlayerAnimationStart = false, playerNumberAnim;

let massStBar = [], nMassStBar = 0;

let socket = io(); let testNode, testNode1, testNode2;

let ab;

let playerWithBall;

let playerForm = [];

let box, test, testFunctionChange = false;
let clock = [], clockS = [], lengthMass = 0;
for (let i = 0; i < 10; i++) {
    clock[i] = new THREE.Clock;
    clockS[i] = new THREE.Clock;
}

let change = false, changeNext = false, changePassAndShot = false, changeNextPassAndShot = false, enterGiveShotValue = false, shotPlayer = false, enterClickOnTheObjectValueShot1 = false, changePositionClick011Next1 = false, changePositionClick011Next = [];
let arrow = [], circleStartPositionPlayerX = [], circleStartPositionPlayerZ = [], changePlayerPositionX = [], changePlayerPositionZ = [], changePositionClick2 = [];

let meshBPositionXGetPass, meshBPositionZGetPass, playerGetPassX, playerGetPassZ, vaChangePlayerPosition = [], vbChangePlayerPosition = [], vaChangePlayerPosition1 = [], vbChangePlayerPosition1 = [], changePositionArrow, changePositionArrowLoad;
let vaGetPassAndShot, vbGetPassAndShot, meshBPositionXGetPassAndShot, meshBPositionZGetPassAndShot, playerGetPassXAndShot, playerGetPassZAndShot, shotActive = false;
let shotPlayerAnimation = false, shotPlayerAnimation1 = true, shotArrow, shotArrow1, shotArrowLoad, giveShotPointX, giveShotPointZ, meshBPositionXGiveShot, meshBPositionZGiveShot, vaGiveShot, vbGiveShot;
let givePassArrow1, enterGivePassValue = false, enterClickOnTheObjectValue = false, givePassPointZ, givePassPointX, meshBPositionXGivePass, meshBPositionZGivePass, vaGivePass, vbGivePass, givePassArrow, givePassArrowLoad, enterGivePassValueApp = false, enterGivePassValueApp1 = false;//Пас


