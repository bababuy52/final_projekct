import React from 'react'
import ManMan from '../assets/Mask Group.jpg'
import ManMan2 from '../assets/Girl.png'
import ManMan3 from '../assets/Girl2.jpg'
import ManMan4 from '../assets/Girl3.jpg'
import ManMan5 from '../assets/Girl4.png'
import ManMan6 from '../assets/Girl5.jpg'

const Robots = () => {
  return (
    <div className='bg-[#484283]'>
      <div className='ml-[200px]'>
        <h2 className='text-[30px] text-[white] font-bold'>Наша команда</h2>
        <div className='mt-[20px] flex gap-[10px]'>
        <div className='w-[380px] h-[480px]'>
            <img src={ManMan} alt="" />
            <h2 className='text-[24px] text-[white] font-bold'>Максим Золотарев</h2>
            <h2 className='text-[16px] text-[white] '>Администратор</h2>
        </div>
        <div className='w-[380px] h-[480px]'>
            <img src={ManMan2} alt="" />
            <h2 className='text-[24px] text-[white] font-bold'>Максим Золотарев</h2>
            <h2 className='text-[16px] text-[white] '>Администратор</h2>
        </div>
        <div className='w-[380px] h-[480px]'>
            <img src={ManMan3} alt="" />
            <h2 className='text-[24px] text-[white] font-bold'>Максим Золотарев</h2>
            <h2 className='text-[16px] text-[white] '>Администратор</h2>
        </div>
        </div>
        <div className='mt-[20px] flex gap-[10px]'>
        <div className='w-[380px] h-[480px]'>
            <img src={ManMan4} alt="" />
            <h2 className='text-[24px] text-[white] font-bold'>Максим Золотарев</h2>
            <h2 className='text-[16px] text-[white] '>Администратор</h2>
        </div>
        <div className='w-[380px] h-[480px]'>
            <img src={ManMan5} alt="" />
            <h2 className='text-[24px] text-[white] font-bold'>Максим Золотарев</h2>
            <h2 className='text-[16px] text-[white] '>Администратор</h2>
        </div>
        <div className='w-[380px] h-[480px]'>
            <img src={ManMan6} alt="" />
            <h2 className='text-[24px] text-[white] font-bold'>Максим Золотарев</h2>
            <h2 className='text-[16px] text-[white] '>Администратор</h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Robots
