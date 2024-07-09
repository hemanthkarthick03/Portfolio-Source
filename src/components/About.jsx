import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard= ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>  
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
      <br /><br />
        <div class="animate-flip-up">
        <p className={styles.heroSubText }>Introduction</p>
        <div class="animate-pulse animate-infinite">
        <h2 className={styles.heroHeadText}>Overview</h2>
        </div>
        </div>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary
      text-[16px] max-w-6xl leading-[32px] ">
      <br/>
      <ol>
      <li>👔 Ambitious and passionate about learning cutting-edge technologies.</li>
      <br />
      <li>🧠 Fast and independent learner with keen interest in Deep Learning, Blockchain, Data Science, Machine Learning Algorithms, and Analytics.</li>
      <br />
      <li>🧑🏻‍💻 Experienced in utilizing IBM Watson, Pandas, Seaborn, and Microsoft Excel for data analytics.</li>
      <br />
      <li>💡 Skilled in programming languages such as C, C++, JAVA, Python, JavaScript, SQL, React, and Ethereum.</li>
      <br />
      <li>🏆 Awarded prizes for presenting innovative ideas in paper presentations and project displays at events and hackathons.</li>
      <br />
      </ol>
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br/><br/><br/>
    </>
  )
}

export default SectionWrapper(About,"about")