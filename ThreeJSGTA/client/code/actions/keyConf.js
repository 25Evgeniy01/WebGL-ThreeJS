let keyboard = {};
let keyboardList = true;

class KeyListener {
    constructor () {

    }

    setKeyboardList(bool) {
        keyboardList = bool;
    }

    keyDown(event){
        if (keyboardList) keyboard[event.keyCode] = true;
    }

    keyUp(event){
        if (keyboardList) keyboard[event.keyCode] = false;
    }


}

let keyListener = new KeyListener();

export {
    keyboard,
    keyListener
}