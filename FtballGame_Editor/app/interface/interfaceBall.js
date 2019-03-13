/**
 * Created by vzorv on 16.08.2017.
 */
function ballSelect() {
    document.getElementById('ball').addEventListener('click', ballSelected, false);
}
function ballSelected() {
    inter.mainPlay = true;
    click.circle.position.y = 0.001;
    click.circle.position.x =  ball.meshB.position.x - 1;
    click.circle.position.z = ball.meshB.position.z;
    click.circle2.position.y = 0.003;
    click.circle2.position.x =  ball.meshB.position.x - 1;
    click.circle2.position.z = ball.meshB.position.z;
    click.circle1.position.y = 0.002;
    click.circle1.position.x =  ball.meshB.position.x - 1;
    click.circle1.position.z = ball.meshB.position.z;
}