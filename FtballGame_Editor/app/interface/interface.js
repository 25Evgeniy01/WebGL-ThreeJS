/**
 * Created by vzorv on 16.08.2017.
 */


class Interface {
    constructor() {

        this.playerWithBallInGame = [];

        this.leftButInterface = '<div class="buttonSelectFirstLeft" style="top:33px;left:34px;"><input type="button" value=""/></div>' +
            '<div class="buttonSelect" style="top:33px;left:56px;"><input type="button" value="w" /></div>';
        this.rightButInterface = '<div class="buttonSelectFirstRight" style="top:33px;left:145px;"><input type="button" value="w"/></div>' +
            '<div class="buttonSelectRight" style="top:33px;left:167px;"><input type="button" value="" /></div>';
        this.startInterface = '<input type="button" value="Start"/>';
        this.rechangeScheme = '<input type="button" value="Смена схемы"/>';
        this.ballInterface = '<div class="buttonBall" style="top:33px;left:92px;"><input type="button" value="b"/><span style="width: 15px;top: 14px;height: 15px;position: absolute;right: 12px;">w</span></div>';
//игрок с мячем
        this.dribblingInterface = '<div class="buttonMainFirst" style="top:83px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:83px;"><input type="button" id="dribblingButtonColor" style="color:white" value="Дриблинг" /></div>' ;
        this.passInterface =  '<div class="buttonMainFirst" style="top:133px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:133px;"><input type="button" id="passButtonColor" style="color:white" value="Пас" /></div>';
        this.passOverInterface = '<div class="buttonMainFirst" style="top:183px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:183px;"><input type="button" value="Навес" /></div>';
        this.shotInterface = '<div class="buttonMainFirst" style="top:233px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:233px;"><input type="button" value="Удар" style="color:white" id="shotJs"/></div>';
//игрок без мяча
        this.runInterface = '<div class="buttonMainFirst" style="top:83px"><input type="button" value="w"/></div>' + '<div class="buttonMainSecond"  style="top:83px;"><input type="button" value="Бег" /></div>';
        this.getPassInterface = '<div class="buttonMainFirst" style="top:133px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:133px;"><input type="button" value="Принять пас" /></div>';
        this.getPassShotInterface = '<div class="buttonMainFirst" style="top:183px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:183px;"><input type="button" value="Принять+удар" /></div>';
        this.stopInterface = '<div class="buttonMainFirst" style="top:283px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:283px;"><input type="button" value="Стоп" /></div>';
        this.replaceInterface = '<div class="buttonMainFirst" style="top:333px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:333px;"><input type="button" value="Замена" /></div>';
        this.statusBarVisibleInterface = '<div class="buttonMainFirst" style="top:373px"><input type="button" value="w"/></div>' +
            '<div class="buttonMainSecond" style="top:373px;"><input type="button" value="Откл." id="statusBarVisibleInterface"/></div>';
        this.statusBarVisible = 0;
        this.mainPlay = false;
    }

    /*//при кликах - запись игрока с мячом, чтобы дальше не выполнять проверки
    playerWithBallECF() {
        let clickObjectXMI = [], meshBXMI;

        let playerWithBallECP;

        //запись номера игрока click.clickObject[enterClickPlayer] который с мячом
        for (let j = 0; j < click.clickObject.length; j++) {
            if (playerWithBall === true) {
                clickObjectXMI[j] = click.clickObject[j].position.x + 0.65;
                meshBXMI = meshB.position.x;
            } else {
                clickObjectXMI[j] = -(click.clickObject[j].position.x - 0.65);
                meshBXMI = -(meshB.position.x);
            }

            if (((meshB.position.z <= click.clickObject[j].position.z + 0.65) && (meshB.position.z >= click.clickObject[j].position.z - 0.65)) && ((meshBXMI <= clickObjectXMI[j]) && (meshBXMI >= clickObjectXMI[j] - 1.3))) {
                playerWithBallECP = j;
            }
        }

        return playerWithBallECP;
    }*/

    mainPlayTrue() {
        this.mainPlay = true;//когда мы нажимаем Старт майнплей становится Тру и запускается анимация смены кнопок (функция ниже)
    }

