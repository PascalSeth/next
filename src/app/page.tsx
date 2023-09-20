import Header from '@/components/Header'
import Homepage from '@/components/Homepage'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='h-screen w-full  overflow-x-hidden z-0'>
    <Header/>
    <section id='/'>
    <Homepage/>
    </section>
   </main>
  )
}
