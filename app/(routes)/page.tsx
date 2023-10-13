import Image from 'next/image'
import Hero from '../components/Hero'
import LinkGrid from '../components/LinkGrid'
import StatsGrid from '../components/StatsGrid'
import HeroBanner from '../components/HeroBanner'
import PartnersGrid from '../components/PartnersGrid'
import HeroThree from '../components/HeroThree'
import GenericContent from '../components/generic-content'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <>
    {/* <Hero title="An Agency Website Template" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi."/> */}
    <HeroBanner/>
    {/* <HeroThree/> */}
    {/* <StatsGrid/> */}
  
    <PartnersGrid/>
    {/* <Separator className=''/> */}
    <GenericContent/>
    <LinkGrid title='Our Services' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
        saepe laborum.'/>
    </>
  )
}
