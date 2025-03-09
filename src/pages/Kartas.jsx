import React from 'react'
import Karta from '../assets/Karta.png'

const Kartas = () => {
  return (
    <div>
        <div className='br br-[#484283] bg-[#484283]'>
        <h2 className='text-[#FFFFFF] text-[36px] ml-[200px]'>
        Контакты
        </h2>
      </div>
      <div className='ml-[200px] flex gap-[20px] mt-[50px] mt-[100px]'>
      <div className=' border-[2px] border-[#6F73EE] w-[145px] h-[53px] rounded text-center'>
        <button className='text-[#6F73EE] text-[15px] mt-[5px]'>Москва и МО</button> 
        </div>
        <div className=' border-[2px] border-[#F4F7FB] bg-[#F4F7FB] w-[265px] h-[53px] rounded text-center'>
        <button className='text-[#5D6C7B] text-[15px] mt-[5px]'>Санкт-Петербург и Ленобласть</button> 
        </div>
        <div className=' border-[2px] border-[#F4F7FB] bg-[#F4F7FB] w-[128px] h-[53px] rounded text-center'>
        <button className='text-[#5D6C7B] text-[15px] mt-[5px]'>Краснодар</button> 
        </div>
        <div className=' border-[2px] border-[#F4F7FB] bg-[#F4F7FB] w-[96px] h-[53px] rounded text-center'>
        <button className='text-[#5D6C7B] text-[15px] mt-[5px]'>Минск</button> 
        </div>
        <div className=' border-[2px] border-[#F4F7FB] bg-[#F4F7FB] w-[201px] h-[53px] rounded text-center'>
        <button className='text-[#5D6C7B] text-[15px] mt-[5px]'>Пункты выдачи CDEK</button>
        </div>
    </div>
    <div className='ml-[200px] flex mt-[100px]'>
        <div className='w-[500px] h-[450px]'>
        <h2 className='text-[20px] text-[#282739] font-bold'>Адрес магазина и сервисного центра:</h2>
    <div>
        <div className='flex gap-[20px] mt-[50px]'>
        <h2 className='text-[18px] text-[#282739] font-bold'>ул. Ткацкая, 5 стр. 16 (м. Семеновская)</h2>
        <h2 className='text-[14px] text-[#6F73EE]'>Как пройти</h2>
        </div>
        <div className='mt-[10px]'>
            <h2 className='text-[14px] text-[#5D6C7B]'>
            Пн-Вс 10:00 - 20:00 (магазин)
            </h2>
            <h2 className='text-[14px] text-[#5D6C7B]'>
            Пн-Вс 10:00 - 20:00 (сервисный центр)
            </h2>
        </div>
        <div className='flex gap-[20px] mt-[50px]'>
            <div>
                <h2 className='tetx-[14px] text-[#5D6C7B]'>Магазин</h2>
                <h2 className='text-[18px] text-[#282739]'>+7 (499) 406-15-79</h2>
            </div>
            <div>
                <h2 className='tetx-[14px] text-[#5D6C7B]'>Сервисный центр</h2>
                <h2 className='text-[18px] text-[#282739]'>+7 (499) 350-76-92</h2>
            </div>
        </div>
        <div>
            <div className='mt-[50px]'>
            <h2 className='text-[14px] text-[#282739]'><span className='font-bold'>Бесплатная парковка</span> (для въезда предварительно запросите</h2>
            <h2 className='text-[14px] text-[#282739]'>у менеджера пропуск)</h2>
            </div>
            <div className='mt-[20px]'>
                <h2 className='text-[14px] text-[#282739]'>Перед посещением магазина, пожалуйста, <span className='font-bold'>уточняйте наличие</span></h2>
                <h2 className='text-[14px] text-[#282739]'><span className='font-bold'>рассматриваемой вами модели по телефону</span> у менеджера.</h2>
            </div>
            <div className='mt-[20px]'>
                <h2 className='text-[14px] text-[#282739]'><span className='font-bold'>Возьмите с собой паспорт или другой документ,</span> удостоверяющий</h2>
                <h2 className='text-[14px] text-[#282739]'>личность – он может понадобиться для прохождения через</h2>
                <h2 className='text-[14px] text-[#282739]'>пропускной пункт.</h2>
            </div>
        </div>
        </div>
    </div>
    <div className='ml-[90px]'>
    <img src={Karta} alt="" />
    </div>
    </div> 
    </div>
  )
}

export default Kartas