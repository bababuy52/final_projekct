import React from 'react'
import Krest from '../assets/Krest.svg'
import Plus from '../assets/Plus.png'

const Karte = () => {
  return (
    <div className='ml-[200px]'>
      <div>
        <h2 className='text-[30px] font-bold text-[#444B58]'>
        Часто задаваемые вопросы
        </h2>
      </div>
      <div>
        <div>
            <h2 className='text-[20px] text-[#242424] font-Regular mt-[20px]'>Вопрос 1</h2>
            <h2 className='text-[16px] text-[#24242480] mt-[20px]'>А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими</h2>
            <h2 className='text-[16px] text-[#24242480]'>другими людьми</h2>
            <div className='flex ml-[1100px]'>
            <img src={Krest} alt="" />
            </div>
        </div>
        <div className='text-[20px] text-[#242424] font-Regular mt-[20px]'>
            <h2>Вопрос 2</h2>
            <div className='ml-[1100px]'>
                <img src={Plus} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Karte
