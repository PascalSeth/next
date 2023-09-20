'use client'
import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import Form from '../Form/Form'
import Image from 'next/image'
import buspic from '../../picture files/busIlustration 1.svg'

type Props = {}

export default function Bus({}: Props) {
    const [text,count]=useTypewriter({
        words:[
            'Check Bus Schedules, Compare Prices and Book Ticket Online'
        ],
        loop:false,
        delaySpeed:3000,
        

    })
  return (
<div className='flex flex-col items-center w-screen justify-center '>
      <div className='flex flex-col items-center text-center'>
      <h4 className='text-[4vh] md:text-[6vh] xl:text-[8vh] font-semibold text-[#FDB022]'>Book A Bus, Journey With Ease...</h4>
      <h5 className='text-[2vh] md:text-[2vh] xl:text-[3vh] font-[500] text-[#475467] w-full'>
        <span>
            {text}
        </span><Cursor/>
      </h5>
    </div> 
    <div>
        <Form/>
    </div>
    <div>
        <Image
        src={buspic}
        alt=''
        />
    </div>
    </div>

     )
}