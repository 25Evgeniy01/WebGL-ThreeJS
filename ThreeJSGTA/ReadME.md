Version 0.0.0 <br />

1. Нужно сесть игроком в машину.
(Управление стрелками.)
2. После того, как Вы сели в машину, она завелась) и Вы должны заехать в гараж - остановится (на серой области), при этом не ударившись в стену. (Управление автомобилем стрелками вперед и назад)
3. В настройках
	3.1. Можно сменить массу автомобиля - он будет плохо разгонятся, также будет его тяжелее остановить.
	3.2. Также можно включить свет в гараже (внутри гаража коробка - которая при включении света начинает освещаться - (также, для наглядности, есть Helper - с помощью которого мы можем отследить направление света))

Также начинает воспроизводится звук, когда игрок садится в машину.
Есть также обработчики кликов по объектам (машина, гараж, игрок, дерево) - (raycaster) - при клике выводится alert - разное сообщение в зависимости от выбранного("кликнутого") объекта.

Когда игрок садится в машину есть blur эффект, также он присутствует в конце игры.

Запуск приложения -

Серверная часть реализована на NodeJS (простой сервер - для запуска)

Чтобы запустить приложение необходимо:

1. В папке с проектом (где находится package.json) выполнить команду - npm i  (установка всех необходимых модулей).
2. Выполнить npm run start - запуск сервера
После удачного запуска в консоле - Server listen - port:3000
3. Для компиляции кода в es5 - npm run build - (используется webpack, babel)

После всего - проект должен запустится по адресу http://localhost:3000

Doc <br />
1. Install node (v8.11.2) - https://nodejs.org/en/ <br />
2. Run command in project folder <br />
2.1 npm i <br />
2.2 npm run build <br />
2.3 npm run start <br />
3. Project open - with command line <br />
3.1 Server listen - port:3000 <br />
4. Open link - http://localhost:3000 <br />

Play Game =) <br />

If you have problem , feel free to message me  - bugera.zhenya@gmail.com  <br />
LinkedIn - https://www.linkedin.com/in/evgeniy-bugera/ <br />

NEW - https://youtu.be/QtJdgdgU0XE

YOUTUNBE + link (old link) - <br />
https://www.youtube.com/watch?v=KgstDLRgccY <br />
https://www.youtube.com/watch?v=RibhPiKcKzw <br />

![Image alt](https://bitbucket.org/zhenyaBugera/threejsgta/raw/master/img/screen1.png)
![Image alt](https://bitbucket.org/zhenyaBugera/threejsgta/raw/master/img/screen.png)
![Image alt](https://bitbucket.org/zhenyaBugera/threejsgta/raw/master/img/screen2.png)