import React from 'react'
import "./Section3.css"
import adam from "../../assets/winger.png";
import right from "../../assets/Vector 2.png";
import left from "../../assets/Vector 1 (2).png";

const Section3 = () => {
  return (
    <div>
      <h1>Команда мечты Womazing</h1>

      <div className="Frame">
       <button id='btn-1'><img src={left} alt="" /></button>
        <img id='imgs'src={adam} alt="" />
         <a href=""></a>
         <a href=""></a>
         <a href=""></a>
        <button><img src={right} alt="" /></button>

        <div className="Frame-text">
          <h2>Для каждой</h2>

          <p className='Frame-text-in'>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>

          <p className='Frame-text-in-2'>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>

          <span>Подробнее о бренде</span>
        </div>
      </div>
    </div>
  )
}

export default Section3