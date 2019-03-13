
class Click {
    constructor () {
        this.enterClickPlayer = -1;
        this.clickObject = [];
        this.arrowEnterClickRotation;

        this.circle30 = []; this.circle20 = []; this.circle10 = [];
        this.circle02 = []; this.circle0 = []; this.circle12 = []; this.circle22 = [];
        this.circle = []; this.circle1 = []; this.circle2 = [];

        this.objects = [];

    }



    //выбор игрока по клику
    clickPlayer(e) {

        let n = 0;
        n++;

        //для сброса стрелки , переменная которая хранит только текущее состояние
        this.arrowEnterClickRotation = undefined;

        socket.emit('clickPlayerOn', {
            clickPlayerOn1: true
        });

        if (enterClickOnTheObjectValueShot1 === false && pass.passHelper === false && enterClickOnTheObjectValue === false) {

            let proj = new THREE.Projector();
            let vector = new THREE.Vector3((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1, 0.5);
            proj.unprojectVector(vector, init.camera);
            let raycaster = new THREE.Raycaster(init.camera.position, vector.sub(init.camera.position).normalize());
            let intersects = raycaster.intersectObjects(this.objects);
            //let intersectsField = raycaster.intersectObject(fieldOne);

            function circlePosition(clickObject, enterClickPlayer, arrowEnterClickRotation, circle, circle2, circle30, circle20, circle0, circle02, circle10, circle12, circle22) {
                //.log(clickObject);
                for (let i = 0; i < circle.length; i++) {

                    if (circle[i].position.x === clickObject[enterClickPlayer].position.x && circle[i].position.z === clickObject[enterClickPlayer].position.z) {
                        circle[i].position.x = intersects[0].object.position.x;
                        circle[i].position.y = 0.001;
                        circle[i].position.z = intersects[0].object.position.z;
                        circle2[i].position.x = intersects[0].object.position.x;
                        circle2[i].position.y = 0.003;
                        circle2[i].position.z = intersects[0].object.position.z;
                        inter.mainPlay = true;
                        ab = i;

                    }

                    if (circle[i].position.x === 100 && circle0[i].position.x === clickObject[enterClickPlayer].position.x && circle0[i].position.z === clickObject[enterClickPlayer].position.z) {
                        circle[i].position.z = 100;
                        circle2[i].position.x = 100;
                        circle0[i].position.y = 0.001;
                        circle0[i].position.x =  intersects[0].object.position.x;
                        circle0[i].position.z = intersects[0].object.position.z;
                        circle0[i].rotation.z = clickObject[enterClickPlayer].rotation.y + 0.78;
                        circle02[i].position.y = 0.003;
                        circle02[i].position.x =  intersects[0].object.position.x;
                        circle02[i].position.z = intersects[0].object.position.z;
                        circle02[i].rotation.z = clickObject[enterClickPlayer].rotation.y + 0.78;
                        circle20[i].position.y = 0.001;
                        circle20[i].position.x =  intersects[0].object.position.x;
                        circle20[i].position.z = intersects[0].object.position.z;
                        circle20[i].rotation.z = clickObject[enterClickPlayer].rotation.y - 3.935;
                        circle22[i].position.y = 0.003;
                        circle22[i].position.x =  intersects[0].object.position.x;
                        circle22[i].position.z = intersects[0].object.position.z;
                        circle22[i].rotation.z = clickObject[enterClickPlayer].rotation.y - 3.935;
                        circle10[i].position.y = 0.001;
                        circle10[i].position.x =  intersects[0].object.position.x;
                        circle10[i].position.z = intersects[0].object.position.z;
                        circle10[i].rotation.z = clickObject[enterClickPlayer].rotation.y;
                        circle12[i].position.y = 0.003;
                        circle12[i].position.x =  intersects[0].object.position.x;
                        circle12[i].position.z = intersects[0].object.position.z;
                        circle12[i].rotation.z = clickObject[enterClickPlayer].rotation.y ;
                        circle30[i].position.x =  intersects[0].object.position.x;
                        circle30[i].position.y = 0.003;
                        circle30[i].position.z = intersects[0].object.position.z;
                        circle30[i].rotation.z = clickObject[enterClickPlayer].rotation.y - 3.15;
                        inter.mainPlay = true;
                        ab = i;
                    }
                    //.log(enterClickPlayer);
                    //.log(clickObject);

                    for (let i = 0; i < circle.length; i++){
                        if ((circle[i].position.x === clickObject[enterClickPlayer].position.x && circle[i].position.z === clickObject[enterClickPlayer].position.z)||(circle0[i].position.x === clickObject[enterClickPlayer].position.x && circle0[i].position.z === clickObject[enterClickPlayer].position.z)) {
                            if (circle[i].position.x !== 100) {
                                circleStartPositionPlayerX[enterClickPlayer] = circle[i].position.x;
                                circleStartPositionPlayerZ[enterClickPlayer] = circle[i].position.z;
                            } else {
                                circleStartPositionPlayerX[enterClickPlayer] = circle0[i].position.x;
                                circleStartPositionPlayerZ[enterClickPlayer] = circle0[i].position.z;
                            }
                        }
                    }

                    if (((ball.meshB.position.z <= clickObject[enterClickPlayer].position.z + 0.65) && (ball.meshB.position.z >= clickObject[enterClickPlayer].position.z - 0.65)) && ((ball.meshB.position.x <= clickObject[enterClickPlayer].position.x + 0.65) && (ball.meshB.position.x >= clickObject[enterClickPlayer].position.x - 0.65))) {
                        let giveShotPointXShot, giveShotPointZShot;
                        if (playerWithBall === true) {
                            giveShotPointXShot = 50;
                            giveShotPointZShot = -32;
                        }
                        if (playerWithBall === false) {
                            giveShotPointXShot = -50;
                            giveShotPointZShot = -32;
                        }

                        let scShot = Math.sqrt(Math.pow((giveShotPointXShot - circleStartPositionPlayerX[enterClickPlayer]), 2) + Math.pow((giveShotPointZShot - circleStartPositionPlayerZ[enterClickPlayer]), 2));
                        let sbShot = Math.sqrt(Math.pow((giveShotPointZShot - circleStartPositionPlayerZ[enterClickPlayer]), 2));
                        let saShot = Math.sqrt(Math.pow((giveShotPointXShot - circleStartPositionPlayerX[enterClickPlayer]), 2));
                        let tanBShot = Math.atan(sbShot / saShot);
                        let xShotPlayerShot = scShot / 3;

                        let arrowEnterClickRotationShotShot, clickObjectEnterRotationShotShot;

                        if ((giveShotPointXShot > circleStartPositionPlayerX[enterClickPlayer]) && (giveShotPointZShot > circleStartPositionPlayerZ[enterClickPlayer])) {
                            arrowEnterClickRotationShotShot = -(tanBShot + Math.PI);
                        }
                        if ((giveShotPointXShot > circleStartPositionPlayerX[enterClickPlayer]) && (giveShotPointZShot < circleStartPositionPlayerZ[enterClickPlayer])) {
                            arrowEnterClickRotationShotShot = tanBShot + Math.PI;
                        }
                        if ((giveShotPointXShot < circleStartPositionPlayerX[enterClickPlayer]) && (giveShotPointZShot < circleStartPositionPlayerZ[enterClickPlayer])) {
                            arrowEnterClickRotationShotShot = -tanBShot;
                        }
                        if ((giveShotPointXShot < circleStartPositionPlayerX[enterClickPlayer]) && (giveShotPointZShot > circleStartPositionPlayerZ[enterClickPlayer])) {
                            arrowEnterClickRotationShotShot = tanBShot;
                        }

                        clickObjectEnterRotationShotShot = (clickObject[enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI;

                        if (arrowEnterClickRotation !== undefined) {
                            clickObjectEnterRotationShotShot = ((arrow[enterClickPlayer].rotation.y - Math.PI/2) + Math.PI/2)*180/Math.PI;
                        }

                        arrowEnterClickRotationShotShot = (arrowEnterClickRotationShotShot)*180/Math.PI;

                        if (arrowEnterClickRotationShotShot <= 0 && arrowEnterClickRotationShotShot >= -90) {
                            arrowEnterClickRotationShotShot = 360 + arrowEnterClickRotationShotShot;
                        }
                        if (clickObjectEnterRotationShotShot <= 0 && clickObjectEnterRotationShotShot >= -90) {
                            clickObjectEnterRotationShotShot = 360 + clickObjectEnterRotationShotShot;
                        }

                        if (arrowEnterClickRotationShotShot <= -180 && arrowEnterClickRotationShotShot >= -270) {
                            arrowEnterClickRotationShotShot = 360 + arrowEnterClickRotationShotShot;
                        }
                        if (clickObjectEnterRotationShotShot <= -180 && clickObjectEnterRotationShotShot >= -270) {
                            clickObjectEnterRotationShotShot = 360 + clickObjectEnterRotationShotShot;
                        }

                        if (arrowEnterClickRotationShotShot >= clickObjectEnterRotationShotShot) {
                            arrowEnterClickRotationShotShot = arrowEnterClickRotationShotShot - clickObjectEnterRotationShotShot;
                        } else {
                            arrowEnterClickRotationShotShot = 360 - clickObjectEnterRotationShotShot + arrowEnterClickRotationShotShot;
                        }



                    }


                }
            }

            //.log(intersectsField[0].point);

            /*for (let i = 0; i < clickObject.length; i++) {
                if (intersectsField[0].point.z < clickObject[i].position.z + 1 && intersectsField[0].point.z > clickObject[i].position.z - 3) {
                    //.log(clickObject[i].position);
                    enterClickPlayer = i;
                }
            }*/


            if (intersects.length > 0) {
                //передвижение круга при смене игрока
                if (ab !== undefined) {
                    this.circle[ab].position.y = 100;
                    this.circle2[ab].position.y = 100;
                    this.circle0[ab].position.y = 100;
                    this.circle02[ab].position.y = 100;
                    this.circle10[ab].position.y = 100;
                    this.circle12[ab].position.y = 100;
                    this.circle20[ab].position.y = 100;
                    this.circle22[ab].position.y = 100;
                    this.circle30[ab].position.y = 100;
                }

                if (lengthMass !== this.enterClickPlayer + 1) {
                    this.enterClickPlayer = lengthMass - 1;
                }

                this.enterClickPlayer++; //описание в variables
                this.clickObject[this.enterClickPlayer] = intersects[0].object;
                lengthMass = this.enterClickPlayer + 1;
                for (let i = 0; i < lengthMass - 1; i++) {
                    if (this.clickObject[this.enterClickPlayer].uuid === this.clickObject[i].uuid && this.clickObject[this.enterClickPlayer].uuid !== this.clickObject[this.enterClickPlayer - 1].uuid) {
                        lengthMass = (this.enterClickPlayer - 1) + 1;
                        this.enterClickPlayer = i;
                    }
                    if (this.enterClickPlayer > 0) {
                        if (this.clickObject[this.enterClickPlayer].uuid === this.clickObject[this.enterClickPlayer - 1].uuid) {
                            this.enterClickPlayer--;
                            lengthMass = this.enterClickPlayer + 1;
                        }
                    }
                }

                for (let i = 0; i < loadplayer.fPlayerDefenseS.length; i++) {
                    if (this.clickObject[this.enterClickPlayer].position === loadplayer.fPlayerDefenseS[i].position) {
                        socket.emit('playerClickS', { //передача игрока второй команды
                            playerClickSG: i
                        });
                        break;
                    }
                    if (this.clickObject[this.enterClickPlayer].position === loadplayer.fPlayerDefenseF[i].position) {
                        socket.emit('playerClickF', { //передача игрока первой команды
                            playerClickFG: i
                        });
                        break;
                    }
                }
                circlePosition(this.clickObject, this.enterClickPlayer, this.arrowEnterClickRotation, this.circle, this.circle2, this.circle30, this.circle20, this.circle0, this.circle02, this.circle10, this.circle12, this.circle22);


                //.log(fPlayerDefenseS[0]);

            }
        }
        /*let clickObjectRotat;
        clickObjectRotat = (clickObject[enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI;
        if (clickObjectRotat <= 0 && clickObjectRotat >= -90) {
            clickObjectRotat = 360 + clickObjectRotat;
        }
        if (clickObjectRotat <= -180 && clickObjectRotat >= -270) {
            clickObjectRotat = 360 + clickObjectRotat;
        }
        .log(clickObjectRotat);

      if (((meshB.position.z <= clickObject[enterClickPlayer].position.z + 0.5) && (meshB.position.z >= clickObject[enterClickPlayer].position.z - 0.5)) && ((meshB.position.x <= clickObject[enterClickPlayer].position.x + 0.6) && (meshB.position.x >= clickObject[enterClickPlayer].position.x + 0.4)))  {
            .log(clickObject[enterClickPlayer].rotation.y);
      }
      if (((meshB.position.z <= clickObject[enterClickPlayer].position.z + 0.5) && (meshB.position.z >= clickObject[enterClickPlayer].position.z - 0.5)) && ((meshB.position.x >= clickObject[enterClickPlayer].position.x - 0.6) && (meshB.position.x <= clickObject[enterClickPlayer].position.x - 0.4))) {
            .log(clickObject[enterClickPlayer].rotation.y);
      }*/
        ServerList.clickPlayerServer();
    }
//конец выбора игрока по клику
}

let click = new Click();