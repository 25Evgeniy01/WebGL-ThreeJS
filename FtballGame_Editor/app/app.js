    /**
 * Created by vzorv on 07.08.2017.
 */
    let keyboard = {};

class InitClass {

    constructor() {

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        let viewAngle = 30, aspect = this.screenWidth / this.screenHeight, near = 1, far = 2000;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
        this.canvas = document.getElementById('canvas');
        this.canvas.setAttribute('width',this.screenWidth);
        this.canvas.setAttribute('height',this.screenHeight);

        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});

        this.stats = new Stats();

        //переменная которая хранит всех возможных кликнутых игроков
        this.arrOfPlayer = [];
        this.arrOfPlayer.length = 23;


    }

    loadSceneCamera() {

        this.scene.addEventListener(
            'update',
            function () {
                this.scene.simulate(undefined, 1);
            }
        );

        this.scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003); //задний фон

        this.scene.add(this.camera);

        this.camera.position.set(0, 30, 30);
        this.camera.rotation.x = -Math.PI / 5.9;
    }

    loadRender() {


        let wait = document.getElementById('wait');



        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '0px';
        wait.appendChild( this.stats.domElement );

        this.renderer.setSize(this.screenWidth, this.screenHeight);

        this.renderer.setClearColor(this.scene.fog.color);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = true;

        THREEx.WindowResize(this.renderer, this.camera);
    }

    loadLight () {
//освещение банеров
        let spLight = new THREE.SpotLight(0xffffff, 1, 1000, Math.PI);
        spLight.position.set(0, 0, -60);
        this.scene.add(spLight);
//конец освещения банеров

        let light = new THREE.DirectionalLight(0xffffff);
        light.position.set(40, 55, 15);
        light.target.position.copy(this.scene.position);
        light.castShadow = true;
        light.shadow.camera.left = -60;
        light.shadow.camera.top = -60;
        light.shadow.camera.right = 60;
        light.shadow.camera.bottom = 60;
        light.shadow.camera.near = 20;
        light.shadow.camera.far = 200;
        light.shadow.bias = -.0001;
        light.shadow.mapSize.width = light.shadow.mapSize.height = 2048;

        this.scene.add(light);

        let light1 = new THREE.DirectionalLight(0xffffff);
        light1.position.set(-30, 94, 15);
        light1.target.position.copy(this.scene.position);
        this.scene.add(light1);

        let light2 = new THREE.DirectionalLight(0xffffff);
        light2.position.set(30, 94, 15);
        light2.target.position.copy(this.scene.position);
        this.scene.add(light2);
    }
    
    render() {
        
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }

    }



    init () {

        this.loadSceneCamera();
        this.loadRender();
        this.loadLight();

        field.loadField();
    }

    keyDown(event){
        keyboard[event.keyCode] = true;
    }

    keyUp(event){
        keyboard[event.keyCode] = false;
    }

    animate() {

            if (dribl.test1Animate === false) setTimeout(this.animate.bind(this), 500); else requestAnimationFrame(this.animate.bind(this));

            //начальная анимация

            //конец начальной анимации


            if (testFunctionChange === true) {
                test.material[0].color = {
                    r: 0,
                    g: 0,
                    b: 0
                };
                test.material[1].color = {
                    r: 1,
                    g: 1,
                    b: 1
                };
                testFunctionChange = false;
            }

            //настройки передвижения камеры вдоль поля
            //стрелка вверх
            if(keyboard[38]){
                this.camera.rotation.x += 0.01;
                dribl.test1Animate = true;

            }
            //стрелка вниз
            if(keyboard[40]){
                this.camera.rotation.x -= 0.01;
                dribl.test1Animate = true;

            }
            //стрелка влево
            if(keyboard[37]){
                this.camera.rotation.y += 0.01;
                this.camera.rotation.z += 0.01;
                dribl.test1Animate = true;

                //camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * cameraSpeed.speed;
            }
            //стрелка вправо
            if(keyboard[39]){
                this.camera.rotation.y -= 0.01;
                this.camera.rotation.z -= 0.01;
                dribl.test1Animate = true;

                //camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * cameraSpeed.speed;
            }
            //A
            if(keyboard[65]){
                this.camera.position.x -=  1;
                dribl.test1Animate = true;

            }
            //D
            if(keyboard[68]){
                this.camera.position.x +=  1;
                dribl.test1Animate = true;

            }
            //S
            if(keyboard[83]){
                this.camera.position.z +=  1;
                dribl.test1Animate = true;

            }
            //W
            if(keyboard[87]){
                this.camera.position.z -=  1;
                dribl.test1Animate = true;

            }

            //Q
            if (keyboard[81]) {
                this.camera.position.y +=  1;
                dribl.test1Animate = true;


            }
            //E
            if (keyboard[69]) {
                this.camera.position.y -= 1;
                dribl.test1Animate = true;

            }

            for (let i = 0; i < loadplayer.statusBar.length; i++) {
                if (inter.statusBarVisible === 1 ) {

                    if (loadplayer.statusBarColor[i] !== undefined && document.getElementById('statusBarVisibleInterface') !== null) {
                        document.getElementById('statusBarVisibleInterface').style.color = "black";
                        loadplayer.statusBar[i].visible = false;
                        loadplayer.statusBarColor[i].visible = false;
                    }


                } else {

                    if (loadplayer.statusBarColor[i] !== undefined &&  document.getElementById('statusBarVisibleInterface') !== null) {
                        document.getElementById('statusBarVisibleInterface').style.color = "white";
                        loadplayer.statusBar[i].visible = true;
                        loadplayer.statusBarColor[i].visible = true;
                    }

                }
            }

            /*socket.on('keyboardPressA', function(data) {
                testNode = data.keyboardPressA;
            })*/
            //keyboard - Z
            socket.on('team', function(data) {
                testNode1 = data[1];
                testNode = data[0];
            })

            if (keyboard[90] || (testNode !== undefined && testNode.keyboardPressA === true) || (testNode1 !== undefined && testNode1.keyboardPressA === true)) {//|| testNode === true
                socket.emit('keyboardPress', {
                    keyboardPress: true
                })
                //mixerG.update(clockG.getDelta());
                //mixerG.clipAction(geometryGk.animations[0]).play();
                /*loadplayer.mixer[10].update(clock[1].getDelta());
                 loadplayer.mixer[10].clipAction(loadplayer.geometry[1].animations[0]).play();*/

                /*loadplayer.mixer[2].update(clock[2].getDelta());
                loadplayer.mixer[2].clipAction(loadplayer.geometry[2].animations[0]).play();*/
            }

            //keyboard - X
            if (keyboard[88]) {
                // mixerTestHuman.update(testHCl.getDelta());
                // mixerTestHuman.clipAction(geometryTestHum.animations[0]).play();
               /* console.log(testNode.keyboardPressA);
                console.log(testNode1.keyboardPressA);
                console.log(testNode2);*/
            }


            if (this.camera.position.x > 30) {
                this.camera.position.x = 30;
            }
            if (this.camera.position.x < -30) {
                this.camera.position.x = -30;
            }
            //конец

            //передвижение мяча - Принять Пас (анимацией) связано только с гетпас (скрипт в блокноте)
            if (changeNext === true) {
                if (playerWithBall === true) {
                    socket.on('buttonStartSCl', function(data) {
                        buttonStartS = data.buttonStartSCl;
                    })
                }
                if (playerWithBall === false) {
                    socket.on('buttonStartFCl', function(data) {
                        buttonStartF = data.buttonStartFCl;
                    })
                }
                if (buttonStartF[0] === true && buttonStartS[0] === true) {

                    //for (let i = 0; i < lengthMass; i++) {
                    //для того, чтобы не ускорялся мяч
                    for (let j = 0; j < click.clickObject.length; j++) {
                        if ((((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) || (variableGetPass === false)) {
                            playerWithBallGetPass = j;
                            variableGetPass = true;
                        }
                    }
                    variableGetPass1 = undefined;

                    //если вдруг будут ошибки - обратить внимание на то , что changePlayerPositionnX[playerWithBallGetPass] - после окончания хода остается уже не undefined - следственно условие после первого паса будет постоянно проходить
                    if (changePlayerPositionX[playerWithBallGetPass] !== undefined || variableGetPass1 === true) {
                        if (changePlayerPositionX[playerWithBallGetPass] === click.clickObject[playerWithBallGetPass].position.x && changePlayerPositionZ[playerWithBallGetPass] === click.clickObject[playerWithBallGetPass].position.z) {
                            ball.meshB.position.x += pass.vaGetPass1;
                            ball.meshB.position.z += pass.vbGetPass1;
                        }

                        variableGetPass1 = true;
                    }  else variableGetPass1 = false;
                    if (variableGetPass1 === false && variableGetPass === true) {
                        ball.meshB.position.x += pass.vaGetPass1;
                        ball.meshB.position.z += pass.vbGetPass1;
                    }

                    if ((ball.meshB.position.z >= playerGetPassZ && playerGetPassZ >= meshBPositionZGetPass) || (ball.meshB.position.z <= playerGetPassZ && playerGetPassZ <= meshBPositionZGetPass))  {
                        changeNext = false;
                        variableGetPass = false;
                        variableGetPass1 = false;
                        //meshB.position.x = playerGetPassX;
                        //meshB.position.z = playerGetPassZ;
                    }

                    /*if ((playerGetPassX >= meshBPositionXGetPass && meshB.position.x >= playerGetPassX) || (playerGetPassX <= meshBPositionXGetPass && meshB.position.x <= playerGetPassX)) {
                        changeNext = false;
                        variableGetPass = false;

                        //meshB.position.x = playerGetPassX;
                       // meshB.position.z = playerGetPassZ;
                    }*/

                }
                //}
            }

            /*if (changeNext === true) {
                //чем выше , тем ниже скорость
                vaGetPass += vaGetPass1/(tGetPass/(scGetPass/1.06));
                vbGetPass += vbGetPass1/(tGetPass/(scGetPass/1.06));

                meshB.position.x += vaGetPass;//дописал дополинтельное условие в changeposclick для передвижения игрока с мячом (стоит 0.2) можно сделать меньше
                meshB.position.z += vbGetPass;

                if (camera.position.x < 30 && camera.position.x > -30) {
                    camera.position.x = meshB.position.x+15;
                }

               // meshB.position.y += 0.1; //для нагляности где мяч розганяется
                /* meshB.position.y += scGetPass/(20*scGetPass);*/
            /*   meshB.rotation.x += vaGetPass;
               meshB.rotation.y += vbGetPass;

           }
           if(meshB !== undefined) {
               //меняем длину разгона мяча
               if (meshB.position.z <= (playerGetPassZ - (playerGetPassZ-meshBPositionZGetPass)/1.1) && playerGetPassZ <= meshBPositionZGetPass && changeNext === true) {
                   changeNext = false;
                   changeGetPassAcc = true;
                   meshB.position.z = (playerGetPassZ - (playerGetPassZ - meshBPositionZGetPass) / 1.1);
                   meshB.position.x = (playerGetPassX - (playerGetPassX - meshBPositionXGetPass) / 1.1) + 0.5;
                   if (camera.position.x < 30 && camera.position.x > -30){
                       camera.position.x = meshB.position.x + 15;
                   }
               }
               if (meshB.position.z >= (playerGetPassZ - (playerGetPassZ-meshBPositionZGetPass)/1.1) && playerGetPassZ >= meshBPositionZGetPass && changeNext === true) {
                   changeNext = false;
                   changeGetPassAcc = true;
                   meshB.position.z = (playerGetPassZ - (playerGetPassZ-meshBPositionZGetPass)/1.1);
                   meshB.position.x = (playerGetPassX - (playerGetPassX-meshBPositionXGetPass)/1.1) + 0.5;
                   if (camera.position.x < 30 && camera.position.x > -30){
                       camera.position.x = meshB.position.x + 15;
                   }
               }
           }
           if (changeGetPassAcc === true) {
               vaGetPass -= vaGetPass1/(tGetPass/2.1);
               vbGetPass -= vbGetPass1/(tGetPass/2.1);
               meshB.position.x += vaGetPass;//дописал дополинтельное условие в changeposclick для передвижения игрока с мячом (стоит 0.2) можно сделать меньше
               meshB.position.z += vbGetPass;
               /* meshB.position.y -= scGetPass/(20*scGetPass);*/
            /*  meshB.rotation.x += vaGetPass;
              meshB.rotation.y += vbGetPass;

              if (camera.position.x < 30 && camera.position.x > -30){
                  camera.position.x = meshB.position.x + 15;
              }

              //meshB.position.y -= 0.012; //для нагляности где мяч розганяется
          }
          if(meshB !== undefined) {
              if (meshB.position.z <= playerGetPassZ && playerGetPassZ <= meshBPositionZGetPass && changeGetPassAcc === true) {
                  changeGetPassAcc = false;
                  meshB.position.x = playerGetPassX + 0.5;
                  meshB.position.z = playerGetPassZ;
                  if (camera.position.x < 30 && camera.position.x > -30){
                      camera.position.x = meshB.position.x + 15;
                  }
                  meshB.position.y = 0.1;
                  vaGetPass = 0;
                  vbGetPass = 0;
              }
              if (meshB.position.z >= playerGetPassZ && playerGetPassZ >= meshBPositionZGetPass && changeGetPassAcc === true) {
                  changeGetPassAcc = false;
                  meshB.position.x = playerGetPassX + 0.5;
                  meshB.position.z = playerGetPassZ;
                  if (camera.position.x < 30 && camera.position.x > -30) {
                      camera.position.x = meshB.position.x + 15;
                  }
                  meshB.position.y = 0.1;
                  vaGetPass = 0;
                  vbGetPass = 0;
              }
          }*/
            //Стоп для анимации смены кнопок
//передвижение мяча - Принять пас - конец

            //кнопка Принять и ударить
            if (changeNextPassAndShot === true) {
                ball.meshB.position.x += vaGetPassAndShot; //дописал дополинтельное условие в changeposclick для передвижения игрока с мячом (стоит 0.5) можно сделать меньше
                ball.meshB.position.z += vbGetPassAndShot;
                ball.meshB.rotation.x += 0.4;
                ball.meshB.rotation.y += 0.4;
            }
            if(ball.meshB !== undefined) {
                if (ball.meshB.position.z <= playerGetPassZAndShot && playerGetPassZAndShot <= meshBPositionZGetPassAndShot) {
                    changeNextPassAndShot = false;
                    shotPlayer = true; //становить
                }
                if (ball.meshB.position.z >= playerGetPassZAndShot && playerGetPassZAndShot >= meshBPositionZGetPassAndShot) {
                    changeNextPassAndShot = false;
                    shotPlayer = true; // остановить
                }
            }
            //конец Принять и ударить

            //удар
            if (shotPlayer === true && shotPlayerAnimation1 === false) {

                ball.meshB.position.x += vaGiveShot;
                ball.meshB.position.z += vbGiveShot;
                ball.meshB.rotation.x += 0.4;
                ball.meshB.rotation.y += 0.4;

                if (playerWithBall === true || playerWithBall === false) {

                    /* if (meshB.position.x > (Math.abs(giveShotPointX)+2) || meshB.position.x < -(Math.abs(giveShotPointX)+2)) {
                         meshB.position.x -= vaGiveShot;
                         meshB.position.z -= vbGiveShot;
                         meshB.rotation.x = 0;
                         meshB.rotation.y = 0;
                         shotPlayer = false;
                         shotPlayerAnimation1 = true;
                         shotPlayerAnimationStart = false;
                         shotPlayerAnimation = false;

                     }*/

                    if (ball.meshB.position.x > (Math.abs(giveShotPointX)*shot.xShotPlayer1) || ball.meshB.position.x < -(Math.abs(giveShotPointX))*shot.xShotPlayer1) {
                        ball.meshB.position.x -= vaGiveShot;
                        ball.meshB.position.z -= vbGiveShot;
                        ball.meshB.rotation.x = 0;
                        ball.meshB.rotation.y = 0;
                        shotPlayer = false;
                        shotPlayerAnimation1 = true;
                        shotPlayerAnimationStart = false;
                        shotPlayerAnimation = false;
                    }

                    if (ball.meshB.position.x > 51 || ball.meshB.position.x < -51) {
                        //затемнение экрана после того , как один из игроков забил гол
                        document.getElementById('finish').style.height = "2000px";
                        document.getElementById('finish').style.width = "2000px";
                        document.getElementById('finish').style.paddingTop = "50px";
                        document.getElementById('finish').style.paddingLeft = "300px";
                    }

                    /*if (xShotPlayer1 >= 19 || xShotPlayer2 === true) {
                        if (xShotPlayer2 === false) {
                            xShotPlayer1 = xShotPlayer1 / xShotPlayer;
                        }

                        xShotPlayer2 = true;
                        if (meshB.position.x > (Math.abs(giveShotPointX)*xShotPlayer1) || meshB.position.x < -(Math.abs(giveShotPointX))*xShotPlayer1) {
                            meshB.position.x -= vaGiveShot;
                            meshB.position.z -= vbGiveShot;
                            meshB.rotation.x = 0;
                            meshB.rotation.y = 0;
                            shotPlayer = false;
                            shotPlayerAnimation1 = true;
                            shotPlayerAnimationStart = false;
                            shotPlayerAnimation = false;

                        }

                    }*/

                }
            }
            //анимация
            for (let i = 0; i < loadplayer.massPlayerX.length; i++) {
                for (let j = 0; j < lengthMass; j++) {

                    if (playerWithBall === true) {
                        socket.on('buttonStartSCl', function(data) {
                            buttonStartS = data.buttonStartSCl;
                        })
                    }
                    if (playerWithBall === false) {
                        socket.on('buttonStartFCl', function(data) {
                            buttonStartF = data.buttonStartFCl;
                        })
                    }



                    if ((meshBPositionXGiveShot === click.clickObject[j].position.x && meshBPositionZGiveShot === click.clickObject[j].position.z && meshBPositionZGiveShot !== undefined) || (meshBPositionZGiveShot === undefined)) {

                        if (shotPlayer === true && shotPlayerAnimation === true && buttonStartF[j] === true && buttonStartS[j] == true) {

                            if ((loadplayer.statusBar[i].position.z ===  click.clickObject[j].position.z && loadplayer.statusBar[i].position.x ===  click.clickObject[j].position.x - 0.5 && buttonStartF[j] === true && buttonStartS[j] == true) && ((((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) || shotPlayerAnimationStart === true)) {

                                if (shotPlayerAnimationStart === false) {
                                    playerNumberAnim = i;
                                }

                                if (playerWithBall === true) {
                                    if (loadplayer.mixer[playerNumberAnim] !== undefined) {
                                        loadplayer.mixer[playerNumberAnim].update(clock[playerNumberAnim].getDelta());
                                        loadplayer.mixer[playerNumberAnim].clipAction(loadplayer.geometry[playerNumberAnim].animations[0]).play();

                                        if (loadplayer.mixer[playerNumberAnim].clipAction(loadplayer.geometry[playerNumberAnim].animations[0]).time < 50/30 || loadplayer.mixer[playerNumberAnim].clipAction(loadplayer.geometry[playerNumberAnim].animations[0]).time > 100/30) {
                                            loadplayer.mixer[playerNumberAnim].clipAction(loadplayer.geometry[playerNumberAnim].animations[0]).time = 50/30;
                                        }

                                        if (loadplayer.mixer[playerNumberAnim].clipAction(loadplayer.geometry[playerNumberAnim].animations[0]).time > 68/30) {
                                            shotPlayerAnimation1 = false;
                                        }
                                        if (loadplayer.mixer[playerNumberAnim].clipAction(loadplayer.geometry[playerNumberAnim].animations[0]).time > 85/30) {
                                            shotPlayerAnimation = false;
                                        }
                                    }
                                }

                                shotPlayerAnimationStart = true;
                            }


                            if ((loadplayer.statusBar[i].position.z ===  click.clickObject[j].position.z && loadplayer.statusBar[i].position.x ===  click.clickObject[j].position.x - 0.5 && buttonStartF[j] === true && buttonStartS[j] == true) && ((((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x >= click.clickObject[j].position.x - 0.65) && (ball.meshB.position.x <= click.clickObject[j].position.x + 0.65))) || shotPlayerAnimationStart === true)) {
                                if (shotPlayerAnimationStart === false) {
                                    playerNumberAnim = i;
                                }

                                if (playerWithBall === false) {
                                    if (loadplayer.mixerS[playerNumberAnim] !== undefined) {
                                        loadplayer.mixerS[playerNumberAnim].update(clockS[playerNumberAnim].getDelta());
                                        loadplayer.mixerS[playerNumberAnim].clipAction(loadplayer.geometryS[playerNumberAnim].animations[0]).play();

                                        if (loadplayer.mixerS[playerNumberAnim].clipAction(loadplayer.geometryS[playerNumberAnim].animations[0]).time < 50/30 || loadplayer.mixerS[playerNumberAnim].clipAction(loadplayer.geometryS[playerNumberAnim].animations[0]).time > 100/30) {
                                            loadplayer.mixerS[playerNumberAnim].clipAction(loadplayer.geometryS[playerNumberAnim].animations[0]).time = 50/30;
                                        }

                                        if (loadplayer.mixerS[playerNumberAnim].clipAction(loadplayer.geometryS[playerNumberAnim].animations[0]).time > 68/30) {
                                            shotPlayerAnimation1 = false;
                                        }
                                        if (loadplayer.mixerS[playerNumberAnim].clipAction(loadplayer.geometryS[playerNumberAnim].animations[0]).time > 85/30) {
                                            shotPlayerAnimation = false;
                                        }
                                    }
                                }

                                shotPlayerAnimationStart = true;
                            }

                            //для игроков с сервера
                            if (playerWithBall === true) {
                                if (loadplayer.mixerS[playerShotServer] !== undefined ) {
                                    loadplayer.mixerS[playerShotServer].update(clockS[playerShotServer].getDelta());
                                    loadplayer.mixerS[playerShotServer].clipAction(loadplayer.geometryS[playerShotServer].animations[0]).play();

                                    if (loadplayer.mixerS[playerShotServer].clipAction(loadplayer.geometryS[playerShotServer].animations[0]).time < 50/30 || loadplayer.mixerS[playerShotServer].clipAction(loadplayer.geometryS[playerShotServer].animations[0]).time > 100/30) {
                                        loadplayer.mixerS[playerShotServer].clipAction(loadplayer.geometryS[playerShotServer].animations[0]).time = 50/30;
                                    }

                                    if (loadplayer.mixerS[playerShotServer].clipAction(loadplayer.geometryS[playerShotServer].animations[0]).time > 68/30) {
                                        shotPlayerAnimation1 = false;
                                    }
                                    if (loadplayer.mixerS[playerShotServer].clipAction(loadplayer.geometryS[playerShotServer].animations[0]).time > 85/30) {
                                        shotPlayerAnimation = false;
                                    }
                                }
                            }
                            if (playerWithBall === false) {
                                if (loadplayer.mixer[playerShotServer] !== undefined) {
                                    loadplayer.mixer[playerShotServer].update(clock[playerShotServer].getDelta());
                                    loadplayer.mixer[playerShotServer].clipAction(loadplayer.geometry[playerShotServer].animations[0]).play();

                                    if (loadplayer.mixer[playerShotServer].clipAction(loadplayer.geometry[playerShotServer].animations[0]).time < 50/30 || loadplayer.mixer[playerShotServer].clipAction(loadplayer.geometry[playerShotServer].animations[0]).time > 100/30) {
                                        loadplayer.mixer[playerShotServer].clipAction(loadplayer.geometry[playerShotServer].animations[0]).time = 50/30;
                                    }

                                    if (loadplayer.mixer[playerShotServer].clipAction(loadplayer.geometry[playerShotServer].animations[0]).time > 68/30) {
                                        shotPlayerAnimation1 = false;
                                    }
                                    if (loadplayer.mixer[playerShotServer].clipAction(loadplayer.geometry[playerShotServer].animations[0]).time > 85/30) {
                                        shotPlayerAnimation = false;
                                    }
                                }
                            }
                        }
                    }

                }
            }
            //конец удара

            //плавное передвижение игрока
            for (let i = 0; i < loadplayer.massPlayerX.length; i++) {
                for (let j = 0; j < lengthMass; j++) {

                    dribl.test1Animate = true;

                    //обработчики для одновременного нажатия на СТАРТ двумя игроками
                    if (playerWithBall === true) {
                        socket.on('buttonStartSCl', function(data) {
                            buttonStartS = data.buttonStartSCl;
                            /*
                            console.log(buttonStartS);
                            console.log(buttonStartF);
                            */
                        })
                        if ((buttonStartS.length === 0 && buttonStartF.length !== 0) || (buttonStartS[0] === undefined && buttonStartF[0] === true)) {

                            document.getElementById('wait').innerHTML = "<strong>Ожидайте клика от второго игрока</strong>";
                            document.getElementById('wait').style.height = "2000px";
                            document.getElementById('wait').style.width = "2000px";
                            document.getElementById('wait').style.paddingTop = "50px";
                            document.getElementById('wait').style.paddingLeft = "300px";
                        } else {
                            document.getElementById('wait').innerHTML = "";
                            document.getElementById('wait').style.height = "";
                            document.getElementById('wait').style.width = "";
                            document.getElementById('wait').style.paddingTop = "";
                            document.getElementById('wait').style.paddingLeft = "";
                        }
                    }
                    if (playerWithBall === false) {
                        socket.on('buttonStartFCl', function(data) {
                            buttonStartF = data.buttonStartFCl;
                            /*
                            console.log(buttonStartS);
                            console.log(buttonStartF);
                            */
                        })
                        if ((buttonStartS.length !== 0 && buttonStartF.length === 0) || (buttonStartS[0] === true && buttonStartF[0] === undefined)) {

                            document.getElementById('wait').innerHTML = "<strong>Ожидайте клика от второго игрока</strong>";
                            document.getElementById('wait').style.height = "2000px";
                            document.getElementById('wait').style.width = "2000px";
                            document.getElementById('wait').style.paddingTop = "50px";
                            document.getElementById('wait').style.paddingLeft = "300px";
                            /*document.getElementById('wait').style.left = "300px";
                            document.getElementById('wait').style.top = "50px";
                            document.getElementById('wait').style.height = "1000px";
                            document.getElementById('wait').style.color = "black";*/
                        } else {
                            document.getElementById('wait').innerHTML = "";
                            document.getElementById('wait').style.height = "";
                            document.getElementById('wait').style.width = "";
                            document.getElementById('wait').style.paddingTop = "";
                            document.getElementById('wait').style.paddingLeft = "";}
                    }




                    if (changePositionClick2[j] === true && buttonStartF[j] === true && buttonStartS[j] === true ) {

                        //чтоб не сбивались все статусбары в один
                        /*if ((loadplayer.statusBar[i].position.z === click.clickObject[j].position.z && loadplayer.statusBar[i].position.x === click.clickObject[j].position.x - 0.5)) {
                            if ()
                            massStBar[nMassStBar] = i;
                            nMassStBar++;
                            console.log(massStBar);
                        }*/

                        /*if (loadplayer.statusBarColor[i].visible !== undefined) {
                            loadplayer.statusBar[i].visible = false;
                            loadplayer.statusBarColor[i].visible = false;
                        }*/
                        inter.statusBarVisible = 1;




                        if ((loadplayer.statusBar[i].position.z === click.clickObject[j].position.z && loadplayer.statusBar[i].position.x === click.clickObject[j].position.x - 0.5)) {
                            //второе условие для мяча через X можно уменьшить расстояние т.к. при накладывании игроков , второй игрок побежит с мячем забрав его у первого
                            if ((((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65)))) { // || (((meshB.position.z <= click.clickObject[j].position.z + 0.65) && (meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((meshB.position.x >= click.clickObject[j].position.x - 0.65) && (meshB.position.x <= click.clickObject[j].position.x + 0.65)))
                                if (dribl.retardationVar[j] === false) {
                                    vaChangePlayerPosition1[j] = vaChangePlayerPosition[j];
                                    vbChangePlayerPosition1[j] = vbChangePlayerPosition[j];

                                    let arrowRotationForClient1 = dribl.arrowRotationForClient[j]*180/Math.PI;

                                    let rxBallStart = click.clickObject[j].position.x + 0.5;
                                    let rzBallStart = click.clickObject[j].position.z;
                                    let rxBall = rxBallStart - click.clickObject[j].position.x;
                                    let rzBall = rzBallStart - click.clickObject[j].position.z;
                                    let cBall = Math.cos(-(arrowRotationForClient1 * Math.PI / 180 - Math.PI) );
                                    let sBall = Math.sin(-(arrowRotationForClient1 * Math.PI / 180 - Math.PI) );
                                    let x1Ball = click.clickObject[j].position.x + rxBall*cBall - rzBall*sBall;
                                    let z1Ball = click.clickObject[j].position.z + rxBall*sBall + rzBall*cBall;
                                    ball.meshB.position.x = x1Ball;
                                    ball.meshB.position.z = z1Ball;

                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                    loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                    loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;

                                    let meshBPositionStart = ball.meshB.position.x;
                                    ball.meshB.position.x += vaChangePlayerPosition[j];

                                    if (ball.meshB.position.x < 30 && ball.meshB.position.x > -30 && meshBPositionStart < ball.meshB.position.x){
                                        this.camera.position.x = ball.meshB.position.x + 15;
                                        if (this.camera.position.x > 30) {
                                            this.camera.position.x = 30;
                                        }
                                    }

                                    if (ball.meshB.position.x < 30 && ball.meshB.position.x > -30 && meshBPositionStart > ball.meshB.position.x){
                                        this.camera.position.x = ball.meshB.position.x - 15;
                                        if (this.camera.position.x < -30) {
                                            this.camera.position.x = -30;
                                        }
                                    }

                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                    loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                    loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;
                                    ball.meshB.position.z += vbChangePlayerPosition[j];
                                    click.circle[i].position.x = 100;
                                    click.circle2[i].position.x = 100;
                                    click.circle0[i].position.y = 100;
                                    click.circle02[i].position.y = 100;
                                    click.circle10[i].position.y = 100;
                                    click.circle12[i].position.y = 100;
                                    click.circle20[i].position.y = 100;
                                    click.circle22[i].position.y = 100;
                                    click.circle30[i].position.y = 100;
                                    click.circle0[i].position.x = click.clickObject[j].position.x;
                                    click.circle02[i].position.x = click.clickObject[j].position.x;
                                    click.circle10[i].position.x = click.clickObject[j].position.x;
                                    click.circle20[i].position.x = click.clickObject[j].position.x;
                                    click.circle0[i].position.z = click.clickObject[j].position.z;
                                    click.circle02[i].position.z = click.clickObject[j].position.z;
                                    click.circle10[i].position.z = click.clickObject[j].position.z;
                                    click.circle20[i].position.z = click.clickObject[j].position.z;

                                    if (loadplayer.mixer[i] !== undefined && playerWithBall === true) {

                                        loadplayer.mixer[i].update(clock[i].getDelta());
                                        loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).play();

                                        //пример обрезки анимации
                                        if (loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time < 2334/30) {
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time = 2334/30;
                                        }
                                        if (loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time > 2353/30) {
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).paused = true;
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time = 2334/30;
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).paused = false;
                                        }
                                    }
                                    if (loadplayer.mixerS[i] !== undefined && playerWithBall === false) {
                                        loadplayer.mixerS[i].update(clockS[i].getDelta());
                                        loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).play();
                                        if (loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time < 2334/30) {
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time = 2334/30;
                                        }
                                        if (loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time > 2353/30) {
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).paused = true;
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time = 2334/30;
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).paused = false;
                                        }
                                    }
                                } else {

                                    click.clickObject[j].position.x += vaChangePlayerPosition1[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition1[j];
                                    ball.meshB.position.x += vaChangePlayerPosition1[j];
                                    ball.meshB.position.z += vbChangePlayerPosition1[j];
                                    loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                    loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                    loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                    loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;

                                    if ((click.clickObject[j].position.z <= dribl.retardationPositionZ[j] && dribl.retardationPositionZ[j] <= circleStartPositionPlayerZ[j]) || (click.clickObject[j].position.z >= dribl.retardationPositionZ[j] && dribl.retardationPositionZ[j] >= circleStartPositionPlayerZ[j]) ){
                                        dribl.retardationVar[j] = false;
                                        let scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[j] - click.clickObject[j].position.x), 2) + Math.pow((changePlayerPositionZ[j] - click.clickObject[j].position.z), 2));
                                        let t = scChangePosition / 0.2;
                                        vaChangePlayerPosition[j] = (changePlayerPositionX[j] - click.clickObject[j].position.x) / t;
                                        vbChangePlayerPosition[j] = (changePlayerPositionZ[j] - click.clickObject[j].position.z) / t;

                                    }


                                }


                            } else {
                                if (dribl.retardationVar[j] === false) {

                                    /*
                                    if (loadplayer.statusBarColor[i].visible !== undefined) {
                                    loadplayer.statusBar[i].visible = false;
                                    loadplayer.statusBarColor[i].visible = false;
                                    }
                                    */


                                    /*let sx = click.clickObject[j].position.x - circleStartPositionPlayerX[enterClickPlayer];
                                    let sz = click.clickObject[j].position.z - circleStartPositionPlayerZ[enterClickPlayer];
                                    let scz = Math.sqrt((Math.pow((sx), 2) + Math.pow((sz), 2)));*/
                                    //console.log(vaChangePlayerPosition);
                                    //console.log(vbChangePlayerPosition);

                                    vaChangePlayerPosition1[j] = vaChangePlayerPosition[j];
                                    vbChangePlayerPosition1[j] = vbChangePlayerPosition[j];

                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];

                                    /*clickObjectEnterClickPositionX += vaChangePlayerPosition[j];
                                    clickObjectEnterClickPositionZ += vbChangePlayerPosition[j];

                                    if (deleteCircleBar === false && (click.circle[i].position.x === click.clickObject[j].position.x || click.circle[i].position.y === click.clickObject[j].position.x) && click.circle[i].position.z === click.clickObject[j].position.z){
                                        click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                        click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                    }

                                    //движение игрока после того как на предыдущем ходе он уже бежал
                                    if (click.circle30[i].position.x === click.clickObject[j].position.x && click.circle30[i].position.z === click.clickObject[j].position.z) {

                                        //arrowEnterClickRotation - поворот стрелки
                                        //clickObjectEnterRotation - поворот игрока
                                        deleteCircleBar = true;
                                        //ограничение по движениею в 30 градусов
                                        if ((arrowEnterClickRotation <= 30 && arrowEnterClickRotation >= 0) || (arrowEnterClickRotation >= 330 && arrowEnterClickRotation <= 360)) {
                                            console.log('30 gradusov');
                                            click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                            click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                        }

                                        if (arrowEnterClickRotation < 330 && arrowEnterClickRotation > 270) { //изменить знаки для +=

                                            //2 четверть --- движется вправо и вниз -- x увелич - z увелич
                                            if (changePlayerPositionX[j] >= circleStartPositionPlayerX[j] && changePlayerPositionZ[j] >= circleStartPositionPlayerZ[j]) {
                                                console.log('2 chetvert');
                                                //поворот игрока
                                                console.log(scz + ' ' + scChangePosition/2);
                                                if (scz < scChangePosition / 2) {
                                                    test10++;
                                                    console.log(test10 );
                                                    click.clickObject[j].position.x += (vaChangePlayerPosition[j] + (0.05 * sinScz));
                                                    click.clickObject[j].position.z += (vbChangePlayerPosition[j] - (0.05 * (1 - sinScz)));
                                                }
                                                //возрат игрока обратно
                                                if (scz >= scChangePosition / 2 && test11 === false) {
                                                    test10--;
                                                    console.log(test10 );
                                                    click.clickObject[j].position.x += (vaChangePlayerPosition[j] - (0.05 * sinScz));
                                                    click.clickObject[j].position.z += (vbChangePlayerPosition[j] + (0.05 * (1 - sinScz)));
                                                }
                                                //когда игрок попадает на прямую по которой должен был бы бежать
                                                if (test10 <= 0) {
                                                    test11 = true;
                                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                                }
                                            }
                                        }

                                        if (arrowEnterClickRotation > 30 && arrowEnterClickRotation < 90 ) {
                                            console.log('rabotaet vne 30 gradusov');

                                            /*
                                            if (scz < scChangePosition / 2) {
                                                test10++;
                                                click.clickObject[j].position.x += (vaChangePlayerPosition[j] + 0.1);
                                                click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                            }
                                            if (scz >= scChangePosition / 2 && test11 === false) {
                                                test10--;
                                                click.clickObject[j].position.x += (vaChangePlayerPosition[j] - 0.1);
                                                click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                            }
                                            if (test10 <= 0) {
                                                test11 = true;
                                                click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                            }
                                            */

                                    /*
                                                                    //3 четверть --- движется вправо и вверх -- x увелич - z уменьш
                                                                    if (changePlayerPositionX[j] >= circleStartPositionPlayerX[j] && changePlayerPositionZ[j] <= circleStartPositionPlayerZ[j]) {
                                                                        console.log('3 chetvert');
                                                                        if (scz < scChangePosition / 2) {
                                                                            test10++;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] + (0.3 * sinScz));
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] + (0.3 * (1 - sinScz)));
                                                                        }
                                                                        if (scz >= scChangePosition / 2 && test11 === false) {
                                                                            test10--;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] - (0.3 * sinScz));
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] - (0.3 * (1 - sinScz)));
                                                                        }
                                                                        if (test10 <= 0) {
                                                                            test11 = true;
                                                                            click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                                            click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                                                        }
                                                                    }

                                                                    //2 четверть --- движется вправо и вниз -- x увелич - z увелич
                                                                    if (changePlayerPositionX[j] >= circleStartPositionPlayerX[j] && changePlayerPositionZ[j] >= circleStartPositionPlayerZ[j]) {
                                                                        console.log('2 chetvert');
                                                                        //поворот игрока
                                                                        if (scz < scChangePosition / 2) {
                                                                            test10++;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] + (0.3 * sinScz));
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] - (0.3 * (1 - sinScz)));
                                                                        }
                                                                        //возрат игрока обратно
                                                                        if (scz >= scChangePosition / 2 && test11 === false) {
                                                                            test10--;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] - (0.3 * sinScz));
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] + (0.3 * (1 - sinScz)));
                                                                        }
                                                                        //когда игрок попадает на прямую по которой должен был бы бежать
                                                                        if (test10 <= 0) {
                                                                            test11 = true;
                                                                            click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                                            click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                                                        }
                                                                    }

                                                                    //1 четверть --- движется влево и вниз -- x уменьш - z увелич
                                                                    if (changePlayerPositionX[j] <= circleStartPositionPlayerX[j] && changePlayerPositionZ[j] >= circleStartPositionPlayerZ[j]) {
                                                                        console.log('1 chetvert');
                                                                        if (scz < scChangePosition / 2) {
                                                                            test10++;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] - (0.3 * sinScz)); //0.1 отвечает за угол поворота
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] - (0.3 * (1 - sinScz)));
                                                                        }
                                                                        if (scz >= scChangePosition / 2 && test11 === false) {
                                                                            test10--;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] + (0.3 * sinScz)); //0.1 отвечает за угол поворота
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] + (0.3 * (1 - sinScz)));
                                                                        }
                                                                       if (test10 <= 0) {
                                                                            test11 = true;
                                                                            click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                                            click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                                                        }
                                                                    }

                                                                    //4 четверть --- движется влево и вверх -- x уменьш - z уменьш
                                                                    if (changePlayerPositionX[j] <= circleStartPositionPlayerX[j] && changePlayerPositionZ[j] <= circleStartPositionPlayerZ[j]) {
                                                                        console.log('4 chetvert');
                                                                        if (scz < scChangePosition / 2) {
                                                                            test10++;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] - (0.3 * sinScz)); //0.1 отвечает за угол поворота
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] + (0.3 * (1 - sinScz)));
                                                                        }
                                                                        if (scz >= scChangePosition / 2 && test11 === false ) {
                                                                            test10--;
                                                                            click.clickObject[j].position.x += (vaChangePlayerPosition[j] + (0.3 * sinScz)); //0.1 отвечает за угол поворота
                                                                            click.clickObject[j].position.z += (vbChangePlayerPosition[j] - (0.3 * (1 - sinScz)));
                                                                        }
                                                                        if (test10 <= 0) {
                                                                            test11 = true;
                                                                            click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                                            click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                                                        }
                                                                    }

                                                                  }
                                                                }

                                                                if (arrowEnterClickRotation >= 90 && arrowEnterClickRotation <= 270) {
                                                                    console.log('zadniy krug');
                                                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                                                }*/

                                    loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                    loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                    loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                    loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;
                                    click.circle[i].position.x = 100;
                                    click.circle2[i].position.x = 100;
                                    click.circle0[i].position.y = 100;
                                    click.circle02[i].position.y = 100;
                                    click.circle10[i].position.y = 100;
                                    click.circle12[i].position.y = 100;
                                    click.circle20[i].position.y = 100;
                                    click.circle22[i].position.y = 100;
                                    click.circle30[i].position.y = 100;

                                    click.circle[i].position.y = click.clickObject[j].position.x;
                                    click.circle0[i].position.x = click.clickObject[j].position.x;
                                    click.circle02[i].position.x = click.clickObject[j].position.x;
                                    click.circle10[i].position.x = click.clickObject[j].position.x;
                                    click.circle20[i].position.x = click.clickObject[j].position.x;
                                    click.circle30[i].position.x = click.clickObject[j].position.x;
                                    click.circle[i].position.z = click.clickObject[j].position.z;
                                    click.circle0[i].position.z = click.clickObject[j].position.z;
                                    click.circle02[i].position.z = click.clickObject[j].position.z;
                                    click.circle10[i].position.z = click.clickObject[j].position.z;
                                    click.circle20[i].position.z = click.clickObject[j].position.z;
                                    click.circle30[i].position.z = click.clickObject[j].position.z;




                                    if (loadplayer.mixer[i] !== undefined && playerWithBall === true) {
                                        loadplayer.mixer[i].update(clock[i].getDelta());
                                        loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).play();
                                        if (loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time < 2334/30) {
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time = 2334/30;
                                        }
                                        if (loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time > 2353/30) {
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).paused = true;
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).time = 2334/30;
                                            loadplayer.mixer[i].clipAction(loadplayer.geometry[i].animations[0]).paused = false;
                                        }
                                    }

                                    if (loadplayer.mixerS[i] !== undefined && playerWithBall === false) {
                                        loadplayer.mixerS[i].update(clockS[i].getDelta());
                                        loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).play();
                                        if (loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time < 2334/30) {
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time = 2334/30;
                                        }
                                        if (loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time > 2353/30) {
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).paused = true;
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).time = 2334/30;
                                            loadplayer.mixerS[i].clipAction(loadplayer.geometryS[i].animations[0]).paused = false;
                                        }
                                    }


                                } else {
                                    click.clickObject[j].position.x += vaChangePlayerPosition1[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition1[j];

                                    loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                    loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                    loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                    loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;

                                    if (click.clickObject[j].position.z >= dribl.retardationPositionZ[j]){
                                        dribl.retardationVar[j] = false;
                                        let scChangePosition = Math.sqrt(Math.pow((changePlayerPositionX[j] - click.clickObject[j].position.x), 2) + Math.pow((changePlayerPositionZ[j] - click.clickObject[j].position.z), 2));
                                        let t = scChangePosition / 0.2;
                                        vaChangePlayerPosition[j] = (changePlayerPositionX[j] - click.clickObject[j].position.x) / t;
                                        vbChangePlayerPosition[j] = (changePlayerPositionZ[j] - click.clickObject[j].position.z) / t;

                                    }
                                }

                            }


                            if (click.clickObject[j].position.z <= changePlayerPositionZ[j] && changePlayerPositionZ[j] <= circleStartPositionPlayerZ[j] && changePositionClick2[j] === true) {
                                changePositionClick2[j] = false;
                                //sinSczBool = false;
                                //deleteCircleBar = false;
                                //test11 = false; - не удалять - идет связь

                                click.clickObject[j].position.x = changePlayerPositionX[j];
                                click.clickObject[j].position.z = changePlayerPositionZ[j];

                                loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;

                                click.circle[i].position.y = click.clickObject[j].position.x;
                                click.circle0[i].position.x = click.clickObject[j].position.x;
                                click.circle02[i].position.x = click.clickObject[j].position.x;
                                click.circle10[i].position.x = click.clickObject[j].position.x;
                                click.circle20[i].position.x = click.clickObject[j].position.x;
                                click.circle30[i].position.x = click.clickObject[j].position.x;
                                click.circle[i].position.z = click.clickObject[j].position.z;
                                click.circle0[i].position.z = click.clickObject[j].position.z;
                                click.circle02[i].position.z = click.clickObject[j].position.z;
                                click.circle10[i].position.z = click.clickObject[j].position.z;
                                click.circle20[i].position.z = click.clickObject[j].position.z;
                                click.circle30[i].position.z = click.clickObject[j].position.z;

                                if (meshBPositionXGiveShot !== undefined) {
                                    if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) {
                                        click.clickObject[j].position.x = meshBPositionXGiveShot;
                                        click.clickObject[j].position.z = meshBPositionZGiveShot;
                                        loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                        loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                        loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                        loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;
                                    }
                                }

                            }

                            if (click.clickObject[j].position.z >= changePlayerPositionZ[j] && changePlayerPositionZ[j] >= circleStartPositionPlayerZ[j] && changePositionClick2[j] === true) {
                                changePositionClick2[j] = false;
                                //sinSczBool = false;
                                //deleteCircleBar = false;
                                //test11 = false; - не удалять - идет связь

                                click.clickObject[j].position.x = changePlayerPositionX[j];
                                click.clickObject[j].position.z = changePlayerPositionZ[j];

                                loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;

                                click.circle[i].position.y = click.clickObject[j].position.x;
                                click.circle0[i].position.x = click.clickObject[j].position.x;
                                click.circle02[i].position.x = click.clickObject[j].position.x;
                                click.circle10[i].position.x = click.clickObject[j].position.x;
                                click.circle20[i].position.x = click.clickObject[j].position.x;
                                click.circle30[i].position.x = click.clickObject[j].position.x;
                                click.circle[i].position.z = click.clickObject[j].position.z;
                                click.circle0[i].position.z = click.clickObject[j].position.z;
                                click.circle02[i].position.z = click.clickObject[j].position.z;
                                click.circle10[i].position.z = click.clickObject[j].position.z;
                                click.circle20[i].position.z = click.clickObject[j].position.z;
                                click.circle30[i].position.z = click.clickObject[j].position.z;

                                if (meshBPositionXGiveShot !== undefined) {
                                    if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) {
                                        click.clickObject[j].position.x = meshBPositionXGiveShot;
                                        click.clickObject[j].position.z = meshBPositionZGiveShot;
                                        loadplayer.statusBar[i].position.x = click.clickObject[j].position.x - 0.5;
                                        loadplayer.statusBarColor[i].position.x = click.clickObject[j].position.x + 0.1;
                                        loadplayer.statusBar[i].position.z = click.clickObject[j].position.z;
                                        loadplayer.statusBarColor[i].position.z = click.clickObject[j].position.z;
                                    }
                                }
                            }
                        }

                        //для игроков с сервера
                        if(playerWithBall === false ) {
                            if (click.clickObject[j] === loadplayer.fPlayerDefenseF[massStBar[i]]) {
                                if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x >= click.clickObject[j].position.x - 0.65) && (ball.meshB.position.x <= click.clickObject[j].position.x + 0.65))) {


                                    /* if (loadplayer.statusBarColor[i].visible !== undefined) {
                                        loadplayer.statusBar[i].visible = false;
                                        loadplayer.statusBarColor[i].visible = false;
                                    }*/

                                    let arrowRotationServer1 = arrowRotationServer[j]*180/Math.PI;

                                    let rxBallStart = click.clickObject[j].position.x + 0.5;
                                    let rzBallStart = click.clickObject[j].position.z;
                                    let rxBall = rxBallStart - click.clickObject[j].position.x;
                                    let rzBall = rzBallStart - click.clickObject[j].position.z;
                                    let cBall = Math.cos(-(arrowRotationServer1 * Math.PI / 180 - Math.PI) );
                                    let sBall = Math.sin(-(arrowRotationServer1 * Math.PI / 180 - Math.PI) );
                                    let x1Ball = click.clickObject[j].position.x + rxBall*cBall - rzBall*sBall;
                                    let z1Ball = click.clickObject[j].position.z + rxBall*sBall + rzBall*cBall;
                                    ball.meshB.position.x = x1Ball;
                                    ball.meshB.position.z = z1Ball;
                                }
                                click.clickObject[j].rotation.y = arrowRotationServer[j] - Math.PI/2;
                                if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x <= click.clickObject[j].position.x + 0.65) && (ball.meshB.position.x >= click.clickObject[j].position.x - 0.65))) {

                                    vaChangePlayerPosition1[j] = vaChangePlayerPosition[j];
                                    vbChangePlayerPosition1[j] = vbChangePlayerPosition[j];

                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                    ball.meshB.position.x += vaChangePlayerPosition[j];
                                    ball.meshB.position.z += vbChangePlayerPosition[j];
                                } else {

                                    vaChangePlayerPosition1[j] = vaChangePlayerPosition[j];
                                    vbChangePlayerPosition1[j] = vbChangePlayerPosition[j];

                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                }
                                if (click.clickObject[j].position.z <= changePlayerPositionZ[j] && changePlayerPositionZ[j] <= circleStartPositionPlayerZ[j] && changePositionClick2[j] === true) {
                                    changePositionClick2[j] = false;

                                    click.clickObject[j].position.x = changePlayerPositionX[j];
                                    click.clickObject[j].position.z = changePlayerPositionZ[j];
                                }
                                if (click.clickObject[j].position.z >= changePlayerPositionZ[j] && changePlayerPositionZ[j] >= circleStartPositionPlayerZ[j] && changePositionClick2[j] === true) {
                                    changePositionClick2[j] = false;

                                    click.clickObject[j].position.x = changePlayerPositionX[j];
                                    click.clickObject[j].position.z = changePlayerPositionZ[j];
                                }
                                if (loadplayer.mixer[massStBar[i]] !== undefined) {

                                    loadplayer.mixer[massStBar[i]].update(clock[massStBar[i]].getDelta());
                                    loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).play();

                                    //пример обрезки анимации
                                    if (loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).time < 2334/30) {
                                        loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).time = 2334/30;
                                    }
                                    if (loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).time > 2353/30) {
                                        loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).paused = true;
                                        loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).time = 2334/30;
                                        loadplayer.mixer[massStBar[i]].clipAction(loadplayer.geometry[massStBar[i]].animations[0]).paused = false;
                                    }
                                }
                            }
                        }
                        //для игроков с сервера
                        if (playerWithBall === true) {
                            if (click.clickObject[j] === loadplayer.fPlayerDefenseS[massStBar[i]]) {

                                if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x >= click.clickObject[j].position.x - 0.65) && (ball.meshB.position.x <= click.clickObject[j].position.x + 0.65))) {

                                    /*if (loadplayer.statusBarColor[i].visible !== undefined) {
                                        loadplayer.statusBar[i].visible = false;
                                        loadplayer.statusBarColor[i].visible = false;
                                    } */

                                    let arrowRotationServer1 = arrowRotationServer[j]*180/Math.PI;

                                    let rxBallStart = click.clickObject[j].position.x + 0.5;
                                    let rzBallStart = click.clickObject[j].position.z;
                                    let rxBall = rxBallStart - click.clickObject[j].position.x;
                                    let rzBall = rzBallStart - click.clickObject[j].position.z;
                                    let cBall = Math.cos(-(arrowRotationServer1 * Math.PI / 180 - Math.PI) );
                                    let sBall = Math.sin(-(arrowRotationServer1 * Math.PI / 180 - Math.PI) );
                                    let x1Ball = click.clickObject[j].position.x + rxBall*cBall - rzBall*sBall;
                                    let z1Ball = click.clickObject[j].position.z + rxBall*sBall + rzBall*cBall;
                                    ball.meshB.position.x = x1Ball;
                                    ball.meshB.position.z = z1Ball;
                                }

                                click.clickObject[j].rotation.y = arrowRotationServer[j] - Math.PI/2;
                                if (((ball.meshB.position.z <= click.clickObject[j].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((ball.meshB.position.x >= click.clickObject[j].position.x - 0.65) && (ball.meshB.position.x <= click.clickObject[j].position.x + 0.65))) {

                                    vaChangePlayerPosition1[j] = vaChangePlayerPosition[j];
                                    vbChangePlayerPosition1[j] = vbChangePlayerPosition[j];

                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                    ball.meshB.position.x += vaChangePlayerPosition[j];
                                    ball.meshB.position.z += vbChangePlayerPosition[j];
                                } else {

                                    vaChangePlayerPosition1[j] = vaChangePlayerPosition[j];
                                    vbChangePlayerPosition1[j] = vbChangePlayerPosition[j];

                                    click.clickObject[j].position.x += vaChangePlayerPosition[j];
                                    click.clickObject[j].position.z += vbChangePlayerPosition[j];
                                }
                                if (click.clickObject[j].position.z <= changePlayerPositionZ[j] && changePlayerPositionZ[j] <= circleStartPositionPlayerZ[j] && changePositionClick2[j] === true) {
                                    changePositionClick2[j] = false;

                                    click.clickObject[j].position.x = changePlayerPositionX[j];
                                    click.clickObject[j].position.z = changePlayerPositionZ[j];
                                }

                                if (click.clickObject[j].position.z >= changePlayerPositionZ[j] && changePlayerPositionZ[j] >= circleStartPositionPlayerZ[j] && changePositionClick2[j] === true) {
                                    changePositionClick2[j] = false;

                                    click.clickObject[j].position.x = changePlayerPositionX[j];
                                    click.clickObject[j].position.z = changePlayerPositionZ[j];
                                }

                                if (loadplayer.mixerS[massStBar[i]] !== undefined ) {
                                    loadplayer.mixerS[massStBar[i]].update(clockS[massStBar[i]].getDelta());
                                    loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).play();

                                    if (loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).time < 2334/30) {
                                        loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).time = 2334/30;
                                    }

                                    if (loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).time > 2353/30) {
                                        loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).paused = true;
                                        loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).time = 2334/30;
                                        loadplayer.mixerS[massStBar[i]].clipAction(loadplayer.geometryS[massStBar[i]].animations[0]).paused = false;
                                    }

                                }
                            }
                        }

                    }

                }
            }
            //end

            //столкновения игроков
            for (let i = 0; i < click.clickObject.length ; i++) {
                //перебираем для каждого футболиста его визави ClickObject(в том числе игроков команды соперника)
                for (let j = 0; j < init.arrOfPlayer.length; j++) {
                    //прописываем условие , чтобы не было повторных прохождений
                    //ПРОПИСАТЬ ОДИН ВЫВОД
                    //прописываем неприкасаемые пределы для игрока
                    if (j > i && click.clickObject[j] !== undefined && click.clickObject[i] !== undefined && (click.clickObject[j].position.x - 2 <= click.clickObject[i].position.x && click.clickObject[i].position.x <= click.clickObject[j].position.x + 2) && (click.clickObject[j].position.z - 2 <= click.clickObject[i].position.z && click.clickObject[i].position.z <= click.clickObject[j].position.z + 2)) {
                        if (click.clickObject[i].position.x !== click.clickObject[j].position.x && click.clickObject[i].position.z !== click.clickObject[j].position.z) {
                            //записываем данные в массив
                            if (changePositionClick2[i] === true ) {
                                changePositionClick2[i] = false;
                            }
                        }

                    }
                    if (loadplayer.fPlayerDefenseF[j] !== undefined && click.clickObject[i] !== undefined && (loadplayer.fPlayerDefenseF[j].position.x - 2 <= click.clickObject[i].position.x && click.clickObject[i].position.x <= loadplayer.fPlayerDefenseF[j].position.x + 2) && (loadplayer.fPlayerDefenseF[j].position.z - 2 <= click.clickObject[i].position.z && click.clickObject[i].position.z <= loadplayer.fPlayerDefenseF[j].position.z + 2)) {
                        if (loadplayer.fPlayerDefenseF[j].position.x !== click.clickObject[i].position.x && loadplayer.fPlayerDefenseF[j].position.z !== click.clickObject[i].position.z) {
                            let arrtyt = false;
                            for (let l = 0; l < click.clickObject.length; l++ ) {
                                if (loadplayer.fPlayerDefenseF[j].position.x === click.clickObject[l].position.x && loadplayer.fPlayerDefenseF[j].position.z === click.clickObject[l].position.z) {
                                    arrtyt = true;
                                }
                            }
                            if (arrtyt === false && changePositionClick2[i] === true) {
                                changePositionClick2[i] = false;
                            }

                        }
                    }
                    if (loadplayer.fPlayerDefenseS[j] !== undefined && click.clickObject[i] !== undefined && (loadplayer.fPlayerDefenseS[j].position.x - 2 <= click.clickObject[i].position.x && click.clickObject[i].position.x <= loadplayer.fPlayerDefenseS[j].position.x + 2) && (loadplayer.fPlayerDefenseS[j].position.z - 2 <= click.clickObject[i].position.z && click.clickObject[i].position.z <= loadplayer.fPlayerDefenseS[j].position.z + 2)) {
                        if (loadplayer.fPlayerDefenseS[j].position.x !== click.clickObject[i].position.x && loadplayer.fPlayerDefenseS[j].position.z !== click.clickObject[i].position.z) {

                            let arrtyt = false;
                            for (let l = 0; l < click.clickObject.length; l++ ) {
                                if (loadplayer.fPlayerDefenseS[j].position.x === click.clickObject[l].position.x && loadplayer.fPlayerDefenseS[j].position.z === click.clickObject[l].position.z) {
                                    arrtyt = true;
                                }
                            }
                            if (arrtyt === false && changePositionClick2[i] === true) {
                                changePositionClick2[i] = false;
                            }
                        }
                    }

                }

            }
            //конец столкновения игроков

            //передвижение мяча - Пас
            for (let j = 0; j < lengthMass; j++) {
                if (buttonStartF[j] === true && buttonStartS[j] === true) {

                    if (changePlayerPositionX[click.enterClickPlayer] !== undefined && enterGivePassValueApp === true) {
                        if (changePlayerPositionX[click.enterClickPlayer] === click.clickObject[click.enterClickPlayer].position.x && changePlayerPositionZ[click.enterClickPlayer] === click.clickObject[click.enterClickPlayer].position.z) {
                            ball.meshB.rotation.x += 0.4;
                            ball.meshB.rotation.y += 0.4;
                            ball.meshB.position.x += vaGivePass;
                            ball.meshB.position.z += vbGivePass;
                            inter.mainPlay = true;
                        }
                        enterGivePassValueApp1 = true;
                    } else {
                        enterGivePassValueApp1 = false;
                    }

                    if (enterGivePassValueApp === true &&  enterGivePassValueApp1 === false) {
                        ball.meshB.rotation.x += 0.4;
                        ball.meshB.rotation.y += 0.4;
                        ball.meshB.position.x += vaGivePass;
                        ball.meshB.position.z += vbGivePass;
                        inter.mainPlay = true; //исправление бага с переключением интерфейса после анимации
                    }
                    //два условия для двух разных направлений мяча (вверх и вниз)
                    if (ball.meshB !== undefined) {
                        if (ball.meshB.position.z <= givePassPointZ && givePassPointZ <= meshBPositionZGivePass) {
                            enterGivePassValueApp = false;
                            //mainPlay = true;
                        }

                        if (ball.meshB.position.z >= givePassPointZ && givePassPointZ >= meshBPositionZGivePass) {
                            enterGivePassValueApp = false;
                            //mainPlay = true;
                        }
                    }
                }
            }
            //передвижение мяча - Пас - конец

            //запрет на кнопки
            for (let i = 0; i < loadplayer.massPlayerX.length; i++) {
                for (let j = 0; j < lengthMass; j++) {

                    //проверка как набегался игрок
                    if (buttonStartF[j] === true && buttonStartS[j] === true) {
                        if ((loadplayer.statusBar[i].position.z === click.clickObject[j].position.z && loadplayer.statusBar[i].position.x === click.clickObject[j].position.x - 0.5)) {
                            if ((dribl.scSPlayer[j] > 10 && dribl.scPlayerFirst[i] === false)  ) {
                                for (let p = 0; p < 10; p++) {
                                    if (loadplayer.statusBarColor[i].material[p].opacity === 0) {
                                        if (loadplayer.statusBarColor[i].material[p-1] !== undefined) {
                                            loadplayer.statusBarColor[i].material[p-1].opacity = 0;
                                        }
                                    }
                                    if (p === 9) {
                                        if (loadplayer.statusBarColor[i].material[p].opacity === 1) {
                                            if (loadplayer.statusBarColor[i].material[p] !== undefined) {
                                                loadplayer.statusBarColor[i].material[p].opacity = 0;
                                            }
                                        }
                                    }

                                }
                                dribl.scChangePositionMass[j] = 0;
                                dribl.scPlayerFirst[i] = true;
                            }
                        }
                        if (dribl.scPlayerFirst[i] === true) {
                            //игрок стоит
                            if (click.circle[i].position.x === click.clickObject[j].position.x && click.circle[i].position.z === click.clickObject[j].position.z) {
                                if (dribl.scChangePositionMass[j] > click.circle[i].geometry.boundingSphere.radius * 0.25) {
                                    for (let p = 0; p < 10; p++) {
                                        if (loadplayer.statusBarColor[i].material[p-1] !== undefined) {
                                            loadplayer.statusBarColor[i].material[p-1].opacity = 0;
                                            dribl.scChangePositionMass[j] = 0;
                                        }
                                    }
                                }
                            }
                            //игрок бежит
                            if (click.circle[i].position.x === 100 && click.circle0[i].position.x === click.clickObject[j].position.x && click.circle0[i].position.z === click.clickObject[j].position.z) {
                                //центральный круг
                                if (dribl.arrowEnterClickRotationMass[j] >= 315 && dribl.arrowEnterClickRotationMass[j] <= 45) {
                                    if (dribl.scChangePositionMass[j] > click.circle0[i].geometry.boundingSphere.radius * 0.25) {
                                        for (let p = 0; p < 10; p++) {
                                            if (loadplayer.statusBarColor[i].material[p].opacity === 0) {
                                                if (loadplayer.statusBarColor[i].material[p-1] !== undefined) {
                                                    loadplayer.statusBarColor[i].material[p-1].opacity = 0;
                                                    dribl.scChangePositionMass[j] = 0
                                                }
                                            }
                                        }
                                    }
                                }

                                //боковые
                                if ((dribl.arrowEnterClickRotationMass[j] > 270 && dribl.arrowEnterClickRotationMass[j] < 315) || (dribl.arrowEnterClickRotationMass[j] > 45 && dribl.arrowEnterClickRotationMass[j] < 90)) {
                                    if (dribl.scChangePositionMass[j] > click.circle10[i].geometry.boundingSphere.radius * 0.25) {
                                        for (let p = 0; p < 10; p++) {
                                            if (loadplayer.statusBarColor[i].material[p].opacity === 0) {
                                                if (loadplayer.statusBarColor[i].material[p-1] !== undefined) {
                                                    loadplayer.statusBarColor[i].material[p-1].opacity = 0;
                                                    dribl.scChangePositionMass[j] = 0
                                                }
                                            }
                                        }
                                    }
                                }
                                //задний
                                if (dribl.arrowEnterClickRotationMass[j] <= 270 && dribl.arrowEnterClickRotationMass[j] >= 90) {
                                    for (let p = 0; p < 10; p++) {
                                        if (loadplayer.statusBarColor[i].material[p].opacity === 0) {
                                            if (loadplayer.statusBarColor[i].material[p-1] !== undefined) {
                                                loadplayer.statusBarColor[i].material[p-1].opacity = 0;
                                                dribl.scChangePositionMass[j] = 0
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }

                    if (changeNext === false && (changePositionClick2[j] === false || changePositionClick2[j] === undefined) && shotPlayer === false && enterGivePassValueApp === false  && buttonStartF[j] === true && buttonStartS[j] === true) {
                        delete buttonStartF[j];
                        delete buttonStartS[j];
                        dribl.test1Animate = false;
                        inter.statusBarVisible = 0;
                        dribl.coefShot = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1];//равен 100% на начале каждого хода

                    }

                }
            }

            let delta = loadplayer.clockSmoke.getDelta();
            let sp = loadplayer.smokeParticles.length;
            while(sp--) {
                loadplayer.smokeParticles[sp].rotation.z += (delta * 0.2);

                if (loadplayer.smokeParticles[sp].scale.x > 0.05) {
                    loadplayer.smokeParticles[sp].position.y += 0.005;
                    loadplayer.smokeParticles[sp].position.z -= 0.005;
                } else {
                    loadplayer.smokeParticles[sp].scale.x += 0.0001;
                    loadplayer.smokeParticles[sp].scale.y += 0.0001;
                }

            }

            if ( inter.mainPlay === true) {
                inter.mainInterface();
            }

            this.render();
            this.stats.update();
        }

    initialize() {
        this.init();
        this.animate();
    }

}

let init = new InitClass();



window.addEventListener('keydown', init.keyDown);
window.addEventListener('keyup', init.keyUp);

window.onload = init.initialize();



