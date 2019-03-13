import {initScene} from "../initScene";
import {animationUnit} from "./animationUnit";
import {animationCar} from "./animationCar";
import {keyboard} from "./keyConf";


class MainAnim {
    constructor () {

    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        animationUnit.animate();
        animationCar.animate();

        (initScene.composerActive) ? initScene.composer.render() : initScene.render();
    }


}

let mainAnim = new MainAnim();

export {
    mainAnim
}