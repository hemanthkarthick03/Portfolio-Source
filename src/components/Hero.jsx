import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      <div className={`${styles.paddingX} absolute inset-0 top-[150px] z-10 mx-auto max-w-7xl`}>
        <div className="flex items-start gap-3 sm:gap-5">
          <div className="mt-4 flex flex-col items-center">
            <span className="h-3 w-3 rounded-full bg-[#8de4cf] shadow-[0_0_18px_rgba(141,228,207,0.7)]" />
            <span className="h-40 w-px bg-gradient-to-b from-[#8de4cf] via-[#8de4cf]/40 to-transparent sm:h-64" />
          </div>

          <motion.div
            variants={staggerContainer(0.12, 0.08)}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeIn('up', 'tween', 0, 0.55)}
              className="font-mono text-xs text-[#8de4cf] sm:text-sm"
            >
              SOFTWARE / AI / WEB
            </motion.p>
            <motion.h1
              variants={fadeIn('up', 'tween', 0, 0.65)}
              className={`${styles.heroHeadText} mt-3 text-white`}
            >
              Hemanth<br />
              <span className="text-[#8de4cf]">Karthick.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 'tween', 0, 0.65)}
              className={`${styles.heroSubText} mt-4 max-w-xl text-[#d3d3d3]`}
            >
              I build useful digital experiences with software, data, and AI.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 'tween', 0, 0.55)}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="rounded-lg bg-[#8de4cf] px-5 py-3 text-sm font-semibold text-[#10141a] transition-colors hover:bg-white"
              >
                Explore my work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#8de4cf] hover:text-[#8de4cf]"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to introduction"
        className="absolute bottom-8 left-1/2 z-10 flex h-14 w-8 -translate-x-1/2 items-start justify-center rounded-full border border-white/30 p-2 transition-colors hover:border-[#8de4cf]"
      >
        <motion.span
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-2 w-2 rounded-full bg-[#8de4cf]"
        />
      </a>
    </section>
  );
};

export default Hero;
