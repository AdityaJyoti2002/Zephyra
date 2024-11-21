import React from "react";
import logo from "./arrow_back.png";
import att from "./attach_file.png"
import companylogo from "./2.png"
import "./Chatbot.css"

function Chatbot() {
    return (
        <>
        <div className="sidemenu">
        <a href=""><img className="backlogo" src={logo} alt=""/></a>
        <div className="Ainame">
           
            <h1 className="h4">Zephyra</h1>

           </div>
        <ul className="history">
            <li><img src="" alt=""/></li>
            <li><a href="">chat</a>
                
            </li>
            <li><a href="">chat</a>
                
            </li>
            <li><a href="">chat</a>
                
            </li>
            <li><a href="">chat</a>
                
            </li>
        </ul>
    </div>
    <div className="containers">
        
        <div className="chatcontainer">
            <div className="left">
                <img src={companylogo } alt="Profile 1"/>
                <span>
                    <p >Hey, how can I help you?</p>
                </span>
            </div>
            <div className="left user">
               
                <span>
                    <p>Sure, what do you need help with?</p>
                </span>
            </div>
            <div className="left">
                <img src={companylogo } alt="Profile 2"/>
                <span>
                    <p>Sure, what do you need help with?</p>
                </span>
            </div>
        </div>

        

        <div className="chatfooter">
            <img src={att} alt=""/>
            
            <input type="text"  placeholder="message Ai Chat"/>
            <button >Send</button>
        </div>
    </div>
    </>
    
    );
}

export default Chatbot;
