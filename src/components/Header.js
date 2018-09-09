import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
        <div id="header">

            <div id="header-title">
                <h1>FreeCodeCamp Drum Machine</h1>
            </div>

            <div id="header-contact"><div id="header-author">
                Lewis Horwood
            </div>

            <div id="header-links">

                <div className="header-link">
                    <a href="https://github.com/Lewis65" target="_blank">
                        <div className="header-link-icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <div className="header-link-label">
                            Github
                        </div>
                    </a>
                </div>

                <div className="header-link">
                    <a href="https://www.linkedin.com/in/lewishorwood/" target="_blank">
                        <div className="header-link-icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="header-link-label">
                            LinkedIn
                        </div>
                    </a>
                </div>
                
                <div className="header-link">
                    <a href="https://www.freecodecamp.org/lewis65" target="_blank">
                        <div className="header-link-icon">
                            <i className="fab fa-free-code-camp"></i>
                        </div>
                        <div className="header-link-label">
                            FreeCodeCamp
                        </div>
                    </a>
                </div>

            </div></div>

        </div>
        );
    }
}