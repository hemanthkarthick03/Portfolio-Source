import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[175px] max-w-7xl mx-auto flex flex-row items-start gap-2`}>
        <div className='flex flex-col mt-4 justify-center items-center mr-3'>
          <div className='w-5 h-5 rounded-full bg-[#6C63FF]' /> {/* Light Purple */}
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#6C63FF] to-[#B48FF8]' /> {/* Light Purple to Pink Gradient */}
        </div>

        <div className="flex flex-col items-start animate-bounce animate-infinite h-10">
          <h2 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#FFD700]'>Hemanth<br /></span>Karthick {/* Gold */}
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-[#D3D3D3]`}> {/* Light Gray */}
            Software Developer 👨‍💻🖥️<br className='sm:hidden' /> <br />
            AI & LLM Engineer 🤖👨‍🔧<br className='sm:hidden' /><br />
            Web Developer 🌐🎨 <br className='sm:hidden' />
          </p>
        </div> 

        <ComputersCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#FFD700] flex justify-center items-start p-2'> {/* Gold Border */}
              <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-[#FFD700] mb-1' /> {/* Gold */}
            </div>
          </a>
        </div>
      </div> 
    </section>
  );
};

export default Hero;
