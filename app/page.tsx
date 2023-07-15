import ShadedBackgroundImage from './components/ShadedBackgroundImage/ShadedBackgroundImage';
import ZielonyParlament from './assets/1685616731122.png';
import { FaDiscord } from 'react-icons/fa';
import Hero from './components/Hero/Hero';
import ContryChoice from './components/CountryChoice/CountryChoice';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className='w-full flex flex-col items-center justify-center' style={{
        minHeight: '80vh',
        overflow: 'hidden',
      }}>
        <ShadedBackgroundImage image={ZielonyParlament} opacity={0.6}/>
        <Hero />
      </div>
      <ContryChoice />
    </main>
  )
}
