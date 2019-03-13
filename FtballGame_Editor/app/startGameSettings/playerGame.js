class LoadTeam {
    constructor() {
        this.massPlayerX = [-32, -32, -32, -32, -20, -20, -20, -20, -7, -7, -50]; //координаты игроков
        this.massPlayerZ = [-5, -21, -37, -53, -5, -21, -37, -53, -21, -37, -31];

        this.massPlayerXS = [32, 32, 32, 32, 20, 20, 20, 20, 7, 7]; //координаты игроков
        this.massPlayerZS = [-5, -21, -37, -53, -5, -21, -37, -53, -21, -37];

        this.fPlayerDefenseS = [];
        this.fPlayerDefenseF = [];

        this.mixer = []; this.materials = []; this.geometry = [];
        this.mixerS = []; this.materialsS = []; this.geometryS = [];

        //дым
        this.clockSmoke = new THREE.Clock;
        this.smokeParticles = [];

        this.radiusCircle;

        this.playerFWeight = [];
        this.playerFHeight = [];

        this.playerBaseStartGame = [];

        this.statusBar = [];
        this.statusBarColor = [];
        this.statusBarExp1 = [];

        this.massStatusBar = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0];
        this.massStatusBarS = [1, 1, 1, 1, 1, 1, 0, 1, 1, 0];
    }

    loadPlayer() {

        function hexDec(h){
            let b = Number(h).toString(16);
            let c = '000000';
            //.log(b);
            if (b.length < 6) {
                let a = 6 - b.length;
                c = c.substr(0, a);
            }
            if (b.length >= 6) {
                c = '';
            }
            //.log(c);
            let a;
            if (c !== ''){
                a = '#' + c + (Number(h).toString(16));
            } else a = '#' + (Number(h).toString(16));
            //.log(a);
            let m = a.slice(1).match(/.{2}/g);
            m[0] = parseInt(m[0], 16);
            m[1] = parseInt(m[1], 16);
            m[2] = parseInt(m[2], 16);
            //.log(m);
            return m;
        }

        let statusBarExp = new THREE.JSONLoader();

        for (let i = 0; i < this.massPlayerX.length; i++) {
            //Статус Бар
            let lineGeometry = [], materialLine = [];
            lineGeometry[i] = new THREE.Geometry(); // фигура
            lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.5, 0)); // xyz создаем вектор
            lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.7, 0));
            lineGeometry[i].vertices.push(new THREE.Vector3(1.2, 3.7, 0));
            lineGeometry[i].vertices.push(new THREE.Vector3(1.2, 3.5, 0));
            lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.5, 0));
            materialLine[i] = new THREE.LineBasicMaterial( {
                color: 0x124f02,
                linewidth: 15
            } );

            this.statusBar[i] = new THREE.Line(lineGeometry[i], materialLine[i]);



            //добавление игроков
            let loader = new THREE.JDLoader();

            //smoke
            THREE.ImageUtils.crossOrigin = '';

            let smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
            let smokeMaterial = new THREE.MeshLambertMaterial({color: 0xb7b7b7, map: smokeTexture, transparent: true});
            let smokeGeo = new THREE.PlaneGeometry(300,300);

            for (let p = 0; p < 1; p++) {
                let particle = new THREE.Mesh(smokeGeo,smokeMaterial);
                particle.position.set(-59,3+Math.random()*20,Math.random()*20-60);
                particle.rotation.x = -Math.PI / 5;
                particle.scale.set(0.01, 0.01, 0.01);
                particle.rotation.z = Math.random() * 360;
                init.scene.add(particle);
                this.smokeParticles.push(particle);
            }


            /* if (i === 10 ) {


                 loader.load("models/player/gk/g_k.JD",
                     function (data) {
                         materialsGk = data.materials;
                         geometryGk = data.geometries[0];
                         goalkeeper = new THREE.SkinnedMesh(geometryGk, materialsGk);
                         goalkeeper.rotation.y = Math.PI / 2;

                         if (this.playerBaseStartGame[10].PlayerHeight <= 189 && this.playerBaseStartGame[10].PlayerHeight >= 176) {
                             playerFHeight[10] = 0.011;
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) > 30) {
                                 playerFWeight[10] = 0.0125;
                             }
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) < 20) {
                                 playerFWeight[10] = 0.010;
                             }
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) <= 30 && (this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) >= 20) {
                                 playerFWeight[10] = 0.011;
                             }
                         }
                         if (this.playerBaseStartGame[10].PlayerHeight > 189) {
                             playerFHeight[10] = 0.012;
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) > 30) {
                                 playerFWeight[10] = 0.0135;
                             }
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) < 20) {
                                 playerFWeight[10] = 0.011;
                             }
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) <= 30 && (this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) >= 20) {
                                 playerFWeight[10] = 0.012;
                             }
                         }
                         if (this.playerBaseStartGame[10].PlayerHeight < 176) {
                             playerFHeight[10] = 0.010;
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) > 30) {
                                 playerFWeight[10] = 0.0115;
                             }
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) < 20) {
                                 playerFWeight[10] = 0.009;
                             }
                             if ((this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) <= 30 && (this.playerBaseStartGame[10].PlayerWeight / ((this.playerBaseStartGame[10].PlayerHeight / 100) * (this.playerBaseStartGame[10].PlayerHeight / 100))) >= 20) {
                                 playerFWeight[10] = 0.010;
                             }
                         }

                         goalkeeper.scale.set(playerFWeight[10], playerFHeight[10], playerFWeight[10]);

                         //кожа
                         switch (this.playerBaseStartGame[i].SkinType) {
                             case ("EURO"):
                                 goalkeeper.material[1].map.image.src = "models/player/player/white.jpg";
                                 break;
                             case ("AFRO1"):
                                 goalkeeper.material[1].map.image.src = "models/player/player/black1.jpg";
                                 break;
                             case ("AFRO2"):
                                 goalkeeper.material[1].map.image.src = "models/player/player/black2.jpg";
                                 break;
                             case ("AFRO3"):
                                 goalkeeper.material[1].map.image.src = "models/player/player/black3.jpg";
                                 break;
                         }
                         //delete(this.fPlayerDefenseF[i].material[0]);
                         //конец кожи
                         //кроссовки
                         goalkeeper.material[4].color = {
                             r: this.playerBaseStartGame[i].sneakers[0],
                             g: this.playerBaseStartGame[i].sneakers[1],
                             b: this.playerBaseStartGame[i].sneakers[2]
                         };
                         //кроссовки
                         //борода
                         if (this.playerBaseStartGame[i].beardSpain === 0) {
                             delete(goalkeeper.material[9]);
                         }
                         if (this.playerBaseStartGame[i].beard === 0) {
                             delete(goalkeeper.material[10]);
                         }
                         if (this.playerBaseStartGame[i].beardSpainFull === 0) {
                             delete(goalkeeper.material[11]);
                         }
                         if (this.playerBaseStartGame[i].smallBeard === 0) {
                             delete(goalkeeper.material[12]);
                         }
                         //конец бороды
                         //прическа
                         if (this.playerBaseStartGame[i].ballHair === 0) {
                             delete(goalkeeper.material[8]);
                         }
                         if (this.playerBaseStartGame[i].hairstyleGreat === 0) {
                             delete(goalkeeper.material[13]);
                         }
                         if (this.playerBaseStartGame[i].iroquez === 0) {
                             delete(goalkeeper.material[14]);
                         }
                         if (this.playerBaseStartGame[i].normalHairstyle === 0) {
                             delete(goalkeeper.material[15]);
                         }
                         if (this.playerBaseStartGame[i].longHair === 0) {
                             delete(goalkeeper.material[16]);
                         }
                         if (this.playerBaseStartGame[i].ibrag === 0) {
                             delete(goalkeeper.material[17]);
                         }
                         //конец прически

                         goalkeeper.position.y = 0.005;
                         goalkeeper.position.z = massPlayerZ[i];
                         goalkeeper.position.x = massPlayerX[i];

                         mixerG = new THREE.AnimationMixer(goalkeeper);
                         scene.add(goalkeeper);
                     });
             }*/

            if (i === 10) {
            } else {
                let wayPlayerPlace = "models/player/player/playerLast.JD";
                loader.load(wayPlayerPlace, (data) => {
                        this.materials[i] = data.materials;
                        this.geometry[i] = data.geometries[0];
                        this.fPlayerDefenseF[i] = new THREE.SkinnedMesh(this.geometry[i], this.materials[i]);
                        this.fPlayerDefenseF[i].position.x = this.massPlayerX[i];
                        this.fPlayerDefenseF[i].position.y = 0.005;
                        this.fPlayerDefenseF[i].position.z = this.massPlayerZ[i];
                        this.fPlayerDefenseF[i].rotation.y = Math.PI/3;

                        if (this.playerBaseStartGame[i].PlayerHeight <= 189 && this.playerBaseStartGame[i].PlayerHeight >= 176) {
                            this.playerFHeight[i] = 0.011;
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) > 30) {
                                this.playerFWeight[i] = 0.0125;
                            }
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) < 20) {
                                this.playerFWeight[i] = 0.010;
                            }
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) <= 30 && (this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) >= 20) {
                                this.playerFWeight[i] = 0.011;
                            }
                        }

                        if (this.playerBaseStartGame[i].PlayerHeight > 189) {
                            this.playerFHeight[i] = 0.012;
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) > 30) {
                                this.playerFWeight[i] = 0.0135;
                            }
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) < 20) {
                                this.playerFWeight[i] = 0.011;
                            }
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) <= 30 && (this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) >= 20) {
                                this.playerFWeight[i] = 0.012;
                            }
                        }

                        if (this.playerBaseStartGame[i].PlayerHeight < 176) {
                            this.playerFHeight[i] = 0.010;
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) > 30) {
                                this.playerFWeight[i] = 0.0115;
                            }
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) < 20) {
                                this.playerFWeight[i] = 0.009;
                            }
                            if ((this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) <= 30 && (this.playerBaseStartGame[i].PlayerWeight / ((this.playerBaseStartGame[i].PlayerHeight / 100) * (this.playerBaseStartGame[i].PlayerHeight / 100))) >= 20) {
                                this.playerFWeight[i] = 0.010;
                            }
                        }

                        this.fPlayerDefenseF[i].scale.set(this.playerFWeight[i], this.playerFHeight[i], this.playerFWeight[i]);
                        //кожа
                        switch (this.playerBaseStartGame[i].SkinType) {
                            case ("EURO"):
                                this.fPlayerDefenseF[i].material[0].map.image.src = "models/player/player/white.jpg";
                                break;
                            case ("AFRO1"):
                                this.fPlayerDefenseF[i].material[0].map.image.src = "models/player/player/black1.jpg";
                                break;
                            case ("AFRO2"):
                                this.fPlayerDefenseF[i].material[0].map.image.src = "models/player/player/black2.jpg";
                                break;
                            case ("AFRO3"):
                                this.fPlayerDefenseF[i].material[0].map.image.src = "models/player/player/black3.jpg";
                                break;
                        }
                        //delete(this.fPlayerDefenseF[i].material[0]);
                        //конец кожи
                        //кроссовки
                        switch (this.playerBaseStartGame[i].ShoesType) {
                            case ("WHITE"):
                                this.fPlayerDefenseF[i].material[4].color = {
                                    r: 0.01568627450980392,
                                    g: 0.01568627450980392,
                                    b: 0.01568627450980392
                                }
                                break;
                            case ("BLACK"):
                                this.fPlayerDefenseF[i].material[4].color = {
                                    r: 0.01568627450980392,
                                    g: 0.01568627450980392,
                                    b: 0.01568627450980392
                                }
                                break;
                            case ("RED"):
                                this.fPlayerDefenseF[i].material[4].color = {
                                    r: 0.01568627450980392,
                                    g: 0.01568627450980392,
                                    b: 0.01568627450980392
                                }
                                break;
                            case ("YELLOW"):
                                this.fPlayerDefenseF[i].material[4].color = {
                                    r: 0.01568627450980392,
                                    g: 0.01568627450980392,
                                    b: 0.01568627450980392
                                }
                                break;
                        }

                        //кроссовки
                        //борода
                        switch (this.playerBaseStartGame[i].beardType) {
                            case ("SPAIN"):
                                delete(this.fPlayerDefenseF[i].material[10]);
                                delete(this.fPlayerDefenseF[i].material[11]);
                                delete(this.fPlayerDefenseF[i].material[12]);
                                break;
                            case ("SPFULL"):
                                delete(this.fPlayerDefenseF[i].material[9]);
                                delete(this.fPlayerDefenseF[i].material[10]);
                                delete(this.fPlayerDefenseF[i].material[12]);
                                break;
                            case ("SMALL"):
                                delete(this.fPlayerDefenseF[i].material[9]);
                                delete(this.fPlayerDefenseF[i].material[10]);
                                delete(this.fPlayerDefenseF[i].material[11]);
                                break;
                            case ("NORM"):
                                delete(this.fPlayerDefenseF[i].material[9]);
                                delete(this.fPlayerDefenseF[i].material[11]);
                                delete(this.fPlayerDefenseF[i].material[12]);
                                break;
                        }
                        //конец бороды
                        //прическа
                        switch (this.playerBaseStartGame[i].HairType) {
                            case ("BALL"):
                                delete(this.fPlayerDefenseF[i].material[13]);
                                delete(this.fPlayerDefenseF[i].material[14]);
                                delete(this.fPlayerDefenseF[i].material[15]);
                                delete(this.fPlayerDefenseF[i].material[16]);
                                delete(this.fPlayerDefenseF[i].material[17]);
                                delete(this.fPlayerDefenseF[i].material[28]);
                                break;
                            case ("GREAT"):
                                delete(this.fPlayerDefenseF[i].material[8]);
                                delete(this.fPlayerDefenseF[i].material[14]);
                                delete(this.fPlayerDefenseF[i].material[15]);
                                delete(this.fPlayerDefenseF[i].material[16]);
                                delete(this.fPlayerDefenseF[i].material[17]);
                                delete(this.fPlayerDefenseF[i].material[28]);
                                break;
                            case ("IROQ"):
                                delete(this.fPlayerDefenseF[i].material[8]);
                                delete(this.fPlayerDefenseF[i].material[13]);
                                delete(this.fPlayerDefenseF[i].material[15]);
                                delete(this.fPlayerDefenseF[i].material[16]);
                                delete(this.fPlayerDefenseF[i].material[17]);
                                delete(this.fPlayerDefenseF[i].material[28]);
                                break;
                            case ("NORM"):
                                delete(this.fPlayerDefenseF[i].material[8]);
                                delete(this.fPlayerDefenseF[i].material[13]);
                                delete(this.fPlayerDefenseF[i].material[14]);
                                delete(this.fPlayerDefenseF[i].material[16]);
                                delete(this.fPlayerDefenseF[i].material[17]);
                                delete(this.fPlayerDefenseF[i].material[28]);
                                break;
                            case ("LONG"):
                                delete(this.fPlayerDefenseF[i].material[8]);
                                delete(this.fPlayerDefenseF[i].material[13]);
                                delete(this.fPlayerDefenseF[i].material[14]);
                                delete(this.fPlayerDefenseF[i].material[15]);
                                delete(this.fPlayerDefenseF[i].material[17]);
                                delete(this.fPlayerDefenseF[i].material[28]);
                                break;
                            case ("IBRA"):
                                delete(this.fPlayerDefenseF[i].material[8]);
                                delete(this.fPlayerDefenseF[i].material[13]);
                                delete(this.fPlayerDefenseF[i].material[14]);
                                delete(this.fPlayerDefenseF[i].material[15]);
                                delete(this.fPlayerDefenseF[i].material[16]);
                                delete(this.fPlayerDefenseF[i].material[28]);
                                break;
                            case ("HORSE"):
                                delete(this.fPlayerDefenseF[i].material[8]);
                                delete(this.fPlayerDefenseF[i].material[13]);
                                delete(this.fPlayerDefenseF[i].material[14]);
                                delete(this.fPlayerDefenseF[i].material[15]);
                                delete(this.fPlayerDefenseF[i].material[16]);
                                delete(this.fPlayerDefenseF[i].material[17]);
                                break;
                        }

                        //конец прически
                        //форма
                        this.fPlayerDefenseF[i].material[1].opacity = playerForm[0];
                        this.fPlayerDefenseF[i].material[1].color.r = hexDec(playerForm[1])[0] / 255;
                        this.fPlayerDefenseF[i].material[1].color.g = hexDec(playerForm[1])[1] / 255;
                        this.fPlayerDefenseF[i].material[1].color.b = hexDec(playerForm[1])[2] / 255;
                        this.fPlayerDefenseF[i].material[2].opacity = playerForm[2];
                        this.fPlayerDefenseF[i].material[2].color.r = hexDec(playerForm[3])[0] / 255;
                        this.fPlayerDefenseF[i].material[2].color.g = hexDec(playerForm[3])[1] / 255;
                        this.fPlayerDefenseF[i].material[2].color.b = hexDec(playerForm[3])[2] / 255;
                        this.fPlayerDefenseF[i].material[3].opacity = playerForm[4];
                        this.fPlayerDefenseF[i].material[3].color.r = hexDec(playerForm[5])[0] / 255;
                        this.fPlayerDefenseF[i].material[3].color.g = hexDec(playerForm[5])[1] / 255;
                        this.fPlayerDefenseF[i].material[3].color.b = hexDec(playerForm[5])[2] / 255;
                        this.fPlayerDefenseF[i].material[5].opacity = playerForm[6];
                        this.fPlayerDefenseF[i].material[5].color.r = hexDec(playerForm[7])[0] / 255;
                        this.fPlayerDefenseF[i].material[5].color.g = hexDec(playerForm[7])[1] / 255;
                        this.fPlayerDefenseF[i].material[5].color.b = hexDec(playerForm[7])[2] / 255;
                        this.fPlayerDefenseF[i].material[6].opacity = playerForm[8];
                        this.fPlayerDefenseF[i].material[6].color.r = hexDec(playerForm[9])[0] / 255;
                        this.fPlayerDefenseF[i].material[6].color.g = hexDec(playerForm[9])[1] / 255;
                        this.fPlayerDefenseF[i].material[6].color.b = hexDec(playerForm[9])[2] / 255;
                        this.fPlayerDefenseF[i].material[7].opacity = playerForm[10];
                        this.fPlayerDefenseF[i].material[7].color.r = hexDec(playerForm[11])[0] / 255;
                        this.fPlayerDefenseF[i].material[7].color.g = hexDec(playerForm[11])[1] / 255;
                        this.fPlayerDefenseF[i].material[7].color.b = hexDec(playerForm[11])[2] / 255;
                        this.fPlayerDefenseF[i].material[18].opacity = playerForm[12];
                        this.fPlayerDefenseF[i].material[18].color.r = hexDec(playerForm[13])[0] / 255;
                        this.fPlayerDefenseF[i].material[18].color.g = hexDec(playerForm[13])[1] / 255;
                        this.fPlayerDefenseF[i].material[18].color.b = hexDec(playerForm[13])[2] / 255;
                        this.fPlayerDefenseF[i].material[19].opacity = playerForm[14];
                        this.fPlayerDefenseF[i].material[19].color.r = hexDec(playerForm[15])[0] / 255;
                        this.fPlayerDefenseF[i].material[19].color.g = hexDec(playerForm[15])[1] / 255;
                        this.fPlayerDefenseF[i].material[19].color.b = hexDec(playerForm[15])[2] / 255;
                        this.fPlayerDefenseF[i].material[20].opacity = playerForm[16];
                        this.fPlayerDefenseF[i].material[20].color.r = hexDec(playerForm[17])[0] / 255;
                        this.fPlayerDefenseF[i].material[20].color.g = hexDec(playerForm[17])[1] / 255;
                        this.fPlayerDefenseF[i].material[20].color.b = hexDec(playerForm[17])[2] / 255;
                        //конец формы

                        //this.fPlayerDefenseF[2].scale.set(0.017, 0.17, 0.17);
                        this.fPlayerDefenseF[i].castShadow = true; //тень
                        this.mixer[i] = new THREE.AnimationMixer(this.fPlayerDefenseF[i]);



                        init.scene.add(this.fPlayerDefenseF[i]);
                        if (playerWithBall === true) {
                            let conditionPlayerBaseStart = (this.playerBaseStartGame[i].Health + this.playerBaseStartGame[i].Morale)/2 + 10;
                            if (conditionPlayerBaseStart >= 100) {
                                conditionPlayerBaseStart = 100;
                            }
                            this.radiusCircle = 0.33 * 0.01 * conditionPlayerBaseStart * this.playerBaseStartGame[i].Pace * (1 - (this.playerBaseStartGame[i].PlayerHeight / 1000 + this.playerBaseStartGame[i].PlayerWeight / 400));

                            //overBar
                            let radiusCircleAfterRun = 0.33 * 0.01 * conditionPlayerBaseStart * this.playerBaseStartGame[i].Pace;

                            let geometryCircle = new THREE.CircleGeometry(this.radiusCircle, 50);
                            let materialCircle = new THREE.MeshBasicMaterial({
                                color: 0xfffc00,
                                transparent: true,
                                opacity: 0.3
                            });

                            let geometryCircle2 = new THREE.CircleGeometry(this.radiusCircle * 0.25, 50);
                            let materialCircle2 = new THREE.MeshBasicMaterial({
                                color: 0x001fcc,
                                transparent: true,
                                opacity: 0.2
                            });

                            let geometryCircle0 = new THREE.CircleGeometry(radiusCircleAfterRun, 50, 0, 1.575);
                            let materialCircle0 = new THREE.MeshBasicMaterial({
                                color: 0xfffc00,
                                transparent: true,
                                opacity: 0.3
                            });
                            let geometryCircle02 = new THREE.CircleGeometry(radiusCircleAfterRun * 0.25, 50, 0, 1.575);
                            let materialCircle02 = new THREE.MeshBasicMaterial({
                                color: 0x001fcc,
                                transparent: true,
                                opacity: 0.3
                            });

                            let geometryCircle10 = new THREE.CircleGeometry(radiusCircleAfterRun * 0.75, 50, 0, 0.7875);
                            let materialCircle10 = new THREE.MeshBasicMaterial({
                                color: 0xfffc00,
                                transparent: true,
                                opacity: 0.3
                            });
                            let geometryCircle12 = new THREE.CircleGeometry(radiusCircleAfterRun * 0.75 * 0.25, 50, 0, 0.7875);
                            let materialCircle12 = new THREE.MeshBasicMaterial({
                                color: 0x001fcc,
                                transparent: true,
                                opacity: 0.3
                            });

                            let geometryCircle20 = new THREE.CircleGeometry(radiusCircleAfterRun * 0.75, 50, 0, 0.7875);
                            let materialCircle20 = new THREE.MeshBasicMaterial({
                                color: 0xfffc00,
                                transparent: true,
                                opacity: 0.3
                            });
                            let geometryCircle22 = new THREE.CircleGeometry(radiusCircleAfterRun * 0.75 * 0.25, 50, 0, 0.7875);
                            let materialCircle22 = new THREE.MeshBasicMaterial({
                                color: 0x001fcc,
                                transparent: true,
                                opacity: 0.3
                            });

                            let geometryCircle30 = new THREE.CircleGeometry(this.radiusCircle / 2, 50, 0, 3.15);
                            let materialCircle30 = new THREE.MeshBasicMaterial({
                                color: 0xfffc00,
                                transparent: true,
                                opacity: 0.3
                            });


                            click.circle30[i] = new THREE.Mesh(geometryCircle30, materialCircle30);
                            click.circle30[i].position.y = 100;
                            click.circle30[i].rotation.x = Math.PI / 2;
                            click.circle30[i].rotation.y = Math.PI;
                            init.scene.add(click.circle30[i]);

                            click.circle0[i] = new THREE.Mesh(geometryCircle0, materialCircle0);

                            click.circle0[i].rotation.x = Math.PI / 2;
                            click.circle0[i].rotation.y = Math.PI;
                            click.circle0[i].position.y = 100;

                            init.scene.add(click.circle0[i]);


                            click.circle02[i] = new THREE.Mesh(geometryCircle02, materialCircle02);

                            click.circle02[i].rotation.x = Math.PI / 2;
                            click.circle02[i].rotation.y = Math.PI;
                            click.circle02[i].position.y = 100;
                            init.scene.add(click.circle02[i]);


                            click.circle10[i] = new THREE.Mesh(geometryCircle10, materialCircle10);
                            click.circle10[i].rotation.x = Math.PI / 2;
                            click.circle10[i].rotation.y = Math.PI;
                            click.circle10[i].position.y = 100;
                            //click.circle10[i].rotation.z = -1.0523608169004;
                            init.scene.add(click.circle10[i]);


                            click.circle12[i] = new THREE.Mesh(geometryCircle12, materialCircle12);
                            click.circle12[i].rotation.x = Math.PI / 2;
                            click.circle12[i].rotation.y = Math.PI;
                            click.circle12[i].position.y = 100;
                            //click.circle12[i].rotation.z = -1.0523608169004;
                            init.scene.add(click.circle12[i]);

                            click.circle20[i] = new THREE.Mesh(geometryCircle20, materialCircle20);
                            click.circle20[i].rotation.x = Math.PI / 2;
                            click.circle20[i].rotation.y = Math.PI;
                            //click.circle20[i].rotation.z = 1.2;
                            click.circle20[i].position.y = 100;
                            init.scene.add(click.circle20[i]);

                            click.circle22[i] = new THREE.Mesh(geometryCircle22, materialCircle22);
                            click.circle22[i].rotation.x = Math.PI / 2;
                            click.circle22[i].rotation.y = Math.PI;
                            //click.circle22[i].rotation.z = 1.2;
                            click.circle22[i].position.y = 100;
                            init.scene.add(click.circle22[i]);

                            click.circle[i] = new THREE.Mesh(geometryCircle, materialCircle);

                            click.circle[i].rotation.x = Math.PI / 2;//1.9995
                            click.circle[i].rotation.y = Math.PI;
                            click.circle[i].position.x = this.fPlayerDefenseF[i].position.x;
                            click.circle[i].position.z = this.fPlayerDefenseF[i].position.z;
                            click.circle[i].position.y = 100;
                            init.scene.add(click.circle[i]);

                            click.circle2[i] = new THREE.Mesh(geometryCircle2, materialCircle2);

                            click.circle2[i].rotation.x = Math.PI / 2;
                            click.circle2[i].rotation.y = Math.PI;
                            click.circle2[i].position.y = 100;
                            init.scene.add(click.circle2[i]);
                        }
                        if (playerWithBall === true) {
                            click.objects.push(this.fPlayerDefenseF[i]);
                            this.statusBar[i].position.x = this.massPlayerX[i] - 0.5;
                            this.statusBar[i].position.z = this.massPlayerZ[i];
                            this.statusBar[i].position.y = -1;
                            //scene.add(this.statusBar[i]);


                            this.statusBarExp1[i] = (object, color) => {
                                this.statusBarColor[i] = new THREE.Mesh(
                                    object, color
                                );
                                this.statusBarColor[i].position.x = this.massPlayerX[i] + 0.1;
                                this.statusBarColor[i].position.z = this.massPlayerZ[i];
                                this.statusBarColor[i].position.y = 2.515;
                                this.statusBarColor[i].scale.set(0.019, 0.027, 0.025);


                                this.statusBarColor[i].material[0].opacity = 1;
                                this.statusBarColor[i].material[1].opacity = 1;
                                this.statusBarColor[i].material[2].opacity = 1;
                                this.statusBarColor[i].material[3].opacity = this.massStatusBar[i];
                                this.statusBarColor[i].material[4].opacity = this.massStatusBar[i];
                                this.statusBarColor[i].material[5].opacity = this.massStatusBar[i];
                                this.statusBarColor[i].material[6].opacity = this.massStatusBar[i];
                                this.statusBarColor[i].material[7].opacity = this.massStatusBar[i];
                                this.statusBarColor[i].material[8].opacity = this.massStatusBar[i];
                                this.statusBarColor[i].material[9].opacity = this.massStatusBar[i];


                                for (let p = 0; p < 10; p++) {
                                    if (this.statusBarColor[i].material[p].opacity === 0) {
                                        lineGeometry[i].dispose();

                                        init.scene.remove(this.statusBar[i]);

                                        lineGeometry[i].vertices.pop();
                                        lineGeometry[i].vertices.pop();
                                        lineGeometry[i].vertices.pop();
                                        lineGeometry[i].vertices.pop();
                                        lineGeometry[i].vertices.pop();

                                        lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.5, 0)); // xyz создаем вектор
                                        lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.7, 0));
                                        lineGeometry[i].vertices.push(new THREE.Vector3((1.2 - (9 - p + 1) * 0.115), 3.7, 0));
                                        lineGeometry[i].vertices.push(new THREE.Vector3((1.2 - (9 - p + 1) * 0.115), 3.5, 0));
                                        lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.5, 0));
                                        //statusBar.geometry.vertices[0]
                                        init.scene.add(this.statusBar[i]);
                                        init.scene.add(this.statusBarColor[i]);
                                        break;
                                    } else {
                                        init.scene.add(this.statusBar[i]);
                                        init.scene.add(this.statusBarColor[i]);
                                    }
                                }
                            }
                            statusBarExp.load('models/statusBar/status_bar3.js', this.statusBarExp1[i]);

                        }
                    });
            }



            loader.load("models/player/player/playerLast.JD",
                (data) => {
                    this.materialsS[i] = data.materials;
                    this.geometryS[i] = data.geometries[0];
                    this.fPlayerDefenseS[i] = new THREE.SkinnedMesh(this.geometryS[i], this.materialsS[i]);
                    this.fPlayerDefenseS[i].position.x = this.massPlayerXS[i];
                    this.fPlayerDefenseS[i].position.y = 0.005;
                    this.fPlayerDefenseS[i].position.z = this.massPlayerZS[i];
                    this.fPlayerDefenseS[i].rotation.y = -Math.PI / 3;
                    this.fPlayerDefenseS[i].scale.set(0.013, 0.013, 0.013);
                    //this.fPlayerDefenseF[2].scale.set(0.017, 0.17, 0.17);
                    this.fPlayerDefenseS[i].castShadow = true; //тень
                    this.mixerS[i] = new THREE.AnimationMixer(this.fPlayerDefenseS[i]);

                    if (this.playerBaseStartGame[i].PlayerHeight <= 189 && this.playerBaseStartGame[i].PlayerHeight >= 176) {
                        this.playerFHeight[i] = 0.011;
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) > 30) {
                            this.playerFWeight[i] = 0.0125;
                        }
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) < 20) {
                            this.playerFWeight[i] = 0.010;
                        }
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) <= 30 && (this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) >= 20) {
                            this.playerFWeight[i] = 0.011;
                        }
                    }
                    if (this.playerBaseStartGame[i].PlayerHeight > 189 ) {
                        this.playerFHeight[i] = 0.012;
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) > 30) {
                            this.playerFWeight[i] = 0.0135;
                        }
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) < 20) {
                            this.playerFWeight[i] = 0.011;
                        }
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) <= 30 && (this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) >= 20) {
                            this.playerFWeight[i] = 0.012;
                        }
                    }
                    if (this.playerBaseStartGame[i].PlayerHeight < 176) {
                        this.playerFHeight[i] = 0.010;
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) > 30) {
                            this.playerFWeight[i] = 0.0115;
                        }
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) < 20) {
                            this.playerFWeight[i] = 0.009;
                        }
                        if ((this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) <= 30 && (this.playerBaseStartGame[i].PlayerWeight/((this.playerBaseStartGame[i].PlayerHeight/100)*(this.playerBaseStartGame[i].PlayerHeight/100))) >= 20) {
                            this.playerFWeight[i] = 0.010;
                        }
                    }

                    this.fPlayerDefenseS[i].scale.set(this.playerFWeight[i], this.playerFHeight[i], this.playerFWeight[i]);
                    //кожа
                    switch (this.playerBaseStartGame[i].SkinType) {
                        case ("EURO"):
                            this.fPlayerDefenseS[i].material[0].map.image.src = "models/player/player/white.jpg";
                            break;
                        case ("AFRO1"):
                            this.fPlayerDefenseS[i].material[0].map.image.src = "models/player/player/black1.jpg";
                            break;
                        case ("AFRO2"):
                            this.fPlayerDefenseS[i].material[0].map.image.src = "models/player/player/black2.jpg";
                            break;
                        case ("AFRO3"):
                            this.fPlayerDefenseS[i].material[0].map.image.src = "models/player/player/black3.jpg";
                            break;
                    }
                    //delete(this.fPlayerDefenseF[i].material[0]);
                    //конец кожи
                    //кроссовки
                    switch (this.playerBaseStartGame[i].ShoesType) {
                        case ("WHITE"):
                            this.fPlayerDefenseS[i].material[4].color = {
                                r: 0.01568627450980392,
                                g: 0.01568627450980392,
                                b: 0.01568627450980392
                            }
                            break;
                        case ("BLACK"):
                            this.fPlayerDefenseS[i].material[4].color = {
                                r: 0.01568627450980392,
                                g: 0.01568627450980392,
                                b: 0.01568627450980392
                            }
                            break;
                        case ("RED"):
                            this.fPlayerDefenseS[i].material[4].color = {
                                r: 0.01568627450980392,
                                g: 0.01568627450980392,
                                b: 0.01568627450980392
                            }
                            break;
                        case ("YELLOW"):
                            this.fPlayerDefenseS[i].material[4].color = {
                                r: 0.01568627450980392,
                                g: 0.01568627450980392,
                                b: 0.01568627450980392
                            }
                            break;
                    }
                    //кроссовки
                    //борода
                    switch (this.playerBaseStartGame[i].beardType) {
                        case ("SPAIN"):
                            delete(this.fPlayerDefenseS[i].material[10]);
                            delete(this.fPlayerDefenseS[i].material[11]);
                            delete(this.fPlayerDefenseS[i].material[12]);
                            break;
                        case ("SPFULL"):
                            delete(this.fPlayerDefenseS[i].material[9]);
                            delete(this.fPlayerDefenseS[i].material[10]);
                            delete(this.fPlayerDefenseS[i].material[12]);
                            break;
                        case ("SMALL"):
                            delete(this.fPlayerDefenseS[i].material[9]);
                            delete(this.fPlayerDefenseS[i].material[10]);
                            delete(this.fPlayerDefenseS[i].material[11]);
                            break;
                        case ("NORM"):
                            delete(this.fPlayerDefenseS[i].material[9]);
                            delete(this.fPlayerDefenseS[i].material[11]);
                            delete(this.fPlayerDefenseS[i].material[12]);
                            break;
                    }
                    //конец бороды
                    //прическа
                    switch (this.playerBaseStartGame[i].HairType) {
                        case ("BALL"):
                            delete(this.fPlayerDefenseS[i].material[13]);
                            delete(this.fPlayerDefenseS[i].material[14]);
                            delete(this.fPlayerDefenseS[i].material[15]);
                            delete(this.fPlayerDefenseS[i].material[16]);
                            delete(this.fPlayerDefenseS[i].material[17]);
                            delete(this.fPlayerDefenseS[i].material[28]);
                            break;
                        case ("GREAT"):
                            delete(this.fPlayerDefenseS[i].material[8]);
                            delete(this.fPlayerDefenseS[i].material[14]);
                            delete(this.fPlayerDefenseS[i].material[15]);
                            delete(this.fPlayerDefenseS[i].material[16]);
                            delete(this.fPlayerDefenseS[i].material[17]);
                            delete(this.fPlayerDefenseS[i].material[28]);
                            break;
                        case ("IROQ"):
                            delete(this.fPlayerDefenseS[i].material[8]);
                            delete(this.fPlayerDefenseS[i].material[13]);
                            delete(this.fPlayerDefenseS[i].material[15]);
                            delete(this.fPlayerDefenseS[i].material[16]);
                            delete(this.fPlayerDefenseS[i].material[17]);
                            delete(this.fPlayerDefenseS[i].material[28]);
                            break;
                        case ("NORM"):
                            delete(this.fPlayerDefenseS[i].material[8]);
                            delete(this.fPlayerDefenseS[i].material[13]);
                            delete(this.fPlayerDefenseS[i].material[14]);
                            delete(this.fPlayerDefenseS[i].material[16]);
                            delete(this.fPlayerDefenseS[i].material[17]);
                            delete(this.fPlayerDefenseS[i].material[28]);
                            break;
                        case ("LONG"):
                            delete(this.fPlayerDefenseS[i].material[8]);
                            delete(this.fPlayerDefenseS[i].material[13]);
                            delete(this.fPlayerDefenseS[i].material[14]);
                            delete(this.fPlayerDefenseS[i].material[15]);
                            delete(this.fPlayerDefenseS[i].material[17]);
                            delete(this.fPlayerDefenseS[i].material[28]);
                            break;
                        case ("IBRA"):
                            delete(this.fPlayerDefenseS[i].material[8]);
                            delete(this.fPlayerDefenseS[i].material[13]);
                            delete(this.fPlayerDefenseS[i].material[14]);
                            delete(this.fPlayerDefenseS[i].material[15]);
                            delete(this.fPlayerDefenseS[i].material[16]);
                            delete(this.fPlayerDefenseS[i].material[28]);
                            break;
                        case ("HORSE"):
                            delete(this.fPlayerDefenseS[i].material[8]);
                            delete(this.fPlayerDefenseS[i].material[13]);
                            delete(this.fPlayerDefenseS[i].material[14]);
                            delete(this.fPlayerDefenseS[i].material[15]);
                            delete(this.fPlayerDefenseS[i].material[16]);
                            delete(this.fPlayerDefenseS[i].material[17]);
                            break;

                    }
                    //конец прически
                    //форма
                    this.fPlayerDefenseS[i].material[1].opacity = playerForm[18];
                    this.fPlayerDefenseS[i].material[1].color.r = hexDec(playerForm[19])[0] / 255;
                    this.fPlayerDefenseS[i].material[1].color.g = hexDec(playerForm[19])[1] / 255;
                    this.fPlayerDefenseS[i].material[1].color.b = hexDec(playerForm[19])[2] / 255;
                    this.fPlayerDefenseS[i].material[2].opacity = playerForm[20];
                    this.fPlayerDefenseS[i].material[2].color.r = hexDec(playerForm[21])[0] / 255;
                    this.fPlayerDefenseS[i].material[2].color.g = hexDec(playerForm[21])[1] / 255;
                    this.fPlayerDefenseS[i].material[2].color.b = hexDec(playerForm[21])[2] / 255;
                    this.fPlayerDefenseS[i].material[3].opacity = playerForm[22];
                    this.fPlayerDefenseS[i].material[3].color.r = hexDec(playerForm[23])[0] / 255;
                    this.fPlayerDefenseS[i].material[3].color.g = hexDec(playerForm[23])[1] / 255;
                    this.fPlayerDefenseS[i].material[3].color.b = hexDec(playerForm[23])[2] / 255;
                    this.fPlayerDefenseS[i].material[5].opacity = playerForm[24];
                    this.fPlayerDefenseS[i].material[5].color.r = hexDec(playerForm[25])[0] / 255;
                    this.fPlayerDefenseS[i].material[5].color.g = hexDec(playerForm[25])[1] / 255;
                    this.fPlayerDefenseS[i].material[5].color.b = hexDec(playerForm[25])[2] / 255;
                    this.fPlayerDefenseS[i].material[6].opacity = playerForm[26];
                    this.fPlayerDefenseS[i].material[6].color.r = hexDec(playerForm[27])[0] / 255;
                    this.fPlayerDefenseS[i].material[6].color.g = hexDec(playerForm[27])[1] / 255;
                    this.fPlayerDefenseS[i].material[6].color.b = hexDec(playerForm[27])[2] / 255;
                    this.fPlayerDefenseS[i].material[7].opacity = playerForm[28];
                    this.fPlayerDefenseS[i].material[7].color.r = hexDec(playerForm[29])[0] / 255;
                    this.fPlayerDefenseS[i].material[7].color.g = hexDec(playerForm[29])[1] / 255;
                    this.fPlayerDefenseS[i].material[7].color.b = hexDec(playerForm[29])[2] / 255;
                    this.fPlayerDefenseS[i].material[18].opacity = playerForm[30];
                    this.fPlayerDefenseS[i].material[18].color.r = hexDec(playerForm[31])[0] / 255;
                    this.fPlayerDefenseS[i].material[18].color.g = hexDec(playerForm[31])[1] / 255;
                    this.fPlayerDefenseS[i].material[18].color.b = hexDec(playerForm[31])[2] / 255;
                    this.fPlayerDefenseS[i].material[19].opacity = playerForm[32];
                    this.fPlayerDefenseS[i].material[19].color.r = hexDec(playerForm[33])[0] / 255;
                    this.fPlayerDefenseS[i].material[19].color.g = hexDec(playerForm[33])[1] / 255;
                    this.fPlayerDefenseS[i].material[19].color.b = hexDec(playerForm[33])[2] / 255;
                    this.fPlayerDefenseS[i].material[20].opacity = playerForm[34];
                    this.fPlayerDefenseS[i].material[20].color.r = hexDec(playerForm[35])[0] / 255;
                    this.fPlayerDefenseS[i].material[20].color.g = hexDec(playerForm[35])[1] / 255;
                    this.fPlayerDefenseS[i].material[20].color.b = hexDec(playerForm[35])[2] / 255;
                    //конец формы

                    if (playerWithBall === false) {
                        let conditionPlayerBaseStart = (this.playerBaseStartGame[i].Health + this.playerBaseStartGame[i].Morale)/2 + 10;
                        if (conditionPlayerBaseStart >= 100) {
                            conditionPlayerBaseStart = 100;
                        }
                        this.radiusCircle = 0.33*0.01 * conditionPlayerBaseStart * this.playerBaseStartGame[i].Pace * (1 - (this.playerBaseStartGame[i].PlayerHeight/1000 + this.playerBaseStartGame[i].PlayerWeight/400));
                        /*.log(a1);*/
                        //overBar
                        let radiusCircleAfterRun = 0.33*0.01*conditionPlayerBaseStart*this.playerBaseStartGame[i].Pace;

                        let geometryCircle = new THREE.CircleGeometry(this.radiusCircle, 50);
                        let materialCircle = new THREE.MeshBasicMaterial({color: 0xfffc00, transparent: true, opacity: 0.3});

                        let geometryCircle2 = new THREE.CircleGeometry(this.radiusCircle*0.25, 50);
                        let materialCircle2 = new THREE.MeshBasicMaterial({color: 0x001fcc, transparent: true, opacity: 0.2});

                        let geometryCircle0 = new THREE.CircleGeometry( radiusCircleAfterRun, 50, 0, 1.575 );
                        let materialCircle0 = new THREE.MeshBasicMaterial( { color: 0xfffc00, transparent:true, opacity:0.3 } );
                        let geometryCircle02 = new THREE.CircleGeometry( radiusCircleAfterRun*0.25, 50, 0, 1.575 );
                        let materialCircle02 = new THREE.MeshBasicMaterial( { color: 0x001fcc, transparent:true, opacity:0.3 } );

                        let geometryCircle10 = new THREE.CircleGeometry( radiusCircleAfterRun*0.75, 50, 0, 0.7875 );
                        let materialCircle10 = new THREE.MeshBasicMaterial( { color: 0xfffc00, transparent:true, opacity:0.3 } );
                        let geometryCircle12 = new THREE.CircleGeometry( radiusCircleAfterRun*0.75*0.25, 50, 0, 0.7875 );
                        let materialCircle12 = new THREE.MeshBasicMaterial( { color: 0x001fcc, transparent:true, opacity:0.3 } );

                        let geometryCircle20 = new THREE.CircleGeometry( radiusCircleAfterRun*0.75, 50, 0, 0.7875 );
                        let materialCircle20 = new THREE.MeshBasicMaterial( { color: 0xfffc00, transparent:true, opacity:0.3 } );
                        let geometryCircle22 = new THREE.CircleGeometry( radiusCircleAfterRun*0.75*0.25, 50, 0, 0.7875 );
                        let materialCircle22 = new THREE.MeshBasicMaterial( { color: 0x001fcc, transparent:true, opacity:0.3 } );

                        let geometryCircle30 = new THREE.CircleGeometry( this.radiusCircle/2, 50, 0, 3.15 );
                        let materialCircle30 = new THREE.MeshBasicMaterial( { color: 0xfffc00, transparent:true, opacity:0.3 } );

                        click.circle30[i] = new THREE.Mesh( geometryCircle30, materialCircle30 );
                        click.circle30[i].position.y = 100;
                        click.circle30[i].rotation.x = Math.PI/2;
                        click.circle30[i].rotation.y = Math.PI;
                        init.scene.add(click.circle30[i]);

                        click.circle0[i] = new THREE.Mesh( geometryCircle0, materialCircle0 );

                        click.circle0[i].rotation.x = Math.PI/2;
                        click.circle0[i].rotation.y = Math.PI;
                        click.circle0[i].position.y = 100;

                        init.scene.add( click.circle0[i]);


                        click.circle02[i] = new THREE.Mesh( geometryCircle02, materialCircle02 );

                        click.circle02[i].rotation.x = Math.PI/2;
                        click.circle02[i].rotation.y = Math.PI;
                        click.circle02[i].position.y = 100;
                        init.scene.add( click.circle02[i]);


                        click.circle10[i] = new THREE.Mesh( geometryCircle10, materialCircle10 );
                        click.circle10[i].rotation.x = Math.PI/2;
                        click.circle10[i].rotation.y = Math.PI;
                        click.circle10[i].position.y = 100;
                        //click.circle10[i].rotation.z = -1.0523608169004;
                        init.scene.add( click.circle10[i] );


                        click.circle12[i] = new THREE.Mesh( geometryCircle12, materialCircle12 );
                        click.circle12[i].rotation.x = Math.PI/2;
                        click.circle12[i].rotation.y = Math.PI;
                        click.circle12[i].position.y = 100;
                        // click.circle12[i].rotation.z = -1.0523608169004;
                        init.scene.add( click.circle12[i] );

                        click.circle20[i] = new THREE.Mesh( geometryCircle20, materialCircle20 );
                        click.circle20[i].rotation.x = Math.PI/2;
                        click.circle20[i].rotation.y = Math.PI;
                        // click.circle20[i].rotation.z = 1.2;
                        click.circle20[i].position.y = 100;
                        init.scene.add( click.circle20[i] );

                        click.circle22[i] = new THREE.Mesh( geometryCircle22, materialCircle22 );
                        click.circle22[i].rotation.x = Math.PI/2;
                        click.circle22[i].rotation.y = Math.PI;
                        //click.circle22[i].rotation.z = 1.2;
                        click.circle22[i].position.y = 100;
                        init.scene.add( click.circle22[i] );

                        click.circle[i] = new THREE.Mesh(geometryCircle, materialCircle);

                        click.circle[i].rotation.x = Math.PI / 2;//1.9995
                        click.circle[i].rotation.y = Math.PI;
                        click.circle[i].position.x = this.fPlayerDefenseS[i].position.x;
                        click.circle[i].position.z = this.fPlayerDefenseS[i].position.z;
                        click.circle[i].position.y = 100;
                        init.scene.add(click.circle[i]);

                        click.circle2[i] = new THREE.Mesh(geometryCircle2, materialCircle2);

                        click.circle2[i].rotation.x = Math.PI / 2;
                        click.circle2[i].rotation.y = Math.PI;
                        click.circle2[i].position.y = 100;
                        init.scene.add(click.circle2[i]);
                    }

                    //.log(playerWithBall);
                    init.scene.add(this.fPlayerDefenseS[i]);
                    if (playerWithBall === false) {
                        click.objects.push(this.fPlayerDefenseS[i]);
                        this.statusBar[i].position.x = this.massPlayerXS[i] - 0.5;
                        this.statusBar[i].position.z = this.massPlayerZS[i];
                        this.statusBar[i].position.y = -1;
                        this.statusBarExp1[i] = (object, color) => {
                            this.statusBarColor[i] = new THREE.Mesh(
                                object, color
                            );
                            this.statusBarColor[i].position.x = this.massPlayerXS[i] + 0.1;
                            this.statusBarColor[i].position.z = this.massPlayerZS[i];
                            this.statusBarColor[i].position.y = 2.515;
                            this.statusBarColor[i].scale.set(0.019, 0.027, 0.025);

                            this.statusBarColor[i].material[0].opacity = 1;
                            this.statusBarColor[i].material[1].opacity = 1;
                            this.statusBarColor[i].material[2].opacity = 1;
                            this.statusBarColor[i].material[3].opacity = 1;
                            this.statusBarColor[i].material[4].opacity = 1;
                            this.statusBarColor[i].material[5].opacity = 1;
                            this.statusBarColor[i].material[6].opacity = this.massStatusBarS[i];
                            this.statusBarColor[i].material[7].opacity = this.massStatusBarS[i];
                            this.statusBarColor[i].material[8].opacity = this.massStatusBarS[i];
                            this.statusBarColor[i].material[9].opacity = this.massStatusBarS[i];

                            for (let p = 0; p < 10; p++) {
                                if (this.statusBarColor[i].material[p].opacity === 0) {
                                    lineGeometry[i].dispose();

                                    init.scene.remove(this.statusBar[i]);

                                    lineGeometry[i].vertices.pop();
                                    lineGeometry[i].vertices.pop();
                                    lineGeometry[i].vertices.pop();
                                    lineGeometry[i].vertices.pop();
                                    lineGeometry[i].vertices.pop();

                                    lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.5, 0)); // xyz создаем вектор
                                    lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.7, 0));
                                    lineGeometry[i].vertices.push(new THREE.Vector3((1.2 - (9-p+1)*0.115), 3.7, 0));
                                    lineGeometry[i].vertices.push(new THREE.Vector3((1.2 - (9-p+1)*0.115), 3.5, 0));
                                    lineGeometry[i].vertices.push(new THREE.Vector3(0, 3.5, 0));
                                    //statusBar.geometry.vertices[0]
                                    init.scene.add(this.statusBar[i]);
                                    init.scene.add(this.statusBarColor[i]);
                                    break;
                                } else {
                                    init.scene.add(this.statusBar[i]);
                                    init.scene.add(this.statusBarColor[i]);
                                }

                            }


                        }
                        statusBarExp.load('models/statusBar/status_bar3.js', this.statusBarExp1[i]);
                    }
                });
        }

    }
}
let loadplayer = new LoadTeam();