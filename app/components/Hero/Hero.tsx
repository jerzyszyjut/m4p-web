'use client'

import { FaDiscord } from "react-icons/fa"

const Hero = () => {
  const redirectToDiscord = () => {
    console.log('redirecting to discord');
    window.location.href = 'https://discord.gg/minecraft4politics-734417514934698065';
  }

  return (
    <>
      <h1 className='text-5xl text-center'>Wystartował najlepszy serwer politczny Minecraft w Polsce</h1>
      <button className='flex items-center justify-center p-4 text-2xl bg-tertiary m-8 rounded' onClick={() => redirectToDiscord()}>
        <FaDiscord />
        <span className='px-4'>
          Dołącz do niepowtarzalnej przygody
        </span>
      </button>
    </>
  )
}

export default Hero;
