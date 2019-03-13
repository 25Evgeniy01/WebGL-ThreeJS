class ServerList {
    static clickPlayerServer() {
        if (playerWithBall === true) {
            socket.on('playerClickSCl', (data) => {
                let event = false;
                for (let i = 0; i < click.clickObject.length; i++) {
                    if (click.clickObject[i] === loadplayer.fPlayerDefenseS[data.playerClickSClG]) {
                        event = true;
                    }
                }
                if (event === false) {
                    let clickClientAndServer = click.enterClickPlayer;
                    if (lengthMass !== click.enterClickPlayer + 1) {
                        click.enterClickPlayer = lengthMass - 1;
                    }
                    click.enterClickPlayer++;
                    /*let lengthClickObject = enterClickPlayer;
                    if (clickClientAndServer === true) {
                        lengthClickObject = enterClickPlayer + 1;
                    }*/
                    click.clickObject[click.enterClickPlayer] = loadplayer.fPlayerDefenseS[data.playerClickSClG];
                    massStBar[nMassStBar] = data.playerClickSClG;
                    nMassStBar++;
                    /*.log(massStBar);
                    .log(clickObject);*/
                    lengthMass = click.enterClickPlayer + 1;
                    for (let i = 0; i < lengthMass - 1; i++) {
                        if (click.clickObject[click.enterClickPlayer].uuid === click.clickObject[i].uuid && click.clickObject[click.enterClickPlayer].uuid !== click.clickObject[click.enterClickPlayer - 1].uuid) {
                            lengthMass = (click.enterClickPlayer - 1) + 1;
                            click.enterClickPlayer = i;
                        }
                        if (click.enterClickPlayer > 0) {
                            if (click.clickObject[click.enterClickPlayer].uuid === click.clickObject[click.enterClickPlayer - 1].uuid) {
                                click.enterClickPlayer--;
                                lengthMass = click.enterClickPlayer + 1;
                            }
                        }
                    }
                    click.enterClickPlayer = clickClientAndServer;
                    //enterClickPlayer = enterClickPlayer + 1;
                }
            })

            socket.on('sentPlayerNewPositionSCl', (data) => {
                for (let i = 0; i <click.clickObject.length; i++) {
                    if (click.clickObject[i] === loadplayer.fPlayerDefenseS[data.playerClickSGCl]) {
                        circleStartPositionPlayerX[i] = data.circleStartPositionPlayerXCl;
                        circleStartPositionPlayerZ[i] = data.circleStartPositionPlayerZCl;
                        changePositionClick011Next[i] = data.changePositionClick2Cl;
                        changePlayerPositionX[i] = data.changePlayerPositionXCl;
                        changePlayerPositionZ[i] = data.changePlayerPositionZCl;
                        vaChangePlayerPosition[i] = data.vaChangePlayerPositionCl;
                        vbChangePlayerPosition[i] = data.vbChangePlayerPositionCl;
                        arrowRotationServer[i] = data.arrowRotationCl;
                        //click.clickObject[i].rotation.y = arrowRotationServer[i] - Math.PI/2;
                        break;
                    }
                }
            })
            socket.on('shotInGameWowSCl', (data) => {
                vaGiveShot = data.vaGiveShotCl;
                vbGiveShot = data.vbGiveShotCl;
                shotPlayer = data.shotPlayerCl;
                shotPlayerAnimation = data.shotPlayerAnimationCl;
                playerShotServer = data.playerShotSCl;
                shot.xShotPlayer = data.xShotPlayerCl;
                shot.xShotPlayer1 = data.xShotPlayer1Cl;
                giveShotPointX = data.giveShotPointXCl;
            })
        }


        if(playerWithBall === false){
            socket.on('playerClickFCl', (data) => {
                let event = false;
                for (let i = 0; i <click.clickObject.length; i++) {
                    if (click.clickObject[i] === loadplayer.fPlayerDefenseF[data.playerClickFClG]) {
                        event = true;
                    }
                }
                if (event === false) {
                    /*let lengthClickObject = enterClickPlayer;
                    if (clickClientAndServer === true) {
                        lengthClickObject = enterClickPlayer + 1;
                    }*/
                    let clickClientAndServer = click.enterClickPlayer;
                    if (lengthMass !== click.enterClickPlayer + 1) {
                        click.enterClickPlayer = lengthMass - 1;
                    }
                    click.enterClickPlayer++;
                    click.clickObject[click.enterClickPlayer] = loadplayer.fPlayerDefenseF[data.playerClickFClG];
                    massStBar[nMassStBar] = data.playerClickFClG;
                    nMassStBar++;

                    /*.log(massStBar);
                    .log(clickObject);*/

                    lengthMass = click.enterClickPlayer + 1;
                    for (let i = 0; i < lengthMass - 1; i++) {
                        if (click.clickObject[click.enterClickPlayer].uuid === click.clickObject[i].uuid && click.clickObject[click.enterClickPlayer].uuid !== click.clickObject[click.enterClickPlayer - 1].uuid) {
                            lengthMass = (click.enterClickPlayer - 1) + 1;
                            click.enterClickPlayer = i;
                        }
                        if (click.enterClickPlayer > 0) {
                            if (click.clickObject[click.enterClickPlayer].uuid === click.clickObject[click.enterClickPlayer - 1].uuid) {
                                click.enterClickPlayer--;
                                lengthMass = click.enterClickPlayer + 1;
                            }
                        }
                    }
                    click.enterClickPlayer = clickClientAndServer;
                    //enterClickPlayer = enterClickPlayer + 1;
                }
            })

            socket.on('sentPlayerNewPositionFCl', (data) => {
                for (let i = 0; i <click.clickObject.length; i++) {
                    if (click.clickObject[i] === loadplayer.fPlayerDefenseF[data.playerClickFGCl]) {
                        circleStartPositionPlayerX[i] = data.circleStartPositionPlayerXCl;
                        circleStartPositionPlayerZ[i] = data.circleStartPositionPlayerZCl;
                        changePositionClick011Next[i] = data.changePositionClick2Cl;
                        changePlayerPositionX[i] = data.changePlayerPositionXCl;
                        changePlayerPositionZ[i] = data.changePlayerPositionZCl;
                        vaChangePlayerPosition[i] = data.vaChangePlayerPositionCl;
                        vbChangePlayerPosition[i] = data.vbChangePlayerPositionCl;
                        arrowRotationServer[i] = data.arrowRotationCl;
                        //click.clickObject[i].rotation.y = arrowRotationServer[i] - Math.PI/2;
                        break;
                    }
                }
            })
            socket.on('shotInGameWowFCl',  (data) => {
                vaGiveShot = data.vaGiveShotCl;
                vbGiveShot = data.vbGiveShotCl;
                shotPlayer = data.shotPlayerCl;
                shotPlayerAnimation = data.shotPlayerAnimationCl;
                playerShotServer = data.playerShotFCl;
                shot.xShotPlayer = data.xShotPlayerCl;
                shot.xShotPlayer1 = data.xShotPlayer1Cl;
                giveShotPointX = data.giveShotPointXCl;
                // .log(vaGiveShot + ' ' + vbGiveShot + ' ' + shotPlayer);
            })
        }
        socket.on('getPassCl', (data) => {
            playerGetPassX = data.playerGetPassXCl;
            playerGetPassZ = data.playerGetPassZCl;
            meshBPositionXGetPass = data.meshBPositionXGetPassCl;
            meshBPositionZGetPass = data.meshBPositionZGetPassCl;
            pass.vaGetPass1 = data.vaGetPass1Cl;
            pass.vbGetPass1 = data.vbGetPass1Cl;
            changeNext = data.changeNextCl;
        })
        socket.on('givePassCl', (data) => {
            enterGivePassValueApp = data.enterGivePassValueAppCl;
            vaGivePass = data.vaGivePassCl;
            vbGivePass = data.vbGivePassCl;
            givePassPointZ = data.givePassPointZCl;
            meshBPositionZGivePass = data.meshBPositionZGivePassCl;
        })
    }
}