import './../style.css';
import { createScene } from './threejsComponents/scene.js';
import { createUserTexts, handleCaret } from './threejsComponents/usertext.js';
import { createPatTexts } from './threejsComponents/pattext.js';
import { createTorus } from './threejsComponents/torus.js';
import { createLights } from './threejsComponents/lights.js';
import { setupEventListeners } from './eventListeners.js';
import { createExampleText } from './threejsComponents/exampleText.js';


export function animate(scene, camera, renderer, eventVars, objs) {
    const { userTexts, torus, lights, patTexts} = objs;

    const hiddenInput = document.getElementById('hiddenInput');
    let time = Date.now();
  
    function loop() {
      requestAnimationFrame(loop);
      const currentTime = Date.now();
      const deltaTime = currentTime - time;

      if(deltaTime<7000){
        objs.exampleText.fillOpacity = 1/(1+Math.pow(4, (-0.005*(deltaTime-6000))));
      }
  
      torus.material.uniforms.u_time.value = deltaTime;
      torus.material.uniforms.u_flag_thinking.value = 100*Math.pow(2,(-0.5*Math.pow((currentTime-scene.thinking_time-500)/150,2)));
      // torus.material.uniforms.u_flag_thinking.value = (currentTime-scene.thinking_time);
      torus.rotateX(0.001);
      torus.rotateY(0.002);
      torus.rotateZ(0.001);

      camera.position.setY(200-(150/(1+Math.pow(4, (-0.005*deltaTime+3)))));
  
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
const exampleText =createExampleText(scene);


const objs = {userTexts, torus, lights, patTexts, exampleText}


const eventVars = setupEventListeners(scene, camera, renderer, objs);

animate( scene, camera, renderer, eventVars, objs);

