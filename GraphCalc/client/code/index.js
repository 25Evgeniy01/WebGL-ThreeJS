import {initScene} from './initScene';
import {keyListener} from "./actions/keyConf";
import {mainAnim} from "./actions/animation";

//interface
import {interf} from "./interface";


class InitClass {

    initialize() {
        initScene.loadScene();
        initScene.loadRender();
        initScene.loadLight();

        mainAnim.animate();

        interf.btnList();
    }

}

let init = new InitClass();

window.addEventListener('keydown', keyListener.keyDown);
window.addEventListener('keyup', keyListener.keyUp);

window.onload = init.initialize();



