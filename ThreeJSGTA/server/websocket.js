import WebSocket from 'ws';

const wss = new WebSocket.Server({port: 8000});

class Socket {

    socketListener() {
        wss.on('connection', (client, req) => {
                client.wins = [];

                client.on('message', (data) => {
                    let dataParse = JSON.parse(data);
                    client.wins.push(dataParse.value);
                    console.log(client.wins);
                });

                client.on('close', (data) => {

                })
            }
        )
    }

}

let socket = new Socket();

export {
    socket
}