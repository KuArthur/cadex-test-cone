import {React,useEffect,useRef} from "react";

import * as THREE from "three";

const OrbitControls = require('three-orbit-controls')(THREE)
const abc = async () => {
    let array = [];
    const response = await fetch('/api/computation?r=2&n=5&h=2');
    const jsonFile = await response.json();
    jsonFile.toString()
}

let arr = [
    5,      0,   30,    2.5,
 4.33,     30, -2.5,   4.33,
   30,     -5,    0,     30,
-2.501, -4.331,   30,    2.5,
-4.331,     30,    5, -0.001,
   30
]




export default function Figure() {
    let mount = useRef(null);
  
    useEffect(()=>{
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('lightgrey');
        const camera = new THREE.PerspectiveCamera(100, 4 / 3, .5, 1000);
        // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( 800,800 );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        mount.appendChild( renderer.domElement );
        let controls = new OrbitControls(camera)
        // controls.target.set(0, 5, 0);
        // controls.update();
        // const geometry = new THREE.ConeGeometry(5,20,32);
        const geometry = new THREE.ConeBufferGeometry();

        
        const vertices = new Float32Array([
            5, 0, 30,
            2.5, 4.33, 30,
            -2.5, 4.33, 30,
            -5, 0, 30,
            -2.501, -4.331,   30,
            2.5, -4.331, 30,
            5, 0, 30,

   
        ]);
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

        const material = new THREE.MeshBasicMaterial( {color: 'darkgrey',side: THREE.BackSide} );
        const cone = new THREE.Mesh( geometry, material );
        cone.castShadow = true;
        cone.receiveShadow = true;
        scene.add( cone );

        camera.position.set(50, 50, 50);
        camera.lookAt(0, 0, 0);
        
        const animate = () => {
          requestAnimationFrame( animate );
          cone.rotation.x += 0;
          cone.rotation.y += 0;
          
          renderer.render( scene, camera );
          
        }

        animate()
    },[])
          
        
        
    return (
        <div ref={ref => (mount = ref)} />
    )
}
        
      