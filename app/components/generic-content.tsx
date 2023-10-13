import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import logo2 from '@/public/Logo2.png';
import React from 'react'

const GenericContent = () => {
  return (
    <>
    {/* <div className='flex justify-center p-20'> */}
            <div className="flex">
            <div className="flex mx-10 w-3/8 flex-col justify-center items-start p-10">
                <div className="flex flex-col justify-start items-start">
                    <div className="py-2 text-blue-600 text-sm font-medium leading-tight tracking-wide">STRATEGIES</div>
                    <div className="py-2 self-stretch text-slate-800 text-4xl font-normal">Excelling synergy</div>
                </div>
                <div className="py-10">
                    <p className='text-neutral-900 text-lg'>We need to build a culture of innovation to stay ahead of the curve. By fostering a culture of creativity and experimentation, we can encourage our teams to think outside the box and come up with new and exciting ideas.</p>
                </div>
                {/* <div className="Button h-[52px] px-6 py-3 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex"> */}
                    <Button className="px-6 py-6 bg-blue-600 rounded-full text-stone-50 text-sm font-medium">View more</Button>
                {/* </div> */}
            </div>
            <div className="flex flex-col justify-start mr-16">
                <div className="flex justify-end py-5">
                    <Card className='mx-5 px-10 py-10 border border-zinc-300 flex-col'>
                    <Avatar className='mx-6'>
                        <AvatarImage src='https://github.com/shadcn.png'/>
                    </Avatar>
                        <CardHeader className='text-xl font-semibold'>Disruptive innovation</CardHeader>
                        <CardContent>
                            <p>A new technology, product, or service that disrupts the older existing market and creates a new one.</p>
                        </CardContent>

                    </Card>
                    <Card className='mx-5 px-10 py-10 border border-zinc-300 flex-col'>
                    <Avatar className='mx-6'>
                        <AvatarImage src='https://github.com/shadcn.png'/>
                    </Avatar>
                        <CardHeader className='text-xl font-semibold'>Disruptive innovation</CardHeader>
                        <CardContent>
                            <p>The ability of a business or system to handle an increasing amount of work or growth without sacrificing performance.</p>
                        </CardContent>

                    </Card>

                </div>
                <div className="flex justify-end py-5">
                    <Card className='mx-5 px-10 py-10 border border-zinc-300 flex-col'>
                    <Avatar className='mx-6'>
                        <AvatarImage src='https://github.com/shadcn.png'/>
                    </Avatar>
                        <CardHeader className='text-xl font-semibold'>Synergy</CardHeader>
                        <CardContent>
                            <p>The interaction of multiple elements in a system to produce an effect greater than the sum of their individual effects.</p>
                        </CardContent>

                    </Card>
                    <Card className='px-10 mx-5 py-10 border border-zinc-300 flex-col'>
                    <Avatar className='mx-6'>
                        <AvatarImage src='https://github.com/shadcn.png'/>
                    </Avatar>
                        <CardHeader className='text-xl font-semibold'>Paradigm shift</CardHeader>
                        <CardContent>
                            <p>A fundamental change in approach or underlying assumptions that leads to a new way of thinking or operating.</p>
                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default GenericContent