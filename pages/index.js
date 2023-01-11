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
