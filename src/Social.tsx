import * as React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Social() {
    return (
        <div className="container social"> 
            <div className="row align-right">
                <div className="column shrink">
                    <a href="https://github.com/m4tuna" rel="noreferrer" target="_blank"><FaGithub /></a>
                </div>
                <div className="column shrink">
                    <a href="https://www.linkedin.com/in/mike-fortuna-68a470172/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
                </div>
                <div className="column shrink">
                    <a href="mailto:m4tuna@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope /></a>
                </div>
            </div>
        </div>
    );
}