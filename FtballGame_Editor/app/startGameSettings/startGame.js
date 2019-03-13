class StartGame {

    constructor() {

    }

    settingsTeam() {

        socket.on('team', (data) => {
            if (playerWithBall === undefined) {
                for(let i = 0; i < data.length; i++) {
                    playerWithBall = data[i].team;
                }
            }
        })

        $.getJSON('/uniform', (json) => {
            let mass = [
                json.Tshirt0opacity, json.Tshirt0color,
                json.Shorts0opacity, json.Shorts0color,
                json.ShortsStrip0opacity,json.ShortsStrip0color,
                json.GetrsMain0opacity,json.GetrsMain0color,
                json.GetrsSecond0opacity,json.GetrsSecond0color,
                json.Strip0opacity,json.Strip0color,
                json.ColotTshirt10opacity,json.ColotTshirt10color,
                json.ColotTshirt20opacity,json.ColotTshirt20color,
                json.ColotTshirt30opacity,json.ColotTshirt30color,
                json.Tshirt1opacity,json.Tshirt1color,
                json.Shorts1opacity,json.Shorts1color,
                json.ShortsStrip1opacity,json.ShortsStrip1color,
                json.GetrsMain1opacity,json.GetrsMain1color,
                json.GetrsSecond1opacity,json.GetrsSecond1color,
                json.Strip1opacity,json.Strip1color,
                json.ColotTshirt11opacity,json.ColotTshirt11color,
                json.ColotTshirt21opacity,json.ColotTshirt21color,
                json.ColotTshirt31opacity,json.ColotTshirt31color
            ];
            for (let i = 0; i < 36; i++) {
                playerForm[i] = mass[i];
            }
        });

        $.getJSON('/playerSettings', (json) => {
                loadplayer.playerBaseStartGame = json;
                console.log(json);
        } )
    }

}
let startGame = new StartGame();