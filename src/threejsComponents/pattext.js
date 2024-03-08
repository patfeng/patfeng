import { Text } from 'troika-three-text';

export function createPatTexts(scene) {
  const texts = [];
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
