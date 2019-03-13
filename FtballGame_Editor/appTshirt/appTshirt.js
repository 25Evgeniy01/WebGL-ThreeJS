    /**
 * Created by vzorv on 12.09.2017.
 */
    let screenWidth = window.innerWidth,
        screenHeight = window.innerHeight;
    let viewAngle = 30, aspect = screenWidth / screenHeight, near = 1, far = 2000;
    for (let i = 0; i < 2; i++) {
        clock[i] = new THREE.Clock
    }

    class InitClass {

    constructor() {
    }

    loadSceneCamera() {
        scene = new THREE.Scene();

        scene.addEventListener(
            'update',
            function () {
                scene.simulate(undefined, 1);
            }
        );

        scene.fog = new THREE.FogExp2(0x4e5d08, 0.0003); //задний фон

        camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
        scene.add(camera);

        camera.position.set(0, 30, 34);
        camera.rotation.x = -Math.PI / 6;
    }

    loadRender() {
        canvas = document.getElementById('canvas');
        canvas.setAttribute('width',screenWidth);
        canvas.setAttribute('height',screenHeight);

        renderer = new THREE.WebGLRenderer({canvas: canvas});
        renderer.setSize(screenWidth, screenHeight);

        renderer.setClearColor(scene.fog.color);
        renderer.shadowMapEnabled = true;
        renderer.shadowMapSoft = true;

        THREEx.WindowResize(renderer, camera);
    }

    loadLight () {
        /*let spLight = new THREE.SpotLight(0xffffff, 1.75, 2000, Math.PI / 3);
        spLight.position.set(0, 200, 40);
        scene.add(spLight);*/


        let light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 49, 35, 15 );
        light.target.position.copy( scene.position );
        light.castShadow = true;
        light.shadowCameraLeft = -60;
        light.shadowCameraTop = -60;
        light.shadowCameraRight = 60;
        light.shadowCameraBottom = 60;
        light.shadowCameraNear = 20;
        light.shadowCameraFar = 200;
        light.shadowBias = -.0001;
        light.shadowMapWidth = light.shadowMapHeight = 2048;
        light.shadowDarkness = .7;
        scene.add( light );

        let light1 = new THREE.DirectionalLight( 0xffffff );
        light1.position.set( -30, 4, 15 );
        light1.target.position.copy( scene.position );

        scene.add( light1 );
    }

    render() {
        if (renderer) {
            renderer.render(scene, camera);
        }
    }

    init () {
        this.loadSceneCamera();
        this.loadRender();
        this.loadLight();

        //загрузка игрока
        let loadModel = new ModelPlayer();

        loadModel.settingsTeam();
        loadModel.loadPlayer();
    }

    keyDown(event){
        keyboard[event.keyCode] = true;
    }

    keyUp(event){
        keyboard[event.keyCode] = false;
    }

}

