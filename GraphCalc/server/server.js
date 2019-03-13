import app from './router';

const server = app.listen(3000, () => {
    console.log(`Server listen - port:` + server.address().port)
});


export default server;