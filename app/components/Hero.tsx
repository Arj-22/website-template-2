import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface HeroProps{
    title: string;
    desc: string; 
}

const Hero: React.FC<HeroProps> = ({title, desc}) => {
  return (
    <>
        <div className='p-20 border-b-2'>
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className="max-w-4xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                    {/* Bring your Business to the <span className="text-blue-500">next level.</span> */}
                    {title}
                </h2>

                <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300 text-xl">
                    {desc}
                </p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Sign Up
                    </a>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default Hero