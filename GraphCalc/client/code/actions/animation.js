import {initScene} from "../initScene";

class MainAnim {
    constructor () {

    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        initScene.render();
    }


}

let mainAnim = new MainAnim();

export {
    mainAnim
}