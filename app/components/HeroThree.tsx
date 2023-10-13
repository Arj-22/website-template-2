import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const HeroThree = () => {
  return (

    <>
        <div className="justify-center px-40 py-10 bg-sky-100 flex-col items-center">
            
            <div className="flex-col justify-center items-center flex">
            <h2 className="w-auto text-center text-slate-800 text-8xl p-20">Smart Business Solutions for Success</h2>
            <p className="w-auto text-center text-slate-800 text-2xl">Partner with Us for Tailored Services and Maximum Efficiency in Operations</p>

            <div className="flex w-2/3  items-center space-x-2 p-20 ">
            <Input type="email" placeholder="Enter Your Email..." className='rounded-full  h-[70px] placeholder: px-10 text-2xl'/>
            <Button type='submit' className='Button w-1/3 h-[60px] px-6 py-3 text-2xl bg-blue-600 rounded-full items-center gap-2 flex'>Subscribe</Button>
            </div>
            </div>
        </div>
    </>
  )
}

export default HeroThree