import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" area-label="Home">
          <span className="text-white text-4xl font-bold">CPKR</span>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/chinthaparthi-prashanth-kumar-reddy-059945288/"
        target="_blank"
        rel="noopener noreferrer"
        area-label="Linkedin">
          <FaLinkedin />
        </a>
        <a href="https://github.com/prashanth-k-1"
        target="_blank"
        rel="noopener noreferrer"
        area-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_prashanth_k_r/"
        target="_blank"
        rel="noopener noreferrer"
        area-label="LinkedIn">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
