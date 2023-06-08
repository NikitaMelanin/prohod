import React, {Component} from 'react';

function FormPage () {
        return (
            <div>
                <div className="header-folder">
                    <div className="form-buttons">
                        <button className="form-button1">
                            <span>Заявка</span>
                        </button>
                    </div>
                    <div className="anon-form">
                        <legend>1 Заполните паспортные данные</legend>
                        <div className="full-name">
                            <input type="text" required title="" placeholder="Фамилия"/>
                                <input type="text" required title="" placeholder="Имя"/>
                                    <input type="text" required title="" placeholder="Отчество"/>
                        </div>
                        <div className="passport">
                            <input type="text" pattern="[0-9]{4}" title="" required
                                   placeholder="Серия паспорта"/>
                                <input type="text" pattern="[0-9]{6}" title="" required
                                       placeholder="Номер паспорта"/>
                                    <input type="date" className="date" required
                                           title="Когда выдан паспорт?"/>
                        </div>
                        <div className="passport-textarea">
                            <textarea required title="" placeholder="Кем выдан?"></textarea>
                        </div>
                        <legend>2 Уточните детали визита</legend>
                        <div className="visit-details">
                            <input type="date" className="date" required title="Дата посещения"/>
                                <input type="text" required title="" placeholder="Время посещения"/>
                                    <input type="text" required title="" placeholder="Кого посещаете?"/>
                        </div>
                        <div className="visit-reason">
                            <textarea required title="" placeholder="Цель визита"></textarea>
                        </div>
                        <legend>3 Куда придет QR-код для посещения</legend>
                        <div className="email">
                            <input type="text" required title="" placeholder="Email"/>
                        </div>
                        <div className="anon-form-checkbox-submit">
                            <input type="checkbox" required className="anon-form-checkbox"/>
                                <label className="anon-form-checkbox-container">даю согласие на обработку персональных
                                    данных</label>
                                <div className="anon-form-submit">
                                    <button type="submit" className="anon-form-submit-button">отправить</button>
                                </div>
                        </div>
                    </div>
                    {/*<svg className="line" width="100%" height="900" transform="translate(70 1)">*/}
                    {/*    <line*/}
                    {/*        x1="506"*/}
                    {/*        y1="255"*/}
                    {/*        x2="578"*/}
                    {/*        y2="300"*/}
                    {/*        style="*/}
                    {/*stroke: white;*/}
                    {/*stroke-width: 2.5;"*/}
                    {/*    />*/}
                    {/*</svg>*/}
                    {/*<svg className="rectangle" width="100%" height="1350" transform="translate(70 1)">*/}
                    {/*    <rect*/}
                    {/*        x="50"*/}
                    {/*        y="20"*/}
                    {/*        rx="35"*/}
                    {/*        ry="35"*/}
                    {/*        style="*/}
                    {/*width:1300px;*/}
                    {/*height:450px;*/}
                    {/*fill:none;*/}
                    {/*stroke:white;*/}
                    {/*stroke-width:2;*/}
                    {/*opacity:1;"*/}

                    {/*    />*/}
                    {/*    <rect*/}
                    {/*        x="100"*/}
                    {/*        y="300"*/}
                    {/*        rx="35"*/}
                    {/*        ry="35"*/}
                    {/*        style="*/}
                    {/*width: 1100px;*/}
                    {/*height: 1000px;*/}
                    {/*margin-left: 5%;*/}
                    {/*margin-top: 20%;*/}
                    {/*fill:#747A9B;*/}
                    {/*stroke:white;*/}
                    {/*stroke-width:2.5;*/}
                    {/*opacity:1;"*/}
                    {/*    />*/}
                    {/*    <polygon*/}
                    {/*        points="500,335 505,255 635,335"*/}
                    {/*        style="*/}
                    {/*width: 100px;*/}
                    {/*height: 100px;*/}
                    {/*margin-left: 17%;*/}
                    {/*margin-top: 25%;*/}
                    {/*fill:#747A9B;*/}
                    {/*stroke: white;*/}
                    {/*stroke-width:2.5;*/}
                    {/*opacity:1;"*/}
                    {/*    />*/}
                    {/*    <rect*/}
                    {/*        x="100"*/}
                    {/*        y="300"*/}
                    {/*        ry="0"*/}
                    {/*        style="*/}
                    {/*width: 100px;*/}
                    {/*height: 100px;*/}
                    {/*margin-left: 5%;*/}
                    {/*margin-top: 20%;*/}
                    {/*fill:#747A9B;*/}
                    {/*stroke: white;*/}
                    {/*stroke-width:2;*/}
                    {/*opacity:1;"*/}
                    {/*    />*/}
                    {/*</svg>*/}
                </div>
                <form action="куда сохранятся результаты"/>


            </div>
        );
}

export default FormPage;