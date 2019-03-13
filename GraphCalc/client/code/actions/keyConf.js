let keyboard = {};

class KeyListener {
    constructor () {

    }

    keyDown(event){
       keyboard[event.keyCode] = true;
    }

    keyUp(event){
       keyboard[event.keyCode] = false;
    }


}

let keyListener = new KeyListener();

export {
    keyboard,
    keyListener
}