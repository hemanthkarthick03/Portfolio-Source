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
        <div className='p-10'>
          <div class="animate-flip-up">
          <p className={styles.heroSubText }>Introduction</p>
            <div class="animate-pulse animate-infinite">
            <h2 className={styles.heroHeadText}>Overview</h2>
            </div>
          </div>  
        </div>

      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="p-10 mt-4 text-secondary
      text-[16px] max-w-6xl leading-[32px] ">
      <ol>
      <li>👔 Ambitious software developer passionate about leveraging technology to solve real-world problems.</li>
      <br />
      <li>📚 Proficient in training large language models (LLMs) using LangChain with LLaMA and other Hugging Face models.</li>
      <br />
      <li>🧠 Fast and independent learner with a strong interest in AI, Machine Learning, Blockchain, and Data Science.</li>
      <br />
      <li>🧑🏻‍💻 Experienced in developing applications using Python, Java, C/C++, and JavaScript, with hands-on experience in AWS cloud solutions.</li>
      <br />
      <li>💡 Proficient in creating data-driven solutions using tools like Scikit-Learn, Pandas, TensorFlow, and MongoDB.</li>
      <br />
      <li>🌐 Developed and deployed web applications, enhancing user experience and optimizing performance.</li>
      <br />
      <li>🏆 Recognized for innovative projects in hackathons and competitions, including AI and Blockchain-based solutions.</li>
      <br />
      <li>📊 Skilled in data analysis, machine learning model development, and predictive analytics to drive business insights.</li>
      <br />
      <li>📈 Continuously expanding knowledge in deep learning, natural language processing, and advanced data science techniques.</li>
      </ol>
      </motion.p>
      
      <div className="p-10 mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br/><br/><br/>
    </>
  )
}

export default SectionWrapper(About,"about")