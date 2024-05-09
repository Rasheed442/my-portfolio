import React, { useEffect } from "react";
import style from "../styles/project.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsFillFolderFill, BsGithub } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { agency1, backup1, tokenize1 } from "../public/Projects";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="Project" className={style.headline}>
        <h1>/ Projects</h1>
        <div className={style.line}></div>
      </div>

      <div className={style.slider}>
        <figure>
          <Image src={backup1} priority width={200} height={200} />
          <Image src={agency1} priority width={200} height={200} />
          <Image src={tokenize1} priority width={200} height={200} />
          <Image src="/proj2.png" priority width={200} height={200} />
          <Image src="/proj3.png" priority width={200} height={200} />
          {/* <Image src="/proj4.png" priority width={200} height={200} /> */}
        </figure>
      </div>

      {/* <h1
        style={{
          padding: "30px",
          marginLeft: "7rem",
          fontSize: "30px",
          color: "#97DECE",
        }}
      >
        Check Out Project .....
      </h1> */}
      <div className={style.grid}>
        <Link href="/project/backupcash">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Backup Cash.</h3>
            </div>
            <p>
              Backup Cash is a secure and automated savings app that allows you
              earn higher interest on deposits than your bank. It helps make
              saving little amounts of money easy, so you can reach your goals
              faster.
            </p>

            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link>

        <Link href="/project/agency-banking-system">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Agent management System.</h3>
            </div>
            <p>
              A central comprehensive, multi-functional management System that
              can help automate and track all processes performed in the agency
              banking ecosystem on several different levels.
            </p>

            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link>
        <Link href="/project/tokenization">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Tokenization</h3>
            </div>
            {/* <p>
              Backup cash is a secure and automated savings app that allows you
              earn higher interest on deposits than your bank. it helps make
              little amount of money easy, so you can reach your faster.
            </p> */}

            {/* <p>React JS || Javascript || Next JS</p> */}
          </div>
        </Link>

        <Link href="https://ransomwash.vercel.app">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">RANSOM-WASH</h3>
            </div>
            <p>
              High-quality hand wash, affordable prices. Get washed right where
              you parked at your office, apartment, or home.
            </p>

            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link>

        <Link href="https://tanirestorant.vercel.app">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Tanis Restaurant</h3>
            </div>
            <p>
              Welcome to the world of Tasty & Fresh Food.Our vision is to give
              everyone easy access to anything in their city.
            </p>

            <p>React JS || Javascript || Next JS || Mongodb</p>
          </div>
        </Link>

        <Link href="https://rashcloud.vercel.app">
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Ransom Clouds For Hosting</h3>
            </div>
            <p>
              Cloud Hosting for Pros Deploy your website in less than 60 seconds
            </p>

            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link>

        <Link href="https://ransomtrade.vercel.app">
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Ransom Trade</h3>
            </div>
            <p>
              Jump Start Your Portfolio Ransom trade is the easiest place to buy
              and sell crytocurrency. Sign up and get started today.
            </p>
            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link>

        <Link href="https://hauk.vercel.app">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Hauskino Movies</h3>
            </div>
            <p>
              Unlimited films, Tv Programmes and more. watch anywhere and
              anytime
            </p>

            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link>
        {/* <Link href="https://rashdashboard.vercel.app">
          {" "}
          <div
            className={style.main}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
             <div className={style.flex}>
              <div className={style.icon}>
                <BsFillFolderFill size={25} />
                <BsGithub size={25} />
              </div>
              <h3 className="text-red-500">Rash-Dasg</h3>
            </div>
            <p>Static Site</p>

            <p>React JS || Javascript || Next JS</p>
          </div>
        </Link> */}
      </div>

      <div className={style.footer}>
        <p>Built and Designed by Abdulrauf Rasheed</p>
        <p>All rights reserved &copy;</p>
        <div className={style.socials}>
          <Link
            href="mailto:abdulraufrasheed15@gmail.com"
            style={{ color: "#97DECE" }}
          >
            <AiOutlineMail size={25} />
          </Link>
          <Link
            href="https://github.com/Rasheed442"
            style={{ color: "#97DECE" }}
          >
            <AiOutlineGithub size={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdulrauf-rasheed-ba2530222/"
            style={{ color: "#97DECE" }}
          >
            <AiFillLinkedin size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
