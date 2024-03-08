import { newUserText } from './threejsComponents/usertext.js';
import { newPatText } from './threejsComponents/pattext.js';
import axios from 'axios';
import {updateCamera} from './threejsComponents/camera.js'
import { getResponse } from './httpHandle.js';



export function setupEventListeners(scene, camera, renderer, objs) {
  const userTexts = objs.userTexts
  const patTexts = objs.patTexts
  const eventVars={
    keyheld : false
  };
  
  const hiddenInput = document.getElementById('hiddenInput');

  window.addEventListener('DOMContentLoaded', function() {
    hiddenInput.focus();
  });

  hiddenInput.addEventListener('keyup', () => {
    eventVars.keyheld = false;
  });

  hiddenInput.addEventListener('keydown', (e) => {
    eventVars.keyheld = true;

    if (e.key === 'Enter') {
      var changeZ = updateCamera(camera, userTexts[userTexts.length - 1])
      if (userTexts[userTexts.length - 1].text.slice(-1) === '■') {
        userTexts[userTexts.length - 1].text = userTexts[userTexts.length - 1].text.slice(0, -1);
      }
      newUserText(userTexts, scene, userTexts[userTexts.length - 1].position.z);

      newPatText(patTexts, scene, userTexts[userTexts.length - 1].position.z -changeZ);
      getResponse(userTexts[userTexts.length - 2].text, patTexts[patTexts.length - 1]).then(()=>{
        changeZ = updateCamera(camera, patTexts[patTexts.length - 1]);
        
        userTexts[userTexts.length - 1].position.z = patTexts[patTexts.length-1].position.z -changeZ;
        userTexts[userTexts.length - 1].fillOpacity=1;
        hiddenInput.value = '';
      })
    }
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render();
  });

  return eventVars;
}