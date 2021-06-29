import React,{useEffect, useRef} from 'react';
import '../css/homepage.css'
import * as Three from "three";
import data from './assets/scene.json'
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const HomePage = (props) => {
    const animationRef = useRef(null)


   
    useEffect(() => {
     // === Three.JS CODE START ===
     var scene = new Three.Scene();
     scene.background = new Three.Color(0x000000);
     var camera = new Three.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
     var renderer = new Three.WebGLRenderer();
     renderer.setSize( window.innerWidth, window.innerHeight );
     //document.body.appendChild( renderer.domElement );
     animationRef.current.appendChild(renderer.domElement)

     const loader = new Three.ObjectLoader();
     loader.load('./assets/scene.json' , function(obj){
         scene.add(obj)
     },function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},function ( err ) {
		console.error( 'An error happened' );
	})
     

     renderer.render( scene, camera );
    },)

    

    return (
        <div ref={animationRef}/>
    );
}

export default HomePage;