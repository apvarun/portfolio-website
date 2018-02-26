import React, { Component } from "react";

import twitterIcon from "../images/icons/twitter.svg";
import mediumIcon from "../images/icons/medium.svg";
import githubIcon from "../images/icons/github.svg";
import dribbbleIcon from "../images/icons/dribbble.svg";
import codepenIcon from "../images/icons/codepen.svg";

export default class Home extends Component {
    render() {
        return (
            <div className="page home">
                <h1>— Varun ——</h1>
                <h2>
                    Front-End Developer and UI Designer from Bangalore, India.✌🏻
                </h2>
                <p>Focusing on crafting minimal experiences for the Web.</p>
                <div className="tags">
                    <span>react js</span>
                    <span>web performance</span>
                    <span>ui design</span>
                    <span>interaction</span>
                    <span>debugging</span>
                </div>
                <ol className="social-icons">
                    <li>
                        <a href="https://twitter.com/apvarun" target="_blank">
                            <img src={twitterIcon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/apvarun" target="_blank">
                            <img src={githubIcon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@apvarun" target="_blank">
                            <img src={mediumIcon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/apvarun/" target="_blank">
                            <img src={dribbbleIcon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/apvarun" target="_blank">
                            <img src={codepenIcon} />
                        </a>
                    </li>
                </ol>
            </div>
        );
    }
}
