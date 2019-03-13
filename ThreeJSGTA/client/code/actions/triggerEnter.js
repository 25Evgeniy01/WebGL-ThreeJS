import {car} from "../gameObj/car";
import {unit} from "../gameObj/unit";
import {garage} from "../gameObj/garage";

class TriggerEnter {

    enterGarageCar() {
        return this.trigEnter(garage.cube, car.sprCar, 0.5, 1, true);
    }

    enterUnitCar() {
        return this.trigEnter(car.sprCar, unit.sprUnit, 3, 1);
    }

    trigEnter(obj1, obj2, size1, size2, bool=false) {
        let movePos = 0;
        if (bool) movePos = 1.4;
        if (obj1.position.x - size1 <= obj2.position.x  - movePos && obj2.position.x  - movePos <= obj1.position.x + size1) {
            if (bool) return true;
            if (obj1.position.y - size2 <= obj2.position.y && obj2.position.y <= obj1.position.y + size2) return true;
        }
        return false;
    }

}

let triggerEnter = new TriggerEnter();

export {
    triggerEnter
}