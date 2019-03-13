import {initScene} from "../initScene";
import {objects} from "../interface/interface";

class Garage {

    loadGarage() {

        let geometry = new THREE.BoxGeometry( 5, 5, 6 );

        let material1 = new THREE.MeshPhongMaterial( {color: 0xFFFFFF} );
        material1.transparent = true;
        material1.opacity = 0.9;
        material1.depthTest = false;

        this.cube = new THREE.Mesh( geometry, material1 );
        this.cube.rotation.x = -Math.PI/5.9 ;
        this.cube.rotation.y = Math.PI/2.1;
        this.cube.position.set(13, 7.3, 0);
        this.cube.receiveShadow = true;
        this.cube.name = 'garage';
        objects.push(this.cube);

        let cube2 = new THREE.Mesh( geometry, material1 );
        cube2.scale.set(0.25, 0.25, 0.25);
        cube2.position.set(1, -2, 0);
        cube2.castShadow = true; //default is false
        this.cube.add(cube2);

        this.lightGarage = new THREE.SpotLight( 0xffffff, 10, 100 );
        this.lightGarage.position.set( 16.5, 9.5, 0 );
        this.lightGarage.visible = false;
        this.lightGarage.castShadow = true;
        initScene.scene.add(this.lightGarage);
        this.helper = new THREE.CameraHelper( this.lightGarage.shadow.camera );
        this.helper.visible = false;
        initScene.scene.add( this.helper );

        initScene.scene.add( this.cube );

    }
}

let garage = new Garage();

export {
    garage
}