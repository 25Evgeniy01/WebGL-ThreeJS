import app from './router';
import {socket} from "./websocket";

const server = app.listen(3000, () => {
    console.log(`Server listen - port:` + server.address().port)
});

socket.socketListener();

export default server;