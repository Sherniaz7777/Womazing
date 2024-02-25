import React from "react";
import Frame1 from "../../assets/Frame 16 (1).png";
import Frame2 from "../../assets/Vector (1).png";
import Frame3 from "../../assets/Frame 16 (3).png";
import "./Section2.css";

const Section2 = ({t}) => {
  return (
    <div>
      <div className="Container">
        <h1>{t("Что для нас важно")}</h1>

        <div className="categorys">
          <div className="categorys-in">
            <img src={Frame3} alt="" />

            <h2>{t("Качество")}</h2>

            <p>{t("Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества")}
              
            </p>
          </div>
          <div className="categorys-in">
            <img src={Frame2} alt="" />

            <h2>{t("Скорость")}</h2>

            <p>{t("Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах")}
              
            </p>
          </div>
          <div className="categorys-in">
            <img src={Frame1} alt="" />

            <h2>{t("Ответственность")}</h2>

            <p>{t("Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing")}
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
