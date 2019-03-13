/**
 * Created by vzorv on 29.08.2017.
 */
//мяч
    class Ball {

        constructor() {
            this.meshB;
        }

        loadBall() {

            let meshBall = new THREE.JSONLoader();
            let meshB;
            meshBall.load('models/ball/ball.js', (object, color) => {
                meshB = new THREE.Mesh(
                    object, color
                );

                meshB.position.x = loadplayer.massPlayerX[9] + 0.5; //координаты мяча
                meshB.position.y = 0.1;
                meshB.position.z = loadplayer.massPlayerZ[9];
                meshB.scale.set(0.006, 0.006, 0.006);
                meshB.castShadow = true;
                this.meshB = meshB;
                init.scene.add(meshB);
            });

        }
}

let ball = new Ball();