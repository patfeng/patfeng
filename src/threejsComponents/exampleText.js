import { Text } from 'troika-three-text';

export function createExampleText(scene) {
    const exampleText = new Text();
    setTimeout(function(){
      scene.add(exampleText);
      exampleText.text = 'Try: "whats your college major?" or "tell me about your experience with AI."';
      exampleText.font = 'https://fonts.gstatic.com/s/notosans/v7/o-0IIpQlx3QUlC5A4PNr5TRG.woff';
      exampleText.fontSize = 1.5;
      exampleText.position.x = -32;
      exampleText.position.z = 20;
      exampleText.rotation.x = -Math.PI / 2;
      exampleText.color = 0x999999;
      exampleText.maxWidth = 84;
      exampleText.fillOpacity= 0;
  }, 1000);


  return exampleText;
}