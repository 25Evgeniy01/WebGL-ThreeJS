/**
 * Created by vzorv on 19.10.2017.
 */

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


let app = express();

function bd(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
    });
    return connection;
}

let connection = bd();
connection.connect();

let server = app.listen(process.env.PORT || 2000, function() {
    let host = server.address().address;
    let port = server.address().port;
})

// создаем парсер для данных в формате json
let jsonParser = bodyParser.json();
/*//создаем парсер для получения отправленных данных
let urlencodedParser = bodyParser.urlencoded({extended: false});*/

app.use(express.static(__dirname + "/"));

app.get('/appTshirt', function(req, res) {
    res.sendFile(__dirname + '/appTshirt.html');
})

let SOCKET_LIST = {};

let a = 0;
let pack = [];
let io = require('socket.io')(server,{});

io.sockets.on('connection', function(socket) {
        socket.id = a;//create id, coordinates for the new Player in 'game'
        a++;

    if (socket.id < 2) {

        if (socket.id === 0 ) {
            pack.push({
                team: true,
                id: 0,
                keyboardPressA: false
            })
            socket.broadcast.emit('team' , pack)
        } else {
            pack.push({
                team: false,
                id: 1,
                keyboardPressA: false
            })
            socket.broadcast.emit('team' , pack)
        }
        SOCKET_LIST[socket.id] = socket;
        console.log('socket connection ' + socket.id); //new return page - create new field with increment variable a
    }

    if (socket.id >= 2) {
        console.log('Sorry, but server is full, good watching');
    }



    socket.on('keyboardPress', function(data) {
        if (data.keyboardPress === true) {
            pack[0].keyboardPressA = true;
            pack[1].keyboardPressA = true;
            socket.broadcast.emit('team' , pack);
        }
        //console.log(pack[0].keyboardPressA);
    })

    socket.on('playerClickS', function(data) {
        socket.broadcast.emit('playerClickSCl', {
            playerClickSClG: data.playerClickSG
        });
    })

    socket.on('playerClickF', function(data) {
        socket.broadcast.emit('playerClickFCl', {
            playerClickFClG: data.playerClickFG
        });
    })

    socket.on('sentPlayerNewPositionS', function(data) {
        socket.broadcast.emit('sentPlayerNewPositionSCl', {
            circleStartPositionPlayerXCl: data.circleStartPositionPlayerX,
            circleStartPositionPlayerZCl: data.circleStartPositionPlayerZ,
            changePositionClick2Cl: data.changePositionClick2,
            changePlayerPositionXCl: data.changePlayerPositionX,
            changePlayerPositionZCl: data.changePlayerPositionZ,
            playerClickSGCl: data.playerClickSG,
            vaChangePlayerPositionCl: data.vaChangePlayerPosition,
            vbChangePlayerPositionCl: data.vbChangePlayerPosition,
            arrowRotationCl: data.arrowRotation
        })
      //  console.log(data.arrowRotation);
    })

    socket.on('sentPlayerNewPositionF', function(data) {
        socket.broadcast.emit('sentPlayerNewPositionFCl', {
            circleStartPositionPlayerXCl: data.circleStartPositionPlayerX,
            circleStartPositionPlayerZCl: data.circleStartPositionPlayerZ,
            changePositionClick2Cl: data.changePositionClick2,
            changePlayerPositionXCl: data.changePlayerPositionX,
            changePlayerPositionZCl: data.changePlayerPositionZ,
            playerClickFGCl: data.playerClickFG,
            vaChangePlayerPositionCl: data.vaChangePlayerPosition,
            vbChangePlayerPositionCl: data.vbChangePlayerPosition,
            arrowRotationCl: data.arrowRotation
        })
    //    console.log(data.arrowRotation);
    })

    //обработчики для удара
    socket.on('shotInGameWowS', function(data) {
        socket.broadcast.emit('shotInGameWowSCl', {
                    vaGiveShotCl: data.vaGiveShot,
                    vbGiveShotCl: data.vbGiveShot,
                    shotPlayerCl: data.shotPlayer,
                    shotPlayerAnimationCl: data.shotPlayerAnimation,
                    playerShotSCl: data.playerShotS,
                    xShotPlayerCl: data.xShotPlayer,
                    xShotPlayer1Cl: data.xShotPlayer1,
                    giveShotPointXCl: data.giveShotPointX
        })
    })
     socket.on('shotInGameWowF', function(data) {
         socket.broadcast.emit('shotInGameWowFCl', {
                    vaGiveShotCl: data.vaGiveShot,
                    vbGiveShotCl: data.vbGiveShot,
                    shotPlayerCl: data.shotPlayer,
                    shotPlayerAnimationCl: data.shotPlayerAnimation,
                    playerShotFCl: data.playerShotF,
                    xShotPlayerCl: data.xShotPlayer,
                    xShotPlayer1Cl: data.xShotPlayer1,
                    giveShotPointXCl: data.giveShotPointX
        })
         //console.log(data.vaGiveShot + ' ' + data.vbGiveShot + ' ' + data.shotPlayer);
    })

    //обработчик для считывания клика и перемещения игрока , если в первом окне не был произведен клик
    socket.on('clickPlayerOn', function(data) {
        //console.log('Было произведено нажатие');
        if (data.clickPlayerOn1 === true ) {
            socket.broadcast.emit('clickPlayerOnCl', {
            clickPlayerOnCl1: true
        })
        }  
    })

    //обработчик для считывания нажатия кнопки Старт
    socket.on('buttonStartF', function(data) {
                    socket.broadcast.emit('buttonStartFCl', {
                        buttonStartFCl: data.buttonStartF
                    });
    })
    socket.on('buttonStartS', function(data) {
                    socket.broadcast.emit('buttonStartSCl', {
                       buttonStartSCl: data.buttonStartS
                    });
    })

    //обработчик Кнопки Принять Пас
    socket.on('getPass', function (data) {
        socket.broadcast.emit('getPassCl', {
            playerGetPassXCl: data.playerGetPassXS,
            playerGetPassZCl: data.playerGetPassZS,
            meshBPositionXGetPassCl: data.meshBPositionXGetPassS,
            meshBPositionZGetPassCl: data.meshBPositionZGetPassS,
            vaGetPass1Cl: data.vaGetPass1S,
            vbGetPass1Cl: data.vbGetPass1S,
            changeNextCl: data.changeNextS
        })
    })

    //обработчик отдать Пас
    socket.on('givePass', function(data) {
        socket.broadcast.emit('givePassCl', {
            enterGivePassValueAppCl: data.enterGivePassValueApp,
            vaGivePassCl: data.vaGivePass,
            vbGivePassCl: data.vbGivePass,
            givePassPointZCl: data.givePassPointZ,
            meshBPositionZGivePassCl: data.meshBPositionZGivePass
        })
    })

    socket.on('disconnect', function() { //delete user if he leave game

        if (socket.id === 0 || socket.id === 1) {
            console.log('player ' + socket.id + ' disconnected' + '/// Please reload Game ');
            delete SOCKET_LIST; //SOCKET_LIST[socket.id]
            a = 0;
        } else {
            console.log('GoodBay');
            delete SOCKET_LIST[socket.id];
        }


       // a = 0;
    })
})

