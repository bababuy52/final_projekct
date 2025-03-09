import React from 'react'
import Line from "../assets/figure.svg"
import Man from "../assets/Mask Group.png"

const Catalog = () => {
  return (
    <div className='br bg-[#484283] flex mt-[20px]'>
      <div className='ml-[200px] mb-[200px] w-[520px] h-[200px]'>
      <h2 className='text-[30px] text-[white] font-bold mt-[200px]'>Пара слов о нас</h2>
      <h2 className='text-[16px] text-[white]'>Спорт держит нас в форме. Учит дисциплине.</h2>
      <h2 className='text-[16px] text-[white]'>Объединяет нас. Через спорт мы можем менять</h2>
      <h2 className='text-[16px] text-[white]'>жизни. В том числе с помощью воодушевляющих</h2>
      <h2 className='text-[16px] text-[white]'>историй спортсменов. Чтобы помочь тебе</h2>
      <h2 className='text-[16px] text-[white]'>подняться и двигаться вперед.</h2>
      <h2 className='text-[20px] text-[white] font-bold ml-[300px]'>- SneakMax</h2>
      </div>
      <div className=''>
      <img src={Man} alt="" />
      </div>
    </div>
  )
}

export default Catalog
