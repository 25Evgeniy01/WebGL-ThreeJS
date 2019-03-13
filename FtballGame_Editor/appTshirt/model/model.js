/**
 * Created by vzorv on 12.09.2017.
 */

class ModelPlayer {
    contructor() {
    }

    settingsTeam() {
        /*$.getJSON('/main', function(json) {
            /*playerForm[0] = json.Shorts0opacity;*/
            /*let mass = [
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
            }*/
            playerForm = [1, 16726923, 1, 6881535, 1, 6881535, 1, 16726923, 1, 16726923, 1, 1574916, 1, 14533306, 1, 14533306, 1, 16726923, 1, 0, 1, 0, 1, 0, 1, 15204352, 1, 0, 1, 1310726, 1, 15204352, 1, 15204352, 1, 0];
           /* console.log(playerForm);
            console.log(mass);*/
        //});
    }

    loadPlayer() {

        function hexDec(h){
            let b = Number(h).toString(16);
            let c = '000000';

            //console.log(b);

            if (b.length < 6) {
                let a = 6 - b.length;
                c = c.substr(0, a);
            }

            if (b.length >= 6) {
                c = '';
            }

            //console.log(c);
            let a;
            if (c !== ''){
                a = '#' + c + (Number(h).toString(16));
            } else a = '#' + (Number(h).toString(16));
            //console.log(a);
            let m = a.slice(1).match(/.{2}/g);
            m[0] = parseInt(m[0], 16);
            m[1] = parseInt(m[1], 16);
            m[2] = parseInt(m[2], 16);
            //console.log(m);
            return m;
        }

        for (let i = 0; i < 2; i++) {

            let loader = new THREE.JDLoader();
            //в даном случае мы имеем анонимную функцию которая выполняется асинхронно
            loader.load("models/player.JD", (data) => {

                materials[i] = data.materials;
                geometry[i] = data.geometries[0];
                player[i] = new THREE.SkinnedMesh(geometry[i], new THREE.MultiMaterial(materials[i]));
                console.log(player[0]);
                console.log(player[1]);
                //Считывание домашней и гостевой формы при загрузке страницы
                if (player[0] !== undefined) {
                    //форма
                    player[0].material[1].opacity = playerForm[0];
                    player[0].material[1].color.r = hexDec(playerForm[1])[0] / 255;
                    player[0].material[1].color.g = hexDec(playerForm[1])[1] / 255;
                    player[0].material[1].color.b = hexDec(playerForm[1])[2] / 255;

                    player[0].material[2].opacity = playerForm[2];
                    player[0].material[2].color.r = hexDec(playerForm[3])[0] / 255;
                    player[0].material[2].color.g = hexDec(playerForm[3])[1] / 255;
                    player[0].material[2].color.b = hexDec(playerForm[3])[2] / 255;

                    player[0].material[3].opacity = playerForm[4];
                    player[0].material[3].color.r = hexDec(playerForm[5])[0] / 255;
                    player[0].material[3].color.g = hexDec(playerForm[5])[1] / 255;
                    player[0].material[3].color.b = hexDec(playerForm[5])[2] / 255;

                    player[0].material[5].opacity = playerForm[6];
                    player[0].material[5].color.r = hexDec(playerForm[7])[0] / 255;
                    player[0].material[5].color.g = hexDec(playerForm[7])[1] / 255;
                    player[0].material[5].color.b = hexDec(playerForm[7])[2] / 255;

                    player[0].material[6].opacity = playerForm[8];
                    player[0].material[6].color.r = hexDec(playerForm[9])[0] / 255;
                    player[0].material[6].color.g = hexDec(playerForm[9])[1] / 255;
                    player[0].material[6].color.b = hexDec(playerForm[9])[2] / 255;

                    player[0].material[7].opacity = playerForm[10];
                    player[0].material[7].color.r = hexDec(playerForm[11])[0] / 255;
                    player[0].material[7].color.g = hexDec(playerForm[11])[1] / 255;
                    player[0].material[7].color.b = hexDec(playerForm[11])[2] / 255;

                    player[0].material[18].opacity = playerForm[12];
                    player[0].material[18].color.r = hexDec(playerForm[13])[0] / 255;
                    player[0].material[18].color.g = hexDec(playerForm[13])[1] / 255;
                    player[0].material[18].color.b = hexDec(playerForm[13])[2] / 255;

                    player[0].material[19].opacity = playerForm[14];
                    player[0].material[19].color.r = hexDec(playerForm[15])[0] / 255;
                    player[0].material[19].color.g = hexDec(playerForm[15])[1] / 255;
                    player[0].material[19].color.b = hexDec(playerForm[15])[2] / 255;

                    player[0].material[20].opacity = playerForm[16];
                    player[0].material[20].color.r = hexDec(playerForm[17])[0] / 255;
                    player[0].material[20].color.g = hexDec(playerForm[17])[1] / 255;
                    player[0].material[20].color.b = hexDec(playerForm[17])[2] / 255;
                    //конец формы
                    if (player[0].material[1].color.r === player[0].material[18].color.r && player[0].material[1].color.r !== player[0].material[19].color.r && player[0].material[19].color.r === player[0].material[20].color.r) {
                        countTshirt = 1;
                    }
                    if (player[0].material[1].color.r === player[0].material[20].color.r && player[0].material[1].color.r !== player[0].material[19].color.r && player[0].material[19].color.r === player[0].material[18].color.r) {
                        countTshirt = 2;
                    }
                    if (player[0].material[1].color.r === player[0].material[19].color.r && player[0].material[1].color.r !== player[0].material[18].color.r && player[0].material[20].color.r === player[0].material[18].color.r) {
                        countTshirt = 3;
                    }
                    if (player[0].material[1].color.r === player[0].material[20].color.r && player[0].material[1].color.r === player[0].material[19].color.r && player[0].material[1].color.r === player[0].material[18].color.r) {
                        countTshirt = 0;
                    }

                    if (player[0].material[2].color.r === player[0].material[3].color.r) {
                        countShorts = 1;
                    } else {
                        countShorts = 0;
                    }

                    if (player[0].material[5].color.r === player[0].material[6].color.r) {
                        countGetrs = 1;
                    } else {
                        countGetrs = 0;
                    }
                }

                if (player[1] !== undefined) {
                    //форма
                    player[1].material[1].opacity = playerForm[18];
                    player[1].material[1].color.r = hexDec(playerForm[19])[0] / 255;
                    player[1].material[1].color.g = hexDec(playerForm[19])[1] / 255;
                    player[1].material[1].color.b = hexDec(playerForm[19])[2] / 255;

                    player[1].material[2].opacity = playerForm[20];
                    player[1].material[2].color.r = hexDec(playerForm[21])[0] / 255;
                    player[1].material[2].color.g = hexDec(playerForm[21])[1] / 255;
                    player[1].material[2].color.b = hexDec(playerForm[21])[2] / 255;

                    player[1].material[3].opacity = playerForm[22];
                    player[1].material[3].color.r = hexDec(playerForm[23])[0] / 255;
                    player[1].material[3].color.g = hexDec(playerForm[23])[1] / 255;
                    player[1].material[3].color.b = hexDec(playerForm[23])[2] / 255;

                    player[1].material[5].opacity = playerForm[24];
                    player[1].material[5].color.r = hexDec(playerForm[25])[0] / 255;
                    player[1].material[5].color.g = hexDec(playerForm[25])[1] / 255;
                    player[1].material[5].color.b = hexDec(playerForm[25])[2] / 255;

                    player[1].material[6].opacity = playerForm[26];
                    player[1].material[6].color.r = hexDec(playerForm[27])[0] / 255;
                    player[1].material[6].color.g = hexDec(playerForm[27])[1] / 255;
                    player[1].material[6].color.b = hexDec(playerForm[27])[2] / 255;

                    player[1].material[7].opacity = playerForm[28];
                    player[1].material[7].color.r = hexDec(playerForm[29])[0] / 255;
                    player[1].material[7].color.g = hexDec(playerForm[29])[1] / 255;
                    player[1].material[7].color.b = hexDec(playerForm[29])[2] / 255;

                    player[1].material[18].opacity = playerForm[30];
                    player[1].material[18].color.r = hexDec(playerForm[31])[0] / 255;
                    player[1].material[18].color.g = hexDec(playerForm[31])[1] / 255;
                    player[1].material[18].color.b = hexDec(playerForm[31])[2] / 255;

                    player[1].material[19].opacity = playerForm[32];
                    player[1].material[19].color.r = hexDec(playerForm[33])[0] / 255;
                    player[1].material[19].color.g = hexDec(playerForm[33])[1] / 255;
                    player[1].material[19].color.b = hexDec(playerForm[33])[2] / 255;

                    player[1].material[20].opacity = playerForm[34];
                    player[1].material[20].color.r = hexDec(playerForm[35])[0] / 255;
                    player[1].material[20].color.g = hexDec(playerForm[35])[1] / 255;
                    player[1].material[20].color.b = hexDec(playerForm[35])[2] / 255;
                    //конец формы

                }

                //console.log(player[0]);
                player[i].position.x = -5 + i*10;
                player[i].position.y = 2.2;
                player[i].position.z = 0;
                player[i].rotation.y = 0;
                player[i].rotation.x = -Math.PI / 7;
                player[i].scale.set(0.08, 0.08, 0.08);
                mixer[i] = new THREE.AnimationMixer(player[i]);
                animationsStart[i] = true;
                scene.add(player[i]);
                objects.push(player[i]);
                if (player[0] !== undefined) {
                    player[0].rotation.y = Math.PI/15;
                }
                if (player[1] !== undefined) {
                    player[1].rotation.y = -Math.PI/15;
                }
            });
        }
        activeWindowTshirt = true;
        activeWindowFirst = true;
        //countTshirt = playerForm[36];
    }


