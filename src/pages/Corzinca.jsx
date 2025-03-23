import React from 'react'

const Corzinca = () => {
  return (
    <div className='items-center ml-[550px] mt-[100px]'>
        <div className='border border-[#484283] bg-[#484283] w-[380px] h-[402px] rounded-[5px] text-center'>
        <h2 className='text-[30px] text-[white] mt-[20px] font-bold'>Заполните форму и зарегистрируйтесь</h2>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="name" placeholder='номер телефона'/>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="text" placeholder='код регистрации'/>
        <button className='border border-[#F14F4F] bg-[#F14F4F] text-[16px] text-[white] w-[338px] h-[68px] rounded mt-[10px]'>Отправить</button>
      </div>
    </div>
  )
}

export default Corzinca
