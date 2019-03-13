
class InitScene {

    constructor() {

        let viewAngle = 30, aspect = window.innerWidth / window.innerHeight, near = 1, far = 2000;

        let canvas = document.getElementById('canvas');
        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', window.innerHeight);

        //Init Scene
        this.scene = new THREE.Scene();

        //Init Camera
        this.camera =  new THREE.PerspectiveCamera(viewAngle, aspect, near, far);

        //Render
        this.renderer = new THREE.WebGLRenderer({canvas: canvas});

        this.loadComposer();
    }

    loadComposer() {
        //COMPOSER
        this.composerActive = false;
        this.composer = new THREE.EffectComposer(this.renderer);

        let renderPass = new THREE.RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        let sepiaPass = new THREE.ShaderPass(THREE.SepiaShader);
        this.composer.addPass(sepiaPass);

        let glitchPass = new THREE.GlitchPass(0);
        this.composer.addPass(glitchPass);


        //custom shader pass
        let myEffect = {
            uniforms: {
                "tDiffuse": { value: null },
                "amount":   { value: 1.0 }
            },
            vertexShader: [
                "varying vec2 vUv;",
                "void main() {",
                "vUv = uv;",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
                "}"
            ].join( "\n" ),
            fragmentShader: [
                "uniform float amount;",
                "uniform sampler2D tDiffuse;",
                "varying vec2 vUv;",
                "void main() {",
                "vec4 color = texture2D( tDiffuse, vUv );",
                "vec3 c = color.rgb;",
                "color.r = c.r * 1.0;",
                "color.g = c.g / 1.0;",
                "color.b = c.b;",
                "gl_FragColor = vec4( color.rgb , color.a );",
                "}"
            ].join( "\n" )
        }

        let customPass = new THREE.ShaderPass(myEffect);
        customPass.renderToScreen = true;
        this.composer.addPass(customPass);
    }

    loadScene() {
        this.scene.addEventListener(
            'update',
             () => {
                this.scene.simulate(undefined, 1);
            }
        );

        this.scene.fog = new THREE.FogExp2(0x719b4e, 0.0003); //задний фон

        this.scene.add(this.camera);

        this.camera.position.set(0, 30, 30);

        this.camera.rotation.x = -Math.PI / 5.9;
    }

    loadRender() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);

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





