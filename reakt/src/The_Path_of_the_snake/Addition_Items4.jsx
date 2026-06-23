import React from 'react'
import './input.css'
import Header from '../Header_dop4'
import p from '../img/0001.webp'
import po from '../img/012.webp'
import o from '../img/013.webp'
import z from '../img/008.webp'
import z2 from '../img/007.webp'
import z3 from '../img/009.webp'
import Foter from '../Foter_dop4'

const Addition_Items = () => {
  return (
    <section><Header></Header>
      <div className='bg-gray-800 p-5 text-2xl'>
      <h3 className="text-slate-300 normal-case indent-3 font-serif leading-normal">В дополнении появляется много обычных предметов.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={p} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-300 pl-16 normal-case font-bold'>
               Карта снаряжение
              </p>
               </div>
              </div>
      <h3 className="text-slate-300 normal-case indent-3 font-serif leading-normal">В дополнении появляется несколько новых видов оружие.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={po} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='pl-16 text-slate-300 normal-case font-bold'>
               Карта оружие
              </p>
               </div>
              </div>
      <h3 className="text-slate-300 normal-case indent-3 font-serif leading-normal">В дополнении появляется несколько новых уникальных веший.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={o} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-300 normal-case font-bold'>
               Карта уникальные веши
              </p>
               </div>
              </div>
      <h3 className="text-slate-300 normal-case indent-3 font-serif leading-normal">В дополнении появляется два новых заклинание.</h3>
      <div className='flex justify-center p-3'>
            <div className=''>
              <img src={z} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-300  normal-case font-bold'>
               Карта заклинания
              </p>
               </div>
              <div className=''>
              <img src={z2} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-300 pl-3 normal-case font-bold'>
               Карта заклинания
              </p>
               </div>
              <div className=''>
              <img src={z3} alt="" className='p-4 w-[230px] h-[340px] '/>
              <p className='text-slate-300 pl-3 normal-case font-bold'>
               Карта заклинания
              </p>
               </div>
              </div>
      </div>
      <Foter></Foter>
    </section>
  )
}

export default Addition_Items