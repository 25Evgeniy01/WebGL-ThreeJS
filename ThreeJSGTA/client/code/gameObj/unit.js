import {initScene} from "../initScene";
import {objects} from "../interface/interface";

class Unit {

    startPosition() {
        this.sprUnit.material.map = this.sprMove180[0];
        this.sprUnit.visible = true;
        this.sprUnit.position.set(-15, 20, 0);
    }

    loadSprite() {
        this.sprMove180 = [];
        this.sprMove270 = [];
        this.sprDeath = [];

        for (let i = 0; i < 26; i++) {
            //Move Cam 180
            (i > 9) ? this.sprMove180[i] = new THREE.TextureLoader().load( 'textures/move_cam_180/sniper_move_cam_180_000' + i +'.png' ) : this.sprMove180[i] = new THREE.TextureLoader().load( 'textures/move_cam_180/sniper_move_cam_180_0000' + i +'.png' );
            //Move Cam 270
            (i > 9) ? this.sprMove270[i] = new THREE.TextureLoader().load( 'textures/move_cam_270/sniper_move_cam_270_000' + i +'.png' ) : this.sprMove270[i] = new THREE.TextureLoader().load( 'textures/move_cam_270/sniper_move_cam_270_0000' + i +'.png' );
        }
        for (let i = 0; i < 21; i++) {
            //Death
            (i > 9) ? this.sprDeath[i] = new THREE.TextureLoader().load( 'textures/sniper_death/sniper_death_000' + i +'.png' ) : this.sprDeath[i] = new THREE.TextureLoader().load( 'textures/sniper_death/sniper_death_0000' + i +'.png' );
        }
    }

    loadUnit() {
        this.loadSprite();

        let sprMaterial = new THREE.SpriteMaterial({map: this.sprMove180[0], color: 0xffffff});
        this.sprUnit = new THREE.Sprite(sprMaterial);
        this.sprUnit.position.set(-15, 20, 0);
        this.sprUnit.scale.set(6, 6, 1);
        this.sprUnit.name = "Albert";
        objects.push(this.sprUnit);

        initScene.scene.add(this.sprUnit);

    }
}

let unit = new Unit();

export {
    unit
};