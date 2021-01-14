import {React,useEffect,useRef,useState} from "react";

import * as THREE from "three";

const OrbitControls = require('three-orbit-controls')(THREE);

export default function Figure(props) {
    let mount = useRef(null);

    useEffect(()=>{
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('lightgrey');
        
        const camera = new THREE.PerspectiveCamera(100, 4 / 3, .5, 1000);
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( 800,800 );
        // renderer.shadowMapEnabled = true;
        mount.appendChild( renderer.domElement );
        
        let controls = new OrbitControls(camera,mount)
        
        const geometry = new THREE.ConeBufferGeometry();
        
        const vertices = new Float32Array(props.vertices);

        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        
        const material = new THREE.MeshLambertMaterial( { color: 'grey', side: THREE.DoubleSide} );
        const cone = new THREE.Mesh( geometry, material );
        
        scene.add( cone );
        // cone.geometry.attributes.position.needsUpdate = true;
        const axesHelper = new THREE.AxesHelper( 5 );
        scene.add( axesHelper );

        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 40, -15);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);

        const helper = new THREE.DirectionalLightHelper(light);
        scene.add(helper);
        
        camera.position.set(50, 50, 50);
        camera.lookAt(0, 0, 0);
        
        const animate = () => {
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        }

        animate()

    },[props.vertices])

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return (
        <div ref={ref => (mount = ref)} />
    )
}
        
      