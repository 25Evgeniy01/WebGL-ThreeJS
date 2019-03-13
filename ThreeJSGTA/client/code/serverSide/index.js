
class ServerSide {

    webSocket () {
        this.ws = new WebSocket('ws://localhost:8000');

        this.ws.onopen = () => {
            console.log('Connection success');
        };

    }
}

let servSide = new ServerSide();

export {
    servSide
}