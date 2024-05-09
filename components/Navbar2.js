import React from "react";
import style from "../styles/navbar.module.css";
import Link from "next/link";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.container} data-aos="fade-up">
      <div className={style.main}>
        <Link href="/">
          <p>/. Home</p>
        </Link>
        <Link href="/">
          <p>/. About</p>
        </Link>
        <Link href="/">
          <p>/. Expertise</p>
        </Link>
        <Link href="/">
          <p>/. Experience</p>
        </Link>
        <Link href="/">
          <p>/. Work</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar2;
