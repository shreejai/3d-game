const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
const box = new THREE.Mesh( geometry, material );

export default box