import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration: 1}}
        className="my—4">
            Pileru,Chittoor,Andra Pradesh (517214)
        </motion.p>
        <motion.p 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration: 1}}
        className="my-4">
            +91 7799333794
        </motion.p>
        <a href="mailto:prashanthkr7799@gmail.com" className="border-b">
            prashanthkr7799@gmail.com
        </a>
    </div>
    </div>
   
  )
}
export default Contact
