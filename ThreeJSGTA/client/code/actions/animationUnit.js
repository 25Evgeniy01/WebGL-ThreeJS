import {unit} from "../gameObj/unit";
import {keyboard} from "./keyConf";
import {triggerEnter} from "./triggerEnter";
import {initScene} from "../initScene";
import {audio} from "../interface/audio";
import {tree} from "../gameObj/tree";

let keyEnter = false;


class AnimationUnit {
    constructor() {
        this.currMoveSpr = 0;
        this.currDeathSpr = 0;
    }

    setKeyEnter (value) {
        keyEnter = value;
    }

    animate() {

        if (this.currMoveSpr >= 25) this.currMoveSpr = 0;

        if (this.currDeathSpr >= 20 && keyEnter) {
            //initScene.scene.remove(unit.sprUnit);

            unit.sprUnit.visible = false;

            keyEnter = null;
            initScene.composerActive = false;
            audio.sound.play();
        }

        if (keyboard[37]) { //left
            if (keyEnter !== null) {
                unit.sprUnit.position.x -= 0.1;
                unit.sprUnit.material.map = unit.sprMove270[this.currMoveSpr++];
            }
        }
        if (keyboard[38]) { //up
            if (keyEnter !== null) {
                unit.sprUnit.position.y += 0.1;
                unit.sprUnit.material.map = unit.sprMove180[this.currMoveSpr++];
            }
        }
        if (keyboard[39]) { //right
            if (keyEnter !== null) {
                unit.sprUnit.position.x += 0.1;
                unit.sprUnit.material.map = unit.sprMove270[this.currMoveSpr++];
            }
        }
        if (keyboard[40]) { //down
            if (keyEnter !== null) {
                unit.sprUnit.position.y -= 0.1;
                unit.sprUnit.material.map = unit.sprMove180[this.currMoveSpr++];
            }
        }



        if (triggerEnter.enterUnitCar() && keyEnter === false) {
            keyEnter = true;
            initScene.composerActive = true;
            tree.visible(true);
        }



        if (keyEnter) unit.sprUnit.material.map = unit.sprDeath[this.currDeathSpr++];

    }
}

let animationUnit = new AnimationUnit();

export {
    keyEnter,
    animationUnit
}