    mainInterface() {

        let giveShotPointXShot, giveShotPointZShot, meshBXMI;
        let fPlayerWithBallZMI = [], fPlayerWithBallXMI = [], clickObjectXMI = [];
        let interfaceLeftBut = document.getElementById('leftBut'),
            interfaceRightBut = document.getElementById('rightBut'),
            interfaceBall = document.getElementById('ball'),
            interfaceDribbling = document.getElementById('dribbling'),
            interfacePass = document.getElementById('pass'),
            interfacePassOver = document.getElementById('passOver'),
            interfaceShot = document.getElementById('shot'),
            interfaceStop = document.getElementById('stop'),
            interfaceReplace = document.getElementById('replace'),
            interfaceRun = document.getElementById('run'),
            interfaceGetPass = document.getElementById('getPass'),
            interfaceGetPassAndShot = document.getElementById('getPassAndShot'),
            interfaceStopWithoutBall = document.getElementById('stopWithoutBall'),
            interfaceStatusBarVisible = document.getElementById('statusBarVisible');


        if (playerWithBall === true) {
            giveShotPointXShot = 50;
            giveShotPointZShot = -32;

        }
        if (playerWithBall === false) {
            giveShotPointXShot = -50;
            giveShotPointZShot = -32;
        }

        for (let j = 0; j < click.clickObject.length; j++){
            for (let i = 0; i < loadplayer.fPlayerDefenseF.length; i++) {
                    if (playerWithBall === true) {
                        fPlayerWithBallZMI[i] = loadplayer.fPlayerDefenseF[i].position.z;
                        fPlayerWithBallXMI[i] = loadplayer.fPlayerDefenseF[i].position.x + 0.65;
                        clickObjectXMI[j] = click.clickObject[j].position.x + 0.65;
                        meshBXMI = ball.meshB.position.x;
                    } else {
                        fPlayerWithBallZMI[i] = loadplayer.fPlayerDefenseS[i].position.z;
                        fPlayerWithBallXMI[i] = -(loadplayer.fPlayerDefenseS[i].position.x - 0.65);
                        clickObjectXMI[j] = -(click.clickObject[j].position.x - 0.65);
                        meshBXMI = -(ball.meshB.position.x);
                    }

                    if (((ball.meshB.position.z <= fPlayerWithBallZMI[i] + 0.65) && (ball.meshB.position.z >= fPlayerWithBallZMI[i] - 0.65)) && ((meshBXMI <= fPlayerWithBallXMI[i]) && (meshBXMI >= fPlayerWithBallXMI[i] - 1.3))) {
                            if (((ball.meshB.position.z <= click.clickObject[click.enterClickPlayer].position.z + 0.65) && (ball.meshB.position.z >= click.clickObject[click.enterClickPlayer].position.z - 0.65)) && ((meshBXMI <= clickObjectXMI[click.enterClickPlayer]) && (meshBXMI >= clickObjectXMI[click.enterClickPlayer] - 1.3))) {
                                interfaceLeftBut.innerHTML = this.leftButInterface;
                                interfaceRightBut.innerHTML = this.rightButInterface;
                                interfaceBall.innerHTML = this.ballInterface;
                                interfaceDribbling.innerHTML = this.dribblingInterface;
                                interfacePass.innerHTML = this.passInterface;
                                interfacePassOver.innerHTML = this.passOverInterface;
                                interfaceShot.innerHTML = this.shotInterface;
                                interfaceStop.innerHTML = this.stopInterface;
                                interfaceReplace.innerHTML = this.replaceInterface;
                                interfaceRun.innerHTML = '';
                                interfaceGetPass.innerHTML = '';
                                interfaceGetPassAndShot.innerHTML = '';
                                interfaceStopWithoutBall.innerHTML = '';
                                interfaceStatusBarVisible.innerHTML = this.statusBarVisibleInterface;

                                //номер игрока с мячем
                                inter.playerWithBallInGame[0] = click.enterClickPlayer;
                                inter.playerWithBallInGame[1] = i;

                                console.log("Игрок с мячем нумерация по клику " + inter.playerWithBallInGame[0]);
                                console.log("Игрок с мячем нумерация на начало игры " + inter.playerWithBallInGame[1]);

                                let playerKick = new Player();
                                //начальные настройки на удар
                                playerKick.kickOnGoalChange();
                                //расчет удара
                                playerKick.kickOnGoal();


                              /*  if (circle[i].position.x !== 100) {
                                    circleStartPositionPlayerX[j] = circle[i].position.x;
                                    circleStartPositionPlayerZ[j] = circle[i].position.z;
                                } else {
                                    circleStartPositionPlayerX[j] = circle0[i].position.x;
                                    circleStartPositionPlayerZ[j] = circle0[i].position.z;
                                }

                                let scShot = Math.sqrt(Math.pow((giveShotPointXShot - circleStartPositionPlayerX[j]), 2) + Math.pow((giveShotPointZShot - circleStartPositionPlayerZ[j]), 2));
                                let sbShot = Math.sqrt(Math.pow((giveShotPointZShot - circleStartPositionPlayerZ[j]), 2));
                                let saShot = Math.sqrt(Math.pow((giveShotPointXShot - circleStartPositionPlayerX[j]), 2));
                                let tanBShot = Math.atan(sbShot / saShot);
                                let xShotPlayerShot = scShot / 3;

                                let arrowEnterClickRotationShotShot, clickObjectEnterRotationShotShot;

                                if ((giveShotPointXShot > circleStartPositionPlayerX[j]) && (giveShotPointZShot > circleStartPositionPlayerZ[j])) {
                                    arrowEnterClickRotationShotShot = -(tanBShot + Math.PI);
                                }
                                if ((giveShotPointXShot > circleStartPositionPlayerX[j]) && (giveShotPointZShot < circleStartPositionPlayerZ[j])) {
                                    arrowEnterClickRotationShotShot = tanBShot + Math.PI;
                                }
                                if ((giveShotPointXShot < circleStartPositionPlayerX[j]) && (giveShotPointZShot < circleStartPositionPlayerZ[j])) {
                                    arrowEnterClickRotationShotShot = -tanBShot;
                                }
                                if ((giveShotPointXShot < circleStartPositionPlayerX[j]) && (giveShotPointZShot > circleStartPositionPlayerZ[j])) {
                                    arrowEnterClickRotationShotShot = tanBShot;
                                }

                                clickObjectEnterRotationShotShot = (click.clickObject[j].rotation.y + Math.PI/2)*180/Math.PI;

                                if (arrowEnterClickRotation !== undefined) {
                                    clickObjectEnterRotationShotShot = ((arrow[j].rotation.y - Math.PI/2) + Math.PI/2)*180/Math.PI;
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

                                let distance;

                                //пятка
                                if (document.getElementById('shotJs').value !== "Вынос") {
                                    if (arrowEnterClickRotationShotShot > 90 && arrowEnterClickRotationShotShot < 270) {
                                        distance = 3.98538*0.75; //т.к мы  тратим на разворот
                                        if (arrowEnterClickRotation >= 90 && arrowEnterClickRotation <= 270) {
                                            distance = distance * 0.5;
                                        }
                                        //12 метров - 20%

                                        if (xShotPlayerShot >= distance) {
                                            interfaceShot.innerHTML = '';
                                        }
                                    }
                                    //тещина нога
                                    if (arrowEnterClickRotationShotShot >= 270 && arrowEnterClickRotationShotShot < 345) {
                                        distance = 15.94152;

                                        if (arrowEnterClickRotation >= 90 && arrowEnterClickRotation <= 270) {
                                            distance = distance * 0.5;
                                        }
                                        //48 метров - 80%

                                        if (xShotPlayerShot >= distance) {
                                            interfaceShot.innerHTML = '';
                                        }
                                    }

                                    //рабочая нога
                                    if ((arrowEnterClickRotationShotShot <= 90 && arrowEnterClickRotationShotShot >= 0) || (arrowEnterClickRotationShotShot >= 345 && arrowEnterClickRotationShotShot <= 360)) {
                                        distance = 19.9269;

                                        if (arrowEnterClickRotation >= 90 && arrowEnterClickRotation <= 270) {
                                            distance = distance * 0.5;
                                        }

                                        /// /60 метров - 100%

                                        if (xShotPlayerShot >= distance) {
                                            interfaceShot.innerHTML = '';
                                        }
                                    }
                                }*/
                                //log("Угол поворота " + arrowEnterClickRotationShotShot);

                                 this.mainPlay = false;
                            }  else {
                                interfaceLeftBut.innerHTML = this.leftButInterface ;
                                interfaceRightBut.innerHTML = this.rightButInterface ;
                                interfaceRun.innerHTML = this.runInterface;
                                interfaceGetPass.innerHTML = this.getPassInterface;
                                interfaceGetPassAndShot.innerHTML = this.getPassShotInterface;
                                interfaceStopWithoutBall.innerHTML = this.stopInterface;
                                interfaceBall.innerHTML = this.ballInterface;
                                interfaceReplace.innerHTML = this.replaceInterface;
                                interfaceStop.innerHTML = '';
                                interfaceDribbling.innerHTML = '';
                                interfacePass.innerHTML = '';
                                interfacePassOver.innerHTML = '';
                                interfaceShot.innerHTML = '';
                                interfaceStatusBarVisible.innerHTML = this.statusBarVisibleInterface;
                                this.mainPlay = false;
                            }
                            break;
                    }  else {
                        interfaceLeftBut.innerHTML = this.leftButInterface;
                        interfaceRightBut.innerHTML= this.rightButInterface;
                        interfaceRun.innerHTML = '';
                        interfaceGetPass.innerHTML = '';
                        interfaceGetPassAndShot.innerHTML = '';
                        interfaceStopWithoutBall.innerHTML = '';
                        interfaceBall.innerHTML = this.ballInterface;
                        interfaceReplace.innerHTML = this.replaceInterface;
                        interfaceStop.innerHTML = '';
                        interfaceDribbling.innerHTML = '';
                        interfacePass.innerHTML = '';
                        interfacePassOver.innerHTML = '';
                        interfaceShot.innerHTML = '';
                        interfaceStatusBarVisible.innerHTML = this.statusBarVisibleInterface;
                        this.mainPlay = false;
                    }
            }
        }
    }   

}
let inter = new Interface();
//Всегда установлены кнопки
document.getElementById('start').innerHTML = inter.startInterface;
document.getElementById('rechangeScheme').innerHTML = inter.rechangeScheme;
