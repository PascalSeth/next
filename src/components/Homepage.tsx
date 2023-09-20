'use client'
import React,{useState} from 'react'
import Bus from './HomeButton/Bus';
import Cargo from './HomeButton/Cargo';
import Widgets from './Widgets';
import Why from './Why';
import Faq from './Faq';

type Props = {}

export default function Homepage({}: Props) {
    const [activeButton, setActiveButton] = useState('Bus');

    const handleButtonClick = (button) => {
      setActiveButton(button);}
  return (
    <div className='flex flex-col w-full items-center pt-5 bg-[#DEF5FB]'>
       <div className='flex'>
    <button
    className='hlinks'
        onClick={() => handleButtonClick('Bus')}
        style={{
          backgroundColor: activeButton === 'Bus' ? '#48A0FF' : '#F2F4F7',
          color: activeButton === 'Bus' ? '#F2F4F7' : '#48A0FF',
        }}
      >
        Bus
      </button>
      <button
          className='hlinks'
        onClick={() => handleButtonClick('Cargo')}
        style={{
          backgroundColor: activeButton === 'Cargo' ? '#48A0FF' : '#F2F4F7',
          color: activeButton === 'Bus' ? '#48A0FF' : '#F2F4F7',
        }}
      >
        Cargo
      </button>
    </div>  
    <div className='Bus'>
    {activeButton === 'Bus' && <Bus />}
      {activeButton === 'Cargo' && <Cargo />}

    </div>
    <div>
        <Widgets/>
    </div>
        <div>
          <Why/>
        </div>
        <section id='faq'>
<Faq/>
        </section>
    </div>
  )
}