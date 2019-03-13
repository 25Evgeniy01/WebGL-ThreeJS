import {line} from "../objects/line";
import {custom} from "../func/custom";

let a = 1;
let inputId = {f: 'pointLineX' + a, s: 'pointLineY' + a, t: 'pointLineZ' + a};
class Interface {

    btnList() {
        $(document).ready(() => {
            $('#btnAdd').click(() => {
                inputId = 'pointLine' + a ;
                $('#addLine tr:last').after(`
                        <tr>
                            <td id="number">${a}</td>

                            <td><input class="form-control pointLineX" type="text" value="0"/></td>

                            <td><input class="form-control pointLineY" type="text" value="10"/></td>

                            <td><input class="form-control pointLineZ" type="text" value="0"/></td>

                            <td id="growUp0">Nothing</td>
                        </tr>
                `);
                a++;
            });

            $('#btnDel').click(() => {
                if ($('#addLine')[0].children.length > 1) $('#addLine tr:last').remove();
            });

            $('#drawLine').click(() => {

                let pointsX = $('.pointLineX');
                let pointsY = $('.pointLineY');
                let pointsZ = $('.pointLineZ');

                let arrX = [];

                for (let i = 0; i < pointsX.length; i++) {
                    arrX[i] = {};
                    arrX[i].x = parseFloat(pointsX.get(i).value);
                    arrX[i].y = parseFloat(pointsY.get(i).value);
                    arrX[i].z = parseFloat(pointsZ.get(i).value);
                }
                line.removeAll();
                custom.growUp(arrX);
                line.load(arrX);

            });
        });
    }

}

let interf = new Interface();

export {
    interf
}