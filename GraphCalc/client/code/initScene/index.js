
class InitScene {

    constructor() {

        let viewAngle = 30, aspect = window.innerWidth / window.innerHeight, near = 1, far = 200;

        let canvas = document.getElementById('canvas');
        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', window.innerHeight);

        //Init Scene
        this.scene = new THREE.Scene();

        //Init Camera
        this.camera =  new THREE.PerspectiveCamera(viewAngle, aspect, near, far);

        //Render
        this.renderer = new THREE.WebGLRenderer({canvas: canvas});

    }


    loadScene() {
        this.scene.addEventListener(
            'update',
            () => {
                this.scene.simulate(undefined, 1);
            }
        );

        this.scene.fog = new THREE.FogExp2(0xadf7b2, 0.0003); //задний фон

        this.scene.add(this.camera);

        this.camera.position.set(0, 30, 30);

        this.camera.rotation.x = -Math.PI / 5.9;
    }

    loadRender() {
        this.renderer.setSize(window.innerWidth/1.5, window.innerHeight);

        this.renderer.setClearColor(this.scene.fog.color);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = true;
        THREEx.WindowResize(this.renderer, this.camera);
    }

    loadLight() {
        let light = new THREE.DirectionalLight(0xffffff);
        light.position.set(40, 55, -15);

        // light.target.position.copy(this.scene.position);
        light.castShadow = true;
        light.shadow.camera.left = -60;
        light.shadow.camera.top = -60;
        light.shadow.camera.right = 60;
        light.shadow.camera.bottom = 60;
        light.shadow.camera.near = 20;
        light.shadow.camera.far = 200;
        light.shadow.bias = -.0001;
        light.shadow.mapSize.width = light.shadow.mapSize.height = 2048;

        this.scene.add(light);
    }

    //RENDER
    render() {
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }
    }

}

let initScene = new InitScene();

export {
    initScene
};





