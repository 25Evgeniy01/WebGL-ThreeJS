class Shot {
    constructor() {

        //для ограничения удара игрока
        this.xShotPlayer;
        this.xShotPlayer1;

        //поворот стрелки для удара
        this.arrowEnterClickRotationShot;
        this.clickObjectEnterRotationShot;

        this.massPlayerShot = [];

        this.shotArrowLoad2;
        this.shotArrow2;
        this.shotArrowLoad3;
        this.shotArrow3;
    }

    //shot
    enterGiveShotButton(e) {

        if (document.getElementById('shotJs').style.color === "white") {
            document.getElementById('shotJs').style.color = "black";
            shotActive = true;
            for (let i = 0; i < this.massPlayerShot.length; i++) {
                delete this.massPlayerShot[i];
            }
            this.massPlayerShot[click.enterClickPlayer] = click.clickObject[click.enterClickPlayer];
            this.enterGiveShot();
        } else {
            document.getElementById('shotJs').style.color = "white";
            init.scene.remove(shotArrow1);
            init.scene.remove(this.shotArrow2);
            init.scene.remove(this.shotArrow3);
            enterGiveShotValue = false;
            shotActive = false;
        }

    }
    enterGiveShot() {
        if (this.massPlayerShot[click.enterClickPlayer] === click.clickObject[click.enterClickPlayer] && shotActive === true) {


            if (shotArrow1 !== undefined) init.scene.remove(shotArrow1);
            if (this.shotArrow2 !== undefined) init.scene.remove(this.shotArrow2);
            if (this.shotArrow3 !== undefined) init.scene.remove(this.shotArrow3);


            if (playerWithBall === true) {
                giveShotPointX = 50;
                giveShotPointZ = -32;
            }
            if (playerWithBall === false) {
                giveShotPointX = -50;
                giveShotPointZ = -32;
            }


            if (changePlayerPositionX[click.enterClickPlayer] !== undefined && changePlayerPositionZ[click.enterClickPlayer] !== undefined) {
                meshBPositionXGiveShot = changePlayerPositionX[click.enterClickPlayer];
                meshBPositionZGiveShot = changePlayerPositionZ[click.enterClickPlayer];
            } else {
                meshBPositionXGiveShot = click.clickObject[click.enterClickPlayer].position.x; //игрок с мячем который совершает удар
                meshBPositionZGiveShot = click.clickObject[click.enterClickPlayer].position.z;
            }

            if (document.getElementById('shot').innerHTML !== '' && document.getElementById('shotJs').value === "Вынос") {
                meshBPositionXGiveShot = click.clickObject[click.enterClickPlayer].position.x;
                meshBPositionZGiveShot = click.clickObject[click.enterClickPlayer].position.z;
                if (changePlayerPositionX[click.enterClickPlayer] !== undefined) {
                    init.scene.remove(arrow[click.enterClickPlayer]);
                }
            }

            //стрелка
            let sc = Math.sqrt(Math.pow((giveShotPointX - meshBPositionXGiveShot), 2) + Math.pow((giveShotPointZ - meshBPositionZGiveShot), 2));
            let sb = Math.sqrt(Math.pow((giveShotPointZ - meshBPositionZGiveShot), 2));
            let sa = Math.sqrt(Math.pow((giveShotPointX - meshBPositionXGiveShot), 2));
            let tanB = Math.atan(sb / sa);


            this.xShotPlayer = sc / 3;

            //красная стрелка
            shotArrow = new THREE.JSONLoader();
            shotArrowLoad = (object, color) => {
                shotArrow1 = new THREE.Mesh(
                    object, color
                );
                shotArrow1.position.x = meshBPositionXGiveShot;
                shotArrow1.position.y = 0.006;
                shotArrow1.position.z = meshBPositionZGiveShot;


                if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                    shotArrow1.rotation.y = -(tanB + Math.PI);
                }
                if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                    shotArrow1.rotation.y = tanB + Math.PI;
                }
                if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                    shotArrow1.rotation.y = -tanB;
                }
                if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                    shotArrow1.rotation.y = tanB;
                }
                //if(clickShotMouse > 1) //баг с  появлением стрелки при нажатии на удар

                //угол поворота игрока
                this.clickObjectEnterRotationShot = (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI;

                //если игрок перемещается , а потом пробивает по воротам
                if (click.arrowEnterClickRotation !== undefined) {
                    this.clickObjectEnterRotationShot = ((arrow[click.enterClickPlayer].rotation.y - Math.PI/2) + Math.PI/2)*180/Math.PI;
                }

                //угол поворота стрелки
                this.arrowEnterClickRotationShot = (shotArrow1.rotation.y)*180/Math.PI;

                //перевод в нормальную круговую систему градусов от 0 до 360 начиная с второй четверти и по часовой

                if (this.arrowEnterClickRotationShot <= 0 && this.arrowEnterClickRotationShot >= -90) {
                    this.arrowEnterClickRotationShot = 360 + this.arrowEnterClickRotationShot;
                }
                if (this.clickObjectEnterRotationShot <= 0 && this.clickObjectEnterRotationShot >= -90) {
                    this.clickObjectEnterRotationShot = 360 + this.clickObjectEnterRotationShot;
                }
                if (this.arrowEnterClickRotationShot <= -180 && this.arrowEnterClickRotationShot >= -270) {
                    this.arrowEnterClickRotationShot = 360 + this.arrowEnterClickRotationShot;
                }
                if (this.clickObjectEnterRotationShot <= -180 && this.clickObjectEnterRotationShot >= -270) {
                    this.clickObjectEnterRotationShot = 360 + this.clickObjectEnterRotationShot;
                }


                if (this.arrowEnterClickRotationShot >= this.clickObjectEnterRotationShot) {
                    this.arrowEnterClickRotationShot = this.arrowEnterClickRotationShot - this.clickObjectEnterRotationShot;
                } else {
                    this.arrowEnterClickRotationShot = 360 - this.clickObjectEnterRotationShot + this.arrowEnterClickRotationShot;
                }

                //углы
                //.log(arrowEnterClickRotationShot);
                let arrowTypeBool = false;
                let distance;
                //пятка
                if (this.arrowEnterClickRotationShot > 90 && this.arrowEnterClickRotationShot < 270) {
                    distance = 3.98538;

                    if (click.arrowEnterClickRotation >= 90 && click.arrowEnterClickRotation <= 270) {
                        distance = distance * 0.75;
                    }
                    shotArrow1.material[0].color = {
                        r: 1.0000,
                        g: 0.2627,
                        b: 0.0000
                    }

                    this.xShotPlayer1 = this.xShotPlayer;
                    //.log("Дистанция " + distance);
                    //12 метров - 20%
                    if (this.xShotPlayer >= distance) {
                        document.getElementById('shot').innerHTML = '';
                        arrowTypeBool = true;
                    }

                    this.xShotPlayer1 = this.xShotPlayer / this.xShotPlayer1;

                }
                //тещина нога
                if (this.arrowEnterClickRotationShot >= 270 && this.arrowEnterClickRotationShot < 345) {
                    distance = 15.94152;

                    if (click.arrowEnterClickRotation >= 90 && click.arrowEnterClickRotation <= 270) {
                        distance = distance * 0.75;
                    }

                    shotArrow1.material[0].color = {
                        r: 1.0000,
                        g: 0.2627,
                        b: 0.0000
                    }

                    this.xShotPlayer1 = this.xShotPlayer;
                    //.log("Дистанция " + distance);
                    //48 метров - 80%
                    if (this.xShotPlayer >= distance) {
                        document.getElementById('shot').innerHTML = '';
                        arrowTypeBool = true;
                    }

                    this.xShotPlayer1 = this.xShotPlayer / this.xShotPlayer1;

                }

                //рабочая нога
                if ((this.arrowEnterClickRotationShot <= 90 && this.arrowEnterClickRotationShot >= 0) || (this.arrowEnterClickRotationShot >= 345 && this.arrowEnterClickRotationShot <= 360)) {
                    distance = 19.9269;

                    if (click.arrowEnterClickRotation >= 90 && click.arrowEnterClickRotation <= 270) {
                        distance = distance * 0.75;
                    }

                    shotArrow1.material[0].color = {
                        r: 0.7098,
                        g: 0.0000,
                        b: 0.0000
                    }

                    this.xShotPlayer1 = this.xShotPlayer;
                    //60 метров - 100%
                    //.log("Дистанция " + distance);
                    if (this.xShotPlayer >= distance) {
                        document.getElementById('shot').innerHTML = '';
                        arrowTypeBool = true;
                    }
                    this.xShotPlayer1 = this.xShotPlayer / this.xShotPlayer1;
                }
                //конец углов

                //.log("Длина стрелки " + xShotPlayer);
                shotArrow1.scale.set(this.xShotPlayer, 1, 1);

                if (this.shotArrow2 !== undefined) {
                    shotArrow1.material[0].color = {
                        r: 0.7098,
                        g: 0.0000,
                        b: 0.0000
                    }
                    //.log("shotArrow2 " + shotArrow2);
                    //.log("shotArrow3 " + shotArrow3);

                    init.scene.add(this.shotArrow2);
                    init.scene.add(this.shotArrow3);
                    if (this.shotArrow2.position.x !== undefined) {
                        shotArrow1.scale.set(6.65, 1, 1);

                    }
                }
                if (arrowTypeBool === false) {
                    init.scene.add(shotArrow1);
                }

            };

            if (playerWithBall === true ) {
                if (click.clickObject[click.enterClickPlayer].position.x < 0) {

                    this.shotArrowLoad2 = (object, color) => {
                        this.shotArrow2 = new THREE.Mesh(
                            object, color
                        );
                        this.shotArrow2.position.x = meshBPositionXGiveShot;
                        this.shotArrow2.position.y = 0.006;
                        this.shotArrow2.position.z = meshBPositionZGiveShot;

                        this.shotArrow2.material[0].color = {
                            r: 0.7098,
                            g: 0.0000,
                            b: 0.0000
                        }

                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = (-(tanB + Math.PI)) + Math.PI/4;
                        }
                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = (tanB + Math.PI) + Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = -tanB + Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = tanB + Math.PI/4;
                        }

                        this.shotArrow2.scale.set(6.65, 1, 1);
                    };

                    this.shotArrowLoad3 = (object, color) => {
                        this.shotArrow3 = new THREE.Mesh(
                            object, color
                        );
                        this.shotArrow3.position.x = meshBPositionXGiveShot;
                        this.shotArrow3.position.y = 0.006;
                        this.shotArrow3.position.z = meshBPositionZGiveShot;

                        this.shotArrow3.material[0].color = {
                            r: 0.7098,
                            g: 0.0000,
                            b: 0.0000
                        }

                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = (-(tanB + Math.PI)) - Math.PI/4;
                        }
                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = (tanB + Math.PI) - Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = -tanB - Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = tanB - Math.PI/4;
                        }

                        this.shotArrow3.scale.set(6.65, 1, 1);

                    };

                }
            }

            if (playerWithBall === false ) {
                if (click.clickObject[click.enterClickPlayer].position.x > 0) {
                    this.shotArrowLoad2 = (object, color) => {
                        this.shotArrow2 = new THREE.Mesh(
                            object, color
                        );
                        this.shotArrow2.position.x = meshBPositionXGiveShot;
                        this.shotArrow2.position.y = 0.006;
                        this.shotArrow2.position.z = meshBPositionZGiveShot;

                        this.shotArrow2.material[0].color = {
                            r: 0.7098,
                            g: 0.0000,
                            b: 0.0000
                        }

                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = (-(tanB + Math.PI)) + Math.PI/4;
                        }
                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = (tanB + Math.PI) + Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = -tanB + Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow2.rotation.y = tanB + Math.PI/4;
                        }

                        this.shotArrow2.scale.set(6.65, 1, 1);
                    };

                    this.shotArrowLoad3 = (object, color) => {
                        this.shotArrow3 = new THREE.Mesh(
                            object, color
                        );
                        this.shotArrow3.position.x = meshBPositionXGiveShot;
                        this.shotArrow3.position.y = 0.006;
                        this.shotArrow3.position.z = meshBPositionZGiveShot;

                        this.shotArrow3.material[0].color = {
                            r: 0.7098,
                            g: 0.0000,
                            b: 0.0000
                        }

                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = (-(tanB + Math.PI)) - Math.PI/4;
                        }
                        if ((giveShotPointX > meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = (tanB + Math.PI) - Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ < meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = -tanB - Math.PI/4;
                        }
                        if ((giveShotPointX < meshBPositionXGiveShot) && (giveShotPointZ > meshBPositionZGiveShot)) {
                            this.shotArrow3.rotation.y = tanB - Math.PI/4;
                        }

                        this.shotArrow3.scale.set(6.65, 1, 1);

                    };

                }
            }

            //.log(shotArrow2);

            shotArrow.load('models/arrow/arrowNew1.js', this.shotArrowLoad3);
            shotArrow.load('models/arrow/arrowNew1.js', this.shotArrowLoad2);

            shotArrow.load('models/arrow/arrowNew1.js', shotArrowLoad);

            //конец стрелки
            let t = sc / 0.4; //0.4 скорость мяча (в блокноте расчет)
            vaGiveShot = (giveShotPointX - meshBPositionXGiveShot) / t;
            vbGiveShot = (giveShotPointZ - meshBPositionZGiveShot) / t;
            //}
            enterGiveShotValue = true;



            if (arrow[click.enterClickPlayer] !== undefined) {
                dribl.changePositionClickPlayer();
            }

            for (let i = 0; i < loadplayer.fPlayerDefenseS.length; i++) {
                if (click.clickObject[click.enterClickPlayer].position === loadplayer.fPlayerDefenseS[i].position) {
                    socket.emit('shotInGameWowS', {
                        vaGiveShot: vaGiveShot,
                        vbGiveShot: vbGiveShot,
                        shotPlayer: true,
                        shotPlayerAnimation: true,
                        playerShotS: i,
                        xShotPlayer: this.xShotPlayer,
                        xShotPlayer1: this.xShotPlayer1,
                        giveShotPointX: giveShotPointX
                    })
                    break;
                }
                if (click.clickObject[click.enterClickPlayer].position === loadplayer.fPlayerDefenseF[i].position) {
                    socket.emit('shotInGameWowF', {
                        vaGiveShot: vaGiveShot,
                        vbGiveShot: vbGiveShot,
                        shotPlayer: true,
                        shotPlayerAnimation: true,
                        playerShotF: i,
                        xShotPlayer: this.xShotPlayer,
                        xShotPlayer1: this.xShotPlayer1,
                        giveShotPointX: giveShotPointX
                    })
                    break;
                }
            }
        }
    }
    shot() {

        if (enterGiveShotValue === true) {
            dribl.test1Animate = true;
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
            shotPlayer = true;
            shotPlayerAnimation = true;
            enterGiveShotValue = false;
            init.scene.remove(shotArrow1);
            enterClickOnTheObjectValueShot1 = false;
        }
    }
    //конец удара

    //принять и ударить
    getPassAndShot() {
        changePassAndShot = true;

        meshBPositionXGetPassAndShot = ball.meshB.position.x - 1;
        meshBPositionZGetPassAndShot = ball.meshB.position.z;

        playerGetPassXAndShot = click.circle.position.x;
        playerGetPassZAndShot = click.circle.position.z;

        let sc = Math.sqrt(Math.pow((playerGetPassXAndShot - meshBPositionXGetPassAndShot), 2) + Math.pow((playerGetPassZAndShot - meshBPositionZGetPassAndShot), 2));
        let t = sc / 0.4;
        vaGetPassAndShot = (playerGetPassXAndShot - meshBPositionXGetPassAndShot) / t;
        vbGetPassAndShot = (playerGetPassZAndShot - meshBPositionZGetPassAndShot) / t;
    }
    startGetPassAndShot() {
        if (changePassAndShot === true) {
            dribl.test1Animate = true;
            changeNextPassAndShot = true;
            changePassAndShot = false;
        }
    }
    //конец принять и ударить
}

let shot = new Shot();