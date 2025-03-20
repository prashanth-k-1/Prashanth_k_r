import { MdDisabledVisible } from "react-icons/md"
import profilepic from "../assets/P1.png"
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import { BsTransparency } from "react-icons/bs"
import { GiDuration } from "react-icons/gi"

const containerVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration : 0.5,
      staggerChildren: 0.5,
    }
  }
}
const childVariants = {
  hidden: {opacity:0, x: -100},
  visible: {opacity: 1,x: 0, transition: {duration: 0.5}}
  
}
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:p-8">
          <motion.img src={profilepic} alt="Prashanth" className="" width={550} height={550} 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}}/>
        </div>
        </div>
        <div className="w-full lg:w-1/2">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center lg:items-start mt-10">
          <motion.h2 
           whileInView={{opacity:1, x: 0}}
           initial={{opacity:0, x:-100}}
           transition={{duration: 1}}
          className="pb-2 text-4xl tracking-tighter lg:text-6xl">CHINTHAPARTHI PRASHANTH KUMAR REDDY</motion.h2>
          <motion.span 
           whileInView={{opacity:1, x: 0}}
           initial={{opacity:0, x:-100}}
           transition={{duration: 1}}
          className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
          <motion.p 
           whileInView={{opacity:1, x: 0}}
           initial={{opacity:0, x:-100}}
           transition={{duration: 1}}
          className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
          I am a full-stack developer passionate about building scalable and high-performance web applications. With expertise in React for front-end development and Java for back-end systems, I create seamless digital experiences with dynamic interfaces and efficient architectures. Proficient in HTML, CSS, JavaScript, React, and Java, I focus on developing innovative solutions that enhance functionality, optimize performance, and deliver exceptional user experiences.
          </motion.p>
          <motion.a 
           whileInView={{opacity:1, x: 0}}
           initial={{opacity:0, x:-100}}
           transition={{duration: 1}}
          href="/CC40.pdf" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
          Download Resume
          </motion.a>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
 