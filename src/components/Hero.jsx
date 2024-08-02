import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div className={'${styles.paddingX} absolute inset-0 top-[175px] max-w-7xl mx-auto flex flex-row items-start gap-5'}>
        <div className='flex flex-col mt-4 justify-center items-center mr-3'>
          <div className='w-5 h-5 rounded-full bg-[#b84848]' />
          <div className='w-1 sm:h-80 h-80 violet-gradient' />
        </div>

        <div class="animate-bounce animate-infinite h-5">
          <h2 className={`${styles.heroHeadText} text-white`}><span className='text-[#f74848]'>Hemanth<br /></span>Karthick</h2>
          <p className={`${styles.heroSubText} mt-2 text-white-98`}>Software Developer 👨‍💻🖥️<br className='sm:hidden' /> <br /> AI & LLM Engineer 🤖👨‍🔧<br className='sm:hidden' /><br /> Web Developer 🌐🎨 <br className='sm:hidden' /></p>

        </div> 
        {/* <ComputersCanvas /> */}

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev animate={{y:[0,24,0]}} transition={{duration: 1.5, repeat: Infinity, repeatType:'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1" />

            </div>
          </a>
        </div>
      </div> 
    </section>
  )
}

export default Hero