    clickPlayer(e) {
        let proj = new THREE.Projector();
        let vector = new THREE.Vector3((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1, 0.5);
        proj.unprojectVector(vector, camera);
        let raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        let intersects = raycaster.intersectObjects(objects);
        if (intersects.length > 0) {

            if (lengthMass !== enterClickPlayer + 1) {
                enterClickPlayer = lengthMass - 1;
            }
            enterClickPlayer++; //описание в variables
            clickObject[enterClickPlayer] = intersects[0].object;
            lengthMass = enterClickPlayer + 1;
            for (let i = 0; i < lengthMass - 1; i++) {
                if (clickObject[enterClickPlayer].id === clickObject[i].id && clickObject[enterClickPlayer].id !== clickObject[enterClickPlayer - 1].id) {
                    lengthMass = (enterClickPlayer - 1) + 1;
                    enterClickPlayer = i;
                }
                if (enterClickPlayer > 0) {
                    if (clickObject[enterClickPlayer].id === clickObject[enterClickPlayer - 1].id) {
                        enterClickPlayer--;
                        lengthMass = enterClickPlayer + 1;
                    }
                }
            }
            console.log(clickObject[enterClickPlayer]);
            console.log(player[0].material[1].color.g.toFixed(2) + ' ' + player[0].material[1].color.b.toFixed(3));
           }
    }

    outputInformation() {
        $.ajax({
                type: 'post',
                url: '/base',
                data: JSON.stringify({
                     Tshirt0opacity: player[0].material[1].opacity,
                     Tshirt0color: player[0].material[1].color,
                     Shorts0opacity: player[0].material[2].opacity,
                     Shorts0color: player[0].material[2].color,
                     ShortsStrip0opacity: player[0].material[3].opacity,
                     ShortsStrip0color: player[0].material[3].color,
                     GetrsMain0opacity: player[0].material[5].opacity,
                     GetrsMain0color:  player[0].material[5].color,
                     GetrsSecond0opacity: player[0].material[6].opacity,
                     GetrsSecond0color: player[0].material[6].color,
                     Strip0opacity: player[0].material[7].opacity,
                     Strip0color: player[0].material[7].color,
                     ColotTshirt10opacity: player[0].material[18].opacity,
                     ColotTshirt10color: player[0].material[18].color,
                     ColotTshirt20opacity: player[0].material[19].opacity,
                     ColotTshirt20color: player[0].material[19].color,
                     ColotTshirt30opacity: player[0].material[20].opacity,
                     ColotTshirt30color: player[0].material[20].color,
                     Tshirt1opacity: player[1].material[1].opacity,
                     Tshirt1color: player[1].material[1].color,
                     Shorts1opacity: player[1].material[2].opacity,
                     Shorts1color: player[1].material[2].color,
                     ShortsStrip1opacity: player[1].material[3].opacity,
                     ShortsStrip1color: player[1].material[3].color,
                     GetrsMain1opacity: player[1].material[5].opacity,
                     GetrsMain1color: player[1].material[5].color,
                     GetrsSecond1opacity: player[1].material[6].opacity,
                     GetrsSecond1color: player[1].material[6].color,
                     Strip1opacity: player[1].material[7].opacity,
                     Strip1color: player[1].material[7].color,
                     ColotTshirt11opacity: player[1].material[18].opacity,
                     ColotTshirt11color: player[1].material[18].color,
                     ColotTshirt21opacity: player[1].material[19].opacity,
                     ColotTshirt22color: player[1].material[19].color,
                     ColotTshirt31opacity: player[1].material[20].opacity,
                     ColotTshirt32color: player[1].material[20].color
                }),
                dataType: "json",
                contentType: "application/json"
        });
    }

}



