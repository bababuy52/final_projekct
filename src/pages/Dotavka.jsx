import React from 'react'

const Dotavka = () => {
  return (
    <div className='ml-[200px] mt-[80px]'>
        <div className='flex gap-[390px]'>
        <div className='border border-[#444B58] bg-[#444B58] w-[380px] h-[520px] rounded-[5px] text-center'>
        <h2 className='text-[30px] text-[white] font-bold mt-[30px]'>
        Доставка и оплата
        </h2>
        <h2 className='text-[16px] text-[white] mt-[20px]'>Заполните форму и оплатите</h2>
        <h2 className='text-[16px] text-[white]'>свою корзину</h2>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="name" placeholder='номер карты'/>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="text" placeholder='да/та'/>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="text" placeholder='CCV'/>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="text" placeholder='пин-код'/>
        <button className='border border-[#F14F4F] bg-[#F14F4F] text-[16px] text-[white] w-[338px] h-[68px] rounded mt-[10px]'>Отправить</button>
      </div>
      <div className='border border-[#484283] bg-[#484283] w-[380px] h-[402px] rounded-[5px] text-center'>
        <h2 className='text-[30px] text-[white] font-bold mt-[30px]'>
        Доставка и оплата
        </h2>
        <h2 className='text-[16px] text-[white] mt-[20px]'>Заполните форму и забирте</h2>
        <h2 className='text-[16px] text-[white]'>свою корзину</h2>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="name" placeholder='место доставки'/>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="text" placeholder='дата доставки'/>
        <button className='border border-[#F14F4F] bg-[#F14F4F] text-[16px] text-[white] w-[338px] h-[68px] rounded mt-[10px]'>Отправить</button>
      </div>
    </div>
    </div>
  )
}

export default Dotavka
