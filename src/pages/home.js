import React,{useEffect, useRef} from 'react';
import '../css/homepage.css'
import * as Three from "three";
import data from '../assets/scene.json'



const HomePage = (props) => {
    const animationRef = useRef(null)
    let scene,camera,renderer,cup,light;
    
    useEffect(() => {
     
     initScene()
     render()
     animate()
     
    
     window.addEventListener('wheel', onMouseWheel,{passive:false});
     return () => animationRef.current.removeChild( renderer.domElement);
     
    },)

    const initScene = () =>{
     scene = new Three.Scene();
     scene.background = new Three.Color(0x000000);

     camera = new Three.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.3, 1000 );

     renderer = new Three.WebGLRenderer({antialias:true,alpha:true});
     renderer.setClearColor( 0x000000, 0 );
     renderer.setSize( window.innerWidth, window.innerHeight );

     animationRef.current.appendChild(renderer.domElement)
     
     let loader = new Three.ObjectLoader();
     scene = loader.parse(data);
     cup = scene.getObjectById(12);
     light = scene.getObjectById(13);

     cup.rotateX(0.5)
     cup.position.set(0,1,0)
     camera.position.set(0,1.4,7)  

    }

    const onMouseWheel = (event) =>{
        event.preventDefault();
        cup.rotation.z += event.deltaY *0.5
        render()
    }

    const render = () =>{
        renderer.render( scene, camera );
    }
    
    const animate = () => {
        requestAnimationFrame( animate );
        render()
      };
    

   
    
    return (
            <div id="main">
                <div id="canvas" ref={animationRef}> </div>
                <div className="test"> Hello</div>

            </div>
             
        
       
    );
}

export default HomePage;