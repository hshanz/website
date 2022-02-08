import React, { useEffect, useRef, useState } from "react";
import "../css/homepage.css";
import * as Three from "three";
import data from '../assets/scene.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPaperclip, faCogs,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons"

const HomePage = (props) => {
  const animationRef = useRef(null);
  let scene, camera, cup,renderer ,light;
  let scrollLength = 0
  let target;
  

  useEffect(() => {
    initScene();
    render();
    animate();

    target = document.getElementById("holder")
    window.addEventListener("wheel", onMouseWheel,{passive:true});
    return () => animationRef.current.removeChild(renderer.domElement);
  },);

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

    cup.rotation.set(-1.2,-0.2,-0.5)
    cup.position.set(4, 1, 0);
    camera.position.set(0, 1.4, 7);
    
  };

  const onMouseWheel = (event) => {
    event.preventDefault();
    target.scrollBy(event.deltaX/5, event.deltaY/5);
    
    console.log(event.deltaY)
    if(event.deltaY < 0){
      cup.rotation.z += 0.2;
    } else{
      cup.rotation.z -= 0.2;
    }
  
  };

  const render = () => {
    renderer.render(scene, camera);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

    

  return (
    <div id="main">
      <div id="canvas" ref={animationRef}/>
      <div id="holder" className="content-holder" > 

        <div className="about glass">
          <h1 className="homeHead">About me</h1>
          <p className="homeP"> 
              I'm am currently a third year software engineering student at Chalmers University of Technology, my current interest are web development 
              with focus on frontend design (UX/UI) and data visualization and manipulation in python. Currently I am working on my bachelor thesis in 
              which me and 5 other students are designing and building a web interface for a Chalmers quantum computer.      
          </p>
          <p className="homeP">On my spare time I am an active member of Chalmers Student Union and i strive to keep campus a fun and colorful place</p>
          <p className="homeP"></p>
        </div>

        <div className="projects glass">
          <h1 className="homeHead">Projects & Fun stuff</h1>
          <a className="project-link" href="https://github.com/KarlssonLucas/dat257-laskuppen" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faBook} color="black"/> Läskuppen </a>
          <p className="homeP">A fullstack project developed for a project course where the goal was to create a website for a reading competition between students. Live deployment can be found 
            <a id="site-link" href="http://laskuppen.herokuapp.com/" target="_blank" rel="noreferrer"> here!</a></p>
          <br/>
            <a className="project-link" href="https://github.com/hshanz/website" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faPaperclip} color="black"/> Portfolio website </a>
          <p className="homeP">This website! Made with React and threejs.</p>
          <br/>
            <a className="project-link" href="https://github.com/hshanz/website" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faCogs} color="black"/> Dotfiles </a>
          <p className="homeP">Dotfiles for my linux config</p>
          <br/>
            <a className="project-link" href="https://github.com/hshanz/website" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} color="black"/> GitHub </a>
          <p className="homeP">Checkout my Github to see what i am currently working on</p>

        </div>

        <div className="contact glass">
          <h1 className="homeHead">Contact</h1>
          <a className="project-link" href="mailto: david00gbg@hotmail.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faEnvelope} color="black"/> Email </a>
          <a className="project-link" href="https://www.linkedin.com/in/david-andreasson-025529231/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} color="black"/> LinkedIn </a>
          <p></p>
        </div>
        <p></p>
        

      </div>
        <div className="scrollHint">
        <p className="homeP">Scroll to see more and spin the cup</p>
        </div>
    </div>
  );
};

export default HomePage;
