import {
    CloudArrowUpIcon,
    CircleStackIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/24/outline';

import bgImg from '../assets/cyber-bg.png';

export const Hero = () => {
  return (
    <section className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
          <p className='text-2xl'>This is our Tech brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt="/" />
        </div>
        <div>
          <p>Data Services</p>
          <div>
            <p>Icon. App Security</p>
            <p>Icon. Dashboard Design</p>
            <p>Icon. Cloud Data</p>
            <p>Icon. API</p>
          </div>
        </div>
      </div>
    </section>
  )
}
