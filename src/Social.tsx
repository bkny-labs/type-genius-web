import * as React from "react";
import { FaChrome, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Social() {
    return (
        <div className="container social"> 
            <div className="row align-right">
                <div className="column shrink">
                    <a href="https://github.com/bkny-labs/type-genius" rel="noreferrer" target="_blank"><FaGithub /></a>
                </div>
                <div className="column shrink">
                    <a href="https://chrome.google.com/webstore/" rel="noreferrer" target="_blank"><FaChrome /></a>
                </div>
                {/* <div className="column shrink">
                    <a href="#" rel="noreferrer" target="_blank"><FaLinkedin /></a>
                </div>
                <div className="column shrink">
                    <a href="mailto:m4tuna@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope /></a>
                </div> */}
            </div>
        </div>
    );
}