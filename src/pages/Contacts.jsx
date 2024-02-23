import React from "react";

const Contacts = () => {
  return (
    <div>
      <div className="Container">
        <h1 className="Shop-h1">Контакты</h1>
        <div className="Karta">
          <p>Карта с любой точкой</p>
        </div>

        <div className="map-contact">
          <div>
            <p>Телефон</p>
            <h5>+7 (495) 823-54-12</h5>
          </div>
          <div>
            <p>E-mail</p>
            <h5>info@sitename.com</h5>
          </div>
          <div>
            <p>Адрес</p>
            <h5>г. Москва, 3-я улица Строителей, 25</h5>
          </div>
        </div>

        <div className="inputs-contact">
          <h1>Напишите нам</h1>
          <div className="inputs-contact-in">

          <input id='inputs-contact-input' type="text" placeholder="Имя"/>
          <br />
          <input id="inputs-contact-input2" type="email" placeholder="E-mail"/>
          <br />
          <input id="inputs-contact-input3" type="text" placeholder="Телефон"/>
          <br />
          <textarea  id="" placeholder="Сообщение"></textarea>
          <br />
          </div>
          <button>Отправить</button>
        </div>
        <div className="sobshenia">
          <p>Сообщение успешно отправлено</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
