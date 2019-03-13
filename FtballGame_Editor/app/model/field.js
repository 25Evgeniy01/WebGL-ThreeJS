/**
 * Created by vzorv on 28.08.2017.
 */
class Field {

    constructor() {

        this.fieldOne;

    }

    loadField() {


        //поле
        let world = new THREE.JSONLoader();
        let fieldOne, fieldOneAround;

        world.load('models/world/smartsoccer02.js', (object, color) => {
            //тень
            let shadowFieldOne = new THREE.ShadowMaterial();
            shadowFieldOne.opacity = 0.5;
            let fieldShadow = new THREE.Mesh(
                object, shadowFieldOne
            );

            fieldShadow.position.x = 0;
            fieldShadow.position.y = 0;
            fieldShadow.position.z = -33;
            fieldShadow.receiveShadow = true;
            fieldShadow.scale.set(1, 1, 1);
            init.scene.add(fieldShadow);

            //конец тени
            fieldOne = new THREE.Mesh(
                object, color
            );
            fieldOne.position.x = 0;
            fieldOne.position.y = 0;
            fieldOne.position.z = -33;
            fieldOne.scale.set(1, 1, 1);
            init.scene.add(fieldOne);
            this.fieldOne = fieldOne;
        });



        world.load('models/world/smartsoccer01.js', (object, color) => {

            //тень
            let shadowFieldOne = new THREE.ShadowMaterial();
            shadowFieldOne.opacity = 0.5;
            let fieldShadow = new THREE.Mesh(
                object, shadowFieldOne
            );
            fieldShadow.position.x = 0;
            fieldShadow.position.y = 0.004;
            fieldShadow.position.z = -33;
            fieldShadow.receiveShadow = true;
            fieldShadow.scale.set(1, 1, 1);
            init.scene.add(fieldShadow);
            //конец тени
            fieldOneAround = new THREE.Mesh(
                object, color
            );
            fieldOneAround.position.x = 0;
            fieldOneAround.position.y = 0.004;
            fieldOneAround.position.z = -33;
            fieldOneAround.scale.set(1, 1, 1);
            init.scene.add(fieldOneAround);
        });

        //settings for the beginning of the game
        startGame.settingsTeam();

        //игроки
        loadplayer.loadPlayer();

        //мяч
        ball.loadBall();
        //overBar


    }
}
let field = new Field();