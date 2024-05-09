import React from "react";
import { Link } from "react-scroll";
import style from "../styles/navbar.module.css";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.container} data-aos="fade-up">
      <div className={style.main}>
        <Link to="main" spy={true} smooth={true} offset={10} duration={500}>
          <p>/. Home</p>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          <p>/. About</p>
        </Link>
        <Link to="expertise" spy={true} smooth={true} offset={0} duration={500}>
          <p>/. Expertise</p>
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p>/. Experience</p>
        </Link>
        <Link to="Project" spy={true} smooth={true} offset={0} duration={500}>
          <p>/. Work</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
