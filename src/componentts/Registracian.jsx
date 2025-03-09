import React from 'react'
import Logo from '../assets/Logo.png'
import Sobaka from '../assets/Sobaka.png'

const Registracian = () => {
  return (
    <div className='ml-[200px] mt-[80px]'>
        <div className='flex gap-[120px]'>
        <div className='border border-[#484283] bg-[#484283] w-[380px] h-[402px] rounded-[5px] text-center'>
        <h2 className='text-[30px] text-[white] font-bold mt-[30px]'>
        Есть вопросы?
        </h2>
        <h2 className='text-[16px] text-[white] mt-[20px]'>Заполните форму и наш</h2>
        <h2 className='text-[16px] text-[white]'>менеджер свяжется с вами</h2>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="name" placeholder='Ваше имя'/>
        <input className='w-[340px] h-[59px] bg-[white] rounded mt-[10px] ml-[20px] text-[16px] text-[#B2B5BB] mr-[240px]' type="text" placeholder='Номер телефона'/>
        <button className='border border-[#F14F4F] bg-[#F14F4F] text-[16px] text-[white] w-[338px] h-[68px] rounded mt-[10px]'>Отправить</button>
      </div>
      <div>
        <img className='ml-[250px]' src={Logo} alt="" />
        <img src={Sobaka} alt="" />
      </div>
    </div>
        </div>
  )
}

export default Registracian
