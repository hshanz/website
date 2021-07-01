import React, { useEffect, useRef, useState } from "react";
import "../css/homepage.css";
import * as Three from "three";
//import data from '%PUBLIC_URL%/assets/scene.json'

const HomePage = (props) => {
  const animationRef = useRef(null);
  let scene, camera, cup, light;
  let renderer = null;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getScene() {
      let response = await fetch(`${process.env.PUBLIC_URL}assets/scene.json`);
      let info = await response.json();
      setData(info);
    }
    getScene();
  }, []);

  useEffect(() => {
    const initScene = () => {
      scene = new Three.Scene();
      scene.background = new Three.Color(0x000000);

      camera = new Three.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.3,1000);

      renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth, window.innerHeight);

      animationRef.current.appendChild(renderer.domElement);

      let loader = new Three.ObjectLoader();
      scene = loader.parse(data);
      console.log(scene)
      cup = scene.getObjectByName("Cup_0");
      light = scene.getObjectByName("HemisphereLight");

      cup.rotateX(0.5);
      cup.position.set(0, 1, 0);
      camera.position.set(0, 1.4, 7);
    };

    const onMouseWheel = (event) => {
      event.preventDefault();
      cup.rotation.z += event.deltaY * 0.5;
      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    if (data !== null) {
      initScene();
      render();
      animate();

      window.addEventListener("wheel", onMouseWheel, { passive: false });
    }

    return () => {
      if (renderer !== null) {
        animationRef.current.removeChild(renderer.domElement);
      }
    };
  }, [data]);

  return (
    <div id="main">
      <div id="canvas" ref={animationRef}/>
      <div className="test"> Hello</div>
    </div>
  );
};

export default HomePage;
