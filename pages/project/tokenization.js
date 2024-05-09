import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import style from "../../styles/Project/backupcash.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import {
  backup1,
  backup2,
  backup3,
  tokenize1,
  tokenize2,
} from "../../public/Projects";
import Link from "next/link";
function tokenization() {
  return (
    <ProjectLayout link={() => (window.location = "/")}>
      <div className={style.header}>
        <span>
          Web Development{" "}
          <span style={{ color: "#97DECE", fontSize: "30px" }}>.</span>
        </span>
        <h2>Tokenization</h2>
        <div className={style.about}>
          {/* <p>
            {" "}
            Backup Cash is a secure and automated savings app
            <br /> that allows you earn higher interest on deposits than your
            bank.
            <br /> It helps make saving little amounts of money easy, so you can
            <br />
            reach your goals faster.
          </p> */}
          <Link href="https://tokenization.vercel.app/">
            <span>
              Open Project <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className={style.projectFolder}>
        <Image src={tokenize1} priority alt="" />
        <Image src={tokenize2} priority alt="" />
      </div>
    </ProjectLayout>
  );
}

export default tokenization;