function animate() {
    requestAnimationFrame(animate);

    if (activeWindowFirst === true) document.getElementById('firstButtonRotation').style.cssText = "border:6px solid yellow;";
    else document.getElementById('firstButtonRotation').style.cssText = "border:3px solid white;";
    if (activeWindowSecond === true) document.getElementById('secondButtonRotation').style.cssText = "border:6px solid yellow;";
    else document.getElementById('secondButtonRotation').style.cssText = "border:3px solid white;";
    if (activeWindowTshirt === true) document.getElementById('t-shirt').style.cssText = "border:6px solid yellow;";
    else document.getElementById('t-shirt').style.cssText = "border:3px solid white;";
    if (activeWindowShorts === true) document.getElementById('shorts').style.cssText = "border:6px solid yellow;";
    else document.getElementById('shorts').style.cssText = "border:3px solid white;";
    if (activeWindowGetrs === true) document.getElementById('getrs').style.cssText = "border:6px solid yellow;";
    else document.getElementById('getrs').style.cssText = "border:3px solid white;";

    if (firstColorBoolean === true) {
        document.getElementById('firstColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('firstColor').style.cssText = "border: 2px solid white";
    if (secondColorBoolean === true) {
        document.getElementById('secondColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('secondColor').style.cssText = "border: 2px solid white";
    if (thirdColorBoolean === true) {
        document.getElementById('thirdColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('thirdColor').style.cssText = "border: 2px solid white";
    if (fourthColorBoolean === true) {
        document.getElementById('fourthColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('fourthColor').style.cssText = "border: 2px solid white";
    if (fivesColorBoolean === true) {
        document.getElementById('fivesColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('fivesColor').style.cssText = "border: 2px solid white";
    if (sixColorBoolean === true) {
        document.getElementById('sixColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('sixColor').style.cssText = "border: 2px solid white";
    if (sevenColorBoolean === true) {
        document.getElementById('sevenColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('sevenColor').style.cssText = "border: 2px solid white";
    if (eightColorBoolean === true) {
        document.getElementById('eightColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('eightColor').style.cssText = "border: 2px solid white";
    if (nineColorBoolean === true) {
        document.getElementById('nineColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('nineColor').style.cssText = "border: 2px solid white";
    if (tenColorBoolean === true) {
        document.getElementById('tenColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('tenColor').style.cssText = "border: 2px solid white";
    if (elevenColorBoolean === true) {
        document.getElementById('elevenColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('elevenColor').style.cssText = "border: 2px solid white";
    if (twelweColorBoolean === true) {
        document.getElementById('twelweColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('twelweColor').style.cssText = "border: 2px solid white";
    if (thirteenColorBoolean === true) {
        document.getElementById('thirteenColor').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('thirteenColor').style.cssText = "border: 2px solid white";


    if (firstColorBooleanS === true) {
        document.getElementById('firstColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('firstColorS').style.cssText = "border: 2px solid white";
    if (secondColorBooleanS === true) {
        document.getElementById('secondColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('secondColorS').style.cssText = "border: 2px solid white";
    if (thirdColorBooleanS === true) {
        document.getElementById('thirdColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('thirdColorS').style.cssText = "border: 2px solid white";
    if (fourthColorBooleanS === true) {
        document.getElementById('fourthColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('fourthColorS').style.cssText = "border: 2px solid white";
    if (fivesColorBooleanS === true) {
        document.getElementById('fivesColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('fivesColorS').style.cssText = "border: 2px solid white";
    if (sixColorBooleanS === true) {
        document.getElementById('sixColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('sixColorS').style.cssText = "border: 2px solid white";
    if (sevenColorBooleanS === true) {
        document.getElementById('sevenColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('sevenColorS').style.cssText = "border: 2px solid white";
    if (eightColorBooleanS === true) {
        document.getElementById('eightColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('eightColorS').style.cssText = "border: 2px solid white";
    if (nineColorBooleanS === true) {
        document.getElementById('nineColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('nineColorS').style.cssText = "border: 2px solid white";
    if (tenColorBooleanS === true) {
        document.getElementById('tenColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('tenColorS').style.cssText = "border: 2px solid white";
    if (elevenColorBooleanS === true) {
        document.getElementById('elevenColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('elevenColorS').style.cssText = "border: 2px solid white";
    if (twelweColorBooleanS === true) {
        document.getElementById('twelweColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('twelweColorS').style.cssText = "border: 2px solid white";
    if (thirteenColorBooleanS === true) {
        document.getElementById('thirteenColorS').style.cssText = "border: 5px solid yellow";
    } else document.getElementById('thirteenColorS').style.cssText = "border: 2px solid white";




    if (playerRotationRightBoolean === true) {
        if (player[0] !== undefined) {
            player[0].rotation.y += Math.PI / 2;
            playerRotationRightBoolean = false;
        }
    }

    if (playerRotationLeftBoolean === true) {
        if (player[0] !== undefined) {
            player[0].rotation.y += -Math.PI / 2;
            playerRotationLeftBoolean = false;
        }
    }

    if (playerRotationSecondRightBoolean === true) {
        if (player[1] !== undefined) {
            player[1].rotation.y += Math.PI / 2;
            playerRotationSecondRightBoolean = false;
        }
    }

    if (playerRotationSecondLeftBoolean === true) {
        if (player[1] !== undefined) {
            player[1].rotation.y += -Math.PI / 2;
            playerRotationSecondLeftBoolean = false;
        }
    }
    //for (let i = 0; i < 2; i++) {
    if (activeWindowFirst === true || activeWindowSecond === true) {

        if (activeWindowFirst === true ) numberPl = 0; else numberPl = 1;
        if (numberPl === 1) numberPl1 = 0; else numberPl1 = 1;

        if (activeWindowGetrs === true) {

            if (colorGetrs === false && player[numberPl].material[5].color.r === player[numberPl].material[6].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countGetrs = 1;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.03 && player[numberPl].material[5].color.g.toFixed(2) == 0.61 && player[numberPl].material[5].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 1 && player[numberPl].material[5].color.g === 1 && player[numberPl].material[5].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 0 && player[numberPl].material[5].color.g === 0 && player[numberPl].material[5].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.41 && player[numberPl].material[5].color.g === 0 && player[numberPl].material[5].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 0 && player[numberPl].material[5].color.g.toFixed(3) == 0.145 && player[numberPl].material[5].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 0 && player[numberPl].material[5].color.g.toFixed(3) == 0.765 && player[numberPl].material[5].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 0.9882352941176471 && player[numberPl].material[5].color.g === 0.9882352941176471 && player[numberPl].material[5].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.89 && player[numberPl].material[5].color.g.toFixed(2) == 0.36 && player[numberPl].material[5].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(3) == 0.867 && player[numberPl].material[5].color.g.toFixed(3) == 0.761 && player[numberPl].material[5].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 1 && ( player[numberPl].material[5].color.g.toFixed(2) == 0.23 || player[numberPl].material[5].color.g.toFixed(2) == 0.24) && player[numberPl].material[5].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.91 && player[numberPl].material[5].color.g === 0 && player[numberPl].material[5].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(3) == 0.349 && player[numberPl].material[5].color.g.toFixed(3) == 0.012 && player[numberPl].material[5].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.31 && player[numberPl].material[5].color.g.toFixed(2) == 0.18 && player[numberPl].material[5].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                colorTshirtSecondPlayer = false;
            }
            if (colorGetrs === false && player[numberPl].material[5].color.r !== player[numberPl].material[6].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countGetrs = 0;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.03 && player[numberPl].material[5].color.g.toFixed(2) == 0.61 && player[numberPl].material[5].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(2) == 0.03 && player[numberPl].material[6].color.g.toFixed(2) == 0.61 && player[numberPl].material[6].color.b === 0) {
                    firstColorBooleanS = true;
                }
                if (player[numberPl].material[5].color.r === 1 && player[numberPl].material[5].color.g === 1 && player[numberPl].material[5].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[6].color.r === 1 && player[numberPl].material[6].color.g === 1 && player[numberPl].material[6].color.b === 1) {
                    secondColorBooleanS = true;
                }
                if (player[numberPl].material[5].color.r === 0 && player[numberPl].material[5].color.g === 0 && player[numberPl].material[5].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[6].color.r === 0 && player[numberPl].material[6].color.g === 0 && player[numberPl].material[6].color.b === 0) {
                    thirdColorBooleanS = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.41 && player[numberPl].material[5].color.g === 0 && player[numberPl].material[5].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(2) == 0.41 && player[numberPl].material[6].color.g === 0 && player[numberPl].material[6].color.b === 1) {
                    fourthColorBooleanS = true;
                }
                if (player[numberPl].material[5].color.r === 0 && player[numberPl].material[5].color.g.toFixed(3) == 0.145 && player[numberPl].material[5].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[6].color.r === 0 && player[numberPl].material[6].color.g.toFixed(3) == 0.145 && player[numberPl].material[6].color.b === 1) {
                    fivesColorBooleanS = true;
                }
                if (player[numberPl].material[5].color.r === 0 && player[numberPl].material[5].color.g.toFixed(3) == 0.765 && player[numberPl].material[5].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 0.9882352941176471 && player[numberPl].material[5].color.g === 0.9882352941176471 && player[numberPl].material[5].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.89 && player[numberPl].material[5].color.g.toFixed(2) == 0.36 && player[numberPl].material[5].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(3) == 0.867 && player[numberPl].material[5].color.g.toFixed(3) == 0.761 && player[numberPl].material[5].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r === 1 && (player[numberPl].material[5].color.g.toFixed(2) == 0.23 || player[numberPl].material[5].color.g.toFixed(2) == 0.24) && player[numberPl].material[5].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.91 && player[numberPl].material[5].color.g === 0 && player[numberPl].material[5].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(3) == 0.349 && player[numberPl].material[5].color.g.toFixed(3) == 0.012 && player[numberPl].material[5].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[5].color.r.toFixed(2) == 0.31 && player[numberPl].material[5].color.g.toFixed(2) == 0.18 && player[numberPl].material[5].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                if (player[numberPl].material[6].color.r === 0 && player[numberPl].material[6].color.g.toFixed(3) == 0.765 && player[numberPl].material[6].color.b === 1) {
                    sixColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r === 0.9882352941176471 && player[numberPl].material[6].color.g === 0.9882352941176471 && player[numberPl].material[6].color.b === 0) {
                    sevenColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(2) == 0.89 && player[numberPl].material[6].color.g.toFixed(2) == 0.36 && player[numberPl].material[6].color.b === 0) {
                    eightColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(3) == 0.867 && player[numberPl].material[6].color.g.toFixed(3) == 0.761 && player[numberPl].material[6].color.b.toFixed(3) == 0.729) {
                    nineColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r === 1 && (player[numberPl].material[6].color.g.toFixed(2) == 0.23 || player[numberPl].material[6].color.g.toFixed(2) == 0.24) && player[numberPl].material[6].color.b.toFixed(3) == 0.545) {
                    tenColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(2) == 0.91 && player[numberPl].material[6].color.g === 0 && player[numberPl].material[6].color.b === 0) {
                    elevenColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(3) == 0.349 && player[numberPl].material[6].color.g.toFixed(3) == 0.012 && player[numberPl].material[6].color.b.toFixed(3) == 0.047) {
                    twelweColorBooleanS = true;
                }
                if (player[numberPl].material[6].color.r.toFixed(2) == 0.31 && player[numberPl].material[6].color.g.toFixed(2) == 0.18 && player[numberPl].material[6].color.b.toFixed(2) == 0.12) {
                    thirteenColorBooleanS = true;
                }
                colorTshirtSecondPlayer = false;
            }
            /*countShorts = 0;
            countTshirt = 1;*/
            //гетры с дополн. полосами
            if (countGetrs === 0) {
                if (firstColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.0313725490196078;
                    player[numberPl].material[5].color.g = 0.607843137254902;
                    player[numberPl].material[5].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    firstColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[5].color.r = 1;
                    player[numberPl].material[5].color.g = 1;
                    player[numberPl].material[5].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    secondColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0;
                    player[numberPl].material[5].color.g = 0;
                    player[numberPl].material[5].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    thirdColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.4117647058823529;
                    player[numberPl].material[5].color.g = 0;
                    player[numberPl].material[5].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    fourthColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0;
                    player[numberPl].material[5].color.g = 0.1450980392156863;
                    player[numberPl].material[5].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    fivesColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;'
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0;
                    player[numberPl].material[5].color.g = 0.7647058823529412;
                    player[numberPl].material[5].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    sixColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;'
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.9882352941176471;
                    player[numberPl].material[5].color.g = 0.9882352941176471;
                    player[numberPl].material[5].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    sevenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;'
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.8862745098039216;
                    player[numberPl].material[5].color.g = 0.3568627450980392;
                    player[numberPl].material[5].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    eightColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;'
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.8666666666666667;
                    player[numberPl].material[5].color.g = 0.7607843137254902;
                    player[numberPl].material[5].color.b = 0.7294117647058824;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    nineColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;'
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[5].color.r = 1;
                    player[numberPl].material[5].color.g =  0.2352941176470588;
                    player[numberPl].material[5].color.b = 0.5450980392156863;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    tenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;'
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.9098039215686275;
                    player[numberPl].material[5].color.g =  0;
                    player[numberPl].material[5].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    elevenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;'
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.3529411764705882;
                    player[numberPl].material[5].color.g = 0.0156862745098039;
                    player[numberPl].material[5].color.b = 0.0509803921568627;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    twelweColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;'
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.3098039215686275;
                    player[numberPl].material[5].color.g = 0.1803921568627451;
                    player[numberPl].material[5].color.b =  0.1215686274509804;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    thirteenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;'
                }
                //вторые цвета
                if (firstColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.0313725490196078;
                    player[numberPl].material[6].color.g = 0.607843137254902;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    firstColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 1;
                    player[numberPl].material[6].color.g = 1;
                    player[numberPl].material[6].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    secondColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0;
                    player[numberPl].material[6].color.g = 0;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    thirdColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.4117647058823529;
                    player[numberPl].material[6].color.g = 0;
                    player[numberPl].material[6].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    fourthColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0;
                    player[numberPl].material[6].color.g = 0.1450980392156863;
                    player[numberPl].material[6].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    fivesColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;'
                }
                if (sixColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0;
                    player[numberPl].material[6].color.g = 0.7647058823529412;
                    player[numberPl].material[6].color.b = 1;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    sixColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;'
                }
                if (sevenColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.9882352941176471;
                    player[numberPl].material[6].color.g = 0.9882352941176471;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    sevenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;'
                }
                if (eightColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.8862745098039216;
                    player[numberPl].material[6].color.g = 0.3568627450980392;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    eightColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;'
                }
                if (nineColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.8666666666666667;
                    player[numberPl].material[6].color.g = 0.7607843137254902;
                    player[numberPl].material[6].color.b = 0.7294117647058824;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    nineColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;'
                }
                if (tenColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 1;
                    player[numberPl].material[6].color.g =  0.2352941176470588;
                    player[numberPl].material[6].color.b = 0.5450980392156863;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    tenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;'
                }
                if (elevenColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.9098039215686275;
                    player[numberPl].material[6].color.g =  0;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    elevenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;'
                }
                if (twelweColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.3529411764705882;
                    player[numberPl].material[6].color.g = 0.0156862745098039;
                    player[numberPl].material[6].color.b = 0.0509803921568627;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    twelweColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;'
                }
                if (thirteenColorBooleanS === true) {
                    player[numberPl].material[6].color.r = 0.3098039215686275;
                    player[numberPl].material[6].color.g = 0.1803921568627451;
                    player[numberPl].material[6].color.b =  0.1215686274509804;
                    colorGetrs = true;
                    //закрытие второго цвета при выборе первого
                    thirteenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;'
                }
            }
            //однотонные гетры
            if (countGetrs === 1) {
                //закрытие вторых цветов
                firstColorBooleanS = false;
                secondColorBooleanS = false;
                thirdColorBooleanS = false;
                fourthColorBooleanS = false;
                fivesColorBooleanS = false;
                sixColorBooleanS = false;
                sevenColorBooleanS = false;
                eightColorBooleanS = false;
                nineColorBooleanS = false;
                tenColorBooleanS = false;
                elevenColorBooleanS = false;
                twelweColorBooleanS = false;
                thirteenColorBooleanS = false;
                if (firstColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.0313725490196078;
                    player[numberPl].material[5].color.g = 0.607843137254902;
                    player[numberPl].material[5].color.b = 0;
                    player[numberPl].material[6].color.r = 0.0313725490196078;
                    player[numberPl].material[6].color.g = 0.607843137254902;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[5].color.r = 1;
                    player[numberPl].material[5].color.g = 1;
                    player[numberPl].material[5].color.b = 1;
                    player[numberPl].material[6].color.r = 1;
                    player[numberPl].material[6].color.g = 1;
                    player[numberPl].material[6].color.b = 1;
                    colorGetrs = true;
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0;
                    player[numberPl].material[5].color.g = 0;
                    player[numberPl].material[5].color.b = 0;
                    player[numberPl].material[6].color.r = 0;
                    player[numberPl].material[6].color.g = 0;
                    player[numberPl].material[6].color.b = 0;
                    colorGetrs = true;
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.4117647058823529;
                    player[numberPl].material[5].color.g = 0;
                    player[numberPl].material[5].color.b = 1;
                    player[numberPl].material[6].color.r = 0.4117647058823529;
                    player[numberPl].material[6].color.g = 0;
                    player[numberPl].material[6].color.b = 1;
                    colorGetrs = true;
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[6].color.r = 0;
                    player[numberPl].material[6].color.g = 0.1450980392156863;
                    player[numberPl].material[6].color.b = 1;
                    player[numberPl].material[5].color.r = 0;
                    player[numberPl].material[5].color.g = 0.1450980392156863;
                    player[numberPl].material[5].color.b = 1;
                    colorGetrs = true;
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[6].color.r = 0;
                    player[numberPl].material[6].color.g = 0.7647058823529412;
                    player[numberPl].material[6].color.b = 1;
                    player[numberPl].material[5].color.r = 0;
                    player[numberPl].material[5].color.g = 0.7647058823529412;
                    player[numberPl].material[5].color.b = 1;colorGetrs = true;
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[6].color.r = 0.9882352941176471;
                    player[numberPl].material[6].color.g = 0.9882352941176471;
                    player[numberPl].material[6].color.b = 0;
                    player[numberPl].material[5].color.r = 0.9882352941176471;
                    player[numberPl].material[5].color.g = 0.9882352941176471;
                    player[numberPl].material[5].color.b = 0;colorGetrs = true;
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[6].color.r = 0.8862745098039216;
                    player[numberPl].material[6].color.g = 0.3568627450980392;
                    player[numberPl].material[6].color.b = 0;
                    player[numberPl].material[5].color.r = 0.8862745098039216;
                    player[numberPl].material[5].color.g = 0.3568627450980392;
                    player[numberPl].material[5].color.b = 0;colorGetrs = true;
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[6].color.r = 0.8666666666666667;
                    player[numberPl].material[6].color.g = 0.7607843137254902;
                    player[numberPl].material[6].color.b = 0.7294117647058824;
                    player[numberPl].material[5].color.r = 0.8666666666666667;
                    player[numberPl].material[5].color.g = 0.7607843137254902;
                    player[numberPl].material[5].color.b = 0.7294117647058824;colorGetrs = true;
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[6].color.r = 1;
                    player[numberPl].material[6].color.g =  0.2352941176470588;
                    player[numberPl].material[6].color.b = 0.5450980392156863;
                    player[numberPl].material[5].color.r = 1;
                    player[numberPl].material[5].color.g =  0.2352941176470588;
                    player[numberPl].material[5].color.b = 0.5450980392156863;colorGetrs = true;
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.9098039215686275;
                    player[numberPl].material[5].color.g =  0;
                    player[numberPl].material[5].color.b = 0;
                    player[numberPl].material[6].color.r = 0.9098039215686275;
                    player[numberPl].material[6].color.g =  0;
                    player[numberPl].material[6].color.b = 0;colorGetrs = true;
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[6].color.r = 0.3529411764705882;
                    player[numberPl].material[6].color.g = 0.0156862745098039;
                    player[numberPl].material[6].color.b = 0.0509803921568627;
                    player[numberPl].material[5].color.r = 0.3529411764705882;
                    player[numberPl].material[5].color.g = 0.0156862745098039;
                    player[numberPl].material[5].color.b = 0.0509803921568627;colorGetrs = true;
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[5].color.r = 0.3098039215686275;
                    player[numberPl].material[5].color.g = 0.1803921568627451;
                    player[numberPl].material[5].color.b =  0.1215686274509804;
                    player[numberPl].material[6].color.r = 0.3098039215686275;
                    player[numberPl].material[6].color.g = 0.1803921568627451;
                    player[numberPl].material[6].color.b =  0.1215686274509804;colorGetrs = true;
                }
                //прозрачность второго цвета (закрытие выбора)
                document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;';
                document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;';
                document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;';
                document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(155, 0, 255, 0); border: 0px;';
                document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
            }

            /*for (let i = 0; i < massGetr.length; i++) {
                //проверка на цвет от первой формы ко второй
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(2) == 0.03 && player[numberPl1].material[massGetr[i]].color.g.toFixed(2) == 0.61 && player[numberPl1].material[massGetr[i]].color.b === 0) {
                    firstColorBoolean = false;
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px';
                    firstColorBooleanS = false;
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px';
                }
                if (player[numberPl1].material[massGetr[i]].color.r === 1 && player[numberPl1].material[massGetr[i]].color.g === 1 && player[numberPl1].material[massGetr[i]].color.b === 1) {
                    secondColorBoolean = false;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    secondColorBooleanS = false;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    nineColorBoolean = false;
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px';
                    nineColorBooleanS = false;
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px';
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px';
                }
                if (player[numberPl1].material[massGetr[i]].color.r === 0 && player[numberPl1].material[massGetr[i]].color.g === 0 && player[numberPl1].material[massGetr[i]].color.b === 0) {
                    thirdColorBoolean = false;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirdColorBooleanS = false;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    thirteenColorBoolean = false;
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    thirteenColorBooleanS = false;
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';

                }
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(2) == 0.41 && player[numberPl1].material[massGetr[i]].color.g === 0 && player[numberPl1].material[massGetr[i]].color.b === 1) {
                    fivesColorBoolean = false;
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    fivesColorBooleanS = false;
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    sixColorBoolean = false;
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    sixColorBooleanS = false;
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    fourthColorBoolean = false;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    fourthColorBooleanS = false;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massGetr[i]].color.r === 0 && player[numberPl1].material[massGetr[i]].color.g.toFixed(3) == 0.145 && player[numberPl1].material[massGetr[i]].color.b === 1) {
                    fivesColorBoolean = false;
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    fivesColorBooleanS = false;
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    sixColorBoolean = false;
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    sixColorBooleanS = false;
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    fourthColorBoolean = false;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    fourthColorBooleanS = false;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massGetr[i]].color.r === 0 && player[numberPl1].material[massGetr[i]].color.g.toFixed(3) == 0.765 && player[numberPl1].material[massGetr[i]].color.b === 1) {
                    fivesColorBoolean = false;
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    fivesColorBooleanS = false;
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    sixColorBoolean = false;
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    sixColorBooleanS = false;
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    fourthColorBoolean = false;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    fourthColorBooleanS = false;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massGetr[i]].color.r === 0.9882352941176471 && player[numberPl1].material[massGetr[i]].color.g === 0.9882352941176471 && player[numberPl1].material[massGetr[i]].color.b === 0) {
                    sevenColorBoolean = false;
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                    sevenColorBooleanS = false;
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(2) == 0.89 && player[numberPl1].material[massGetr[i]].color.g.toFixed(2) == 0.36 && player[numberPl1].material[massGetr[i]].color.b === 0) {
                    eightColorBoolean = false;
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                    eightColorBooleanS = false;
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';

                }
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(3) == 0.867 && player[numberPl1].material[massGetr[i]].color.g.toFixed(3) == 0.761 && player[numberPl1].material[massGetr[i]].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = false;
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    nineColorBooleanS = false;
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    secondColorBoolean = false;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    secondColorBooleanS = false;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massGetr[i]].color.r === 1 && (player[numberPl1].material[massGetr[i]].color.g.toFixed(2) == 0.23 || player[numberPl1].material[massGetr[i]].color.g.toFixed(2) == 0.24) && player[numberPl1].material[massGetr[i]].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    secondColorBoolean = false;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    secondColorBooleanS = false;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    nineColorBoolean = false;
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    nineColorBooleanS = false;
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    eightColorBoolean = false;
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                    eightColorBooleanS = false;
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';

                }
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(2) == 0.91 && player[numberPl1].material[massGetr[i]].color.g === 0 && player[numberPl1].material[massGetr[i]].color.b === 0) {
                    elevenColorBoolean = false;
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    elevenColorBooleanS = false;
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(3) == 0.349 && player[numberPl1].material[massGetr[i]].color.g.toFixed(3) == 0.012 && player[numberPl1].material[massGetr[i]].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    elevenColorBoolean = false;
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    elevenColorBooleanS = false;
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    thirdColorBoolean = false;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirdColorBooleanS = false;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirteenColorBoolean = false;
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    thirteenColorBooleanS = false;
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
                if (player[numberPl1].material[massGetr[i]].color.r.toFixed(2) == 0.31 && player[numberPl1].material[massGetr[i]].color.g.toFixed(2) == 0.18 && player[numberPl1].material[massGetr[i]].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = false;
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    thirteenColorBooleanS = false;
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    thirdColorBoolean = false;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirdColorBooleanS = false;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                }
            }*/
        }

        if (activeWindowShorts === true) {

            if (player[numberPl].material[1].color.r === player[numberPl].material[18].color.r && player[numberPl].material[1].color.r !== player[numberPl].material[19].color.r && player[numberPl].material[19].color.r === player[numberPl].material[20].color.r) {
                    countTshirt = 1;
            }
            if (player[numberPl].material[1].color.r === player[numberPl].material[20].color.r && player[numberPl].material[1].color.r !== player[numberPl].material[19].color.r && player[numberPl].material[19].color.r === player[numberPl].material[18].color.r) {
                    countTshirt = 2;
            }
            if (player[numberPl].material[1].color.r === player[numberPl].material[19].color.r && player[numberPl].material[1].color.r !== player[numberPl].material[18].color.r && player[numberPl].material[20].color.r === player[numberPl].material[18].color.r) {
                    countTshirt = 3;
            }
            if (player[numberPl].material[1].color.r === player[numberPl].material[20].color.r && player[numberPl].material[1].color.r === player[numberPl].material[19].color.r && player[numberPl].material[1].color.r === player[numberPl].material[18].color.r) {
                    countTshirt = 0;
            }
            //для проверки гетр в футболках и шортах
            if (player[numberPl].material[5].color.r === player[numberPl].material[6].color.r ) {
                countGetrs = 1;
            }
            if (player[numberPl].material[5].color.r !== player[numberPl].material[6].color.r) {
                countGetrs = 0;
            }


            if (colorShorts === false && player[numberPl].material[2].color.r === player[numberPl].material[3].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countShorts = 1;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.03 && player[numberPl].material[2].color.g.toFixed(2) == 0.61 && player[numberPl].material[2].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 1 && player[numberPl].material[2].color.g === 1 && player[numberPl].material[2].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 0 && player[numberPl].material[2].color.g === 0 && player[numberPl].material[2].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.41 && player[numberPl].material[2].color.g === 0 && player[numberPl].material[2].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 0 && player[numberPl].material[2].color.g.toFixed(3) == 0.145 && player[numberPl].material[2].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 0 && player[numberPl].material[2].color.g.toFixed(3) == 0.765 && player[numberPl].material[2].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 0.9882352941176471 && player[numberPl].material[2].color.g === 0.9882352941176471 && player[numberPl].material[2].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.89 && player[numberPl].material[2].color.g.toFixed(2) == 0.36 && player[numberPl].material[2].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(3) == 0.867 && player[numberPl].material[2].color.g.toFixed(3) == 0.761 && player[numberPl].material[2].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 1 && ( player[numberPl].material[2].color.g.toFixed(2) == 0.23 || player[numberPl].material[2].color.g.toFixed(2) == 0.24) && player[numberPl].material[2].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.91 && player[numberPl].material[2].color.g === 0 && player[numberPl].material[2].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(3) == 0.349 && player[numberPl].material[2].color.g.toFixed(3) == 0.012 && player[numberPl].material[2].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.31 && player[numberPl].material[2].color.g.toFixed(2) == 0.18 && player[numberPl].material[2].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                colorTshirtSecondPlayer = false;
            }
            if (colorShorts === false &&  player[numberPl].material[2].color.r !== player[numberPl].material[3].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countShorts = 0;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.03 && player[numberPl].material[2].color.g.toFixed(2) == 0.61 && player[numberPl].material[2].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(2) == 0.03 && player[numberPl].material[3].color.g.toFixed(2) == 0.61 && player[numberPl].material[3].color.b === 0) {
                    firstColorBooleanS = true;
                }
                if (player[numberPl].material[2].color.r === 1 && player[numberPl].material[2].color.g === 1 && player[numberPl].material[2].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[3].color.r === 1 && player[numberPl].material[3].color.g === 1 && player[numberPl].material[3].color.b === 1) {
                    secondColorBooleanS = true;
                }
                if (player[numberPl].material[2].color.r === 0 && player[numberPl].material[2].color.g === 0 && player[numberPl].material[2].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[3].color.r === 0 && player[numberPl].material[3].color.g === 0 && player[numberPl].material[3].color.b === 0) {
                    thirdColorBooleanS = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.41 && player[numberPl].material[2].color.g === 0 && player[numberPl].material[2].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(2) == 0.41 && player[numberPl].material[3].color.g === 0 && player[numberPl].material[3].color.b === 1) {
                    fourthColorBooleanS = true;
                }
                if (player[numberPl].material[2].color.r === 0 && player[numberPl].material[2].color.g.toFixed(3) == 0.145 && player[numberPl].material[2].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[3].color.r === 0 && player[numberPl].material[3].color.g.toFixed(3) == 0.145 && player[numberPl].material[3].color.b === 1) {
                    fivesColorBooleanS = true;
                }
                if (player[numberPl].material[2].color.r === 0 && player[numberPl].material[2].color.g.toFixed(3) == 0.765 && player[numberPl].material[2].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 0.9882352941176471 && player[numberPl].material[2].color.g === 0.9882352941176471 && player[numberPl].material[2].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.89 && player[numberPl].material[2].color.g.toFixed(2) == 0.36 && player[numberPl].material[2].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(3) == 0.867 && player[numberPl].material[2].color.g.toFixed(3) == 0.761 && player[numberPl].material[2].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r === 1 && (player[numberPl].material[2].color.g.toFixed(2) == 0.23 || player[numberPl].material[2].color.g.toFixed(2) == 0.24) && player[numberPl].material[2].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.91 && player[numberPl].material[2].color.g === 0 && player[numberPl].material[2].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(3) == 0.349 && player[numberPl].material[2].color.g.toFixed(3) == 0.012 && player[numberPl].material[2].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[2].color.r.toFixed(2) == 0.31 && player[numberPl].material[2].color.g.toFixed(2) == 0.18 && player[numberPl].material[2].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                if (player[numberPl].material[3].color.r === 0 && player[numberPl].material[3].color.g.toFixed(3) == 0.765 && player[numberPl].material[3].color.b === 1) {
                    sixColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r === 0.9882352941176471 && player[numberPl].material[3].color.g === 0.9882352941176471 && player[numberPl].material[3].color.b === 0) {
                    sevenColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(2) == 0.89 && player[numberPl].material[3].color.g.toFixed(2) == 0.36 && player[numberPl].material[3].color.b === 0) {
                    eightColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(3) == 0.867 && player[numberPl].material[3].color.g.toFixed(3) == 0.761 && player[numberPl].material[3].color.b.toFixed(3) == 0.729) {
                    nineColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r === 1 && (player[numberPl].material[3].color.g.toFixed(2) == 0.23 || player[numberPl].material[3].color.g.toFixed(2) == 0.24) && player[numberPl].material[3].color.b.toFixed(3) == 0.545) {
                    tenColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(2) == 0.91 && player[numberPl].material[3].color.g === 0 && player[numberPl].material[3].color.b === 0) {
                    elevenColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(3) == 0.349 && player[numberPl].material[3].color.g.toFixed(3) == 0.012 && player[numberPl].material[3].color.b.toFixed(3) == 0.047) {
                    twelweColorBooleanS = true;
                }
                if (player[numberPl].material[3].color.r.toFixed(2) == 0.31 && player[numberPl].material[3].color.g.toFixed(2) == 0.18 && player[numberPl].material[3].color.b.toFixed(2) == 0.12) {
                    thirteenColorBooleanS = true;
                }
                colorTshirtSecondPlayer = false;
            }

            /*countGetrs = 0;
            countTshirt = 1;*/
            if (countShorts === 0) {
                if (firstColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.0313725490196078;
                    player[numberPl].material[2].color.g = 0.607843137254902;
                    player[numberPl].material[2].color.b = 0;
                    colorShorts = true;
                    firstColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[2].color.r = 1;
                    player[numberPl].material[2].color.g = 1;
                    player[numberPl].material[2].color.b = 1;
                    colorShorts = true;
                    secondColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0;
                    player[numberPl].material[2].color.g = 0;
                    player[numberPl].material[2].color.b = 0;
                    colorShorts = true;
                    thirdColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.4117647058823529;
                    player[numberPl].material[2].color.g = 0;
                    player[numberPl].material[2].color.b = 1;
                    colorShorts = true;
                    fourthColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 1, 0); border: 0px;'
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0;
                    player[numberPl].material[2].color.g = 0.1450980392156863;
                    player[numberPl].material[2].color.b = 1;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    fivesColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;'
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0;
                    player[numberPl].material[2].color.g = 0.7647058823529412;
                    player[numberPl].material[2].color.b = 1;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    sixColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;'
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.9882352941176471;
                    player[numberPl].material[2].color.g = 0.9882352941176471;
                    player[numberPl].material[2].color.b = 0;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    sevenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;'
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.8862745098039216;
                    player[numberPl].material[2].color.g = 0.3568627450980392;
                    player[numberPl].material[2].color.b = 0;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    eightColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;'
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.8666666666666667;
                    player[numberPl].material[2].color.g = 0.7607843137254902;
                    player[numberPl].material[2].color.b = 0.7294117647058824;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    nineColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;'
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 1;
                    player[numberPl].material[2].color.g =  0.2352941176470588;
                    player[numberPl].material[2].color.b = 0.5450980392156863;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    tenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;'
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.9098039215686275;
                    player[numberPl].material[2].color.g =  0;
                    player[numberPl].material[2].color.b = 0;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    elevenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;'
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.3529411764705882;
                    player[numberPl].material[2].color.g = 0.0156862745098039;
                    player[numberPl].material[2].color.b = 0.0509803921568627;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    twelweColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;'
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.3098039215686275;
                    player[numberPl].material[2].color.g = 0.1803921568627451;
                    player[numberPl].material[2].color.b =  0.1215686274509804;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    thirteenColorBooleanS = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;'
                }
                //дополнительный цвет
                if (firstColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.0313725490196078;
                    player[numberPl].material[3].color.g = 0.607843137254902;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                    firstColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 1;
                    player[numberPl].material[3].color.g = 1;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                    secondColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0;
                    player[numberPl].material[3].color.g = 0;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                    thirdColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.4117647058823529;
                    player[numberPl].material[3].color.g = 0;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                    fourthColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0;
                    player[numberPl].material[3].color.g = 0.1450980392156863;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    fivesColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;'
                }
                if (sixColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0;
                    player[numberPl].material[3].color.g = 0.7647058823529412;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    sixColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;'
                }
                if (sevenColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.9882352941176471;
                    player[numberPl].material[3].color.g = 0.9882352941176471;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    sevenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;'
                }
                if (eightColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.8862745098039216;
                    player[numberPl].material[3].color.g = 0.3568627450980392;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    eightColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;'
                }
                if (nineColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.8666666666666667;
                    player[numberPl].material[3].color.g = 0.7607843137254902;
                    player[numberPl].material[3].color.b = 0.7294117647058824;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    nineColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;'
                }
                if (tenColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 1;
                    player[numberPl].material[3].color.g =  0.2352941176470588;
                    player[numberPl].material[3].color.b = 0.5450980392156863;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    tenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;'
                }
                if (elevenColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.9098039215686275;
                    player[numberPl].material[3].color.g =  0;
                    player[numberPl].material[3].color.b = 0;
                    //закрытие второго цвета при выборе первого
                    colorShorts = true;
                    elevenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;'
                }
                if (twelweColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.3529411764705882;
                    player[numberPl].material[3].color.g = 0.0156862745098039;
                    player[numberPl].material[3].color.b = 0.0509803921568627;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    twelweColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;'
                }
                if (thirteenColorBooleanS === true) {
                    player[numberPl].material[3].color.r = 0.3098039215686275;
                    player[numberPl].material[3].color.g = 0.1803921568627451;
                    player[numberPl].material[3].color.b =  0.1215686274509804;
                    colorShorts = true;
                    //закрытие второго цвета при выборе первого
                    thirteenColorBoolean = false;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;'
                }
            }
            if (countShorts === 1) {
                firstColorBooleanS = false;
                secondColorBooleanS = false;
                thirdColorBooleanS = false;
                fourthColorBooleanS = false;
                fivesColorBooleanS = false;
                sixColorBooleanS = false;
                sevenColorBooleanS = false;
                eightColorBooleanS = false;
                nineColorBooleanS = false;
                tenColorBooleanS = false;
                elevenColorBooleanS = false;
                twelweColorBooleanS = false;
                thirteenColorBooleanS = false;
                if (firstColorBoolean === true) {
                    player[numberPl].material[3].color.r = 0.0313725490196078;
                    player[numberPl].material[3].color.g = 0.607843137254902;
                    player[numberPl].material[3].color.b = 0;
                    player[numberPl].material[2].color.r = 0.0313725490196078;
                    player[numberPl].material[2].color.g = 0.607843137254902;
                    player[numberPl].material[2].color.b = 0;
                    colorShorts = true;
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[2].color.r = 1;
                    player[numberPl].material[2].color.g = 1;
                    player[numberPl].material[2].color.b = 1;
                    player[numberPl].material[3].color.r = 1;
                    player[numberPl].material[3].color.g = 1;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0;
                    player[numberPl].material[2].color.g = 0;
                    player[numberPl].material[2].color.b = 0;
                    player[numberPl].material[3].color.r = 0;
                    player[numberPl].material[3].color.g = 0;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.4117647058823529;
                    player[numberPl].material[2].color.g = 0;
                    player[numberPl].material[2].color.b = 1;
                    player[numberPl].material[3].color.r = 0.4117647058823529;
                    player[numberPl].material[3].color.g = 0;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0;
                    player[numberPl].material[2].color.g = 0.1450980392156863;
                    player[numberPl].material[2].color.b = 1;
                    player[numberPl].material[3].color.r = 0;
                    player[numberPl].material[3].color.g = 0.1450980392156863;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0;
                    player[numberPl].material[2].color.g = 0.7647058823529412;
                    player[numberPl].material[2].color.b = 1;
                    player[numberPl].material[3].color.r = 0;
                    player[numberPl].material[3].color.g = 0.7647058823529412;
                    player[numberPl].material[3].color.b = 1;
                    colorShorts = true;
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.9882352941176471;
                    player[numberPl].material[2].color.g = 0.9882352941176471;
                    player[numberPl].material[2].color.b = 0;
                    player[numberPl].material[3].color.r = 0.9882352941176471;
                    player[numberPl].material[3].color.g = 0.9882352941176471;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.8862745098039216;
                    player[numberPl].material[2].color.g = 0.3568627450980392;
                    player[numberPl].material[2].color.b = 0;
                    player[numberPl].material[3].color.r = 0.8862745098039216;
                    player[numberPl].material[3].color.g = 0.3568627450980392;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.8666666666666667;
                    player[numberPl].material[2].color.g = 0.7607843137254902;
                    player[numberPl].material[2].color.b = 0.7294117647058824;
                    player[numberPl].material[3].color.r = 0.8666666666666667;
                    player[numberPl].material[3].color.g = 0.7607843137254902;
                    player[numberPl].material[3].color.b = 0.7294117647058824;
                    colorShorts = true;
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 1;
                    player[numberPl].material[2].color.g =  0.2352941176470588;
                    player[numberPl].material[2].color.b = 0.5450980392156863;
                    player[numberPl].material[3].color.r = 1;
                    player[numberPl].material[3].color.g =  0.2352941176470588;
                    player[numberPl].material[3].color.b = 0.5450980392156863;
                    colorShorts = true;
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.9098039215686275;
                    player[numberPl].material[2].color.g =  0;
                    player[numberPl].material[2].color.b = 0;
                    player[numberPl].material[3].color.r = 0.9098039215686275;
                    player[numberPl].material[3].color.g =  0;
                    player[numberPl].material[3].color.b = 0;
                    colorShorts = true;
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.3529411764705882;
                    player[numberPl].material[2].color.g = 0.0156862745098039;
                    player[numberPl].material[2].color.b = 0.0509803921568627;
                    player[numberPl].material[3].color.r = 0.3529411764705882;
                    player[numberPl].material[3].color.g = 0.0156862745098039;
                    player[numberPl].material[3].color.b = 0.0509803921568627;
                    colorShorts = true;
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[2].color.r = 0.3098039215686275;
                    player[numberPl].material[2].color.g = 0.1803921568627451;
                    player[numberPl].material[2].color.b =  0.1215686274509804;
                    player[numberPl].material[3].color.r = 0.3098039215686275;
                    player[numberPl].material[3].color.g = 0.1803921568627451;
                    player[numberPl].material[3].color.b =  0.1215686274509804;
                    colorShorts = true;
                }
                //прозрачность второго цвета (закрытие выбора)
                document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;';
                document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;';
                document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;';
                document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;';
                document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
            }

            for (let i = 0; i < massShort.length; i++) {
                //проверка на цвет от первой формы ко второй
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(2) == 0.03 && player[numberPl1].material[massShort[i]].color.g.toFixed(2) == 0.61 && player[numberPl1].material[massShort[i]].color.b === 0) {
                    firstColorBoolean = false;
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px';
                    firstColorBooleanS = false;
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px';
                }
                if (player[numberPl1].material[massShort[i]].color.r === 1 && player[numberPl1].material[massShort[i]].color.g === 1 && player[numberPl1].material[massShort[i]].color.b === 1) {
                    secondColorBoolean = false;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    secondColorBooleanS = false;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    nineColorBoolean = false;
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px';
                    nineColorBooleanS = false;
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px';
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px';
                }
                if (player[numberPl1].material[massShort[i]].color.r === 0 && player[numberPl1].material[massShort[i]].color.g === 0 && player[numberPl1].material[massShort[i]].color.b === 0) {
                    thirdColorBoolean = false;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirdColorBooleanS = false;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    thirteenColorBoolean = false;
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    thirteenColorBooleanS = false;
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';

                }
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(2) == 0.41 && player[numberPl1].material[massShort[i]].color.g === 0 && player[numberPl1].material[massShort[i]].color.b === 1) {
                    fivesColorBoolean = false;
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    fivesColorBooleanS = false;
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    sixColorBoolean = false;
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    sixColorBooleanS = false;
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    fourthColorBoolean = false;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    fourthColorBooleanS = false;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massShort[i]].color.r === 0 && player[numberPl1].material[massShort[i]].color.g.toFixed(3) == 0.145 && player[numberPl1].material[massShort[i]].color.b === 1) {
                    fivesColorBoolean = false;
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    fivesColorBooleanS = false;
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    sixColorBoolean = false;
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    sixColorBooleanS = false;
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    fourthColorBoolean = false;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    fourthColorBooleanS = false;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massShort[i]].color.r === 0 && player[numberPl1].material[massShort[i]].color.g.toFixed(3) == 0.765 && player[numberPl1].material[massShort[i]].color.b === 1) {
                    fivesColorBoolean = false;
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    fivesColorBooleanS = false;
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                    sixColorBoolean = false;
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    sixColorBooleanS = false;
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                    fourthColorBoolean = false;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    fourthColorBooleanS = false;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massShort[i]].color.r === 0.9882352941176471 && player[numberPl1].material[massShort[i]].color.g === 0.9882352941176471 && player[numberPl1].material[massShort[i]].color.b === 0) {
                    sevenColorBoolean = false;
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                    sevenColorBooleanS = false;
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(2) == 0.89 && player[numberPl1].material[massGetr[i]].color.g.toFixed(2) == 0.36 && player[numberPl1].material[massShort[i]].color.b === 0) {
                    eightColorBoolean = false;
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                    eightColorBooleanS = false;
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';

                }
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(3) == 0.867 && player[numberPl1].material[massShort[i]].color.g.toFixed(3) == 0.761 && player[numberPl1].material[massShort[i]].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = false;
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    nineColorBooleanS = false;
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    secondColorBoolean = false;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    secondColorBooleanS = false;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                }
                if (player[numberPl1].material[massShort[i]].color.r === 1 && (player[numberPl1].material[massShort[i]].color.g.toFixed(2) == 0.23 || player[numberPl1].material[massShort[i]].color.g.toFixed(2) == 0.24) && player[numberPl1].material[massShort[i]].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = false;
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    tenColorBooleanS = false;
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                    secondColorBoolean = false;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    secondColorBooleanS = false;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    nineColorBoolean = false;
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    nineColorBooleanS = false;
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                    eightColorBoolean = false;
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                    eightColorBooleanS = false;
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';

                }
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(2) == 0.91 && player[numberPl1].material[massShort[i]].color.g === 0 && player[numberPl1].material[massShort[i]].color.b === 0) {
                    elevenColorBoolean = false;
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    elevenColorBooleanS = false;
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(3) == 0.349 && player[numberPl1].material[massShort[i]].color.g.toFixed(3) == 0.012 && player[numberPl1].material[massShort[i]].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    elevenColorBoolean = false;
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    elevenColorBooleanS = false;
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                    thirdColorBoolean = false;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirdColorBooleanS = false;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirteenColorBoolean = false;
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    thirteenColorBooleanS = false;
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
                if (player[numberPl1].material[massShort[i]].color.r.toFixed(2) == 0.31 && player[numberPl1].material[massShort[i]].color.g.toFixed(2) == 0.18 && player[numberPl1].material[massShort[i]].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = false;
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    thirteenColorBooleanS = false;
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    twelweColorBoolean = false;
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    twelweColorBooleanS = false;
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    thirdColorBoolean = false;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    thirdColorBooleanS = false;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                }
            }

        }
        if (activeWindowTshirt === true) {
            /*countGetrs = 0;
            countShorts = 0;*/

            if (colorShirt === false && player[numberPl] !== undefined && player[numberPl].material[1].color.r === player[numberPl].material[18].color.r && player[numberPl].material[1].color.r !== player[numberPl].material[19].color.r && player[numberPl].material[19].color.r === player[numberPl].material[20].color.r) {

                if (colorTshirtSecondPlayer === true) {
                   countTshirt = 1;
               }
               // firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false;
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.03 && player[numberPl].material[1].color.g.toFixed(2) == 0.61 && player[numberPl].material[1].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.03 && player[numberPl].material[19].color.g.toFixed(2) == 0.61 && player[numberPl].material[19].color.b === 0) {
                    firstColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 1 && player[numberPl].material[1].color.g === 1 && player[numberPl].material[1].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 1 && player[numberPl].material[19].color.g === 1 && player[numberPl].material[19].color.b === 1) {
                    secondColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 0 && player[numberPl].material[19].color.g === 0 && player[numberPl].material[19].color.b === 0) {
                    thirdColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.41 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.41 && player[numberPl].material[19].color.g === 0 && player[numberPl].material[19].color.b === 1) {
                    fourthColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.145 && player[numberPl].material[1].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 0 && player[numberPl].material[19].color.g.toFixed(3) == 0.145 && player[numberPl].material[19].color.b === 1) {
                    fivesColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.765 && player[numberPl].material[1].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0.9882352941176471 && player[numberPl].material[1].color.g === 0.9882352941176471 && player[numberPl].material[1].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.89 && player[numberPl].material[1].color.g.toFixed(2) == 0.36 && player[numberPl].material[1].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.867 && player[numberPl].material[1].color.g.toFixed(3) == 0.761 && player[numberPl].material[1].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 1 && (player[numberPl].material[1].color.g.toFixed(2) == 0.23 || player[numberPl].material[1].color.g.toFixed(2) == 0.24) && player[numberPl].material[1].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.91 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.349 && player[numberPl].material[1].color.g.toFixed(3) == 0.012 && player[numberPl].material[1].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.31 && player[numberPl].material[1].color.g.toFixed(2) == 0.18 && player[numberPl].material[1].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 0 && player[numberPl].material[19].color.g.toFixed(3) == 0.765 && player[numberPl].material[19].color.b === 1) {
                    sixColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r === 0.9882352941176471 && player[numberPl].material[19].color.g === 0.9882352941176471 && player[numberPl].material[19].color.b === 0) {
                    sevenColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.89 && player[numberPl].material[19].color.g.toFixed(2) == 0.36 && player[numberPl].material[19].color.b === 0) {
                    eightColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(3) == 0.867 && player[numberPl].material[19].color.g.toFixed(3) == 0.761 && player[numberPl].material[19].color.b.toFixed(3) == 0.729) {
                    nineColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r === 1 && (player[numberPl].material[19].color.g.toFixed(2) == 0.23 || player[numberPl].material[19].color.g.toFixed(2) == 0.24) && player[numberPl].material[19].color.b.toFixed(3) == 0.545) {
                    tenColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.91 && player[numberPl].material[19].color.g === 0 && player[numberPl].material[19].color.b === 0) {
                    elevenColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(3) == 0.349 && player[numberPl].material[19].color.g.toFixed(3) == 0.012 && player[numberPl].material[19].color.b.toFixed(3) == 0.047) {
                    twelweColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.31 && player[numberPl].material[19].color.g.toFixed(2) == 0.18 && player[numberPl].material[19].color.b.toFixed(2) == 0.12) {
                    thirteenColorBooleanS = true;
                }
                colorTshirtSecondPlayer = false;
            }
            if (colorShirt === false && player[numberPl] !== undefined && player[numberPl].material[1].color.r === player[numberPl].material[20].color.r && player[numberPl].material[1].color.r !== player[numberPl].material[19].color.r && player[numberPl].material[19].color.r === player[numberPl].material[18].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countTshirt = 2;
                }
                //  firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false;
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.03 && player[numberPl].material[1].color.g.toFixed(2) == 0.61 && player[numberPl].material[1].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.03 && player[numberPl].material[19].color.g.toFixed(2) == 0.61 && player[numberPl].material[19].color.b === 0) {
                    firstColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 1 && player[numberPl].material[1].color.g === 1 && player[numberPl].material[1].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 1 && player[numberPl].material[19].color.g === 1 && player[numberPl].material[19].color.b === 1) {
                    secondColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 0 && player[numberPl].material[19].color.g === 0 && player[numberPl].material[19].color.b === 0) {
                    thirdColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.41 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.41 && player[numberPl].material[19].color.g === 0 && player[numberPl].material[19].color.b === 1) {
                    fourthColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.145 && player[numberPl].material[1].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 0 && player[numberPl].material[19].color.g.toFixed(3) == 0.145 && player[numberPl].material[19].color.b === 1) {
                    fivesColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.765 && player[numberPl].material[1].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0.9882352941176471 && player[numberPl].material[1].color.g === 0.9882352941176471 && player[numberPl].material[1].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.89 && player[numberPl].material[1].color.g.toFixed(2) == 0.36 && player[numberPl].material[1].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.867 && player[numberPl].material[1].color.g.toFixed(3) == 0.761 && player[numberPl].material[1].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 1 && (player[numberPl].material[1].color.g.toFixed(2) == 0.23 || player[numberPl].material[1].color.g.toFixed(2) == 0.24) && player[numberPl].material[1].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.91 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.349 && player[numberPl].material[1].color.g.toFixed(3) == 0.012 && player[numberPl].material[1].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.31 && player[numberPl].material[1].color.g.toFixed(2) == 0.18 && player[numberPl].material[1].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                if (player[numberPl].material[19].color.r === 0 && player[numberPl].material[19].color.g.toFixed(3) == 0.765 && player[numberPl].material[19].color.b === 1) {
                    sixColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r === 0.9882352941176471 && player[numberPl].material[19].color.g === 0.9882352941176471 && player[numberPl].material[19].color.b === 0) {
                    sevenColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.89 && player[numberPl].material[19].color.g.toFixed(2) == 0.36 && player[numberPl].material[19].color.b === 0) {
                    eightColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(3) == 0.867 && player[numberPl].material[19].color.g.toFixed(3) == 0.761 && player[numberPl].material[19].color.b.toFixed(3) == 0.729) {
                    nineColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r === 1 && (player[numberPl].material[19].color.g.toFixed(2) == 0.23 || player[numberPl].material[19].color.g.toFixed(2) == 0.24) && player[numberPl].material[19].color.b.toFixed(3) == 0.545) {
                    tenColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.91 && player[numberPl].material[19].color.g === 0 && player[numberPl].material[19].color.b === 0) {
                    elevenColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(3) == 0.349 && player[numberPl].material[19].color.g.toFixed(3) == 0.012 && player[numberPl].material[19].color.b.toFixed(3) == 0.047) {
                    twelweColorBooleanS = true;
                }
                if (player[numberPl].material[19].color.r.toFixed(2) == 0.31 && player[numberPl].material[19].color.g.toFixed(2) == 0.18 && player[numberPl].material[19].color.b.toFixed(2) == 0.12) {
                    thirteenColorBooleanS = true;
                }
                colorTshirtSecondPlayer = false;
            }
            if (colorShirt === false && player[numberPl] !== undefined && player[numberPl].material[1].color.r === player[numberPl].material[19].color.r && player[numberPl].material[1].color.r !== player[numberPl].material[18].color.r && player[numberPl].material[20].color.r === player[numberPl].material[18].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countTshirt = 3;
                }
                // firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false;
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.03 && player[numberPl].material[1].color.g.toFixed(2) == 0.61 && player[numberPl].material[1].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(2) == 0.03 && player[numberPl].material[20].color.g.toFixed(2) == 0.61 && player[numberPl].material[20].color.b === 0) {
                    firstColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 1 && player[numberPl].material[1].color.g === 1 && player[numberPl].material[1].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[20].color.r === 1 && player[numberPl].material[20].color.g === 1 && player[numberPl].material[20].color.b === 1) {
                    secondColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[20].color.r === 0 && player[numberPl].material[20].color.g === 0 && player[numberPl].material[20].color.b === 0) {
                    thirdColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.41 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(2) == 0.41 && player[numberPl].material[20].color.g === 0 && player[numberPl].material[20].color.b === 1) {
                    fourthColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.145 && player[numberPl].material[1].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[20].color.r === 0 && player[numberPl].material[20].color.g.toFixed(3) == 0.145 && player[numberPl].material[20].color.b === 1) {
                    fivesColorBooleanS = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.765 && player[numberPl].material[1].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0.9882352941176471 && player[numberPl].material[1].color.g === 0.9882352941176471 && player[numberPl].material[1].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.89 && player[numberPl].material[1].color.g.toFixed(2) == 0.36 && player[numberPl].material[1].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.867 && player[numberPl].material[1].color.g.toFixed(3) == 0.761 && player[numberPl].material[1].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 1 && (player[numberPl].material[1].color.g.toFixed(2) == 0.23 || player[numberPl].material[19].color.g.toFixed(2) == 0.24) && player[numberPl].material[1].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.91 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.349 && player[numberPl].material[1].color.g.toFixed(3) == 0.012 && player[numberPl].material[1].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.31 && player[numberPl].material[1].color.g.toFixed(2) == 0.18 && player[numberPl].material[1].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                if (player[numberPl].material[20].color.r === 0 && player[numberPl].material[20].color.g.toFixed(3) == 0.765 && player[numberPl].material[20].color.b === 1) {
                    sixColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r === 0.9882352941176471 && player[numberPl].material[20].color.g === 0.9882352941176471 && player[numberPl].material[20].color.b === 0) {
                    sevenColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(2) == 0.89 && player[numberPl].material[20].color.g.toFixed(2) == 0.36 && player[numberPl].material[20].color.b === 0) {
                    eightColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(3) == 0.867 && player[numberPl].material[20].color.g.toFixed(3) == 0.761 && player[numberPl].material[20].color.b.toFixed(3) == 0.729) {
                    nineColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r === 1 && (player[numberPl].material[20].color.g.toFixed(2) == 0.23 || player[numberPl].material[19].color.g.toFixed(2) == 0.24) && player[numberPl].material[20].color.b.toFixed(3) == 0.545) {
                    tenColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(2) == 0.91 && player[numberPl].material[20].color.g === 0 && player[numberPl].material[20].color.b === 0) {
                    elevenColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(3) == 0.349 && player[numberPl].material[20].color.g.toFixed(3) == 0.012 && player[numberPl].material[20].color.b.toFixed(3) == 0.047) {
                    twelweColorBooleanS = true;
                }
                if (player[numberPl].material[20].color.r.toFixed(2) == 0.31 && player[numberPl].material[20].color.g.toFixed(2) == 0.18 && player[numberPl].material[20].color.b.toFixed(2) == 0.12) {
                    thirteenColorBooleanS = true;
                }
                colorTshirtSecondPlayer = false;
            }
            if (colorShirt === false && player[numberPl] !== undefined && player[numberPl].material[1].color.r === player[numberPl].material[20].color.r && player[numberPl].material[1].color.r === player[numberPl].material[19].color.r && player[numberPl].material[1].color.r === player[numberPl].material[18].color.r) {
                if (colorTshirtSecondPlayer === true) {
                    countTshirt = 0;
                }
                // firstColorBoolean = false; firstColorBooleanS = false; secondColorBoolean = false; secondColorBooleanS = false; thirdColorBoolean = false; thirdColorBooleanS = false; fourthColorBoolean = false; fourthColorBooleanS = false;
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.03 && player[numberPl].material[1].color.g.toFixed(2) == 0.61 && player[numberPl].material[1].color.b === 0) {
                    firstColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 1 && player[numberPl].material[1].color.g === 1 && player[numberPl].material[1].color.b === 1) {
                    secondColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    thirdColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.41 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 1) {
                    fourthColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.145 && player[numberPl].material[1].color.b === 1) {
                    fivesColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0 && player[numberPl].material[1].color.g.toFixed(3) == 0.765 && player[numberPl].material[1].color.b === 1) {
                    sixColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 0.9882352941176471 && player[numberPl].material[1].color.g === 0.9882352941176471 && player[numberPl].material[1].color.b === 0) {
                    sevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.89 && player[numberPl].material[1].color.g.toFixed(2) == 0.36 && player[numberPl].material[1].color.b === 0) {
                    eightColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.867 && player[numberPl].material[1].color.g.toFixed(3) == 0.761 && player[numberPl].material[1].color.b.toFixed(3) == 0.729) {
                    nineColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r === 1 && (player[numberPl].material[1].color.g.toFixed(2) == 0.23 || player[numberPl].material[19].color.g.toFixed(2) == 0.24)  && player[numberPl].material[1].color.b.toFixed(3) == 0.545) {
                    tenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.91 && player[numberPl].material[1].color.g === 0 && player[numberPl].material[1].color.b === 0) {
                    elevenColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(3) == 0.349 && player[numberPl].material[1].color.g.toFixed(3) == 0.012 && player[numberPl].material[1].color.b.toFixed(3) == 0.047) {
                    twelweColorBoolean = true;
                }
                if (player[numberPl].material[1].color.r.toFixed(2) == 0.31 && player[numberPl].material[1].color.g.toFixed(2) == 0.18 && player[numberPl].material[1].color.b.toFixed(2) == 0.12) {
                    thirteenColorBoolean = true;
                }
                colorTshirtSecondPlayer = false;
            }
            if (player[numberPl] !== undefined ) {
                if (player[numberPl].material[2].color.r === player[numberPl].material[3].color.r) {
                        countShorts = 1;
                }
                if (player[numberPl].material[2].color.r !== player[numberPl].material[3].color.r) {
                        countShorts = 0;
                }
                //для проверки гетр в футболках и шортах
                if (player[numberPl].material[5].color.r === player[numberPl].material[6].color.r ) {
                    countGetrs = 1;
                }
                if (player[numberPl].material[5].color.r !== player[numberPl].material[6].color.r) {
                    countGetrs = 0;
                }
            }
            

            if (countTshirt === 1) {
                if (firstColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.0313725490196078;
                    player[numberPl].material[1].color.g = 0.607843137254902;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.0313725490196078;
                    player[numberPl].material[18].color.g = 0.607843137254902;
                    player[numberPl].material[18].color.b = 0;
                    firstColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g = 1;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g = 1;
                    player[numberPl].material[18].color.b = 1;
                    secondColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 0;
                    thirdColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.4117647058823529;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 0.4117647058823529;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 1;
                    fourthColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.1450980392156863;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.1450980392156863;
                    player[numberPl].material[18].color.b = 1;
                    fivesColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.7647058823529412;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.7647058823529412;
                    player[numberPl].material[18].color.b = 1;
                    sixColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9882352941176471;
                    player[numberPl].material[1].color.g = 0.9882352941176471;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.9882352941176471;
                    player[numberPl].material[18].color.g = 0.9882352941176471;
                    player[numberPl].material[18].color.b = 0;
                    sevenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8862745098039216;
                    player[numberPl].material[1].color.g = 0.3568627450980392;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.8862745098039216;
                    player[numberPl].material[18].color.g = 0.3568627450980392;
                    player[numberPl].material[18].color.b = 0;
                    eightColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8666666666666667;
                    player[numberPl].material[1].color.g = 0.7607843137254902;
                    player[numberPl].material[1].color.b = 0.7294117647058824;
                    player[numberPl].material[18].color.r = 0.8666666666666667;
                    player[numberPl].material[18].color.g = 0.7607843137254902;
                    player[numberPl].material[18].color.b = 0.7294117647058824;
                    nineColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g =  0.2352941176470588;
                    player[numberPl].material[1].color.b = 0.5450980392156863;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g =  0.2352941176470588;
                    player[numberPl].material[18].color.b = 0.5450980392156863;
                    tenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9098039215686275;
                    player[numberPl].material[1].color.g =  0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.9098039215686275;
                    player[numberPl].material[18].color.g =  0;
                    player[numberPl].material[18].color.b = 0;
                    elevenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3529411764705882;
                    player[numberPl].material[1].color.g = 0.0156862745098039;
                    player[numberPl].material[1].color.b = 0.0509803921568627;
                    player[numberPl].material[18].color.r = 0.3529411764705882;
                    player[numberPl].material[18].color.g = 0.0156862745098039;
                    player[numberPl].material[18].color.b = 0.0509803921568627;
                    twelweColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3098039215686275;
                    player[numberPl].material[1].color.g = 0.1803921568627451;
                    player[numberPl].material[1].color.b =  0.1215686274509804;
                    player[numberPl].material[18].color.r = 0.3098039215686275;
                    player[numberPl].material[18].color.g = 0.1803921568627451;
                    player[numberPl].material[18].color.b =  0.1215686274509804;
                    thirteenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
                //дополнительный цвет
                if (firstColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.0313725490196078;
                    player[numberPl].material[19].color.g = 0.607843137254902;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.0313725490196078;
                    player[numberPl].material[20].color.g = 0.607843137254902;
                    player[numberPl].material[20].color.b = 0;
                    firstColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g = 1;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g = 1;
                    player[numberPl].material[20].color.b = 1;
                    secondColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 0;
                    thirdColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.4117647058823529;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 0.4117647058823529;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 1;
                    fourthColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }

                if (fivesColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.1450980392156863;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.1450980392156863;
                    player[numberPl].material[20].color.b = 1;
                    fivesColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                }
                if (sixColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.7647058823529412;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.7647058823529412;
                    player[numberPl].material[20].color.b = 1;
                    sixColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                }
                if (sevenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.9882352941176471;
                    player[numberPl].material[19].color.g = 0.9882352941176471;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9882352941176471;
                    player[numberPl].material[20].color.g = 0.9882352941176471;
                    player[numberPl].material[20].color.b = 0;
                    sevenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (eightColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.8862745098039216;
                    player[numberPl].material[19].color.g = 0.3568627450980392;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.8862745098039216;
                    player[numberPl].material[20].color.g = 0.3568627450980392;
                    player[numberPl].material[20].color.b = 0;
                    eightColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                }
                if (nineColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.8666666666666667;
                    player[numberPl].material[19].color.g = 0.7607843137254902;
                    player[numberPl].material[19].color.b = 0.7294117647058824;
                    player[numberPl].material[20].color.r = 0.8666666666666667;
                    player[numberPl].material[20].color.g = 0.7607843137254902;
                    player[numberPl].material[20].color.b = 0.7294117647058824;
                    nineColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                }
                if (tenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g =  0.2352941176470588;
                    player[numberPl].material[19].color.b = 0.5450980392156863;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g =  0.2352941176470588;
                    player[numberPl].material[20].color.b = 0.5450980392156863;
                    tenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                }
                if (elevenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.9098039215686275;
                    player[numberPl].material[19].color.g =  0;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9098039215686275;
                    player[numberPl].material[20].color.g =  0;
                    player[numberPl].material[20].color.b = 0;
                    elevenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                }
                if (twelweColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.3529411764705882;
                    player[numberPl].material[19].color.g = 0.0156862745098039;
                    player[numberPl].material[19].color.b = 0.0509803921568627;
                    player[numberPl].material[20].color.r = 0.3529411764705882;
                    player[numberPl].material[20].color.g = 0.0156862745098039;
                    player[numberPl].material[20].color.b = 0.0509803921568627;
                    twelweColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (thirteenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.3098039215686275;
                    player[numberPl].material[19].color.g = 0.1803921568627451;
                    player[numberPl].material[19].color.b =  0.1215686274509804;
                    player[numberPl].material[20].color.r = 0.3098039215686275;
                    player[numberPl].material[20].color.g = 0.1803921568627451;
                    player[numberPl].material[20].color.b =  0.1215686274509804;
                    thirteenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
            }
            if (countTshirt === 2) {
                if (firstColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.0313725490196078;
                    player[numberPl].material[1].color.g = 0.607843137254902;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[20].color.r = 0.0313725490196078;
                    player[numberPl].material[20].color.g = 0.607843137254902;
                    player[numberPl].material[20].color.b = 0;
                    firstColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g = 1;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g = 1;
                    player[numberPl].material[20].color.b = 1;
                    secondColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 0;
                    thirdColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.4117647058823529;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[20].color.r = 0.4117647058823529;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 1;
                    fourthColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.1450980392156863;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.1450980392156863;
                    player[numberPl].material[20].color.b = 1;
                    fivesColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.7647058823529412;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.7647058823529412;
                    player[numberPl].material[20].color.b = 1;
                    sixColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9882352941176471;
                    player[numberPl].material[1].color.g = 0.9882352941176471;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9882352941176471;
                    player[numberPl].material[20].color.g = 0.9882352941176471;
                    player[numberPl].material[20].color.b = 0;
                    sevenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8862745098039216;
                    player[numberPl].material[1].color.g = 0.3568627450980392;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[20].color.r = 0.8862745098039216;
                    player[numberPl].material[20].color.g = 0.3568627450980392;
                    player[numberPl].material[20].color.b = 0;
                    eightColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8666666666666667;
                    player[numberPl].material[1].color.g = 0.7607843137254902;
                    player[numberPl].material[1].color.b = 0.7294117647058824;
                    player[numberPl].material[20].color.r = 0.8666666666666667;
                    player[numberPl].material[20].color.g = 0.7607843137254902;
                    player[numberPl].material[20].color.b = 0.7294117647058824;
                    nineColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g =  0.2352941176470588;
                    player[numberPl].material[1].color.b = 0.5450980392156863;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g =  0.2352941176470588;
                    player[numberPl].material[20].color.b = 0.5450980392156863;
                    tenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9098039215686275;
                    player[numberPl].material[1].color.g =  0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9098039215686275;
                    player[numberPl].material[20].color.g =  0;
                    player[numberPl].material[20].color.b = 0;
                    elevenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3529411764705882;
                    player[numberPl].material[1].color.g = 0.0156862745098039;
                    player[numberPl].material[1].color.b = 0.0509803921568627;
                    player[numberPl].material[20].color.r = 0.3529411764705882;
                    player[numberPl].material[20].color.g = 0.0156862745098039;
                    player[numberPl].material[20].color.b = 0.0509803921568627;
                    twelweColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3098039215686275;
                    player[numberPl].material[1].color.g = 0.1803921568627451;
                    player[numberPl].material[1].color.b =  0.1215686274509804;
                    player[numberPl].material[20].color.r = 0.3098039215686275;
                    player[numberPl].material[20].color.g = 0.1803921568627451;
                    player[numberPl].material[20].color.b =  0.1215686274509804;
                    thirteenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
                //дополнительный цвет
                if (firstColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.0313725490196078;
                    player[numberPl].material[19].color.g = 0.607843137254902;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[18].color.r = 0.0313725490196078;
                    player[numberPl].material[18].color.g = 0.607843137254902;
                    player[numberPl].material[18].color.b = 0;
                    firstColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g = 1;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g = 1;
                    player[numberPl].material[18].color.b = 1;
                    secondColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 0;
                    thirdColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.4117647058823529;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[18].color.r = 0.4117647058823529;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 1;
                    fourthColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.1450980392156863;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.1450980392156863;
                    player[numberPl].material[18].color.b = 1;
                    fivesColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                }
                if (sixColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.7647058823529412;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.7647058823529412;
                    player[numberPl].material[18].color.b = 1;
                    sixColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                }
                if (sevenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.9882352941176471;
                    player[numberPl].material[19].color.g = 0.9882352941176471;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[18].color.r = 0.9882352941176471;
                    player[numberPl].material[18].color.g = 0.9882352941176471;
                    player[numberPl].material[18].color.b = 0;
                    sevenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (eightColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.8862745098039216;
                    player[numberPl].material[19].color.g = 0.3568627450980392;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[18].color.r = 0.8862745098039216;
                    player[numberPl].material[18].color.g = 0.3568627450980392;
                    player[numberPl].material[18].color.b = 0;
                    eightColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                }
                if (nineColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.8666666666666667;
                    player[numberPl].material[19].color.g = 0.7607843137254902;
                    player[numberPl].material[19].color.b = 0.7294117647058824;
                    player[numberPl].material[18].color.r = 0.8666666666666667;
                    player[numberPl].material[18].color.g = 0.7607843137254902;
                    player[numberPl].material[18].color.b = 0.7294117647058824;
                    nineColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                }
                if (tenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g =  0.2352941176470588;
                    player[numberPl].material[19].color.b = 0.5450980392156863;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g =  0.2352941176470588;
                    player[numberPl].material[18].color.b = 0.5450980392156863;
                    tenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                }
                if (elevenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.9098039215686275;
                    player[numberPl].material[19].color.g =  0;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[18].color.r = 0.9098039215686275;
                    player[numberPl].material[18].color.g =  0;
                    player[numberPl].material[18].color.b = 0;
                    elevenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                }
                if (twelweColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.3529411764705882;
                    player[numberPl].material[19].color.g = 0.0156862745098039;
                    player[numberPl].material[19].color.b = 0.0509803921568627;
                    player[numberPl].material[18].color.r = 0.3529411764705882;
                    player[numberPl].material[18].color.g = 0.0156862745098039;
                    player[numberPl].material[18].color.b = 0.0509803921568627;
                    twelweColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (thirteenColorBooleanS === true) {
                    player[numberPl].material[19].color.r = 0.3098039215686275;
                    player[numberPl].material[19].color.g = 0.1803921568627451;
                    player[numberPl].material[19].color.b =  0.1215686274509804;
                    player[numberPl].material[18].color.r = 0.3098039215686275;
                    player[numberPl].material[18].color.g = 0.1803921568627451;
                    player[numberPl].material[18].color.b =  0.1215686274509804;
                    thirteenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
            }
            if (countTshirt === 0) {
                firstColorBooleanS = false;
                secondColorBooleanS = false;
                thirdColorBooleanS = false;
                fourthColorBooleanS = false;
                fivesColorBooleanS = false;
                sixColorBooleanS = false;
                sevenColorBooleanS = false;
                eightColorBooleanS = false;
                nineColorBooleanS = false;
                tenColorBooleanS = false;
                elevenColorBooleanS = false;
                twelweColorBooleanS = false;
                thirteenColorBooleanS = false;
                if (firstColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.0313725490196078;
                    player[numberPl].material[1].color.g = 0.607843137254902;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.0313725490196078;
                    player[numberPl].material[18].color.g = 0.607843137254902;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[19].color.r = 0.0313725490196078;
                    player[numberPl].material[19].color.g = 0.607843137254902;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.0313725490196078;
                    player[numberPl].material[20].color.g = 0.607843137254902;
                    player[numberPl].material[20].color.b = 0;
                    //блок на считку цвета
                    colorShirt = true;
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g = 1;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g = 1;
                    player[numberPl].material[18].color.b = 1;
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g = 1;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g = 1;
                    player[numberPl].material[20].color.b = 1;
                    //блок на считку цвета
                    colorShirt = true;
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 0;
                    //блок на считку цвета
                    colorShirt = true;
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.4117647058823529;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 0.4117647058823529;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 1;
                    player[numberPl].material[19].color.r = 0.4117647058823529;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 0.4117647058823529;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 1;
                    //блок на считку цвета
                    colorShirt = true;
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.1450980392156863;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.1450980392156863;
                    player[numberPl].material[18].color.b = 1;
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.1450980392156863;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.1450980392156863;
                    player[numberPl].material[20].color.b = 1;

                    colorShirt = true;
                     }
                if (sixColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.7647058823529412;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.7647058823529412;
                    player[numberPl].material[18].color.b = 1;
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.7647058823529412;
                    player[numberPl].material[19].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.7647058823529412;
                    player[numberPl].material[20].color.b = 1;
                    colorShirt = true;
                    }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9882352941176471;
                    player[numberPl].material[1].color.g = 0.9882352941176471;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.9882352941176471;
                    player[numberPl].material[18].color.g = 0.9882352941176471;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[19].color.r = 0.9882352941176471;
                    player[numberPl].material[19].color.g = 0.9882352941176471;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9882352941176471;
                    player[numberPl].material[20].color.g = 0.9882352941176471;
                    player[numberPl].material[20].color.b = 0;

                    colorShirt = true;
                  }
                if (eightColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8862745098039216;
                    player[numberPl].material[1].color.g = 0.3568627450980392;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.8862745098039216;
                    player[numberPl].material[18].color.g = 0.3568627450980392;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[19].color.r = 0.8862745098039216;
                    player[numberPl].material[19].color.g = 0.3568627450980392;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.8862745098039216;
                    player[numberPl].material[20].color.g = 0.3568627450980392;
                    player[numberPl].material[20].color.b = 0;

                    colorShirt = true;
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8666666666666667;
                    player[numberPl].material[1].color.g = 0.7607843137254902;
                    player[numberPl].material[1].color.b = 0.7294117647058824;
                    player[numberPl].material[18].color.r = 0.8666666666666667;
                    player[numberPl].material[18].color.g = 0.7607843137254902;
                    player[numberPl].material[18].color.b = 0.7294117647058824;
                    player[numberPl].material[19].color.r = 0.8666666666666667;
                    player[numberPl].material[19].color.g = 0.7607843137254902;
                    player[numberPl].material[19].color.b = 0.7294117647058824;
                    player[numberPl].material[20].color.r = 0.8666666666666667;
                    player[numberPl].material[20].color.g = 0.7607843137254902;
                    player[numberPl].material[20].color.b = 0.7294117647058824;

                    colorShirt = true;
                   }
                if (tenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g =  0.2352941176470588;
                    player[numberPl].material[1].color.b = 0.5450980392156863;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g =  0.2352941176470588;
                    player[numberPl].material[18].color.b = 0.5450980392156863;
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g =  0.2352941176470588;
                    player[numberPl].material[19].color.b = 0.5450980392156863;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g =  0.2352941176470588;
                    player[numberPl].material[20].color.b = 0.5450980392156863;

                    colorShirt = true;
                   }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9098039215686275;
                    player[numberPl].material[1].color.g =  0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[18].color.r = 0.9098039215686275;
                    player[numberPl].material[18].color.g =  0;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[19].color.r = 0.9098039215686275;
                    player[numberPl].material[19].color.g =  0;
                    player[numberPl].material[19].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9098039215686275;
                    player[numberPl].material[20].color.g =  0;
                    player[numberPl].material[20].color.b = 0;

                    colorShirt = true;
                   }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3529411764705882;
                    player[numberPl].material[1].color.g = 0.0156862745098039;
                    player[numberPl].material[1].color.b = 0.0509803921568627;
                    player[numberPl].material[18].color.r = 0.3529411764705882;
                    player[numberPl].material[18].color.g = 0.0156862745098039;
                    player[numberPl].material[18].color.b = 0.0509803921568627;
                    player[numberPl].material[19].color.r = 0.3529411764705882;
                    player[numberPl].material[19].color.g = 0.0156862745098039;
                    player[numberPl].material[19].color.b = 0.0509803921568627;
                    player[numberPl].material[20].color.r = 0.3529411764705882;
                    player[numberPl].material[20].color.g = 0.0156862745098039;
                    player[numberPl].material[20].color.b = 0.0509803921568627;

                    colorShirt = true;
                   }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3098039215686275;
                    player[numberPl].material[1].color.g = 0.1803921568627451;
                    player[numberPl].material[1].color.b =  0.1215686274509804;
                    player[numberPl].material[18].color.r = 0.3098039215686275;
                    player[numberPl].material[18].color.g = 0.1803921568627451;
                    player[numberPl].material[18].color.b =  0.1215686274509804;
                    player[numberPl].material[19].color.r = 0.3098039215686275;
                    player[numberPl].material[19].color.g = 0.1803921568627451;
                    player[numberPl].material[19].color.b =  0.1215686274509804;
                    player[numberPl].material[20].color.r = 0.3098039215686275;
                    player[numberPl].material[20].color.g = 0.1803921568627451;
                    player[numberPl].material[20].color.b =  0.1215686274509804;

                    colorShirt = true;
                   }
                //прозрачность второго цвета (закрытие выбора)
                document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;';
                document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;';
                document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;';
                document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;';
                document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
            }
            if (countTshirt === 3) {
                if (firstColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.0313725490196078;
                    player[numberPl].material[1].color.g = 0.607843137254902;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[19].color.r = 0.0313725490196078;
                    player[numberPl].material[19].color.g = 0.607843137254902;
                    player[numberPl].material[19].color.b = 0;
                    firstColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g = 1;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g = 1;
                    player[numberPl].material[19].color.b = 1;
                    secondColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 0;
                    thirdColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.4117647058823529;
                    player[numberPl].material[1].color.g = 0;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[19].color.r = 0.4117647058823529;
                    player[numberPl].material[19].color.g = 0;
                    player[numberPl].material[19].color.b = 1;
                    fourthColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.1450980392156863;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.1450980392156863;
                    player[numberPl].material[19].color.b = 1;
                    fivesColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                }
                if (sixColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0;
                    player[numberPl].material[1].color.g = 0.7647058823529412;
                    player[numberPl].material[1].color.b = 1;
                    player[numberPl].material[19].color.r = 0;
                    player[numberPl].material[19].color.g = 0.7647058823529412;
                    player[numberPl].material[19].color.b = 1;
                    sixColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                }
                if (sevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9882352941176471;
                    player[numberPl].material[1].color.g = 0.9882352941176471;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[19].color.r = 0.9882352941176471;
                    player[numberPl].material[19].color.g = 0.9882352941176471;
                    player[numberPl].material[19].color.b = 0;
                    sevenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (eightColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8862745098039216;
                    player[numberPl].material[1].color.g = 0.3568627450980392;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[19].color.r = 0.8862745098039216;
                    player[numberPl].material[19].color.g = 0.3568627450980392;
                    player[numberPl].material[19].color.b = 0;
                    eightColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                }
                if (nineColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.8666666666666667;
                    player[numberPl].material[1].color.g = 0.7607843137254902;
                    player[numberPl].material[1].color.b = 0.7294117647058824;
                    player[numberPl].material[19].color.r = 0.8666666666666667;
                    player[numberPl].material[19].color.g = 0.7607843137254902;
                    player[numberPl].material[19].color.b = 0.7294117647058824;
                    nineColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                }
                if (tenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 1;
                    player[numberPl].material[1].color.g =  0.2352941176470588;
                    player[numberPl].material[1].color.b = 0.5450980392156863;
                    player[numberPl].material[19].color.r = 1;
                    player[numberPl].material[19].color.g =  0.2352941176470588;
                    player[numberPl].material[19].color.b = 0.5450980392156863;
                    tenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                }
                if (elevenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.9098039215686275;
                    player[numberPl].material[1].color.g =  0;
                    player[numberPl].material[1].color.b = 0;
                    player[numberPl].material[19].color.r = 0.9098039215686275;
                    player[numberPl].material[19].color.g =  0;
                    player[numberPl].material[19].color.b = 0;
                    elevenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                }
                if (twelweColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3529411764705882;
                    player[numberPl].material[1].color.g = 0.0156862745098039;
                    player[numberPl].material[1].color.b = 0.0509803921568627;
                    player[numberPl].material[19].color.r = 0.3529411764705882;
                    player[numberPl].material[19].color.g = 0.0156862745098039;
                    player[numberPl].material[19].color.b = 0.0509803921568627;
                    twelweColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                }
                if (thirteenColorBoolean === true) {
                    player[numberPl].material[1].color.r = 0.3098039215686275;
                    player[numberPl].material[1].color.g = 0.1803921568627451;
                    player[numberPl].material[1].color.b =  0.1215686274509804;
                    player[numberPl].material[19].color.r = 0.3098039215686275;
                    player[numberPl].material[19].color.g = 0.1803921568627451;
                    player[numberPl].material[19].color.b =  0.1215686274509804;
                    thirteenColorBooleanS = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
                //дополнительный цвет
                if (firstColorBooleanS === true) {
                    player[numberPl].material[20].color.r = 0.0313725490196078;
                    player[numberPl].material[20].color.g = 0.607843137254902;
                    player[numberPl].material[20].color.b = 0;
                    player[numberPl].material[18].color.r = 0.0313725490196078;
                    player[numberPl].material[18].color.g = 0.607843137254902;
                    player[numberPl].material[18].color.b = 0;
                    firstColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px;'
                }
                if (secondColorBooleanS === true) {
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g = 1;
                    player[numberPl].material[20].color.b = 1;
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g = 1;
                    player[numberPl].material[18].color.b = 1;
                    secondColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px;'
                }
                if (thirdColorBooleanS === true) {
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 0;
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 0;
                    thirdColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px;'
                }
                if (fourthColorBooleanS === true) {
                    player[numberPl].material[20].color.r = 0.4117647058823529;
                    player[numberPl].material[20].color.g = 0;
                    player[numberPl].material[20].color.b = 1;
                    player[numberPl].material[18].color.r = 0.4117647058823529;
                    player[numberPl].material[18].color.g = 0;
                    player[numberPl].material[18].color.b = 1;
                    fourthColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px;'
                }
                if (fivesColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.1450980392156863;
                    player[numberPl].material[18].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.1450980392156863;
                    player[numberPl].material[20].color.b = 1;
                    fivesColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                }
                if (sixColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0;
                    player[numberPl].material[18].color.g = 0.7647058823529412;
                    player[numberPl].material[18].color.b = 1;
                    player[numberPl].material[20].color.r = 0;
                    player[numberPl].material[20].color.g = 0.7647058823529412;
                    player[numberPl].material[20].color.b = 1;
                    sixColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                }
                if (sevenColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0.9882352941176471;
                    player[numberPl].material[18].color.g = 0.9882352941176471;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9882352941176471;
                    player[numberPl].material[20].color.g = 0.9882352941176471;
                    player[numberPl].material[20].color.b = 0;
                    sevenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                }
                if (eightColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0.8862745098039216;
                    player[numberPl].material[18].color.g = 0.3568627450980392;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[20].color.r = 0.8862745098039216;
                    player[numberPl].material[20].color.g = 0.3568627450980392;
                    player[numberPl].material[20].color.b = 0;
                    eightColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                }
                if (nineColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0.8666666666666667;
                    player[numberPl].material[18].color.g = 0.7607843137254902;
                    player[numberPl].material[18].color.b = 0.7294117647058824;
                    player[numberPl].material[20].color.r = 0.8666666666666667;
                    player[numberPl].material[20].color.g = 0.7607843137254902;
                    player[numberPl].material[20].color.b = 0.7294117647058824;
                    nineColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                }
                if (tenColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 1;
                    player[numberPl].material[18].color.g =  0.2352941176470588;
                    player[numberPl].material[18].color.b = 0.5450980392156863;
                    player[numberPl].material[20].color.r = 1;
                    player[numberPl].material[20].color.g =  0.2352941176470588;
                    player[numberPl].material[20].color.b = 0.5450980392156863;
                    tenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                }
                if (elevenColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0.9098039215686275;
                    player[numberPl].material[18].color.g =  0;
                    player[numberPl].material[18].color.b = 0;
                    player[numberPl].material[20].color.r = 0.9098039215686275;
                    player[numberPl].material[20].color.g =  0;
                    player[numberPl].material[20].color.b = 0;
                    elevenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                }
                if (twelweColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0.3529411764705882;
                    player[numberPl].material[18].color.g = 0.0156862745098039;
                    player[numberPl].material[18].color.b = 0.0509803921568627;
                    player[numberPl].material[20].color.r = 0.3529411764705882;
                    player[numberPl].material[20].color.g = 0.0156862745098039;
                    player[numberPl].material[20].color.b = 0.0509803921568627;
                    twelweColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px';
                }
                if (thirteenColorBooleanS === true) {
                    player[numberPl].material[18].color.r = 0.3098039215686275;
                    player[numberPl].material[18].color.g = 0.1803921568627451;
                    player[numberPl].material[18].color.b =  0.1215686274509804;
                    player[numberPl].material[20].color.r = 0.3098039215686275;
                    player[numberPl].material[20].color.g = 0.1803921568627451;
                    player[numberPl].material[20].color.b =  0.1215686274509804;
                    thirteenColorBoolean = false;
                    //блок на считку цвета
                    colorShirt = true;
                    //прозрачность второго цвета (закрытие выбора)
                    document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                }
            }
            for (let i = 0; i < massTshirt.length; i++) {
                //проверка на цвет от первой формы ко второй
                if (player[numberPl1] !== undefined) {
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(2) == 0.03 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(2) == 0.61 && player[numberPl1].material[massTshirt[i]].color.b === 0) {
                    firstColorBoolean = false;
                    document.getElementById('firstColorS').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px';
                    firstColorBooleanS = false;
                    document.getElementById('firstColor').style.cssText = ' background-color: rgba(8, 155, 0, 0); border: 0px';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r === 1 && player[numberPl1].material[massTshirt[i]].color.g === 1 && player[numberPl1].material[massTshirt[i]].color.b === 1) {
                        secondColorBoolean = false;
                        document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                        secondColorBooleanS = false;
                        document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                        nineColorBoolean = false;
                        document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px';
                        nineColorBooleanS = false;
                        document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px';
                        tenColorBoolean = false;
                        document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px';
                        tenColorBooleanS = false;
                        document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r === 0 && player[numberPl1].material[massTshirt[i]].color.g === 0 && player[numberPl1].material[massTshirt[i]].color.b === 0) {
                        thirdColorBoolean = false;
                        document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                        thirdColorBooleanS = false;
                        document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                        twelweColorBoolean = false;
                        document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        twelweColorBooleanS = false;
                        document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        thirteenColorBoolean = false;
                        document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                        thirteenColorBooleanS = false;
                        document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';

                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(2) == 0.41 && player[numberPl1].material[massTshirt[i]].color.g === 0 && player[numberPl1].material[massTshirt[i]].color.b === 1) {
                        fivesColorBoolean = false;
                        document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                        fivesColorBooleanS = false;
                        document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                        sixColorBoolean = false;
                        document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                        sixColorBooleanS = false;
                        document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                        fourthColorBoolean = false;
                        document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                        fourthColorBooleanS = false;
                        document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r === 0 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(3) == 0.145 && player[numberPl1].material[massTshirt[i]].color.b === 1) {
                        fivesColorBoolean = false;
                        document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                        fivesColorBooleanS = false;
                        document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                        sixColorBoolean = false;
                        document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                        sixColorBooleanS = false;
                        document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                        fourthColorBoolean = false;
                        document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                        fourthColorBooleanS = false;
                        document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r === 0 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(3) == 0.765 && player[numberPl1].material[massTshirt[i]].color.b === 1) {
                        fivesColorBoolean = false;
                        document.getElementById('fivesColor').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                        fivesColorBooleanS = false;
                        document.getElementById('fivesColorS').style.cssText = ' background-color: rgba(0, 37, 255, 0); border: 0px;';
                        sixColorBoolean = false;
                        document.getElementById('sixColor').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                        sixColorBooleanS = false;
                        document.getElementById('sixColorS').style.cssText = ' background-color: rgba(0, 195, 255, 0); border: 0px;';
                        fourthColorBoolean = false;
                        document.getElementById('fourthColor').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                        fourthColorBooleanS = false;
                        document.getElementById('fourthColorS').style.cssText = ' background-color: rgba(105, 0, 255, 0); border: 0px';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r === 0.9882352941176471 && player[numberPl1].material[massTshirt[i]].color.g === 0.9882352941176471 && player[numberPl1].material[massTshirt[i]].color.b === 0) {
                        sevenColorBoolean = false;
                        document.getElementById('sevenColor').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                        sevenColorBooleanS = false;
                        document.getElementById('sevenColorS').style.cssText = ' background-color: rgba(252, 252, 0, 0); border: 0px;';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(2) == 0.89 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(2) == 0.36 && player[numberPl1].material[massTshirt[i]].color.b === 0) {
                        eightColorBoolean = false;
                        document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                        eightColorBooleanS = false;
                        document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                        tenColorBoolean = false;
                        document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                        tenColorBooleanS = false;
                        document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';

                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(3) == 0.867 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(3) == 0.761 && player[numberPl1].material[massTshirt[i]].color.b.toFixed(3) == 0.729) {
                        nineColorBoolean = false;
                        document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                        nineColorBooleanS = false;
                        document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                        tenColorBoolean = false;
                        document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                        tenColorBooleanS = false;
                        document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                        secondColorBoolean = false;
                        document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                        secondColorBooleanS = false;
                        document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r === 1 && (player[numberPl1].material[massTshirt[i]].color.g.toFixed(2) == 0.23 || player[numberPl1].material[massTshirt[i]].color.g.toFixed(2) == 0.24) && player[numberPl1].material[massTshirt[i]].color.b.toFixed(3) == 0.545) {
                        tenColorBoolean = false;
                        document.getElementById('tenColor').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                        tenColorBooleanS = false;
                        document.getElementById('tenColorS').style.cssText = ' background-color: rgba(255, 60, 139, 0); border: 0px;';
                        secondColorBoolean = false;
                        document.getElementById('secondColor').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                        secondColorBooleanS = false;
                        document.getElementById('secondColorS').style.cssText = ' background-color: rgba(255, 255, 255, 0); border: 0px';
                        nineColorBoolean = false;
                        document.getElementById('nineColor').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                        nineColorBooleanS = false;
                        document.getElementById('nineColorS').style.cssText = ' background-color: rgba(221, 194, 186, 0); border: 0px;';
                        eightColorBoolean = false;
                        document.getElementById('eightColor').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';
                        eightColorBooleanS = false;
                        document.getElementById('eightColorS').style.cssText = ' background-color: rgba(226, 91, 0, 0); border: 0px;';

                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(2) == 0.91 && player[numberPl1].material[massTshirt[i]].color.g === 0 && player[numberPl1].material[massTshirt[i]].color.b === 0) {
                        elevenColorBoolean = false;
                        document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                        elevenColorBooleanS = false;
                        document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                        twelweColorBoolean = false;
                        document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        twelweColorBooleanS = false;
                        document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(3) == 0.349 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(3) == 0.012 && player[numberPl1].material[massTshirt[i]].color.b.toFixed(3) == 0.047) {
                        twelweColorBoolean = false;
                        document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        twelweColorBooleanS = false;
                        document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        elevenColorBoolean = false;
                        document.getElementById('elevenColor').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                        elevenColorBooleanS = false;
                        document.getElementById('elevenColorS').style.cssText = ' background-color: rgba(232, 0, 0, 0); border: 0px;';
                        thirdColorBoolean = false;
                        document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                        thirdColorBooleanS = false;
                        document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                        thirteenColorBoolean = false;
                        document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                        thirteenColorBooleanS = false;
                        document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                    }
                    if (player[numberPl1].material[massTshirt[i]].color.r.toFixed(2) == 0.31 && player[numberPl1].material[massTshirt[i]].color.g.toFixed(2) == 0.18 && player[numberPl1].material[massTshirt[i]].color.b.toFixed(2) == 0.12) {
                        thirteenColorBoolean = false;
                        document.getElementById('thirteenColor').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                        thirteenColorBooleanS = false;
                        document.getElementById('thirteenColorS').style.cssText = ' background-color: rgba(79, 46, 31, 0); border: 0px;';
                        twelweColorBoolean = false;
                        document.getElementById('twelweColor').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        twelweColorBooleanS = false;
                        document.getElementById('twelweColorS').style.cssText = ' background-color: rgba(90, 4, 13, 0); border: 0px;';
                        thirdColorBoolean = false;
                        document.getElementById('thirdColor').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                        thirdColorBooleanS = false;
                        document.getElementById('thirdColorS').style.cssText = ' background-color: rgba(0, 0, 0, 0); border: 0px';
                    }
                }
                
            }
        }
    }
    if (countTshirt === 0) {
        document.getElementById('tshirt').innerHTML = "<img  src='models/tshirtg/06.png'>"
    }
    ;
    if (countTshirt === 1) {
        document.getElementById('tshirt').innerHTML = "<img  src='models/tshirtg/02.png'>"
    }
    ;
    if (countTshirt === 2) {
        document.getElementById('tshirt').innerHTML = "<img  src='models/tshirtg/15.png'>"
    }
    ;
    if (countTshirt === 3) {
        document.getElementById('tshirt').innerHTML = "<img  src='models/tshirtg/05.png'>"
    }
    ;

    if (countShorts === 0) {
        document.getElementById('short').innerHTML = "<img  src='models/tshirtg/14.png'>"
    }
    ;
    if (countShorts === 1) {
        document.getElementById('short').innerHTML = "<img  src='models/tshirtg/03.png'>"
    }
    ;

    if (countGetrs === 0) {
        document.getElementById('getr').innerHTML = "<img  src='models/tshirtg/01.png'>"
    }
    ;
    if (countGetrs === 1) {
        document.getElementById('getr').innerHTML = "<img  src='models/tshirtg/04.png'>"
    }
    ;
    for (let i = 0; i < 2; i++) {
        if (mixer[i] !== undefined) {
            if (animationsStart[i] === true) {
                mixer[i].update(clock[i].getDelta());
                mixer[i].clipAction(geometry[i].animations[0]).play();
            }
            if (mixer[i].clipAction(geometry[i].animations[0]).time >= 1 / 30) {
                mixer[i].clipAction(geometry[i].animations[0]).pause = true;
                animationsStart[i] = false;
            }
        }
    }

//}
        /* //работа с клавиатурой
    if(keyboard[37]){
        animationsStart = true;
    }
    if(keyboard[39]){
        animationsStart = true;
    }*/

    let init = new InitClass();

    init.render();
}

function initialize() {

    let init = new InitClass();

    init.init();
    animate();
}

let init = new InitClass();
window.addEventListener('keydown', init.keyDown);
window.addEventListener('keyup', init.keyUp);

window.onload = initialize();


