import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-[#484283] text-center'>
      <div>
      <h2 className='text-[200px] text-[white] font-bold'>Ошибка 404</h2>
      </div>
      <h2 className='text-[50px] text-[white]'>Кажется вы перешли не по той сылке</h2>   
      <button className='border border-[#F14F4F] bg-[#F14F4F] w-[213px] h-[50px] rounded-[5px] text-[white] text-[20px]'>
                <a href="http://localhost:5173/">вернутся</a>
            </button>
    </div>
  )
}

export default NotFound