//для редактора
app.post("/base", jsonParser, (request, response) => {

    if (!request.body) return response.sendStatus(400);

    let connection1 = bd();
   /* console.log(request.body);
    console.log(request.body.userName);*/
    //console.log(`${request.body.userName} - ${request.body.userAge}`);
    //console.log(response.json(`${request.body.Tshirt0opacity}`));
    //console.log(`${request.body.Tshirt0opacity}`);
    connection1.query(`TRUNCATE TABLE playerform`);
    connection1.query(`INSERT INTO playerform VALUES (
       ${request.body.Tshirt0opacity}, ${request.body.Tshirt0color},
       ${request.body.Shorts0opacity},${request.body.Shorts0color},
       ${request.body.ShortsStrip0opacity},${request.body.ShortsStrip0color},
       ${request.body.GetrsMain0opacity},${request.body.GetrsMain0color},
       ${request.body.GetrsSecond0opacity},${request.body.GetrsSecond0color},
       ${request.body.Strip0opacity},${request.body.Strip0color},
       ${request.body.ColotTshirt10opacity},${request.body.ColotTshirt10color},
       ${request.body.ColotTshirt20opacity},${request.body.ColotTshirt20color},
       ${request.body.ColotTshirt30opacity},${request.body.ColotTshirt30color},
       ${request.body.Tshirt1opacity},${request.body.Tshirt1color},
       ${request.body.Shorts1opacity},${request.body.Shorts1color},
       ${request.body.ShortsStrip1opacity},${request.body.ShortsStrip1color},
       ${request.body.GetrsMain1opacity},${request.body.GetrsMain1color},
       ${request.body.GetrsSecond1opacity},${request.body.GetrsSecond1color},
       ${request.body.Strip1opacity},${request.body.Strip1color},
       ${request.body.ColotTshirt11opacity},${request.body.ColotTshirt11color},
       ${request.body.ColotTshirt21opacity},${request.body.ColotTshirt22color},
       ${request.body.ColotTshirt31opacity},${request.body.ColotTshirt32color}
       )`, function (error) {
     if (error) {
     console.log(error.message);
     } else {
     console.log('success POST sent to client');
     }
     });
})

//форма для игроков
app.get('/uniform', function (req, res) {
    let connection1 = bd();
    connection1.query(`SELECT * FROM playerform`,
        function (error, rows, fields) {
        if (error) {
            console.log(error.message);
        }
            res.send(rows[0]);
    } );
})

app.get('/playerSettings', function (req, res) {
    let connect = bd();
    connect.query(`select * from players`,
        (error, rows) => {
        if (error) {
            console.log(error.message);
        }
        res.send(rows);
    })
})

/*connection.query('SELECT * FROM mytable WHERE id=3', function (err, rows, fields) {
    //console.log(rows);
   // console.log(fields);
    //console.log(fields);
});*/

connection.end(function(err){
    if(err) return console.log(err);
    console.log("Function Connection End is true");
});