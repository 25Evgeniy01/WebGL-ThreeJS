/**
 * Created by vzorv on 29.08.2017.
 */
let player = new Player();

document.addEventListener('click', (e) => {let e1 = e;  dribl.test1Animate = true; click.clickPlayer(e1)}, false);

socket.on('clickPlayerOnCl', (data) => {
	if (data.clickPlayerOnCl1 === true) {
		ServerList.clickPlayerServer();
	}
});

//Дриблинг
document.getElementById('dribbling').addEventListener('click',  (e) => {
	let dribblingButtonColor = document.getElementById('dribblingButtonColor').style.color;
	if (dribblingButtonColor === "white") {
        dribblingButtonColor = "red";
	}
	if (dribblingButtonColor === "black") {
        dribblingButtonColor = "white";
	}
	
	if (dribblingButtonColor === "red") {
		setTimeout(
			() => {
				dribl.dribblingHelper = true;
				document.addEventListener('click', dribl.changePositionClickPlayer(e))
			},
		300)
	} 
	
}, false);

//Принять пас
document.getElementById('getPass').addEventListener('click', (e) =>  pass.getPassButton(e), false);
document.getElementById('start').addEventListener('click', (e) => pass.startGetPass(e), false);

//Принять и ударить
document.getElementById('getPassAndShot').addEventListener('click', shot.getPassAndShot, false);
document.getElementById('start').addEventListener('click', shot.startGetPassAndShot, false);

//Удар
document.getElementById('shot').addEventListener('click', (e) => shot.enterGiveShotButton(e), false);
document.getElementById('start').addEventListener('click', shot.shot, false);
 
//Передвижения
document.addEventListener('contextmenu', (e) => { dribl.dribblingHelper = true; dribl.changePositionClickPlayer(e)}, false);
document.getElementById('start').addEventListener('click', dribl.changePositionClick01, false);

//Пас
//player.enterClickOnTheObject
document.getElementById('pass').addEventListener('click', (e) => {
    let passButtonColor = document.getElementById('passButtonColor');

	if (passButtonColor.style.color === "white") {
        passButtonColor.style.color = "red";
	}

	if (passButtonColor.style.color === "black") {
        passButtonColor.style.color = "white";
	}
	
	if (passButtonColor.style.color === "red") {
		setTimeout(
			() => {
					pass.passHelper = true;
					document.addEventListener('click', (e) => pass.enterGivePass(e))
			},
		100)
	} 
}, false);

//Интерфейс
 //функция mainPlayTrue запускает смену кнопок
document.getElementById('start').addEventListener('click', inter.mainPlayTrue, false);

//отключение СтатусБаров
document.getElementById('statusBarVisible').addEventListener('click', (e) => {
	inter.statusBarVisible === 0 ? inter.statusBarVisible = 1 : inter.statusBarVisible = 0;
}, false);


