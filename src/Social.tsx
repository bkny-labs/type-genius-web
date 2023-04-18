import { FaChrome, FaGithub } from 'react-icons/fa';

export default function Social() {
    return (
        <div className="container social"> 
            <div className="row align-right">
                <div className="column shrink">
                    <a href="https://github.com/bkny-labs/type-genius" rel="noreferrer" target="_blank"><FaGithub /></a>
                </div>
                <div className="column shrink">
                    <a href="https://chrome.google.com/webstore/detail/type-genius/ejokcdmbiifiagicppiakpneifaofghh" rel="noreferrer" target="_blank"><FaChrome /></a>
                </div>
            </div>
        </div>
    );
}