import {React,useEffect,useRef} from "react";

import * as THREE from "three";

export default function Figure() {
    let mount = useRef(null);
  
    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, 4 / 3, .5, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( 800,800 );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        mount.appendChild( renderer.domElement );
        
        const geometry = new THREE.ConeGeometry(5,20,32);
        const material = new THREE.MeshBasicMaterial( {color: 'grey'} );
        const cone = new THREE.Mesh( geometry, material );
        scene.add( cone );

        camera.position.set(8, 8, 8);
        camera.lookAt(0, 0, 0);
        
        const animate = () => {
          requestAnimationFrame( animate );
          cone.rotation.x += 0.01;
          cone.rotation.y += 0.01;
          renderer.render( scene, camera );
        }

        animate()
    },[])
          
        
        
    return (
        <div ref={ref => (mount = ref)} />
    )
}
        
      