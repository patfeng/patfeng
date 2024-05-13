import { Text } from 'troika-three-text';

export function createPatTexts(scene) {
  const texts = [];
  newPatText(texts, scene, 0);
  setTimeout(function(){
    texts[texts.length - 1].text=">> Hello";
    scene.thinking_time = Date.now();
}, 2000);

setTimeout(function(){
  texts[texts.length - 1].text=">> Hello, I am Pat.";
  scene.thinking_time = Date.now();
}, 3000);

setTimeout(function(){
  texts[texts.length - 1].text=">> Hello, I am Pat. Please ask me anything about my experience or skills.";
  scene.thinking_time = Date.now();
}, 4000);

  texts[texts.length - 1].fillOpacity=1;
  return texts;
}

export function newPatText(texts, scene, z) {
  
  const playerText = new Text();
  scene.add(playerText);
  playerText.text = '>> ';
  playerText.font = 'https://fonts.gstatic.com/s/notosans/v7/o-0IIpQlx3QUlC5A4PNr5TRG.woff';
  playerText.fontSize = 2;
  playerText.position.x = -40;
  playerText.position.z = z;
  playerText.rotation.x = -Math.PI / 2;
  playerText.color = 0xFFF0F0;
  playerText.maxWidth = 84;
  texts.push(playerText);
}
