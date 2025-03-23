import React from 'react'
import Kamera from '../assets/Kamera.svg'
import Sana from '../assets/Sana.png'
import VK from '../assets/VK.svg'

const Kontakt = () => {
  return (
    <div className='bg-[#F3F6F6]'>
      <div className='ml-[200px]'>
      <h2 className='text-[30px] text-[#444B58] font-bold'>Контакты</h2>
      <div className='border border-[#F3F6F6] w-[349px] h-[0px]'>
        <div>
        <div>
        <div className='flex gap-[8px] mt-[60px]'>
        <h2 className='text-[14px] text-[#B2B5BB]'>Главный офис</h2>
        <h2 className=' border border-[white] bg-[white] w-[20px] h-[19px] rounded-[50%] text-center'>
          ?
        </h2>
        </div>
        <h2 className='text-[30px] text-[#444B58] mt-[40px]'>+7 800 789 89 89</h2>
        <h2 className='text-[18px] text-[#444B58]'>г. Санкт-Петербург, Комсомольская, 43 к1</h2>
      </div>
      <div>
        <div className='flex gap-[8px] mt-[50px]'>
        <h2 className='text-[14px] text-[#B2B5BB]'>отдел продаж</h2>
        </div>
        <h2 className='text-[30px] text-[#444B58] mt-[40px]'>+7 800 789 89 89</h2>
        <h2 className='text-[18px] text-[#444B58]'>г. Санкт-Петербург, Комсомольская, 43 к1</h2>
      </div>
      <div className='mt-[20px] flex gap-[20px]'>
        <img src={VK} alt="" />
        <img src={Kamera} alt="" />
      </div>
        </div>
      </div>
      <div className='ml-[500px]'>
        <img src={Sana} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Kontakt
