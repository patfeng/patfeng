export function updateCamera(camera,text){
    console.log(text.textRenderInfo.blockBounds)
    console.log(text.textRenderInfo.blockBounds[1])
    
    const change = text.textRenderInfo.blockBounds[1]
    camera.position.z -= change
    return change
}