import React from 'react';
import './App.css';

const click = () => {
};



function App() {
  return (
    <div className="App">
        <div className="service-information-welcome">Добро пожаловать <div className="new-line" >на платформу
            <span
            className="service-information-welcome-blue"> pro
            </span>
            ход!</div>
        </div>
        <div className="service-information-welcome-text">
            Сервис создан для избавления гостей от бумажной работы <div className="new-line" >
            и постоянных согласований, достаточно заполнить заявку на сайте</div> <div className="new-line" >
            и ожидать одобрения в виде QR-кода на указанную почту. <div className="new-line" >
            Пожалуйста, заполните все поля согласно инструкциям на сайте.</div>
        </div>
        <button type="button"  onClick={click} className="service-information-enter">пройти в
            ирит-ртф
        </button>
        {/*<img className="service-information-cat" src="styles/cat-b.svg"/>*/}
    </div>
    {/*<svg className="rectangle" width="1450" height="700" transform="translate(50 1)">*/}
    {/*    <line*/}
    {/*        x1="20"*/}
    {/*        y1="170"*/}
    {/*        x2="1420"*/}
    {/*        y2="170"*/}
    {/*        // style="*/}
    {/*        //         stroke: white;*/}
    {/*        //         stroke-width: 2;"*/}
    {/*    />*/}
    {/*    <rect*/}
    {/*        x="60"*/}
    {/*        y="70"*/}
    {/*        rx="35"*/}
    {/*        ry="35"*/}
    {/*        // style="*/}
    {/*        //             width:1320px;*/}
    {/*        //             height:600px;*/}
    {/*        //             fill:none;*/}
    {/*        //             stroke:white;*/}
    {/*        //             stroke-width:2;*/}
    {/*        //             opacity:1;"*/}

    {/*    />*/}
    {/*    <line*/}
    {/*        x1="372"*/}
    {/*        y1="565"*/}
    {/*        x2="420"*/}
    {/*        y2="565"*/}
    {/*        // style="*/}
    {/*        //         stroke: #6BC8F4;*/}
    {/*        //         stroke-width: 2;"*/}
    {/*    />*/}
    {/*    <line*/}
    {/*        x1="420"*/}
    {/*        y1="565"*/}
    {/*        x2="420"*/}
    {/*        y2="617"*/}
    {/*        // style="*/}
    {/*        //         stroke: #6BC8F4;*/}
    {/*        //         stroke-width: 2;"*/}
    {/*    />*/}
    {/*    <line*/}
    {/*        x1="420"*/}
    {/*        y1="617"*/}
    {/*        x2="470"*/}
    {/*        y2="617"*/}
    {/*        // style="*/}
    {/*        //         stroke: #6BC8F4;*/}
    {/*        //         stroke-width: 2;"*/}
    {/*    />*/}
    {/*    <line*/}
    {/*        x1="470"*/}
    {/*        y1="617"*/}
    {/*        x2="470"*/}
    {/*        y2="667"*/}
    {/*        // style="*/}
    {/*        //         stroke: #6BC8F4;*/}
    {/*        //         stroke-width: 2;"*/}
    {/*    />*/}
    {/*    </svg>*/}

    </div>
  );
}

export default App;
