import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import style from "../../styles/Project/backupcash.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import {
  agency1,
  agency2,
  agency3,
  agency4,
  agency5,
  agency6,
} from "../../public/Projects";
import Link from "next/link";
function agenycybankingsystem() {
  return (
    <ProjectLayout link={() => (window.location = "/")}>
      <div className={style.header}>
        <span>
          Web Development{" "}
          <span style={{ color: "#97DECE", fontSize: "30px" }}>.</span>
        </span>
        <h2>Agency Banking System</h2>
        <div className={style.about}>
          <p>
            A central comprehensive, multi-functional management System that can
            <br />
            help automate and track all processes performed in the agency
            banking
            <br /> ecosystem on several different levels.
          </p>

          <Link href="https://upagentmanager.tm30.net/">
            <span>
              Open Project <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className={style.projectFolder}>
        <Image src={agency1} priority alt="" />
        <Image src={agency2} priority alt="" />
        <Image src={agency3} priority alt="" />
        <Image src={agency4} priority alt="" />
        <Image src={agency5} priority alt="" />
        <Image src={agency6} priority alt="" />
      </div>;
    </ProjectLayout>
  );
}

export default agenycybankingsystem;
