import { Text } from 'troika-three-text';

export function createUserTexts(scene) {
  const texts = [];
  newUserText(texts, scene, 5);
  setTimeout(function(){
    texts[texts.length - 1].fillOpacity=1;
  }, 5000);
  
  return texts;
}

export function newUserText(texts, scene, z) {
  const playerText = new Text();
  scene.add(playerText);
  playerText.text = '>> ';
  playerText.font = 'https://fonts.gstatic.com/s/notosans/v7/o-0IIpQlx3QUlC5A4PNr5TRG.woff';
  playerText.fontSize = 2;
  playerText.position.x = -40;
  playerText.position.z = z;
  playerText.rotation.x = -Math.PI / 2;
  playerText.color = 0xFFFFFF;
  playerText.maxWidth = 84;
  
  playerText.fillOpacity= 0;
  texts.push(playerText);
}

export function handleCaret(texts, inputValue, caretLocation, keyheld) {
  const intermediate = inputValue + ' ';
  const inputText = intermediate.slice(0, caretLocation) + '■' + intermediate.slice(caretLocation + 1);
  texts[texts.length - 1].text = keyheld || Date.now() % 1000 < 500 ? '>> ' + inputText : '>> ' + inputValue;
}