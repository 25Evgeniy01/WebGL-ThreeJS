/**
 * Created by vzorv on 12.09.2017.
 */

//массив материалов футболки
    let massTshirt = [1, 18, 19, 20];
    let massGetr = [5 ,6];
    let massShort = [2, 3];
//начальная считка цвета
    let colorShirt = false, colorShorts = false, colorGetrs = false, colorTshirtSecondPlayer = false;

//appTshirt.js
    let numberPl, numberPl1;
        //test
    let countGetrs = 0;
    let countShorts = 0, countTshirt = 0;
    let playerForm = [];

    let model;

    let keyboard = {};
    let scene, camera, renderer;
    let cameraSpeed = { height: 1.8, speed: 0.7, turnSpeed: Math.PI*0.02 };
    let canvas;

//model.js
    let materials = [], geometry = [], player = [], mixer = [] , clock = [];

    let animationsStart = [];
    let playerRotationRightBoolean = false, playerRotationLeftBoolean = false;
    let firstColorBoolean = false, secondColorBoolean = false,  thirdColorBoolean = false, fourthColorBoolean = false ;
    let firstColorBooleanS = false, secondColorBooleanS = false,  thirdColorBooleanS = false, fourthColorBooleanS = false ;
    let fivesColorBoolean = false, sixColorBoolean = false, sevenColorBoolean = false, eightColorBoolean = false, nineColorBoolean = false, tenColorBoolean = false, elevenColorBoolean = false, twelweColorBoolean = false, thirteenColorBoolean = false;
    let fivesColorBooleanS = false, sixColorBooleanS = false, sevenColorBooleanS = false, eightColorBooleanS = false, nineColorBooleanS = false, tenColorBooleanS = false, elevenColorBooleanS = false, twelweColorBooleanS = false, thirteenColorBooleanS = false;
    let lengthMass = 0, enterClickPlayer = -1;
    let objects = [], clickObject = [];

    let playerRotationSecondRightBoolean, playerRotationSecondLeftBoolean;
    let activeWindowFirst, activeWindowSecond;
    let activeWindowTshirt , activeWindowShorts, activeWindowGetrs;






