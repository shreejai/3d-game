import box from './Box.js'
import camera from './Camera.js'
import light from './Light.js'
import scene from './Scene.js'
import renderer from './Renderer.js'


scene.add(box)
camera.position.set(1,2,3)
camera.lookAt(box.position)

scene.add(light)

renderer.render( scene, camera );
