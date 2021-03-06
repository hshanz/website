import React,{useEffect} from 'react';
import { useHistory} from "react-router-dom";
import '../css/startpage.css';


const StartPage = (props) => {
    let history = useHistory();
    let changed = false;


    useEffect(() => {
        setTimeout(() =>{
            handleClick()
        },20000)
    },)

    const handleClick = () => {
        if(!changed){
            changed = true
            history.push("/home")  
        }           
    }

    


    return(
        <div className="startpage-holder">
            <div className="typew-holder">
                <h1 className="typew-text"> Hello, my name is David.</h1>
                <p className="typew-subtitle">Welcome to my portfolio</p>
            </div>
            <div className="explore">
                <p onClick={handleClick} className="explore-text"> (Explore) =></p>
            </div>
        </div>
        
    );
}

export default StartPage;
