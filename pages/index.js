import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/mainPage/Navbar'
import Hero from '../components/mainPage/Hero'
import AfterHero from '../components/AfterHero'
import Grid from '../components/mainPage/Grid'
import AfterGrid from '../components/mainPage/AfterGrid'
import ReasonsToUseChatBot from '../components/mainPage/ReasonsToUseChatBot'
import Footer from '../components/mainPage/Footer'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"/>
      */}
    
      </Head>
      <Navbar/>
      <Hero/>
      <AfterHero/>
      <Grid/>
      <AfterGrid/>
      <ReasonsToUseChatBot/>
      <Footer/>
    </div> 
  )
}
