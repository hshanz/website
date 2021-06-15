import React,{useEffect} from 'react';
import '../css/homepage.css'
import * as Three from "three"

const HomePage = (props) => {
    useEffect(() => {

     // === Three.JS CODE START ===
     var scene = new Three.Scene();
     var camera = new Three.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
     var renderer = new Three.WebGLRenderer();
     renderer.setSize( window.innerWidth, window.innerHeight );
     document.body.appendChild( renderer.domElement );
     var geometry = new Three.BoxGeometry( 1, 1, 1 );
     var material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
     var cube = new Three.Mesh( geometry, material );
     scene.add( cube );
     camera.position.z = 5;
     var animate = function () {
       requestAnimationFrame( animate );
       cube.rotation.x += 0.01;
       cube.rotation.y += 0.01;
       renderer.render( scene, camera );
     };
     animate();
     // === Three.JS EXAMPLE CODE END ===
        
    },)

    return (
        <div/>
    );
}

export default HomePage;