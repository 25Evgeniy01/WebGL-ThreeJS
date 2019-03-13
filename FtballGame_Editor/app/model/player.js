/**
 * Created by vzorv on 28.08.2017.
 */
class Player {
    constructor() {
    }

    //начальные настройки для удара
    kickOnGoalChange() {
        document.getElementById('shot').innerHTML = inter.shotInterface;

        if (playerWithBall === true ) {
            if (click.clickObject[click.enterClickPlayer].position.x < 0) {
                document.getElementById('shotJs').value = "Вынос";
            }
        } else {
            if (click.clickObject[click.enterClickPlayer].position.x > 0) {
                document.getElementById('shotJs').value = "Вынос";
            }
        }
    }

    //функция для прокладывания и расчета длины, возможности удара по воротам
    kickOnGoal() {

        let giveShotPointXShot, giveShotPointZShot, meshBXMI;
        let fPlayerWithBallZMI = [], fPlayerWithBallXMI = [], clickObjectXMI = [];

        if (playerWithBall === true) {
            giveShotPointXShot = 50;
            giveShotPointZShot = -32;
        } else {
            giveShotPointXShot = -50;
            giveShotPointZShot = -32;
        }

        //проверка достает ли удар до ворот
        //Расчет сколько осталось процентов для удара
        if (click.circle[inter.playerWithBallInGame[1]].position.x !== 100) {
            circleStartPositionPlayerX[click.enterClickPlayer] = click.circle[inter.playerWithBallInGame[1]].position.x;
            circleStartPositionPlayerZ[click.enterClickPlayer] = click.circle[inter.playerWithBallInGame[1]].position.z;
        } else {
            circleStartPositionPlayerX[click.enterClickPlayer] = click.circle0[inter.playerWithBallInGame[1]].position.x;
            circleStartPositionPlayerZ[click.enterClickPlayer] = click.circle0[inter.playerWithBallInGame[1]].position.z;
        }



        let scStartShot = Math.sqrt(Math.pow((giveShotPointXShot - click.clickObject[click.enterClickPlayer].position.x), 2) + Math.pow((giveShotPointZShot - click.clickObject[click.enterClickPlayer].position.z), 2));
        let scShot = Math.sqrt(Math.pow((giveShotPointXShot - circleStartPositionPlayerX[click.enterClickPlayer]), 2) + Math.pow((giveShotPointZShot - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
        let sbShot = Math.sqrt(Math.pow((giveShotPointZShot - circleStartPositionPlayerZ[click.enterClickPlayer]), 2));
        let saShot = Math.sqrt(Math.pow((giveShotPointXShot - circleStartPositionPlayerX[click.enterClickPlayer]), 2));
        let tanBShot = Math.atan(sbShot / saShot);
        let xShotPlayerShot = scShot / 3;

        let arrowEnterClickRotationShotShot, clickObjectEnterRotationShotShot;

        if ((giveShotPointXShot > circleStartPositionPlayerX[click.enterClickPlayer]) && (giveShotPointZShot > circleStartPositionPlayerZ[click.enterClickPlayer])) {
            arrowEnterClickRotationShotShot = -(tanBShot + Math.PI);
        }
        if ((giveShotPointXShot > circleStartPositionPlayerX[click.enterClickPlayer]) && (giveShotPointZShot < circleStartPositionPlayerZ[click.enterClickPlayer])) {
            arrowEnterClickRotationShotShot = tanBShot + Math.PI;
        }
        if ((giveShotPointXShot < circleStartPositionPlayerX[click.enterClickPlayer]) && (giveShotPointZShot < circleStartPositionPlayerZ[click.enterClickPlayer])) {
            arrowEnterClickRotationShotShot = -tanBShot;
        }
        if ((giveShotPointXShot < circleStartPositionPlayerX[click.enterClickPlayer]) && (giveShotPointZShot > circleStartPositionPlayerZ[click.enterClickPlayer])) {
            arrowEnterClickRotationShotShot = tanBShot;
        }

        clickObjectEnterRotationShotShot = (click.clickObject[click.enterClickPlayer].rotation.y + Math.PI / 2) * 180 / Math.PI;

        if (click.arrowEnterClickRotation !== undefined) {
            clickObjectEnterRotationShotShot = ((arrow[click.enterClickPlayer].rotation.y - Math.PI / 2) + Math.PI / 2) * 180 / Math.PI;
        }

        arrowEnterClickRotationShotShot = (arrowEnterClickRotationShotShot) * 180 / Math.PI;

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

        //.log("Длина стрелки передвижения в метрах " + scChangePosition);
        //узнаем процент который останется на удар

        let distance;

        //пятка
        if (document.getElementById('shotJs').value !== "Вынос") {

            if (changePositionClick011Next[click.enterClickPlayer] === true) {
                dribl.coefShot = 1 - dribl.coefShot;
            }
            if (click.arrowEnterClickRotation < 270 && click.arrowEnterClickRotation > 90 && changePositionClick011Next[click.enterClickPlayer] === true) {

            }

                //удар лежит в заднем круге - т.е. игрок стоит спиной к воротам
            if (arrowEnterClickRotationShotShot > 90 && arrowEnterClickRotationShotShot < 270) {
                distance = 3.98538 * dribl.coefShot; //* 0.75
                if (changePositionClick011Next[click.enterClickPlayer] === true) {

                }
                if (xShotPlayerShot >= (60 * 0.72) && changePositionClick011Next[click.enterClickPlayer] === false) {
                    document.getElementById('shot').innerHTML = '';
                }
            }
            //тещина нога
            if (arrowEnterClickRotationShotShot >= 270 && arrowEnterClickRotationShotShot < 345) {
                distance = 15.94152 * dribl.coefShot;

                if (click.arrowEnterClickRotation >= 90 && click.arrowEnterClickRotation <= 270) {
                    distance = distance * 0.5;
                }

                //48 метров - 80%
                if (xShotPlayerShot >= distance) {
                    document.getElementById('shot').innerHTML = '';
                }
            }

            //рабочая нога
            if ((arrowEnterClickRotationShotShot <= 90 && arrowEnterClickRotationShotShot >= 0) || (arrowEnterClickRotationShotShot >= 345 && arrowEnterClickRotationShotShot <= 360)) {
                distance = 19.9269 * dribl.coefShot;

                if (click.arrowEnterClickRotation >= 90 && click.arrowEnterClickRotation <= 270) {
                    distance = distance * 0.5;
                }
                //60 метров - 100%
                if (xShotPlayerShot >= distance) {
                    document.getElementById('shot').innerHTML = '';
                }
            }
            if (document.getElementById('shot').innerHTML === '') {
                if (click.arrowEnterClickRotation >= 90 && click.arrowEnterClickRotation <= 270) {

                }

            }
        }
    //.log("Угол поворота " + arrowEnterClickRotationShotShot);
    }




}