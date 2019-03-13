import {car} from "../gameObj/car";
import {keyEnter, animationUnit} from "./animationUnit";
import {keyboard, keyListener} from "./keyConf";
import {triggerEnter} from "./triggerEnter";
import {initScene} from "../initScene";
import {tree} from "../gameObj/tree";
import {unit} from "../gameObj/unit";
import {servSide} from "../serverSide";

let wheel = {
    mass : 100,
    radius : 100,
    axleRadius : 30,
    deltaRot : 1.3,
    dragCoff : 0.2,
    rotation : 0,
};

let keyboard37 = false, keyboard39 = false;
let blind = document.getElementById('blind');
let reloadGame = false;

class AnimationCar {

    constructor() {
        this.currSprSmoke = 0;
    }

    moveCar(bool, mult1) {
        if(bool) {
            if (wheel.deltaRot >= 0.5) {
                wheel.deltaRot = wheel.deltaRot - ((0.5 * Math.pow(wheel.deltaRot * wheel.axleRadius,2) * wheel.dragCoff) / wheel.mass) / wheel.axleRadius;
            }
        } else wheel.deltaRot = wheel.deltaRot + ((0.5 * Math.pow(wheel.deltaRot * wheel.axleRadius,2) * wheel.dragCoff) / wheel.mass) / wheel.axleRadius;

        car.sprCar.position.x = car.sprCar.position.x + mult1 * (1.3/6 - wheel.deltaRot/6);

        for (let i = 0; i < car.sprCar.children.length-1; i++) {
            car.sprCar.children[i].material.rotation = car.sprCar.children[i].material.rotation + (1.3/6 - wheel.deltaRot/6);
            car.sprCar.children[i].position.x = -0.23 + car.sprCar.position.x * 0.002 + i/1.9;
        }
    }

    endReloadGame() {
        reloadGame = false;
        initScene.composerActive = false;
        car.startPosition();
        unit.startPosition();
        tree.visible(false);
        keyListener.setKeyboardList(true);
        animationUnit.setKeyEnter(false);

        blind.style.paddingTop = '0%';
        blind.style.color = '';
        blind.style.paddingLeft = '';
        blind.style.fontSize = '';

    }

    animate() {
        if (car.sprCar.position.x >= 14.5){
            blind.style.paddingTop = '10%';
            blind.style.color = 'white';
            blind.style.paddingLeft = '30%';
            blind.style.fontSize = '10em';
            initScene.composerActive = true;
            keyListener.setKeyboardList(false);
            if (!reloadGame) {
                servSide.ws.send(JSON.stringify({
                    commandName: 'setResultGame',
                    value: 'false'
                }));
                reloadGame = true;
                setTimeout( () => {
                        this.endReloadGame()
                }
                    , 3000);

            }
        }

        if (triggerEnter.enterGarageCar()) {
            if (wheel.deltaRot <= 1.3 && wheel.deltaRot >= 1.2) {
                initScene.composerActive = true;
                keyListener.setKeyboardList(false);
                if (!reloadGame) {
                    reloadGame = true;
                    servSide.ws.send(JSON.stringify({
                        commandName: 'setResultGame',
                        value: 'true'
                    }));
                    setTimeout( () => {
                            this.endReloadGame()
                        }
                        , 3000);
                }
            }
        }

        if (keyEnter === null) {
            car.sprCar.children[2].visible = true;
            if (this.currSprSmoke >= 19 ) this.currSprSmoke = 0;
            car.sprCar.children[2].material.map = car.spriteSmoke[this.currSprSmoke++];
        }

        if (keyboard[37]) {
            if (keyEnter === null) {
                if (!keyboard39) {
                    keyboard37 = true;
                    this.moveCar(true, -1);
                } else {
                    if (wheel.deltaRot <= 1.3) {
                        this.moveCar(false, 1);
                    } else keyboard39 = false;
                }

            }
        }

        if (!keyboard[37] && !keyboard[39]) {
            if (keyEnter === null) {
                if (keyboard39) {
                    if (wheel.deltaRot <= 1.3) {
                        this.moveCar(false, 1);
                    } else keyboard39 = false;
                }
                if (keyboard37) {
                    if (wheel.deltaRot <= 1.3) {
                        this.moveCar(false, -1);
                    } else keyboard37 = false;
                }
            }
        }

        if (keyboard[39]) {
            if (keyEnter === null) {
                if (!keyboard37) {
                    keyboard39 = true;
                    this.moveCar(true, 1);
                } else {
                    if (wheel.deltaRot <= 1.3) {
                        this.moveCar(false, -1);
                    } else keyboard37 = false;
                }
            }
        }
    }
}

let animationCar = new AnimationCar();

export {
    animationCar,
    wheel
}