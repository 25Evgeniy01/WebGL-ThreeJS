let scGetPass, tGetPass;

class Pass {
    constructor() {
        this.passHelper = false;

        //массив с игроками на которых нажали принять пас
        this.massPlayerGetPass = [];
        this.scChangePositionMass;

        this.vaGetPass1;
        this.vbGetPass1;
    }

    //принять пас
    getPassButton(e) {

        for (let i = 0; i < this.massPlayerGetPass.length; i++) {
            delete this.massPlayerGetPass[i];
        }

        this.massPlayerGetPass[click.enterClickPlayer] = click.clickObject[click.enterClickPlayer];

        for (let j = 0; j < loadplayer.fPlayerDefenseF.length; j++) {
            if (playerWithBall === true) {
                if (((ball.meshB.position.z <= loadplayer.fPlayerDefenseF[j].position.z + 0.65) && (ball.meshB.position.z >= loadplayer.fPlayerDefenseF[j].position.z - 0.65)) && ((ball.meshB.position.x <= loadplayer.fPlayerDefenseF[j].position.x + 0.65) && (ball.meshB.position.x >= loadplayer.fPlayerDefenseF[j].position.x - 0.65))) {
                    this.massPlayerGetPass[click.enterClickPlayer + 1] = loadplayer.fPlayerDefenseF[j];
                }
            } else {
                if (((ball.meshB.position.z <= loadplayer.fPlayerDefenseS[j].position.z + 0.65) && (ball.meshB.position.z >= loadplayer.fPlayerDefenseS[j].position.z - 0.65)) && ((ball.meshB.position.x <= loadplayer.fPlayerDefenseS[j].position.x + 0.65) && (ball.meshB.position.x >= loadplayer.fPlayerDefenseS[j].position.x - 0.65))) {
                    this.massPlayerGetPass[click.enterClickPlayer + 1] = loadplayer.fPlayerDefenseS[j];
                }
            }
        }

        this.scChangePositionMass = click.enterClickPlayer;

        let playerFormButton = new Player();
        this.getPass();
    }

