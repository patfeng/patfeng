import './../style.css';
import { createScene } from './threejsComponents/scene.js';
import { createUserTexts, handleCaret } from './threejsComponents/usertext.js';
import { createPatTexts } from './threejsComponents/pattext.js';
import { createTorus } from './threejsComponents/torus.js';
import { createLights } from './threejsComponents/lights.js';
import { setupEventListeners } from './eventListeners.js';


export function animate(scene, camera, renderer, eventVars, objs) {
    const { userTexts, torus, lights, patTexts} = objs;

    const hiddenInput = document.getElementById('hiddenInput');
    let time = Date.now();
  
    function loop() {
      requestAnimationFrame(loop);
      const currentTime = Date.now();
      const deltaTime = currentTime - time;
  
      torus.material.uniforms.u_time.value = deltaTime;
      torus.rotateX(0.001);
      torus.rotateY(0.002);
      torus.rotateZ(0.001);
  
      renderer.render(scene, camera);
      hiddenInput.focus();
  
      handleCaret(userTexts, hiddenInput.value, hiddenInput.selectionStart, eventVars.keyheld);
    }
  
    loop();
  }

const { scene, camera, renderer } = createScene();
const userTexts = createUserTexts(scene);
const patTexts = createPatTexts(scene);
const torus = createTorus(scene);
const lights = createLights(scene);


const objs = {userTexts, torus, lights, patTexts}


const eventVars = setupEventListeners(scene, camera, renderer, objs);

animate( scene, camera, renderer, eventVars, objs);

