import {initScene} from "../initScene";

class Line {
    load(arrayPoints) {
        let material = new THREE.LineBasicMaterial( {color: 0x0000ff} );

        let geometry = new THREE.Geometry();

        for (let i = 0; i < arrayPoints.length; i++ ) {
            geometry.vertices.push(new THREE.Vector3(arrayPoints[i].x, arrayPoints[i].y, arrayPoints[i].z));
        }

        let line = new THREE.Line(geometry , material);

        initScene.scene.add( line );

    }

    removeAll() {
        initScene.scene.children.length = 2;
    }
}

let line = new Line();

export {
    line
}