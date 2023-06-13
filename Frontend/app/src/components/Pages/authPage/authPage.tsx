import React from 'react';
import './authorization.css';
// import "./authPage"
const AuthPage = () => {
    return (
        <div className="header-folder">
            <div className="logo-cat">
                <img className="logo" src="../styles/logo.svg"/>
                    <img className="white-cat" src="../styles/cat-w.svg"/>
            </div>
            <div className="form-buttons">
                <button className="form-button">
                    <span>Вход</span>
                </button>
            </div>
            <div className="authorization-form">
                <div className="login">
                    <input type="text" required  placeholder="Логин"/>
                </div>
                <div className="password">
                    <input type="password" title="" required placeholder="Пароль"/>
                </div>
                <div className="authorization-enter">
                    <button type="button"
                            className="authorization-enter-button">войти
                    </button>
                </div>
            </div>
            {/*<svg className="line" width="100%" height="900" transform="translate(70 1)">*/}
            {/*    <line*/}
            {/*        x1="506"*/}
            {/*        y1="255"*/}
            {/*        x2="578"*/}
            {/*        y2="300"*/}
            {/*        style="*/}
            {/*        stroke: white;*/}
            {/*        stroke-width: 2.5;"*/}
            {/*    />*/}
            {/*    <line*/}
            {/*        x1="100"*/}
            {/*        y1="120"*/}
            {/*        x2="1300"*/}
            {/*        y2="120"*/}
            {/*        style="*/}
            {/*            stroke: white;*/}
            {/*            stroke-width: 2;"*/}
            {/*    />*/}
            {/*</svg>*/}
            {/*<svg className="rectangle" width="100%" height="1350" transform="translate(70 1)">*/}
            {/*    <rect*/}
            {/*        x="50"*/}
            {/*        y="20"*/}
            {/*        rx="35"*/}
            {/*        ry="35"*/}
            {/*        style="*/}
            {/*        width:1300px;*/}
            {/*        height:450px;*/}
            {/*        fill:none;*/}
            {/*        stroke:white;*/}
            {/*        stroke-width:2;*/}
            {/*        opacity:1;"*/}

            {/*    />*/}
            {/*    <rect*/}
            {/*        x="100"*/}
            {/*        y="300"*/}
            {/*        rx="35"*/}
            {/*        ry="35"*/}
            {/*        style="*/}
            {/*        width: 1100px;*/}
            {/*        height: 500px;*/}
            {/*        margin-left: 5%;*/}
            {/*        margin-top: 20%;*/}
            {/*        fill:#747A9B;*/}
            {/*        stroke:white;*/}
            {/*        stroke-width:2.5;*/}
            {/*        opacity:1;"*/}
            {/*    />*/}
            {/*    <polygon*/}
            {/*        points="500,335 505,255 635,335"*/}
            {/*        style="*/}
            {/*        width: 100px;*/}
            {/*        height: 100px;*/}
            {/*        margin-left: 17%;*/}
            {/*        margin-top: 25%;*/}
            {/*        fill:#747A9B;*/}
            {/*        stroke: white;*/}
            {/*        stroke-width:2.5;*/}
            {/*        opacity:1;"*/}
            {/*    />*/}
            {/*    <rect*/}
            {/*        x="100"*/}
            {/*        y="300"*/}
            {/*        ry="0"*/}
            {/*        style="*/}
            {/*        width: 100px;*/}
            {/*        height: 100px;*/}
            {/*        margin-left: 5%;*/}
            {/*        margin-top: 20%;*/}
            {/*        fill:#747A9B;*/}
            {/*        stroke: white;*/}
            {/*        stroke-width:2;*/}
            {/*        opacity:1;"*/}
            {/*    />*/}
            {/*</svg>*/}
        </div>

);
};

export default AuthPage;