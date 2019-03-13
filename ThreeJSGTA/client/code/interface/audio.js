import {initScene} from "../initScene";


class Audio {

    load() {

        let listener = new THREE.AudioListener();
        initScene.camera.add( listener );

        this.sound = new THREE.Audio( listener );

        let audioLoader = new THREE.AudioLoader();
        audioLoader.load( 'audio/still.mp3', ( buffer ) => {
            this.sound.setBuffer( buffer );
            this.sound.setLoop( true );
            this.sound.setVolume( 0.1 );
        });
    }

}

let audio = new Audio();

export {
    audio
}