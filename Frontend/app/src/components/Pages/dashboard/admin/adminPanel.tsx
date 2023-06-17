import React from 'react';
import {useParams} from "react-router-dom";
import './adminPanel.css'
import logo from '../../../../logo.svg';
import {Link,  Outlet} from "react-router-dom";
const AdminPanel = () => {
    const {id} = useParams();
    const click = () => {
    };

    return (
        <div>
            {id}<>
            {/*чтобы показать окно нижу надо изменить свойство visitor-information-window "display" с none на flex, а также
z-index visitor-information-window-container с 0 на 10
соответствующим образом с add-security.*/}
            <div className="add-security-container">
                <div className="add-security-window">
                    <div className="add-security-header">
                        <button type="button" className="visitor-information-back">
                            назад
                        </button>
                        <span className="visitor-information-title">
          добавление{" "}
                            <span className="visitor-information-blue">безопасника</span>
        </span>
                    </div>
                    <div className="full-name">
                        <input type="text" required placeholder="Фамилия" />
                        <input type="text" required placeholder="Имя" />
                        <input
                            type="text"
                            required
                            placeholder="Отчество"
                        />
                    </div>
                    <div className="email">
                        <input type="text" required placeholder="Email" />
                    </div>
                    <div className="enter-data">
                        <input type="text" required placeholder="Логин" />
                        <input
                            type="password"
                            required
                            placeholder="Пароль"
                        />
                        <input
                            type="password"
                            required
                            placeholder="Подтвердите пароль*"
                        />
                    </div>
                    <div className="add-button">
                        <button type="button" className="add-security-button-add">
                            добавить
                        </button>
                    </div>
                </div>
            </div>
            <div className="visitor-information-window-container">
                <div className="visitor-information-window">
                    <div className="visitor-information-header">
                        <button type="button" className="visitor-information-back">
                            назад
                        </button>
                        <span className="visitor-information-title">
          <span className="visitor-information-blue">заявка</span> гостя
        </span>
                    </div>
                    <div className="full-name">
                        <output title="" placeholder="Фамилия">
                            Ffffffffff
                        </output>
                        <output  title="" placeholder="Имя">
                            Ffffffffff
                        </output>
                        <output  placeholder="Отчество">
                            Ffffffffff
                        </output>
                    </div>
                    <div className="passport">
                        <output

                            placeholder="Серия паспорта"
                        >
                            4444
                        </output>
                        <output

                            placeholder="Номер паспорта"
                        >
                            666666
                        </output>
                        <output title="Когда выдан паспорт?">
                            22.12.2000
                        </output>
                    </div>
                    <div className="passport-textarea">
                        <output
                            className="textarea"
                            placeholder="Кем выдан?"
                        >
                            Отделением УФМС по Свердловской обл в г. Екатеринбурге
                        </output>
                    </div>
                    <div className="visit-details">
                        <output
                            className="date"
                            title="Дата посещения"
                        >
                            12.11.2033
                        </output>
                        <output
                            placeholder="Время посещения"
                        >
                            12:35
                        </output>
                        <output
                            placeholder="Кого посещаете?"
                        >
                            Обабков И.Н.
                        </output>
                    </div>
                    <div className="visit-reason">
                        <output
                            className="textarea"
                            placeholder="Цель визита"
                        >
                            Решение о коллаборации бизнеса "АНАНАС"
                        </output>
                    </div>
                    <div className="email">
                        <output placeholder="Email">
                            reallynigga@gmail.com
                        </output>
                    </div>
                    <div className="accept-visitor-buttons">
                        <button className="accept-visitor">Принять</button>
                        <button className="deny-visitor">Отклонить</button>
                    </div>
                </div>
            </div>
            <div className="header-folder">
                <div className="logo-personal-account">
                    <img className="logo-admin" src={logo}/>
                    <Link to="/dashboard/:id/user"><button className="personal-account-enter">Фамилия И.О</button></Link>
                </div>
                <div className="add-security">
                    <button type="button" className="add-security-button">
                        добавить безопасника
                    </button>
                    <span className="add-security-title">
        список <span className="add-security-title-blue">заявок</span> на вход
      </span>
                </div>
                <div className="searching-string">
                    <div className="searching-string" />
                </div>
                <div className="admin-panel-buttons">
                    <button className="admin-panel-button1">Активные заявки</button>
                    <button className="admin-panel-button2">Отработанные заявки</button>
                </div>
                <div className="inactive-application">
                    <div className="inactive-application-first-line">
                        <div className="application-number">#</div>
                        <div className="application-id">ID звявки</div>
                        <div className="application-guest">Посетитель</div>
                        <div className="application-host">Принимающий</div>
                        <div className="application-date">Дата посещения</div>
                        <div className="application-status">Статус</div>
                    </div>
                    <div className="inactive-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">1238uhw</div>
                        <div className="application-guest">Иванов И.И.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">5438uhw</div>
                        <div className="application-guest">Вайнштейн Х.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">7238uhw</div>
                        <div className="application-guest">Риодежанейро И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">4838uhw</div>
                        <div className="application-guest">Кепушенко И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">1438uhw</div>
                        <div className="application-guest">Шизиков И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">2438uhw</div>
                        <div className="application-guest">Петров И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-str-switch">
                        <button className="str-switch-back">
                            <img src="" />
                        </button>
                        <span className="str-switch-number">1</span>
                        <button className="str-switch-next">
                            <img src="" />
                        </button>
                    </div>
                </div>
                <svg
                    className="polygon"
                    width="100%"
                    height={400}
                    transform="translate(70 1)"
                >
                    <polygon
                        points="940,335 942,255 1090,335"
                        style={{
                            width: 100,
                            height: 100,
                            fill: "#747A9B" /*stroke: '#747A9B', */,
                            /*strokeWidth: 1, */
                            opacity: 1
                        }}
                    />
                </svg>
                <svg className="line" width="90%" height={900} transform="translate(70 1)">
                    <line
                        x1={100}
                        y1={100}
                        x2={1300}
                        y2={100}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                    <line
                        x1={100}
                        y1={300}
                        x2={1000}
                        y2={300}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                    <line
                        x1={506}
                        y1={255}
                        x2={578}
                        y2={300}
                        style={{ stroke: "white", strokeWidth: "2.5" }}
                    />
                    <line
                        x1={944}
                        y1={255}
                        x2={1027}
                        y2={300}
                        style={{ stroke: "white", strokeWidth: "2.5" }}
                    />
                </svg>
                <svg
                    className="rectangle"
                    width="100%"
                    height={1025}
                    transform="translate(70 1)"
                >
                    <rect
                        x={100}
                        y={300}
                        rx={35}
                        ry={35}
                        style={{
                            width: 1200,
                            height: 700 /*marginLeft: '5%', */,
                            /*marginTop: '20%', */
                            fill: "#747A9B",
                            stroke: "white",
                            strokeWidth: "2.5",
                            opacity: 1
                        }}
                    />
                    <rect
                        x={100}
                        y={300}
                        ry={0}
                        style={{
                            width: 100,
                            height: 100 /*marginLeft: '5%', */,
                            /*marginTop: '20%', */
                            fill: "#747A9B",
                            stroke: "white",
                            strokeWidth: 2,
                            opacity: 1
                        }}
                    />
                    <polygon
                        points="500,335 505,255 635,335"
                        style={{
                            width: 100,
                            height: 100 /*marginLeft: '17%', */,
                            /*marginTop: '25%', */
                            fill: "#747A9B",
                            stroke: "#747A9B",
                            strokeWidth: "2.5",
                            opacity: 1
                        }}
                    />
                </svg>
            </div>
            <div className="active-header-folder">
                <div className="logo-personal-account">
                    <img className="logo-admin" src={logo}/>
                    <Link to="/dashboard/:id/user"><button
                        onClick={click}
                        className="personal-account-enter"
                    >
                        Фамилия И.О
                    </button></Link>
                </div>
                <div className="add-security">
                    <button type="button" className="add-security-button">
                        добавить безопасника
                    </button>
                    <span className="add-security-title">
        список <span className="add-security-title-blue">заявок</span> на вход
      </span>
                </div>
                <div className="active-searching-strings">
                    <div className="active-searching-string" />
                </div>
                <div className="admin-panel-buttons">
                    <button className="active-admin-panel-button1">Активные заявки</button>
                    <button className="admin-panel-button2">Отработанные заявки</button>
                </div>
                <div className="active-application">
                    <div className="active-application-first-line">
                        <div className="application-number">#</div>
                        <div className="application-id">ID звявки</div>
                        <div className="application-guest">Посетитель</div>
                        <div className="application-host">Принимающий</div>
                        <div className="application-date">Дата посещения</div>
                        <div className="application-status">Статус</div>
                    </div>
                    <div className="active-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">1238uhw</div>
                        <div className="application-guest">Иванов И.И.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">5438uhw</div>
                        <div className="application-guest">Вайнштейн Х.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">7238uhw</div>
                        <div className="application-guest">Риодежанейро И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">4838uhw</div>
                        <div className="application-guest">Кепушенко И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">1438uhw</div>
                        <div className="application-guest">Шизиков И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <div className="application-number">1</div>
                        <div className="application-id">2438uhw</div>
                        <div className="application-guest">Петров И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-str-switch">
                        <button className="str-switch-back">
                            &lt;
                            <img src="" />
                        </button>
                        <span className="str-switch-number">1</span>
                        <button className="str-switch-next">
                            &gt;
                            <img src="" />
                        </button>
                    </div>
                </div>
                <svg
                    className="polygon"
                    width="100%"
                    height={400}
                    transform="translate(70 1)"
                >
                    <polygon
                        points="500,335 505,255 650,335"
                        style={{
                            width: 100,
                            height: 100 /*marginLeft: '17%', */,
                            /*marginTop: '25%', */
                            fill: "#747A9B",
                            opacity: 1
                        }}
                    />
                </svg>
                <svg className="line" width="90%" height={900} transform="translate(70 1)">
                    <line
                        x1={100}
                        y1={100}
                        x2={1300}
                        y2={100}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                    <line
                        x1={100}
                        y1={300}
                        x2={1050}
                        y2={300}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                    <line
                        x1={506}
                        y1={255}
                        x2={589}
                        y2={300}
                        style={{ stroke: "white", strokeWidth: 3 }}
                    />
                    <line
                        x1={944}
                        y1={255}
                        x2={1027}
                        y2={300}
                        style={{ stroke: "white", strokeWidth: "2.5" }}
                    />
                </svg>
                <svg
                    className="rectangle"
                    width="100%"
                    height={1025}
                    transform="translate(70 1)"
                >
                    <rect
                        x={100}
                        y={300}
                        rx={35}
                        ry={35}
                        style={{
                            width: 1200,
                            height: 700 /*marginLeft: '5%', */,
                            /*marginTop: '20%', */
                            fill: "#747A9B",
                            stroke: "white",
                            strokeWidth: "2.5",
                            opacity: 1
                        }}
                    />
                    <rect
                        x={100}
                        y={300}
                        ry={0}
                        style={{
                            width: 100,
                            height: 100 /*marginLeft: '5%', */,
                            /*marginTop: '20%', */
                            fill: "#747A9B",
                            stroke: "white",
                            strokeWidth: 2,
                            opacity: 1
                        }}
                    />
                    <polygon
                        points="940,335 942,255 1090,335"
                        style={{
                            width: 100,
                            height: 100,
                            fill: "#747A9B" /*stroke: '#747A9B', */,
                            /*strokeWidth: 1, */
                            opacity: 1
                        }}
                    />
                </svg>
            </div>
        <Outlet/></>
        </div>
    );
};

export default AdminPanel;