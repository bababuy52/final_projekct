import React from 'react'
import Bot from "../assets/Boots.jpg"
import Check from "../assets/check.png"

const Bots = () => {
  return (
    <div className='ml-[200px] mt-[100px] br br-[#FFF4EE] bg-[#FFF4EE] w-[1180px] h-[658px]'>
      <div className='ml-[70px]'>
        <h2 className='text-[30px] font-bold text-[#444B58]'>
        Мы подберем идеальную пару для вас
        </h2>
        <h2 className='text-[16px] text-[#808080] mt-[5px]'>
        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями 
        </h2>
        <div className=' mt-[30px]'>
        <h2 className='text-[24px] font-book text-[#444B58]'>
        Какой тип кроссовок рассматриваете?
        </h2>
        <div className='flex gap-[100px]'>
        <div className='mt-[20px]'>
            <img src={Bot} alt="" />
            <div className='flex gp-[20px] mt-[5px]'>
            <img src={Check} alt="" />
            <h2 className='ml-[10px]'>кеды</h2>
            </div>
        </div>
        <div className='mt-[20px]'>
            <img src={Bot} alt="" />
            <div className='flex gp-[20px] mt-[5px]'>
            <img src={Check} alt="" />
            <h2 className='ml-[10px]'>кеды</h2>
            </div>
        </div>
        <div className='mt-[20px]'>
            <img src={Bot} alt="" />
            <div className='flex gp-[20px] mt-[5px]'>
            <img src={Check} alt="" />
            <h2 className='ml-[10px]'>кеды</h2>
            </div>
        </div>
        </div>
        <div className='flex gap-[100px]'>
        <div className='mt-[20px]'>
            <img src={Bot} alt="" />
            <div className='flex gp-[20px] mt-[5px]'>
            <img src={Check} alt="" />
            <h2 className='ml-[10px]'>кеды</h2>
            </div>
        </div>
        <div className='mt-[20px]'>
            <img src={Bot} alt="" />
            <div className='flex gp-[20px] mt-[5px]'>
            <img src={Check} alt="" />
            <h2 className='ml-[10px]'>кеды</h2>
            </div>
        </div>
        <div className='mt-[20px]'>
            <img src={Bot} alt="" />
            <div className='flex gp-[20px] mt-[5px]'>
            <img src={Check} alt="" />
            <h2 className='ml-[10px]'>кеды</h2>
            </div>
        </div>
        </div>
        <div className='flex gap-[800px] mt-[100px]'>
            <h2 className='text-[16px] text-[#808080] mt-[20px]'>
            1 из 3
            </h2>
            <button className='border border-[#444B58] w-[213px] h-[50px] rounded-[5px] text-[#444B58] text-[16px]'>
                Следующий шаг
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Bots
