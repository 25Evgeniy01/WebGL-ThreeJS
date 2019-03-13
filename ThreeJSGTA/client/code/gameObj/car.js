import {initScene} from "../initScene";
import {objects} from "../interface/interface";

class Car {

    loadSprite() {
        this.spriteSmoke = [];
        for (let i = 0; i < 21; i++) {
            //Death
            (i > 9) ? this.spriteSmoke[i] = new THREE.TextureLoader().load( 'textures/sniper_death/sniper_death_000' + i +'.png' ) : this.spriteSmoke[i] = new THREE.TextureLoader().load( 'textures/sniper_death/sniper_death_0000' + i +'.png' );
        }
    }

    startPosition() {
        this.sprCar.position.set(-10, 5, 0);
        this.sprWheel[0].position.set(-0.23 + this.sprCar.position.x * 0.002 + 0/1.9, -0.45, 0);
        this.sprWheel[1].position.set(-0.23 + this.sprCar.position.x * 0.002 + 1/1.9, -0.45, 0);
        this.sprSmoke.visible = false;
    }

    loadCar() {
        this.loadSprite()
        this.sprCar = new THREE.Sprite( new THREE.SpriteMaterial( {
            map: new THREE.TextureLoader().load( 'textures/car/car.png' ),
            color: 0xffffff} ) );
        this.sprCar.position.set(-10, 5, 0);
        this.sprCar.scale.set(6, 2, 0);

        this.sprWheel = [];

        for (let i = 0; i < 2; i++ ) {
            this.sprWheel[i] = new THREE.Sprite( new THREE.SpriteMaterial( {
                map: new THREE.TextureLoader().load( 'textures/car/wheels.png' ),
                color: 0xffffff } ) );
            this.sprWheel[i].position.set(-0.23 + this.sprCar.position.x * 0.002 + i/1.9, -0.45, 0);
            this.sprWheel[i].scale.set(0.15, 0.45, 0);
            this.sprCar.add(this.sprWheel[i]);
        }

        this.sprSmoke = new THREE.Sprite( new THREE.SpriteMaterial( {
            map: this.spriteSmoke[10],
            color: 0xffffff } ) );
        this.sprSmoke.position.set(-0.6, 0, 0);
        this.sprSmoke.scale.set(0.5, 2, 0);
        this.sprCar.add(this.sprSmoke);
        this.sprSmoke.visible = false;
        this.sprCar.name = "car";
        objects.push(this.sprCar);
        initScene.scene.add( this.sprCar );
    }

}

let car = new Car();

export {
    car
};