import {initScene} from "../initScene";
import {objects} from "../interface/interface";

let posTree = [
    {x: -1 ,y: 15, z: 0},
    {x: -16 ,y: 12, z: 0},
    {x: -10 ,y: 18, z: 0},
    {x: -5 ,y: 10, z: 0},
    {x: 5 ,y: 15, z: 0},
    {x: 10 ,y: 18, z: 0},
];

class Tree {

    constructor() {
        this.sprUnit = [];
    }

    /*randomInteger(min, max) {
        let rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    }*/



    visible(value) {
        for(let i = 0; i < 6; i++) {
            this.sprUnit[i].visible = value;
        }
    }

    load() {
        let sprMaterial = new THREE.SpriteMaterial({
            map: new THREE.TextureLoader().load( 'textures/tree/tree.png' ),
            color: 0xffffff});

        for(let i = 0; i < 6; i++) {

            this.sprUnit[i] = new THREE.Sprite(sprMaterial);
            this.sprUnit[i].position.set(posTree[i].x, posTree[i].y, posTree[i].z );/*this.randomInteger(-20, 20), this.randomInteger(0, 20), 0*/
            this.sprUnit[i].scale.set(4, 4, 1);
            this.sprUnit[i].name = "tree";
            objects.push(this.sprUnit[i]);
            this.sprUnit[i].visible = false;
            initScene.scene.add(this.sprUnit[i]);
        }


    }
}

let tree = new Tree();

export {
    tree
}