    getPass() {

        if (this.massPlayerGetPass[this.scChangePositionMass] === click.clickObject[click.enterClickPlayer] || this.massPlayerGetPass[this.scChangePositionMass + 1] === click.clickObject[click.enterClickPlayer]) {

            if (givePassArrow1 !== undefined) init.scene.remove(givePassArrow1);

            if (changePlayerPositionX[this.scChangePositionMass] !== undefined && changePlayerPositionZ[this.scChangePositionMass] !== undefined) {

                //!!!просмотреть ещё раз - положение мяча относительно игрока которые принимает мяч
                dribl.clickObjectEnterRotation = (click.clickObject[this.scChangePositionMass].rotation.y + Math.PI/2)*180/Math.PI;

                if (dribl.clickObjectEnterRotation <= 0 && dribl.clickObjectEnterRotation >= -90) {
                    dribl.clickObjectEnterRotation = 360 + dribl.clickObjectEnterRotation;
                }

                if (dribl.clickObjectEnterRotation <= -180 && dribl.clickObjectEnterRotation >= -270) {
                    dribl.clickObjectEnterRotation = 360 + dribl.clickObjectEnterRotation;
                }

                let rxBallStart = changePlayerPositionX[this.scChangePositionMass];
                let rzBallStart = changePlayerPositionZ[this.scChangePositionMass];
                let rxBall = rxBallStart - changePlayerPositionX[this.scChangePositionMass];
                let rzBall = rzBallStart - changePlayerPositionZ[this.scChangePositionMass];
                let cBall = Math.cos(-(dribl.clickObjectEnterRotation * Math.PI / 180 - Math.PI));
                let sBall = Math.sin(-(dribl.clickObjectEnterRotation * Math.PI / 180 - Math.PI));
                let x1Ball = changePlayerPositionX[this.scChangePositionMass] + rxBall*cBall - rzBall*sBall;
                let z1Ball = changePlayerPositionZ[this.scChangePositionMass] + rxBall*sBall + rzBall*cBall;

                playerGetPassX = x1Ball;
                playerGetPassZ = z1Ball;
                //конец
            } else {
                //!!!просмотреть ещё раз - положение мяча относительно игрока которые принимает мяч
                dribl.clickObjectEnterRotation = (click.clickObject[this.scChangePositionMass].rotation.y + Math.PI/2)*180/Math.PI;

                if (dribl.clickObjectEnterRotation <= 0 && dribl.clickObjectEnterRotation >= -90) {
                    dribl.clickObjectEnterRotation = 360 + dribl.clickObjectEnterRotation;
                }

                if (dribl.clickObjectEnterRotation <= -180 && dribl.clickObjectEnterRotation >= -270) {
                    dribl.clickObjectEnterRotation = 360 + dribl.clickObjectEnterRotation;
                }

                let rxBallStart = click.clickObject[this.scChangePositionMass].position.x + 0.3;
                let rzBallStart = click.clickObject[this.scChangePositionMass].position.z;
                let rxBall = rxBallStart - click.clickObject[this.scChangePositionMass].position.x;
                let rzBall = rzBallStart - click.clickObject[this.scChangePositionMass].position.z;
                let cBall = Math.cos(-(dribl.clickObjectEnterRotation * Math.PI / 180 - Math.PI));
                let sBall = Math.sin(-(dribl.clickObjectEnterRotation * Math.PI / 180 - Math.PI));
                let x1Ball = click.clickObject[this.scChangePositionMass].position.x + rxBall*cBall - rzBall*sBall;
                let z1Ball = click.clickObject[this.scChangePositionMass].position.z + rxBall*sBall + rzBall*cBall;

                //позиция куда придет мяч
                playerGetPassX = x1Ball;
                playerGetPassZ = z1Ball;
                //конец
            }

            //позиция откуда летит мяч
            for (let j = 0; j < click.clickObject.length; j++) {
                if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) {
                    if (changePlayerPositionX[j] !== undefined) {
                        meshBPositionXGetPass = changePlayerPositionX[j];
                        meshBPositionZGetPass = changePlayerPositionZ[j];
                    } else {
                        meshBPositionXGetPass = ball.meshB.position.x;
                        meshBPositionZGetPass = ball.meshB.position.z;
                    }
                    break;
                } else {
                    meshBPositionXGetPass = ball.meshB.position.x;
                    meshBPositionZGetPass = ball.meshB.position.z;
                }
            }

            scGetPass = Math.sqrt(Math.pow((playerGetPassX - meshBPositionXGetPass), 2) + Math.pow((playerGetPassZ - meshBPositionZGetPass), 2));
            tGetPass = scGetPass / 0.3;

            //стрелка
            let sb = Math.sqrt(Math.pow((playerGetPassZ - meshBPositionZGetPass), 2));
            let sa = Math.sqrt(Math.pow((playerGetPassX - meshBPositionXGetPass), 2));
            //.log(sb + ' ' + sa)
            let tanB = Math.atan(sb / sa);
            let x = scGetPass / 3;

            //добавление стрелки
            givePassArrow = new THREE.JSONLoader();

            givePassArrowLoad = function (object, color) {

                givePassArrow1 = new THREE.Mesh(
                    object, color
                );
                givePassArrow1.position.x = meshBPositionXGetPass;
                givePassArrow1.position.y = 0.006;
                givePassArrow1.position.z = meshBPositionZGetPass;
                givePassArrow1.scale.set(x, 1, 1);
                givePassArrow1.material[0].color = {
                    r: 0.0000,
                    g: 0.0353,
                    b: 0.7882
                }

                if ((playerGetPassX > meshBPositionXGetPass) && (playerGetPassZ > meshBPositionZGetPass)) {
                    givePassArrow1.rotation.y = -(tanB + Math.PI);
                }
                if ((playerGetPassX > meshBPositionXGetPass) && (playerGetPassZ < meshBPositionZGetPass)) {
                    givePassArrow1.rotation.y = tanB + Math.PI;
                }
                if ((playerGetPassX < meshBPositionXGetPass) && (playerGetPassZ < meshBPositionZGetPass)) {
                    givePassArrow1.rotation.y = -tanB;
                }
                if ((playerGetPassX < meshBPositionXGetPass) && (playerGetPassZ > meshBPositionZGetPass)) {
                    givePassArrow1.rotation.y = tanB;
                }
                init.scene.add(givePassArrow1);
            };
            givePassArrow.load('models/arrow/arrowNew1.js', givePassArrowLoad);
            //конец стрелки

            //вместо 52 было tGetPass
            this.vaGetPass1 = (playerGetPassX - meshBPositionXGetPass) / 52;
            this.vbGetPass1 = (playerGetPassZ - meshBPositionZGetPass) / 52;

            change = true; //принятие пас активно

            socket.emit('getPass', {
                playerGetPassXS: playerGetPassX,
                playerGetPassZS: playerGetPassZ,
                meshBPositionXGetPassS: meshBPositionXGetPass,
                meshBPositionZGetPassS: meshBPositionZGetPass,
                vaGetPass1S: this.vaGetPass1,
                vbGetPass1S: this.vbGetPass1,
                changeNextS: true
            })
        }

    }

    startGetPass() {
        if (change === true) {
            dribl.test1Animate = true;
            init.scene.remove(givePassArrow1);
            givePassArrow1 = undefined;

            for (let i = 0; i < lengthMass; i++) {
                //кнопка СТАРТ --- отправка нажатия
                if (playerWithBall === true) {
                    buttonStartF[i] = true;
                    socket.emit('buttonStartF', {
                        buttonStartF: buttonStartF
                    })
                }
                if (playerWithBall === false) {
                    buttonStartS[i] = true;
                    socket.emit('buttonStartS', {
                        buttonStartS: buttonStartS
                    })
                }
            }
            change = false;
            changeNext = true;
        }
    }
    //конец принять паса

    //пас
    enterGivePass(e) {
        /*for (let i = 0; i < massPlayerGetPass.length; i++) {
            delete massPlayerGetPass[i];
        }

        massPlayerGetPass[enterClickPlayer] = click.clickObject[enterClickPlayer];
*/
        /*for (let j = 0; j < fPlayerDefenseF.length; j++) {
            if (playerWithBall === true) {
                if (((meshB.position.z <= fPlayerDefenseF[j].position.z + 0.65) && (meshB.position.z >= fPlayerDefenseF[j].position.z - 0.65)) && ((meshB.position.x <= fPlayerDefenseF[j].position.x + 0.65) && (meshB.position.x >= fPlayerDefenseF[j].position.x - 0.65))) {
                  massPlayerGetPass[enterClickPlayer + 1] = fPlayerDefenseF[j];
                }
            } else {
                if (((meshB.position.z <= fPlayerDefenseS[j].position.z + 0.65) && (meshB.position.z >= fPlayerDefenseS[j].position.z - 0.65)) && ((meshB.position.x <= fPlayerDefenseS[j].position.x + 0.65) && (meshB.position.x >= fPlayerDefenseS[j].position.x - 0.65))) {
                  massPlayerGetPass[enterClickPlayer + 1] = fPlayerDefenseS[j];
                }
            }
        }*/

        if (this.passHelper === true && document.getElementById('passButtonColor').style.color === "red") {

            if (givePassArrow1 !== undefined) init.scene.remove(givePassArrow1);

            let proj = new THREE.Projector();
            let vector = new THREE.Vector3((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1, 0.5);
            proj.unprojectVector(vector, init.camera);
            let raycaster = new THREE.Raycaster(init.camera.position, vector.sub(init.camera.position).normalize());

            let intersects = raycaster.intersectObjects(click.objects);


            /*.log(intersects[0].object);
            .log(click.clickObject[enterClickPlayer]);
            //.log(intersects);*/

            if (intersects.length > 0) {
                enterGivePassValue = true;

                for (let j = 0; j < click.clickObject.length; j++) {
                    if (intersects[0].object === click.clickObject[j]) {
                        if (changePlayerPositionX[j] !== undefined) {
                            givePassPointZ = changePlayerPositionZ[j];
                            givePassPointX = changePlayerPositionX[j];
                        } else {
                            givePassPointZ = intersects[0].object.position.z; //игрок без мяча которому отдаем пас
                            givePassPointX = intersects[0].object.position.x;
                        }
                        break;
                    } else {
                        givePassPointZ = intersects[0].object.position.z; //игрок без мяча которому отдаем пас
                        givePassPointX = intersects[0].object.position.x;
                    }
                }



                for (let j = 0; j < click.clickObject.length; j++) {
                    if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) {
                        if (changePlayerPositionX[j] !== undefined) {
                            meshBPositionXGivePass = changePlayerPositionX[j];
                            meshBPositionZGivePass = changePlayerPositionZ[j];
                        } else {
                            meshBPositionXGivePass = ball.meshB.position.x;
                            meshBPositionZGivePass = ball.meshB.position.z;
                        }
                        break;
                    } else {
                        meshBPositionXGivePass = ball.meshB.position.x;
                        meshBPositionZGivePass = ball.meshB.position.z;
                    }
                }


                let sc = Math.sqrt(Math.pow((givePassPointX - meshBPositionXGivePass), 2) + Math.pow((givePassPointZ - meshBPositionZGivePass), 2));
                let t = sc / 0.4; //0.4 скорость мяча (в блокноте расчет)
                vaGivePass = (givePassPointX - meshBPositionXGivePass) / t;
                vbGivePass = (givePassPointZ - meshBPositionZGivePass) / t;

                //стрелка

                //чтоб не возникала ошибка при делении на 0 в tanB
                if (givePassPointZ === meshBPositionZGivePass) {
                    givePassPointZ = givePassPointZ + 0.001;
                }
                if (givePassPointX === meshBPositionXGivePass ) {
                    givePassPointX = givePassPointX + 0.001;
                }

                let sb = Math.sqrt(Math.pow((givePassPointZ - meshBPositionZGivePass), 2));
                let sa = Math.sqrt(Math.pow((givePassPointX - meshBPositionXGivePass), 2));

                let tanB = Math.atan(sb / sa);

                let x = sc / 3;

                givePassArrow = new THREE.JSONLoader();

                givePassArrowLoad = function (object, color) {

                    givePassArrow1 = new THREE.Mesh(
                        object, color
                    );
                    givePassArrow1.position.x = meshBPositionXGivePass;
                    givePassArrow1.position.y = 0.006;
                    givePassArrow1.position.z = meshBPositionZGivePass;
                    givePassArrow1.scale.set(x, 1, 1);
                    givePassArrow1.material[0].color = {
                        r: 0.0000,
                        g: 0.0353,
                        b: 0.7882
                    }

                    if ((givePassPointX > meshBPositionXGivePass) && (givePassPointZ > meshBPositionZGivePass)) {
                        givePassArrow1.rotation.y = -(tanB + Math.PI);
                    }
                    if ((givePassPointX > meshBPositionXGivePass) && (givePassPointZ < meshBPositionZGivePass)) {
                        givePassArrow1.rotation.y = tanB + Math.PI;
                    }
                    if ((givePassPointX < meshBPositionXGivePass) && (givePassPointZ < meshBPositionZGivePass)) {
                        givePassArrow1.rotation.y = -tanB;
                    }
                    if ((givePassPointX < meshBPositionXGivePass) && (givePassPointZ > meshBPositionZGivePass)) {
                        givePassArrow1.rotation.y = tanB;
                    }
                    init.scene.add(givePassArrow1);
                };
                givePassArrow.load('models/arrow/arrowNew1.js', givePassArrowLoad);
                //конец стрелки

            }

            this.startGivePass();
            this.passHelper = false;
            if (document.getElementById('passButtonColor').style.color === "red") {
                document.getElementById('passButtonColor').style.color = "black";
            }
            socket.emit('givePass', {
                enterGivePassValueApp: true,
                vaGivePass: vaGivePass,
                vbGivePass: vbGivePass,
                givePassPointZ: givePassPointZ,
                meshBPositionZGivePass: meshBPositionZGivePass
            })
        }
    }

    startGivePass() {
        document.getElementById('start').addEventListener('click', Pass.finalGivePass, false);
    }

    static finalGivePass() {
        init.scene.remove(givePassArrow1);
        if (enterGivePassValue === true) {
            enterGivePassValueApp = true; //закрыть
            enterGivePassValue = false;
        }
    }
    //конец паса

}

let pass = new Pass();