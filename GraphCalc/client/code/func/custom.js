
class Custom {

    growUp(array = [{x: 0, y: 0, z: 0}, {x: 0, y: 0, z: 0}, {x: 10, y: 10, z: 0}]) {
        let maxY = [{y: array[0].y, x: array[0].x, index: 0}];
        let minY = [{y: array[0].y, x: array[0].x, index: 0}];

        for (let i = 1; i < array.length; i++) {

            if (array[i].y === maxY[0].y) {
                maxY.push({y: array[i].y, x: array[i].x, index: i});
            }

            if (array[i].y > maxY[0].y) {
                maxY.length = 1;
                maxY[0].y = array[i].y;
                maxY[0].x = array[i].x;
                maxY[0].index = i;
            }

            //find min
            if (array[i].y === minY[0].i) {
                minY.push({y: array[i].y, x: array[i].x, index: i});
            }

            if (array[i].y < minY[0].y) {
                minY.length = 1;
                minY[0].y = array[i].y;
                minY[0].x = array[i].x;
                minY[0].index = i;
            }

        }

        console.log(maxY);
        console.log(minY);
    }
}

let custom = new Custom();

export {
    custom
}