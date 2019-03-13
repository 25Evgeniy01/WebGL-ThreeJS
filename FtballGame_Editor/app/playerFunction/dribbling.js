class Dribl {
    constructor() {

        this.retardationVar = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

        //дистанция торможения
        this.retardationPositionX = []; this.retardationPositionZ = [];

        //коеф зависимости от передвижения, удара, паса
        this.coefShot = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1];//равен 100% на начале каждого хода
        this.coefShotOld = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1];//равен 100% на начале каждого хода

        this.test1Animate = false;

        this.dribblingHelper = false;

        //пройденное расстояние игроком
        this.arrowEnterClickRotationMass = [];
        this.scChangePositionMass = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.scSPlayer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.scPlayerFirst = [false, false, false, false, false, false, false, false, false, false, false];

        this.arrowRotationForClient = [];

        this.sinScz;

        this.clickObjectEnterRotation;

        //передвижение под углом
        this.clickObjectEnterClickPositionX;
        this.clickObjectEnterClickPositionZ;

        this.avtrt = false;
        this.avtrt2 = false;

        this.scChangePosition;//для передвижения
    }

    //Передвижение
    changePositionClickPlayer(e) {
        if (this.dribblingHelper === true && (document.getElementById('dribbling').innerHTML === '' || document.getElementById('dribblingButtonColor').style.color === "red" || document.getElementById('dribblingButtonColor').style.color === "white") && (document.getElementById('shotJs') === null || document.getElementById('shotJs').value !== "Вынос" ||  enterGiveShotValue === false)) {

            let scSPlayer1;
            let scChangePositionOld;

            let circleStartPositionPlayerXOld = circleStartPositionPlayerX[click.enterClickPlayer];
            let circleStartPositionPlayerZOld = circleStartPositionPlayerZ[click.enterClickPlayer];


            if (arrow[click.enterClickPlayer] !== undefined)
            {
                init.scene.remove(arrow[click.enterClickPlayer]);

                scChangePositionOld = this.scChangePosition;

                this.coefShot[click.enterClickPlayer] = this.coefShotOld[click.enterClickPlayer];

                if (this.retardationVar[click.enterClickPlayer] === true ) {
                    this.coefShot[click.enterClickPlayer] = this.coefShot[click.enterClickPlayer] + 0.5;
                }
            }

            //в ClickPlayer увеличиваем ещё на один n1 , чтобы при клике на след. игрока не удалилась его стрелка
            changePositionClick011Next1 = true;
            let proj = new THREE.Projector();
            let vector = new THREE.Vector3((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1, 0.5);
            proj.unprojectVector(vector, init.camera);
            let raycaster = new THREE.Raycaster(init.camera.position, vector.sub(init.camera.position).normalize());
            //точка передвижения
            console.log(field.fieldOne);
            let intersects = raycaster.intersectObject(field.fieldOne);

            //начальные координаты
            for (let i = 0; i < click.circle.length; i++){
                this.avtrt = false;
                this.avtrt2 = false;
                if ((click.circle[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle[i].position.z === click.clickObject[click.enterClickPlayer].position.z)||(click.circle0[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle0[i].position.z === click.clickObject[click.enterClickPlayer].position.z)) {
                    if (click.circle[i].position.x !== 100) {
                        circleStartPositionPlayerX[click.enterClickPlayer] = click.circle[i].position.x;
                        circleStartPositionPlayerZ[click.enterClickPlayer] = click.circle[i].position.z;
                    } else {
                        circleStartPositionPlayerX[click.enterClickPlayer] = click.circle0[i].position.x;
                        circleStartPositionPlayerZ[click.enterClickPlayer] = click.circle0[i].position.z;
                    }
                    if (circleStartPositionPlayerXOld === circleStartPositionPlayerX[click.enterClickPlayer]) {
                        scSPlayer1 = false;
                    } else {
                        scSPlayer1 = true;
                    }



                    //точка куда пердвинется игрок
                    if (inter.playerWithBallInGame[0] === click.enterClickPlayer) {
                        document.getElementById('shot').innerHTML = inter.shotInterface;
                        if (playerWithBall === true) {
                            if (click.clickObject[click.enterClickPlayer].position.x < 0) {
                                document.getElementById('shotJs').value = "Вынос";
                            }
                        }
                        if (playerWithBall === false) {
                            if (click.clickObject[click.enterClickPlayer].position.x > 0) {
                                document.getElementById('shotJs').value = "Вынос";
                            }
                        }
                    }


                    changePlayerPositionX[click.enterClickPlayer] = intersects[0].point.x;
                    changePlayerPositionZ[click.enterClickPlayer] = intersects[0].point.z;

                    if (changePlayerPositionZ[click.enterClickPlayer] === circleStartPositionPlayerZ[click.enterClickPlayer]) {
                        changePlayerPositionZ[click.enterClickPlayer] = changePlayerPositionZ[click.enterClickPlayer] + 0.0001;
                    }
                    if (changePlayerPositionX[click.enterClickPlayer] === circleStartPositionPlayerX[click.enterClickPlayer]) {
                        changePlayerPositionX[click.enterClickPlayer] = changePlayerPositionX[click.enterClickPlayer] + 0.0001;
                    }

                    let sb = Math.sqrt(Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
                    let sa = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2));
                    //.log(sb + ' ' + sa);
                    let scGip = Math.sqrt(Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]),2) + Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]),2));

                    let tanB = Math.atan(sb / sa);

                    //.log(' sa: ' + sa + ' sb: ' + sb + ' tanB = (sb/sa) ' + tanB);
                    //.log(tanB);
                    /*
                    sinScz = sb/scGip;
                    sinScz = sinScz / (Math.PI/2);
                    .log(sinScz);
                    */

                    //стрелка
                    changePositionArrow = new THREE.JSONLoader();

                    changePositionArrowLoad = (object, color) => {

                        arrow[click.enterClickPlayer] = new THREE.Mesh(
                            object, color
                        );

                        if (click.circle[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle[i].position.z === click.clickObject[click.enterClickPlayer].position.z || click.circle0[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle0[i].position.z === click.clickObject[click.enterClickPlayer].position.z) {
                            if ((changePlayerPositionX[click.enterClickPlayer] > circleStartPositionPlayerX[click.enterClickPlayer]) && (changePlayerPositionZ[click.enterClickPlayer] > circleStartPositionPlayerZ[click.enterClickPlayer])) {
                                arrow[click.enterClickPlayer].rotation.y = -(tanB + Math.PI);
                            }
                            if ((changePlayerPositionX[click.enterClickPlayer] > circleStartPositionPlayerX[click.enterClickPlayer]) && (changePlayerPositionZ[click.enterClickPlayer] < circleStartPositionPlayerZ[click.enterClickPlayer])) {
                                arrow[click.enterClickPlayer].rotation.y = tanB + Math.PI;
                            }
                            if ((changePlayerPositionX[click.enterClickPlayer] < circleStartPositionPlayerX[click.enterClickPlayer]) && (changePlayerPositionZ[click.enterClickPlayer] < circleStartPositionPlayerZ[click.enterClickPlayer])) {
                                arrow[click.enterClickPlayer].rotation.y = -tanB;
                            }
                            if ((changePlayerPositionX[click.enterClickPlayer] < circleStartPositionPlayerX[click.enterClickPlayer]) && (changePlayerPositionZ[click.enterClickPlayer] > circleStartPositionPlayerZ[click.enterClickPlayer])) {
                                arrow[click.enterClickPlayer].rotation.y = tanB;
                            }
                        }

                        //ф-ла для скорости передвижения
                        //найдем координаты вектора по которому игрок будет совершать передвижение
                        let a = changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer];
                        let b = changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer];

                        this.scChangePosition = Math.sqrt(Math.pow((a), 2) + Math.pow((b), 2));


                        let playerArrowPassBool = false;
                        let playerArrowShotBool = false;

                        //задний маленький круг
                        if (click.circle30[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle30[i].position.z === click.clickObject[click.enterClickPlayer].position.z) {

                            if (this.scChangePosition >= click.circle0[i].geometry.boundingSphere.radius / 0.71) {
                                let scChangePosition21 = this.scChangePosition / click.circle0[i].geometry.boundingSphere.radius / 1.41;
                                a = a / scChangePosition21;
                                b = b / scChangePosition21;
                                changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));

                                if (givePassArrow1 !== undefined) {
                                    pass.getPass();
                                    pass.enterGivePass();
                                    playerArrowPassBool = true;
                                }

                                if (shotArrow1 !== undefined) {
                                    shot.enterGiveShot();
                                    playerArrowShotBool = true;
                                }

                            }

                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= 90 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= 0) {
                                //игрок повернут в чверть от 90 до 0
                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= -90) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 270 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= 180) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= -180 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180)) ) {
                                    if (this.scChangePosition >= click.circle30[i].geometry.boundingSphere.radius) {
                                        let scChangePosition21 = this.scChangePosition / click.circle30[i].geometry.boundingSphere.radius * 1.12;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                            //игрок повернут в чверть от 0 до -90
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= -90 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= 0) {
                                if ( (arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= -270 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= -180) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 90 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI + 180)) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI*2)*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= 180)) {
                                    if (this.scChangePosition >= click.circle30[i].geometry.boundingSphere.radius) {
                                        let scChangePosition21 = this.scChangePosition / click.circle30[i].geometry.boundingSphere.radius * 1.12;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                            //игрок повернут в чверть от 270 до 180
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= 270 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= 180) {
                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 90 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= 0) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 0 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180)) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y- 2*Math.PI)*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= -270) ) {
                                    if (this.scChangePosition >= click.circle30[i].geometry.boundingSphere.radius) {
                                        let scChangePosition21 = this.scChangePosition / click.circle30[i].geometry.boundingSphere.radius * 1.12;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                            //игрок повернут в чверть от -180 до -270
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= -180 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= -270) {
                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 0 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= -90) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 270 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y + 3*Math.PI)*180/Math.PI) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y + 2*Math.PI)*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= 0) ) {
                                    if (this.scChangePosition >= click.circle30[i].geometry.boundingSphere.radius) {
                                        let scChangePosition21 = this.scChangePosition / click.circle30[i].geometry.boundingSphere.radius * 1.12;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                        }


                        //первый и второй полукруг 45
                        if (click.circle0[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle0[i].position.z === click.clickObject[click.enterClickPlayer].position.z) {
                            //игрок повернут в чверть от 90 до 0
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= 90 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= 0) {
                                let xz1 = click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180 - 45;
                                if (xz1 < -270) {
                                    xz1 = -270 - xz1;
                                    this.avtrt = true;
                                }

                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI + 45 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180) && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180 - 45)) || (this.avtrt === true && (90 - xz1) < arrow[click.enterClickPlayer].rotation.y*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI < 90) ) {
                                    if (this.scChangePosition >= click.circle20[i].geometry.boundingSphere.radius / 0.63) {
                                        let scChangePosition21 = this.scChangePosition / click.circle20[i].geometry.boundingSphere.radius / 1.63;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
                                        this.avtrt = false;

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                            //игрок повернут в чверть от 0 до -90
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= -90 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= 0) {

                                let xz1 = (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI*2)*180/Math.PI + 45;

                                if (xz1 > 270) {
                                    xz1 = 270 - xz1;
                                    this.avtrt = true;
                                }

                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI + 180) && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI + 180 - 45)) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI*2)*180/Math.PI + 45 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI*2)*180/Math.PI) || (this.avtrt === true && (-90 - xz1) >= arrow[click.enterClickPlayer].rotation.y*180/Math.PI ) ) {
                                    if (this.scChangePosition >= click.circle20[i].geometry.boundingSphere.radius / 0.63) {
                                        let scChangePosition21 = this.scChangePosition / click.circle20[i].geometry.boundingSphere.radius / 1.63;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
                                        this.avtrt = false;

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                            //игрок повернут в чверть от 270 до 180
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= 270 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= 180) {

                                let xz1 = (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI + 45;
                                if (xz1 > 270) {
                                    xz1 = 270 - xz1;
                                    this.avtrt = true;
                                }

                                let xz2 = (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI - 45;
                                if (xz2 < 180) {
                                    xz2 = 180 - xz2;
                                    this.avtrt2 = true;
                                }

                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y - 2*Math.PI)*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y- 2*Math.PI)*180/Math.PI + 45) || ((click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180) >= arrow[click.enterClickPlayer].rotation.y*180/Math.PI && (click.clickObject[click.enterClickPlayer].rotation.y*180/Math.PI - 180 - 45) <= arrow[click.enterClickPlayer].rotation.y*180/Math.PI) || (this.avtrt2 === true && (270 - xz2) <= arrow[click.enterClickPlayer].rotation.y*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= 270 ) || (this.avtrt === true && arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (180 - xz1) && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= 180 ) ) { //|| (avtrt2 === true && (270 - xz2) <= arrow[enterClickPlayer].rotation.y*180/Math.PI)  || (avtrt === true && arrow[enterClickPlayer].rotation.y*180/Math.PI <= (180 - xz1) )
                                    if (this.scChangePosition >= click.circle20[i].geometry.boundingSphere.radius / 0.63) {
                                        let scChangePosition21 = this.scChangePosition / click.circle20[i].geometry.boundingSphere.radius / 1.63;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
                                        this.avtrt = false;
                                        this.avtrt2 = false;

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }

                            }
                            //игрок повернут в чверть от -180 до -270
                            if ((click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI <= -180 && (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI >= -270) {


                                let xz1 = (click.clickObject[click.enterClickPlayer].rotation.y + 3*Math.PI)*180/Math.PI - 45;
                                if (xz1 < 180) {
                                    xz1 = 180 - xz1; //больше нуля
                                    this.avtrt = true;
                                }

                                let xz2 = (click.clickObject[click.enterClickPlayer].rotation.y + 2*Math.PI)*180/Math.PI + 45;
                                if (xz2 > 90) {
                                    xz2 = xz2 - 90; // больше нуля
                                    this.avtrt2 = true;
                                }


                                if ((arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y + 3*Math.PI)*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y + 3*Math.PI)*180/Math.PI - 45) || (arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= (click.clickObject[click.enterClickPlayer].rotation.y + 2*Math.PI)*180/Math.PI + 45 && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= (click.clickObject[click.enterClickPlayer].rotation.y + 2*Math.PI)*180/Math.PI) || (this.avtrt === true && (-180 - xz1) <= arrow[click.enterClickPlayer].rotation.y*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI <= -180) || (this.avtrt2 === true && (-270 + xz2) >= arrow[click.enterClickPlayer].rotation.y*180/Math.PI && arrow[click.enterClickPlayer].rotation.y*180/Math.PI >= -270)) {
                                    if (this.scChangePosition >= click.circle20[i].geometry.boundingSphere.radius / 0.63) {
                                        let scChangePosition21 = this.scChangePosition / click.circle20[i].geometry.boundingSphere.radius / 1.63;
                                        a = a / scChangePosition21;
                                        b = b / scChangePosition21;
                                        changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                        changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];
                                        this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
                                        this.avtrt = false;
                                        this.avtrt2 = false;

                                        if (givePassArrow1 !== undefined) {
                                            pass.getPass();
                                            pass.enterGivePass();
                                            playerArrowPassBool = true;
                                        }
                                        if (shotArrow1 !== undefined) {
                                            shot.enterGiveShot();
                                            playerArrowShotBool = true;
                                        }
                                    }
                                }
                            }
                        }
                        let enterClickPlayerForCircle;
                        if ((click.circle[i].position.x === click.clickObject[click.enterClickPlayer].position.x && click.circle[i].position.z === click.clickObject[click.enterClickPlayer].position.z)) {
                            enterClickPlayerForCircle = i;
                            if (this.scChangePosition >= click.circle[i].geometry.boundingSphere.radius) {

                                //нахождение точки
                                let scChangePosition21 = this.scChangePosition / click.circle[i].geometry.boundingSphere.radius;
                                a = a / scChangePosition21;
                                b = b / scChangePosition21;
                                changePlayerPositionX[click.enterClickPlayer] = a + circleStartPositionPlayerX[click.enterClickPlayer];
                                changePlayerPositionZ[click.enterClickPlayer] = b + circleStartPositionPlayerZ[click.enterClickPlayer];

                                this.scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));

                                if (givePassArrow1 !== undefined) {
                                    pass.getPass();
                                    pass.enterGivePass();
                                    playerArrowPassBool = true;
                                }
                                if (shotArrow1 !== undefined) {
                                    shot.enterGiveShot();
                                    playerArrowShotBool = true;
                                }
                            }
                        }



                        if (givePassArrow1 !== undefined &&  playerArrowPassBool === false ) {
                            pass.getPass();
                            pass.enterGivePass();
                        }
                        if (shotArrow1 !== undefined && playerArrowShotBool === false ) {
                            shot.enterGiveShot();
                        }


                        playerArrowShotBool = false;
                        playerArrowPassBool = false;



                        let t = this.scChangePosition / 0.2;


                        vaChangePlayerPosition[click.enterClickPlayer] = (changePlayerPositionX[click.enterClickPlayer] - circleStartPositionPlayerX[click.enterClickPlayer]) / t;
                        vbChangePlayerPosition[click.enterClickPlayer] = (changePlayerPositionZ[click.enterClickPlayer] - circleStartPositionPlayerZ[click.enterClickPlayer]) / t;

                        //угол поворота игрока
                        this.clickObjectEnterRotation = (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI/2)*180/Math.PI;
                        //угол поворота стрелки
                        click.arrowEnterClickRotation = (arrow[click.enterClickPlayer].rotation.y)*180/Math.PI;

                        //перевод в нормальную круговую систему градусов от 0 до 360 начиная с второй четверти и по часовой
                        if (click.arrowEnterClickRotation <= 0 && click.arrowEnterClickRotation >= -90) {
                            click.arrowEnterClickRotation = 360 + click.arrowEnterClickRotation;
                        }
                        if (this.clickObjectEnterRotation <= 0 && this.clickObjectEnterRotation >= -90) {
                            this.clickObjectEnterRotation = 360 + this.clickObjectEnterRotation;
                        }
                        if (click.arrowEnterClickRotation <= -180 && click.arrowEnterClickRotation >= -270) {
                            click.arrowEnterClickRotation = 360 + click.arrowEnterClickRotation;
                        }
                        if (this.clickObjectEnterRotation <= -180 && this.clickObjectEnterRotation >= -270) {
                            this.clickObjectEnterRotation = 360 + this.clickObjectEnterRotation;
                        }


                        if (click.arrowEnterClickRotation >= this.clickObjectEnterRotation) {
                            click.arrowEnterClickRotation = click.arrowEnterClickRotation - this.clickObjectEnterRotation;
                        } else {
                            click.arrowEnterClickRotation = 360 - this.clickObjectEnterRotation + click.arrowEnterClickRotation;
                        }

                        this.arrowEnterClickRotationMass[click.enterClickPlayer] = click.arrowEnterClickRotation;




                        if (click.arrowEnterClickRotation >= 0 && click.arrowEnterClickRotation <= 90) {
                            this.sinScz = click.arrowEnterClickRotation / 90;
                        }
                        if (click.arrowEnterClickRotation > 90 && click.arrowEnterClickRotation <= 180) {
                            this.sinScz = 1 - (click.arrowEnterClickRotation - 90) / 90;
                        }
                        if (click.arrowEnterClickRotation > 180 && click.arrowEnterClickRotation <= 270 ) {
                            this.sinScz = (click.arrowEnterClickRotation - 180) / 90;
                        }
                        if (click.arrowEnterClickRotation > 270 && click.arrowEnterClickRotation < 360) {
                            this.sinScz = 1 - (click.arrowEnterClickRotation - 270) / 90;
                        }

                        this.sinScz = click.arrowEnterClickRotation / 90;

                        //круг (начало от 0 и каждый 90 до 1)
                        if (this.sinScz >= 1 && this.sinScz <= 2) {
                            this.sinScz = this.sinScz - 1;
                        }
                        if (this.sinScz >= 2 && this.sinScz <= 3) {
                            this.sinScz = this.sinScz - 2;
                        }
                        if (this.sinScz >= 3 && this.sinScz <= 4) {
                            this.sinScz = this.sinScz - 3;
                        }
                        //.log(arrowEnterClickRotation + ' ' + clickObjectEnterRotation);

                        arrow[click.enterClickPlayer].position.x = circleStartPositionPlayerX[click.enterClickPlayer];
                        arrow[click.enterClickPlayer].position.y = 0.004;
                        arrow[click.enterClickPlayer].position.z = circleStartPositionPlayerZ[click.enterClickPlayer];

                        //торможение


                        if ((click.circle[enterClickPlayerForCircle] === undefined || click.circle[enterClickPlayerForCircle].position.x === 100 ) && click.arrowEnterClickRotation < 270 && click.arrowEnterClickRotation > 90 ) {

                            this.retardationVar[click.enterClickPlayer] = true;
                            //onsole.log("Торможение прошло " + retardationVar[enterClickPlayer]);
                            this.retardationPositionX[click.enterClickPlayer] = click.clickObject[click.enterClickPlayer].position.x + 5*vaChangePlayerPosition1[click.enterClickPlayer];
                            this.retardationPositionZ[click.enterClickPlayer] = click.clickObject[click.enterClickPlayer].position.z + 5*vbChangePlayerPosition1[click.enterClickPlayer];

                            this.coefShot[click.enterClickPlayer] = 0.5; // если торможение false то отнимаем потраченные 0.5

                        } else {
                            this.retardationVar[click.enterClickPlayer] = false;


                        }



                        let coefShotPosition = [];
                        //расчет затраченного времени на удар
                        //боковые круги
                        if ((click.arrowEnterClickRotation >= 45 && click.arrowEnterClickRotation <= 90) || (click.arrowEnterClickRotation >= 270 && click.arrowEnterClickRotation <= 315) && click.circle[i].position.x === 100) {
                            coefShotPosition[click.enterClickPlayer] = this.scChangePosition * 1 / click.circle10[i].geometry.parameters.radius;
                        }
                        //центральный круг
                        if ((click.arrowEnterClickRotation < 45 && click.arrowEnterClickRotation >= 0) || (click.arrowEnterClickRotation > 315 && click.arrowEnterClickRotation <= 360) && click.circle[i].position.x === 100) {
                            coefShotPosition[click.enterClickPlayer] = this.scChangePosition * 1 / click.circle0[i].geometry.parameters.radius;
                        }
                        //задний круг
                        //если игрок на прошлом ходу бежал и сейчас решил походить в задний круг
                        if (click.arrowEnterClickRotation < 270 && click.arrowEnterClickRotation > 90 && click.circle[i].position.x === 100) {
                            coefShotPosition[click.enterClickPlayer] = (this.scChangePosition * 1 / click.circle30[i].geometry.parameters.radius)/2;
                        }
                        //если игрок на прошлом ходу стоял
                        if (click.circle[i].position.x !== 100) {
                            coefShotPosition[click.enterClickPlayer] = (this.scChangePosition * 1 / click.circle[i].geometry.parameters.radius);
                            if (coefShotPosition[click.enterClickPlayer] < 0) {
                                coefShotPosition[click.enterClickPlayer] = 0;
                            }
                            if (coefShotPosition[click.enterClickPlayer] > 1) {
                                coefShotPosition[click.enterClickPlayer] = 1;
                            }
                        }

                        //onsole.log("Проценты на бег " + coefShotPosition[enterClickPlayer]);

                        if (coefShotPosition[click.enterClickPlayer] <= this.coefShot[click.enterClickPlayer]) {
                            this.coefShotOld[click.enterClickPlayer] = this.coefShot[click.enterClickPlayer];
                            this.coefShot[click.enterClickPlayer] = this.coefShot[click.enterClickPlayer] - coefShotPosition[click.enterClickPlayer];

                            //onsole.log("Осталось у игрока на движение " + this.coefShot[enterClickPlayer]);

                            let x = this.scChangePosition / 3; //соотношение стрелки к реальной длине

                            //запись пройденного расстояния игроком

                            if (scSPlayer1 === true) {
                                this.scSPlayer[click.enterClickPlayer] = this.scSPlayer[click.enterClickPlayer] + this.scChangePosition;
                                this.scChangePositionMass[click.enterClickPlayer] = this.scChangePosition;
                            } else {
                                this.scSPlayer[click.enterClickPlayer] = this.scSPlayer[click.enterClickPlayer] - scChangePositionOld;
                                this.scSPlayer[click.enterClickPlayer] = this.scSPlayer[click.enterClickPlayer] + this.scChangePosition;
                                this.scChangePositionMass[click.enterClickPlayer] = this.scChangePosition;
                            }




                            //.log("На сколько передвинется игрок " + scChangePositionMass[enterClickPlayer] + " " + this.coefShot[enterClickPlayer]);

                            arrow[click.enterClickPlayer].scale.set(x, 1, 1);
                            init.scene.add(arrow[click.enterClickPlayer]);



                            //for rotation ball in App.js (Client)
                            this.arrowRotationForClient[click.enterClickPlayer] = arrow[click.enterClickPlayer].rotation.y;

                            for (let i = 0; i < loadplayer.fPlayerDefenseS.length; i++) {
                                if (click.clickObject[click.enterClickPlayer].position === loadplayer.fPlayerDefenseS[i].position) {
                                    socket.emit('sentPlayerNewPositionS', {
                                        circleStartPositionPlayerX: circleStartPositionPlayerX[click.enterClickPlayer],
                                        circleStartPositionPlayerZ: circleStartPositionPlayerZ[click.enterClickPlayer],
                                        changePositionClick2: true,
                                        changePlayerPositionX: changePlayerPositionX[click.enterClickPlayer],
                                        changePlayerPositionZ: changePlayerPositionZ[click.enterClickPlayer],
                                        vaChangePlayerPosition: vaChangePlayerPosition[click.enterClickPlayer],
                                        vbChangePlayerPosition: vbChangePlayerPosition[click.enterClickPlayer],
                                        playerClickSG: i,
                                        arrowRotation: arrow[click.enterClickPlayer].rotation.y
                                    })
                                    break;
                                }
                                if (click.clickObject[click.enterClickPlayer].position === loadplayer.fPlayerDefenseF[i].position) {
                                    socket.emit('sentPlayerNewPositionF', {
                                        circleStartPositionPlayerX: circleStartPositionPlayerX[click.enterClickPlayer],
                                        circleStartPositionPlayerZ: circleStartPositionPlayerZ[click.enterClickPlayer],
                                        changePositionClick2: true,
                                        changePlayerPositionX: changePlayerPositionX[click.enterClickPlayer],
                                        changePlayerPositionZ: changePlayerPositionZ[click.enterClickPlayer],
                                        vaChangePlayerPosition: vaChangePlayerPosition[click.enterClickPlayer],
                                        vbChangePlayerPosition: vbChangePlayerPosition[click.enterClickPlayer],
                                        playerClickFG: i,
                                        arrowRotation: arrow[click.enterClickPlayer].rotation.y
                                    })
                                    break;
                                }
                            }
                        }

                        //onsole.log("Прошлое движение игрока " + vaChangePlayerPosition1);
                        //onsole.log("Движение игрока по осям " + vaChangePlayerPosition);





                    };
                    //белая стрелка движения

                    changePositionArrow.load('models/arrow/arrowNew1.js', changePositionArrowLoad);
                    //.log(arrow);
                    this.clickObjectEnterClickPositionX = click.clickObject[click.enterClickPlayer].position.x;
                    this.clickObjectEnterClickPositionZ = click.clickObject[click.enterClickPlayer].position.z;
                }
            }
            changePositionClick011Next[click.enterClickPlayer] = true;
            this.dribblingHelper = false;
            if (document.getElementById('dribblingButtonColor') !== null && document.getElementById('dribblingButtonColor').style.color === "red") {
                document.getElementById('dribblingButtonColor').style.color = "black";
            }
        }
    }
    //после нажатия на Старт
    changePositionClick01(e) {

        this.test1Animate = true;
        for (let i = 0; i < lengthMass; i++) {
            //обработка кнопки СТАРТ
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

            if (changePositionClick011Next[i] === true && changePlayerPositionX[i] !== undefined) {
                for (let j = 0; j < lengthMass; j++) {
                    if (arrow[j] !== undefined){
                        //поворот игрока во время бега
                        click.clickObject[j].rotation.y = arrow[j].rotation.y - Math.PI / 2;
                    }
                }
                if (arrow[i] !== undefined) {
                    init.scene.remove(arrow[i]);
                }

                changePositionClick011Next1 = false;
                changePositionClick2[i] = true;
                changePositionClick011Next[i] = false;
            }
        }
    }
    //конец передвижения

}

let dribl = new Dribl();