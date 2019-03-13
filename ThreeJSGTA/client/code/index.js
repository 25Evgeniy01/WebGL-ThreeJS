import {initScene} from './initScene';
import {car} from "./gameObj/car";
import {unit} from "./gameObj/unit";
import {garage} from "./gameObj/garage";
import {keyListener} from "./actions/keyConf";
import {mainAnim} from "./actions/animation";
import {interface1} from "./interface/interface";
import {tree} from "./gameObj/tree";

import {servSide} from "./serverSide";

import {audio} from "./interface/audio";

class InitClass {

    constructor() {

        initScene.loadScene();
        initScene.loadRender();
        initScene.loadLight();
    }

    initialize() {

        car.loadCar();
        unit.loadUnit();
        garage.loadGarage();
        mainAnim.animate();
        interface1.slider();
        interface1.btnListener();
        interface1.eventListener();
        tree.load();
        audio.load();

        servSide.webSocket();
    }



}

let init = new InitClass();

window.addEventListener('keydown', keyListener.keyDown);
window.addEventListener('keyup', keyListener.keyUp);

window.onload = init.initialize();



