import React from "react";

const Contacts = ({t, back}) => {
  return (
    <div>
      <div className="Container">
      <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
        <h1 className="Shop-h1">{t("Контакты")}</h1>
        <div className="Karta">
          <p>{t("Карта с любой точкой")}</p>
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
            <h5>{t("г. Москва, 3-я улица Строителей, 25")}</h5>
          </div>
        </div>

        <div className="inputs-contact">
          <h1>{t("Напишите нам")}</h1>
          <div className="inputs-contact-in">

          <input id='inputs-contact-input' type="text" placeholder={t("Имя")}/>
          <br />
          <input id="inputs-contact-input2" type="email" placeholder="E-mail"/>
          <br />
          <input id="inputs-contact-input3" type="text" placeholder="Телефон"/>
          <br />
          <textarea  id="" placeholder={t("Сообщение")}></textarea>
          <br />
          </div>
          <button>{t("Отправить")}</button>
        </div>
        <div className="sobshenia">
          <p>{t("Сообщение успешно отправлено")}</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
