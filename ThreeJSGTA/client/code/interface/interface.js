import {wheel} from "../actions/animationCar";
import {garage} from "../gameObj/garage";
import {initScene} from "../initScene";

let objects = [];
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

class Interface {
    slider() {
        $(document).ready(() => {

            $(".btnSlide").click(() => {
                $("#panel").slideToggle("slow");
                $(this).toggleClass("active"); return false;
            });

        });
    }

    eventListener() {
        document.addEventListener('click', (e) => {this.clickPlayer(e)}, false);
    }

    clickPlayer(e) {
        mouse.x = ( event.clientX / initScene.renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / initScene.renderer.domElement.clientHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, initScene.camera );
        let intersects = raycaster.intersectObjects(objects);
        if (intersects.length > 0) {
            switch (intersects[0].object.name) {
                case ("Albert"):
                    alert("Hello!)");
                    break;
                case ("car"):
                    alert("Get in the car");
                    break;
                case ("tree"):
                    alert("Play");
                    break;
                case ("garage"):
                    alert("Turn on the light in settings");
                    break;
            }
        }
    }

    btnListener() {
        $(document).ready(
            () => {
                $("#labelSpeed").text((wheel.mass).toString());
                $("#btnDown").click(() => {
                    if (wheel.mass > 100) {
                        wheel.mass -= 100;
                        $("#labelSpeed").text((wheel.mass).toString());
                    }

                });
                $("#btnUp").click(() => {
                    wheel.mass += 100;
                    $("#labelSpeed").text((wheel.mass).toString());
                });

                $('#garagelight').click(function() {
                    if (!$(this).is(':checked')) {
                        garage.lightGarage.visible = false;
                        garage.helper.visible = false;
                    } else {
                        garage.lightGarage.visible = true;
                        garage.helper.visible = true;
                    }
                });

            }
        )
    }
}

let interface1 = new Interface();

export {
    interface1,
    objects
}