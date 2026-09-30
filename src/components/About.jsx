import TiltModule from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import SectionEyebrow from './SectionEyebrow';

const Tilt = TiltModule.default;

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt
      options={{ max: 6, scale: 1.01, speed: 450 }}
      className="h-full w-full"
    >
      <motion.article
        variants={fadeIn('up', 'spring', 0, 0.55)}
        whileHover={{ y: -7, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
        whileTap={{ scale: 0.99 }}
        className="green-pink-gradient group h-full rounded-2xl p-[1px] shadow-card transition-shadow duration-300 hover:shadow-[0_18px_55px_rgba(111,45,189,0.22)]"
      >
        <div className="flex h-full min-h-[220px] flex-col rounded-2xl bg-tertiary p-5 sm:p-6">
          <div className="mb-7 flex items-center justify-between">
            <span className="font-mono text-xs text-[#8de4cf]">
              0{index + 1}
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <img src={icon} alt="" className="h-7 w-7 object-contain" />
            </span>
          </div>
          <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-secondary">
            {description}
          </p>
        </div>
      </motion.article>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16 lg:px-0">
      <motion.div variants={textVariant(0.05)}>
        <div className="grid gap-5 border-b border-white/10 pb-7 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)] md:items-end">
          <div>
            <SectionEyebrow label="About" number="01" />
            <h2 className={`${styles.sectionHeadText} mt-2`}>
              Overview<span className="text-[#8de4cf]">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-secondary md:justify-self-end sm:text-base sm:leading-7">
            I build useful software across the web, cloud, and AI, with a focus
            on clear experiences and practical outcomes.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.12, 0.6)}
        className="mt-7 grid gap-4 text-sm leading-6 text-secondary sm:mt-8 sm:grid-cols-2 sm:gap-8 sm:text-base sm:leading-7"
      >
        <p>
          My work spans Python, Java, JavaScript, and AWS, from web applications
          to data-driven tools.
        </p>
        <p>
          I explore LLMs, machine learning, and Web3 through hands-on projects
          and competitions.
        </p>
      </motion.div>

      <div className="mb-4 mt-10 flex items-center gap-4 sm:mt-12">
        <p className="font-mono text-xs text-secondary">FOCUS AREAS</p>
        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        <span className="font-mono text-xs text-[#8de4cf]">04</span>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-5"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');